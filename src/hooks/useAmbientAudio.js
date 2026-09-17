import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Procedural atmospheric pad generator using Web Audio API
 * Plays gentle, warm ambient chord textures without needing any external MP3 file
 */
class AmbientSynthesizer {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.oscillators = [];
    this.filter = null;
    this.isPlaying = false;
    this.intervalId = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    this.masterGain.connect(this.filter);
    this.filter.connect(this.ctx.destination);
  }

  start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // Warm chords in F Major / D Minor (Hz)
    // F3 (174.61), A3 (220.00), C4 (261.63), E4 (329.63), G4 (392.00)
    const chordProgressions = [
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [146.83, 220.00, 261.63, 349.23], // Dm7
      [130.81, 196.00, 261.63, 329.63], // Cmaj
      [164.81, 196.00, 246.94, 293.66], // Em7
    ];

    let currentChordIndex = 0;
    this.playChord(chordProgressions[currentChordIndex]);

    this.intervalId = setInterval(() => {
      currentChordIndex = (currentChordIndex + 1) % chordProgressions.length;
      this.transitionToChord(chordProgressions[currentChordIndex]);
    }, 6000);

    // Fade master gain smoothly to gentle volume
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);
    this.isPlaying = true;
  }

  playChord(frequencies) {
    this.stopOscillators();
    frequencies.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      // Detune slightly for lush warmth
      osc.detune.setValueAtTime((idx - 1.5) * 4, this.ctx.currentTime);

      oscGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.25 / frequencies.length, this.ctx.currentTime + 2.5);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start();
      this.oscillators.push({ osc, gain: oscGain });
    });
  }

  transitionToChord(frequencies) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    // Fade old oscillators
    this.oscillators.forEach(({ osc, gain }) => {
      try {
        gain.gain.cancelScheduledValues(now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2);
        osc.stop(now + 2.1);
      } catch (e) {
        // Ignored
      }
    });
    this.oscillators = [];

    // Start new chord
    frequencies.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + 1);
      osc.detune.setValueAtTime((idx - 1.5) * 5, now + 1);

      oscGain.gain.setValueAtTime(0.0001, now + 1);
      oscGain.gain.exponentialRampToValueAtTime(0.25 / frequencies.length, now + 3.5);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start(now + 1);
      this.oscillators.push({ osc, gain: oscGain });
    });
  }

  stopOscillators() {
    if (!this.ctx) return;
    this.oscillators.forEach(({ osc }) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {
        // Ignored
      }
    });
    this.oscillators = [];
  }

  stop() {
    if (!this.ctx || !this.isPlaying) return;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);

    setTimeout(() => {
      this.stopOscillators();
      this.isPlaying = false;
    }, 1600);
  }
}

export function useAmbientAudio(audioSrc = '/audio/our-song.mp3') {
  const [isPlaying, setIsPlaying] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);
  const audioRef = useRef(null);
  const synthRef = useRef(null);

  useEffect(() => {
    // Initialize audio element
    const audio = new Audio();
    audio.src = audioSrc;
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    audio.addEventListener('error', () => {
      // If MP3 fails or does not exist, switch smoothly to synth
      setUsingFallback(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (synthRef.current) {
        synthRef.current.stop();
      }
    };
  }, [audioSrc]);

  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      // Pause
      if (usingFallback && synthRef.current) {
        synthRef.current.stop();
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      // Start Playing
      if (usingFallback) {
        if (!synthRef.current) {
          synthRef.current = new AmbientSynthesizer();
        }
        synthRef.current.start();
        setIsPlaying(true);
      } else if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // File might be missing or blocked, trigger fallback synth
              setUsingFallback(true);
              if (!synthRef.current) {
                synthRef.current = new AmbientSynthesizer();
              }
              synthRef.current.start();
              setIsPlaying(true);
            });
        }
      }
    }
  }, [isPlaying, usingFallback]);

  return { isPlaying, toggleAudio, isSynthesized: usingFallback };
}
