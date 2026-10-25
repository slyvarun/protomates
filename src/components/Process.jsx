import React from 'react';

const steps = [
  {
    num: '01',
    phase: 'Phase 1',
    title: 'Requirement Scoping & BOM Specification',
    desc: 'We analyze your academic guidelines (IEEE/University), research scope, or startup hardware specs. We define the optimal microcontroller platform (ESP32, STM32, ARM, Arduino), sensor selections, and verified bill of materials.'
  },
  {
    num: '02',
    phase: 'Phase 2',
    title: 'Circuit Schematic & Custom PCB CAD Routing',
    desc: 'Our electrical engineers build verified schematics, component footprints, routing topologies, and multi-layer PCB layouts with production-ready Gerber fabrication files.'
  },
  {
    num: '03',
    phase: 'Phase 3',
    title: 'Embedded Firmware & Edge AI Integration',
    desc: 'We write clean, modular embedded C++/Python codebases, configure RTOS tasks, sensor calibration drivers, and deploy edge AI/TinyML models with complete inline documentation.'
  },
  {
    num: '04',
    phase: 'Phase 4',
    title: 'Physical Assembly & Rigorous Bench Testing',
    desc: 'Precision hardware assembly, SMD soldering, power plane verification, signal integrity debugging, and continuous stress testing to guarantee 100% reliable operation.'
  },
  {
    num: '05',
    phase: 'Phase 5',
    title: 'Turnkey Delivery, Reports & Viva Defense Prep',
    desc: 'Receive the fully functioning physical prototype, complete GitHub source repository, IEEE/LaTeX documentation reports, PPT presentations, and 1-on-1 mock viva coaching.'
  }
];

export default function Process() {
  return (
    <section id="process" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="section-label">How FSK Works</div>
      <h2 className="section-title">ENGINEERING ROADMAP</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', fontSize: '1.05rem', lineHeight: 1.7, marginTop: '-12px', marginBottom: '48px' }}>
        A transparent, milestone-driven prototyping methodology designed to ensure your hardware runs flawlessly and your documentation passes rigorous academic and investor scrutiny.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {steps.map((step) => (
          <div
            key={step.num}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr auto',
              gap: '28px',
              alignItems: 'center',
              padding: '32px 36px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(1, 42, 45,  0.35)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--accent)',
                lineHeight: 1
              }}
            >
              {step.num}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'var(--accent)',
                    background: 'rgba(1, 42, 45,  0.06)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  {step.phase}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  {step.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                {step.desc}
              </p>
            </div>

            <div style={{ justifySelf: 'end' }}>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  opacity: 0.6,
                  display: 'inline-block'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
