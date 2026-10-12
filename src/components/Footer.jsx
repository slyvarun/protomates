import React, { useState } from 'react';
import {
  Mail,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles,
  Send,
  Lock
} from 'lucide-react';

export default function Footer({ onNavigate, isVisible = true }) {
  const [quickTopic, setQuickTopic] = useState('');
  const [quickContact, setQuickContact] = useState('');
  const [quickSent, setQuickSent] = useState(false);

  const handleNav = (pageId, extra = {}) => {
    if (onNavigate) {
      onNavigate(pageId, extra);
    } else {
      window.location.pathname = pageId === 'home' ? '/' : `/${pageId}`;
    }
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!quickTopic || !quickContact) return;
    setQuickSent(true);

    // Send email dispatch to info.protomates@gmail.com
    fetch('https://formsubmit.co/ajax/info.protomates@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        topic: quickTopic,
        contact: quickContact,
        _subject: `New Protomates Quick Inquiry from ${quickContact}`,
        _template: 'table',
        _captcha: 'false'
      })
    }).catch((err) => console.error('FormSubmit Error:', err));
  };

  return (
    <footer
      style={{
        background: '#040407',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        color: 'var(--white)',
        paddingTop: '60px',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {/* Top Refined Studio Accent Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)',
          opacity: 0.8
        }}
      />

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 48px' }}>
        {/* Top Telemetry Banner */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingBottom: '36px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 10px var(--accent)',
                display: 'inline-block'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '2px',
                color: 'var(--accent)',
                textTransform: 'uppercase'
              }}
            >
              PROTOMATES LAB ACTIVE // RAPID PROJECT &amp; RESEARCH INTAKE ONLINE
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#888'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={13} color="var(--accent)" /> Average Review: &lt; 2 Hours
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={13} color="#00e5ff" /> 100% NDA Protected
            </span>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '50px',
            padding: '50px 0 40px'
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div>
            <div
              onClick={() => handleNav('home')}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                letterSpacing: '3px',
                color: 'var(--accent)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px'
              }}
            >
              <span>PROTO<span style={{ color: 'var(--white)' }}>MATES</span></span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                  padding: '2px 6px',
                  borderRadius: '2px'
                }}
              >
                LAB
              </span>
            </div>

            <p style={{ color: '#888', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '24px', maxWidth: '320px' }}>
              Specialized engineering and documentation laboratory building working hardware systems and university/Scopus-grade papers for Students, Scholars, and Startups.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="mailto:info.protomates@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 14px',
                  background: 'rgba(0, 229, 255, 0.08)',
                  border: '1px solid rgba(0, 229, 255, 0.3)',
                  borderRadius: '4px',
                  color: '#00e5ff',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '1px'
                }}
              >
                <Mail size={14} /> Email Lab
              </a>
            </div>
          </div>


          {/* Column 4: Quick Feasibility Callback Widget */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}
            >
              Fast Feasibility Review
            </div>

            {quickSent ? (
              <div
                style={{
                  background: 'rgba(200, 255, 0, 0.08)',
                  border: '1px solid rgba(200, 255, 0, 0.3)',
                  padding: '16px',
                  borderRadius: '6px',
                  fontSize: '0.84rem',
                  color: 'var(--accent)'
                }}
              >
                Inquiry dispatched to info.protomates@gmail.com! Our engineers will review and reply promptly.
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input
                  type="text"
                  required
                  placeholder="Project Topic or Base Paper Title..."
                  value={quickTopic}
                  onChange={(e) => setQuickTopic(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '4px',
                    color: 'var(--white)',
                    fontSize: '0.82rem',
                    outline: 'none'
                  }}
                />
                <input
                  type="text"
                  required
                  placeholder="Your Email or Contact..."
                  value={quickContact}
                  onChange={(e) => setQuickContact(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '4px',
                    color: 'var(--white)',
                    fontSize: '0.82rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'var(--accent)',
                    color: 'var(--black)',
                    border: 'none',
                    padding: '10px 14px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  Get Instant Review <Send size={12} />
                </button>
              </form>
            )}

            <div style={{ marginTop: '12px', fontSize: '0.72rem', color: '#666', lineHeight: 1.5 }}>
              Strict confidentiality. Zero spam. 100% NDA guarantee.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '24px 0 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: '#666',
            letterSpacing: '1px'
          }}
        >
          <div>© 2026 PROTOMATES LAB — ALL HARDWARE &amp; INTELLECTUAL PROPERTY RIGHTS RESERVED.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>IEEE STANDARDS COMPLIANT</span>
            <span>•</span>
            <span>SCOPUS / SCI ACADEMIC INTEGRITY</span>
            <span>•</span>
            <span>FULL IP TRANSFER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
