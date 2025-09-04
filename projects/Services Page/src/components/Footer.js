import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container footer-flex">
        <div className="footer-left">
          <p>&copy; 2024 Utah Water Gardens. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <a href="#services">Services</a> | 
          <a href="#results">Results</a> | 
          <a href="#process">Process</a> | 
          <a href="#contact">Contact</a> | 
          <a href="/gallery">Gallery</a>
        </div>
        <div className="footer-right">
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Professional pond services in Utah
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 