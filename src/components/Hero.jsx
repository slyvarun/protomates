import React from 'react';
import Hardware3DCanvas from './Hardware3DCanvas';
import InteractiveHeroTrackButtons from './InteractiveHeroTrackButtons';

export default function Hero({ introStage = 'ready', onReplayIntro, onNavigate }) {
  const isRevealed = introStage === 'docking' || introStage === 'ready';

  return (
    <section
      id="home"
      style={{
        height: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 54px',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 90% 80% at 20% 50%, rgba(12, 14, 22, 0.95) 0%, #030305 100%)'
      }}
    >
      {/* Studio 3D Hardware Canvas Stage */}
      <Hardware3DCanvas introStage={introStage} />

      {/* Atmospheric Subtle Studio Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '15%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08), transparent 70%)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: isRevealed ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.07), transparent 70%)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: isRevealed ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      />

      {/* 
        Hero Content:
        Revealed gracefully when intro completes.
        Balanced typography with the 3D hardware stage on the right.
      */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '750px',
          width: '100%',
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
          visibility: isRevealed ? 'visible' : 'hidden',
          pointerEvents: isRevealed ? 'auto' : 'none',
          transition:
            'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
        }}
      >

        {/* Master Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 5.2vw, 5.2rem)',
            lineHeight: 0.92,
            letterSpacing: '2px',
            margin: '0 0 12px'
          }}
        >
          <span style={{ display: 'block', color: 'var(--white)' }}>WE BUILD HARDWARE.</span>
          <span
            style={{
              display: 'block',
              WebkitTextStroke: '1px rgba(255,255,255,0.7)',
              color: 'transparent'
            }}
          >
            WE WRITE PAPERS.
          </span>
          <span style={{ display: 'block', color: 'var(--accent)' }}>FOR THREE INNOVATORS.</span>
        </h1>

        {/* Crisp Subtitle */}
        <p
          style={{
            fontSize: '0.92rem',
            color: '#aaa',
            lineHeight: 1.6,
            maxWidth: '560px',
            margin: '0 0 16px'
          }}
        >
          Physical working prototypes, custom PCBs, and university/research-grade documentation. Select your technical track below:
        </p>

        {/* Three Direct Track Selector Modules */}
        <InteractiveHeroTrackButtons onNavigate={onNavigate} />
      </div>
    </section>
  );
}
