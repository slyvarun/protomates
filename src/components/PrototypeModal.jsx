import React from 'react';
import { X } from 'lucide-react';

export default function PrototypeModal({ prototype, onClose, onNavigateContact }) {
  if (!prototype) return null;

  const handleInquire = () => {
    if (onClose) onClose();
    if (onNavigateContact) {
      onNavigateContact(prototype.audienceId || 'students');
    } else {
      window.location.href = '#contact';
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(8px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          borderRadius: '16px',
          boxShadow: '0 30px 80px rgba(15, 23, 42, 0.2), 0 4px 16px rgba(0, 82, 255, 0.08)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#090d16',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f1f5f9';
            e.currentTarget.style.borderColor = '#cbd5e1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.borderColor = '#e2e8f0';
          }}
        >
          <X size={18} />
        </button>

        {/* Technical Blueprint & Spec Header (Zero AI imagery) */}
        <div
          style={{
            padding: '36px 36px 28px',
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(0, 82, 255, 0.08) 1px, transparent 0)',
              backgroundSize: '20px 20px',
              pointerEvents: 'none'
            }}
          />

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '5px 12px',
                background: '#ffffff',
                border: '1.5px solid #0052ff',
                color: '#0052ff',
                borderRadius: '6px',
                letterSpacing: '1px'
              }}
            >
              {prototype.badge}
            </span>
            {prototype.targetAudience && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '5px 12px',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  borderRadius: '6px'
                }}
              >
                Track: {prototype.targetAudience}
              </span>
            )}
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: '#1e293b',
              lineHeight: 1.6,
              background: '#ffffff',
              padding: '14px 20px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              position: 'relative',
              zIndex: 1
            }}
          >
            <span style={{ color: '#0052ff', fontWeight: 700, display: 'block', fontSize: '0.7rem', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '4px' }}>
              Hardware Specifications &amp; Interface Standards:
            </span>
            {prototype.specs}
          </div>
        </div>

        <div style={{ padding: '36px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#0052ff',
              letterSpacing: '2px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}
          >
            {prototype.category || prototype.cat}
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: '#090d16',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}
          >
            {prototype.title}
          </h3>

          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
            {prototype.desc}
          </p>

          {prototype.deliverables && (
            <div
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '18px 24px',
                borderRadius: '12px',
                marginBottom: '26px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#090d16',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}
              >
                Included Deliverables Pack:
              </div>
              <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                {prototype.deliverables}
              </p>
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            {(prototype.chips || []).map((chip) => (
              <span
                key={chip}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  padding: '6px 12px',
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  color: '#0052ff',
                  fontWeight: 600,
                  borderRadius: '6px'
                }}
              >
                {chip}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={handleInquire} className="btn-primary" style={{ cursor: 'pointer' }}>
              Inquire About Similar Project
            </button>
            <button
              onClick={onClose}
              className="btn-ghost"
              style={{ cursor: 'pointer', border: '1px solid #cbd5e1', color: '#090d16', background: '#ffffff' }}
            >
              Close Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
