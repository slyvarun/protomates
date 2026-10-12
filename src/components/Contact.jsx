import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '140px 48px',
        background: 'var(--black)'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(200,255,0,0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="section-label" style={{ justifyContent: 'center' }}>
        Initiate Your Project
      </div>

      <h2 className="section-title">
        LET'S BUILD SOMETHING <span style={{ color: 'var(--accent)' }}>CUTTING-EDGE</span>
      </h2>

      <p style={{ fontSize: '1.05rem', color: '#888', margin: '24px auto 40px', maxWidth: '600px', lineHeight: 1.8 }}>
        Have an upcoming academic project, custom PCB design, IoT device, or AI/ML system requirement? Connect with Protomates today and transform your concept into a high-performance prototype.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
        <a href="mailto:info.protomates@gmail.com" className="btn-primary">
          Email Your Requirement <span>✉</span>
        </a>
        <a href="#services" className="btn-ghost">
          <span className="arrow" /> Review Offerings
        </a>
      </div>

      <a
        href="mailto:info.protomates@gmail.com"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)',
          color: 'var(--white)',
          textDecoration: 'none',
          letterSpacing: '4px',
          display: 'inline-block',
          marginTop: '36px',
          transition: 'color 0.3s',
          position: 'relative',
          zIndex: 1
        }}
        onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
        onMouseLeave={(e) => (e.target.style.color = 'var(--white)')}
      >
        info.protomates@gmail.com
      </a>
    </section>
  );
}
