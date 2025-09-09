import React from 'react';
import { Link } from 'react-router-dom';
import './ToolsAccessoriesPage.css';

const ToolsAccessoriesPage = () => {
  const toolCategories = [
    {
      name: 'Pond Maintenance Tools',
      image: '/images/IMG_2775.jpg',
      description: 'Essential tools for keeping your pond clean and well-maintained',
      features: ['Durable construction', 'Ergonomic design', 'Easy to use', 'Long-lasting', 'Professional grade'],
      products: ['Pond skimmers', 'Algae brushes', 'Debris nets', 'Cleaning tools', 'Maintenance kits'],
      applications: ['Daily maintenance', 'Seasonal cleaning', 'Debris removal', 'Algae control'],
    },
    {
      name: 'Water Testing Equipment',
      image: '/images/IMG_2779.jpg',
      description: 'Professional water testing equipment for optimal pond health monitoring',
      features: ['Accurate readings', 'Easy to use', 'Professional grade', 'Reliable results', 'Multiple parameters'],
      products: ['pH testers', 'Ammonia testers', 'Dissolved oxygen meters', 'Temperature gauges', 'Complete test kits'],
      applications: ['Water quality monitoring', 'Health assessment', 'Treatment planning', 'Preventive care'],
    },
    {
      name: 'Pond Construction Tools',
      image: '/images/IMG_2780.jpg',
      description: 'Professional tools for pond construction and installation projects',
      features: ['Heavy-duty construction', 'Professional grade', 'Precision tools', 'Durable materials', 'Complete sets'],
      products: ['Excavation tools', 'Leveling equipment', 'Measuring tools', 'Installation kits', 'Safety equipment'],
      applications: ['Pond construction', 'Installation projects', 'Renovation work', 'Professional builds'],
    },
    {
      name: 'Plant Care Tools',
      image: '/images/IMG_2776.jpg',
      description: 'Specialized tools for aquatic plant care and maintenance',
      features: ['Aquatic plant specific', 'Gentle on plants', 'Easy handling', 'Precision cutting', 'Long reach'],
      products: ['Aquatic plant scissors', 'Plant anchors', 'Fertilizer tools', 'Pruning shears', 'Planting tools'],
      applications: ['Plant maintenance', 'Pruning', 'Fertilizing', 'Planting', 'Seasonal care'],
    },
    {
      name: 'Fish Care Accessories',
      image: '/images/IMG_2782.jpg',
      description: 'Essential accessories for fish health and pond management',
      features: ['Fish safe materials', 'Easy to use', 'Durable construction', 'Professional quality', 'Safe handling'],
      products: ['Fish nets', 'Feeding tools', 'Health monitoring', 'Breeding accessories', 'Safety equipment'],
      applications: ['Fish handling', 'Health monitoring', 'Feeding management', 'Breeding programs'],
    },
    {
      name: 'Safety & Protection Gear',
      image: '/images/IMG_2770.jpg',
      description: 'Safety equipment and protective gear for pond maintenance',
      features: ['Safety certified', 'Comfortable fit', 'Durable materials', 'Weather resistant', 'Professional grade'],
      products: ['Safety gloves', 'Protective clothing', 'Safety glasses', 'Non-slip boots', 'First aid kits'],
      applications: ['Safety protection', 'Hazard prevention', 'Comfortable work', 'Professional safety'],
    }
  ];

  const accessoryCategories = [
    {
      name: 'Decorative Accessories',
      image: '/images/IMG_2775.jpg',
      description: 'Beautiful decorative accessories to enhance your pond\'s appearance',
      features: ['Weather resistant', 'Beautiful design', 'Easy installation', 'Long-lasting', 'Versatile'],
      products: ['Decorative stones', 'Garden ornaments', 'Water features', 'Lighting accessories', 'Artistic elements'],
      applications: ['Aesthetic enhancement', 'Garden design', 'Personalization', 'Visual appeal'],
    },
    {
      name: 'Functional Accessories',
      image: '/images/IMG_2779.jpg',
      description: 'Practical accessories that improve pond functionality and convenience',
      features: ['Functional design', 'Easy to use', 'Durable construction', 'Convenient operation', 'Professional quality'],
      products: ['Automatic feeders', 'Timers', 'Controllers', 'Monitoring systems', 'Convenience items'],
      applications: ['Automation', 'Convenience', 'Monitoring', 'Control systems'],
    },
    {
      name: 'Seasonal Accessories',
      image: '/images/IMG_2780.jpg',
      description: 'Seasonal accessories for year-round pond care and protection',
      features: ['Seasonal specific', 'Weather protection', 'Easy storage', 'Durable materials', 'Versatile use'],
      products: ['Winter covers', 'Summer shades', 'Spring cleaning kits', 'Fall preparation tools', 'Seasonal decorations'],
      applications: ['Seasonal protection', 'Weather preparation', 'Seasonal maintenance', 'Year-round care'],
    }
  ];

  const professionalKits = [
    {
      name: 'Basic Maintenance Kit',
      image: '/images/IMG_2776.jpg',
      description: 'Essential tools for basic pond maintenance and care',
      includes: ['Pond skimmer', 'Algae brush', 'Debris net', 'Basic test kit', 'Cleaning solution', 'Maintenance guide'],
      features: ['Complete basic care', 'Easy to use', 'Professional quality', 'Comprehensive guide'],
      applications: ['Small ponds', 'Basic maintenance', 'DIY care', 'Essential tools'],
    },
    {
      name: 'Professional Maintenance Kit',
      image: '/images/IMG_2782.jpg',
      description: 'Comprehensive kit for professional-level pond maintenance',
      includes: ['All basic tools', 'Advanced test kit', 'Specialized brushes', 'Professional skimmer', 'Water treatments', 'Safety gear', 'Professional guide'],
      features: ['Professional grade', 'Complete maintenance', 'Advanced testing', 'Safety included'],
      applications: ['Medium to large ponds', 'Professional maintenance', 'Advanced care', 'Complete service'],
    },
    {
      name: 'Complete Pond Care Kit',
      image: '/images/IMG_2770.jpg',
      description: 'Ultimate kit for complete pond care and management',
      includes: ['All professional tools', 'Complete test equipment', 'Construction tools', 'Plant care tools', 'Fish accessories', 'Safety equipment', 'Seasonal accessories', 'Comprehensive guide'],
      features: ['Complete solution', 'Professional grade', 'All-in-one kit', 'Comprehensive care'],
      applications: ['Large ponds', 'Complete care', 'Professional service', 'Full maintenance'],
    }
  ];

  const installationServices = [
    {
      name: 'Tool Consultation',
      image: '/images/IMG_2775.jpg',
      description: 'Expert consultation to help you choose the right tools for your pond',
      includes: ['Pond assessment', 'Tool recommendations', 'Usage guidance', 'Maintenance planning', 'Purchase assistance'],
      benefits: ['Expert advice', 'Right tool selection', 'Cost savings', 'Proper maintenance'],
    },
    {
      name: 'Tool Installation Service',
      image: '/images/IMG_2779.jpg',
      description: 'Professional installation and setup of pond tools and accessories',
      includes: ['Tool installation', 'System setup', 'Testing and calibration', 'User training', 'Warranty service'],
      benefits: ['Professional installation', 'Proper setup', 'User training', 'Warranty protection'],
    },
    {
      name: 'Maintenance Training',
      image: '/images/IMG_2780.jpg',
      description: 'Comprehensive training on proper pond maintenance techniques and tool usage',
      includes: ['Hands-on training', 'Tool demonstration', 'Maintenance schedule', 'Best practices', 'Ongoing support'],
      benefits: ['Proper techniques', 'Confidence building', 'Time savings', 'Better results'],
    }
  ];

  const maintenanceTips = [
    'Clean tools after each use to prevent contamination',
    'Store tools in dry, protected areas to prevent rust',
    'Sharpen cutting tools regularly for optimal performance',
    'Check tool condition before each use',
    'Replace worn or damaged tools promptly',
    'Use tools only for their intended purpose',
    'Follow manufacturer instructions for proper care',
    'Keep safety equipment in good condition'
  ];

  return (
    <div className="tools-accessories-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>Pond Tools & Accessories</h1>
          <p>Professional-grade tools and accessories to keep your pond in perfect condition. From maintenance tools to decorative accessories, we have everything you need for complete pond care.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Expert Advice</a>
            <Link to="/pond-supplies" className="secondary-button">View All Supplies</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2775.jpg" alt="Professional pond tools and accessories for complete pond care" />
        </div>
      </section>

      {/* Tool Categories */}
      <section className="tools-section first-section-gradient">
        <div className="container">
          <h2>Our Tool Selection</h2>
          <p>We carry the highest quality pond tools from trusted manufacturers, ensuring reliable performance and long-lasting durability</p>
          <div className="tools-grid">
            {toolCategories.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-image">
                  <img src={tool.image} alt={tool.name} />
                </div>
                <div className="tool-info">
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <div className="tool-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tool-products">
                    <h4>Popular Products:</h4>
                    <ul>
                      {tool.products.map((product, productIndex) => (
                        <li key={productIndex}>{product}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tool-applications">
                    <h4>Perfect For:</h4>
                    <ul>
                      {tool.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tool-price">{tool.price}</div>
                  <a href="tel:(801) 590-8516" className="tool-cta">Call for Availability</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessory Categories */}
      <section className="accessories-section">
        <div className="container">
          <h2>Pond Accessories</h2>
          <p>Enhance your pond with our selection of decorative and functional accessories</p>
          <div className="accessories-grid">
            {accessoryCategories.map((accessory, index) => (
              <div key={index} className="accessory-card">
                <div className="accessory-image">
                  <img src={accessory.image} alt={accessory.name} />
                </div>
                <div className="accessory-info">
                  <h3>{accessory.name}</h3>
                  <p>{accessory.description}</p>
                  <div className="accessory-features">
                    <h4>Features:</h4>
                    <ul>
                      {accessory.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="accessory-products">
                    <h4>Products:</h4>
                    <ul>
                      {accessory.products.map((product, productIndex) => (
                        <li key={productIndex}>{product}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="accessory-applications">
                    <h4>Applications:</h4>
                    <ul>
                      {accessory.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="accessory-price">{accessory.price}</div>
                  <a href="tel:(801) 590-8516" className="accessory-cta">Call for Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Kits */}
      <section className="kits-section">
        <div className="container">
          <h2>Professional Tool Kits</h2>
          <p>Complete tool kits designed for different levels of pond care and maintenance</p>
          <div className="kits-grid">
            {professionalKits.map((kit, index) => (
              <div key={index} className="kit-card">
                <div className="kit-image">
                  <img src={kit.image} alt={kit.name} />
                </div>
                <div className="kit-info">
                  <h3>{kit.name}</h3>
                  <p>{kit.description}</p>
                  <div className="kit-includes">
                    <h4>Kit Includes:</h4>
                    <ul>
                      {kit.includes.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="kit-features">
                    <h4>Features:</h4>
                    <ul>
                      {kit.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="kit-applications">
                    <h4>Applications:</h4>
                    <ul>
                      {kit.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="kit-price">{kit.price}</div>
                  <a href="tel:(801) 590-8516" className="kit-cta">Call to Order</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="services-section">
        <div className="container">
          <h2>Professional Services</h2>
          <p>Expert services to help you get the most out of your pond tools and accessories</p>
          <div className="services-grid">
            {installationServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="service-includes">
                    <h4>Service Includes:</h4>
                    <ul>
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-price">{service.price}</div>
                  <a href="tel:(801) 590-8516" className="service-cta">Call for Service</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tools */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Our Pond Tools?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
  </svg>
              </div>
              <h3>Professional Grade</h3>
              <p>We only carry tools from trusted manufacturers with proven durability and performance</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💪</div>
              <h3>Durable Construction</h3>
              <p>All our tools are built to last with high-quality materials and professional construction</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#007BFF"/>
  </svg>
              </div>
              <h3>Expert Support</h3>
              <p>Our specialists provide guidance on tool selection and proper maintenance techniques</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
                </svg>
              </div>
              <h3>Quality Guarantee</h3>
              <p>All tools come with comprehensive warranties and satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="maintenance-section">
        <div className="container">
          <h2>Tool Maintenance & Care</h2>
          <p>Proper care ensures your tools perform optimally and last for years to come</p>
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
              <img src="/images/IMG_2779.jpg" alt="Pond tool maintenance and care" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Packages */}
      <section className="packages-section gradient-wipe-up">
        <div className="container">
          <h2>Tool Packages</h2>
          <p>Save money with our complete tool packages</p>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Starter Tool Package</h3>
              <div className="package-description">Perfect for small ponds and basic maintenance</div>
              <ul>
                <li>Basic maintenance tools</li>
                <li>Simple test kit</li>
                <li>Cleaning supplies</li>
                <li>Safety gear</li>
                <li>Maintenance guide</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card featured">
              <h3>Professional Tool Package</h3>
              <div className="package-description">Ideal for medium to large residential ponds</div>
              <ul>
                <li>All starter tools</li>
                <li>Advanced test equipment</li>
                <li>Specialized tools</li>
                <li>Professional accessories</li>
                <li>Safety equipment</li>
                <li>Professional guide</li>
                <li>Consultation service</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card">
              <h3>Complete Tool Package</h3>
              <div className="package-description">For large ponds and professional maintenance</div>
              <ul>
                <li>All professional tools</li>
                <li>Complete test equipment</li>
                <li>Construction tools</li>
                <li>Plant care tools</li>
                <li>Fish accessories</li>
                <li>Seasonal accessories</li>
                <li>Full safety gear</li>
                <li>Installation service</li>
                <li>Training included</li>
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
          <h2>Need Help Choosing the Right Tools?</h2>
          <p>Our experts can help you select the perfect tools and accessories for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsAccessoriesPage;
