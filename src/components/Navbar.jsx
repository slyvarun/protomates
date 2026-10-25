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
      setScrolled(window.scrollY > 20);
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
          padding: isMobile ? '12px 18px' : '14px 48px',
          background: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
          boxShadow: scrolled
            ? '0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.03)'
            : '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
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
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FSKLogo compact={isMobile} />
          </div>

          {/* Desktop Navigation Links — Frosted Glass Island */}
          {!isMobile && (
            <ul
              style={{
                display: 'flex',
                gap: '6px',
                listStyle: 'none',
                margin: 0,
                padding: '4px 6px',
                background: 'rgba(255, 255, 255, 0.60)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                borderRadius: '999px',
                alignItems: 'center',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.95), 0 4px 16px rgba(0, 82, 255, 0.04)'
              }}
            >
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        background: isActive ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                        border: isActive ? '1px solid rgba(0, 82, 255, 0.14)' : '1px solid transparent',
                        borderRadius: '999px',
                        padding: '8px 18px',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.84rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                        boxShadow: isActive ? '0 4px 12px rgba(0, 82, 255, 0.12), 0 1px 2px rgba(15, 23, 42, 0.04)' : 'none',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = 'var(--text-primary)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.background = 'transparent';
                        }
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
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 82, 255, 0.3)'
                }}
              >
                Start A Project
              </button>
            ) : (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  color: 'var(--text-primary)',
                  padding: '8px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 14px rgba(0, 82, 255, 0.06)',
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

      {/* Mobile Drawer Menu — Frosted Glass Screen */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(30px) saturate(190%)',
            WebkitBackdropFilter: 'blur(30px) saturate(190%)',
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
                fontFamily: 'var(--font-body)',
                fontSize: '0.74rem',
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
                    background: isActive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.65)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: isActive ? '1px solid rgba(0, 82, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
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

          <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(226, 232, 240, 0.8)' }}>
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
