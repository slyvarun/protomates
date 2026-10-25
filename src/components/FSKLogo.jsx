import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

export default function FSKLogo({ compact = false, size = 'default', showTagline = true }) {
  const isLarge = size === 'large';
  const emblemHeight = isLarge ? 54 : compact ? 34 : 42;
  const fskFontSize = isLarge ? '2.2rem' : compact ? '1.35rem' : '1.65rem';
  const taglineFontSize = isLarge ? '0.68rem' : compact ? '0.5rem' : '0.56rem';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: compact ? '10px' : '14px',
        textDecoration: 'none',
        userSelect: 'none',
        lineHeight: 1
      }}
    >
      {/* Official FSK Triangular Interlocking Monogram Emblem */}
      <img
        src={getAssetUrl('fsk_emblem.png')}
        alt="FSK Emblem"
        onError={(e) => {
          if (!e.currentTarget.dataset.retried) {
            e.currentTarget.dataset.retried = '1';
            e.currentTarget.src = './fsk_emblem.png';
          } else if (e.currentTarget.dataset.retried === '1') {
            e.currentTarget.dataset.retried = '2';
            e.currentTarget.src = '/fsk_emblem.png';
          }
        }}
        style={{
          height: `${emblemHeight}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
          flexShrink: 0
        }}
      />

      {/* Brand Name: FSK + Tagline: Prototyping Services */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: fskFontSize,
              fontWeight: 900,
              letterSpacing: '-0.025em',
              color: '#012A2D',
              lineHeight: 0.95
            }}
          >
            FSK
          </span>
          <span
            style={{
              display: 'inline-block',
              width: isLarge ? '6px' : '5px',
              height: isLarge ? '6px' : '5px',
              borderRadius: '50%',
              background: '#012A2D',
              marginLeft: '2px'
            }}
          />
        </div>

        {showTagline && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: taglineFontSize,
              fontWeight: 700,
              letterSpacing: '1.8px',
              color: '#435355',
              textTransform: 'uppercase',
              marginTop: '4px',
              lineHeight: 1
            }}
          >
            Prototyping Services
          </span>
        )}
      </div>
    </div>
  );
}
