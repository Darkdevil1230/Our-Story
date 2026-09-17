import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, MessageCircle, MapPin, Coffee, Bike, HeartHandshake, Sun, Heart } from 'lucide-react';
import { storyData } from '../data/storyData';

const milestoneIcons = {
  'm-1': MessageCircle,
  'm-2': MapPin,
  'm-3': Coffee,
  'm-4': Bike,
  'm-5': HeartHandshake,
  'm-6': Sun,
  'm-7': Sparkles,
  'm-8': Heart,
};

export default function MemoryTimeline({ onContinue }) {
  const { chapter3 } = storyData;
  const { milestones, transition } = chapter3;
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollMiddle = window.scrollY + window.innerHeight * 0.45;

      milestones.forEach((m, idx) => {
        const el = document.getElementById(m.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollMiddle >= top && scrollMiddle < bottom) {
            setActiveIdx(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [milestones]);

  const scrollToMilestone = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleContinueClick = () => {
    if (onContinue) {
      onContinue('#universe');
    } else {
      const nextEl = document.getElementById('universe');
      if (nextEl) nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="memories" className="scene-chronology">
      {/* Chapter Intro Header */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="chapter-badge">
            {chapter3.label} — {chapter3.number}
          </span>
        </motion.div>

        <motion.h2
          className="section-title gold-gradient-text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {chapter3.title}
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {chapter3.subtitle}
        </motion.p>
      </div>

      {/* Floating Mini Timeline HUD on Desktop/Laptop */}
      <nav className="chrono-progress-hud" aria-label="Timeline navigation">
        <div className="hud-label">
          <span className="hud-current">0{activeIdx + 1}</span>
          <span className="hud-sep">/</span>
          <span className="hud-total">0{milestones.length}</span>
        </div>
        <div className="hud-nodes">
          {milestones.map((m, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={m.id}
                className={`hud-node-dot ${isActive ? 'active' : ''}`}
                onClick={() => scrollToMilestone(m.id)}
                aria-label={`Jump to ${m.date} — ${m.title}`}
                data-cursor="GOTO"
              >
                <span className="hud-tooltip">{m.shortMonth}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Sequential Milestone Scenes */}
      <div className="chrono-milestones-flow">
        {milestones.map((milestone, index) => {
          const IconComponent = milestoneIcons[milestone.id] || Sparkles;
          const isReconciliation = milestone.mood === 'reconciliation';
          const isPlayful = milestone.mood === 'playful';

          return (
            <div
              key={milestone.id}
              id={milestone.id}
              className={`chrono-milestone-scene mood-${milestone.mood}`}
            >
              {/* Subtle Atmospheric Light Mood for this specific moment */}
              <div
                className="chrono-mood-glow"
                style={{
                  background: `radial-gradient(circle, ${milestone.glow} 0%, transparent 70%)`,
                }}
                aria-hidden="true"
              />

              {/* Subtle Road Light Effect for Scooty Ride */}
              {isPlayful && (
                <div className="scooty-motion-streak" aria-hidden="true">
                  <div className="light-streak streak-1" />
                  <div className="light-streak streak-2" />
                </div>
              )}

              {/* Content Container */}
              <div className="container">
                <div className="chrono-milestone-grid">
                  {/* Left Column: Big Date Display */}
                  <motion.div
                    className="chrono-date-block"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="chrono-step-pill">
                      <span>MILESTONE 0{index + 1}</span>
                    </div>

                    <h3 className="chrono-huge-date">
                      <span className="date-month-day">{milestone.shortMonth}</span>
                      <span className="date-year">{milestone.year}</span>
                    </h3>

                    <div className="chrono-context-pill">
                      <IconComponent size={14} color={milestone.accent} />
                      <span>{milestone.context}</span>
                    </div>
                  </motion.div>

                  {/* Right Column: Narrative Story Progression */}
                  <motion.div
                    className="chrono-story-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h4 className="chrono-milestone-title">{milestone.title}</h4>

                    <div className="chrono-milestone-lines">
                      {milestone.text.map((line, lIdx) => {
                        const isLastLine = lIdx === milestone.text.length - 1;
                        return (
                          <p
                            key={lIdx}
                            className={`chrono-text-line ${
                              isLastLine && milestone.text.length > 2 ? 'line-highlight' : ''
                            } ${isReconciliation && lIdx >= 3 ? 'line-warm-resolve' : ''}`}
                          >
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Emotional Transition Ending */}
      <div className="chrono-end-transition">
        <div className="container">
          <motion.div
            className="chrono-transition-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="transition-lead serif-italic">{transition.lead}</p>

            <motion.p
              className="transition-pause"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              {transition.pause1}
            </motion.p>

            <motion.h3
              className="transition-climax gold-gradient-text"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.8 }}
            >
              "{transition.climax}"
            </motion.h3>

            <motion.button
              className="btn-cinematic"
              style={{ marginTop: '2.5rem' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              onClick={handleContinueClick}
              data-cursor="CONTINUE"
            >
              <span>{transition.button}</span>
              <ArrowDown size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
