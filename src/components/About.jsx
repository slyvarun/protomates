import React from 'react';

const pills = [
  'PCB Layout & Fabrication',
  'ESP32 & Arduino',
  'IoT & Cloud Telemetry',
  'Academic Capstone Projects',
  'Embedded AI / TinyML',
  '1-on-1 Guidance & Viva Prep',
  'Multi-Field Prototypes',
  'Fast Turnaround'
];

export default function About() {
  return (
    <section id="about">
      <div className="section-label">About Protomates</div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          alignItems: 'center',
          marginTop: '60px'
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 8vw, 8.5rem)',
              lineHeight: 0.85,
              color: 'transparent',
              WebkitTextStroke: '3px var(--border)',
              userSelect: 'none'
            }}
          >
            WE ARE<br />
            <span style={{ WebkitTextStroke: 0, color: 'var(--accent)', display: 'block' }}>PROTO</span>
            <span style={{ WebkitTextStroke: 0, color: 'var(--white)', display: 'block' }}>MATES</span>
          </div>
        </div>

        <div>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.9, color: '#888', marginBottom: '20px' }}>
            <strong style={{ color: 'var(--white)' }}>Protomates</strong> is a specialized technology and prototyping
            powerhouse responsible for building <strong style={{ color: 'var(--white)' }}>cutting-edge solutions</strong>.
            We bridge the critical gap between conceptual theories and tangible, high-performing hardware and software systems.
          </p>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.9, color: '#888', marginBottom: '20px' }}>
            Whether you require precision <strong style={{ color: 'var(--white)' }}>multi-layer PCB design</strong>, rapid{' '}
            <strong style={{ color: 'var(--white)' }}>IoT prototyping</strong> on microcontrollers like ESP32 and Arduino,
            edge <strong style={{ color: 'var(--white)' }}>AI/ML intelligence</strong>, or need to{' '}
            <strong style={{ color: 'var(--white)' }}>undertake complex academic projects</strong> with end-to-end guidance —
            our engineers provide industry-grade execution from Day 1.
          </p>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.9, color: '#888', marginBottom: '20px' }}>
            Every project we deliver comes equipped with <strong style={{ color: 'var(--white)' }}>working hardware, tested codebases, complete schematics, and rigorous viva/presentation guidance</strong> so you master every layer of the architecture.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '32px' }}>
            {pills.map((p) => (
              <div
                key={p}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '2px',
                  padding: '8px 18px',
                  border: '1px solid var(--border)',
                  color: 'var(--gray)',
                  textTransform: 'uppercase',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--accent)';
                  e.target.style.color = 'var(--accent)';
                  e.target.style.background = 'rgba(200,255,0,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.color = 'var(--gray)';
                  e.target.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
