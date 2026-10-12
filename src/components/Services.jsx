import React from 'react';
import { Cpu, Wifi, GraduationCap, Brain, Compass, Layers } from 'lucide-react';

const offerings = [
  {
    num: '01',
    badge: 'Hardware EDA',
    icon: <Cpu size={28} />,
    title: 'PCB Designing',
    desc: 'Complete printed circuit board engineering from concept schematic capture to multi-layer routing, impedance matching, power plane optimization, and production-ready Gerber & BOM file generation.',
    tags: ['Altium & KiCad', 'Multi-Layer', 'Gerber & BOM', 'High-Speed', 'SMD / THT']
  },
  {
    num: '02',
    badge: 'Smart Connected',
    icon: <Wifi size={28} />,
    title: 'IoT Prototyping',
    desc: 'Smart connected devices engineered with ESP32, Arduino, Raspberry Pi, LoRa, BLE, and cellular telemetry. Integrating real-time sensor arrays with modern cloud dashboards and MQTT brokers.',
    tags: ['ESP32 & Arduino', 'Sensor Fusion', 'MQTT & HTTP', 'Cloud Dashboards', 'LoRa & BLE']
  },
  {
    num: '03',
    badge: 'College & IEEE',
    icon: <GraduationCap size={28} />,
    title: 'Undertaking Academic Projects',
    desc: 'End-to-end execution of B.Tech, M.Tech, and diploma capstone projects based on IEEE publications and custom problem statements. We deliver fully functioning hardware, simulations, and complete documentation.',
    tags: ['Final Year Capstone', 'IEEE Standards', 'Working Hardware', 'Thesis & Reports', 'PPT & Viva']
  },
  {
    num: '04',
    badge: 'Edge Intelligence',
    icon: <Brain size={28} />,
    title: 'AI/ML Based Projects',
    desc: 'Cutting-edge machine learning and computer vision architectures deployed on edge hardware like NVIDIA Jetson Nano, Raspberry Pi, and embedded TinyML for real-time vision, prediction, and edge inference.',
    tags: ['Computer Vision', 'TinyML / Edge AI', 'Jetson Nano', 'Deep Learning', 'Python & OpenCV']
  },
  {
    num: '05',
    badge: 'Mentorship',
    icon: <Compass size={28} />,
    title: 'Projects Guidance & Supports',
    desc: 'Personalized 1-on-1 mentorship, line-by-line code walkthroughs, schematic analysis, hardware debugging sessions, and comprehensive viva preparation so you confidently ace evaluations and project reviews.',
    tags: ['1-on-1 Mentorship', 'Viva Defense Prep', 'Code Walkthrough', 'Debugging Help', '24/7 Support']
  },
  {
    num: '06',
    badge: 'Cross-Domain',
    icon: <Layers size={28} />,
    title: 'Prototype Projects in Every Field',
    desc: 'Versatile cross-domain hardware & embedded engineering prototypes spanning Robotics, Automation, Smart Agriculture, Biomedical & Healthcare, Renewable Energy, and Smart Cities.',
    tags: ['Robotics', 'Healthcare Tech', 'Smart Agri', 'Industrial 4.0', 'Green Energy']
  }
];

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--dark)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <div>
          <div className="section-label">What We Are Offering</div>
          <h2 className="section-title">OUR CORE<br />OFFERINGS</h2>
        </div>
        <p style={{ maxWidth: '520px', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '10px' }}>
          From circuit schematics to deployable prototypes, explore our six core technical domains engineered for students, researchers, startups, and makers.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginTop: '60px'
        }}
      >
        {offerings.map((item) => (
          <div
            key={item.num}
            style={{
              background: 'var(--card)',
              padding: '44px 36px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--card-hover)';
              e.currentTarget.style.borderColor = 'rgba(200,255,0,0.3)';
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--card)';
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '3px', opacity: 0.8 }}>
                  {item.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '1px',
                    padding: '4px 8px',
                    background: 'rgba(200,255,0,0.06)',
                    border: '1px solid rgba(200,255,0,0.2)',
                    color: 'var(--accent)',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.badge}
                </div>
              </div>

              <div
                style={{
                  width: '52px',
                  height: '52px',
                  marginBottom: '24px',
                  color: 'var(--accent)',
                  background: 'rgba(200,255,0,0.05)',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid rgba(200,255,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.1rem',
                  letterSpacing: '2px',
                  marginBottom: '14px',
                  color: 'var(--white)',
                  lineHeight: 1.1
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: '#777', lineHeight: 1.8, marginBottom: '24px' }}>
                {item.desc}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
              {item.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '1px',
                    padding: '5px 12px',
                    background: 'rgba(200,255,0,0.05)',
                    border: '1px solid rgba(200,255,0,0.15)',
                    color: 'var(--accent)',
                    textTransform: 'uppercase'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
