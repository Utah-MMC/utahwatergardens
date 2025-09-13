import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './PondGalleryPage.css';

const CommercialProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '150+', label: 'Commercial Projects', icon: 'Projects' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '50+', label: 'Service Areas', icon: 'Areas' },
    { number: '100%', label: 'Client Satisfaction', icon: 'Quality' }
  ];

  const commercialProjects = [
    {
      title: 'Sandy Office Complex Water Feature',
      location: 'Sandy, UT',
      description: 'Large-scale water feature for corporate headquarters with multiple fountains and stone work',
      image: '/images/IMG_2770.jpg',
      features: ['Corporate Water Feature', 'Multiple Fountains', 'Stone Work', 'Landscaping', 'Maintenance System'],
      size: '5000 gallons',
      year: '2023',
      type: 'Corporate'
    },
    {
      title: 'Salt Lake City Hotel Lobby',
      location: 'Salt Lake City, UT',
      description: 'Elegant indoor water feature with LED lighting and premium materials',
      image: '/images/pondConstruction1000x800.webp',
      features: ['Indoor Installation', 'LED Lighting', 'Premium Materials', 'Sound System', 'Climate Control'],
      size: '2000 gallons',
      year: '2023',
      type: 'Hospitality'
    },
    {
      title: 'West Jordan Shopping Center',
      location: 'West Jordan, UT',
      description: 'Outdoor water feature for retail complex with interactive elements',
      image: '/images/IMG_2782.jpg',
      features: ['Interactive Features', 'Retail Integration', 'Public Access', 'Safety Systems', 'Maintenance Access'],
      size: '3000 gallons',
      year: '2022',
      type: 'Retail'
    },
    {
      title: 'Murray Medical Center',
      location: 'Murray, UT',
      description: 'Therapeutic water feature for healthcare facility with calming design',
      image: '/images/IMG_2775.jpg',
      features: ['Therapeutic Design', 'Healthcare Integration', 'Calming Features', 'Accessibility', 'Hygiene Systems'],
      size: '1500 gallons',
      year: '2022',
      type: 'Healthcare'
    },
    {
      title: 'Draper Corporate Campus',
      location: 'Draper, UT',
      description: 'Multi-level water feature system for technology company headquarters',
      image: '/images/IMG_2780.jpg',
      features: ['Multi-Level Design', 'Technology Integration', 'Employee Amenity', 'Energy Efficient', 'Smart Controls'],
      size: '8000 gallons',
      year: '2023',
      type: 'Corporate'
    },
    {
      title: 'Cottonwood Heights Restaurant',
      location: 'Cottonwood Heights, UT',
      description: 'Outdoor dining water feature with ambient lighting and sound',
      image: '/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg',
      features: ['Dining Integration', 'Ambient Lighting', 'Sound Features', 'Weather Resistant', 'Easy Maintenance'],
      size: '1200 gallons',
      year: '2023',
      type: 'Hospitality'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', count: 150 },
    { id: 'corporate', name: 'Corporate', count: 65 },
    { id: 'hospitality', name: 'Hospitality', count: 45 },
    { id: 'retail', name: 'Retail', count: 25 },
    { id: 'healthcare', name: 'Healthcare', count: 15 }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? commercialProjects 
    : commercialProjects.filter(project => 
        project.type.toLowerCase() === activeFilter
      );

  const commercialFeatures = [
    {
      title: 'Large-Scale Design',
      description: 'Specialized in commercial water features from 1,000 to 50,000+ gallons',
      icon: 'Scale'
    },
    {
      title: 'Professional Installation',
      description: 'Commercial-grade installation with minimal business disruption',
      icon: 'Installation'
    },
    {
      title: 'Maintenance Programs',
      description: 'Comprehensive maintenance programs to keep your water feature pristine',
      icon: 'Maintenance'
    },
    {
      title: 'Compliance & Safety',
      description: 'Full compliance with commercial building codes and safety standards',
      icon: 'Safety'
    }
  ];

  const serviceTypes = [
    'Corporate Water Features',
    'Hotel & Resort Features',
    'Retail Center Installations',
    'Healthcare Facility Features',
    'Restaurant Water Elements',
    'Educational Campus Features',
    'Government Building Installations',
    'Mixed-Use Development Features'
  ];

  return (
    <>
      <SEO 
        title="Commercial Water Features - Large-Scale Business Water Gardens | Utah Water Gardens"
        description="Professional commercial water feature design and installation. View our gallery of 150+ large-scale business water gardens, corporate fountains, and commercial installations across Utah. Serving hotels, offices, retail centers, and healthcare facilities."
        keywords="commercial water features, business water gardens, corporate fountains, commercial pond installation, hotel water features, retail water features, office water features, healthcare water features, utah commercial pond builders, large-scale water features, commercial pond design"
        canonical="https://utahwatergardens.com/pond-gallery/commercial"
      />
      <div className={`pond-gallery-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <PageHero
          title="Commercial Projects"
          subtitle="Professional large-scale water features for businesses, hotels, retail centers, and corporate facilities. Transform your commercial space with stunning water installations."
          backgroundImage="/images/pondConstruction1000x800.webp"
          stats={stats}
        />

        {/* Main Content Wrapper */}
        <div className="main-content-gradient">
          {/* Main Content */}
          <section className="pond-gallery-main-content">
            <div className="container">
              <div className="page-intro">
                <h2>Professional Commercial Water Features</h2>
                <p>
                  Elevate your business environment with our professional commercial water feature designs. 
                  From corporate headquarters to retail centers, we create stunning large-scale installations 
                  that enhance your brand and provide lasting value.
                </p>
                
                <div className="intro-images">
                  <img src="/images/IMG_2770.jpg" alt="Large-scale commercial water feature installation" className="intro-image" />
                  <img src="/images/pondConstruction1000x800.webp" alt="Professional commercial pond construction" className="intro-image" />
                </div>
                
                <div className="portfolio-overview">
                  <h3>Commercial Water Feature Solutions</h3>
                  <p>
                    At Utah Water Gardens, we specialize in creating impressive commercial water features that 
                    enhance business environments and create lasting impressions. Our portfolio showcases over 
                    150 completed commercial projects across Utah, from corporate headquarters to retail centers, 
                    hotels, and healthcare facilities. Each project reflects our commitment to professional 
                    installation, innovative design, and long-term reliability.
                  </p>
                  <p>
                    Our experienced commercial team understands the unique requirements of business installations, 
                    including compliance with building codes, minimal disruption to operations, and comprehensive 
                    maintenance programs. Whether you're looking for an impressive lobby centerpiece, a calming 
                    outdoor feature, or a large-scale corporate installation, our commercial gallery demonstrates 
                    the range and quality of our work throughout Utah's business community.
                  </p>
                </div>
              </div>

              {/* Service Types */}
              <div className="featured-projects">
                <h2>Commercial Service Types</h2>
                <p>Comprehensive water feature solutions for all types of commercial properties</p>
                
                <div className="projects-grid">
                  {serviceTypes.map((service, index) => (
                    <div key={index} className="project-card">
                      <div className="project-content">
                        <h3>{service}</h3>
                        <p>Professional design and installation for commercial applications</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div className="featured-projects">
                <h2>Featured Commercial Projects</h2>
                <p>Showcasing some of our most impressive commercial water feature installations</p>
                
                {/* Filter Buttons */}
                <div className="project-filters">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter.id)}
                    >
                      {filter.name} ({filter.count})
                    </button>
                  ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                  {filteredProjects.map((project, index) => (
                    <div key={index} className="project-card">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                        <div className="project-category">{project.type}</div>
                      </div>
                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-details">
                          <span className="project-size">{project.size}</span>
                          <span className="project-year">{project.year}</span>
                        </div>
                        <div className="project-features">
                          <h4>Features:</h4>
                          <ul>
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Commercial Features Section */}
          <section className="why-choose-section">
            <div className="container">
              <h2>Why Choose Our Commercial Water Features?</h2>
              <div className="benefits-grid">
                {commercialFeatures.map((feature, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Commercial Process Section */}
          <section className="design-process-section">
            <div className="container">
              <h2>Our Commercial Installation Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Site Assessment</h3>
                  <p>We conduct a comprehensive site assessment to understand your business needs, building requirements, and operational constraints.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Design & Planning</h3>
                  <p>Our design team creates detailed plans that integrate with your building systems and meet all commercial building codes and requirements.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Professional Installation</h3>
                  <p>Our experienced commercial installation team works efficiently to minimize business disruption while ensuring quality construction.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Maintenance Program</h3>
                  <p>We provide comprehensive maintenance programs and training to ensure your water feature remains beautiful and operational for years to come.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Materials & Technology Section */}
          <section className="materials-section">
            <div className="container">
              <h2>Commercial-Grade Materials & Technology</h2>
              <div className="materials-content">
                <div className="materials-text">
                  <p>
                    We use only commercial-grade materials and equipment specifically designed for high-traffic 
                    business environments. Our installations feature industrial-strength EPDM liners, commercial 
                    pumps, and advanced filtration systems designed for continuous operation and minimal maintenance.
                  </p>
                  <p>
                    Our commercial construction process includes proper structural engineering, professional 
                    plumbing integration, and compliance with all building codes. We work with trusted commercial 
                    suppliers to source the best materials available, ensuring durability and long-term performance 
                    in demanding business environments.
                  </p>
                </div>
                <div className="materials-images">
                  <img src="/images/pondConstruction1000x800.webp" alt="Commercial-grade pond construction materials" className="materials-image" />
                  <img src="/images/IMG_2782.jpg" alt="Professional commercial water feature installation" className="materials-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="service-areas-section">
            <div className="container">
              <h2>Commercial Service Areas</h2>
              <p className="service-areas-intro">
                We proudly serve businesses throughout the greater Salt Lake City area and surrounding communities 
                with our commercial water feature design and construction services. Our portfolio includes projects 
                throughout Utah's major business districts and commercial centers.
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

          {/* Store Information */}
          <section className="store-info-section">
            <div className="container">
              <div className="store-info-content">
                <div className="store-info-text">
                  <h2>Start Your Commercial Project Today</h2>
                  <p>
                    Ready to enhance your business with a stunning commercial water feature? Contact us for a 
                    free consultation and let us create an impressive installation for your commercial property.
                  </p>
                  <div className="store-details">
                    <div className="store-detail">
                      <i className="fas fa-map-marker-alt" aria-hidden></i>
                      <span>5911 S 1300 E, Salt Lake City, UT 84121</span>
                    </div>
                    <div className="store-detail">
                      <i className="fas fa-phone" aria-hidden></i>
                      <a href="tel:(801) 590-8516">(801) 590-8516</a>
                    </div>
                    <div className="store-detail">
                      <i className="fas fa-clock" aria-hidden></i>
                      <span>Monday - Friday: 10:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                  <div className="store-cta-buttons">
                    <a href="tel:(801) 590-8516" className="btn btn-primary">Call for Consultation</a>
                    <Link to="/free-estimate" className="btn btn-secondary">Get Free Estimate</Link>
                  </div>
                </div>
                <div className="store-info-image">
                  <img src="/images/735e2dfc82cdc5f4ee2cede5bd9c631f-enhance-4x.jpeg" alt="Professional commercial water feature projects" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/pondConstruction1000x800.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <h2>Ready to Enhance Your Business with a Commercial Water Feature?</h2>
            <p>Let us create an impressive water installation that elevates your commercial space.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
              <Link to="/free-estimate" className="btn btn-secondary">Get Free Estimate</Link>
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



export default CommercialProjectsPage;
