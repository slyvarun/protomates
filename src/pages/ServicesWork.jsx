import React, { useState, useEffect } from 'react';
import { ALL_PROTOTYPES, CORE_OFFERINGS } from '../data/projectData';
import PrototypeModal from '../components/PrototypeModal';

export default function ServicesWork({ onNavigate, scrollToSection }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPrototype, setSelectedPrototype] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState('students');

  useEffect(() => {
    if (
      scrollToSection ||
      window.location.hash.includes('work') ||
      window.location.hash.includes('proven')
    ) {
      setTimeout(() => {
        const el = document.getElementById('work-gallery');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [scrollToSection]);

  const filteredPrototypes = ALL_PROTOTYPES.filter((proto) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'students') return proto.audienceId === 'students';
    if (activeFilter === 'scholars') return proto.audienceId === 'scholars';
    if (activeFilter === 'startups') return proto.audienceId === 'startups';
    if (activeFilter === 'pcb') return proto.cat.toLowerCase().includes('pcb');
    if (activeFilter === 'iot') return proto.cat.toLowerCase().includes('iot');
    if (activeFilter === 'ai') return proto.cat.toLowerCase().includes('ai') || proto.cat.toLowerCase().includes('hardware');
    return true;
  });

  const handleInquireFromModal = (audienceId) => {
    setSelectedPrototype(null);
    if (onNavigate) {
      onNavigate('contact', { audience: audienceId });
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', color: '#090d16' }}>
      {/* Page Header */}
      <section style={{ padding: '120px 48px 60px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-60px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(1, 42, 45,  0.05), transparent 70%)',
            filter: 'blur(90px)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, textAlign: 'left' }}>
          <div className="section-label">Engineering Services &amp; Prototype Catalog</div>
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
            <span>ENGINEERING SERVICES &amp; </span>
            <br />
            <span style={{ color: 'var(--accent)' }}>PROTOTYPE SHOWCASE.</span>
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
            Explore our specialized engineering services tailored for <strong style={{ color: '#012A2D' }}>Students</strong>,{' '}
            <strong style={{ color: '#435355' }}>Professional Scholars</strong>, and{' '}
            <strong style={{ color: '#012A2D' }}>Startup Founders</strong> — alongside our portfolio of battle-tested hardware prototypes and research documentation.
          </p>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="#work-gallery"
              className="btn-primary"
              style={{ cursor: 'pointer', padding: '12px 26px', fontSize: '0.92rem', fontWeight: 700 }}
            >
              Jump To Work Gallery
            </a>
            <a
              href="#services-matrix"
              className="btn-ghost"
              style={{
                cursor: 'pointer',
                border: '1px solid rgba(67, 83, 85, 0.25)',
                color: '#012A2D',
                padding: '12px 24px',
                fontSize: '0.92rem',
                fontWeight: 600
              }}
            >
              View Deliverables Matrix
            </a>
          </div>
        </div>
      </section>

      {/* Part 1: Specialized Service Tracks for the 3 Innovators */}
      <section style={{ padding: '80px 48px', background: '#f6f8f8', borderTop: '1px solid rgba(67, 83, 85, 0.18)', borderBottom: '1px solid rgba(67, 83, 85, 0.18)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="section-label">Tailored Service Tracks</div>
          <h2 className="section-title">
            SERVICES BY <span style={{ color: '#012A2D' }}>AUDIENCE</span>
          </h2>
          <p style={{ color: '#435355', fontSize: '1.02rem', lineHeight: 1.7, maxWidth: '750px', marginBottom: '40px' }}>
            Each track is designed with distinct engineering standards, documentation formats, and coaching protocols to match your exact milestone goals.
          </p>

          {/* Track Switcher */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {[
              { id: 'students', label: 'For Students (Academic Projects)', activeBg: '#012A2D', activeColor: '#ffffff' },
              { id: 'scholars', label: 'For Professional Scholars (Research Papers)', activeBg: '#435355', activeColor: '#ffffff' },
              { id: 'startups', label: 'For Startups (Commercial MVPs)', activeBg: '#012A2D', activeColor: '#ffffff' }
            ].map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                style={{
                  background: selectedTrack === track.id ? track.activeBg : '#ffffff',
                  color: selectedTrack === track.id ? track.activeColor : '#435355',
                  border: selectedTrack === track.id ? `1px solid ${track.activeBg}` : '1px solid rgba(67, 83, 85, 0.2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.5px',
                  padding: '12px 22px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: selectedTrack === track.id ? '700' : '500',
                  boxShadow: selectedTrack === track.id ? '0 4px 14px rgba(1, 42, 45, 0.25)' : '0 1px 3px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s'
                }}
              >
                {track.label}
              </button>
            ))}
          </div>

          {/* Track Detail Grid */}
          {selectedTrack === 'students' && (
            <div
              className="mobile-card-compact"
              style={{
                background: '#ffffff',
                border: '1.5px solid #012A2D',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 44px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '32px',
                boxShadow: '0 10px 30px rgba(1, 42, 45, 0.08)'
              }}
            >
              <div>
                <div style={{ color: '#012A2D', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Student Track • B.Tech / M.Tech / Diploma Capstones
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: '#012A2D', marginBottom: '16px', lineHeight: 1.2 }}>
                  Full Academic Project Undertakings &amp; Documentation
                </h3>
                <p style={{ color: '#435355', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: '24px' }}>
                  We handle the complete project lifecycle from base paper selection to final viva defense. We build 100% working hardware and author an extensive university-compliant thesis so you achieve the highest grades without stress.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'IEEE Base Paper Implementation & Hardware Replication',
                    'Custom PCB fabrication & ESP32 / Arduino / Jetson coding',
                    '80–120 Page Thesis, Project Reports & Formal Synopses',
                    'Seminar Presentation PPT Slide Decks with animations',
                    '1-on-1 Viva Defense mock rehearsals & code walkthroughs',
                    'Doorstep pan-India physical hardware dispatch'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#012A2D' }}>
                      <span style={{ color: '#012A2D', fontWeight: 800 }}>—</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#f6f8f8', border: '1px solid rgba(67, 83, 85, 0.2)', borderRadius: '12px', padding: '32px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: '#012A2D', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Standard Deliverables Included:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(1, 42, 45, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#012A2D', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}>01</span>
                    <div>
                      <strong style={{ color: '#012A2D', fontSize: '0.92rem' }}>Working Hardware Unit:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#435355', lineHeight: 1.5 }}>
                        Fully assembled, wired, and tested physical device with sensor calibration and labeled pins.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(1, 42, 45, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#012A2D', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}>02</span>
                    <div>
                      <strong style={{ color: '#012A2D', fontSize: '0.92rem' }}>Complete University Documentation:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#435355', lineHeight: 1.5 }}>
                        Formatted thesis, synopsis, circuit schematics, block diagrams, flowchart, and seminar PPT.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(1, 42, 45, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#012A2D', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}>03</span>
                    <div>
                      <strong style={{ color: '#012A2D', fontSize: '0.92rem' }}>Personalized Viva Preparation:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#435355', lineHeight: 1.5 }}>
                        1-on-1 screen share explaining every line of code, circuit component, and examiner FAQs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTrack === 'scholars' && (
            <div
              className="mobile-card-compact"
              style={{
                background: '#ffffff',
                border: '1.5px solid #435355',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 44px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '32px',
                boxShadow: '0 10px 30px rgba(67, 83, 85,  0.06)'
              }}
            >
              <div>
                <div style={{ color: '#435355', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Scholar Track • PhD Candidates &amp; Scientific Researchers
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: '#090d16', marginBottom: '16px', lineHeight: 1.2 }}>
                  High-Rigor Scientific Simulations &amp; Scopus/SCI Papers
                </h3>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: '24px' }}>
                  We collaborate with doctoral fellows and academic researchers to develop physical testbeds, numerical simulations (MATLAB, Simulink, ANSYS, ROS2), and camera-ready LaTeX manuscripts suitable for top-tier journal submission.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Novel algorithmic modeling & deep learning pipelines (PyTorch/TensorFlow)',
                    'Hardware-in-the-Loop (HIL) experimental testbed fabrication',
                    'MATLAB, Simulink, ANSYS & ROS2 autonomous simulations',
                    'SCI, Scopus & IEEE Transaction-standard LaTeX manuscripts',
                    'High-resolution vector schematics, architecture diagrams & metric plots',
                    'Reviewer rebuttal support & empirical validation experiments'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#1e293b' }}>
                      <span style={{ color: '#435355', fontWeight: 800 }}>—</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: '#435355', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Research Deliverables Package:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(67, 83, 85,  0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#435355', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}>01</span>
                    <div>
                      <strong style={{ color: '#090d16', fontSize: '0.92rem' }}>Experimental Testbed / Simulation Rig:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                        Reproducible simulation notebooks, testbed instrumentation, and real sensor calibration datasets.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(67, 83, 85,  0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#435355', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}>02</span>
                    <div>
                      <strong style={{ color: '#090d16', fontSize: '0.92rem' }}>Camera-Ready LaTeX Manuscript:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                        IEEE/Springer/Elsevier formatted LaTeX manuscript, vector graphs, and comprehensive bibtex references.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(67, 83, 85,  0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#435355', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}>03</span>
                    <div>
                      <strong style={{ color: '#090d16', fontSize: '0.92rem' }}>Peer-Review Rebuttal Pack:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                        Follow-up experiments, statistical comparative tables, and reviewer comment responses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTrack === 'startups' && (
            <div
              className="mobile-card-compact"
              style={{
                background: '#ffffff',
                border: '1.5px solid #4f46e5',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 44px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '32px',
                boxShadow: '0 10px 30px rgba(79, 70, 229, 0.06)'
              }}
            >
              <div>
                <div style={{ color: '#4f46e5', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Startup Track • Founders &amp; Deep-Tech Innovators
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: '#090d16', marginBottom: '16px', lineHeight: 1.2 }}>
                  Turnkey Minimum Viable Products &amp; Investor Packs
                </h3>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: '24px' }}>
                  Transform your napkin sketch into a commercial-grade working prototype in 2 to 4 weeks. We engineer production-ready multi-layer PCBs, custom 3D enclosure CAD, low-power firmware, cloud dashboards, and investor technical dossiers.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Production-ready Multi-Layer PCB Gerber & Pick-and-Place files',
                    'Custom 3D Enclosure CAD (Resin & FDM rapid 3D prototyping)',
                    'Industrial-grade embedded firmware (STM32, ESP32, nRF52 BLE)',
                    'Real-time Cloud IoT Dashboards & WebSocket/REST telemetry APIs',
                    'Investor-ready Technical Whitepapers & System Architecture Dossiers',
                    'Bill of Materials (BOM) optimization with component sourcing links'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: '#1e293b' }}>
                      <span style={{ color: '#4f46e5', fontWeight: 800 }}>—</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '32px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: '#4f46e5', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Commercial MVP Pack:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(79, 70, 229, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#4f46e5', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}>01</span>
                    <div>
                      <strong style={{ color: '#090d16', fontSize: '0.92rem' }}>Deployable Hardware MVP:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                        Custom assembled PCB, tested sensor array, and fitted 3D printed enclosure.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(79, 70, 229, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#4f46e5', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}>02</span>
                    <div>
                      <strong style={{ color: '#090d16', fontSize: '0.92rem' }}>Investor Technical Dossier:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                        Executive architecture whitepaper, system specs, BOM pricing per 1k units, and patent draft.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(79, 70, 229, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#4f46e5', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800 }}>03</span>
                    <div>
                      <strong style={{ color: '#090d16', fontSize: '0.92rem' }}>100% IP &amp; Source Ownership:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                        Full transfer of Gerber files, CAD STEP models, firmware Git repository, and cloud accounts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Part 2: Core Technological Competencies (6 Pillars) */}
      <section style={{ padding: '80px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="section-label">Engineering Capabilities</div>
          <h2 className="section-title">
            SIX CORE <span style={{ color: '#012A2D' }}>DOMAINS</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
              marginTop: '48px'
            }}
          >
            {CORE_OFFERINGS.map((item) => (
              <div
                key={item.num}
                style={{
                  background: '#ffffff',
                  padding: '36px 30px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#012A2D';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(1, 42, 45,  0.09)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 800, color: '#012A2D', letterSpacing: '1px' }}>
                      {item.num} //
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748b', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      R&amp;D DOMAIN
                    </span>
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#012A2D', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {item.badge}
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 800, color: '#090d16', marginBottom: '14px', lineHeight: 1.25 }}>
                    {item.title}
                  </h3>

                  <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        padding: '4px 10px',
                        background: '#f1f5f9',
                        border: '1px solid #e2e8f0',
                        color: '#334155',
                        borderRadius: '6px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 3: Interactive Work & Prototype Showcase (The "Our Work" Section) */}
      <section id="work-gallery" style={{ padding: '90px 48px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <div className="section-label">Showcase &amp; Portfolio</div>
              <h2 className="section-title">
                OUR PROVEN <span style={{ color: '#012A2D' }}>WORK</span>
              </h2>
            </div>
            <p style={{ maxWidth: '520px', color: '#64748b', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              Browse real prototypes engineered by FSK across academic capstones, doctoral scientific research testbeds, and startup hardware products.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {[
              { id: 'all', label: `All Work (${ALL_PROTOTYPES.length})` },
              { id: 'students', label: 'Students (Academic)' },
              { id: 'scholars', label: 'Professional Scholars' },
              { id: 'startups', label: 'Startup MVPs' },
              { id: 'pcb', label: 'PCB & Hardware' },
              { id: 'iot', label: 'IoT & Telemetry' },
              { id: 'ai', label: 'Edge AI / Vision' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  background: activeFilter === f.id ? '#012A2D' : '#ffffff',
                  color: activeFilter === f.id ? '#ffffff' : '#475569',
                  border: activeFilter === f.id ? '1px solid #012A2D' : '1px solid #e2e8f0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.5px',
                  padding: '9px 18px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: activeFilter === f.id ? '700' : '500',
                  boxShadow: activeFilter === f.id ? '0 4px 12px rgba(1, 42, 45,  0.2)' : '0 1px 3px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid of Work Projects */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '28px'
            }}
          >
            {filteredPrototypes.map((proto) => (
              <div
                key={proto.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#012A2D';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 42, 45,  0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.05)';
                }}
              >
                {/* Technical Blueprint & Spec Header (Zero AI imagery) */}
                <div
                  style={{
                    padding: '24px 24px 20px',
                    background: '#f8fafc',
                    borderBottom: '1px solid #e2e8f0',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Subtle Precision CAD Grid */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(1, 42, 45,  0.08) 1px, transparent 0)',
                      backgroundSize: '16px 16px',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Top Metadata Badges */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        background: '#ffffff',
                        border: '1.5px solid #012A2D',
                        color: '#012A2D',
                        borderRadius: '6px',
                        letterSpacing: '0.8px'
                      }}
                    >
                      {proto.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        padding: '4px 10px',
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        color: '#475569',
                        borderRadius: '6px'
                      }}
                    >
                      {proto.targetAudience}
                    </span>
                  </div>

                  {/* Technical Spec Summary Tag */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: '#334155',
                      lineHeight: 1.5,
                      background: '#ffffff',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <span style={{ color: '#012A2D', fontWeight: 700, display: 'block', fontSize: '0.65rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '3px' }}>
                      Interface &amp; Hardware Specs:
                    </span>
                    {proto.specs}
                  </div>
                </div>

                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#012A2D', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {proto.category || proto.cat}
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#090d16', lineHeight: 1.25, marginBottom: '12px' }}>
                      {proto.title}
                    </h3>

                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                      {proto.desc}
                    </p>

                    {proto.deliverables && (
                      <div
                        style={{
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          color: '#334155',
                          marginBottom: '20px',
                          lineHeight: 1.5
                        }}
                      >
                        <strong style={{ color: '#012A2D', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
                          Delivered Pack:
                        </strong>
                        {proto.deliverables}
                      </div>
                    )}
                  </div>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                      {(proto.chips || []).slice(0, 4).map((chip) => (
                        <span
                          key={chip}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.66rem',
                            padding: '4px 10px',
                            background: '#f1f5f9',
                            border: '1px solid #e2e8f0',
                            color: '#475569',
                            borderRadius: '6px'
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedPrototype(proto)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: '#ffffff',
                        border: '1.5px solid #012A2D',
                        color: '#012A2D',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#012A2D';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.color = '#012A2D';
                      }}
                    >
                      Inspect Specs &amp; Deliverables
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 4: Deliverables Matrix Comparison Table */}
      <section id="services-matrix" style={{ padding: '80px 48px', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="section-label">Deliverables Comparison</div>
          <h2 className="section-title">
            WHAT EACH TRACK <span style={{ color: '#012A2D' }}>RECEIVES</span>
          </h2>

          <div style={{ overflowX: 'auto', marginTop: '36px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                background: '#ffffff'
              }}
            >
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <th style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.5px', color: '#090d16' }}>
                    DELIVERABLE ITEM
                  </th>
                  <th style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.5px', color: '#012A2D' }}>
                    STUDENTS
                  </th>
                  <th style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.5px', color: '#435355' }}>
                    SCHOLARS
                  </th>
                  <th style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.5px', color: '#4f46e5' }}>
                    STARTUP MVPS
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: 'Working Physical Hardware', student: '100% Tested Rig / Shield', scholar: 'Experimental Testbed Rig', startup: 'Commercial Multi-layer MVP' },
                  { item: 'Source Code & Firmware', student: 'Commented Arduino/Python', scholar: 'Reproducible Models/MATLAB', startup: 'Production Git Repo (STM32/ESP)' },
                  { item: 'Documentation Suite', student: '80–120p Thesis + PPT', scholar: 'Scopus/SCI LaTeX Manuscript', startup: 'Investor Technical Dossier' },
                  { item: 'Schematics & PCB Gerbers', student: 'Full Circuit Schematics', scholar: 'High-Res Vector Schematics', startup: 'Manufacturing Gerbers & BOM' },
                  { item: '1-on-1 Defense / Coaching', student: 'Viva Defense Prep & Q&A', scholar: 'Reviewer Rebuttal Strategy', startup: 'Investor Pitch Tech Defense' },
                  { item: 'IP & Source Ownership', student: 'Full Student Ownership', scholar: 'Full Author Ownership', startup: '100% Commercial IP Transfer' }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: idx === 5 ? 'none' : '1px solid #f1f5f9', background: idx % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    <td style={{ padding: '16px 24px', fontWeight: '700', fontSize: '0.92rem', color: '#090d16' }}>
                      {row.item}
                    </td>
                    <td style={{ padding: '16px 24px', fontSize: '0.88rem', color: '#475569' }}>{row.student}</td>
                    <td style={{ padding: '16px 24px', fontSize: '0.88rem', color: '#475569' }}>{row.scholar}</td>
                    <td style={{ padding: '16px 24px', fontSize: '0.88rem', color: '#475569' }}>{row.startup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Part 5: The 5-Stage Engineering Workflow */}
      <section style={{ padding: '80px 48px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="section-label">Execution Lifecycle</div>
          <h2 className="section-title">
            FROM CONCEPT TO <span style={{ color: '#012A2D' }}>DELIVERY</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginTop: '48px'
            }}
          >
            {[
              { step: '01', title: 'Scope & Discovery', desc: 'Detailed review of your college guide requirements, IEEE paper, or startup MVP product specifications.' },
              { step: '02', title: 'Architecture & BOM', desc: 'Circuit schematics, component selection (sourcing BOM), and simulation validation.' },
              { step: '03', title: 'Physical Build & Code', desc: 'PCB fabrication, SMD assembly, clean firmware flashing, and sensor calibration.' },
              { step: '04', title: 'Research Documentation', desc: 'Writing the full university thesis, LaTeX paper, or investor technical whitepaper with zero plagiarism.' },
              { step: '05', title: 'Handover & Viva Prep', desc: 'Physical dispatch to your door + 1-on-1 video walkthrough and simulated defense/pitch practice.' }
            ].map((st) => (
              <div
                key={st.step}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.2s'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 800, color: '#012A2D', marginBottom: '14px' }}>
                    {st.step}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#090d16', margin: '0 0 10px' }}>
                    {st.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ padding: '90px 48px', textAlign: 'center', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', width: '100%' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Book Your Engineering Slot
          </div>
          <h2 className="section-title">
            HAVE A PROJECT OR <br />
            <span style={{ color: '#012A2D' }}>PAPER IN MIND?</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '36px' }}>
            Share your title, abstract, or requirement statement today. Our lead engineers review incoming scopes within 2 hours.
          </p>
          <button
            onClick={() => (onNavigate ? onNavigate('contact') : (window.location.hash = '#contact'))}
            className="btn-primary"
            style={{ cursor: 'pointer' }}
          >
            Start Project Consultation Now
          </button>
        </div>
      </section>

      {/* Prototype Modal */}
      {selectedPrototype && (
        <PrototypeModal
          prototype={selectedPrototype}
          onClose={() => setSelectedPrototype(null)}
          onNavigateContact={handleInquireFromModal}
        />
      )}
    </div>
  );
}
