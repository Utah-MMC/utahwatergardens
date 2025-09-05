import React from 'react';
import { Link } from 'react-router-dom';
import './PondLinersPage.css';

const PondLinersPage = () => {
  const linerTypes = [
    {
      name: 'EPDM Rubber Liners',
      image: '/images/IMG_2775.jpg',
      description: 'Premium synthetic rubber liners known for their durability and flexibility',
      features: ['45+ year lifespan', 'Fish safe', 'UV resistant', 'Extremely flexible', 'Easy to install'],
      thicknesses: ['30 mil', '45 mil', '60 mil'],
      applications: ['Koi ponds', 'Large water features', 'Commercial ponds', 'Long-term projects'],
      price: 'Starting at $2.50/sq ft'
    },
    {
      name: 'PVC Liners',
      image: '/images/IMG_2779.jpg',
      description: 'Cost-effective vinyl liners perfect for budget-conscious projects',
      features: ['Affordable', 'Easy to handle', 'Good flexibility', 'Quick installation', 'Wide availability'],
      thicknesses: ['20 mil', '30 mil', '40 mil'],
      applications: ['Small ponds', 'Garden features', 'Temporary installations', 'Budget projects'],
      price: 'Starting at $1.25/sq ft'
    },
    {
      name: 'HDPE Liners',
      image: '/images/IMG_2780.jpg',
      description: 'High-density polyethylene liners for industrial and commercial applications',
      features: ['Chemical resistant', 'High strength', 'Temperature stable', 'Long lifespan', 'Professional grade'],
      thicknesses: ['40 mil', '60 mil', '80 mil'],
      applications: ['Commercial ponds', 'Industrial water features', 'Large installations', 'Harsh environments'],
      price: 'Starting at $3.50/sq ft'
    },
    {
      name: 'Firestone PondGard',
      image: '/images/IMG_2776.jpg',
      description: 'Premium EPDM liners with enhanced fish safety and warranty protection',
      features: ['Fish safe certified', '25-year warranty', 'Professional grade', 'Easy seaming', 'Proven track record'],
      thicknesses: ['45 mil', '60 mil'],
      applications: ['Premium koi ponds', 'Professional installations', 'Fish breeding ponds', 'High-value projects'],
      price: 'Starting at $3.75/sq ft'
    }
  ];

  const underlaymentMaterials = [
    {
      name: 'Geotextile Fabric',
      image: '/images/IMG_2782.jpg',
      description: 'Professional underlayment fabric to protect your liner from punctures',
      features: ['Puncture protection', 'Weed barrier', 'Moisture management', 'Easy to install'],
      applications: ['All liner types', 'Rocky soil', 'Root protection', 'Professional installations'],
      price: 'Starting at $0.75/sq ft'
    },
    {
      name: 'Sand Underlayment',
      image: '/images/IMG_2770.jpg',
      description: 'Natural sand base for smooth liner installation and drainage',
      features: ['Natural material', 'Good drainage', 'Smooth surface', 'Cost effective'],
      applications: ['Small projects', 'Budget installations', 'Natural ponds', 'DIY projects'],
      price: 'Starting at $0.25/sq ft'
    },
    {
      name: 'Carpet Underlayment',
      image: '/images/IMG_2775.jpg',
      description: 'Recycled carpet padding for maximum liner protection',
      features: ['Maximum protection', 'Recycled material', 'Thick cushioning', 'Professional grade'],
      applications: ['Premium installations', 'Rocky terrain', 'Commercial projects', 'High-value ponds'],
      price: 'Starting at $1.50/sq ft'
    }
  ];

  const seamingSupplies = [
    {
      name: 'EPDM Seaming Tape',
      image: '/images/IMG_2779.jpg',
      description: 'Professional-grade tape for creating watertight seams in EPDM liners',
      features: ['Watertight seals', 'UV resistant', 'Easy application', 'Professional results'],
      applications: ['EPDM liners', 'Large installations', 'Professional projects', 'Seam repairs'],
      price: 'Starting at $15/roll'
    },
    {
      name: 'PVC Welding Rods',
      image: '/images/IMG_2780.jpg',
      description: 'Welding rods for creating strong, permanent PVC liner seams',
      features: ['Permanent bonds', 'Chemical resistant', 'Professional strength', 'Long-lasting'],
      applications: ['PVC liners', 'Industrial projects', 'Commercial installations', 'Seam repairs'],
      price: 'Starting at $8/pack'
    },
    {
      name: 'Seam Cleaner & Primer',
      image: '/images/IMG_2776.jpg',
      description: 'Cleaning and priming solutions for optimal liner adhesion',
      features: ['Optimal adhesion', 'Professional results', 'Easy application', 'Long-lasting bonds'],
      applications: ['All liner types', 'Seam preparation', 'Repair work', 'Professional installations'],
      price: 'Starting at $12/bottle'
    }
  ];

  const installationServices = [
    {
      name: 'Professional Installation',
      image: '/images/IMG_2782.jpg',
      description: 'Complete liner installation by certified technicians',
      features: ['Site preparation', 'Underlayment installation', 'Liner placement', 'Seaming', 'Testing'],
      benefits: ['Professional results', 'Warranty protection', 'Time savings', 'Peace of mind'],
      price: 'Starting at $8/sq ft'
    },
    {
      name: 'Custom Liner Fabrication',
      image: '/images/IMG_2770.jpg',
      description: 'Custom-sized liners fabricated to your exact specifications',
      features: ['Precise sizing', 'Minimal seams', 'Custom shapes', 'Professional cutting', 'Quality control'],
      benefits: ['Perfect fit', 'Reduced waste', 'Professional appearance', 'Longer lifespan'],
      price: 'Starting at $12/sq ft'
    },
    {
      name: 'Liner Repair Services',
      image: '/images/IMG_2775.jpg',
      description: 'Professional repair services for damaged or leaking liners',
      features: ['Leak detection', 'Professional repair', 'Warranty work', 'Preventive maintenance'],
      benefits: ['Extend liner life', 'Prevent water loss', 'Maintain pond health', 'Cost savings'],
      price: 'Starting at $150'
    }
  ];

  const sizingGuide = [
    {
      pondSize: 'Small (100-500 gallons)',
      linerSize: 'Add 2-3 feet to dimensions',
      underlayment: 'Geotextile fabric recommended',
      installation: 'DIY friendly with guidance',
      recommendations: ['30 mil EPDM', 'PVC liner', 'Professional underlayment']
    },
    {
      pondSize: 'Medium (500-2000 gallons)',
      linerSize: 'Add 3-4 feet to dimensions',
      underlayment: 'Geotextile fabric required',
      installation: 'Professional recommended',
      recommendations: ['45 mil EPDM', 'Professional underlayment', 'Expert installation']
    },
    {
      pondSize: 'Large (2000-5000 gallons)',
      linerSize: 'Add 4-5 feet to dimensions',
      underlayment: 'Premium underlayment required',
      installation: 'Professional required',
      recommendations: ['60 mil EPDM', 'Premium underlayment', 'Professional installation']
    },
    {
      pondSize: 'Commercial (5000+ gallons)',
      linerSize: 'Add 5-6 feet to dimensions',
      underlayment: 'Industrial grade underlayment',
      installation: 'Professional team required',
      recommendations: ['80 mil HDPE', 'Industrial underlayment', 'Full professional service']
    }
  ];

  const maintenanceTips = [
    'Inspect liner monthly for damage or wear',
    'Keep liner surface clean and free of debris',
    'Avoid sharp objects near liner surface',
    'Monitor water quality to prevent liner degradation',
    'Check seams annually for signs of separation',
    'Protect liner from UV exposure when possible',
    'Use fish-safe cleaning products only',
    'Have professional inspection every 2-3 years'
  ];

  return (
    <div className="pond-liners-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.8), rgba(16, 185, 129, 0.8)), url('/images/pond_liner_roll.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>Pond Liners & Underlayment</h1>
          <p>Professional-grade pond liners and underlayment materials to create watertight, long-lasting ponds. From small garden features to large commercial installations.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Expert Advice</a>
            <Link to="/pond-supplies" className="secondary-button">View All Supplies</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2775.jpg" alt="Professional pond liners and underlayment materials" />
        </div>
      </section>

      {/* Liner Types */}
      <section className="liner-types-section">
        <div className="container">
          <h2>Our Liner Selection</h2>
          <p>We carry the highest quality pond liners from trusted manufacturers, ensuring your pond stays watertight for decades</p>
          <div className="liner-grid">
            {linerTypes.map((liner, index) => (
              <div key={index} className="liner-card">
                <div className="liner-image">
                  <img src={liner.image} alt={liner.name} />
                </div>
                <div className="liner-info">
                  <h3>{liner.name}</h3>
                  <p>{liner.description}</p>
                  <div className="liner-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {liner.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="liner-thicknesses">
                    <h4>Available Thicknesses:</h4>
                    <ul>
                      {liner.thicknesses.map((thickness, thicknessIndex) => (
                        <li key={thicknessIndex}>{thickness}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="liner-applications">
                    <h4>Perfect For:</h4>
                    <ul>
                      {liner.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="liner-price">{liner.price}</div>
                  <a href="tel:(801) 590-8516" className="liner-cta">Call for Availability</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Underlayment Materials */}
      <section className="underlayment-section">
        <div className="container">
          <h2>Underlayment Materials</h2>
          <p>Protect your liner investment with professional underlayment materials designed for maximum durability</p>
          <div className="underlayment-grid">
            {underlaymentMaterials.map((material, index) => (
              <div key={index} className="underlayment-card">
                <div className="underlayment-image">
                  <img src={material.image} alt={material.name} />
                </div>
                <div className="underlayment-info">
                  <h3>{material.name}</h3>
                  <p>{material.description}</p>
                  <div className="underlayment-features">
                    <h4>Features:</h4>
                    <ul>
                      {material.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="underlayment-applications">
                    <h4>Applications:</h4>
                    <ul>
                      {material.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="underlayment-price">{material.price}</div>
                  <a href="tel:(801) 590-8516" className="underlayment-cta">Call for Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seaming Supplies */}
      <section className="seaming-section">
        <div className="container">
          <h2>Seaming & Installation Supplies</h2>
          <p>Professional-grade supplies for creating watertight seams and ensuring proper liner installation</p>
          <div className="seaming-grid">
            {seamingSupplies.map((supply, index) => (
              <div key={index} className="seaming-card">
                <div className="seaming-image">
                  <img src={supply.image} alt={supply.name} />
                </div>
                <div className="seaming-info">
                  <h3>{supply.name}</h3>
                  <p>{supply.description}</p>
                  <div className="seaming-features">
                    <h4>Features:</h4>
                    <ul>
                      {supply.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="seaming-applications">
                    <h4>Applications:</h4>
                    <ul>
                      {supply.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="seaming-price">{supply.price}</div>
                  <a href="tel:(801) 590-8516" className="seaming-cta">Call for Details</a>
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
          <p>Our certified technicians provide complete liner installation services for optimal results</p>
          <div className="installation-grid">
            {installationServices.map((service, index) => (
              <div key={index} className="installation-card">
                <div className="installation-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="installation-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="installation-features">
                    <h4>Service Includes:</h4>
                    <ul>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
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

      {/* Liner Sizing Guide */}
      <section className="sizing-section">
        <div className="container">
          <h2>Liner Sizing Guide</h2>
          <p>Choose the right liner size and underlayment for your specific pond project</p>
          <div className="sizing-grid">
            {sizingGuide.map((size, index) => (
              <div key={index} className="size-card">
                <h3>{size.pondSize}</h3>
                <div className="size-details">
                  <div className="size-liner">
                    <strong>Liner Size:</strong> {size.linerSize}
                  </div>
                  <div className="size-underlayment">
                    <strong>Underlayment:</strong> {size.underlayment}
                  </div>
                  <div className="size-installation">
                    <strong>Installation:</strong> {size.installation}
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

      {/* Why Choose Our Liners */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Our Pond Liners?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <h3>Premium Quality</h3>
              <p>We only carry liners from trusted manufacturers with proven track records</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔧</div>
              <h3>Expert Guidance</h3>
              <p>Our specialists help you choose the perfect liner for your specific needs</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📞</div>
              <h3>Professional Support</h3>
              <p>We provide installation guidance and ongoing technical support</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💎</div>
              <h3>Warranty Protection</h3>
              <p>All our liners come with comprehensive manufacturer warranties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Care */}
      <section className="maintenance-section">
        <div className="container">
          <h2>Liner Maintenance & Care</h2>
          <p>Proper maintenance ensures your liner lasts for decades and maintains its watertight seal</p>
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
              <img src="/images/IMG_2780.jpg" alt="Pond liner maintenance and care" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Packages */}
      <section className="packages-section">
        <div className="container">
          <h2>Complete Liner Packages</h2>
          <p>Save money with our complete liner installation packages</p>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Basic Liner Package</h3>
              <div className="package-price">$4.50/sq ft</div>
              <div className="package-description">Perfect for small ponds and DIY projects</div>
              <ul>
                <li>30 mil EPDM liner</li>
                <li>Geotextile underlayment</li>
                <li>Seaming supplies</li>
                <li>Installation guide</li>
                <li>Phone support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card featured">
              <h3>Professional Liner Package</h3>
              <div className="package-price">$8.50/sq ft</div>
              <div className="package-description">Ideal for medium to large residential ponds</div>
              <ul>
                <li>45 mil EPDM liner</li>
                <li>Premium underlayment</li>
                <li>Professional installation</li>
                <li>Seaming services</li>
                <li>Warranty coverage</li>
                <li>Post-installation support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card">
              <h3>Commercial Liner Package</h3>
              <div className="package-price">$15.50/sq ft</div>
              <div className="package-description">For large ponds and commercial applications</div>
              <ul>
                <li>60 mil EPDM or HDPE liner</li>
                <li>Industrial underlayment</li>
                <li>Full professional installation</li>
                <li>Custom fabrication</li>
                <li>Extended warranty</li>
                <li>24/7 support</li>
                <li>Performance monitoring</li>
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
          backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.8), rgba(16, 185, 129, 0.8)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h2>Ready to Build Your Pond?</h2>
          <p>Our experts can help you choose the perfect liner and underlayment for your project</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PondLinersPage;
