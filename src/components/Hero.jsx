import React, { useState, useEffect } from 'react';
import InteractiveHeroTrackButtons from './InteractiveHeroTrackButtons';

export default function Hero({ onNavigate }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="home"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: isMobile ? '72px 18px 32px' : '120px 48px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        minHeight: isMobile ? 'auto' : 'calc(100vh - 90px)'
      }}
    >

      {/* Subtle Precision Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(1, 42, 45,  0.04) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Unified 1200px Master Entrance Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'left'
        }}
      >
        <div className="section-label">Engineering Prototyping Laboratory</div>

        {/* Master Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? 'clamp(1.85rem, 7vw, 2.6rem)' : 'clamp(2.6rem, 5.2vw, 4.4rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            margin: '0 0 14px',
            maxWidth: '920px',
            color: 'var(--text-primary)'
          }}
        >
          <span>WE BUILD HARDWARE. </span>
          <span style={{ color: '#435355' }}>WE AUTHOR PAPERS. </span>
          <br />
          <span style={{ color: 'var(--accent)' }}>FOR THREE INNOVATORS.</span>
        </h1>

        {/* Crisp Subtitle */}
        <p
          style={{
            fontSize: isMobile ? '0.92rem' : '1.08rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '740px',
            margin: isMobile ? '0 0 16px' : '0 0 32px'
          }}
        >
          <span>Physical working prototypes, custom multi-layer PCBs, and research-grade documentation. </span>
          <span className="mobile-hide">Zero breadboard spaghetti. Select your specialized engineering track:</span>
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: isMobile ? '20px' : '40px'
          }}
        >
          <button
            onClick={() => (onNavigate ? onNavigate('contact') : (window.location.hash = '#contact'))}
            className="btn-primary"
            style={{
              cursor: 'pointer',
              padding: isMobile ? '12px 22px' : '14px 28px',
              fontSize: isMobile ? '0.85rem' : '0.92rem',
              fontWeight: 700
            }}
          >
            Initiate Project Intake
          </button>
          <button
            onClick={() =>
              onNavigate
                ? onNavigate('services', { scrollToSection: 'work-gallery' })
                : (window.location.hash = '#work-gallery')
            }
            className="btn-ghost"
            style={{
              cursor: 'pointer',
              border: '1px solid rgba(67, 83, 85, 0.25)',
              color: '#012A2D',
              padding: isMobile ? '12px 20px' : '14px 24px',
              fontSize: isMobile ? '0.85rem' : '0.92rem',
              fontWeight: 600
            }}
          >
            Explore Our Proven Work
          </button>
        </div>

        {/* Three Direct Track Selector Modules */}
        <InteractiveHeroTrackButtons onNavigate={onNavigate} />
      </div>
    </section>
  );
}
