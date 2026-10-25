import React, { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesWork from './pages/ServicesWork';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import ContactCookiePopup from './components/ContactCookiePopup';
import LandingIntroAnimation from './components/LandingIntroAnimation';
import FlowingBlurAura from './components/FlowingBlurAura';

// Helper to determine initial page from URL pathname or hash
function getPageFromPath() {
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
  const path = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
  const cleanPath = path.split('/').filter((p) => p && p !== 'protomates' && p !== 'fsk').join('/');
  const target = hash || cleanPath;
  if (target.includes('about')) return 'about';
  if (target.includes('services') || target.includes('work')) return 'services';
  if (target.includes('contact')) return 'contact';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath);
  const [pageProps, setPageProps] = useState({});

  // Landing Page Intro Animation State
  const [showIntro, setShowIntro] = useState(true);

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
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Dynamic SEO Metadata updates per route
  useEffect(() => {
    const SEO_CONFIG = {
      home: {
        title: 'FSK — Prototyping Services | Hardware Prototypes & Scientific Research',
        desc: 'FSK builds physical working hardware, custom multi-layer PCBs, and publication-ready documentation for Students, Scholars, and Startup Founders.'
      },
      about: {
        title: 'About FSK — Prototyping Services | Integrated Engineering R&D Lab',
        desc: 'Learn about FSK Genesis, our engineering tenets, lab infrastructure, and why we empower Academic Students, Doctoral Scholars, and Hardware Startups.'
      },
      services: {
        title: 'Services & 40+ Prototypes Catalog — FSK | Turnkey Hardware & Documentation',
        desc: 'Explore 40+ hardware prototypes across IoT, Edge AI, and custom PCBs alongside specialized service tracks and deliverables comparison.'
      },
      contact: {
        title: 'Project Intake & Engineering Feasibility Review — FSK (<2 Hours)',
        desc: 'Submit your base paper title, project topic, or startup MVP requirements. Receive a fixed BOM quote and engineering feasibility review within 2 hours.'
      }
    };

    const currentMeta = SEO_CONFIG[currentPage] || SEO_CONFIG.home;
    document.title = currentMeta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', currentMeta.desc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentMeta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentMeta.desc);
  }, [currentPage]);

  // Navigation handler with URL sync
  const handleNavigate = useCallback((pageId, extraProps = {}) => {
    setCurrentPage(pageId);
    setPageProps(extraProps);

    const targetHash = pageId === 'home' ? '' : `#${pageId}`;
    const basePath = window.location.pathname.split('#')[0];
    const newUrl = targetHash ? `${basePath}${targetHash}` : basePath;
    if (window.location.hash !== targetHash) {
      window.history.pushState({}, '', newUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Escape key skips intro animation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showIntro) {
        setShowIntro(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showIntro]);

  return (
    <div className="protomates-app" style={{ position: 'relative', minHeight: '100vh', background: '#ffffff' }}>
      {/* 1. CINEMATIC LANDING INTRO ANIMATION ON ENTRANCE */}
      {showIntro && (
        <LandingIntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. CHROMATIC BLUR AURA FLOWING OVER THE WHOLE SCREEN */}
      <FlowingBlurAura />

      {/* 3. FIXED HEADER NAVBAR */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* 4. MAIN ROUTED PAGE CONTENT */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <div key={currentPage} className="page-transition-container">
          {currentPage === 'home' && (
            <Home
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

      {/* 5. FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* 6. 10-Minute Consultation Lead Widget */}
      <ContactCookiePopup onNavigate={handleNavigate} />
    </div>
  );
}
