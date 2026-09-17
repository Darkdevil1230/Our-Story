import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Volume2, 
  MessageCircleHeart, 
  Compass, 
  Clock, 
  X,
  ArrowUpRight
} from 'lucide-react';
import { storyData } from '../data/storyData';

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  ShieldCheck: ShieldCheck,
  Volume2: Volume2,
  MessageCircleHeart: MessageCircleHeart,
  Compass: Compass,
  Clock: Clock,
};

export default function LittleThingsSection() {
  const { chapter2 } = storyData;
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section id="little-things" className="scene-little-things">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              {chapter2.label} — {chapter2.number}
            </span>
          </motion.div>

          <motion.h2
            className="section-title rose-gradient-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            {chapter2.title}
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {chapter2.subtitle}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {chapter2.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.id}
                className="glass-panel little-thing-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedCard(item)}
                data-cursor="READ"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedCard(item);
                  }
                }}
                aria-label={`Read thought about ${item.title}`}
              >
                <div className="card-top">
                  <div className="card-icon-wrap">
                    <IconComponent size={20} />
                  </div>
                  <span className="card-action">
                    Read <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </span>
                </div>

                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-preview">{item.preview}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Mini-Message Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="card-modal-content"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedCard(null)}
                aria-label="Close thought"
              >
                <X size={18} />
              </button>

              <p className="modal-title">{selectedCard.title}</p>
              <p className="modal-message">"{selectedCard.expanded}"</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
