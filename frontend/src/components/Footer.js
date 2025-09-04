import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Utah Water Gardens</h3>
            <p>Your complete pond and water feature solution in Utah. From construction to maintenance, we handle everything.</p>
            <div className="social-links">
              <a href="https://facebook.com/utahwatergardens" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Pond Construction</Link></li>
              <li><Link to="/services">Pond Maintenance</Link></li>
              <li><Link to="/services">Pond Cleaning</Link></li>
              <li><Link to="/services">Pond Dredging</Link></li>
              <li><Link to="/services">Pond Repair</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/shop">Aquatic Plants</Link></li>
              <li><Link to="/shop">Fish & Koi</Link></li>
              <li><Link to="/shop">Pond Supplies</Link></li>
              <li><Link to="/shop">Pumps & Filters</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> 5911 S 1300 E, Salt Lake City, UT 84121</p>
              <p><i className="fas fa-phone"></i> (801) 590-8516</p>
              <p><i className="fas fa-envelope"></i> contact@utahwatergardens.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Utah Water Gardens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
