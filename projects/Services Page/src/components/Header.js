import React from 'react';

function Header() {
  return (
    <header className="site-header sticky">
      <div className="container header-flex">
        <div className="logo">
          <img src="/images/utahWaterGardensLogoHoriz.webp" alt="Utah Water Gardens Logo" className="logo-img" />
          <span className="logo-text">UTAH <span className="logo-accent">WATER GARDENS</span></span>
        </div>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#contact" className="cta-header">Get Consultation</a>
        </div>
      </div>
    </header>
  );
}

export default Header; 