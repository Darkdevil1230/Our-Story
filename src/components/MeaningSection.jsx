import React from 'react';
import { motion } from 'framer-motion';
import { storyData } from '../data/storyData';

export default function MeaningSection() {
  const { chapter5 } = storyData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.45,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="meaning" className="scene-meaning">
      <div className="container">
        <motion.div
          className="meaning-sequence"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20%' }}
        >
          <motion.div variants={lineVariants} style={{ marginBottom: '1.5rem' }}>
            <span className="chapter-badge">
              {chapter5.label} — {chapter5.number}
            </span>
          </motion.div>

          {chapter5.lines.map((line, idx) => (
            <motion.p key={idx} variants={lineVariants} className="meaning-statement">
              {line}
            </motion.p>
          ))}

          <motion.h2
            variants={lineVariants}
            className="meaning-climax rose-gradient-text"
          >
            "{chapter5.climax}"
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
