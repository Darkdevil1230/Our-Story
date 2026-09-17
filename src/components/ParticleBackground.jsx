import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = window.innerWidth < 768 ? 25 : 55;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = -Math.random() * 0.35 - 0.1; // Gentle upward drift
        this.opacity = Math.random() * 0.6 + 0.2;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
        // Warm rose, champagne, and ivory palette
        const colorPicker = Math.random();
        if (colorPicker > 0.6) {
          this.color = '223, 136, 157'; // Muted Rose
        } else if (colorPicker > 0.3) {
          this.color = '216, 170, 114'; // Champagne Gold
        } else {
          this.color = '250, 244, 237'; // Ivory
        }
      }

      update() {
        if (prefersReducedMotion) return;

        this.x += this.speedX;
        this.y += this.speedY;

        // Twinkle pulse
        this.opacity += this.fadeSpeed * this.pulseDirection;
        if (this.opacity > 0.75) {
          this.pulseDirection = -1;
        } else if (this.opacity < 0.15) {
          this.pulseDirection = 1;
        }

        // Wrap around boundaries
        if (this.y < -10) this.y = height + 10;
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.shadowBlur = this.size * 4;
        ctx.shadowColor = `rgba(${this.color}, 0.8)`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
      <div className="ambient-light-bloom bloom-burgundy" aria-hidden="true" />
      <div className="ambient-light-bloom bloom-gold" aria-hidden="true" />
    </>
  );
}
