import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { storyData } from '../data/storyData';

export default function FinalReveal() {
  const { finalQuestion } = storyData;
  const [hasOpened, setHasOpened] = useState(false);
  const [hasContinued, setHasContinued] = useState(false);

  const handleOpenClick = () => {
    setHasOpened(true);
  };

  const handleContinueStory = () => {
    setHasContinued(true);

    // Tasteful celebration: warm gold, soft rose, and subtle ivory embers
    const count = 120;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#df889d', '#d8aa72', '#faf4ed', '#881a38'],
      ticks: 200,
      gravity: 0.8,
      spread: 80,
    };

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.6),
      spread: 60,
      startVelocity: 35,
    });

    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.4),
        spread: 100,
        startVelocity: 45,
      });
    }, 400);
  };

  return (
    <section id="final" className="scene-final">
      {/* Solitary Her Name */}
      <motion.h2
        className="final-lead-name rose-gradient-text"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {finalQuestion.leadName}
      </motion.h2>

      <motion.p
        className="final-teaser"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {finalQuestion.teaser}
      </motion.p>

      {/* Button: OPEN IT ❤️ */}
      {!hasOpened && (
        <motion.button
          className="btn-cinematic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpenClick}
          data-cursor="OPEN"
        >
          <span>{finalQuestion.openPrompt}</span>
        </motion.button>
      )}

      {/* Revealed Sequence */}
      <AnimatePresence>
        {hasOpened && !hasContinued && (
          <motion.div
            className="final-unveiled-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              className="final-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {finalQuestion.revelations[0]}
            </motion.p>

            <motion.p
              className="final-line serif-italic"
              style={{ color: 'var(--rose-soft)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              {finalQuestion.revelations[1]}
            </motion.p>

            <motion.h3
              className="final-line gold-gradient-text"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)', fontWeight: 400 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 1.2 }}
            >
              "{finalQuestion.revelations[2]}"
            </motion.h3>

            <motion.p
              className="final-question-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 1 }}
            >
              {finalQuestion.question}
            </motion.p>

            {/* Single Elegant Action Button */}
            <motion.button
              className="btn-cinematic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContinueStory}
              data-cursor="ALWAYS"
            >
              <span>{finalQuestion.buttonText}</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grand Celebration & Chapter ∞ */}
      <AnimatePresence>
        {hasContinued && (
          <motion.div
            className="infinity-celebration-card"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="infinity-symbol" aria-hidden="true">
              ∞
            </div>

            <h3 className="infinity-title gold-gradient-text">
              {finalQuestion.infinityChapter.number}
            </h3>

            <p className="infinity-subtitle">
              {finalQuestion.infinityChapter.subtitle}
            </p>

            <p className="infinity-desc">
              "{finalQuestion.infinityChapter.message}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
