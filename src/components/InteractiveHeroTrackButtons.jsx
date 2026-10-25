import React from 'react';

const TRACKS = [
  {
    id: 'students',
    trackNum: '01',
    role: 'Students',
    badge: 'Capstones & Degrees',
    subtitle: 'Flawless hardware + viva defense',
    accent: '#0052ff'
  },
  {
    id: 'scholars',
    trackNum: '02',
    role: 'Scholars & PhDs',
    badge: 'SCI / Scopus Papers',
    subtitle: 'Empirical hardware & simulations',
    accent: '#0284c7'
  },
  {
    id: 'startups',
    trackNum: '03',
    role: 'Startup Founders',
    badge: 'Commercial MVPs',
    subtitle: 'Turnkey PCBs & investor demos',
    accent: '#059669'
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
      {/* Three Direct Track Selector Cards - Pure Typography, No Icons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '14px'
        }}
      >
        {TRACKS.map((track) => (
          <button
            type="button"
            key={track.id}
            onClick={() => handleTrackAction(track.id)}
            style={{
              background: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              borderRadius: '12px',
              padding: '16px 20px',
              cursor: 'pointer',
              textAlign: 'left',
              position: 'relative',
              transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '105px',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = track.accent;
              e.currentTarget.style.boxShadow = `0 10px 24px -4px rgba(0, 82, 255, 0.14), 0 0 0 1px ${track.accent}`;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: track.accent,
                    letterSpacing: '1px'
                  }}
                >
                  {track.trackNum} //
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#090d16',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {track.role}
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  background: '#f8fafc',
                  color: track.accent,
                  border: '1px solid #e2e8f0',
                  whiteSpace: 'nowrap'
                }}
              >
                {track.badge}
              </span>
            </div>

            <div style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.4 }}>
              {track.subtitle}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
