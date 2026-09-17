import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { useAmbientAudio } from '../hooks/useAmbientAudio';
import { storyData } from '../data/storyData';

export default function MusicControl() {
  const { isPlaying, toggleAudio, isSynthesized } = useAmbientAudio(storyData.audio.src);

  return (
    <div className="audio-control-hud">
      <button
        className="audio-btn"
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
        data-cursor="MUSIC"
      >
        {isPlaying ? (
          <Volume2 size={16} color="var(--rose-muted)" />
        ) : (
          <VolumeX size={16} color="var(--text-muted)" />
        )}

        <span>{isPlaying ? 'Soundtrack Playing' : 'Play Soundscape'}</span>

        <div className="audio-wave" aria-hidden="true">
          <div className={`audio-bar ${isPlaying ? 'playing' : ''}`} />
          <div className={`audio-bar ${isPlaying ? 'playing' : ''}`} />
          <div className={`audio-bar ${isPlaying ? 'playing' : ''}`} />
          <div className={`audio-bar ${isPlaying ? 'playing' : ''}`} />
        </div>
      </button>
    </div>
  );
}
