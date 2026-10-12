import React from 'react';
import { X, CheckCircle, Package, ArrowRight } from 'lucide-react';

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
        background: 'rgba(3, 3, 5, 0.94)',
        backdropFilter: 'blur(12px)',
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
          background: '#0d0d12',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          borderRadius: '8px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(200, 255, 0, 0.1)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: 'var(--white)',
            width: '38px',
            height: '38px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = 'var(--black)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
            e.currentTarget.style.color = 'var(--white)';
          }}
        >
          <X size={20} />
        </button>

        <div style={{ position: 'relative' }}>
          <img
            src={prototype.img}
            alt={prototype.title}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '440px',
              objectFit: 'cover',
              display: 'block',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          />
          {prototype.targetAudience && (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '24px',
                background: 'rgba(5, 5, 8, 0.88)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--accent)',
                padding: '6px 14px',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent)',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}
            >
              Audience: {prototype.targetAudience}
            </div>
          )}
        </div>

        <div style={{ padding: '36px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--accent)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}
          >
            {prototype.category || prototype.cat}
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              letterSpacing: '1.5px',
              color: 'var(--white)',
              lineHeight: 1.05,
              marginBottom: '16px'
            }}
          >
            {prototype.title}
          </h3>

          <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: 1.8, marginBottom: '24px' }}>
            {prototype.desc}
          </p>

          {prototype.deliverables && (
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '18px 24px',
                borderRadius: '6px',
                marginBottom: '26px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--white)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}
              >
                <Package size={16} color="var(--accent)" /> Included Deliverables Pack:
              </div>
              <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
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
                  fontSize: '0.68rem',
                  padding: '6px 12px',
                  background: 'rgba(200, 255, 0, 0.06)',
                  border: '1px solid rgba(200, 255, 0, 0.25)',
                  color: 'var(--accent)',
                  borderRadius: '2px'
                }}
              >
                {chip}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={handleInquire} className="btn-primary" style={{ cursor: 'pointer' }}>
              Inquire About Similar Project <ArrowRight size={16} />
            </button>
            <button onClick={onClose} className="btn-ghost" style={{ cursor: 'pointer', border: '1px solid var(--border)' }}>
              Close Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
