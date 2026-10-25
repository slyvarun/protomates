import React, { useEffect } from 'react';
import Marquee from '../components/Marquee';

export default function AboutUs({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Hero Header Section */}
      <section style={{ padding: '120px 48px 60px', position: 'relative', overflow: 'hidden', background: 'transparent' }}>
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(0, 82, 255, 0.05), transparent 70%)',
            filter: 'blur(100px)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', textAlign: 'left' }}>
          <div className="section-label">Engineering Laboratory • About FSK</div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              margin: '0 0 18px',
              maxWidth: '920px',
              color: 'var(--text-primary)'
            }}
          >
            <span>TURNING ABSTRACTS INTO </span>
            <br />
            <span style={{ color: 'var(--accent)' }}>PHYSICAL WORKING HARDWARE</span> &amp;{' '}
            <span style={{ color: '#475569' }}>SCIENTIFIC PAPERS.</span>
          </h1>

          <p
            style={{
              fontSize: '1.08rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 0 32px'
            }}
          >
            <strong style={{ color: 'var(--text-primary)' }}>FSK</strong> is a premier prototyping services laboratory founded by hardware engineers, embedded firmware developers, and scientific researchers. We bridge the critical chasm between conceptual theory, physical working hardware, and publication-ready documentation.
          </p>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => (onNavigate ? onNavigate('services') : (window.location.hash = '#services'))}
              className="btn-primary"
              style={{ cursor: 'pointer', padding: '12px 26px', fontSize: '0.92rem', fontWeight: 700 }}
            >
              Explore Our Services &amp; Work
            </button>
            <button
              onClick={() => (onNavigate ? onNavigate('contact') : (window.location.hash = '#contact'))}
              className="btn-ghost"
              style={{
                cursor: 'pointer',
                border: '1px solid #cbd5e1',
                color: '#090d16',
                padding: '12px 24px',
                fontSize: '0.92rem',
                fontWeight: 600
              }}
            >
              Consult With Our Engineers
            </button>
          </div>
        </div>
      </section>

      {/* Origin Story & Core Mission */}
      <section style={{ padding: '80px 48px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="section-label">The FSK Genesis</div>
            <h2 className="section-title">
              WHY WE <br />
              <span style={{ color: 'var(--accent)' }}>EXIST</span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.85, marginBottom: '20px' }}>
              Every academic year, thousands of engineering students are sold generic, non-working breadboard projects by disreputable middlemen, leaving them helpless during viva evaluations. Simultaneously, PhD scholars spend months formulating novel mathematical models but struggle to build empirical hardware testbeds required for SCI/Scopus journal validation.
            </p>
            <p className="mobile-hide" style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.85, marginBottom: '20px' }}>
              Meanwhile, hardware startups burn through critical runway trying to hire disparate teams for PCB layout, firmware, 3D CAD casings, and cloud dashboards before they can even pitch to investors.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.85, fontWeight: 500 }}>
              <strong style={{ color: 'var(--accent)' }}>FSK fixes this permanently.</strong> We operate as an integrated R&amp;D prototyping laboratory. We design, fabricate, program, document, and train — delivering turnkey systems that run flawlessly and documentation that passes the most rigorous peer reviews.
            </p>
          </div>

          <div
            className="mobile-card-compact"
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: 'clamp(20px, 4vw, 40px)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '2px',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '28px',
                fontWeight: 700
              }}
            >
              Our Core Tenets
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(0, 82, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 800
                  }}
                >
                  01
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                    Zero Breadboard Spaghetti
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    We route multi-layer or dual-layer PCBs with industrial precision. Clean solder joints, labeled test points, and professional wiring harnesses.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(2, 132, 199, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#0284c7',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 800
                  }}
                >
                  02
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                    100% Original Plagiarism-Free Papers
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    Every thesis, report, and journal manuscript is drafted from scratch, formatted to IEEE/LaTeX standards, with crystal clear vector schematics.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(5, 150, 105, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#059669',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 800
                  }}
                >
                  03
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                    Total Defense &amp; Pitch Readiness
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    We don’t just deliver a box of parts. We host 1-on-1 walkthroughs, explain every line of code, and prepare you for toughest examiner or investor questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Innovators We Serve */}
      <section style={{ padding: '90px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Tailored For Your Journey</div>
          <h2 className="section-title">
            WHO WE <span style={{ color: 'var(--accent)' }}>EMPOWER</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
              marginTop: '40px'
            }}
          >
            {/* Student Card */}
            <div
              className="mobile-card-compact"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.25s ease'
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
                <div
                  style={{
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}
                >
                  TRACK 01 // STUDENTS • ACADEMIC PROJECTS
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                  Undergraduate &amp; Masters Capstones
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Designed specifically for B.Tech, M.Tech, and Diploma students requiring reliable, IEEE-aligned final year projects that impress external examiners and guarantee top departmental grades.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['100% functional working hardware delivered', '80–120 page University Thesis + PPT slide deck', 'Line-by-line code explanation & viva defense guide', 'Doorstep physical kit dispatch & live video proof'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#475569' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 800 }}>—</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Scholar Card */}
            <div
              className="mobile-card-compact"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.35)';
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
                <div
                  style={{
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}
                >
                  TRACK 02 // PROFESSIONAL SCHOLARS • RESEARCH
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                  PhD Candidates &amp; Scientific Fellows
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Specialized execution of complex mathematical algorithms, multiphysics simulations, edge AI architectures, and high-standard LaTeX manuscripts for Scopus &amp; SCI journals.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['MATLAB, Python, Simulink & ANSYS simulations', 'Hardware-in-the-Loop (HIL) testbed verification', 'Publication-grade LaTeX manuscript & BibTeX formatting', 'Comparative evaluation graphs & reviewer rebuttal support'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#475569' }}>
                      <span style={{ color: '#0284c7', fontWeight: 800 }}>—</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Startup Card */}
            <div
              className="mobile-card-compact"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(5, 150, 105, 0.35)';
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
                <div
                  style={{
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}
                >
                  TRACK 03 // STARTUP FOUNDERS • MVP PROTOTYPING
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                  Early-Stage Founders &amp; Hardware Startups
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Ultra-rapid 2–4 week transition from product concept to fully working Minimum Viable Product (MVP), custom PCB Gerbers, 3D enclosures, and investor technical dossiers.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Production-ready multi-layer PCB Gerbers & BOM', 'Custom 3D CAD casing design (Resin / FDM 3D prints)', 'Firmware (STM32/ESP32) + Cloud IoT Telemetry Webapp', '100% intellectual property (IP) and source code transfer'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#475569' }}>
                      <span style={{ color: '#059669', fontWeight: 800 }}>—</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Facilities & Equipment */}
      <section style={{ padding: '80px 48px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="section-label">Infrastructure &amp; Tooling</div>
          <h2 className="section-title">
            LAB CAPABILITIES &amp; <br />
            <span style={{ color: 'var(--accent)' }}>TESTING RIGS</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              marginTop: '40px'
            }}
          >
            {[
              {
                title: 'High-Density EDA CAD',
                desc: 'Altium Designer 365, KiCad 8, and EasyEDA Pro for multi-layer routing, impedance matching, and Gerber/BOM generation.'
              },
              {
                title: 'Edge AI Compute Cluster',
                desc: 'NVIDIA Jetson Orin Nano, Coral Edge TPU, Raspberry Pi 5, and GPU workstations for real-time PyTorch & OpenCV inference.'
              },
              {
                title: 'Precision SMT & Rework Station',
                desc: 'Digital hot-air reflow stations, lead-free SMD soldering rigs, microscopes, and Rigol 4-channel 100MHz oscilloscopes.'
              },
              {
                title: 'Rapid 3D Casing Fabrication',
                desc: 'High-precision 14K resin 3D printers and high-speed Bambu Lab FDM printers for custom enclosure prototyping.'
              }
            ].map((facility, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 82, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    marginBottom: '10px',
                    letterSpacing: '1.5px'
                  }}
                >
                  STATION 0{idx + 1}
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 10px' }}>
                  {facility.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Direct Contact Banner */}
      <section style={{ padding: '100px 48px', textAlign: 'center', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Work With Our Engineers
          </div>
          <h2 className="section-title">
            READY TO BRING YOUR <br />
            <span style={{ color: 'var(--accent)' }}>PROJECT TO LIFE?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '36px' }}>
            Whether you are on a tight college review deadline, preparing an IEEE paper submission, or building your first commercial hardware MVP — our team is ready to execute.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => (onNavigate ? onNavigate('contact') : (window.location.hash = '#contact'))}
              className="btn-primary"
              style={{ cursor: 'pointer' }}
            >
              Start Project Consultation
            </button>
            <button
              onClick={() => (onNavigate ? onNavigate('services') : (window.location.hash = '#services'))}
              className="btn-ghost"
              style={{ cursor: 'pointer' }}
            >
              Review Services &amp; Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
