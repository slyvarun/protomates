import React from 'react';
import { ArrowLeft, Home, Mail } from 'lucide-react';

export default function NotFound({ onNavigate }) {
  return (
    <section
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
        background: 'transparent'
      }}
    >
      <div
        style={{
          maxWidth: '580px',
          margin: '0 auto',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: 'clamp(32px, 6vw, 48px)',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 800,
            letterSpacing: '2px',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}
        >
          404 // Specification Not Found
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            margin: '0 0 16px'
          }}
        >
          PAGE NOT FOUND
        </h1>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.96rem',
            lineHeight: 1.6,
            marginBottom: '28px'
          }}
        >
          The requested engineering resource or page route does not exist. It may have been relocated or updated during our laboratory catalog refresh.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <button
            type="button"
            onClick={() => (onNavigate ? onNavigate('home') : (window.location.hash = ''))}
            className="btn-primary"
            style={{
              padding: '12px 24px',
              cursor: 'pointer',
              fontSize: '0.88rem'
            }}
          >
            <Home size={16} />
            <span>Return to Laboratory</span>
          </button>

          <button
            type="button"
            onClick={() => (onNavigate ? onNavigate('contact') : (window.location.hash = '#contact'))}
            className="btn-ghost"
            style={{
              padding: '12px 22px',
              cursor: 'pointer',
              fontSize: '0.88rem'
            }}
          >
            <Mail size={16} />
            <span>Contact Engineers</span>
          </button>
        </div>
      </div>
    </section>
  );
}
