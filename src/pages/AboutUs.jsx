import React, { useEffect } from 'react';
import { Cpu, ShieldCheck, Award, Microscope, GraduationCap, Rocket, CheckCircle2, Terminal, Layers, ArrowRight, Zap, BookOpen } from 'lucide-react';
import Marquee from '../components/Marquee';

export default function AboutUs({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ paddingTop: '100px', background: 'var(--black)', minHeight: '100vh', color: 'var(--white)' }}>
      {/* Hero Header Section */}
      <section style={{ padding: '80px 48px 60px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(200, 255, 0, 0.1), transparent 70%)',
            filter: 'blur(100px)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Engineering Laboratory • About Us</div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 8.5rem)',
              lineHeight: 0.88,
              letterSpacing: '2px',
              marginBottom: '32px'
            }}
          >
            TURNING ABSTRACTS INTO <br />
            <span style={{ color: 'var(--accent)' }}>PHYSICAL REALITY</span> &amp;{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--white)' }}>
              PEER-REVIEWED PAPERS
            </span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#aaa',
              lineHeight: 1.85,
              maxWidth: '820px',
              marginBottom: '40px'
            }}
          >
            <strong style={{ color: 'var(--white)' }}>Protomates Lab</strong> was founded by hardware engineers, embedded firmware developers, and scientific researchers who experienced first-hand the systemic failures of generic project centers. We bridge the critical chasm between conceptual theory, physical working hardware, and publication-ready documentation.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => (onNavigate ? onNavigate('services') : (window.location.hash = '#services'))}
              className="btn-primary"
              style={{ cursor: 'pointer' }}
            >
              Explore Our Services &amp; Work <ArrowRight size={16} />
            </button>
            <button
              onClick={() => (onNavigate ? onNavigate('contact') : (window.location.hash = '#contact'))}
              className="btn-ghost"
              style={{ cursor: 'pointer', border: '1px solid var(--border)' }}
            >
              Consult With Our Engineers
            </button>
          </div>
        </div>
      </section>

      {/* Origin Story & Core Mission */}
      <section style={{ padding: '80px 48px', background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="section-label">The Protomates Genesis</div>
            <h2 className="section-title">
              WHY WE <br />
              <span style={{ color: 'var(--accent)' }}>EXIST</span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#999', lineHeight: 1.85, marginBottom: '20px' }}>
              Every academic year, thousands of engineering students are sold generic, non-working breadboard projects by disreputable middlemen, leaving them helpless during viva evaluations. Simultaneously, PhD scholars spend months formulating novel mathematical models but struggle to build empirical hardware testbeds required for SCI/Scopus journal validation.
            </p>
            <p style={{ fontSize: '1rem', color: '#999', lineHeight: 1.85, marginBottom: '20px' }}>
              Meanwhile, hardware startups burn through critical runway trying to hire disparate teams for PCB layout, firmware, 3D CAD casings, and cloud dashboards before they can even pitch to investors.
            </p>
            <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: 1.85 }}>
              <strong style={{ color: 'var(--accent)' }}>Protomates fixes this permanently.</strong> We operate as an integrated R&amp;D prototyping laboratory. We design, fabricate, program, document, and train — delivering turnkey systems that run flawlessly and documentation that passes the most rigorous peer reviews.
            </p>
          </div>

          <div
            style={{
              background: 'linear-gradient(145deg, #111116, #09090d)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '3px',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '28px'
              }}
            >
              Our Core Tenets
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                    background: 'rgba(200, 255, 0, 0.1)',
                    border: '1px solid var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--accent)'
                  }}
                >
                  <Cpu size={20} />
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--white)', margin: '0 0 6px' }}>
                    Zero Breadboard Spaghetti
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#888', lineHeight: 1.6, margin: 0 }}>
                    We route multi-layer or dual-layer PCBs with industrial precision. Clean solder joints, labeled test points, and professional wiring harnesses.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                    background: 'rgba(0, 229, 255, 0.1)',
                    border: '1px solid #00e5ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#00e5ff'
                  }}
                >
                  <BookOpen size={20} />
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--white)', margin: '0 0 6px' }}>
                    100% Original, Plagiarism-Free Documentation
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#888', lineHeight: 1.6, margin: 0 }}>
                    Every thesis, report, and journal manuscript is drafted from scratch, formatted to IEEE/LaTeX standards, with crystal clear vector schematics.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                    background: 'rgba(255, 60, 172, 0.1)',
                    border: '1px solid var(--accent2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--accent2)'
                  }}
                >
                  <Award size={20} />
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--white)', margin: '0 0 6px' }}>
                    Total Defense &amp; Pitch Readiness
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#888', lineHeight: 1.6, margin: 0 }}>
                    We don’t just deliver a box of parts. We host 1-on-1 walkthroughs, explain every line of code, and prepare you for toughest examiner or investor questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Innovators We Serve */}
      <section style={{ padding: '90px 48px', background: 'var(--black)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Tailored For Your Journey</div>
          <h2 className="section-title">
            WHO WE <span style={{ color: 'var(--accent)' }}>EMPOWER</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              marginTop: '48px'
            }}
          >
            {/* Student Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(200, 255, 0, 0.3)',
                borderRadius: '8px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}
                >
                  <GraduationCap size={20} /> Students • Academic Projects
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--white)', marginBottom: '14px' }}>
                  Undergraduate &amp; Masters Capstones
                </h3>
                <p style={{ color: '#999', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Designed specifically for B.Tech, M.Tech, and Diploma students requiring reliable, IEEE-aligned final year projects that impress external examiners and guarantee top departmental grades.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['100% functional working hardware delivered', '80–120 page University Thesis + PPT slide deck', 'Line-by-line code explanation & viva defense guide', 'Doorstep physical kit dispatch & live video proof'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#ccc' }}>
                      <CheckCircle2 size={15} color="var(--accent)" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Scholar Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(0, 229, 255, 0.3)',
                borderRadius: '8px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    color: '#00e5ff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}
                >
                  <Microscope size={20} /> Professional Scholars • Research
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--white)', marginBottom: '14px' }}>
                  PhD Candidates &amp; Scientific Fellows
                </h3>
                <p style={{ color: '#999', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Specialized execution of complex mathematical algorithms, multiphysics simulations, edge AI architectures, and high-standard LaTeX manuscripts for Scopus &amp; SCI journals.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['MATLAB, Python, Simulink & ANSYS simulations', 'Hardware-in-the-Loop (HIL) testbed verification', 'Publication-grade LaTeX manuscript & BibTeX formatting', 'Comparative evaluation graphs & reviewer rebuttal support'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#ccc' }}>
                      <CheckCircle2 size={15} color="#00e5ff" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Startup Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 60, 172, 0.3)',
                borderRadius: '8px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    color: 'var(--accent2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}
                >
                  <Rocket size={20} /> Startup Founders • MVP Prototyping
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--white)', marginBottom: '14px' }}>
                  Early-Stage Founders &amp; Hardware Startups
                </h3>
                <p style={{ color: '#999', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Ultra-rapid 2–4 week transition from product concept to fully working Minimum Viable Product (MVP), custom PCB Gerbers, 3D enclosures, and investor technical dossiers.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Production-ready multi-layer PCB Gerbers & BOM', 'Custom 3D CAD casing design (Resin / FDM 3D prints)', 'Firmware (STM32/ESP32) + Cloud IoT Telemetry Webapp', '100% intellectual property (IP) and source code transfer'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#ccc' }}>
                      <CheckCircle2 size={15} color="var(--accent2)" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Facilities & Equipment */}
      <section style={{ padding: '80px 48px', background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Infrastructure &amp; Tooling</div>
          <h2 className="section-title">
            LAB CAPABILITIES &amp;<br />
            <span style={{ color: 'var(--accent)' }}>TESTING RIGS</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              marginTop: '48px'
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
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '6px',
                  padding: '28px',
                  transition: 'all 0.3s'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                    marginBottom: '10px',
                    letterSpacing: '2px'
                  }}
                >
                  STATION 0{idx + 1}
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--white)', margin: '0 0 10px' }}>
                  {facility.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#888', lineHeight: 1.6, margin: 0 }}>{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Direct Contact Banner */}
      <section style={{ padding: '100px 48px', textAlign: 'center', background: 'var(--black)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Work With Our Engineers
          </div>
          <h2 className="section-title">
            READY TO BRING YOUR <br />
            <span style={{ color: 'var(--accent)' }}>PROJECT TO LIFE?</span>
          </h2>
          <p style={{ color: '#999', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '36px' }}>
            Whether you are on a tight college review deadline, preparing an IEEE paper submission, or building your first commercial hardware MVP — our team is ready to execute.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => (onNavigate ? onNavigate('contact') : (window.location.hash = '#contact'))}
              className="btn-primary"
              style={{ cursor: 'pointer' }}
            >
              Start Project Consultation <span>→</span>
            </button>
            <button
              onClick={() => (onNavigate ? onNavigate('services') : (window.location.hash = '#services'))}
              className="btn-ghost"
              style={{ cursor: 'pointer', border: '1px solid var(--border)' }}
            >
              Review Our Services &amp; Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
