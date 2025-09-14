import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './FiltrationSystemsPage.css';

const FiltrationSystemsPage = () => {
  const stats = [
    { number: '50+', label: 'Filter Systems', icon: 'Systems' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '100%', label: 'Quality Guaranteed', icon: 'Quality' },
    { number: '24/7', label: 'Expert Support', icon: 'Support' }
  ];

  return (
    <>
      <SEO 
        title="Pond Filtration Systems - Premium Water Filtration | Utah Water Gardens"
        description="Premium pond filtration systems in Utah. Mechanical, biological, and UV filtration. 50+ systems available, 15+ years experience. Serving Salt Lake County, Davis County, and surrounding areas."
        keywords="pond filtration, pond filters, biological filtration, mechanical filtration, UV sterilizer, pond water clarity, utah pond filtration, salt lake county pond filters, davis county pond systems, pond water quality"
        canonical="https://utahwatergardens.com/pond-supplies/filtration"
      />
      <div className="filtration-systems-page">
        <PageHero 
          title="Pond Filtration Systems"
          subtitle="Keep your pond water crystal clear with our premium filtration solutions"
          backgroundImage="/images/cropped-20140919_105345-topaz-enhance-3.2x.jpeg"
          backgroundImageAlt="Professional pond filtration system"
          stats={stats}
        />

      {/* Filtration Types */}
      <section className="filtration-types first-section-gradient">
        <div className="container">
          <h2>Types of Filtration Systems</h2>
          <div className="types-grid">
            <div className="type-card">
              <img src="/images/915f46a740c26fb8301437faf19c7711-enhance-4x.jpeg" alt="Mechanical filter" />
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
              <img src="/images/95cdafaba2e877860b42f017ad84afab-enhance-4x.jpeg" alt="Biological filter" />
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
              <img src="/images/e040a38e5f0bcd988e8abc11eaddca1d-enhance-4x.jpeg" alt="UV sterilizer" />
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
              <div className="component-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
                </svg>
              </div>
              <h3>Pumps</h3>
              <p>High-quality, energy-efficient pumps that circulate water through your filtration system.</p>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#28A745"/>
                </svg>
              </div>
              <h3>Filter Media</h3>
              <p>Specialized materials that trap debris and provide surface area for beneficial bacteria.</p>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#00BFFF"/>
                </svg>
              </div>
              <h3>Skimmers</h3>
              <p>Surface skimmers that remove floating debris before it sinks to the bottom.</p>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#00BFFF"/>
                </svg>
              </div>
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
              <img src="/images/df28e743d124a752ed0a69ca677ee6d9-enhance-4x.jpeg" alt="Premium filter system" />
              <h3>Premium BioFalls Filter</h3>
              <p>Complete filtration system with mechanical and biological filtration, perfect for medium to large ponds.</p>
              <div className="product-specs">
                <span>Flow Rate: 2000-4000 GPH</span>
                <span>Pond Size: Up to 4000 gallons</span>
              </div>
            </div>
            
            <div className="product-card">
              <img src="/images/e040a38e5f0bcd988e8abc11eaddca1d-enhance-4x.jpeg" alt="UV sterilizer" />
              <h3>UV-C Sterilizer Pro</h3>
              <p>High-output UV sterilizer that eliminates algae and harmful microorganisms effectively.</p>
              <div className="product-specs">
                <span>Flow Rate: 1000-3000 GPH</span>
                <span>Pond Size: Up to 3000 gallons</span>
              </div>
            </div>
            
            <div className="product-card">
              <img src="/images/e6c96ccb6e5cd3efd8a92681c4e717be-enhance-4x.jpeg" alt="Skimmer system" />
              <h3>Floating Skimmer System</h3>
              <p>Automatic surface skimmer that removes floating debris and maintains water clarity.</p>
              <div className="product-specs">
                <span>Flow Rate: 500-1500 GPH</span>
                <span>Pond Size: Up to 2000 gallons</span>
              </div>
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
      <section className="troubleshooting gradient-wipe-up">
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

      {/* Service Areas */}
      <section className="service-areas-section">
        <div className="container">
          <h2>Areas We Serve</h2>
          <p className="service-areas-intro">
            We proudly serve the greater Salt Lake City area and surrounding communities with our premium 
            pond filtration systems. Our experienced team provides expert installation and support throughout Utah.
          </p>
          
          <div className="service-areas-grid">
            <div className="service-area-group">
              <h3>Salt Lake County</h3>
              <div className="cities-list">
                <Link to="/pond-supplies/filtration/salt-lake-city" className="city-link">Salt Lake City</Link>
                <Link to="/pond-supplies/filtration/west-jordan" className="city-link">West Jordan</Link>
                <Link to="/pond-supplies/filtration/murray" className="city-link">Murray</Link>
                <Link to="/pond-supplies/filtration/sandy" className="city-link">Sandy</Link>
                <Link to="/pond-supplies/filtration/west-valley-city" className="city-link">West Valley City</Link>
                <Link to="/pond-supplies/filtration/draper" className="city-link">Draper</Link>
                <Link to="/pond-supplies/filtration/cottonwood-heights" className="city-link">Cottonwood Heights</Link>
                <Link to="/pond-supplies/filtration/holladay" className="city-link">Holladay</Link>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Davis County</h3>
              <div className="cities-list">
                <Link to="/pond-supplies/filtration/layton" className="city-link">Layton</Link>
                <Link to="/pond-supplies/filtration/bountiful" className="city-link">Bountiful</Link>
                <Link to="/pond-supplies/filtration/farmington" className="city-link">Farmington</Link>
                <Link to="/pond-supplies/filtration/centerville" className="city-link">Centerville</Link>
                <Link to="/pond-supplies/filtration/kaysville" className="city-link">Kaysville</Link>
                <Link to="/pond-supplies/filtration/clearfield" className="city-link">Clearfield</Link>
                <Link to="/pond-supplies/filtration/clinton" className="city-link">Clinton</Link>
                <Link to="/pond-supplies/filtration/syracuse" className="city-link">Syracuse</Link>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Utah County</h3>
              <div className="cities-list">
                <Link to="/pond-supplies/filtration/provo" className="city-link">Provo</Link>
                <Link to="/pond-supplies/filtration/orem" className="city-link">Orem</Link>
                <Link to="/pond-supplies/filtration/american-fork" className="city-link">American Fork</Link>
                <Link to="/pond-supplies/filtration/lehi" className="city-link">Lehi</Link>
                <Link to="/pond-supplies/filtration/pleasant-grove" className="city-link">Pleasant Grove</Link>
                <Link to="/pond-supplies/filtration/spanish-fork" className="city-link">Spanish Fork</Link>
                <Link to="/pond-supplies/filtration/springville" className="city-link">Springville</Link>
                <Link to="/pond-supplies/filtration/alpine" className="city-link">Alpine</Link>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Weber County</h3>
              <div className="cities-list">
                <Link to="/pond-supplies/filtration/ogden" className="city-link">Ogden</Link>
                <Link to="/pond-supplies/filtration/roy" className="city-link">Roy</Link>
                <Link to="/pond-supplies/filtration/clearfield" className="city-link">Clearfield</Link>
                <Link to="/pond-supplies/filtration/south-ogden" className="city-link">South Ogden</Link>
                <Link to="/pond-supplies/filtration/north-ogden" className="city-link">North Ogden</Link>
                <Link to="/pond-supplies/filtration/riverdale" className="city-link">Riverdale</Link>
                <Link to="/pond-supplies/filtration/washington-terrace" className="city-link">Washington Terrace</Link>
                <Link to="/pond-supplies/filtration/farr-west" className="city-link">Farr West</Link>
              </div>
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
          <h2>Need Help Choosing the Right Filtration System?</h2>
          <p>Our filtration experts can assess your pond and recommend the perfect system for your needs.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Get Expert Consultation</Link>
            <Link to="/pond-supplies" className="secondary-button">Browse All Products</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};


// Internal Links for SEO


const InternalLinks = () => (
  <div style={{ display: 'none' }}>


    <Link to="/contact">utah water gardens</Link>


    <Link to="/plants-fish">utah water gardens</Link>


    <Link to="/pondsupplies">utah water gardens</Link>


    <Link to="/aquatic-plants">utah water gardens</Link>


    <Link to="/fish-koi">utah water gardens</Link>


    <Link to="/">utah water gardens</Link>


  </div>
);

export default FiltrationSystemsPage;
