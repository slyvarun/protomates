import React from 'react';

const steps = [
  {
    num: '01',
    tag: 'Phase 1',
    title: 'Requirement Scoping & Architecture',
    desc: 'We analyze your project goals, academic guidelines (IEEE/University), or product specifications. We define the optimal hardware platform (ESP32, Arduino, ARM), sensor selections, and budget BOM.'
  },
  {
    num: '02',
    tag: 'Phase 2',
    title: 'Circuit Schematic & PCB Layout',
    desc: 'Our EDA engineers build electrical schematics, component footprints, routing topologies, and multi-layer PCB design templates with verified Gerber fabrication files.'
  },
  {
    num: '03',
    tag: 'Phase 3',
    title: 'Firmware & AI Algorithm Integration',
    desc: 'We write clean, modular embedded C++/Python code, configure RTOS tasks, integrate sensor drivers, and train or deploy edge AI/ML models on target hardware.'
  },
  {
    num: '04',
    tag: 'Phase 4',
    title: 'Hardware Prototyping & Bench Testing',
    desc: 'Physical prototype assembly, board soldering, power plane verification, signal debugging, and end-to-end performance stress testing to guarantee rock-solid reliability.'
  },
  {
    num: '05',
    tag: 'Phase 5',
    title: 'Delivery, Reports & Viva Guidance',
    desc: 'You receive the fully working prototype, source code repository, documentation reports, PPT presentations, and comprehensive 1-on-1 viva defense coaching.'
  }
];

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--dark)' }}>
      <div className="section-label">How Protomates Works</div>
      <h2 className="section-title">ENGINEERING<br />PROCESS</h2>

      <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'column' }}>
        {steps.map((step) => (
          <div
            key={step.num}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '30px',
              alignItems: 'center',
              padding: '44px 0',
              borderBottom: '1px solid var(--border)'
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: 'rgba(200,255,0,0.3)', lineHeight: 1 }}>
              {step.num}
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', letterSpacing: '2px', color: 'var(--white)', marginBottom: '10px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#777', lineHeight: 1.8, maxWidth: '600px', margin: 0 }}>
                {step.desc}
              </p>
            </div>

            <div style={{ justifySelf: 'end' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '2px',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(200,255,0,0.3)',
                  background: 'rgba(200,255,0,0.04)',
                  padding: '8px 18px',
                  whiteSpace: 'nowrap'
                }}
              >
                {step.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
