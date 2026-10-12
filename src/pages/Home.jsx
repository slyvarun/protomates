import React from 'react';
import Hero from '../components/Hero';

export default function Home({ introStage, onReplayIntro, onNavigate }) {
  return (
    <div className="protomates-home-page" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 
        Home page contains ONLY company branding, interactive 3D PCBs canvas,
        and the 3 interactive buttons that expand on hover to explain everything
        for Students, Professional Scholars, and Startup Founders.
      */}
      <Hero
        introStage={introStage}
        onReplayIntro={onReplayIntro}
        onNavigate={onNavigate}
      />
    </div>
  );
}
