import React from 'react';
import { Mail, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 48px',
        background: '#f8fafc',
        borderTop: '1px solid #e2e8f0'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0, 82, 255, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="section-label" style={{ justifyContent: 'center' }}>
        Initiate Your Project
      </div>

      <h2 className="section-title">
        LET'S ENGINEER YOUR <span style={{ color: 'var(--accent)' }}>NEXT PROTOTYPE</span>
      </h2>

      <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', margin: '16px auto 36px', maxWidth: '640px', lineHeight: 1.8 }}>
        Have an upcoming academic capstone, custom PCB design, IoT node, or SCI/Scopus research simulation? Connect with FSK engineers today and turn your concept into physical working hardware.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', position: 'relative', zIndex: 1, marginBottom: '36px' }}>
        <a href="mailto:consultant.fsk@gmail.com" className="btn-primary">
          <Mail size={16} /> Email Your Requirement
        </a>
        <a href="#services" className="btn-ghost">
          Review Offerings <ArrowRight size={16} />
        </a>
      </div>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '24px',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          padding: '12px 28px',
          borderRadius: '999px',
          boxShadow: 'var(--shadow-sm)',
          fontSize: '0.84rem',
          color: '#64748b'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-primary)', fontWeight: 600 }}>
          <Clock size={15} color="var(--accent)" /> Average Review &lt; 2 Hours
        </span>
      </div>

      <div style={{ marginTop: '28px' }}>
        <a
          href="mailto:consultant.fsk@gmail.com"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.25rem',
            color: 'var(--accent)',
            textDecoration: 'none',
            fontWeight: 700,
            letterSpacing: '1px',
            display: 'inline-block',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.target.style.opacity = '1')}
        >
          consultant.fsk@gmail.com
        </a>
      </div>
    </section>
  );
}
