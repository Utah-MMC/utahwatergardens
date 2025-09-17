import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const waveRef = useRef(null);
  
  // Debug log to ensure Footer is rendering
  console.log('Footer component is rendering');

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
    <footer className="footer" style={{ backgroundColor: '#1e40af', color: 'white' }}>
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
            <div className="brand-description">
              <p>Your Complete Pond & Water Feature Solution</p>
              <p>Professional pond services, supplies, and expert guidance for over 25 years.</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link to="/pond-services/design-build" className="footer-link">Pond Design & Construction</Link></li>
                <li><Link to="/pond-services/maintenance" className="footer-link">Pond Maintenance & Care</Link></li>
                <li><Link to="/pond-services/water-quality" className="footer-link">Water Quality Testing</Link></li>
                <li><Link to="/pond-services/cleaning" className="footer-link">Pond Cleaning</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Plants & Fish</h4>
              <ul>
                <li><Link to="/plants-fish/aquatic-plants" className="footer-link">Aquatic Plants</Link></li>
                <li><Link to="/plants-fish/koi-goldfish" className="footer-link">Koi & Goldfish</Link></li>
                <li><Link to="/plants-fish/water-lilies" className="footer-link">Water Lilies</Link></li>
                <li><Link to="/plants-fish/floating-plants" className="footer-link">Floating Plants</Link></li>
                <li><Link to="/plants-fish/marginal-plants" className="footer-link">Marginal Plants</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Pond Supplies</h4>
              <ul>
                <li><Link to="/pond-supplies/filtration" className="footer-link">Filtration Systems</Link></li>
                <li><Link to="/pond-supplies/pumps-aeration" className="footer-link">Pumps & Aeration</Link></li>
                <li><Link to="/pond-supplies/liners" className="footer-link">Pond Liners</Link></li>
                <li><Link to="/pond-supplies/water-treatments" className="footer-link">Water Treatments</Link></li>
                <li><Link to="/pond-supplies/lighting" className="footer-link">Pond Lighting</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/resources/care-guides" className="footer-link">Care Guides</Link></li>
                <li><Link to="/resources/tips-tricks" className="footer-link">Pond Tips & Tricks</Link></li>
                <li><Link to="/resources/seasonal-care" className="footer-link">Seasonal Care</Link></li>
                <li><Link to="/resources/troubleshooting" className="footer-link">Troubleshooting</Link></li>
                <li><Link to="/blog" className="footer-link">Blog</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Gallery</h4>
              <ul>
                <li><Link to="/pond-gallery/residential" className="footer-link">Residential Ponds</Link></li>
                <li><Link to="/pond-gallery/commercial" className="footer-link">Commercial Projects</Link></li>
                <li><Link to="/pond-gallery/koi-ponds" className="footer-link">Koi Ponds</Link></li>
                <li><Link to="/pond-gallery/before-after" className="footer-link">Before & After</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Contact Action Bar */}
        <div className="footer-contact-bar">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-text">
              <div className="contact-label">Call Now</div>
              <a href="tel:(801) 590-8516" className="contact-value">(801) 590-8516</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-text">
              <div className="contact-label">Email Us</div>
              <a href="mailto:contact@utahwatergardens.com" className="contact-value">contact@utahwatergardens.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="contact-text">
              <div className="contact-label">Hours</div>
              <div className="contact-value">Mon-Sat: 10:00AM-6PM</div>
            </div>
          </div>
          
          <div className="contact-actions">
            <Link to="/contact" className="btn btn-primary btn-footer">
              Get Free Estimate
            </Link>
            <Link to="/out-of-area-service" className="btn btn-outline btn-footer">
              Out of Area?
            </Link>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2025 All Rights Reserved, Utah Water Gardens® | <Link to="/privacy-and-legal-info" className="footer-bottom-link">Privacy Policy</Link></p>
          </div>
          <div className="footer-bottom-right">
            <div className="social-links">
              <a href="https://facebook.com/utahwatergardens" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com/utahwatergardens" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/utahwatergardens" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
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
