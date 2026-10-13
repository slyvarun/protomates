import React from 'react';
import { ArrowRight } from 'lucide-react';

const TRACKS = [
  {
    id: 'students',
    role: 'Students',
    subtitle: 'Academic Capstones & Degrees'
  },
  {
    id: 'scholars',
    role: 'Professional Scholars',
    subtitle: 'Research Simulations & Papers'
  },
  {
    id: 'startups',
    role: 'Startup Founders',
    subtitle: 'Commercial Turnkey MVPs'
  }
];

export default function InteractiveHeroTrackButtons({ onNavigate }) {
  const handleTrackAction = (trackId) => {
    if (onNavigate) {
      onNavigate('contact', { audience: trackId });
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Three Direct Track Selector Buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '14px'
        }}
      >
        {TRACKS.map((track) => (
          <button
            type="button"
            key={track.id}
            onClick={() => handleTrackAction(track.id)}
            style={{
              background: 'rgba(14, 14, 20, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '20px 22px',
              cursor: 'pointer',
              backdropFilter: 'blur(20px)',
              textAlign: 'left',
              position: 'relative',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '110px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.background = 'rgba(22, 22, 30, 0.9)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              const arrow = e.currentTarget.querySelector('.track-arrow');
              if (arrow) {
                arrow.style.transform = 'translateX(4px)';
                arrow.style.color = '#ffffff';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'rgba(14, 14, 20, 0.75)';
              e.currentTarget.style.transform = 'translateY(0)';
              const arrow = e.currentTarget.querySelector('.track-arrow');
              if (arrow) {
                arrow.style.transform = 'translateX(0)';
                arrow.style.color = '#777777';
              }
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '12px',
                width: '100%',
                marginBottom: '10px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.65rem',
                  letterSpacing: '1px',
                  color: 'var(--white)',
                  lineHeight: 1.1
                }}
              >
                {track.role}
              </div>
              <ArrowRight
                size={16}
                color="#777777"
                className="track-arrow"
                style={{ transition: 'all 0.2s ease', flexShrink: 0, marginTop: '4px' }}
              />
            </div>

            <div
              style={{
                fontSize: '0.78rem',
                color: '#94a3b8',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.5px',
                lineHeight: 1.4
              }}
            >
              {track.subtitle}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
