import React from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import MusicControl from './components/MusicControl';
import OpeningScene from './components/OpeningScene';
import BeginningSection from './components/BeginningSection';
import LittleThingsSection from './components/LittleThingsSection';
import MemoryTimeline from './components/MemoryTimeline';
import PhotoUniverse from './components/PhotoUniverse';
import ImperfectionSection from './components/ImperfectionSection';
import MeaningSection from './components/MeaningSection';
import OpenWhenCards from './components/OpenWhenCards';
import PromiseSection from './components/PromiseSection';
import FinalReveal from './components/FinalReveal';
import Footer from './components/Footer';

export default function App() {
  const { scrollTo } = useSmoothScroll();

  return (
    <div className="app-root">
      {/* 35mm Subtle Film Texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Interactive Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Atmospheric Starfield & Dynamic Lighting */}
      <ParticleBackground />

      {/* Navigation HUD */}
      <Navigation onNavigate={scrollTo} />

      {/* Music Controller with Atmospheric Synth Fallback */}
      <MusicControl />

      {/* Progressive Cinematic Story Chapters */}
      <main>
        <OpeningScene onScrollNext={() => scrollTo('#beginning')} />
        <BeginningSection />
        <LittleThingsSection />
        <MemoryTimeline onContinue={scrollTo} />
        <PhotoUniverse onContinue={scrollTo} />
        <ImperfectionSection />
        <MeaningSection />
        <OpenWhenCards />
        <PromiseSection />
        <FinalReveal />
      </main>

      {/* Minimal Dedication Footer */}
      <Footer />
    </div>
  );
}
