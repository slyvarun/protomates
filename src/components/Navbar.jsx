import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({
  introStage = 'ready',
  typedText = 'PROTOMATES',
  activePage = 'home',
  onNavigate
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
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

  const isIntroCentered = introStage === 'typing';
  const isDocked = introStage === 'docking' || introStage === 'ready';

  // Format typewriter text
  const currentText = isDocked ? 'PROTOMATES' : (typedText || '');
  const protoPart = currentText.slice(0, 5); // "PROTO"
  const matesPart = currentText.slice(5); // "MATES"
  const isTypingComplete = currentText.length >= 10;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services & Work' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.pathname = pageId === 'home' ? '/' : `/${pageId}`;
    }
  };

  return (
    <>
      {/* Cinematic Moving PROTOMATES Logo */}
      <div
        onClick={() => handleNavClick('home')}
        style={{
          position: 'fixed',
          top: isIntroCentered ? '50%' : isMobile ? '20px' : '24px',
          left: isIntroCentered ? '50%' : isMobile ? '20px' : '48px',
          transform: isIntroCentered ? 'translate(-50%, -50%)' : 'translate(0, 0)',
          fontSize: isIntroCentered
            ? isMobile
              ? 'clamp(2.5rem, 9vw, 3.8rem)'
              : 'clamp(3.8rem, 7.5vw, 6.2rem)'
            : isMobile
            ? '1.7rem'
            : '2.1rem',
          zIndex: 1002,
          fontFamily: 'var(--font-display)',
          letterSpacing: isIntroCentered ? '6px' : '4px',
          color: 'var(--accent)',
          cursor: isDocked ? 'pointer' : 'default',
          textDecoration: 'none',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: isIntroCentered ? 'center' : 'flex-start',
          pointerEvents: isDocked ? 'auto' : 'none',
          transition:
            'top 0.85s cubic-bezier(0.16, 1, 0.3, 1), left 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), font-size 0.85s cubic-bezier(0.16, 1, 0.3, 1), letter-spacing 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
          whiteSpace: 'nowrap'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
          <span>{protoPart}</span>
          <span style={{ color: 'var(--white)' }}>{matesPart}</span>

          {/* Typewriter Blinking Cursor */}
          {introStage === 'typing' && !isTypingComplete && (
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '0.85em',
                background: 'var(--accent)',
                marginLeft: '4px',
                verticalAlign: 'middle',
                animation: 'cursorBlink 0.7s infinite alternate'
              }}
            />
          )}

          {/* LAB Badge */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: isIntroCentered ? '0.35em' : '0.55rem',
              padding: isIntroCentered ? '4px 10px' : '3px 6px',
              marginLeft: '10px',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              borderRadius: '2px',
              letterSpacing: '1px',
              opacity: isTypingComplete || isDocked ? 1 : 0,
              transform: isTypingComplete || isDocked ? 'scale(1)' : 'scale(0.5)',
              transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            LAB
          </span>
        </div>

        {/* Minimalist Tech Terminal Subtitle (only during center intro) */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: isMobile ? '0.65rem' : '0.75rem',
            letterSpacing: '3px',
            color: 'var(--gray)',
            marginTop: '12px',
            textTransform: 'uppercase',
            opacity: isIntroCentered ? 1 : 0,
            transform: isIntroCentered ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            pointerEvents: 'none'
          }}
        >
          {introStage === 'typing'
            ? '> INITIALIZING PROTOTYPING SYSTEMS...'
            : '> HARDWARE LAB ACTIVE'}
        </div>
      </div>

      {/* Main Navbar Bar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile ? '18px 20px' : '22px 48px',
          background: isDocked
            ? scrolled
              ? 'rgba(5, 5, 8, 0.96)'
              : 'linear-gradient(to bottom, rgba(5, 5, 8, 0.95), transparent)'
            : 'transparent',
          backdropFilter: isDocked ? (scrolled ? 'blur(16px)' : 'blur(4px)') : 'none',
          borderBottom: isDocked && scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          transition: 'background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s'
        }}
      >
        {/* Invisible placeholder reserving space for docked logo */}
        <div style={{ width: isMobile ? '160px' : '220px', height: '36px' }} />

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <ul
            style={{
              display: 'flex',
              gap: '32px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
              opacity: introStage === 'ready' ? 1 : 0,
              transform: introStage === 'ready' ? 'translateY(0)' : 'translateY(-12px)',
              pointerEvents: introStage === 'ready' ? 'auto' : 'none',
              transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s'
            }}
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id} style={{ position: 'relative' }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '8px 4px',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: isActive ? 'var(--accent)' : 'var(--gray)',
                      textDecoration: 'none',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      transition: 'color 0.25s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--white)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--gray)';
                    }}
                  >
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          display: 'inline-block'
                        }}
                      />
                    )}
                    <span>{item.label}</span>
                  </button>
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--accent)',
                        boxShadow: '0 0 8px var(--accent)'
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {/* Right Section: Desktop CTA or Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {!isMobile ? (
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '2px',
                padding: '10px 24px',
                background: activePage === 'contact' ? 'var(--accent)' : 'transparent',
                border: '1px solid var(--accent)',
                color: activePage === 'contact' ? 'var(--black)' : 'var(--accent)',
                textTransform: 'uppercase',
                opacity: introStage === 'ready' ? 1 : 0,
                transform: introStage === 'ready' ? 'translateY(0)' : 'translateY(-12px)',
                pointerEvents: introStage === 'ready' ? 'auto' : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.color = 'var(--black)';
              }}
              onMouseLeave={(e) => {
                if (activePage !== 'contact') {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--accent)';
                }
              }}
            >
              Start A Project
            </button>
          ) : (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--white)',
                padding: '8px',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: introStage === 'ready' ? 1 : 0
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 5, 8, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            padding: '100px 30px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--accent)',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: isActive ? 'rgba(200, 255, 0, 0.08)' : 'transparent',
                    border: isActive ? '1px solid rgba(200, 255, 0, 0.3)' : 'none',
                    borderRadius: '6px',
                    padding: '16px 20px',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                    letterSpacing: '1px',
                    color: isActive ? 'var(--accent)' : 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={18} color={isActive ? 'var(--accent)' : '#666'} />
                </button>
              );
            })}
          </div>

          <div style={{ paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '16px', cursor: 'pointer' }}
            >
              Start A Project Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
