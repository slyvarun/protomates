import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const reviews = [
  {
    initial: 'R',
    name: 'Rahul Sharma',
    role: 'Final Year B.Tech, ECE',
    category: 'Student Capstone',
    text: 'FSK built my final year ESP32 IoT capstone project from schematic to working hardware. Their viva guidance and 95-page thesis documentation helped me achieve the top grade in my department!'
  },
  {
    initial: 'P',
    name: 'Dr. Priya Menon',
    role: 'M.Tech / Postdoc Scholar, AI & Robotics',
    category: 'Professional Scholar',
    text: 'The Edge AI computer vision research testbed they implemented on Jetson Nano was mathematically rigorous and cleanly documented. The LaTeX manuscript and benchmark graphs sailed through IEEE reviewer evaluations.'
  },
  {
    initial: 'A',
    name: 'Arjun Reddy',
    role: 'Co-Founder & CEO, Nexus Hardware',
    category: 'Startup Founder',
    text: 'Our startup needed a 4-layer custom PCB design template on an ultra tight deadline. FSK delivered flawless KiCad schematics and Gerbers in record time with zero DRC errors.'
  },
  {
    initial: 'M',
    name: 'Meera Krishna',
    role: 'Engineering Student, Mechatronics',
    category: 'Student Capstone',
    text: 'The Arduino-based mechatronics project was assembled with military-grade neatness. Every sensor calibration and viva question was covered in detail during our 1-on-1 prep sessions. Truly life savers!'
  },
  {
    initial: 'S',
    name: 'Saurabh Gupta',
    role: 'PhD Scholar, Biomedical Engineering',
    category: 'Professional Scholar',
    text: 'Best engineering support team! They took time over screen shares to explain every line of embedded code and how each IC interacts on the PCB. Formatted our Scopus journal paper with zero revisions needed.'
  },
  {
    initial: 'V',
    name: 'Vikram Joshi',
    role: 'Founder, AgriTech Solutions',
    category: 'Startup Founder',
    text: 'From smart agriculture LoRaWAN IoT to cloud telemetry dashboards, FSK genuinely delivers prototypes across every field. We used this exact MVP to close our angel pre-seed round!'
  }
];

export default function Testimonials() {
  return (
    <section id="clients" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
      <div className="section-label">Client Stories &amp; Academic Reviews</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
        <div>
          <h2 className="section-title" style={{ margin: 0 }}>
            PROVEN TRACK RECORD
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '8px', maxWidth: '580px' }}>
            Trusted by 150+ university students, doctoral researchers, and hardware startups worldwide.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            padding: '12px 20px',
            borderRadius: '10px'
          }}
        >
          <div style={{ display: 'flex', gap: '3px', color: '#f59e0b' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#f59e0b" />
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            4.98 / 5.0 Rating
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}
      >
        {reviews.map((rev, i) => (
          <div
            key={i}
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 82, 255, 0.35)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} fill="#f59e0b" />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'var(--accent)',
                    background: 'rgba(0, 82, 255, 0.05)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  {rev.category}
                </span>
              </div>

              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                "{rev.text}"
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid #f1f5f9', paddingTop: '18px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0052ff, #0284c7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  fontWeight: 700,
                  flexShrink: 0
                }}
              >
                {rev.initial}
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {rev.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
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
