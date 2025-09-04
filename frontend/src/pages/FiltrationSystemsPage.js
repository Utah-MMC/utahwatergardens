import React from 'react';
import { Link } from 'react-router-dom';
import './FiltrationSystemsPage.css';

const FiltrationSystemsPage = () => {
  return (
    <div className="filtration-systems-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Pond Filtration Systems</h1>
          <p>Keep your pond water crystal clear with our premium filtration solutions</p>
          <div className="hero-buttons">
            <Link to="/contact" className="cta-button">Get Expert Advice</Link>
            <Link to="/pond-supplies" className="secondary-button">View All Supplies</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/Pond-Supplies.webp" alt="Professional pond filtration system" />
        </div>
      </section>

      {/* Filtration Types */}
      <section className="filtration-types">
        <div className="container">
          <h2>Types of Filtration Systems</h2>
          <div className="types-grid">
            <div className="type-card">
              <img src="/images/Pond-Supplies.webp" alt="Mechanical filter" />
              <h3>Mechanical Filtration</h3>
              <p>Removes physical debris like leaves, fish waste, and uneaten food from your pond water.</p>
              <ul>
                <li>Filter pads and screens</li>
                <li>Skimmer systems</li>
                <li>Pre-filters</li>
                <li>Basket filters</li>
              </ul>
            </div>
            
            <div className="type-card">
              <img src="/images/Pond-Supplies.webp" alt="Biological filter" />
              <h3>Biological Filtration</h3>
              <p>Uses beneficial bacteria to break down harmful ammonia and nitrite into safer nitrate.</p>
              <ul>
                <li>Bio-balls and media</li>
                <li>Bacterial colonies</li>
                <li>Nitrogen cycle support</li>
                <li>Natural water purification</li>
              </ul>
            </div>
            
            <div className="type-card">
              <img src="/images/Pond-Supplies.webp" alt="UV sterilizer" />
              <h3>UV Sterilization</h3>
              <p>Eliminates algae and harmful microorganisms while maintaining water clarity.</p>
              <ul>
                <li>Algae control</li>
                <li>Pathogen elimination</li>
                <li>Crystal clear water</li>
                <li>Low maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="system-components">
        <div className="container">
          <h2>Filtration System Components</h2>
          <div className="components-grid">
            <div className="component-item">
              <div className="component-icon">🔧</div>
              <h3>Pumps</h3>
              <p>High-quality, energy-efficient pumps that circulate water through your filtration system.</p>
            </div>
            <div className="component-item">
              <div className="component-icon">🧽</div>
              <h3>Filter Media</h3>
              <p>Specialized materials that trap debris and provide surface area for beneficial bacteria.</p>
            </div>
            <div className="component-item">
              <div className="component-icon">💧</div>
              <h3>Skimmers</h3>
              <p>Surface skimmers that remove floating debris before it sinks to the bottom.</p>
            </div>
            <div className="component-item">
              <div className="component-icon">🌊</div>
              <h3>Waterfalls & Streams</h3>
              <p>Natural aeration and circulation features that enhance filtration efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="product-showcase">
        <div className="container">
          <h2>Featured Filtration Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <img src="/images/Pond-Supplies.webp" alt="Premium filter system" />
              <h3>Premium BioFalls Filter</h3>
              <p>Complete filtration system with mechanical and biological filtration, perfect for medium to large ponds.</p>
              <div className="product-specs">
                <span>Flow Rate: 2000-4000 GPH</span>
                <span>Pond Size: Up to 4000 gallons</span>
              </div>
              <span className="price">$299.99</span>
            </div>
            
            <div className="product-card">
              <img src="/images/Pond-Supplies.webp" alt="UV sterilizer" />
              <h3>UV-C Sterilizer Pro</h3>
              <p>High-output UV sterilizer that eliminates algae and harmful microorganisms effectively.</p>
              <div className="product-specs">
                <span>Flow Rate: 1000-3000 GPH</span>
                <span>Pond Size: Up to 3000 gallons</span>
              </div>
              <span className="price">$189.99</span>
            </div>
            
            <div className="product-card">
              <img src="/images/Pond-Supplies.webp" alt="Skimmer system" />
              <h3>Floating Skimmer System</h3>
              <p>Automatic surface skimmer that removes floating debris and maintains water clarity.</p>
              <div className="product-specs">
                <span>Flow Rate: 500-1500 GPH</span>
                <span>Pond Size: Up to 2000 gallons</span>
              </div>
              <span className="price">$149.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="installation-guide">
        <div className="container">
          <h2>Installation & Setup Guide</h2>
          <div className="guide-content">
            <div className="guide-text">
              <h3>System Sizing</h3>
              <ul>
                <li>Calculate pond volume (length × width × depth × 7.48)</li>
                <li>Choose filter rated for 1.5-2x your pond volume</li>
                <li>Ensure pump flow rate matches filter capacity</li>
                <li>Consider fish load and plant density</li>
              </ul>
              
              <h3>Installation Steps</h3>
              <ul>
                <li>Position filter above water level for gravity return</li>
                <li>Install pump at pond bottom for maximum efficiency</li>
                <li>Connect all hoses and fittings securely</li>
                <li>Prime system and check for leaks</li>
              </ul>
              
              <h3>Maintenance Schedule</h3>
              <ul>
                <li>Clean mechanical filters weekly</li>
                <li>Check pump monthly</li>
                <li>Replace UV bulbs annually</li>
                <li>Test water quality regularly</li>
              </ul>
            </div>
            <div className="guide-image">
              <img src="/images/pondConstruction1000x800.webp" alt="Filtration system installation" />
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="troubleshooting">
        <div className="container">
          <h2>Common Filtration Issues & Solutions</h2>
          <div className="issues-grid">
            <div className="issue-card">
              <h3>Cloudy Water</h3>
              <p><strong>Cause:</strong> Insufficient mechanical filtration or new pond syndrome</p>
              <p><strong>Solution:</strong> Clean filters, add filter floss, or increase filtration capacity</p>
            </div>
            <div className="issue-card">
              <h3>High Ammonia</h3>
              <p><strong>Cause:</strong> Inadequate biological filtration or overfeeding</p>
              <p><strong>Solution:</strong> Add bio-media, reduce feeding, or increase filter size</p>
            </div>
            <div className="issue-card">
              <h3>Low Flow Rate</h3>
              <p><strong>Cause:</strong> Clogged filters, pump issues, or undersized tubing</p>
              <p><strong>Solution:</strong> Clean filters, check pump, or upgrade tubing size</p>
            </div>
            <div className="issue-card">
              <h3>Algae Growth</h3>
              <p><strong>Cause:</strong> Insufficient UV sterilization or nutrient buildup</p>
              <p><strong>Solution:</strong> Check UV bulb, clean filters, or add plants</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Need Help Choosing the Right Filtration System?</h2>
          <p>Our filtration experts can assess your pond and recommend the perfect system for your needs.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Get Expert Consultation</Link>
            <Link to="/pond-supplies" className="secondary-button">Browse All Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiltrationSystemsPage;
