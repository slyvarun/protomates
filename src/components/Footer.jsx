import React, { useState } from 'react';
import FSKLogo from './FSKLogo';
import { Mail, Clock, Shield, Lock, Send, CheckCircle2 } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    }
  };

  return (
    <footer
      style={{
        background: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        position: 'relative',
        color: 'var(--text-primary)',
        padding: '60px 48px 0'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Top Header Banner */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingBottom: '28px',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: 'var(--accent)',
                textTransform: 'uppercase'
              }}
            >
              FSK // PROTOTYPING SERVICES &amp; RESEARCH INTAKE
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: '#64748b'
            }}
          >
            <span>Average Review: &lt; 2 Hours</span>
            <span>•</span>
            <span>100% NDA Protected</span>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '28px',
            padding: '40px 0 32px'
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div>
            <div
              onClick={() => handleNav('home')}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                marginBottom: '16px'
              }}
            >
              <FSKLogo size="large" />
            </div>

            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px', maxWidth: '340px' }}>
              Specialized engineering laboratory building physical working hardware, custom PCBs, and university/Scopus-grade documentation for Students, Scholars, and Startups.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="mailto:consultant.fsk@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 16px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Email Engineering Team
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'home', label: 'Home Studio' },
                { id: 'about', label: 'About FSK' },
                { id: 'services', label: 'Hardware Services & Portfolio' },
                { id: 'contact', label: 'Start Project Intake' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: '#64748b',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Connect With Us */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}
            >
              Connect With Us
            </div>

            <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
              Have an academic topic, thesis requirement, or prototype statement? Connect with our engineering lab for a rapid feasibility review.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => handleNav('contact')}
                className="btn-primary"
                style={{
                  padding: '11px 18px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(0, 82, 255, 0.25)'
                }}
              >
                <span>Start Project Intake &amp; 1-on-1 Meet</span>
                <Send size={14} />
              </button>

              <a
                href="mailto:consultant.fsk@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  color: '#090d16',
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#090d16';
                }}
              >
                <Mail size={16} color="var(--accent)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                  consultant.fsk@gmail.com
                </span>
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', fontSize: '0.75rem', color: '#64748b' }}>
              <Clock size={13} color="var(--accent)" />
              <span>Response time: Under 2 hours • 100% Confidential</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div
          style={{
            borderTop: '1px solid #e2e8f0',
            padding: '24px 0 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#64748b',
            letterSpacing: '0.5px'
          }}
        >
          <div>© 2026 FSK — PROTOTYPING SERVICES. ALL RIGHTS RESERVED.</div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
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
