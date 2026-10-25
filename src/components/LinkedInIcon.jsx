import React from 'react';

export default function LinkedInIcon({ size = 24, style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: 'inline-block', flexShrink: 0, ...style }}
    >
      <rect width="24" height="24" rx="4.5" fill="#0a66c2" />
      <circle cx="6.5" cy="6.5" r="1.8" fill="#ffffff" />
      <rect x="5" y="10" width="3" height="9" fill="#ffffff" />
      <path
        d="M10.8 10h2.9v1.25h.05c.42-.78 1.45-1.55 2.9-1.55 3.1 0 3.65 2.05 3.65 4.7V19h-3v-4.15c0-1-.02-2.25-1.4-2.25-1.4 0-1.6 1.07-1.6 2.2V19h-3V10z"
        fill="#ffffff"
      />
    </svg>
  );
}
