import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation menu data
  const menuItems = [
    {
      title: 'Plants & Fish',
      path: '/plants-fish',
      items: [
        { name: 'Aquatic Plants', path: '/plants-fish/aquatic-plants' },
        { name: 'Koi & Goldfish', path: '/plants-fish/koi-goldfish' },
        { name: 'Water Lilies', path: '/plants-fish/water-lilies' },
        { name: 'Floating Plants', path: '/plants-fish/floating-plants' },
        { name: 'Marginal Plants', path: '/plants-fish/marginal-plants' }
      ]
    },
    {
      title: 'Pond Services',
      path: '/pond-services',
      items: [
        { name: 'Pond Design & Build', path: '/pond-services/design-build' },
        { name: 'Pond Maintenance', path: '/pond-services/maintenance' },
        { name: 'Water Quality Testing', path: '/pond-services/water-quality' },
        { name: 'Pond Cleaning', path: '/pond-services/cleaning' },
        { name: 'Equipment Repair', path: '/pond-services/repair' },
        { name: 'Seasonal Services', path: '/pond-services/seasonal' }
      ]
    },
    {
      title: 'Pond Supplies',
      path: '/pond-supplies',
      items: [
        { name: 'Filtration Systems', path: '/pond-supplies/filtration' },
        { name: 'Pumps & Aeration', path: '/pond-supplies/pumps-aeration' },
        { name: 'Pond Liners', path: '/pond-supplies/liners' },
        { name: 'Water Treatments', path: '/pond-supplies/water-treatments' },
        { name: 'Pond Lighting', path: '/pond-supplies/lighting' },
        { name: 'Tools & Accessories', path: '/pond-supplies/tools' }
      ]
    },
    {
      title: 'Resources',
      path: '/resources',
      items: [
        { name: 'Care Guides', path: '/resources/care-guides' },
        { name: 'Pond Tips & Tricks', path: '/resources/tips-tricks' },
        { name: 'Seasonal Care', path: '/resources/seasonal-care' },
        { name: 'Troubleshooting', path: '/resources/troubleshooting' },
        { name: 'Video Tutorials', path: '/resources/video-tutorials' },
        { name: 'FAQ', path: '/resources/faq' }
      ]
    },
    {
      title: 'Pond Gallery',
      path: '/pond-gallery',
      items: [
        { name: 'Residential Ponds', path: '/pond-gallery/residential' },
        { name: 'Commercial Projects', path: '/pond-gallery/commercial' },
        { name: 'Koi Ponds', path: '/pond-gallery/koi-ponds' },
        { name: 'Water Features', path: '/pond-gallery/water-features' },
        { name: 'Before & After', path: '/pond-gallery/before-after' }
      ]
    }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo Section */}
          <div className="logo-section">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <div className="logo-image">
                <img src="/images/utahWaterGardensLogoHoriz.webp" alt="Utah Water Gardens Logo" />
              </div>
              <div className="company-info">
                <div className="company-name">Utah Water Gardens</div>
                <div className="company-tagline">Your Complete Pond & Water Feature Solution</div>
              </div>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="header-actions">
            <a href="tel:(801) 590-8516" className="btn btn-primary">
              Call Now
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="nav-open">
            <div className="nav-list">
              {menuItems.map((menu, index) => (
                <div key={index} className="nav-item">
                  <Link 
                    to={menu.path}
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {menu.title}
                  </Link>
                  <div className="dropdown-menu">
                    <ul className="dropdown-list">
                      {menu.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link 
                            to={item.path}
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Menu Actions */}
            <div className="header-actions">
              <a href="tel:(801) 590-8516" className="btn btn-primary" onClick={closeMenu}>
                Call (801) 590-8516
              </a>
              <Link to="/contact" className="btn btn-secondary" onClick={closeMenu}>
                Contact Us
              </Link>
              <Link to="/out-of-area-service" className="btn btn-outline" onClick={closeMenu}>
                Out of Area?
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderMobile;
