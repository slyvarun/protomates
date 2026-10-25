import React, { useState, useEffect, useRef } from 'react';
import { getAssetUrl } from '../utils/assetUrl';

/**
 * LandingIntroAnimation Component
 * Modern landing choreography:
 * 1. Logo emblem pops up in the center.
 * 2. Below it, the company name ("FSK" & "PROTOTYPING SERVICES") reveals.
 * 3. Both smoothly glide and dock directly into their actual navbar positions on the home page.
 */
export default function LandingIntroAnimation({ onComplete }) {
  // Stages:
  // 0: Initializing
  // 1: Logo pops up (spring scale + glow)
  // 2: Company name reveals below the logo
  // 3: Docking transition (glide to navbar position)
  // 4: Complete
  const [stage, setStage] = useState(0);
  const [dockDelta, setDockDelta] = useState({ x: 0, y: 0, scale: 0.65 });
  const centerBoxRef = useRef(null);

  useEffect(() => {
    // Step 1: Logo pop-up at 180ms
    const t1 = setTimeout(() => {
      setStage(1);
    }, 180);

    // Step 2: Company name reveals below logo at 750ms
    const t2 = setTimeout(() => {
      setStage(2);
    }, 750);

    // Step 3: Glide / dock to navbar position at 1700ms
    const t3 = setTimeout(() => {
      calculateDockPosition();
      setStage(3);
    }, 1700);

    // Step 4: Complete transition at 2450ms
    const t4 = setTimeout(() => {
      setStage(4);
      if (onComplete) onComplete();
    }, 2450);

    const handleResize = () => {
      if (stage >= 3) calculateDockPosition();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete, stage]);

  // Compute pixel-perfect translation vector from center to actual navbar logo
  const calculateDockPosition = () => {
    const targetEl = document.getElementById('navbar-brand-logo');
    const centerEl = centerBoxRef.current;

    if (targetEl && centerEl) {
      const targetRect = targetEl.getBoundingClientRect();
      const centerRect = centerEl.getBoundingClientRect();

      const deltaX = targetRect.left + targetRect.width / 2 - (centerRect.left + centerRect.width / 2);
      const deltaY = targetRect.top + targetRect.height / 2 - (centerRect.top + centerRect.height / 2);

      // Target scale ratio
      const isMobile = window.innerWidth <= 768;
      const targetScale = isMobile ? 0.48 : 0.62;

      setDockDelta({ x: deltaX, y: deltaY, scale: targetScale });
    } else {
      // Fallback coordinates based on viewport
      const isMobile = window.innerWidth <= 768;
      const targetX = isMobile ? 20 + 70 - window.innerWidth / 2 : Math.max(48, (window.innerWidth - 1200) / 2 + 48) + 80 - window.innerWidth / 2;
      const targetY = (isMobile ? 14 : 16) + 20 - window.innerHeight / 2;
      setDockDelta({ x: targetX, y: targetY, scale: isMobile ? 0.48 : 0.62 });
    }
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    calculateDockPosition();
    setStage(3);
    setTimeout(() => {
      setStage(4);
      if (onComplete) onComplete();
    }, 220);
  };

  if (stage === 4) return null;

  return (
    <div
      onClick={handleSkip}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: stage === 3 ? 'rgba(255, 255, 255, 0)' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: stage === 3 ? 'none' : 'auto',
        transition: 'background 0.75s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Background Aura Shockwave */}
      <div
        style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 82, 255, 0.35) 0%, rgba(0, 210, 255, 0.18) 45%, transparent 70%)',
          filter: 'blur(75px)',
          transform: stage >= 1 ? 'scale(1.2)' : 'scale(0.3)',
          opacity: stage === 3 ? 0 : stage >= 1 ? 0.9 : 0,
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none'
        }}
      />

      {/* Skip Button */}
      {stage < 3 && (
        <button
          onClick={handleSkip}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #e2e8f0',
            padding: '8px 18px',
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
            e.currentTarget.style.color = '#0052ff';
            e.currentTarget.style.borderColor = '#0052ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#64748b';
            e.currentTarget.style.borderColor = '#e2e8f0';
          }}
        >
          SKIP INTRO [ESC]
        </button>
      )}

      {/* ========================================================= */}
      {/* CHOREOGRAPHED HERO LOGO & COMPANY NAME CONTAINER          */}
      {/* ========================================================= */}
      <div
        ref={centerBoxRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 5,
          transform:
            stage === 3
              ? `translate3d(${dockDelta.x}px, ${dockDelta.y}px, 0) scale(${dockDelta.scale})`
              : 'translate3d(0, 0, 0) scale(1)',
          transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
          willChange: 'transform'
        }}
      >
        {/* STEP 1: LOGO EMBLEM POPS UP */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
          }}
        >
          {/* Logo Shockwave Halo */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 82, 255, 0.4) 0%, transparent 70%)',
              filter: 'blur(20px)',
              transform: stage >= 1 ? 'scale(1.4)' : 'scale(0.5)',
              opacity: stage >= 1 ? 0.7 : 0,
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          />

          <img
            src={getAssetUrl('fsk_emblem.png')}
            alt="FSK Logo"
            style={{
              height: '84px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
              transform:
                stage >= 1
                  ? 'scale(1) translateY(0)'
                  : 'scale(0) translateY(40px)',
              opacity: stage >= 1 ? 1 : 0,
              filter: 'drop-shadow(0 14px 24px rgba(0, 82, 255, 0.28))',
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          />
        </div>

        {/* STEP 2: COMPANY NAME BELOW THE LOGO */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: stage >= 2 ? 1 : 0,
            transform:
              stage >= 2
                ? 'translateY(0) scale(1)'
                : 'translateY(22px) scale(0.92)',
            filter: stage >= 2 ? 'blur(0px)' : 'blur(8px)',
            transition: 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Company Name: FSK */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '4px',
              marginBottom: '6px'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.4rem',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: '#090d16',
                lineHeight: 1
              }}
            >
              FSK
            </span>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#0052ff',
                display: 'inline-block',
                marginLeft: '2px',
                boxShadow: '0 0 12px rgba(0, 82, 255, 0.8)'
              }}
            />
          </div>

          {/* Tagline: PROTOTYPING SERVICES */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#0052ff',
              letterSpacing: stage >= 2 ? '4px' : '1px',
              textTransform: 'uppercase',
              transition: 'letter-spacing 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Prototyping Services
          </div>

          {/* R&D Telemetry Badge */}
          <div
            style={{
              marginTop: '16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: '#64748b',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              background: 'rgba(241, 245, 249, 0.8)',
              padding: '4px 12px',
              borderRadius: '999px',
              border: '1px solid #e2e8f0',
              opacity: stage === 2 ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          >
            R&amp;D LAB • ACTIVE SESSION
          </div>
        </div>
      </div>
    </div>
  );
}
