import React from 'react';

/**
 * FlowingBlurAura Component
 * Creates an ultra-premium, continuous flowing chromatic blur aura across the entire page.
 * Uses silky, hardware-accelerated CSS keyframe physics with multi-point glowing energy hubs.
 */
export default function FlowingBlurAura() {
  return (
    <div
      className="flowing-aura-root"
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
      {/* Container with High-Quality Fluid Blur Filter */}
      <div
        className="aura-mesh-container"
        style={{
          position: 'absolute',
          inset: '-15%',
          width: '130%',
          height: '130%',
          filter: 'blur(95px) saturate(220%)',
          WebkitFilter: 'blur(95px) saturate(220%)',
          opacity: 0.85
        }}
      >
        {/* Hub 1: Electric Cobalt Blue - Top Left to Center */}
        <div
          className="aura-energy-hub hub-1"
          style={{
            position: 'absolute',
            width: '48vw',
            height: '48vw',
            maxWidth: '720px',
            maxHeight: '720px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 82, 255, 0.75) 0%, rgba(37, 99, 235, 0.35) 45%, transparent 70%)',
            top: '2%',
            left: '5%',
            animation: 'auraFlowMotion1 20s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Hub 2: Cyber Cyan / Turquoise - Top Right to Center */}
        <div
          className="aura-energy-hub hub-2"
          style={{
            position: 'absolute',
            width: '45vw',
            height: '45vw',
            maxWidth: '680px',
            maxHeight: '680px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.70) 0%, rgba(6, 182, 212, 0.32) 48%, transparent 72%)',
            top: '15%',
            right: '2%',
            animation: 'auraFlowMotion2 24s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Hub 3: Ultraviolet / Radiant Purple - Center Bottom */}
        <div
          className="aura-energy-hub hub-3"
          style={{
            position: 'absolute',
            width: '46vw',
            height: '46vw',
            maxWidth: '700px',
            maxHeight: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.60) 0%, rgba(147, 51, 234, 0.28) 48%, transparent 70%)',
            bottom: '5%',
            left: '25%',
            animation: 'auraFlowMotion3 22s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Hub 4: Vibrant Sky / Azure Energy - Bottom Right */}
        <div
          className="aura-energy-hub hub-4"
          style={{
            position: 'absolute',
            width: '40vw',
            height: '40vw',
            maxWidth: '620px',
            maxHeight: '620px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.65) 0%, rgba(2, 132, 199, 0.26) 50%, transparent 70%)',
            bottom: '12%',
            right: '8%',
            animation: 'auraFlowMotion4 26s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Hub 5: Warm Rose / Coral Energy Accent - Floating Core */}
        <div
          className="aura-energy-hub hub-5"
          style={{
            position: 'absolute',
            width: '32vw',
            height: '32vw',
            maxWidth: '500px',
            maxHeight: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244, 63, 94, 0.35) 0%, rgba(236, 72, 153, 0.15) 45%, transparent 70%)',
            top: '38%',
            left: '32%',
            animation: 'auraFlowMotion1 28s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate-reverse',
            willChange: 'transform'
          }}
        />
      </div>

      {/* Luminous Pearl Light Diffusion Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.45) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)'
        }}
      />

      {/* Subtle Precision Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.05) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          opacity: 0.75
        }}
      />

      <style>{`
        @keyframes auraFlowMotion1 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(12vw, 14vh, 0) scale(1.18) rotate(45deg);
          }
          66% {
            transform: translate3d(-10vw, 22vh, 0) scale(0.92) rotate(90deg);
          }
          100% {
            transform: translate3d(18vw, -8vh, 0) scale(1.12) rotate(140deg);
          }
        }

        @keyframes auraFlowMotion2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(-14vw, -12vh, 0) scale(1.15) rotate(-50deg);
          }
          66% {
            transform: translate3d(8vw, -20vh, 0) scale(0.95) rotate(-90deg);
          }
          100% {
            transform: translate3d(-18vw, 10vh, 0) scale(1.22) rotate(-130deg);
          }
        }

        @keyframes auraFlowMotion3 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(16vw, -16vh, 0) scale(1.25);
          }
          100% {
            transform: translate3d(-12vw, 12vh, 0) scale(0.85);
          }
        }

        @keyframes auraFlowMotion4 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-18vw, 18vh, 0) scale(1.18);
          }
          100% {
            transform: translate3d(14vw, -14vh, 0) scale(0.9);
          }
        }

        @media (max-width: 768px) {
          .aura-mesh-container {
            filter: blur(65px) saturate(190%) !important;
            -webkit-filter: blur(65px) saturate(190%) !important;
            opacity: 0.88 !important;
          }
        }
      `}</style>
    </div>
  );
}
