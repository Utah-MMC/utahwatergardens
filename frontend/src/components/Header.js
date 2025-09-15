import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownHover = (dropdownKey) => {
    setActiveDropdown(dropdownKey);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Dropdown menu data
  const dropdownMenus = {
    'plants-fish': {
      title: 'Plants & Fish',
      mainPath: '/plants-fish',
      items: [
        { name: 'Aquatic Plants', path: '/plants-fish/aquatic-plants' },
        { name: 'Koi & Goldfish', path: '/plants-fish/koi-goldfish' },
        { name: 'Water Lilies', path: '/plants-fish/water-lilies' },
        { name: 'Floating Plants', path: '/plants-fish/floating-plants' },
        { name: 'Marginal Plants', path: '/plants-fish/marginal-plants' }
      ]
    },
    'pond-services': {
      title: 'Pond Services',
      mainPath: '/pond-services',
      items: [
        { name: 'Pond Design & Build', path: '/pond-services/design-build' },
        { name: 'Pond Maintenance', path: '/pond-services/maintenance' },
        { name: 'Water Quality Testing', path: '/pond-services/water-quality' },
        { name: 'Pond Cleaning', path: '/pond-services/cleaning' },
        { name: 'Equipment Repair', path: '/pond-services/repair' },
        { name: 'Seasonal Services', path: '/pond-services/seasonal' },
        { name: 'Harvesting', path: '/pond-services/harvesting' },
        { name: 'Lake Dredging', path: '/pond-services/lake-dredging' },
        { name: 'Pond Dredging', path: '/pond-services/pond-dredging' },
        { name: 'Truxor T50 Service', path: '/pond-services/truxor-t50' }
      ]
    },
    'pond-supplies': {
      title: 'Pond Supplies',
      mainPath: '/pond-supplies',
      items: [
        { name: 'Filtration Systems', path: '/pond-supplies/filtration' },
        { name: 'Pumps & Aeration', path: '/pond-supplies/pumps-aeration' },
        { name: 'Pond Liners', path: '/pond-supplies/liners' },
        { name: 'Water Treatments', path: '/pond-supplies/water-treatments' },
        { name: 'Pond Lighting', path: '/pond-supplies/lighting' },
        { name: 'Tools & Accessories', path: '/pond-supplies/tools' }
      ]
    },
    'resources': {
      title: 'Resources',
      mainPath: '/resources',
      items: [
        { name: 'Care Guides', path: '/resources/care-guides' },
        { name: 'Pond Tips & Tricks', path: '/resources/tips-tricks' },
        { name: 'Seasonal Care', path: '/resources/seasonal-care' },
        { name: 'Troubleshooting', path: '/resources/troubleshooting' },
        { name: 'Video Tutorials', path: '/resources/video-tutorials' },
        { name: 'FAQ', path: '/resources/faq' },
        { name: 'Blog', path: '/blog' }
      ]
    },
    'pond-gallery': {
      title: 'Pond Gallery',
      mainPath: '/pond-gallery',
      items: [
        { name: 'Residential Ponds', path: '/pond-gallery/residential' },
        { name: 'Commercial Projects', path: '/pond-gallery/commercial' },
        { name: 'Koi Ponds', path: '/pond-gallery/koi-ponds' },
        { name: 'Water Features', path: '/pond-gallery/water-features' },
        { name: 'Before & After', path: '/pond-gallery/before-after' },
        { name: 'Customer Projects', path: '/pond-gallery/customer-projects' }
      ]
    }
  };

  return (
    <header className="header">
      {/* Top Section - Contact Info */}
      <div className="header-top">
        <div className="header-container">
          <div className="contact-info">
            <a href="tel:(801) 590-8516" className="contact-link">
              (801) 590-8516
            </a>
            <span className="contact-separator">•</span>
            <a href="mailto:contact@utahwatergardens.com" className="contact-link">
              contact@utahwatergardens.com
            </a>
            <span className="contact-separator">•</span>
            <span className="contact-text">Mon-Sat: 10:00AM-6PM</span>
          </div>
        </div>
      </div>

      {/* Main Header Section - Logo and Navigation */}
      <div className="header-main">
        <div className="header-container">
          <div className="header-content">
            {/* Logo Section */}
            <div className="logo-section">
              <Link to="/" className="logo-link">
                <div className="logo-image">
                  <img src="/images/utahWaterGardensLogoHoriz.webp" alt="Utah Water Gardens Logo" />
                </div>
                <div className="company-info">
                  <p className="company-tagline">Your Complete Pond & Water Feature Solution</p>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              {isMenuOpen && (
                <div className="mobile-menu-header">
                  <h2 className="mobile-menu-title">Menu</h2>
                  <button 
                    className="mobile-menu-close" 
                    onClick={closeMenu}
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>
              )}
              
              <ul className="nav-list">
                {Object.entries(dropdownMenus).map(([key, menu]) => (
                  <li 
                    key={key}
                    className="nav-item"
                    onMouseEnter={() => handleDropdownHover(key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="nav-link-container">
                      <Link 
                        to={menu.mainPath}
                        className="nav-link"
                        onClick={closeMenu}
                      >
                        {menu.title}
                      </Link>
                    </div>
                    
                    {/* Dropdown Menu */}
                    <div className={`dropdown-menu ${activeDropdown === key ? 'dropdown-active' : ''}`}>
                      <div className="dropdown-content">
                        <div className="dropdown-header">
                          <h3>{menu.title}</h3>
                        </div>
                        <ul className="dropdown-list">
                          {menu.items.map((item, index) => (
                            <li key={index}>
                              <Link 
                                to={item.path} 
                                onClick={closeMenu}
                                className="dropdown-link"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Menu Action Buttons */}
              {isMenuOpen && (
                <div className="header-actions mobile-actions">
                  <a href="tel:(801) 590-8516" className="btn btn-primary btn-compact" onClick={closeMenu}>
                    Call Now
                  </a>
                  <Link to="/contact" className="btn btn-secondary btn-compact" onClick={closeMenu}>
                    Contact Us
                  </Link>
                  <Link to="/out-of-area-service" className="btn btn-outline btn-compact" onClick={closeMenu}>
                    Out of Area?
                  </Link>
                </div>
              )}
            </nav>

            {/* Action Buttons */}
            <div className="header-actions">
              <a href="tel:(801) 590-8516" className="btn btn-primary btn-compact">
                Call Now
              </a>
              <Link to="/contact" className="btn btn-secondary btn-compact desktop-hidden">
                Contact Us
              </Link>
              <Link to="/out-of-area-service" className="btn btn-outline btn-compact desktop-hidden">
                Out of Area?
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;