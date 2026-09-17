import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowDown, Sparkles } from 'lucide-react';
import { storyData } from '../data/storyData';

export default function PhotoUniverse({ onContinue }) {
  const data = storyData.theWayISeeYou;
  const { leadIn, photos, reflection, transition } = data;

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleOpenLightbox = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  }, [selectedIndex, photos.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  }, [selectedIndex, photos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const handleContinueClick = () => {
    if (onContinue) {
      onContinue('#imperfections');
    } else {
      const el = document.getElementById('imperfections');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activePhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <section id="universe" className="scene-way-i-see-you">
      {/* 01. Lead-In Cinematic Transition */}
      <div className="container way-leadin-container">
        <motion.div
          className="way-leadin-flow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="leadin-line serif-italic">{leadIn[0]}</p>
          <p className="leadin-line">{leadIn[1]}</p>
          <p className="leadin-line leadin-highlight">{leadIn[2]}</p>
        </motion.div>

        {/* Section Header */}
        <div className="section-header" style={{ marginTop: '5rem', marginBottom: '3.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-badge">
              {data.label} — {data.number}
            </span>
          </motion.div>

          <motion.h2
            className="section-title rose-gradient-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            {data.title}
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {data.subtitle}
          </motion.p>
        </div>
      </div>

      {/* 02. Editorial Masonry-Style Cinematic Gallery */}
      <div className="container">
        <div className="editorial-gallery">
          {photos.map((photo, index) => {
            const hasFailed = failedImages[photo.id];
            const isFeatured = photo.span === 'featured';

            return (
              <motion.div
                key={photo.id}
                className={`gallery-item ${isFeatured ? 'item-featured' : ''}`}
                style={{ '--item-rot': photo.rotation || '0deg' }}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.9, delay: index * 0.12 }}
                onClick={() => handleOpenLightbox(index)}
                data-cursor="VIEW"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenLightbox(index);
                  }
                }}
                aria-label={`View photograph: ${photo.title}`}
              >
                <div className="gallery-photo-frame">
                  {!hasFailed ? (
                    <img
                      src={photo.src}
                      alt={photo.alt || photo.title}
                      loading="lazy"
                      onError={() => handleImageError(photo.id)}
                      className="natural-photo-img"
                    />
                  ) : (
                    <div className="photo-fallback-card">
                      <Sparkles size={28} color="var(--rose-muted)" />
                      <p className="fallback-title">{photo.title}</p>
                    </div>
                  )}

                  {/* Hover Caption Overlay */}
                  <div className="photo-hover-meta">
                    <h4 className="photo-hover-title">{photo.title}</h4>
                    <p className="photo-hover-caption">{photo.caption}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 03. The Emotional Writing (After the Photographs) */}
      <div className="container">
        <motion.div
          className="way-reflection-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="reflection-text serif-italic">{reflection.lead}</p>
          <p className="reflection-text" style={{ color: 'var(--text-mist)' }}>
            {reflection.pause1}
          </p>

          <div style={{ margin: '1.5rem 0' }}>
            <p className="reflection-text">{reflection.pause2}</p>
            <p className="reflection-text serif-italic" style={{ color: 'var(--rose-soft)' }}>
              {reflection.pause3}
            </p>
          </div>

          <h3 className="reflection-climax gold-gradient-text">
            "{reflection.climax}"
          </h3>

          {/* Final Transition to Next Chapter */}
          <div className="way-transition-exit">
            <p className="exit-text">{transition.text}</p>
            <motion.button
              className="btn-cinematic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContinueClick}
              data-cursor="CONTINUE"
            >
              <span>{transition.button}</span>
              <ArrowDown size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* 04. Full-Screen Cinematic Lightbox */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
          >
            {/* Close Button */}
            <button
              className="lightbox-close-trigger"
              onClick={handleCloseLightbox}
              aria-label="Close photograph viewer"
              data-cursor="CLOSE"
            >
              <X size={22} />
            </button>

            {/* Previous Button */}
            <button
              className="lightbox-nav-btn nav-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous photograph"
              data-cursor="PREV"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              className="lightbox-nav-btn nav-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next photograph"
              data-cursor="NEXT"
            >
              <ChevronRight size={28} />
            </button>

            {/* Center Content Box */}
            <motion.div
              className="lightbox-viewer-card"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Natural Proportion Image Frame */}
              <div className="lightbox-image-stage">
                {!failedImages[activePhoto.id] ? (
                  <img
                    src={activePhoto.src}
                    alt={activePhoto.alt || activePhoto.title}
                    className="lightbox-main-img"
                  />
                ) : (
                  <div className="lightbox-fallback-display">
                    <Sparkles size={36} color="var(--rose-muted)" />
                    <p>{activePhoto.title}</p>
                  </div>
                )}
              </div>

              {/* Title & Caption Details */}
              <div className="lightbox-details-panel">
                <div className="lightbox-counter-tag">
                  0{selectedIndex + 1} / 0{photos.length}
                </div>
                <h3 className="lightbox-main-title">{activePhoto.title}</h3>
                <p className="lightbox-main-caption">"{activePhoto.caption}"</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
