import React from 'react';
import { storyData } from '../data/storyData';

export default function Footer() {
  const { footer } = storyData;

  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-quote">"{footer.quote}"</p>
        <p className="footer-dedication">{footer.dedication}</p>
        <div className="footer-infinity" aria-hidden="true">
          {footer.symbol}
        </div>
      </div>
    </footer>
  );
}
