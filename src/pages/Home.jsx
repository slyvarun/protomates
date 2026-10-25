import React from 'react';
import Hero from '../components/Hero';

export default function Home({ onNavigate }) {
  return (
    <div className="protomates-home-page" style={{ position: 'relative', overflow: 'hidden', background: 'transparent' }}>
      <Hero onNavigate={onNavigate} />
    </div>
  );
}
