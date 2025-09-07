import React from 'react';
import { Link } from 'react-router-dom';
import './PondLightingPage.css';

const PondLightingPage = () => {
  const lightingTypes = [
    {
      name: 'LED Spotlights',
      image: '/images/IMG_2780.jpg',
      description: 'Energy-efficient LED spotlights for dramatic pond illumination',
      features: ['Energy efficient', 'Long lifespan', 'Bright illumination', 'Weather resistant', 'Easy installation'],
      applications: ['Waterfall lighting', 'Feature highlighting', 'Accent lighting', 'Dramatic effects'],
      price: 'Starting at $89.99'
    },
    {
      name: 'Underwater Lights',
      image: '/images/IMG_2776.jpg',
      description: 'Submersible LED lights for stunning underwater illumination',
      features: ['Fully submersible', 'Fish safe', 'Color changing options', 'Remote control', 'Low voltage'],
      applications: ['Underwater illumination', 'Fish viewing', 'Night ambiance', 'Color effects'],
      price: 'Starting at $129.99'
    },
    {
      name: 'Floating Lights',
      image: '/images/IMG_2779.jpg',
      description: 'Decorative floating lights for surface illumination and ambiance',
      features: ['Floating design', 'Solar powered', 'Automatic on/off', 'Weather resistant', 'Decorative'],
      applications: ['Surface lighting', 'Decorative effects', 'Party ambiance', 'Garden features'],
      price: 'Starting at $49.99'
    },
    {
      name: 'Pathway Lights',
      image: '/images/IMG_2782.jpg',
      description: 'Low-voltage pathway lights for safe pond area navigation',
      features: ['Low voltage', 'Automatic dusk/dawn', 'Weather resistant', 'Easy installation', 'Energy efficient'],
      applications: ['Pathway illumination', 'Safety lighting', 'Garden paths', 'Perimeter lighting'],
      price: 'Starting at $39.99'
    },
    {
      name: 'String Lights',
      image: '/images/IMG_2770.jpg',
      description: 'Decorative string lights for festive pond area illumination',
      features: ['Decorative design', 'Weather resistant', 'Multiple colors', 'Easy installation', 'Festive ambiance'],
      applications: ['Party lighting', 'Holiday decoration', 'Garden ambiance', 'Special events'],
      price: 'Starting at $24.99'
    },
    {
      name: 'Solar Lights',
      image: '/images/IMG_2775.jpg',
      description: 'Eco-friendly solar-powered lights for sustainable pond illumination',
      features: ['Solar powered', 'No wiring required', 'Automatic operation', 'Eco-friendly', 'Cost effective'],
      applications: ['Remote locations', 'Eco-friendly lighting', 'No-wire installation', 'Sustainable design'],
      price: 'Starting at $34.99'
    }
  ];

  const lightingSystems = [
    {
      name: 'Basic Lighting System',
      image: '/images/IMG_2780.jpg',
      description: 'Essential lighting system for small to medium ponds',
      includes: ['2 LED spotlights', '1 underwater light', 'Transformer', 'Basic timer', 'Installation guide'],
      features: ['Simple setup', 'Energy efficient', 'Weather resistant', 'Easy maintenance'],
      applications: ['Small ponds', 'Basic illumination', 'Budget projects', 'DIY installation'],
      price: 'Starting at $199.99'
    },
    {
      name: 'Professional Lighting System',
      image: '/images/IMG_2776.jpg',
      description: 'Comprehensive lighting system for medium to large ponds',
      includes: ['4 LED spotlights', '2 underwater lights', '1 floating light', 'Smart controller', 'Professional transformer', 'Installation service'],
      features: ['Smart control', 'Multiple zones', 'Color changing', 'Professional installation', 'Warranty coverage'],
      applications: ['Medium ponds', 'Professional results', 'Smart control', 'Full service'],
      price: 'Starting at $499.99'
    },
    {
      name: 'Premium Lighting System',
      image: '/images/IMG_2779.jpg',
      description: 'Luxury lighting system for large ponds and commercial installations',
      includes: ['6+ LED spotlights', '4+ underwater lights', '2+ floating lights', 'Advanced controller', 'Commercial transformer', 'Full installation', 'Design consultation'],
      features: ['Advanced control', 'Multiple effects', 'Commercial grade', 'Full service', 'Extended warranty'],
      applications: ['Large ponds', 'Commercial projects', 'Luxury installations', 'Full service'],
      price: 'Starting at $999.99'
    }
  ];

  const lightingEffects = [
    {
      name: 'Color Changing',
      image: '/images/IMG_2782.jpg',
      description: 'Dynamic color-changing lights for stunning visual effects',
      features: ['RGB color control', 'Remote operation', 'Multiple color modes', 'Smooth transitions'],
      applications: ['Party lighting', 'Seasonal themes', 'Mood lighting', 'Special events'],
      price: 'Starting at $149.99'
    },
    {
      name: 'Fiber Optic',
      image: '/images/IMG_2770.jpg',
      description: 'Fiber optic lighting for unique and elegant pond illumination',
      features: ['Elegant design', 'No heat emission', 'Flexible installation', 'Long lifespan'],
      applications: ['Elegant lighting', 'Heat-sensitive areas', 'Artistic effects', 'Premium installations'],
      price: 'Starting at $299.99'
    },
    {
      name: 'Moonlight Effect',
      image: '/images/IMG_2775.jpg',
      description: 'Soft moonlight effect lighting for natural nighttime ambiance',
      features: ['Soft illumination', 'Natural appearance', 'Energy efficient', 'Automatic operation'],
      applications: ['Natural ambiance', 'Night viewing', 'Subtle lighting', 'Eco-friendly'],
      price: 'Starting at $89.99'
    },
    {
      name: 'Strobe Effects',
      image: '/images/IMG_2779.jpg',
      description: 'Dynamic strobe effects for dramatic pond lighting displays',
      features: ['Multiple strobe patterns', 'Remote control', 'Synchronized effects', 'Party mode'],
      applications: ['Party lighting', 'Dramatic effects', 'Entertainment', 'Special events'],
      price: 'Starting at $179.99'
    }
  ];

  const installationServices = [
    {
      name: 'Basic Installation',
      image: '/images/IMG_2780.jpg',
      description: 'Professional installation of basic lighting systems',
      includes: ['Light placement', 'Wiring', 'Transformer setup', 'Basic timer', 'Testing'],
      benefits: ['Professional results', 'Warranty protection', 'Time savings', 'Peace of mind'],
      price: 'Starting at $150'
    },
    {
      name: 'Advanced Installation',
      image: '/images/IMG_2776.jpg',
      description: 'Complete installation of advanced lighting systems with smart controls',
      includes: ['All basic services', 'Smart controller setup', 'Zone programming', 'Remote configuration', 'Training'],
      benefits: ['Smart control', 'Professional setup', 'Full training', 'Extended warranty'],
      price: 'Starting at $300'
    },
    {
      name: 'Custom Design & Installation',
      image: '/images/IMG_2779.jpg',
      description: 'Custom lighting design and installation for unique pond projects',
      includes: ['Custom design', 'Full installation', 'Advanced programming', 'Ongoing support', 'Performance monitoring'],
      benefits: ['Custom solution', 'Unique design', 'Full service', 'Ongoing support'],
      price: 'Starting at $500'
    }
  ];

  const maintenanceTips = [
    'Clean light fixtures regularly to maintain brightness',
    'Check wiring connections monthly for safety',
    'Replace bulbs before they burn out completely',
    'Test timers and controllers seasonally',
    'Inspect underwater lights for algae buildup',
    'Clean solar panels for optimal performance',
    'Check transformer connections and voltage',
    'Update lighting programs for seasonal changes'
  ];

  return (
    <div className="pond-lighting-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/cropped-20140919_105345-topaz-enhance-3.2x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>Pond Lighting & Illumination</h1>
          <p>Transform your pond into a magical nighttime oasis with our professional lighting solutions. From energy-efficient LEDs to stunning underwater effects, we have everything you need.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Expert Advice</a>
            <Link to="/pond-supplies" className="secondary-button">View All Supplies</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2780.jpg" alt="Professional pond lighting and illumination systems" />
        </div>
      </section>

      {/* Lighting Types */}
      <section className="lighting-types-section first-section-gradient">
        <div className="container">
          <h2>Our Lighting Selection</h2>
          <p>We carry the highest quality pond lighting from trusted manufacturers, ensuring beautiful and reliable illumination</p>
          <div className="lighting-grid">
            {lightingTypes.map((lighting, index) => (
              <div key={index} className="lighting-card">
                <div className="lighting-image">
                  <img src={lighting.image} alt={lighting.name} />
                </div>
                <div className="lighting-info">
                  <h3>{lighting.name}</h3>
                  <p>{lighting.description}</p>
                  <div className="lighting-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {lighting.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lighting-applications">
                    <h4>Perfect For:</h4>
                    <ul>
                      {lighting.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lighting-price">{lighting.price}</div>
                  <a href="tel:(801) 590-8516" className="lighting-cta">Call for Availability</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Systems */}
      <section className="systems-section">
        <div className="container">
          <h2>Complete Lighting Systems</h2>
          <p>Comprehensive lighting systems designed for different pond sizes and budgets</p>
          <div className="systems-grid">
            {lightingSystems.map((system, index) => (
              <div key={index} className="system-card">
                <div className="system-image">
                  <img src={system.image} alt={system.name} />
                </div>
                <div className="system-info">
                  <h3>{system.name}</h3>
                  <p>{system.description}</p>
                  <div className="system-includes">
                    <h4>System Includes:</h4>
                    <ul>
                      {system.includes.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="system-features">
                    <h4>Features:</h4>
                    <ul>
                      {system.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="system-applications">
                    <h4>Applications:</h4>
                    <ul>
                      {system.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="system-price">{system.price}</div>
                  <a href="tel:(801) 590-8516" className="system-cta">Call to Order</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Effects */}
      <section className="effects-section">
        <div className="container">
          <h2>Special Lighting Effects</h2>
          <p>Create stunning visual effects with our specialized lighting solutions</p>
          <div className="effects-grid">
            {lightingEffects.map((effect, index) => (
              <div key={index} className="effect-card">
                <div className="effect-image">
                  <img src={effect.image} alt={effect.name} />
                </div>
                <div className="effect-info">
                  <h3>{effect.name}</h3>
                  <p>{effect.description}</p>
                  <div className="effect-features">
                    <h4>Features:</h4>
                    <ul>
                      {effect.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="effect-applications">
                    <h4>Applications:</h4>
                    <ul>
                      {effect.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="effect-price">{effect.price}</div>
                  <a href="tel:(801) 590-8516" className="effect-cta">Call for Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="installation-section">
        <div className="container">
          <h2>Professional Installation Services</h2>
          <p>Our certified technicians provide complete lighting installation services for optimal results</p>
          <div className="installation-grid">
            {installationServices.map((service, index) => (
              <div key={index} className="installation-card">
                <div className="installation-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="installation-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="installation-includes">
                    <h4>Service Includes:</h4>
                    <ul>
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="installation-benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="installation-price">{service.price}</div>
                  <a href="tel:(801) 590-8516" className="installation-cta">Call for Service</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Lighting */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Our Pond Lighting?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h3>Energy Efficient</h3>
              <p>All our lighting uses LED technology for maximum energy efficiency and long life</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌙</div>
              <h3>Beautiful Effects</h3>
              <p>Create stunning nighttime ambiance with our professional lighting solutions</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔧</div>
              <h3>Expert Installation</h3>
              <p>Our certified technicians ensure proper installation and optimal performance</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💎</div>
              <h3>Quality Guarantee</h3>
              <p>All lighting comes with comprehensive warranties and satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Care */}
      <section className="maintenance-section">
        <div className="container">
          <h2>Lighting Maintenance & Care</h2>
          <p>Proper maintenance ensures your lighting system performs beautifully for years to come</p>
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
              <img src="/images/IMG_2776.jpg" alt="Pond lighting maintenance and care" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Packages */}
      <section className="packages-section gradient-wipe-up">
        <div className="container">
          <h2>Lighting Packages</h2>
          <p>Save money with our complete lighting packages</p>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Starter Lighting Package</h3>
              <div className="package-price">$299.99</div>
              <div className="package-description">Perfect for small ponds and basic illumination</div>
              <ul>
                <li>2 LED spotlights</li>
                <li>1 underwater light</li>
                <li>Basic transformer</li>
                <li>Simple timer</li>
                <li>Installation guide</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card featured">
              <h3>Professional Lighting Package</h3>
              <div className="package-price">$699.99</div>
              <div className="package-description">Ideal for medium to large residential ponds</div>
              <ul>
                <li>4 LED spotlights</li>
                <li>2 underwater lights</li>
                <li>1 floating light</li>
                <li>Smart controller</li>
                <li>Professional transformer</li>
                <li>Installation service</li>
                <li>Warranty coverage</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card">
              <h3>Premium Lighting Package</h3>
              <div className="package-price">$1,299.99</div>
              <div className="package-description">For large ponds and commercial applications</div>
              <ul>
                <li>6+ LED spotlights</li>
                <li>4+ underwater lights</li>
                <li>2+ floating lights</li>
                <li>Advanced controller</li>
                <li>Commercial transformer</li>
                <li>Full installation</li>
                <li>Design consultation</li>
                <li>Extended warranty</li>
                <li>24/7 support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Illuminate Your Pond?</h2>
          <p>Our experts can help you design the perfect lighting system for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PondLightingPage;
