import React, { useEffect, useRef } from 'react';

/**
 * AuraDoodlesInfinity Component
 * Renders an ethereal, luminous ambient aura combined with floating,
 * morphing engineering infinity (∞) doodles and parametric lemniscate curves.
 */
export default function AuraDoodlesInfinity({ interactive = true }) {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mousePos.current.targetX = e.clientX - rect.left - width / 2;
      mousePos.current.targetY = e.clientY - rect.top - height / 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Mini floating infinity doodles
    const doodles = Array.from({ length: 9 }).map((_, i) => ({
      x: (Math.random() - 0.5) * width * 0.9,
      y: (Math.random() - 0.5) * height * 0.8,
      size: 24 + Math.random() * 38,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.15 + Math.random() * 0.22,
      color: i % 3 === 0 ? 'rgba(0, 82, 255,' : i % 3 === 1 ? 'rgba(2, 132, 199,' : 'rgba(99, 102, 241,'
    }));

    // Particle nodes travelling on the master infinity loop
    const particles = Array.from({ length: 28 }).map((_, i) => ({
      t: (i / 28) * Math.PI * 2,
      speed: 0.006 + Math.random() * 0.004,
      radius: 1.5 + Math.random() * 2,
      alpha: 0.3 + Math.random() * 0.5
    }));

    let time = 0;

    // Helper: draw an infinity symbol (Lemniscate of Bernoulli)
    const drawLemniscate = (cx, cy, a, rot, strokeStyle, lineWidth, wobble = 0) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const steps = 120;
      for (let i = 0; i <= steps; i++) {
        const theta = (i / steps) * Math.PI * 2;
        const sinT = Math.sin(theta);
        const cosT = Math.cos(theta);
        const denom = 1 + sinT * sinT;
        // Lemniscate formula with subtle organic doodle wobble
        const rWobble = wobble ? Math.sin(theta * 6 + time * 2) * wobble : 0;
        const x = ((a + rWobble) * cosT) / denom;
        const y = ((a + rWobble) * sinT * cosT) / denom;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    };

    const render = () => {
      time += 0.015;

      // Soft mouse lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mousePos.current.x * 0.08;
      const centerY = height / 2 + mousePos.current.y * 0.08;

      // 1. THE CHROMATIC AURA GLOWS
      // Primary breathing cobalt aura
      const auraPulse = Math.sin(time * 0.8) * 30;
      const primaryGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        Math.min(width, height) * 0.55 + auraPulse
      );
      primaryGrad.addColorStop(0, 'rgba(0, 82, 255, 0.18)');
      primaryGrad.addColorStop(0.35, 'rgba(2, 132, 199, 0.10)');
      primaryGrad.addColorStop(0.7, 'rgba(99, 102, 241, 0.04)');
      primaryGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = primaryGrad;
      ctx.fillRect(0, 0, width, height);

      // Secondary floating aura orb (offset for organic depth)
      const orbX = centerX + Math.cos(time * 0.6) * 120;
      const orbY = centerY + Math.sin(time * 0.7) * 70;
      const secondaryGrad = ctx.createRadialGradient(orbX, orbY, 10, orbX, orbY, 260);
      secondaryGrad.addColorStop(0, 'rgba(2, 132, 199, 0.14)');
      secondaryGrad.addColorStop(0.5, 'rgba(0, 82, 255, 0.06)');
      secondaryGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = secondaryGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. MASTER INFINITY DOODLE (Center background)
      const masterScale = Math.min(width * 0.75, 520);
      const masterRot = Math.sin(time * 0.3) * 0.08;

      // Outer soft aura echo of the infinity
      ctx.shadowColor = 'rgba(0, 82, 255, 0.35)';
      ctx.shadowBlur = 24;
      drawLemniscate(
        centerX,
        centerY,
        masterScale,
        masterRot,
        'rgba(0, 82, 255, 0.22)',
        2.5,
        2
      );
      ctx.shadowBlur = 0;

      // Secondary layered sketched infinity curve (doodle effect)
      drawLemniscate(
        centerX,
        centerY,
        masterScale * 0.94,
        masterRot + 0.05,
        'rgba(2, 132, 199, 0.16)',
        1.5,
        3
      );

      // Delicate dashed orbit line
      ctx.save();
      ctx.setLineDash([8, 12]);
      drawLemniscate(
        centerX,
        centerY,
        masterScale * 1.08,
        masterRot - 0.04,
        'rgba(99, 102, 241, 0.12)',
        1.2
      );
      ctx.restore();

      // 3. GLOWING ENERGY PARTICLES FLOWING ALONG MASTER INFINITY
      particles.forEach((p) => {
        p.t += p.speed;
        if (p.t > Math.PI * 2) p.t -= Math.PI * 2;

        const sinT = Math.sin(p.t);
        const cosT = Math.cos(p.t);
        const denom = 1 + sinT * sinT;
        const x = (masterScale * cosT) / denom;
        const y = (masterScale * sinT * cosT) / denom;

        // Apply rotation
        const rx = x * Math.cos(masterRot) - y * Math.sin(masterRot) + centerX;
        const ry = x * Math.sin(masterRot) + y * Math.cos(masterRot) + centerY;

        ctx.beginPath();
        ctx.arc(rx, ry, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 82, 255, ${p.alpha})`;
        ctx.shadowColor = '#0052ff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 4. FLOATING MINI INFINITY DOODLES
      doodles.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        d.rotation += d.rotSpeed;

        // Wrap around bounds
        if (d.x < -width / 2 - 50) d.x = width / 2 + 50;
        if (d.x > width / 2 + 50) d.x = -width / 2 - 50;
        if (d.y < -height / 2 - 50) d.y = height / 2 + 50;
        if (d.y > height / 2 + 50) d.y = -height / 2 - 50;

        const alphaPulse = d.alpha * (0.7 + Math.sin(time + d.phase) * 0.3);
        const posX = width / 2 + d.x + mousePos.current.x * 0.04;
        const posY = height / 2 + d.y + mousePos.current.y * 0.04;

        drawLemniscate(
          posX,
          posY,
          d.size,
          d.rotation,
          `${d.color} ${alphaPulse})`,
          1.4,
          1.5
        );
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [interactive]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
}
