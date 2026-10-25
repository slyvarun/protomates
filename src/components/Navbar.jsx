import React, { useState, useEffect } from 'react';
import FSKLogo from './FSKLogo';
import { Menu, X } from 'lucide-react';

export default function Navbar({
  activePage = 'home',
  onNavigate
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services & Work' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    }
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isMobile ? '14px 20px' : '16px 48px',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.86)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(226, 232, 240, 0.9)'
            : '1px solid rgba(226, 232, 240, 0.5)',
          boxShadow: scrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.05)' : 'none',
          transition: 'all 0.25s ease'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* FSK Bespoke Logo Design */}
          <div
            id="navbar-brand-logo"
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <FSKLogo compact={isMobile} />
          </div>

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <ul
              style={{
                display: 'flex',
                gap: '6px',
                listStyle: 'none',
                margin: 0,
                padding: '4px',
                background: 'rgba(241, 245, 249, 0.75)',
                border: '1px solid #e2e8f0',
                borderRadius: '999px',
                alignItems: 'center'
              }}
            >
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        background: isActive ? '#ffffff' : 'transparent',
                        border: 'none',
                        borderRadius: '999px',
                        padding: '8px 18px',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.84rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                        boxShadow: isActive ? '0 2px 8px rgba(15, 23, 42, 0.06)' : 'none',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {isActive && (
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            display: 'inline-block'
                          }}
                        />
                      )}
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Right Section: Desktop CTA or Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {!isMobile ? (
              <button
                onClick={() => handleNavClick('contact')}
                className="btn-primary"
                style={{
                  padding: '10px 22px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Start A Project
              </button>
            ) : (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: 'var(--text-primary)',
                  padding: '8px',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            padding: '85px 24px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent)',
                letterSpacing: '2px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              Navigation
            </div>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: isActive ? 'rgba(0, 82, 255, 0.05)' : '#ffffff',
                    border: isActive ? '1px solid rgba(0, 82, 255, 0.2)' : '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div style={{ paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '16px', cursor: 'pointer', fontSize: '0.95rem' }}
            >
              Start Project Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
