import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (waveRef.current) {
        const rect = waveRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate wave intensity based on mouse position
        const intensity = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxIntensity = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
        const normalizedIntensity = Math.min(intensity / maxIntensity, 1);
        
        // Apply wave animation
        const waveElements = waveRef.current.querySelectorAll('path');
        waveElements.forEach((path, index) => {
          const delay = index * 0.1;
          // Front wave (index 2) gets half the amplitude
          const baseAmplitude = index === 2 ? 5 : 10;
          const amplitude = baseAmplitude + (normalizedIntensity * (index === 2 ? 10 : 20));
          const frequency = 0.02 + (normalizedIntensity * 0.01);
          
          path.style.transform = `translateY(${Math.sin(Date.now() * frequency + delay) * amplitude}px)`;
          path.style.transition = 'transform 0.1s ease-out';
        });
      }
    };

    const handleMouseLeave = () => {
      if (waveRef.current) {
        const waveElements = waveRef.current.querySelectorAll('path');
        waveElements.forEach((path) => {
          path.style.transform = 'translateY(0px)';
          path.style.transition = 'transform 0.5s ease-out';
        });
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    const currentWaveRef = waveRef.current;
    if (currentWaveRef) {
      currentWaveRef.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (currentWaveRef) {
        currentWaveRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <footer className="footer">
      {/* Wavy Divider */}
      <div className="footer-wave" ref={waveRef}>
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path className="wave-layer-1" d="M0,0V100.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,86.43,512.34,107.67,583,126.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,79,1113,39.71,1200,106.47V0Z" opacity=".25" fill="#3b82f6"></path>
          <path className="wave-layer-2" d="M0,0V69.81C13,90.92,27.64,110.86,47.69,126.05,99.41,165.27,165,165,224.58,145.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#1e40af"></path>
          <path className="wave-layer-3" d="M0,0V59.63C149.93,113,314.09,125.32,475.83,96.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,131.22,886,149.24,951.2,144c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#1e40af"></path>
        </svg>
      </div>
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-text">
              <span className="brand-line">EXPERT</span>
              <span className="brand-line">POND</span>
              <span className="brand-line">SOLUTIONS</span>
              <span className="brand-year">SINCE 1995</span>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link to="/pond-services/design-build">Pond Design & Construction</Link></li>
                <li><Link to="/pond-services/maintenance">Pond Maintenance & Care</Link></li>
                <li><Link to="/pond-services/pond-dredging">Lake & Pond Dredging</Link></li>
                <li><Link to="/plants-fish">Plants & Fish Stocking</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Shop Products</h4>
              <ul>
                <li><Link to="/shop">All Products</Link></li>
                <li><Link to="/shop">Aquatic Plants</Link></li>
                <li><Link to="/shop">Fish & Koi</Link></li>
                <li><Link to="/shop">Pond Supplies</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
              <h5>Utah Water Gardens</h5>
              <ul>
                <li><Link to="/pond-gallery">Pond Gallery</Link></li>
                <li><Link to="/resources">Care Guides</Link></li>
                <li><Link to="/resources/tips-tricks">Pond Tips</Link></li>
                <li><Link to="/resources/seasonal-care">Seasonal Care</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2025 All Rights Reserved, Utah Water Gardens® | <Link to="/privacy">Privacy Policy</Link></p>
          </div>
          <div className="footer-bottom-right">
            <div className="social-links">
              <a href="https://facebook.com/utahwatergardens" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com/utahwatergardens" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/utahwatergardens" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
