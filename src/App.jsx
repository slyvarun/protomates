import React, { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesWork from './pages/ServicesWork';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import ContactCookiePopup from './components/ContactCookiePopup';

// Helper to determine initial page from URL pathname or hash
function getPageFromPath() {
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
  const path = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
  const target = hash || path;
  if (target.includes('about')) return 'about';
  if (target.includes('services') || target.includes('work')) return 'services';
  if (target.includes('contact')) return 'contact';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath);
  const [pageProps, setPageProps] = useState({});

  // Intro Sequence Stages:
  // 'typing'  -> Center screen typewriter: "PROTOMATES [LAB]"
  // 'popup'   -> 3D hardware elements pop up from down into center stage
  // 'docking' -> PROTOMATES logo glides to navbar; 3D elements glide to bg
  // 'ready'   -> Full page active; 3D elements settled in bg in static mode
  const isInitialHome = getPageFromPath() === 'home';
  const [introStage, setIntroStage] = useState(isInitialHome ? 'typing' : 'ready');
  const [typedText, setTypedText] = useState(isInitialHome ? '' : 'PROTOMATES');

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Listen for browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromPath();
      setCurrentPage(page);
      setIntroStage('ready');
      setTypedText('PROTOMATES');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handler with URL sync
  const handleNavigate = useCallback((pageId, extraProps = {}) => {
    setCurrentPage(pageId);
    setPageProps(extraProps);
    setIntroStage('ready');
    setTypedText('PROTOMATES');

    const targetPath = pageId === 'home' ? '/' : `/${pageId}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Step 1: Typewriter Animation for "PROTOMATES"
  useEffect(() => {
    if (introStage !== 'typing') return;
    setTypedText('');
    const target = 'PROTOMATES';
    let idx = 0;

    const interval = setInterval(() => {
      idx++;
      setTypedText(target.slice(0, idx));
      if (idx >= target.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIntroStage('docking');
        }, 450);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [introStage]);

  // Step 2: Docking stage -> Ready stage (Logo glides smoothly into navbar)
  useEffect(() => {
    if (introStage === 'docking') {
      const timer = setTimeout(() => {
        setIntroStage('ready');
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [introStage]);

  // Replay intro function
  const handleReplayIntro = useCallback(() => {
    setTypedText('');
    setIntroStage('typing');
  }, []);

  // Escape key skips intro
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && introStage !== 'ready') {
        setTypedText('PROTOMATES');
        setIntroStage('ready');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [introStage]);

  return (
    <div className="protomates-app">
      <Navbar
        introStage={introStage}
        typedText={typedText}
        activePage={currentPage}
        onNavigate={handleNavigate}
      />

      <main>
        <div key={currentPage} className="page-transition-container">
          {currentPage === 'home' && (
            <Home
              introStage={introStage}
              onReplayIntro={handleReplayIntro}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'about' && <AboutUs onNavigate={handleNavigate} />}
          {currentPage === 'services' && <ServicesWork onNavigate={handleNavigate} />}
          {currentPage === 'contact' && (
            <ContactUs initialAudience={pageProps.audience} {...pageProps} />
          )}
        </div>
      </main>

      <Footer
        onNavigate={handleNavigate}
        isVisible={currentPage !== 'home' || introStage === 'docking' || introStage === 'ready'}
      />

      {/* 10-Minute Engagement Consultation Popup */}
      <ContactCookiePopup onNavigate={handleNavigate} />
    </div>
  );
}
