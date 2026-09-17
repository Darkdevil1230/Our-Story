import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Heart, Sparkles, Feather } from 'lucide-react';
import { storyData } from '../data/storyData';

export default function OpenWhenCards() {
  const { openWhen } = storyData;
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <section id="letters" className="scene-open-when">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">Letters</span>
          </motion.div>

          <motion.h2
            className="section-title gold-gradient-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            {openWhen.title}
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {openWhen.subtitle}
          </motion.p>
        </div>

        {/* Envelopes Grid */}
        <div className="envelopes-grid">
          {openWhen.letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              className="envelope-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedLetter(letter)}
              data-cursor="OPEN"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedLetter(letter);
                }
              }}
              aria-label={`Open letter: ${letter.title}`}
            >
              <div>
                <div
                  className="envelope-seal"
                  style={{ backgroundColor: letter.sealColor }}
                  aria-hidden="true"
                >
                  <Mail size={18} />
                </div>

                <h3 className="envelope-title">{letter.title}</h3>
                <p className="envelope-preview">{letter.preview}</p>
              </div>

              <div className="envelope-action">
                <Feather size={14} />
                <span>Read Letter</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Letter Reading Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            className="letter-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              className="letter-paper"
              initial={{ scale: 0.88, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.88, y: 30, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedLetter(null)}
                aria-label="Fold and close letter"
              >
                <X size={18} />
              </button>

              <div className="letter-header">
                <p className="letter-category">Folded Note</p>
                <h3 className="letter-heading">{selectedLetter.title}</h3>
              </div>

              <div className="letter-body">
                {selectedLetter.content}
              </div>

              <div className="letter-sign">
                <p>{selectedLetter.signature}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
