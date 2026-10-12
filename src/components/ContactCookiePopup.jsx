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

const COOKIE_STORAGE_KEY = 'protomates_contact_popup_status';
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

    // Send email dispatch to info.protomates@gmail.com
    fetch('https://formsubmit.co/ajax/info.protomates@gmail.com', {
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
        _subject: `New Protomates 10-Min Intake from ${name || contact} [${roleLabel}]`,
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
        background: 'linear-gradient(145deg, rgba(16, 16, 24, 0.98), rgba(9, 9, 14, 0.99))',
        border: '1.5px solid var(--accent)',
        borderRadius: '12px',
        padding: '24px 26px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(200, 255, 0, 0.25)',
        backdropFilter: 'blur(20px)',
        animation: 'popUpSpring 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      {/* Top Beacon & Close */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 8px var(--accent)',
              animation: 'pulse 1.8s infinite'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--accent)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}
          >
            Engineering Desk // 10-Min Priority Notice
          </span>
        </div>

        <button
          onClick={handleDismiss}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#888',
            cursor: 'pointer',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
        >
          <X size={16} />
        </button>
      </div>

      <h4
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.75rem',
          letterSpacing: '1px',
          color: 'var(--white)',
          lineHeight: 1.1,
          marginBottom: '6px'
        }}
      >
        NEED HELP PLANNING YOUR PROJECT?
      </h4>

      <p style={{ color: '#aaa', fontSize: '0.84rem', lineHeight: 1.5, marginBottom: '16px' }}>
        Our lead engineers are online. Drop your requirement below for a complimentary technical roadmap and feasibility assessment (&lt; 15 mins).
      </p>

      {submitted ? (
        <div
          style={{
            background: 'rgba(200, 255, 0, 0.08)',
            border: '1px solid rgba(200, 255, 0, 0.3)',
            borderRadius: '6px',
            padding: '16px',
            textAlign: 'center',
            color: 'var(--accent)',
            fontSize: '0.86rem'
          }}
        >
          <CheckCircle2 size={24} style={{ margin: '0 auto 6px' }} />
          Inquiry dispatched to info.protomates@gmail.com! Our team will reply promptly.
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
                  background: role === p.id ? 'var(--accent)' : 'rgba(255, 255, 255, 0.04)',
                  color: role === p.id ? 'var(--black)' : '#bbb',
                  border: role === p.id ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  padding: '5px 4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: role === p.id ? 700 : 400,
                  cursor: 'pointer'
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
              padding: '8px 12px',
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
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            style={{
              padding: '8px 12px',
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
            placeholder="Project Title or Topic (optional)..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{
              padding: '8px 12px',
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
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '10px',
              fontSize: '0.76rem',
              cursor: 'pointer',
              marginTop: '4px'
            }}
          >
            Connect With Engineer <Send size={13} />
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
          fontSize: '0.62rem',
          color: '#777'
        }}
      >
        <Lock size={11} color="var(--accent)" /> 100% Confidential • Instant response
      </div>
    </div>
  );
}
