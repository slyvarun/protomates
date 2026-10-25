import React from 'react';

/**
 * FlowingBlurAura Component
 * Creates an ultra-premium, continuous flowing chromatic blur aura across the entire screen.
 * Uses hardware-accelerated CSS animations with staggered organic paths and deep blur filters.
 */
export default function FlowingBlurAura() {
  return (
    <div
      className="flowing-blur-aura-wrapper"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background: '#ffffff'
      }}
    >
      {/* Subtle Blueprint Micro-Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.045) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          opacity: 0.85,
          zIndex: 1
        }}
      />

      {/* FLOWING AURA CONTAINER WITH DEEP BLUR */}
      <div
        className="aura-container"
        style={{
          position: 'absolute',
          inset: '-20%',
          width: '140%',
          height: '140%',
          filter: 'blur(110px) saturate(180%)',
          WebkitFilter: 'blur(110px) saturate(180%)',
          opacity: 0.88,
          zIndex: 0
        }}
      >
        {/* Orb 1: Cobalt Blue (Core FSK Blue) */}
        <div
          className="aura-orb aura-orb-1"
          style={{
            position: 'absolute',
            width: '46vw',
            height: '46vw',
            maxWidth: '680px',
            maxHeight: '680px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 82, 255, 0.38) 0%, rgba(0, 82, 255, 0.12) 50%, transparent 75%)',
            top: '8%',
            left: '12%',
            animation: 'flowAura1 22s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Orb 2: Electric Cyan / Sky */}
        <div
          className="aura-orb aura-orb-2"
          style={{
            position: 'absolute',
            width: '42vw',
            height: '42vw',
            maxWidth: '620px',
            maxHeight: '620px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(2, 132, 199, 0.35) 0%, rgba(2, 132, 199, 0.10) 55%, transparent 75%)',
            top: '42%',
            right: '8%',
            animation: 'flowAura2 26s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Orb 3: Radiant Indigo / Violet */}
        <div
          className="aura-orb aura-orb-3"
          style={{
            position: 'absolute',
            width: '38vw',
            height: '38vw',
            maxWidth: '560px',
            maxHeight: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 75%)',
            bottom: '10%',
            left: '22%',
            animation: 'flowAura3 24s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Orb 4: Deep Azure Wave */}
        <div
          className="aura-orb aura-orb-4"
          style={{
            position: 'absolute',
            width: '34vw',
            height: '34vw',
            maxWidth: '500px',
            maxHeight: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(37, 99, 235, 0.06) 55%, transparent 75%)',
            top: '20%',
            right: '30%',
            animation: 'flowAura4 28s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Orb 5: Subtle Tech Emerald Accent */}
        <div
          className="aura-orb aura-orb-5"
          style={{
            position: 'absolute',
            width: '30vw',
            height: '30vw',
            maxWidth: '440px',
            maxHeight: '440px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(5, 150, 105, 0.16) 0%, rgba(5, 150, 105, 0.04) 50%, transparent 75%)',
            bottom: '22%',
            right: '18%',
            animation: 'flowAura1 30s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate-reverse',
            willChange: 'transform'
          }}
        />
      </div>

      <style>{`
        @keyframes flowAura1 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(12vw, 14vh, 0) scale(1.15) rotate(45deg);
          }
          66% {
            transform: translate3d(-10vw, 22vh, 0) scale(0.92) rotate(90deg);
          }
          100% {
            transform: translate3d(18vw, -8vh, 0) scale(1.1) rotate(140deg);
          }
        }

        @keyframes flowAura2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(-14vw, -12vh, 0) scale(1.12) rotate(-50deg);
          }
          66% {
            transform: translate3d(8vw, -20vh, 0) scale(0.95) rotate(-90deg);
          }
          100% {
            transform: translate3d(-18vw, 10vh, 0) scale(1.18) rotate(-130deg);
          }
        }

        @keyframes flowAura3 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(16vw, -16vh, 0) scale(1.22);
          }
          100% {
            transform: translate3d(-12vw, 12vh, 0) scale(0.88);
          }
        }

        @keyframes flowAura4 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-18vw, 18vh, 0) scale(1.14);
          }
          100% {
            transform: translate3d(14vw, -14vh, 0) scale(0.9);
          }
        }

        @media (max-width: 768px) {
          .aura-container {
            filter: blur(75px) saturate(160%) !important;
            -webkit-filter: blur(75px) saturate(160%) !important;
            opacity: 0.85 !important;
          }
          .aura-orb {
            animation-duration: 18s !important;
          }
        }
      `}</style>
    </div>
  );
}
