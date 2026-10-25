import React, { useEffect, useRef } from 'react';

/**
 * FlowingBlurAura Component
 * Creates an intense, radiant blurred chromatic aura with flowing energy currents
 * across the entire screen and whole page height.
 */
export default function FlowingBlurAura() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Energy flow streams / aurora filaments
    const streams = Array.from({ length: 6 }).map((_, i) => ({
      x: (i / 6) * width,
      y: Math.random() * height,
      speedX: 0.4 + Math.random() * 0.6,
      speedY: (Math.random() - 0.5) * 0.4,
      freq: 0.003 + Math.random() * 0.003,
      amp: 50 + Math.random() * 60,
      phase: Math.random() * Math.PI * 2,
      color:
        i % 3 === 0
          ? 'rgba(0, 82, 255, 0.45)'
          : i % 3 === 1
          ? 'rgba(0, 210, 255, 0.42)'
          : 'rgba(99, 102, 241, 0.38)',
      width: 40 + Math.random() * 70
    }));

    let t = 0;

    const render = () => {
      t += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Render glowing energy streams
      streams.forEach((s) => {
        ctx.beginPath();
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.width;
        ctx.lineCap = 'round';
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 40;

        for (let x = -50; x < width + 50; x += 15) {
          const y =
            s.y +
            Math.sin(x * s.freq + t + s.phase) * s.amp +
            Math.cos(x * 0.006 - t * 0.8) * 30;
          if (x === -50) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Slow drift
        s.y += s.speedY;
        if (s.y < -100) s.y = height + 100;
        if (s.y > height + 100) s.y = -100;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="flowing-blur-aura-master"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background: '#f8fafc'
      }}
    >
      {/* 1. ULTRA-DEEP CHROMATIC BLUR AURA ORBS (Intense & Flowing across whole screen) */}
      <div
        className="aura-orbs-layer"
        style={{
          position: 'absolute',
          inset: '-15%',
          width: '130%',
          height: '130%',
          filter: 'blur(75px) saturate(210%)',
          WebkitFilter: 'blur(75px) saturate(210%)',
          opacity: 0.95
        }}
      >
        {/* Energy Orb 1: Electric Cobalt Core */}
        <div
          style={{
            position: 'absolute',
            width: '55vw',
            height: '55vw',
            maxWidth: '800px',
            maxHeight: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 82, 255, 0.65) 0%, rgba(0, 82, 255, 0.28) 45%, transparent 70%)',
            top: '-5%',
            left: '5%',
            animation: 'flowAuraEnergy1 20s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Energy Orb 2: Neon Cyber Cyan Glow */}
        <div
          style={{
            position: 'absolute',
            width: '50vw',
            height: '50vw',
            maxWidth: '750px',
            maxHeight: '750px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 210, 255, 0.60) 0%, rgba(2, 132, 199, 0.26) 50%, transparent 72%)',
            top: '35%',
            right: '-5%',
            animation: 'flowAuraEnergy2 24s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Energy Orb 3: Radiant Ultraviolet / Indigo */}
        <div
          style={{
            position: 'absolute',
            width: '48vw',
            height: '48vw',
            maxWidth: '700px',
            maxHeight: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.55) 0%, rgba(121, 40, 202, 0.24) 48%, transparent 70%)',
            bottom: '-10%',
            left: '20%',
            animation: 'flowAuraEnergy3 22s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Energy Orb 4: Sky Azure Pulse */}
        <div
          style={{
            position: 'absolute',
            width: '42vw',
            height: '42vw',
            maxWidth: '650px',
            maxHeight: '650px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.52) 0%, rgba(37, 99, 235, 0.20) 50%, transparent 70%)',
            top: '20%',
            left: '35%',
            animation: 'flowAuraEnergy4 26s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
            willChange: 'transform'
          }}
        />

        {/* Energy Orb 5: Tech Emerald Aurora Current */}
        <div
          style={{
            position: 'absolute',
            width: '38vw',
            height: '38vw',
            maxWidth: '600px',
            maxHeight: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(5, 150, 105, 0.35) 0%, rgba(0, 82, 255, 0.15) 50%, transparent 70%)',
            bottom: '15%',
            right: '15%',
            animation: 'flowAuraEnergy1 28s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate-reverse',
            willChange: 'transform'
          }}
        />
      </div>

      {/* 2. DYNAMIC CANVAS ENERGY CURRENTS LAYER */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          filter: 'blur(50px)',
          WebkitFilter: 'blur(50px)',
          opacity: 0.75,
          zIndex: 1
        }}
      />

      {/* 3. SUBTLE FROSTED PEARL LIGHTENER */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.35) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 2
        }}
      />

      {/* 4. TECHNICAL PRECISION BLUEPRINT GRID */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.055) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          opacity: 0.8,
          zIndex: 3
        }}
      />

      <style>{`
        @keyframes flowAuraEnergy1 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(14vw, 16vh, 0) scale(1.18) rotate(45deg);
          }
          66% {
            transform: translate3d(-12vw, 24vh, 0) scale(0.92) rotate(90deg);
          }
          100% {
            transform: translate3d(20vw, -10vh, 0) scale(1.12) rotate(140deg);
          }
        }

        @keyframes flowAuraEnergy2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(-16vw, -14vh, 0) scale(1.15) rotate(-50deg);
          }
          66% {
            transform: translate3d(10vw, -22vh, 0) scale(0.95) rotate(-90deg);
          }
          100% {
            transform: translate3d(-20vw, 12vh, 0) scale(1.22) rotate(-130deg);
          }
        }

        @keyframes flowAuraEnergy3 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(18vw, -18vh, 0) scale(1.25);
          }
          100% {
            transform: translate3d(-14vw, 14vh, 0) scale(0.85);
          }
        }

        @keyframes flowAuraEnergy4 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-20vw, 20vh, 0) scale(1.18);
          }
          100% {
            transform: translate3d(16vw, -16vh, 0) scale(0.9);
          }
        }

        @media (max-width: 768px) {
          .aura-orbs-layer {
            filter: blur(55px) saturate(180%) !important;
            -webkit-filter: blur(55px) saturate(180%) !important;
            opacity: 0.9 !important;
          }
        }
      `}</style>
    </div>
  );
}
