import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './PondLightingPage.css';

const PondLightingPage = () => {
  const lightingTypes = [
    {
      name: 'LED Spotlights',
      image: '/images/IMG_2780.jpg',
      description: 'Energy-efficient LED spotlights for dramatic pond illumination',
      features: ['Energy efficient', 'Long lifespan', 'Bright illumination', 'Weather resistant', 'Easy installation'],
      applications: ['Waterfall lighting', 'Feature highlighting', 'Accent lighting', 'Dramatic effects']
    },
    {
      name: 'Underwater Lights',
      image: '/images/IMG_2776.jpg',
      description: 'Submersible LED lights for stunning underwater illumination',
      features: ['Fully submersible', 'Fish safe', 'Color changing options', 'Remote control', 'Low voltage'],
      applications: ['Underwater illumination', 'Fish viewing', 'Night ambiance', 'Color effects']
    },
    {
      name: 'Floating Lights',
      image: '/images/IMG_2779.jpg',
      description: 'Decorative floating lights for surface illumination and ambiance',
      features: ['Floating design', 'Solar powered', 'Automatic on/off', 'Weather resistant', 'Decorative'],
      applications: ['Surface lighting', 'Decorative effects', 'Party ambiance', 'Garden features']
    },
    {
      name: 'Pathway Lights',
      image: '/images/IMG_2782.jpg',
      description: 'Low-voltage pathway lights for safe pond area navigation',
      features: ['Low voltage', 'Automatic dusk/dawn', 'Weather resistant', 'Easy installation', 'Energy efficient'],
      applications: ['Pathway illumination', 'Safety lighting', 'Garden paths', 'Perimeter lighting']
    },
    {
      name: 'String Lights',
      image: '/images/IMG_2770.jpg',
      description: 'Decorative string lights for festive pond area illumination',
      features: ['Decorative design', 'Weather resistant', 'Multiple colors', 'Easy installation', 'Festive ambiance'],
      applications: ['Party lighting', 'Holiday decoration', 'Garden ambiance', 'Special events']
    },
    {
      name: 'Solar Lights',
      image: '/images/IMG_2775.jpg',
      description: 'Eco-friendly solar-powered lights for sustainable pond illumination',
      features: ['Solar powered', 'No wiring required', 'Automatic operation', 'Eco-friendly', 'Cost effective'],
      applications: ['Remote locations', 'Eco-friendly lighting', 'No-wire installation', 'Sustainable design']
    }
  ];

  const lightingSystems = [
    {
      name: 'Basic Lighting System',
      image: '/images/IMG_2780.jpg',
      description: 'Essential lighting system for small to medium ponds',
      includes: ['2 LED spotlights', '1 underwater light', 'Transformer', 'Basic timer', 'Installation guide'],
      features: ['Simple setup', 'Energy efficient', 'Weather resistant', 'Easy maintenance'],
      applications: ['Small ponds', 'Basic illumination', 'Budget projects', 'DIY installation']
    },
    {
      name: 'Professional Lighting System',
      image: '/images/IMG_2776.jpg',
      description: 'Comprehensive lighting system for medium to large ponds',
      includes: ['4 LED spotlights', '2 underwater lights', '1 floating light', 'Smart controller', 'Professional transformer', 'Installation service'],
      features: ['Smart control', 'Multiple zones', 'Color changing', 'Professional installation', 'Warranty coverage'],
      applications: ['Medium ponds', 'Professional results', 'Smart control', 'Full service']
    },
    {
      name: 'Premium Lighting System',
      image: '/images/IMG_2779.jpg',
      description: 'Luxury lighting system for large ponds and commercial installations',
      includes: ['6+ LED spotlights', '4+ underwater lights', '2+ floating lights', 'Advanced controller', 'Commercial transformer', 'Full installation', 'Design consultation'],
      features: ['Advanced control', 'Multiple effects', 'Commercial grade', 'Full service', 'Extended warranty'],
      applications: ['Large ponds', 'Commercial projects', 'Luxury installations', 'Full service']
    }
  ];

  const lightingEffects = [
    {
      name: 'Color Changing',
      image: '/images/IMG_2782.jpg',
      description: 'Dynamic color-changing lights for stunning visual effects',
      features: ['RGB color control', 'Remote operation', 'Multiple color modes', 'Smooth transitions'],
      applications: ['Party lighting', 'Seasonal themes', 'Mood lighting', 'Special events']
    },
    {
      name: 'Fiber Optic',
      image: '/images/IMG_2770.jpg',
      description: 'Fiber optic lighting for unique and elegant pond illumination',
      features: ['Elegant design', 'No heat emission', 'Flexible installation', 'Long lifespan'],
      applications: ['Elegant lighting', 'Heat-sensitive areas', 'Artistic effects', 'Premium installations']
    },
    {
      name: 'Moonlight Effect',
      image: '/images/IMG_2775.jpg',
      description: 'Soft moonlight effect lighting for natural nighttime ambiance',
      features: ['Soft illumination', 'Natural appearance', 'Energy efficient', 'Automatic operation'],
      applications: ['Natural ambiance', 'Night viewing', 'Subtle lighting', 'Eco-friendly']
    },
    {
      name: 'Strobe Effects',
      image: '/images/IMG_2779.jpg',
      description: 'Dynamic strobe effects for dramatic pond lighting displays',
      features: ['Multiple strobe patterns', 'Remote control', 'Synchronized effects', 'Party mode'],
      applications: ['Party lighting', 'Dramatic effects', 'Entertainment', 'Special events']
    }
  ];

  const installationServices = [
    {
      name: 'Basic Installation',
      image: '/images/IMG_2780.jpg',
      description: 'Professional installation of basic lighting systems',
      includes: ['Light placement', 'Wiring', 'Transformer setup', 'Basic timer', 'Testing'],
      benefits: ['Professional results', 'Warranty protection', 'Time savings', 'Peace of mind']
    },
    {
      name: 'Advanced Installation',
      image: '/images/IMG_2776.jpg',
      description: 'Complete installation of advanced lighting systems with smart controls',
      includes: ['All basic services', 'Smart controller setup', 'Zone programming', 'Remote configuration', 'Training'],
      benefits: ['Smart control', 'Professional setup', 'Full training', 'Extended warranty']
    },
    {
      name: 'Custom Design & Installation',
      image: '/images/IMG_2779.jpg',
      description: 'Custom lighting design and installation for unique pond projects',
      includes: ['Custom design', 'Full installation', 'Advanced programming', 'Ongoing support', 'Performance monitoring'],
      benefits: ['Custom solution', 'Unique design', 'Full service', 'Ongoing support']
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
      <PageHero
        title="Pond Lighting & Illumination"
        subtitle="Transform your pond into a magical nighttime oasis with our professional lighting solutions. From energy-efficient LEDs to stunning underwater effects, we have everything you need."
        backgroundImage="/images/3f524798b831b933a60d3f6d15f38e3b-denoise-enhance-4x.jpeg"
        backgroundImageAlt="Professional pond lighting and illumination systems"
        showCTA={true}
        ctaButtons={[
          {
            text: "Call for Expert Advice",
            href: "tel:(801) 590-8516",
            type: "primary"
          },
          {
            text: "View All Supplies",
            link: "/pond-supplies",
            type: "secondary"
          }
        ]}
      />

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
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2ZM12 4C14.76 4 17 6.24 17 9C17 11.76 14.76 14 12 14C9.24 14 7 11.76 7 9C7 6.24 9.24 4 12 4Z" fill="#FFD700"/>
                </svg>
              </div>
              <h3>Energy Efficient</h3>
              <p>All our lighting uses LED technology for maximum energy efficiency and long life</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#4A90E2"/>
                </svg>
              </div>
              <h3>Beautiful Effects</h3>
              <p>Create stunning nighttime ambiance with our professional lighting solutions</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
                </svg>
              </div>
              <h3>Expert Installation</h3>
              <p>Our certified technicians ensure proper installation and optimal performance</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
                </svg>
              </div>
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



export default PondLightingPage;
