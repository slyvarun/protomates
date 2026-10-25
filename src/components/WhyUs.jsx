import React from 'react';
import { Zap, Microscope, GraduationCap, Globe } from 'lucide-react';

const reasons = [
  {
    icon: <Zap size={24} />,
    title: 'Rapid Prototyping Turnaround',
    desc: 'We respect deadlines. From breadboard proofs to custom fabricated PCBs and codebases, we deliver accelerated hardware solutions without cutting corners.'
  },
  {
    icon: <Microscope size={24} />,
    title: 'Production-Grade Standards',
    desc: 'Industry-grade EDA schematics, clean embedded C++/Python code, proper decoupling, ESD protection, and comprehensive IEEE documentation.'
  },
  {
    icon: <GraduationCap size={24} />,
    title: '100% Viva & Mentorship Support',
    desc: 'We do not just hand over hardware - we teach you the underlying engineering principles, architecture diagrams, and viva defense strategies.'
  },
  {
    icon: <Globe size={24} />,
    title: 'Prototypes Across Every Field',
    desc: 'Robotics, IoT, Healthcare, Smart Agriculture, Industrial Automation, AI/ML, and Green Tech - we turn any concept into a working system.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" style={{ background: 'var(--dark)' }}>
      <div className="section-label">Why Protomates</div>
      <h2 className="section-title">WHY CHOOSE<br />OUR LAB</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          marginTop: '60px',
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {reasons.map((r, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                padding: '26px',
                border: '1px solid var(--border)',
                background: 'var(--black)',
                transition: 'border-color 0.3s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                  background: 'rgba(200,255,0,0.07)',
                  border: '1px solid rgba(200,255,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}
              >
                {r.icon}
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '1px', marginBottom: '6px', color: 'var(--white)' }}>
                  {r.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.7, margin: 0 }}>
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Radar Ring Visual */}
        <div
          style={{
            position: 'relative',
            height: '420px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <style>
            {`
              @keyframes radarSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}
          </style>

          <div
            style={{
              position: 'absolute',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              animation: 'radarSpin 30s linear infinite'
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              border: '1px solid rgba(200,255,0,0.15)',
              animation: 'radarSpin 20s linear infinite reverse'
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              animation: 'radarSpin 15s linear infinite'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '5.5rem', color: 'var(--accent)', lineHeight: 1, display: 'block' }}>
              100%
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '3px', color: 'var(--gray)', textTransform: 'uppercase' }}>
              Working<br />Hardware
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
