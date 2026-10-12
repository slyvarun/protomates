import React from 'react';

const reviews = [
  {
    initial: 'R',
    name: 'Rahul Sharma',
    role: 'Final Year B.Tech, ECE',
    text: 'Protomates built my final year ESP32 IoT capstone project from schematic to working hardware. Their viva guidance and report documentation helped me achieve the top grade in my department!'
  },
  {
    initial: 'P',
    name: 'Priya Menon',
    role: 'M.Tech Scholar, AI & Robotics',
    gradient: 'linear-gradient(135deg, #00e5ff, #ff3cac)',
    text: 'The Edge AI computer vision prototype they delivered on Jetson Nano was phenomenal. Clean Python code, optimized models, and crystal clear explanations for every algorithm.'
  },
  {
    initial: 'A',
    name: 'Arjun Reddy',
    role: 'Founder, Nexus Hardware',
    gradient: 'linear-gradient(135deg, #ff3cac, #c8ff00)',
    text: 'Our startup needed a 4-layer custom PCB design template on an ultra tight deadline. Protomates delivered flawless KiCad schematics and Gerbers in record time with zero DRC errors.'
  },
  {
    initial: 'M',
    name: 'Meera Krishna',
    role: 'Engineering Student',
    gradient: 'linear-gradient(135deg, #00e5ff, #c8ff00)',
    text: 'The Arduino-based mechatronics project was assembled with military-grade neatness. Every sensor calibration and viva question was covered in detail. Truly life savers!'
  },
  {
    initial: 'S',
    name: 'Saurabh Gupta',
    role: 'Hardware Developer',
    gradient: 'linear-gradient(135deg, #c8ff00, #00e5ff)',
    text: 'Best project guidance team! They took time over screen shares to explain every line of embedded code and how each IC interacts on the PCB. Unmatched dedication.'
  },
  {
    initial: 'K',
    name: 'Kavya Iyer',
    role: 'Research Fellow',
    gradient: 'linear-gradient(135deg, #ff3cac, #00e5ff)',
    text: 'From smart agriculture IoT to healthcare sensors, Protomates genuinely delivers prototypes across every field. The hardware finish and cloud telemetry dashboard were stunning.'
  }
];

export default function Testimonials() {
  return (
    <section id="clients" style={{ background: 'var(--black)', overflow: 'hidden' }}>
      <div className="section-label">Client Stories &amp; Academic Reviews</div>

      <div style={{ position: 'relative' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(6rem, 15vw, 16rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(200,255,0,0.2)',
            lineHeight: 0.9,
            userSelect: 'none'
          }}
        >
          <span style={{ WebkitTextStroke: '2px var(--accent)', color: 'transparent' }}>150</span>+
        </div>
        <h2 className="section-title" style={{ marginTop: '-20px' }}>
          PROVEN<br />SUCCESS
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginTop: '50px'
        }}
      >
        {reviews.map((rev, i) => (
          <div
            key={i}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              padding: '36px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.3s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(200,255,0,0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <div style={{ display: 'flex', gap: '4px', marginBottom: '18px', color: 'var(--accent)', fontSize: '0.9rem' }}>
              {'★★★★★'}
            </div>

            <p style={{ fontSize: '0.92rem', color: '#888', lineHeight: 1.85, marginBottom: '24px' }}>
              "{rev.text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border)', paddingTop: '18px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: rev.gradient || 'linear-gradient(135deg, var(--accent), var(--accent3))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  color: 'var(--black)',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}
              >
                {rev.initial}
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--white)' }}>
                  {rev.name}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '1.5px', color: 'var(--gray)', textTransform: 'uppercase' }}>
                  {rev.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
