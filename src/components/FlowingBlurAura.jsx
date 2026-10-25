import React from 'react';

/**
 * High-performance, clean background layer.
 * Neutral white ground with subtle technical blueprint grid.
 * Zero CPU-heavy blur filters, zero fluorescent color blobs.
 */
export default function FlowingBlurAura() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        background: '#ffffff'
      }}
    >
      {/* Precision CAD Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(1, 42, 45, 0.04) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          opacity: 0.8
        }}
      />
    </div>
  );
}
