import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero.js';
import './PumpsAerationPage.css';

const PumpsAerationPage = () => {
  const stats = [
    { number: '100+', label: 'Pump Models', icon: 'Models' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '100%', label: 'Quality Guaranteed', icon: 'Quality' },
    { number: '24/7', label: 'Expert Support', icon: 'Support' }
  ];

  const pumpCategories = [
    {
      name: 'Submersible Pumps',
      image: '/images/IMG_2770.jpg',
      description: 'High-performance pumps designed to operate underwater for maximum efficiency',
      features: ['Energy efficient', 'Quiet operation', 'Easy installation', 'Long lifespan'],
      applications: ['Pond circulation', 'Waterfall systems', 'Fountain displays', 'Filter systems'],
    },
    {
      name: 'External Pumps',
      image: '/images/IMG_2775.jpg',
      description: 'Powerful pumps for large ponds and high-flow applications',
      features: ['High flow rates', 'Professional grade', 'Easy maintenance', 'Durable construction'],
      applications: ['Large ponds', 'Commercial systems', 'High waterfalls', 'Multiple features'],
    },
    {
      name: 'Solar Pumps',
      image: '/images/IMG_2779.jpg',
      description: 'Eco-friendly pumps powered by solar energy for sustainable pond operation',
      features: ['Solar powered', 'No electricity costs', 'Environmentally friendly', 'Automatic operation'],
      applications: ['Remote locations', 'Eco-friendly ponds', 'Small water features', 'Garden ponds'],
    },
    {
      name: 'Fountain Pumps',
      image: '/images/IMG_2780.jpg',
      description: 'Specialized pumps designed for decorative fountain displays',
      features: ['Adjustable flow', 'Multiple nozzle options', 'Decorative designs', 'Easy height adjustment'],
      applications: ['Fountain displays', 'Bird baths', 'Small ponds', 'Decorative features'],
    }
  ];

  const aerationSystems = [
    {
      name: 'Air Pumps',
      image: '/images/IMG_2776.jpg',
      description: 'High-quality air pumps for oxygenating pond water',
      features: ['Multiple outlets', 'Variable speed', 'Quiet operation', 'Energy efficient'],
      benefits: ['Increased oxygen levels', 'Better fish health', 'Reduced algae growth', 'Improved water clarity'],
    },
    {
      name: 'Diffuser Systems',
      image: '/images/IMG_2782.jpg',
      description: 'Advanced diffuser systems for optimal oxygen distribution',
      features: ['Fine bubble technology', 'Even distribution', 'Durable materials', 'Easy installation'],
      benefits: ['Maximum oxygen transfer', 'Better circulation', 'Reduced stratification', 'Enhanced ecosystem'],
    },
    {
      name: 'Aerator Kits',
      image: '/images/IMG_2770.jpg',
      description: 'Complete aeration systems with everything you need',
      features: ['Complete system', 'Professional installation', 'Comprehensive warranty', 'Expert support'],
      benefits: ['Turnkey solution', 'Professional results', 'Long-term reliability', 'Peace of mind'],
    }
  ];

  const pumpSizing = [
    {
      pondSize: 'Small (100-500 gallons)',
      pumpSize: '500-1000 GPH',
      applications: 'Small fountains, bird baths, mini ponds',
      recommendations: ['Submersible pump', 'Fountain pump', 'Solar pump']
    },
    {
      pondSize: 'Medium (500-2000 gallons)',
      pumpSize: '1000-3000 GPH',
      applications: 'Residential ponds, small waterfalls, koi ponds',
      recommendations: ['Submersible pump', 'External pump', 'Aeration system']
    },
    {
      pondSize: 'Large (2000-5000 gallons)',
      pumpSize: '3000-6000 GPH',
      applications: 'Large residential ponds, multiple features, commercial ponds',
      recommendations: ['External pump', 'Multiple pumps', 'Professional aeration']
    },
    {
      pondSize: 'Commercial (5000+ gallons)',
      pumpSize: '6000+ GPH',
      applications: 'Commercial ponds, public displays, large water features',
      recommendations: ['Commercial pumps', 'Multiple systems', 'Professional installation']
    }
  ];

  const maintenanceTips = [
    'Clean pump intake screens monthly',
    'Check for debris buildup weekly',
    'Inspect electrical connections quarterly',
    'Test pump performance monthly',
    'Replace worn parts annually',
    'Winterize pumps in cold climates',
    'Monitor energy consumption',
    'Keep pump area clean and accessible'
  ];

  return (
    <>
      <SEO 
        title="Pond Pumps & Aeration Systems - Professional Equipment | Utah Water Gardens"
        description="Professional-grade pond pumps and aeration systems to keep your pond healthy and thriving. Submersible pumps, external pumps, solar pumps, and aeration systems for all pond sizes."
        keywords="pond pumps, aeration systems, submersible pumps, external pumps, solar pumps, fountain pumps, air pumps, diffuser systems, utah pond equipment"
        canonical="https://utahwatergardens.com/pond-supplies/pumps-aeration"
      />
      <div className="pumps-aeration-page">
        <PageHero 
          title="Pond Pumps & Aeration Systems"
          subtitle="Professional-grade pumps and aeration systems to keep your pond healthy, beautiful, and thriving. From small fountains to large commercial ponds."
          backgroundImage="/images/cropped-20140919_105345-topaz-enhance-3.2x.jpeg"
          backgroundImageAlt="Professional pond pumps and aeration systems"
          stats={stats}
        />

      {/* Pump Categories */}
      <section className="pump-categories-section first-section-gradient">
        <div className="container">
          <h2>Our Pump Selection</h2>
          <p>We carry the largest selection of pond pumps in Utah, from small fountain pumps to large commercial systems</p>
          <div className="pump-grid">
            {pumpCategories.map((pump, index) => (
              <Link key={index} to="/pond-supplies/pumps-aeration" className="pump-card">
                <div className="pump-image">
                  <img src={pump.image} alt={pump.name} />
                </div>
                <div className="pump-info">
                  <h3>{pump.name}</h3>
                  <p>{pump.description}</p>
                  <div className="pump-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {pump.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pump-applications">
                    <h4>Perfect For:</h4>
                    <ul>
                      {pump.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pump-price">{pump.price}</div>
                  <a href="tel:(801) 590-8516" className="pump-cta" onClick={(e) => e.stopPropagation()}>Call for Availability</a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Aeration Systems */}
      <section className="aeration-section">
        <div className="container">
          <h2>Aeration Systems</h2>
          <p>Keep your pond water oxygenated and healthy with our professional aeration solutions</p>
          <div className="aeration-grid">
            {aerationSystems.map((system, index) => (
              <div key={index} className="aeration-card">
                <div className="aeration-image">
                  <img src={system.image} alt={system.name} />
                </div>
                <div className="aeration-info">
                  <h3>{system.name}</h3>
                  <p>{system.description}</p>
                  <div className="aeration-features">
                    <h4>Features:</h4>
                    <ul>
                      {system.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="aeration-benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {system.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="aeration-price">{system.price}</div>
                  <a href="tel:(801) 590-8516" className="aeration-cta">Call for Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pump Sizing Guide */}
      <section className="sizing-section">
        <div className="container">
          <h2>Pump Sizing Guide</h2>
          <p>Choose the right pump size for your pond to ensure optimal performance and efficiency</p>
          <div className="sizing-grid">
            {pumpSizing.map((size, index) => (
              <div key={index} className="size-card">
                <h3>{size.pondSize}</h3>
                <div className="size-details">
                  <div className="size-pump">
                    <strong>Recommended Pump:</strong> {size.pumpSize}
                  </div>
                  <div className="size-applications">
                    <strong>Applications:</strong> {size.applications}
                  </div>
                  <div className="size-recommendations">
                    <strong>Our Recommendations:</strong>
                    <ul>
                      {size.recommendations.map((rec, recIndex) => (
                        <li key={recIndex}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a href="tel:(801) 590-8516" className="size-cta">Get Expert Sizing</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Pumps */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Our Pumps & Aeration?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
  </svg>
              </div>
              <h3>Expert Selection</h3>
              <p>We only carry the highest quality pumps from trusted manufacturers</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2ZM12 4C14.76 4 17 6.24 17 9C17 11.76 14.76 14 12 14C9.24 14 7 11.76 7 9C7 6.24 9.24 4 12 4Z" fill="#FFD700"/>
  </svg>
              </div>
              <h3>Professional Advice</h3>
              <p>Our experts help you choose the perfect pump for your specific needs</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H20C21.1 8 22 8.9 22 10V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V10C2 8.9 2.9 8 4 8H6V6C6 3.79 7.79 2 10 2H14C16.21 2 18 3.79 18 6V8ZM16 8V6C16 4.9 15.1 4 14 4H10C8.9 4 8 4.9 8 6V8H16ZM4 10V20H20V10H4Z" fill="#1e40af"/>
                </svg>
              </div>
              <h3>Warranty Protection</h3>
              <p>All our pumps come with comprehensive manufacturer warranties</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#007BFF"/>
  </svg>
              </div>
              <h3>Ongoing Support</h3>
              <p>We provide installation guidance and ongoing technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="installation-section">
        <div className="container">
          <h2>Professional Installation Services</h2>
          <div className="installation-content">
            <div className="installation-text">
              <h3>Expert Installation & Setup</h3>
              <p>Our certified technicians can install and configure your pump and aeration systems for optimal performance.</p>
              <div className="installation-services">
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#FFD700"/>
                    </svg>
                  </span>
                  <span>Professional pump installation</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
                    </svg>
                  </span>
                  <span>System optimization</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#007BFF"/>
                    </svg>
                  </span>
                  <span>Remote monitoring setup</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#6C757D"/>
                    </svg>
                  </span>
                  <span>Performance testing</span>
                </div>
              </div>
              <a href="tel:(801) 590-8516" className="installation-cta">Call for Installation</a>
            </div>
            <div className="installation-image">
              <img src="/images/IMG_2775.jpg" alt="Professional pump installation service" />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Care */}
      <section className="maintenance-section">
        <div className="container">
          <h2>Maintenance & Care Tips</h2>
          <p>Keep your pumps and aeration systems running smoothly with proper maintenance</p>
          <div className="maintenance-content">
            <div className="maintenance-tips">
              <h3>Essential Maintenance Tips</h3>
              <ul>
                {maintenanceTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
              <a href="tel:(801) 590-8516" className="maintenance-cta">Call for Maintenance</a>
            </div>
            <div className="maintenance-image">
              <img src="/images/IMG_2780.jpg" alt="Pump maintenance and care" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Packages */}
      <section className="packages-section gradient-wipe-up">
        <div className="container">
          <h2>Complete System Packages</h2>
          <p>Save money with our complete pump and aeration packages</p>
          <div className="packages-grid">
            <div className="package-card">
              <div className="package-image">
                <img src="/images/IMG_2770.jpg" alt="Starter pump and aeration package for small ponds" />
              </div>
              <h3>Starter Package</h3>
              <div className="package-description">Perfect for small ponds and beginners</div>
              <ul>
                <li>Submersible pump (500-1000 GPH)</li>
                <li>Basic aeration system</li>
                <li>Installation guide</li>
                <li>1-year warranty</li>
                <li>Phone support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card featured">
              <div className="package-image">
                <img src="/images/IMG_2775.jpg" alt="Professional pump and aeration package for medium to large ponds" />
              </div>
              <h3>Professional Package</h3>
              <div className="package-description">Ideal for medium to large residential ponds</div>
              <ul>
                <li>External pump (2000-4000 GPH)</li>
                <li>Advanced aeration system</li>
                <li>Professional installation</li>
                <li>3-year warranty</li>
                <li>Priority support</li>
                <li>Performance optimization</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card">
              <div className="package-image">
                <img src="/images/IMG_2779.jpg" alt="Commercial pump and aeration package for large ponds and commercial applications" />
              </div>
              <h3>Commercial Package</h3>
              <div className="package-description">For large ponds and commercial applications</div>
              <ul>
                <li>Commercial pump (6000+ GPH)</li>
                <li>Industrial aeration system</li>
                <li>Full installation service</li>
                <li>5-year warranty</li>
                <li>24/7 support</li>
                <li>Custom configuration</li>
                <li>Performance monitoring</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
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
            pond pumps and aeration systems. Our experienced team provides expert installation and support throughout Utah.
          </p>
          
          <div className="service-areas-grid">
            <div className="service-area-group">
              <h3>Salt Lake County</h3>
              <div className="cities-list">
                <Link to="/pond-supplies/pumps-aeration/salt-lake-city" className="city-link">Salt Lake City</Link>
                <Link to="/pond-supplies/pumps-aeration/west-jordan" className="city-link">West Jordan</Link>
                <Link to="/pond-supplies/pumps-aeration/murray" className="city-link">Murray</Link>
                <Link to="/pond-supplies/pumps-aeration/sandy" className="city-link">Sandy</Link>
                <Link to="/pond-supplies/pumps-aeration/west-valley-city" className="city-link">West Valley City</Link>
                <Link to="/pond-supplies/pumps-aeration/draper" className="city-link">Draper</Link>
                <Link to="/pond-supplies/pumps-aeration/cottonwood-heights" className="city-link">Cottonwood Heights</Link>
                <Link to="/pond-supplies/pumps-aeration/holladay" className="city-link">Holladay</Link>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Davis County</h3>
              <div className="cities-list">
                <Link to="/pond-supplies/pumps-aeration/layton" className="city-link">Layton</Link>
                <Link to="/pond-supplies/pumps-aeration/bountiful" className="city-link">Bountiful</Link>
                <Link to="/pond-supplies/pumps-aeration/farmington" className="city-link">Farmington</Link>
                <Link to="/pond-supplies/pumps-aeration/centerville" className="city-link">Centerville</Link>
                <Link to="/pond-supplies/pumps-aeration/kaysville" className="city-link">Kaysville</Link>
                <Link to="/pond-supplies/pumps-aeration/clearfield" className="city-link">Clearfield</Link>
                <Link to="/pond-supplies/pumps-aeration/clinton" className="city-link">Clinton</Link>
                <Link to="/pond-supplies/pumps-aeration/syracuse" className="city-link">Syracuse</Link>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Utah County</h3>
              <div className="cities-list">
                <Link to="/pond-supplies/pumps-aeration/provo" className="city-link">Provo</Link>
                <Link to="/pond-supplies/pumps-aeration/orem" className="city-link">Orem</Link>
                <Link to="/pond-supplies/pumps-aeration/american-fork" className="city-link">American Fork</Link>
                <Link to="/pond-supplies/pumps-aeration/lehi" className="city-link">Lehi</Link>
                <Link to="/pond-supplies/pumps-aeration/pleasant-grove" className="city-link">Pleasant Grove</Link>
                <Link to="/pond-supplies/pumps-aeration/spanish-fork" className="city-link">Spanish Fork</Link>
                <Link to="/pond-supplies/pumps-aeration/springville" className="city-link">Springville</Link>
                <Link to="/pond-supplies/pumps-aeration/alpine" className="city-link">Alpine</Link>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Weber County</h3>
              <div className="cities-list">
                <Link to="/pond-supplies/pumps-aeration/ogden" className="city-link">Ogden</Link>
                <Link to="/pond-supplies/pumps-aeration/roy" className="city-link">Roy</Link>
                <Link to="/pond-supplies/pumps-aeration/clearfield" className="city-link">Clearfield</Link>
                <Link to="/pond-supplies/pumps-aeration/south-ogden" className="city-link">South Ogden</Link>
                <Link to="/pond-supplies/pumps-aeration/north-ogden" className="city-link">North Ogden</Link>
                <Link to="/pond-supplies/pumps-aeration/riverdale" className="city-link">Riverdale</Link>
                <Link to="/pond-supplies/pumps-aeration/washington-terrace" className="city-link">Washington Terrace</Link>
                <Link to="/pond-supplies/pumps-aeration/farr-west" className="city-link">Farr West</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section 
        className="contact-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h2>Ready to Upgrade Your Pond?</h2>
          <p>Our experts can help you choose the perfect pump and aeration system for your needs</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};


export default PumpsAerationPage;
