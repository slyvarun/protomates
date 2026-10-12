import React, { useState } from 'react';
import { Calculator, CheckCircle2, Zap, ArrowRight, Shield, Clock, FileCheck } from 'lucide-react';

export default function ProjectEstimator({ onProceedToContact }) {
  const [role, setRole] = useState('student');
  const [deliverables, setDeliverables] = useState(['hardware', 'code', 'docs']);
  const [timeline, setTimeline] = useState('standard');

  const toggleDeliverable = (item) => {
    if (deliverables.includes(item)) {
      if (deliverables.length > 1) {
        setDeliverables(deliverables.filter((d) => d !== item));
      }
    } else {
      setDeliverables([...deliverables, item]);
    }
  };

  const getTimelineText = () => {
    switch (timeline) {
      case 'rush':
        return '5 to 9 Days (Expedited Sprint)';
      case 'standard':
        return '2 to 3 Weeks (Standard R&D)';
      case 'comprehensive':
        return '4 to 6 Weeks (Full Rig & Journal)';
      default:
        return '2 to 3 Weeks';
    }
  };

  const getDeliverablesSummary = () => {
    const list = [];
    if (deliverables.includes('hardware')) {
      list.push(
        role === 'student'
          ? 'Tested Working Hardware Rig / Custom PCB'
          : role === 'scholar'
          ? 'Physical Experimental Testbed / Simulation Rig'
          : 'Production-ready Multi-layer PCB + 3D CAD Enclosure'
      );
    }
    if (deliverables.includes('code')) {
      list.push(
        role === 'student'
          ? 'Clean, Commented GitHub Codebase & Circuit Schematics'
          : role === 'scholar'
          ? 'Novel Algorithm Architecture / PyTorch / MATLAB Scripts'
          : 'Firmware (STM32/ESP32) + Cloud Telemetry API'
      );
    }
    if (deliverables.includes('docs')) {
      list.push(
        role === 'student'
          ? '80–120 Page University Thesis + IEEE Paper + Seminar PPT'
          : role === 'scholar'
          ? 'Scopus / SCI Quality LaTeX Manuscript + Flowcharts & Graphs'
          : 'Investor Technical Dossier + Sourcing BOM (LCSC/Mouser)'
      );
    }
    if (deliverables.includes('defense')) {
      list.push(
        role === 'student'
          ? '1-on-1 Mock Viva Defense Coaching + Code Walkthrough'
          : role === 'scholar'
          ? 'Reviewer Rebuttal Strategy & Dataset Validation Notes'
          : 'Investor Pitch Technical Rehearsal & IP Disclosure Draft'
      );
    }
    return list;
  };

  const handleAction = () => {
    if (onProceedToContact) {
      onProceedToContact({ role, deliverables, timeline });
    } else {
      window.location.href = '#contact';
    }
  };

  return (
    <section style={{ background: 'var(--black)', padding: '90px 48px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          <div>
            <div className="section-label">Interactive Project Architect</div>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>
              CUSTOM ESTIMATOR &amp;<br />
              <span style={{ color: 'var(--accent)' }}>BLUEPRINT GENERATOR</span>
            </h2>
          </div>
          <p style={{ maxWidth: '480px', color: '#888', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
            Select your innovator persona, choose the required hardware and documentation modules, and review your customized engineering blueprint in real-time.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'stretch'
          }}
        >
          {/* Controls Left Column */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px'
            }}
          >
            {/* Step 1: Persona */}
            <div>
              <label
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '2px',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}
              >
                1. Select Your Persona
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { id: 'student', label: 'Student', sub: 'Academic Capstone' },
                  { id: 'scholar', label: 'Scholar', sub: 'Research Paper' },
                  { id: 'startup', label: 'Startup', sub: 'Commercial MVP' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRole(item.id)}
                    style={{
                      background: role === item.id ? 'var(--accent)' : 'rgba(255, 255, 255, 0.04)',
                      color: role === item.id ? 'var(--black)' : '#bbb',
                      border: role === item.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                      padding: '12px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: role === item.id ? '700' : '400',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div>{item.label}</div>
                    <div style={{ fontSize: '0.62rem', opacity: 0.8, marginTop: '2px' }}>{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Required Deliverables */}
            <div>
              <label
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '2px',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}
              >
                2. Required Project Components
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { id: 'hardware', label: 'Working Hardware & Custom Circuitry' },
                  { id: 'code', label: 'Clean Codebase, Firmware & Schematics' },
                  { id: 'docs', label: 'Complete Documentation (Thesis / IEEE / Dossier)' },
                  { id: 'defense', label: '1-on-1 Defense / Viva / Pitch Coaching' }
                ].map((item) => {
                  const isChecked = deliverables.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleDeliverable(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 14px',
                        background: isChecked ? 'rgba(200, 255, 0, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                        border: isChecked ? '1px solid rgba(200, 255, 0, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.88rem',
                        color: isChecked ? 'var(--white)' : '#888',
                        transition: 'all 0.2s'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        style={{ accentColor: 'var(--accent)', cursor: 'pointer' }}
                      />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Target Timeline */}
            <div>
              <label
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '2px',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}
              >
                3. Desired Turnaround Time
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { id: 'rush', label: 'Rush', sub: '5–9 Days' },
                  { id: 'standard', label: 'Standard', sub: '2–3 Weeks' },
                  { id: 'comprehensive', label: 'Extended', sub: '4–6 Weeks' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeline(item.id)}
                    style={{
                      background: timeline === item.id ? '#00e5ff' : 'rgba(255, 255, 255, 0.04)',
                      color: timeline === item.id ? '#030303' : '#bbb',
                      border: timeline === item.id ? '1px solid #00e5ff' : '1px solid var(--border)',
                      padding: '10px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: timeline === item.id ? '700' : '400',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div>{item.label}</div>
                    <div style={{ fontSize: '0.62rem', opacity: 0.8, marginTop: '2px' }}>{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Generated Blueprint Right Column */}
          <div
            style={{
              background: 'linear-gradient(145deg, #0e0e14, #08080c)',
              border: '1px solid rgba(200, 255, 0, 0.3)',
              borderRadius: '8px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.7)'
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--accent)',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}
              >
                <Calculator size={15} /> Live Generated Project Package
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.4rem',
                  letterSpacing: '1px',
                  color: 'var(--white)',
                  marginBottom: '16px',
                  lineHeight: 1.1
                }}
              >
                {role === 'student' && 'Complete Capstone & Thesis Suite'}
                {role === 'scholar' && 'Research Testbed & Publication Package'}
                {role === 'startup' && 'Turnkey MVP & Investor Technical Pack'}
              </h3>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(0, 229, 255, 0.1)',
                  border: '1px solid rgba(0, 229, 255, 0.3)',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#00e5ff',
                  letterSpacing: '1px',
                  marginBottom: '28px'
                }}
              >
                <Clock size={14} /> Estimated Timeline: {getTimelineText()}
              </div>

              <div style={{ marginBottom: '28px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#888',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '12px'
                  }}
                >
                  Deliverables Included in this Package:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {getDeliverablesSummary().map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.9rem',
                        color: '#ddd',
                        lineHeight: 1.5
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '16px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  color: '#999',
                  lineHeight: 1.6,
                  marginBottom: '28px'
                }}
              >
                <strong style={{ color: 'var(--white)' }}>Guaranteed Standards:</strong> 100% working hardware verification video, zero-plagiarism documentation, clean GitHub repository, and live 1-on-1 walkthrough.
              </div>
            </div>

            <button
              onClick={handleAction}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '16px',
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              Consult Lab for this Package <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
