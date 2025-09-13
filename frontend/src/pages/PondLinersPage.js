import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './PondLinersPage.css';

const PondLinersPage = () => {
  const stats = [
    { number: '50+', label: 'Liner Types', icon: 'Types' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '100%', label: 'Quality Guaranteed', icon: 'Quality' },
    { number: '25+', label: 'Year Warranty', icon: 'Warranty' }
  ];

  const linerTypes = [
    {
      name: 'EPDM Rubber Liners',
      image: '/images/IMG_2775.jpg',
      description: 'Premium synthetic rubber liners known for their durability and flexibility',
      features: ['45+ year lifespan', 'Fish safe', 'UV resistant', 'Extremely flexible', 'Easy to install'],
      thicknesses: ['30 mil', '45 mil', '60 mil'],
      applications: ['Koi ponds', 'Large water features', 'Commercial ponds', 'Long-term projects'],
    },
    {
      name: 'PVC Liners',
      image: '/images/IMG_2779.jpg',
      description: 'Cost-effective vinyl liners perfect for budget-conscious projects',
      features: ['Affordable', 'Easy to handle', 'Good flexibility', 'Quick installation', 'Wide availability'],
      thicknesses: ['20 mil', '30 mil', '40 mil'],
      applications: ['Small ponds', 'Garden features', 'Temporary installations', 'Budget projects'],
    },
    {
      name: 'HDPE Liners',
      image: '/images/IMG_2780.jpg',
      description: 'High-density polyethylene liners for industrial and commercial applications',
      features: ['Chemical resistant', 'High strength', 'Temperature stable', 'Long lifespan', 'Professional grade'],
      thicknesses: ['40 mil', '60 mil', '80 mil'],
      applications: ['Commercial ponds', 'Industrial water features', 'Large installations', 'Harsh environments'],
    },
    {
      name: 'Firestone PondGard',
      image: '/images/IMG_2776.jpg',
      description: 'Premium EPDM liners with enhanced fish safety and warranty protection',
      features: ['Fish safe certified', '25-year warranty', 'Professional grade', 'Easy seaming', 'Proven track record'],
      thicknesses: ['45 mil', '60 mil'],
      applications: ['Premium koi ponds', 'Professional installations', 'Fish breeding ponds', 'High-value projects'],
    }
  ];

  const underlaymentMaterials = [
    {
      name: 'Geotextile Fabric',
      image: '/images/IMG_2782.jpg',
      description: 'Professional underlayment fabric to protect your liner from punctures',
      features: ['Puncture protection', 'Weed barrier', 'Moisture management', 'Easy to install'],
      applications: ['All liner types', 'Rocky soil', 'Root protection', 'Professional installations'],
    },
    {
      name: 'Sand Underlayment',
      image: '/images/IMG_2770.jpg',
      description: 'Natural sand base for smooth liner installation and drainage',
      features: ['Natural material', 'Good drainage', 'Smooth surface', 'Cost effective'],
      applications: ['Small projects', 'Budget installations', 'Natural ponds', 'DIY projects'],
    },
    {
      name: 'Carpet Underlayment',
      image: '/images/IMG_2775.jpg',
      description: 'Recycled carpet padding for maximum liner protection',
      features: ['Maximum protection', 'Recycled material', 'Thick cushioning', 'Professional grade'],
      applications: ['Premium installations', 'Rocky terrain', 'Commercial projects', 'High-value ponds'],
    }
  ];

  const seamingSupplies = [
    {
      name: 'EPDM Seaming Tape',
      image: '/images/IMG_2779.jpg',
      description: 'Professional-grade tape for creating watertight seams in EPDM liners',
      features: ['Watertight seals', 'UV resistant', 'Easy application', 'Professional results'],
      applications: ['EPDM liners', 'Large installations', 'Professional projects', 'Seam repairs'],
    },
    {
      name: 'PVC Welding Rods',
      image: '/images/IMG_2780.jpg',
      description: 'Welding rods for creating strong, permanent PVC liner seams',
      features: ['Permanent bonds', 'Chemical resistant', 'Professional strength', 'Long-lasting'],
      applications: ['PVC liners', 'Industrial projects', 'Commercial installations', 'Seam repairs'],
    },
    {
      name: 'Seam Cleaner & Primer',
      image: '/images/IMG_2776.jpg',
      description: 'Cleaning and priming solutions for optimal liner adhesion',
      features: ['Optimal adhesion', 'Professional results', 'Easy application', 'Long-lasting bonds'],
      applications: ['All liner types', 'Seam preparation', 'Repair work', 'Professional installations'],
    }
  ];

  const installationServices = [
    {
      name: 'Professional Installation',
      image: '/images/IMG_2782.jpg',
      description: 'Complete liner installation by certified technicians',
      features: ['Site preparation', 'Underlayment installation', 'Liner placement', 'Seaming', 'Testing'],
      benefits: ['Professional results', 'Warranty protection', 'Time savings', 'Peace of mind'],
    },
    {
      name: 'Custom Liner Fabrication',
      image: '/images/IMG_2770.jpg',
      description: 'Custom-sized liners fabricated to your exact specifications',
      features: ['Precise sizing', 'Minimal seams', 'Custom shapes', 'Professional cutting', 'Quality control'],
      benefits: ['Perfect fit', 'Reduced waste', 'Professional appearance', 'Longer lifespan'],
    },
    {
      name: 'Liner Repair Services',
      image: '/images/IMG_2775.jpg',
      description: 'Professional repair services for damaged or leaking liners',
      features: ['Leak detection', 'Professional repair', 'Warranty work', 'Preventive maintenance'],
      benefits: ['Extend liner life', 'Prevent water loss', 'Maintain pond health', 'Cost savings'],
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
    <>
      <SEO 
        title="Pond Liners & Underlayment - Premium Waterproof Liners | Utah Water Gardens"
        description="Professional-grade pond liners and underlayment materials in Utah. EPDM, PVC, HDPE liners with 25+ year warranties. 50+ liner types, 15+ years experience. Serving Salt Lake County, Davis County, and surrounding areas."
        keywords="pond liners, EPDM liners, PVC liners, HDPE liners, pond underlayment, waterproof liners, utah pond liners, salt lake county pond liners, davis county pond liners, pond liner installation, pond liner repair"
        canonical="https://utahwatergardens.com/pond-supplies/liners"
      />
      <div className="pond-liners-page">
        <PageHero 
          title="Pond Liners & Underlayment"
          subtitle="Professional-grade pond liners and underlayment materials to create watertight, long-lasting ponds. From small garden features to large commercial installations."
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          backgroundImageAlt="Beautiful pond with koi fish and natural stone edges"
          stats={stats}
        />

      {/* Liner Types */}
      <section className="liner-types-section first-section-gradient">
        <div className="container">
          <h2>Our Liner Selection</h2>
          <p>We carry the highest quality pond liners from trusted manufacturers, ensuring your pond stays watertight for decades</p>
          <div className="liner-grid">
            {linerTypes.map((liner, index) => (
              <Link key={index} to="/pond-supplies/liners" className="liner-card">
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
                  <a href="tel:(801) 590-8516" className="liner-cta" onClick={(e) => e.stopPropagation()}>Call for Availability</a>
                </div>
              </Link>
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
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H20C21.1 8 22 8.9 22 10V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V10C2 8.9 2.9 8 4 8H6V6C6 3.79 7.79 2 10 2H14C16.21 2 18 3.79 18 6V8ZM16 8V6C16 4.9 15.1 4 14 4H10C8.9 4 8 4.9 8 6V8H16ZM4 10V20H20V10H4Z" fill="#1e40af"/>
                </svg>
              </div>
              <h3>Premium Quality</h3>
              <p>We only carry liners from trusted manufacturers with proven track records</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
  </svg>
              </div>
              <h3>Expert Guidance</h3>
              <p>Our specialists help you choose the perfect liner for your specific needs</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#007BFF"/>
  </svg>
              </div>
              <h3>Professional Support</h3>
              <p>We provide installation guidance and ongoing technical support</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
                </svg>
              </div>
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
      <section className="packages-section gradient-wipe-up">
        <div className="container">
          <h2>Complete Liner Packages</h2>
          <p>Save money with our complete liner installation packages</p>
          <div className="packages-grid">
            <Link to="/pond-supplies/liners" className="package-card">
              <h3>Basic Liner Package</h3>
              <div className="package-description">Perfect for small ponds and DIY projects</div>
              <ul>
                <li>30 mil EPDM liner</li>
                <li>Geotextile underlayment</li>
                <li>Seaming supplies</li>
                <li>Installation guide</li>
                <li>Phone support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta" onClick={(e) => e.stopPropagation()}>Call to Order</a>
            </Link>
            <Link to="/pond-supplies/liners" className="package-card featured">
              <h3>Professional Liner Package</h3>
              <div className="package-description">Ideal for medium to large residential ponds</div>
              <ul>
                <li>45 mil EPDM liner</li>
                <li>Premium underlayment</li>
                <li>Professional installation</li>
                <li>Seaming services</li>
                <li>Warranty coverage</li>
                <li>Post-installation support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta" onClick={(e) => e.stopPropagation()}>Call to Order</a>
            </Link>
            <Link to="/pond-supplies/liners" className="package-card">
              <h3>Commercial Liner Package</h3>
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
              <a href="tel:(801) 590-8516" className="package-cta" onClick={(e) => e.stopPropagation()}>Call to Order</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas-section">
        <div className="container">
          <h2>Areas We Serve</h2>
          <p className="service-areas-intro">
            We proudly serve the greater Salt Lake City area and surrounding communities with our premium 
            pond liners and underlayment materials. Our experienced team provides expert installation throughout Utah.
          </p>
          
          <div className="service-areas-grid">
            <div className="service-area-group">
              <h3>Salt Lake County</h3>
              <div className="cities-list">
                <span>Salt Lake City</span>
                <span>West Jordan</span>
                <span>Murray</span>
                <span>Sandy</span>
                <span>West Valley City</span>
                <span>Draper</span>
                <span>Cottonwood Heights</span>
                <span>Holladay</span>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Davis County</h3>
              <div className="cities-list">
                <span>Layton</span>
                <span>Bountiful</span>
                <span>Farmington</span>
                <span>Centerville</span>
                <span>Kaysville</span>
                <span>Clearfield</span>
                <span>Clinton</span>
                <span>Syracuse</span>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Utah County</h3>
              <div className="cities-list">
                <span>Provo</span>
                <span>Orem</span>
                <span>American Fork</span>
                <span>Lehi</span>
                <span>Pleasant Grove</span>
                <span>Spanish Fork</span>
                <span>Springville</span>
                <span>Alpine</span>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Weber County</h3>
              <div className="cities-list">
                <span>Ogden</span>
                <span>Roy</span>
                <span>Clearfield</span>
                <span>South Ogden</span>
                <span>North Ogden</span>
                <span>Riverdale</span>
                <span>Washington Terrace</span>
                <span>Farr West</span>
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
          <h2>Ready to Build Your Pond?</h2>
          <p>Our experts can help you choose the perfect liner and underlayment for your project</p>
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



export default PondLinersPage;
