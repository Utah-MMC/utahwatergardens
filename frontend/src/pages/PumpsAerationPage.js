import React from 'react';
import { Link } from 'react-router-dom';
import './PumpsAerationPage.css';

const PumpsAerationPage = () => {
  const pumpCategories = [
    {
      name: 'Submersible Pumps',
      image: '/images/IMG_2770.jpg',
      description: 'High-performance pumps designed to operate underwater for maximum efficiency',
      features: ['Energy efficient', 'Quiet operation', 'Easy installation', 'Long lifespan'],
      applications: ['Pond circulation', 'Waterfall systems', 'Fountain displays', 'Filter systems'],
      price: 'Starting at $89'
    },
    {
      name: 'External Pumps',
      image: '/images/IMG_2775.jpg',
      description: 'Powerful pumps for large ponds and high-flow applications',
      features: ['High flow rates', 'Professional grade', 'Easy maintenance', 'Durable construction'],
      applications: ['Large ponds', 'Commercial systems', 'High waterfalls', 'Multiple features'],
      price: 'Starting at $199'
    },
    {
      name: 'Solar Pumps',
      image: '/images/IMG_2779.jpg',
      description: 'Eco-friendly pumps powered by solar energy for sustainable pond operation',
      features: ['Solar powered', 'No electricity costs', 'Environmentally friendly', 'Automatic operation'],
      applications: ['Remote locations', 'Eco-friendly ponds', 'Small water features', 'Garden ponds'],
      price: 'Starting at $149'
    },
    {
      name: 'Fountain Pumps',
      image: '/images/IMG_2780.jpg',
      description: 'Specialized pumps designed for decorative fountain displays',
      features: ['Adjustable flow', 'Multiple nozzle options', 'Decorative designs', 'Easy height adjustment'],
      applications: ['Fountain displays', 'Bird baths', 'Small ponds', 'Decorative features'],
      price: 'Starting at $45'
    }
  ];

  const aerationSystems = [
    {
      name: 'Air Pumps',
      image: '/images/IMG_2776.jpg',
      description: 'High-quality air pumps for oxygenating pond water',
      features: ['Multiple outlets', 'Variable speed', 'Quiet operation', 'Energy efficient'],
      benefits: ['Increased oxygen levels', 'Better fish health', 'Reduced algae growth', 'Improved water clarity'],
      price: 'Starting at $79'
    },
    {
      name: 'Diffuser Systems',
      image: '/images/IMG_2782.jpg',
      description: 'Advanced diffuser systems for optimal oxygen distribution',
      features: ['Fine bubble technology', 'Even distribution', 'Durable materials', 'Easy installation'],
      benefits: ['Maximum oxygen transfer', 'Better circulation', 'Reduced stratification', 'Enhanced ecosystem'],
      price: 'Starting at $65'
    },
    {
      name: 'Aerator Kits',
      image: '/images/IMG_2770.jpg',
      description: 'Complete aeration systems with everything you need',
      features: ['Complete system', 'Professional installation', 'Comprehensive warranty', 'Expert support'],
      benefits: ['Turnkey solution', 'Professional results', 'Long-term reliability', 'Peace of mind'],
      price: 'Starting at $299'
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
    <div className="pumps-aeration-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Pond Pumps & Aeration Systems</h1>
          <p>Professional-grade pumps and aeration systems to keep your pond healthy, beautiful, and thriving. From small fountains to large commercial ponds.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Expert Advice</a>
            <Link to="/pond-supplies" className="secondary-button">View All Supplies</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2770.jpg" alt="Professional pond pumps and aeration systems" />
        </div>
      </section>

      {/* Pump Categories */}
      <section className="pump-categories-section">
        <div className="container">
          <h2>Our Pump Selection</h2>
          <p>We carry the largest selection of pond pumps in Utah, from small fountain pumps to large commercial systems</p>
          <div className="pump-grid">
            {pumpCategories.map((pump, index) => (
              <div key={index} className="pump-card">
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
                  <a href="tel:(801) 590-8516" className="pump-cta">Call for Availability</a>
                </div>
              </div>
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
              <div className="benefit-icon">🔧</div>
              <h3>Expert Selection</h3>
              <p>We only carry the highest quality pumps from trusted manufacturers</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h3>Professional Advice</h3>
              <p>Our experts help you choose the perfect pump for your specific needs</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <h3>Warranty Protection</h3>
              <p>All our pumps come with comprehensive manufacturer warranties</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📞</div>
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
                  <span className="service-icon">⚡</span>
                  <span>Professional pump installation</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">🔧</span>
                  <span>System optimization</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">📱</span>
                  <span>Remote monitoring setup</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">📋</span>
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
      <section className="packages-section">
        <div className="container">
          <h2>Complete System Packages</h2>
          <p>Save money with our complete pump and aeration packages</p>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Starter Package</h3>
              <div className="package-price">$299</div>
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
              <h3>Professional Package</h3>
              <div className="package-price">$599</div>
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
              <h3>Commercial Package</h3>
              <div className="package-price">$1,299</div>
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

      {/* Contact CTA */}
      <section className="contact-cta">
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
  );
};

export default PumpsAerationPage;
