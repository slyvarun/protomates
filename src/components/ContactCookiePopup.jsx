import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Sparkles,
  Send,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Lock
} from 'lucide-react';

const COOKIE_STORAGE_KEY = 'fsk_contact_popup_status';
const TEN_MINUTES_MS = 10 * 60 * 1000; // 10 minutes (600,000 ms)

export default function ContactCookiePopup({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState('');
  const [role, setRole] = useState('student');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if dismissed previously within 24 hours
    const savedStatus = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (savedStatus) {
      try {
        const { dismissedAt } = JSON.parse(savedStatus);
        const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
        if (dismissedAt && dismissedAt > dayAgo) {
          return; // Do not show if dismissed in last 24h
        }
      } catch (err) {
        // Ignore parse error
      }
    }

    // Set 10-minute engagement timer
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, TEN_MINUTES_MS);

    // Development / evaluation hook: allows manual trigger via console: window.openContactPopup()
    window.openContactPopup = () => setIsOpen(true);

    return () => {
      clearTimeout(timer);
      delete window.openContactPopup;
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    // Store in cookie / localStorage
    localStorage.setItem(
      COOKIE_STORAGE_KEY,
      JSON.stringify({ dismissedAt: Date.now(), status: 'dismissed' })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem(
      COOKIE_STORAGE_KEY,
      JSON.stringify({ submittedAt: Date.now(), status: 'submitted' })
    );

    const roleLabel =
      role === 'student'
        ? 'Student (Academic Project)'
        : role === 'scholar'
        ? 'Professional Scholar'
        : 'Startup MVP';

    // Send email dispatch to consultant.fsk@gmail.com
    fetch('https://formsubmit.co/ajax/consultant.fsk@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: name || 'Anonymous',
        contact: contact,
        track: roleLabel,
        topic: topic || 'General Inquiry',
        _subject: `New FSK 10-Min Intake from ${name || contact} [${roleLabel}]`,
        _template: 'table',
        _captcha: 'false'
      })
    }).catch((err) => console.error('FormSubmit Popup Error:', err));

    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        maxWidth: '420px',
        width: 'calc(100vw - 48px)',
        background: '#ffffff',
        border: '1.5px solid #012A2D',
        borderRadius: '16px',
        padding: '24px 26px',
        boxShadow: '0 25px 60px rgba(15, 23, 42, 0.18), 0 0 25px rgba(1, 42, 45,  0.1)',
        backdropFilter: 'blur(20px)',
        animation: 'popUpSpring 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      {/* Top Header & Close */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: '#012A2D',
              letterSpacing: '1px',
              fontWeight: 700,
              textTransform: 'uppercase'
            }}
          >
            Engineering Desk // Consultation
          </span>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss consultation popup"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#090d16')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
        >
          <X size={16} />
        </button>
      </div>

      <h4
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 800,
          letterSpacing: '-0.3px',
          color: '#090d16',
          lineHeight: 1.2,
          marginBottom: '6px'
        }}
      >
        Need Help Planning Your Prototype?
      </h4>

      <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '16px' }}>
        Our lead engineers are online. Drop your requirement below for a complimentary technical roadmap &amp; feasibility assessment.
      </p>

      {submitted ? (
        <div
          style={{
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '10px',
            padding: '16px',
            textAlign: 'center',
            color: '#012A2D',
            fontSize: '0.88rem',
            fontWeight: 600
          }}
        >
          <CheckCircle2 size={24} style={{ margin: '0 auto 6px' }} />
          Inquiry dispatched to engineering desk! We will reply promptly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Persona Picker */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            {[
              { id: 'student', label: 'Student' },
              { id: 'scholar', label: 'Scholar' },
              { id: 'startup', label: 'Startup' }
            ].map((p) => (
              <button
                type="button"
                key={p.id}
                onClick={() => setRole(p.id)}
                style={{
                  background: role === p.id ? '#012A2D' : '#f8fafc',
                  color: role === p.id ? '#ffffff' : '#475569',
                  border: role === p.id ? '1px solid #012A2D' : '1px solid #e2e8f0',
                  borderRadius: '6px',
                  padding: '6px 4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: role === p.id ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          <input
            type="text"
            required
            placeholder="Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: '10px 14px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              color: '#090d16',
              fontSize: '0.84rem',
              outline: 'none'
            }}
          />

          <input
            type="text"
            required
            placeholder="Your Email or Phone..."
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            style={{
              padding: '10px 14px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              color: '#090d16',
              fontSize: '0.84rem',
              outline: 'none'
            }}
          />

          <input
            type="text"
            placeholder="Project Title or Topic (optional)..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{
              padding: '10px 14px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              color: '#090d16',
              fontSize: '0.84rem',
              outline: 'none'
            }}
          />

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '12px',
              fontSize: '0.82rem',
              cursor: 'pointer',
              marginTop: '4px'
            }}
          >
            Connect With Engineer <Send size={14} />
          </button>
        </form>
      )}

      {/* Security note */}
      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.66rem',
          color: '#64748b'
        }}
      >
        <Lock size={12} color="#012A2D" /> 100% Confidential • Fast Engineering Response
      </div>
    </div>
  );
}
