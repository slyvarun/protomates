import React, { useState, useEffect } from 'react';
import { ALL_PROTOTYPES, CORE_OFFERINGS, AUDIENCE_PILLARS } from '../data/projectData';
import PrototypeModal from '../components/PrototypeModal';
import {
  Cpu,
  Wifi,
  GraduationCap,
  Brain,
  Compass,
  Layers,
  Rocket,
  Microscope,
  CheckCircle2,
  FileText,
  Package,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  Eye
} from 'lucide-react';

export default function ServicesWork({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPrototype, setSelectedPrototype] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState('students');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

  const getCoreIcon = (name) => {
    switch (name) {
      case 'Cpu':
        return <Cpu size={26} />;
      case 'Wifi':
        return <Wifi size={26} />;
      case 'GraduationCap':
        return <GraduationCap size={26} />;
      case 'Brain':
        return <Brain size={26} />;
      case 'Compass':
        return <Compass size={26} />;
      case 'Rocket':
        return <Rocket size={26} />;
      default:
        return <Layers size={26} />;
    }
  };

  const handleInquireFromModal = (audienceId) => {
    setSelectedPrototype(null);
    if (onNavigate) {
      onNavigate('contact', { audience: audienceId });
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <div style={{ paddingTop: '100px', background: 'var(--black)', minHeight: '100vh', color: 'var(--white)' }}>
      {/* Page Header */}
      <section style={{ padding: '80px 48px 60px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '-60px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08), transparent 70%)',
            filter: 'blur(110px)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Engineering Services &amp; Prototype Catalog</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 8.5rem)',
              lineHeight: 0.88,
              letterSpacing: '2px',
              marginBottom: '32px'
            }}
          >
            OUR SERVICES &amp; <br />
            <span style={{ color: 'var(--accent)' }}>WORK SHOWCASE</span>
          </h1>

          <p style={{ fontSize: '1.12rem', color: '#aaa', lineHeight: 1.85, maxWidth: '820px', marginBottom: '36px' }}>
            Explore our specialized engineering services tailored for <strong style={{ color: 'var(--accent)' }}>Students</strong>,{' '}
            <strong style={{ color: '#00e5ff' }}>Professional Scholars</strong>, and{' '}
            <strong style={{ color: 'var(--accent2)' }}>Startup MVPs</strong> — alongside our portfolio of battle-tested hardware prototypes and research documentation.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#work-gallery" className="btn-primary">
              Jump To Our Work Gallery <ArrowRight size={16} />
            </a>
            <a href="#services-matrix" className="btn-ghost" style={{ border: '1px solid var(--border)' }}>
              View Deliverables Matrix
            </a>
          </div>
        </div>
      </section>

      {/* Part 1: Specialized Service Tracks for the 3 Innovators */}
      <section style={{ padding: '80px 48px', background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Tailored Service Tracks</div>
          <h2 className="section-title">
            SERVICES BY <span style={{ color: 'var(--accent)' }}>AUDIENCE</span>
          </h2>
          <p style={{ color: '#999', fontSize: '1rem', lineHeight: 1.8, maxWidth: '750px', marginBottom: '40px' }}>
            Each track is designed with distinct engineering standards, documentation formats, and coaching protocols to match your exact milestone goals.
          </p>

          {/* Track Switcher */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {[
              { id: 'students', label: '🎓 For Students (Academic Projects)', color: '#c8ff00' },
              { id: 'scholars', label: '🔬 For Professional Scholars (Research Papers)', color: '#00e5ff' },
              { id: 'startups', label: '🚀 For Startups (Commercial MVPs)', color: '#ff3cac' }
            ].map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                style={{
                  background: selectedTrack === track.id ? track.color : 'rgba(255, 255, 255, 0.03)',
                  color: selectedTrack === track.id ? '#030303' : '#bbb',
                  border: selectedTrack === track.id ? `1px solid ${track.color}` : '1px solid var(--border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '1px',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: selectedTrack === track.id ? '700' : '400',
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
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(200, 255, 0, 0.3)',
                borderRadius: '10px',
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px'
              }}
            >
              <div>
                <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Student Track • B.Tech / M.Tech / Diploma Capstones
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--white)', marginBottom: '16px' }}>
                  Full Academic Project Undertakings &amp; Documentation
                </h3>
                <p style={{ color: '#aaa', fontSize: '0.94rem', lineHeight: 1.8, marginBottom: '24px' }}>
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
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ddd' }}>
                      <CheckCircle2 size={16} color="var(--accent)" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#0a0a0e', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '8px', padding: '30px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Standard Deliverables Included:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Package size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.9rem' }}>Working Hardware Unit:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#888' }}>
                        Fully assembled, wired, and tested physical device with sensor calibration and labeled pins.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <FileText size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.9rem' }}>Complete University Documentation:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#888' }}>
                        Formatted thesis, synopsis, circuit schematics, block diagrams, flowchart, and seminar PPT.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Compass size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.9rem' }}>Personalized Viva Preparation:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#888' }}>
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
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(0, 229, 255, 0.3)',
                borderRadius: '10px',
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px'
              }}
            >
              <div>
                <div style={{ color: '#00e5ff', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Scholar Track • PhD Candidates &amp; Scientific Researchers
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--white)', marginBottom: '16px' }}>
                  High-Rigor Scientific Simulations &amp; Scopus/SCI Papers
                </h3>
                <p style={{ color: '#aaa', fontSize: '0.94rem', lineHeight: 1.8, marginBottom: '24px' }}>
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
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ddd' }}>
                      <CheckCircle2 size={16} color="#00e5ff" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#0a0a0e', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '8px', padding: '30px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00e5ff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Research Deliverables Package:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Microscope size={20} color="#00e5ff" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.9rem' }}>Experimental Testbed / Simulation Rig:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#888' }}>
                        Reproducible simulation notebooks, testbed instrumentation, and real sensor calibration datasets.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <FileText size={20} color="#00e5ff" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.9rem' }}>Camera-Ready LaTeX Manuscript:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#888' }}>
                        IEEE/Springer/Elsevier formatted LaTeX manuscript, vector graphs, and comprehensive bibtex references.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <CheckCircle2 size={20} color="#00e5ff" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.9rem' }}>Peer-Review Rebuttal Pack:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#888' }}>
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
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 60, 172, 0.3)',
                borderRadius: '10px',
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px'
              }}
            >
              <div>
                <div style={{ color: 'var(--accent2)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Startup Track • Founders &amp; Deep-Tech Innovators
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--white)', marginBottom: '16px' }}>
                  Turnkey Minimum Viable Products &amp; Investor Packs
                </h3>
                <p style={{ color: '#aaa', fontSize: '0.94rem', lineHeight: 1.8, marginBottom: '24px' }}>
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
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#ddd' }}>
                      <CheckCircle2 size={16} color="var(--accent2)" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#0a0a0e', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '8px', padding: '30px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent2)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Commercial MVP Pack:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Rocket size={20} color="var(--accent2)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.9rem' }}>Deployable Hardware MVP:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#888' }}>
                        Custom assembled PCB, tested sensor array, and fitted 3D printed enclosure.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <FileText size={20} color="var(--accent2)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.9rem' }}>Investor Technical Dossier:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#888' }}>
                        Executive architecture whitepaper, system specs, BOM pricing per 1k units, and patent draft.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <CheckCircle2 size={20} color="var(--accent2)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--white)', fontSize: '0.9rem' }}>100% IP &amp; Source Ownership:</strong>
                      <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#888' }}>
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
      <section style={{ padding: '80px 48px', background: 'var(--black)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Engineering Capabilities</div>
          <h2 className="section-title">
            SIX CORE <span style={{ color: 'var(--accent)' }}>DOMAINS</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginTop: '48px'
            }}
          >
            {CORE_OFFERINGS.map((item) => (
              <div
                key={item.num}
                style={{
                  background: 'var(--card)',
                  padding: '36px 30px',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,255,0,0.4)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ color: 'var(--accent)' }}>{getCoreIcon(item.iconName)}</div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gray)', letterSpacing: '2px' }}>
                      {item.num}
                    </span>
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {item.badge}
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--white)', marginBottom: '14px' }}>
                    {item.title}
                  </h3>

                  <p style={{ color: '#888', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.64rem',
                        padding: '4px 10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#bbb',
                        borderRadius: '2px'
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
      <section id="work-gallery" style={{ padding: '90px 48px', background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <div className="section-label">Showcase &amp; Portfolio</div>
              <h2 className="section-title">
                OUR PROVEN <span style={{ color: 'var(--accent)' }}>WORK</span>
              </h2>
            </div>
            <p style={{ maxWidth: '520px', color: '#999', fontSize: '0.96rem', lineHeight: 1.7, margin: 0 }}>
              Browse real prototypes engineered by Protomates Lab across academic capstones, doctoral scientific research testbeds, and startup hardware products.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {[
              { id: 'all', label: `All Work (${ALL_PROTOTYPES.length})` },
              { id: 'students', label: '🎓 Students (Academic)' },
              { id: 'scholars', label: '🔬 Professional Scholars' },
              { id: 'startups', label: '🚀 Startup MVPs' },
              { id: 'pcb', label: 'PCB & Hardware' },
              { id: 'iot', label: 'IoT & Telemetry' },
              { id: 'ai', label: 'Edge AI / Vision' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  background: activeFilter === f.id ? 'var(--accent)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeFilter === f.id ? 'var(--black)' : '#aaa',
                  border: activeFilter === f.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '1px',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: activeFilter === f.id ? '700' : '400',
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '28px'
            }}
          >
            {filteredPrototypes.map((proto) => (
              <div
                key={proto.id}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.35s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.8), 0 0 20px rgba(200,255,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: '230px' }}>
                  <img
                    src={proto.img}
                    alt={proto.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />

                  {/* Top Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      display: 'flex',
                      gap: '8px'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        padding: '4px 10px',
                        background: 'rgba(0, 0, 0, 0.85)',
                        border: '1px solid var(--accent)',
                        color: 'var(--accent)',
                        borderRadius: '2px',
                        letterSpacing: '1px'
                      }}
                    >
                      {proto.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        padding: '4px 10px',
                        background: 'rgba(0, 0, 0, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'var(--white)',
                        borderRadius: '2px',
                        letterSpacing: '1px'
                      }}
                    >
                      {proto.targetAudience}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {proto.category || proto.cat}
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--white)', lineHeight: 1.15, marginBottom: '12px' }}>
                      {proto.title}
                    </h3>

                    <p style={{ color: '#888', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                      {proto.desc}
                    </p>

                    {proto.deliverables && (
                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.07)',
                          padding: '10px 14px',
                          borderRadius: '4px',
                          fontSize: '0.78rem',
                          color: '#bbb',
                          marginBottom: '20px',
                          lineHeight: 1.5
                        }}
                      >
                        <strong style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
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
                            fontSize: '0.62rem',
                            padding: '3px 8px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#999',
                            borderRadius: '2px'
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
                        background: 'transparent',
                        border: '1px solid var(--accent)',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent)';
                        e.currentTarget.style.color = 'var(--black)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--accent)';
                      }}
                    >
                      <Eye size={15} /> Inspect Specs &amp; Deliverables
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 4: Deliverables Matrix Comparison Table */}
      <section id="services-matrix" style={{ padding: '80px 48px', background: 'var(--black)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Deliverables Comparison</div>
          <h2 className="section-title">
            WHAT EACH TRACK <span style={{ color: 'var(--accent)' }}>RECEIVES</span>
          </h2>

          <div style={{ overflowX: 'auto', marginTop: '36px' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border)'
              }}
            >
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255, 255, 255, 0.04)' }}>
                  <th style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--accent)' }}>
                    DELIVERABLE ITEM
                  </th>
                  <th style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '2px', color: '#c8ff00' }}>
                    🎓 STUDENTS
                  </th>
                  <th style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '2px', color: '#00e5ff' }}>
                    🔬 SCHOLARS
                  </th>
                  <th style={{ padding: '18px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '2px', color: '#ff3cac' }}>
                    🚀 STARTUP MVPS
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
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: '600', fontSize: '0.88rem', color: 'var(--white)' }}>
                      {row.item}
                    </td>
                    <td style={{ padding: '16px 24px', fontSize: '0.85rem', color: '#bbb' }}>{row.student}</td>
                    <td style={{ padding: '16px 24px', fontSize: '0.85rem', color: '#bbb' }}>{row.scholar}</td>
                    <td style={{ padding: '16px 24px', fontSize: '0.85rem', color: '#bbb' }}>{row.startup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Part 5: The 5-Stage Engineering Workflow */}
      <section style={{ padding: '80px 48px', background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-label">Execution Lifecycle</div>
          <h2 className="section-title">
            FROM CONCEPT TO <span style={{ color: 'var(--accent)' }}>DELIVERY</span>
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
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '6px',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '14px' }}>
                    {st.step}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--white)', margin: '0 0 10px' }}>
                    {st.title}
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: '#888', lineHeight: 1.6, margin: 0 }}>{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ padding: '90px 48px', textAlign: 'center', background: 'var(--black)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Book Your Engineering Slot
          </div>
          <h2 className="section-title">
            HAVE A PROJECT OR <br />
            <span style={{ color: 'var(--accent)' }}>PAPER IN MIND?</span>
          </h2>
          <p style={{ color: '#999', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '36px' }}>
            Share your title, abstract, or requirement statement today. Our lead engineers review incoming scopes within 2 hours.
          </p>
          <button
            onClick={() => (onNavigate ? onNavigate('contact') : (window.location.hash = '#contact'))}
            className="btn-primary"
            style={{ cursor: 'pointer' }}
          >
            Start Project Consultation Now <ArrowRight size={16} />
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
