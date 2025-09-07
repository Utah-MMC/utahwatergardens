import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './PondDesignBuildPage.css';

const PondDesignBuildPage = () => {
  return (
    <div className="pond-design-build-page">
      {/* Hero Section */}
      <PageHero 
        title="Pond Design & Build Services"
        subtitle="Transform your backyard into a stunning water garden with our expert design and construction services"
        backgroundImage="/images/IMG_2770.jpg"
        backgroundImageAlt="Beautiful custom water garden design with waterfall and lush plants"
      />

      {/* Design Process */}
      <section className="design-process first-section-gradient">
        <div className="container">
          <h2>Our Design & Build Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>We visit your property to assess the site, discuss your vision, and understand your budget and timeline.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Custom Design</h3>
              <p>Our designers create detailed plans including 3D renderings, material selections, and construction specifications.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Project Planning</h3>
              <p>We develop a comprehensive project timeline, coordinate permits, and schedule materials and equipment.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Construction</h3>
              <p>Our experienced team builds your pond using premium materials and proven construction techniques.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Final Inspection</h3>
              <p>We thoroughly test all systems, plant aquatic vegetation, and provide detailed care instructions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pond Types */}
      <section className="pond-types">
        <div className="container">
          <h2>Types of Ponds We Build</h2>
          <div className="types-grid">
            <div className="type-card">
              <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Koi pond" />
              <h3>Koi Ponds</h3>
              <p>Specialized ponds designed specifically for koi fish, featuring proper depth, filtration, and water quality management.</p>
              <ul>
                <li>Minimum 3-4 feet depth</li>
                <li>Advanced filtration systems</li>
                <li>Proper water circulation</li>
                <li>Fish-safe materials</li>
              </ul>
            </div>
            
            <div className="type-card">
              <img src="/images/IMG_2779.jpg" alt="Natural water garden with clear stream and rocks" />
              <h3>Water Gardens</h3>
              <p>Beautiful aquatic plant displays that create a natural, low-maintenance ecosystem in your landscape.</p>
              <ul>
                <li>Aquatic plant zones</li>
                <li>Natural filtration</li>
                <li>Wildlife habitat</li>
                <li>Seasonal interest</li>
              </ul>
            </div>
            
            <div className="type-card">
              <img src="/images/pondConstruction1000x800-topaz-enhance-3.9x.jpeg" alt="Swimming pond" />
              <h3>Swimming Ponds</h3>
              <p>Natural swimming areas that combine recreation with ecological benefits, using plants for water purification.</p>
              <ul>
                <li>Swimming zones</li>
                <li>Plant filtration</li>
                <li>Natural materials</li>
                <li>Chemical-free water</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Features */}
      <section className="design-features">
        <div className="container">
          <h2>Design Features & Options</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🌊</div>
              <h3>Water Features</h3>
              <p>Waterfalls, streams, fountains, and bubblers that add movement, sound, and visual interest to your pond.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌿</div>
              <h3>Planting Zones</h3>
              <p>Carefully designed areas for marginal, floating, and submerged plants that create natural beauty and filtration.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <h3>Lighting Systems</h3>
              <p>Underwater and landscape lighting that showcases your pond day and night, extending enjoyment into evening hours.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <h3>Smart Technology</h3>
              <p>Automated systems for water quality monitoring, remote control of features, and energy-efficient operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Construction */}
      <section className="materials-construction">
        <div className="container">
          <h2>Premium Materials & Construction</h2>
          <div className="materials-content">
            <div className="materials-text">
              <h3>Liner Systems</h3>
              <ul>
                <li>EPDM rubber liners (40-60 mil)</li>
                <li>PVC liners for smaller projects</li>
                <li>Underlayment for protection</li>
                <li>Proper seam sealing</li>
              </ul>
              
              <h3>Filtration & Circulation</h3>
              <ul>
                <li>Biological and mechanical filters</li>
                <li>UV sterilizers for water clarity</li>
                <li>Energy-efficient pumps</li>
                <li>Proper pipe sizing and layout</li>
              </ul>
              
              <h3>Rock & Hardscaping</h3>
              <ul>
                <li>Natural stone selections</li>
                <li>Proper placement and anchoring</li>
                <li>Safe edges and ledges</li>
                <li>Natural-looking formations</li>
              </ul>
            </div>
            <div className="materials-image">
              <img src="/images/pondConstruction1000x800-topaz-enhance-3.9x.jpeg" alt="Premium pond construction materials" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="project-gallery">
        <div className="container">
          <h2>Recent Project Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Modern koi pond design" />
              <div className="gallery-overlay">
                <h3>Modern Koi Pond</h3>
                <p>Contemporary design with clean lines and premium materials</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/plants500x500.webp" alt="Natural water garden" />
              <div className="gallery-overlay">
                <h3>Natural Water Garden</h3>
                <p>Ecosystem pond with native plants and wildlife habitat</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/pondConstruction1000x800-topaz-enhance-3.9x.jpeg" alt="Swimming pond" />
              <div className="gallery-overlay">
                <h3>Swimming Pond</h3>
                <p>Natural swimming area with plant filtration</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/IMG_8910-rotated.webp" alt="Waterfall feature" />
              <div className="gallery-overlay">
                <h3>Waterfall Feature</h3>
                <p>Dramatic waterfall with natural stone construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us gradient-wipe-up">
        <div className="container">
          <h2>Why Choose Utah Water Gardens</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">🏆</div>
              <h3>25+ Years Experience</h3>
              <p>Decades of expertise in pond design and construction across Utah.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">👥</div>
              <h3>Expert Team</h3>
              <p>Certified professionals with specialized training in aquatic systems.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">🔒</div>
              <h3>Warranty Protection</h3>
              <p>Comprehensive warranties on materials, workmanship, and equipment.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">📱</div>
              <h3>Ongoing Support</h3>
              <p>Lifetime support and maintenance services for your water garden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="cta-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h2>Ready to Start Your Pond Project?</h2>
          <p>Schedule a free consultation to discuss your vision and get a detailed quote for your custom water garden.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Schedule Consultation</Link>
            <Link to="/pond-gallery" className="secondary-button">View Our Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PondDesignBuildPage;
