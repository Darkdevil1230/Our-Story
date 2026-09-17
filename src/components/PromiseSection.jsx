import React from 'react';
import { motion } from 'framer-motion';
import { storyData } from '../data/storyData';

export default function PromiseSection() {
  const { chapter6 } = storyData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.25,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="promise" className="scene-promise">
      <div className="container">
        <div className="promise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '2rem' }}
          >
            <span className="chapter-badge">
              {chapter6.label} — {chapter6.number}
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20%' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <motion.p variants={lineVariants} className="promise-line" style={{ color: 'var(--text-mist)' }}>
              {chapter6.promises[0]}
            </motion.p>

            <motion.p variants={lineVariants} className="promise-line" style={{ color: 'var(--text-mist)' }}>
              {chapter6.promises[1]}
            </motion.p>

            <motion.p
              variants={lineVariants}
              className="promise-line serif-italic"
              style={{ color: 'var(--gold-soft)', fontSize: '2.25rem', marginTop: '1.5rem' }}
            >
              {chapter6.promises[2]}
            </motion.p>

            <motion.p variants={lineVariants} className="promise-line">
              {chapter6.promises[3]}
            </motion.p>

            <motion.p variants={lineVariants} className="promise-line">
              {chapter6.promises[4]}
            </motion.p>

            <motion.h2
              variants={lineVariants}
              className="promise-climax gold-gradient-text"
            >
              "{chapter6.promises[5]}"
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
