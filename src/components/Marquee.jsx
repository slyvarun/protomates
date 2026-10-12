import React from 'react';

const items = [
  'PCB Designing',
  'IoT Prototyping',
  'ESP32 & Arduino',
  'Academic Projects',
  'AI / ML Hardware',
  'Projects Guidance & Supports',
  'Prototypes in Every Field',
  'Schematics & Gerbers'
];

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        padding: '18px 0',
        background: 'var(--dark)'
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marqueeScroll 26s linear infinite'
        }}
      >
        <style>
          {`
            @keyframes marqueeScroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}
        </style>
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              letterSpacing: '4px',
              color: 'var(--gray)',
              padding: '0 35px',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            {item} <span style={{ color: 'var(--accent)', fontSize: '1.3rem' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
