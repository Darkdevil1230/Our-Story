import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { storyData } from '../data/storyData';

export default function OpeningScene({ onScrollNext }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Cinematic timeline pacing
    const t1 = setTimeout(() => setStep(1), 800);   // Particle grows & "Before you..."
    const t2 = setTimeout(() => setStep(2), 2600);  // "my life was simply my life."
    const t3 = setTimeout(() => setStep(3), 4600);  // "And then, somehow..."
    const t4 = setTimeout(() => setStep(4), 6800);  // "You happened."
    const t5 = setTimeout(() => setStep(5), 8400);  // Scroll cue appears

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <section id="opening" className="scene-opening">
      {/* Tiny glowing central particle that gently blooms */}
      <motion.div
        className="opening-particle-core"
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{
          scale: step >= 1 ? [1, 1.4, 1.2] : 0.1,
          opacity: step >= 1 ? [0.4, 0.9, 0.7] : 0,
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="opening-content">
        {/* Step 1: "Before you..." */}
        <motion.p
          className="opening-lead"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 15 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {storyData.opening.prelude}
        </motion.p>

        {/* Step 2: "my life was simply my life." */}
        <motion.p
          className="opening-sub"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 15 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {storyData.opening.subtitle}
        </motion.p>

        {/* Step 3: "And then, somehow..." */}
        <motion.p
          className="opening-lead serif-italic"
          style={{ color: 'var(--rose-muted)', marginTop: '1rem' }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 15 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {storyData.opening.transition}
        </motion.p>

        {/* Step 4: "You happened." */}
        <motion.h1
          className="opening-climax rose-gradient-text"
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
          animate={{
            opacity: step >= 4 ? 1 : 0,
            scale: step >= 4 ? 1 : 0.94,
            filter: step >= 4 ? 'blur(0px)' : 'blur(10px)',
          }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {storyData.opening.climax}
        </motion.h1>
      </div>

      {/* Step 5: Scroll Prompt */}
      <motion.button
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 5 ? 0.75 : 0 }}
        transition={{ duration: 1 }}
        onClick={onScrollNext}
        data-cursor="SCROLL"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span>{storyData.opening.scrollPrompt}</span>
        <ChevronDown size={18} className="scroll-cue-arrow" />
      </motion.button>
    </section>
  );
}
