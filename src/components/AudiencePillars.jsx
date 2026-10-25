import React, { useState } from 'react';
import { AUDIENCE_PILLARS } from '../data/projectData';
import { GraduationCap, Microscope, Rocket, CheckCircle2, FileText, Cpu, ArrowRight, Sparkles, Shield, Clock, BookOpen } from 'lucide-react';

export default function AudiencePillars({ onSelectAudience }) {
  const [activeTab, setActiveTab] = useState('students');

  const currentPillar = AUDIENCE_PILLARS.find((p) => p.id === activeTab) || AUDIENCE_PILLARS[0];

  const getIcon = (id, size = 24) => {
    switch (id) {
      case 'students':
        return <GraduationCap size={size} />;
      case 'scholars':
        return <Microscope size={size} />;
      case 'startups':
        return <Rocket size={size} />;
      default:
        return <Cpu size={size} />;
    }
  };

  const handleAction = (pillarId) => {
    if (onSelectAudience) {
      onSelectAudience(pillarId);
    } else {
      window.location.href = '#contact';
    }
  };

  return (
    <section id="audiences" style={{ background: '#07070a', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Ambient Flares */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.07), transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.07), transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />

      {/* Section Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          Who We Serve &amp; What We Deliver
        </div>
        <h2 className="section-title">
          THREE USERS. <span style={{ color: 'var(--accent)' }}>ONE LAB.</span>
          <br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.7)', fontSize: '0.85em' }}>
            ENGINEERED HARDWARE &amp; RESEARCH-GRADE PAPERS
          </span>
        </h2>
        <p style={{ maxWidth: '780px', margin: '0 auto', fontSize: '1.05rem', color: '#9a9a9a', lineHeight: 1.8 }}>
          Whether you are an engineering student defending a final capstone, a research scholar targeting high-impact Scopus/SCI journals, or a startup founder building an investor-ready MVP - we build the working physical systems and author every page of the documentation.
        </p>
      </div>

      {/* Interactive Sector Switcher Tabs */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}
      >
        {AUDIENCE_PILLARS.map((pillar) => {
          const isActive = activeTab === pillar.id;
          return (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              style={{
                background: isActive ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 15, 20, 0.6)',
                border: isActive ? `1.5px solid ${pillar.accentColor}` : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '24px 20px',
                cursor: 'pointer',
                textAlign: 'left',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? `0 0 25px ${pillar.accentColor}25` : 'none',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div
                  style={{
                    color: pillar.accentColor,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                  }}
                >
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      background: `${pillar.accentColor}18`,
                      border: `1px solid ${pillar.accentColor}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getIcon(pillar.id, 18)}
                  </span>
                  <span>{pillar.badge}</span>
                </div>
                {isActive && (
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: pillar.accentColor,
                      boxShadow: `0 0 10px ${pillar.accentColor}`
                    }}
                  />
                )}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.9rem',
                  letterSpacing: '1px',
                  color: isActive ? 'var(--white)' : '#999',
                  lineHeight: 1.1,
                  marginBottom: '8px'
                }}
              >
                {pillar.role}
              </div>

              <div style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.5 }}>
                {pillar.id === 'students' && 'Academic Capstone, IEEE Reports, Working Hardware & Viva Training'}
                {pillar.id === 'scholars' && 'Scientific Simulations, Testbeds, LaTeX & Scopus Journal Papers'}
                {pillar.id === 'startups' && 'Turnkey Commercial MVPs, Custom PCBs, Enclosures & Investor Dossiers'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tab Spotlight Feature Card */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'linear-gradient(145deg, rgba(18, 18, 25, 0.9), rgba(10, 10, 14, 0.95))',
          border: `1px solid ${currentPillar.accentColor}40`,
          borderRadius: '12px',
          padding: '44px',
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px ${currentPillar.accentColor}12`,
          position: 'relative'
        }}
        className="audience-spotlight-card"
      >
        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '28px',
            marginBottom: '36px'
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: currentPillar.accentColor,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              }}
            >
              <Sparkles size={14} /> Comprehensive Track for {currentPillar.role}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                letterSpacing: '1px',
                color: 'var(--white)',
                lineHeight: 1.05,
                margin: 0
              }}
            >
              {currentPillar.tagline}
            </h3>
          </div>

          <div
            style={{
              background: `${currentPillar.accentColor}15`,
              border: `1px solid ${currentPillar.accentColor}60`,
              color: currentPillar.accentColor,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '10px 18px',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Shield size={16} /> {currentPillar.deliverablesBadge}
          </div>
        </div>

        <p style={{ fontSize: '1.05rem', color: '#b0b0b0', lineHeight: 1.8, maxWidth: '960px', marginBottom: '40px' }}>
          {currentPillar.description}
        </p>

        {/* Dual Pillar Breakdown: What We Build vs What We Document */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
            marginBottom: '40px'
          }}
        >
          {/* Column A: What We Build */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '30px'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--accent)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}
            >
              <Cpu size={18} /> What We Physically Build &amp; Code:
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {currentPillar.whatWeBuild.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.94rem',
                    color: '#ddd',
                    lineHeight: 1.6
                  }}
                >
                  <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column B: What We Document */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '30px'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#00e5ff',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}
            >
              <FileText size={18} /> What We Comprehensively Document:
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {currentPillar.whatWeDocument.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.94rem',
                    color: '#ddd',
                    lineHeight: 1.6
                  }}
                >
                  <CheckCircle2 size={18} color="#00e5ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Sample Projects & Quick CTA Row */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px 30px',
            margin: '0 -44px -44px -44px',
            borderRadius: '0 0 12px 12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#888',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}
            >
              Recent Projects In This Track:
            </span>
            {currentPillar.sampleProjects.map((p, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  padding: '4px 10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#bbb',
                  borderRadius: '3px'
                }}
              >
                {p}
              </span>
            ))}
          </div>

          <button
            onClick={() => handleAction(currentPillar.id)}
            className="btn-primary"
            style={{
              background: currentPillar.accentColor,
              color: currentPillar.id === 'scholars' ? '#030303' : '#030303',
              cursor: 'pointer'
            }}
          >
            Start {currentPillar.role} Project <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
