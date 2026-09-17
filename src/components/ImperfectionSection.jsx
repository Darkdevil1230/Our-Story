import React from 'react';
import { motion } from 'framer-motion';
import { storyData } from '../data/storyData';

export default function ImperfectionSection() {
  const { chapter4 } = storyData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="imperfections" className="scene-imperfections">
      <div className="container">
        <div className="imperfection-box">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              {chapter4.label} — {chapter4.number}
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <motion.h2 variants={itemVariants} className="imperfect-title">
              "{chapter4.lines[0]}"
            </motion.h2>

            <motion.p variants={itemVariants} className="imperfect-body">
              {chapter4.lines[1]}
            </motion.p>

            <motion.p variants={itemVariants} className="imperfect-body">
              {chapter4.lines[2]}
            </motion.p>

            <motion.div variants={itemVariants} style={{ margin: '1.5rem 0' }}>
              <p className="imperfect-body" style={{ color: 'var(--text-muted)' }}>
                {chapter4.lines[3]}
              </p>
              <p className="imperfect-body" style={{ color: 'var(--text-muted)' }}>
                {chapter4.lines[4]}
              </p>
              <p className="imperfect-body" style={{ color: 'var(--text-muted)' }}>
                {chapter4.lines[5]}
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="imperfect-body serif-italic"
              style={{ color: 'var(--gold-champagne)', fontSize: '1.75rem' }}
            >
              {chapter4.lines[6]}
            </motion.p>

            <motion.p variants={itemVariants} className="imperfect-accent">
              "{chapter4.lines[7]}"
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8 }}
            style={{ fontSize: '0.9rem', color: 'var(--text-mist)', marginTop: '2.5rem', fontStyle: 'italic' }}
          >
            {chapter4.reflection}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
