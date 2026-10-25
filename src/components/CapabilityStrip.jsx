import React from 'react';

const CAPABILITIES = [
  'Multi-layer PCB Engineering',
  'Custom IoT Telemetry',
  'STM32 & ESP32 Firmware',
  'Academic Capstone Rigs',
  'Edge AI & Computer Vision',
  'Schematics, Gerbers & BOM',
  'Physical Hardware Fabrication',
  'SCI & Scopus Paper Validation'
];

export default function CapabilityStrip() {
  return (
    <section
      aria-label="Core Engineering Capabilities"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '24px 32px',
        background: '#ffffff'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px 20px'
        }}
      >
        {CAPABILITIES.map((cap) => (
          <span
            key={cap}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.5px',
              color: 'var(--text-secondary)',
              padding: '6px 14px',
              borderRadius: '6px',
              background: '#f6f8f8',
              border: '1px solid var(--border)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span style={{ color: 'var(--accent)', fontWeight: 800 }}>•</span>
            {cap}
          </span>
        ))}
      </div>
    </section>
  );
}
