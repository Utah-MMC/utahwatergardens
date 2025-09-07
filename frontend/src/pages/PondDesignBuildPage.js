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
              <img src="/images/pondConstruction1000x800.webp" alt="Swimming pond" />
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
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12S9.79 8 12 8 16 9.79 16 12 14.21 16 12 16Z" fill="#00BFFF"/>
                </svg>
              </div>
              <h3>Water Features</h3>
              <p>Waterfalls, streams, fountains, and bubblers that add movement, sound, and visual interest to your pond.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 6 17.25C7.12 17.25 8.25 16.75 9 16L17 8Z" fill="#32CD32"/>
                </svg>
              </div>
              <h3>Planting Zones</h3>
              <p>Carefully designed areas for marginal, floating, and submerged plants that create natural beauty and filtration.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2ZM12 4C14.76 4 17 6.24 17 9C17 11.76 14.76 14 12 14C9.24 14 7 11.76 7 9C7 6.24 9.24 4 12 4Z" fill="#FFD700"/>
                </svg>
              </div>
              <h3>Lighting Systems</h3>
              <p>Underwater and landscape lighting that showcases your pond day and night, extending enjoyment into evening hours.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
                </svg>
              </div>
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
              <img src="/images/pondConstruction1000x800.webp" alt="Premium pond construction materials" />
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
              <img src="/images/pondConstruction1000x800.webp" alt="Swimming pond" />
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
              <div className="reason-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
                </svg>
              </div>
              <h3>25+ Years Experience</h3>
              <p>Decades of expertise in pond design and construction across Utah.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM16 14C20.4 14 24 17.6 24 22H8C8 17.6 11.6 14 16 14ZM8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4ZM8 14C12.4 14 16 17.6 16 22H0C0 17.6 3.6 14 8 14Z" fill="#2E86AB"/>
                </svg>
              </div>
              <h3>Expert Team</h3>
              <p>Certified professionals with specialized training in aquatic systems.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H20C21.1 8 22 8.9 22 10V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V10C2 8.9 2.9 8 4 8H6V6C6 3.79 7.79 2 10 2H14C16.21 2 18 3.79 18 6V8ZM16 8V6C16 4.9 15.1 4 14 4H10C8.9 4 8 4.9 8 6V8H16ZM4 10V20H20V10H4Z" fill="#28A745"/>
                </svg>
              </div>
              <h3>Warranty Protection</h3>
              <p>Comprehensive warranties on materials, workmanship, and equipment.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#007BFF"/>
                </svg>
              </div>
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
