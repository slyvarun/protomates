import React, { useState, useEffect } from 'react';
import FSKLogo from './FSKLogo';

export default function LandingIntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: enter, 1: logo draw, 2: telemetry, 3: exit
  const [progress, setProgress] = useState(0);
  const [telemetryText, setTelemetryText] = useState('SYSTEM BOOT // INITIALIZING');

  useEffect(() => {
    // Stage 1: Reveal logo and pulse
    const t1 = setTimeout(() => setPhase(1), 150);

    // Progress bar counter
    const startTime = Date.now();
    const duration = 2100; // 2.1 seconds total

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 35) {
        setTelemetryText('R&D CORE ONLINE // CALIBRATING');
      } else if (pct < 70) {
        setTelemetryText('3 PROTOTYPING TRACKS VERIFIED');
      } else if (pct < 95) {
        setTelemetryText('LABORATORY READY // DEPLOYING');
      } else {
        setTelemetryText('ENTERING FSK STUDIO');
      }

      if (pct >= 100) {
        clearInterval(progressInterval);
        setPhase(3); // Exit transition
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 550);
      }
    }, 30);

    return () => {
      clearTimeout(t1);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase(3);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: phase === 3 ? 0 : 1,
        transform: phase === 3 ? 'scale(1.05)' : 'scale(1)',
        transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: phase === 3 ? 'none' : 'auto',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Glowing Aura Background */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 82, 255, 0.18) 0%, rgba(2, 132, 199, 0.10) 45%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'introAuraPulse 3s ease-in-out infinite alternate',
          pointerEvents: 'none'
        }}
      />

      {/* Blueprint Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.05) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          opacity: 0.7
        }}
      />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          padding: '8px 16px',
          borderRadius: '999px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          color: '#64748b',
          letterSpacing: '1px',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: 'var(--shadow-sm)',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--accent)';
          e.currentTarget.style.borderColor = 'var(--accent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#64748b';
          e.currentTarget.style.borderColor = '#e2e8f0';
        }}
      >
        SKIP INTRO [ESC]
      </button>

      {/* Center Stage Presentation */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '520px',
          width: '100%'
        }}
      >
        {/* FSK Logo with Scale & Glow Animation */}
        <div
          style={{
            transform: phase >= 1 ? 'scale(1.2)' : 'scale(0.85)',
            opacity: phase >= 1 ? 1 : 0,
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            marginBottom: '28px'
          }}
        >
          <FSKLogo size="large" />
        </div>

        {/* Brand Tagline */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '20px',
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
          }}
        >
          Prototyping Services // R&amp;D Laboratory
        </div>

        {/* Progress Loading Bar */}
        <div
          style={{
            width: '100%',
            maxWidth: '320px',
            height: '4px',
            background: '#e2e8f0',
            borderRadius: '999px',
            overflow: 'hidden',
            marginBottom: '16px',
            position: 'relative'
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #0052ff, #0284c7)',
              borderRadius: '999px',
              transition: 'width 0.05s linear',
              boxShadow: '0 0 10px rgba(0, 82, 255, 0.5)'
            }}
          />
        </div>

        {/* Telemetry Status Line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '320px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: '#64748b',
            letterSpacing: '1px'
          }}
        >
          <span>{telemetryText}</span>
          <span style={{ fontWeight: 700, color: 'var(--accent)' }}>{progress}%</span>
        </div>

        {/* 3 Core Track Indicators */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: '32px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            opacity: phase >= 1 ? 0.9 : 0,
            transition: 'opacity 0.5s ease 0.3s'
          }}
        >
          {['STUDENTS', 'SCHOLARS', 'STARTUPS'].map((t, idx) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                fontWeight: 600,
                color: '#475569',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '4px 10px',
                borderRadius: '6px',
                letterSpacing: '1px'
              }}
            >
              0{idx + 1} {t}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes introAuraPulse {
          0% {
            transform: scale(0.9) translate(-5%, -5%);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.15) translate(5%, 5%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
