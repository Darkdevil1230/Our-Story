import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { storyData } from '../data/storyData';

export default function Navigation({ onNavigate }) {
  const [activeChapter, setActiveChapter] = useState(storyData.chapters[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      
      // Check each section position
      for (let i = storyData.chapters.length - 1; i >= 0; i--) {
        const chapter = storyData.chapters[i];
        const section = document.getElementById(chapter.id);
        if (section && section.offsetTop <= scrollY) {
          setActiveChapter(chapter);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectChapter = (chapterId) => {
    setIsMenuOpen(false);
    onNavigate(`#${chapterId}`);
  };

  return (
    <>
      <header className="nav-hud">
        {/* Active Chapter Indicator */}
        <div className="chapter-indicator">
          <span className="chapter-number">{activeChapter.number}</span>
          <span className="chapter-divider">/</span>
          <span className="chapter-total">09</span>
          <span className="chapter-divider">—</span>
          <span className="chapter-title-pill">{activeChapter.label}</span>
        </div>

        {/* Minimal Menu Trigger */}
        <button
          className="nav-menu-btn"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open chapter navigation menu"
          data-cursor="MENU"
        >
          <Menu size={18} />
        </button>
      </header>

      {/* Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <button
              className="modal-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{ position: 'fixed', top: '2rem', right: '2rem' }}
            >
              <X size={20} />
            </button>

            <motion.ul
              className="nav-drawer-list"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {storyData.chapters.map((ch) => {
                const isActive = activeChapter.id === ch.id;
                return (
                  <li key={ch.id}>
                    <button
                      className={`nav-drawer-item ${isActive ? 'active' : ''}`}
                      onClick={() => handleSelectChapter(ch.id)}
                      style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}
                    >
                      <span className="item-label">{ch.label}</span>
                      <span className="item-num">{ch.number}</span>
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
