import React from 'react';
import { Cpu, Layers, BookOpen, CheckCircle2 } from 'lucide-react';

const pills = [
  'Multi-Layer PCB Layout & Fabrication',
  'ESP32, STM32 & Arduino Firmware',
  'Industrial IoT & Cloud Telemetry',
  'Undergraduate & Master Capstones',
  'Embedded AI & TinyML Models',
  '1-on-1 Defense & Viva Coaching',
  'Plagiarism-Free IEEE Documentation',
  'Turnkey Physical Hardware Delivery'
];

export default function About() {
  return (
    <section id="about" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
      <div className="section-label">About FSK // Prototyping Services</div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          marginTop: '40px'
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em'
            }}
          >
            WE ARE<br />
            <span style={{ color: 'var(--accent)' }}>FSK</span>
            <span
              style={{
                display: 'block',
                fontSize: '0.35em',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '3px',
                marginTop: '12px',
                fontFamily: 'var(--font-mono)'
              }}
            >
              PROTOTYPING SERVICES
            </span>
          </div>

          <div
            style={{
              marginTop: '36px',
              padding: '24px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <CheckCircle2 size={18} color="var(--accent)" />
              <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>Turnkey Hardware Execution Guarantee</strong>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
              Every prototype is assembled with industrial solder joints, custom PCBs, tested firmware, and complete schematics. No breadboard spaghetti — guaranteed to work on first boot.
            </p>
          </div>
        </div>

        <div>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>FSK</strong> is a specialized technology and engineering powerhouse providing end-to-end <strong style={{ color: 'var(--accent)' }}>Prototyping Services</strong>. We bridge the critical chasm between conceptual academic theory, physical working microelectronics, and peer-reviewed documentation.
          </p>
          <p style={{ fontSize: '0.98rem', lineHeight: 1.8, color: '#64748b', marginBottom: '20px' }}>
            Whether you require high-density <strong style={{ color: 'var(--text-primary)' }}>multi-layer PCB design</strong>, rapid{' '}
            <strong style={{ color: 'var(--text-primary)' }}>IoT embedded prototyping</strong> on ESP32/STM32/Raspberry Pi, edge <strong style={{ color: 'var(--text-primary)' }}>AI &amp; computer vision</strong>, or need to complete a high-stakes <strong style={{ color: 'var(--text-primary)' }}>university capstone or PhD research paper</strong> — our laboratory delivers industry-standard results.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '28px' }}>
            {pills.map((p) => (
              <div
                key={p}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  padding: '7px 14px',
                  border: '1px solid #e2e8f0',
                  color: '#475569',
                  background: '#f8fafc',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.background = 'rgba(1, 42, 45,  0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.background = '#f8fafc';
                }}
              >
                <span>•</span> {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
