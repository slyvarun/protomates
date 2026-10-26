import React, { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesWork from './pages/ServicesWork';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ContactCookiePopup from './components/ContactCookiePopup';
import FlowingBlurAura from './components/FlowingBlurAura';

// Helper to determine initial page from URL pathname or hash
function getPageFromPath() {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
  const path = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
  const cleanPath = path.split('/').filter((p) => p && p !== 'protomates' && p !== 'fsk').join('/');
  const target = hash || cleanPath;
  if (!target || target === 'home' || target === 'index.html') return 'home';
  if (target.includes('about')) return 'about';
  if (target.includes('services') || target.includes('work') || target.includes('proven')) return 'services';
  if (target.includes('contact')) return 'contact';
  return '404';
}

export default function App({ initialPage = null }) {
  const [currentPage, setCurrentPage] = useState(() => initialPage || getPageFromPath());
  const [pageProps, setPageProps] = useState({});

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
        title: 'FSK Prototyping Services | Hardware Prototypes & Scientific Research',
        desc: 'FSK builds physical working hardware, custom multi-layer PCBs, and publication-ready documentation for Students, Scholars, and Startup Founders.'
      },
      about: {
        title: 'About FSK Prototyping Services | Integrated Engineering R&D Lab',
        desc: 'Learn about FSK Genesis, our engineering tenets, lab infrastructure, and why we support Academic Students, Doctoral Scholars, and Hardware Startups.'
      },
      services: {
        title: 'Services & Our Proven Work Catalog | FSK | Turnkey Hardware & Documentation',
        desc: 'Explore real hardware prototypes across IoT, Edge AI, and custom PCBs alongside specialized service tracks and deliverables comparison.'
      },
      contact: {
        title: 'Project Intake & Engineering Feasibility Review | FSK (<2 Hours)',
        desc: 'Submit your base paper title, project topic, or startup MVP requirements. Receive a fixed BOM quote and engineering feasibility review within 2 hours.'
      },
      404: {
        title: '404 - Page Not Found | FSK Prototyping Services',
        desc: 'The requested engineering resource or page route was not found.'
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

  // Clean up any legacy '#' hash on initial load and replace with clean path
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const page = getPageFromPath();
      const targetPath = page === 'home' ? '/' : `/${page}/`;
      window.history.replaceState({}, '', targetPath);
    }
  }, []);

  // Navigation handler with clean URL sync (no hash)
  const handleNavigate = useCallback((pageId, extraProps = {}) => {
    setCurrentPage(pageId);
    setPageProps(extraProps);

    const targetPath = pageId === 'home' ? '/' : `/${pageId}/`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="protomates-app" style={{ position: 'relative', minHeight: '100vh', background: 'transparent' }}>
      {/* 1. CHROMATIC BLUR AURA FLOWING OVER THE WHOLE SCREEN */}
      <FlowingBlurAura />

      {/* 2. GLASSMORPHIC FIXED HEADER NAVBAR */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* 3. MAIN ROUTED PAGE CONTENT */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <div key={currentPage} className="page-transition-container">
          {currentPage === 'home' && (
            <Home
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'about' && <AboutUs onNavigate={handleNavigate} />}
          {currentPage === 'services' && (
            <ServicesWork onNavigate={handleNavigate} {...pageProps} />
          )}
          {currentPage === 'contact' && (
            <ContactUs initialAudience={pageProps.audience} {...pageProps} />
          )}
          {currentPage === '404' && (
            <NotFound onNavigate={handleNavigate} />
          )}
        </div>
      </main>

      {/* 4. FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* 5. 10-Minute Consultation Lead Widget */}
      <ContactCookiePopup onNavigate={handleNavigate} />
    </div>
  );
}
