import React from 'react';
import { motion } from 'framer-motion';
import { storyData } from '../data/storyData';

export default function BeginningSection() {
  const { chapter1 } = storyData;

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

  const lineVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="beginning" className="scene-beginning">
      <div className="container">
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="chapter-badge">
            {chapter1.label} — {chapter1.title}
          </span>
        </motion.div>

        {/* Narrative Sequential Lines */}
        <motion.div
          className="beginning-lines"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15%' }}
        >
          {chapter1.lines.map((line, index) => {
            const isLast = index === chapter1.lines.length - 1;
            return (
              <motion.div key={index} variants={lineVariants}>
                <p className={`narrative-line ${isLast ? 'narrative-highlight' : ''}`}>
                  {line}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cinematic Reflection Banner */}
        <motion.div
          className="beginning-reflection"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <p>"{chapter1.reflection}"</p>
        </motion.div>
      </div>
    </section>
  );
}
