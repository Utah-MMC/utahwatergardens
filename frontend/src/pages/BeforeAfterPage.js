import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './PondGalleryPage.css';

const BeforeAfterPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '100+', label: 'Transformations', icon: 'Projects' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '50+', label: 'Service Areas', icon: 'Areas' },
    { number: '100%', label: 'Client Satisfaction', icon: 'Quality' }
  ];

  const transformationProjects = [
    {
      title: 'Neglected Pond to Koi Paradise',
      location: 'Sandy, UT',
      description: 'Complete transformation of an overgrown, algae-filled pond into a beautiful koi habitat',
      beforeImage: '/images/cleaningBefore1000x750.webp',
      afterImage: '/images/koi-topaz-enhance-4x.jpeg',
      features: ['Algae Removal', 'New Filtration', 'Koi Addition', 'Landscaping', 'Water Quality'],
      type: 'Renovation',
      year: '2023',
      duration: '2 weeks'
    },
    {
      title: 'Outdated Fountain to Modern Feature',
      location: 'West Jordan, UT',
      description: 'Modernization of an old, non-functional fountain into a contemporary water feature',
      beforeImage: '/images/IMG_2770.jpg',
      afterImage: '/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg',
      features: ['Complete Rebuild', 'Modern Design', 'LED Lighting', 'Energy Efficiency', 'Low Maintenance'],
      type: 'Modernization',
      year: '2023',
      duration: '1 week'
    },
    {
      title: 'Empty Space to Water Garden',
      location: 'Murray, UT',
      description: 'Transformation of a bare backyard space into a complete water garden ecosystem',
      beforeImage: '/images/IMG_2775.jpg',
      afterImage: '/images/IMG_2782.jpg',
      features: ['Complete Installation', 'Ecosystem Design', 'Plant Integration', 'Wildlife Habitat', 'Natural Filtration'],
      type: 'New Installation',
      year: '2022',
      duration: '3 weeks'
    },
    {
      title: 'Damaged Pond Restoration',
      location: 'Draper, UT',
      description: 'Restoration of a damaged pond with leaking liner and broken equipment',
      beforeImage: '/images/IMG_2780.jpg',
      afterImage: '/images/IMG_2775.jpg',
      features: ['Liner Replacement', 'Equipment Upgrade', 'Structural Repair', 'Water Quality', 'Aesthetic Enhancement'],
      type: 'Restoration',
      year: '2023',
      duration: '2 weeks'
    },
    {
      title: 'Small Pond to Large Water Feature',
      location: 'Cottonwood Heights, UT',
      description: 'Expansion of a small pond into a large, multi-level water feature system',
      beforeImage: '/images/IMG_2770.jpg',
      afterImage: '/images/IMG_2782.jpg',
      features: ['Size Expansion', 'Multi-Level Design', 'Advanced Filtration', 'Waterfall Addition', 'Landscaping'],
      type: 'Expansion',
      year: '2022',
      duration: '4 weeks'
    },
    {
      title: 'Overgrown to Pristine',
      location: 'Holladay, UT',
      description: 'Complete cleanup and restoration of an overgrown, neglected water feature',
      beforeImage: '/images/cleaningBefore1000x750.webp',
      afterImage: '/images/IMG_2775.jpg',
      features: ['Complete Cleanup', 'Plant Management', 'Water Quality', 'Equipment Service', 'Maintenance Plan'],
      type: 'Cleanup',
      year: '2023',
      duration: '1 week'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Transformations', count: 100 },
    { id: 'renovation', name: 'Renovations', count: 35 },
    { id: 'modernization', name: 'Modernizations', count: 25 },
    { id: 'restoration', name: 'Restorations', count: 20 },
    { id: 'expansion', name: 'Expansions', count: 15 },
    { id: 'cleanup', name: 'Cleanups', count: 5 }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? transformationProjects 
    : transformationProjects.filter(project => 
        project.type.toLowerCase().includes(activeFilter)
      );

  const transformationTypes = [
    {
      title: 'Complete Renovations',
      description: 'Full pond and water feature renovations with modern equipment and design',
      icon: 'Renovation'
    },
    {
      title: 'Equipment Upgrades',
      description: 'Upgrading outdated equipment with modern, energy-efficient systems',
      icon: 'Upgrade'
    },
    {
      title: 'Design Modernization',
      description: 'Updating old designs with contemporary styles and features',
      icon: 'Modern'
    },
    {
      title: 'Maintenance Restoration',
      description: 'Restoring neglected water features to their original beauty',
      icon: 'Restore'
    }
  ];

  const transformationServices = [
    'Pond Renovations',
    'Equipment Upgrades',
    'Design Modernization',
    'Water Quality Restoration',
    'Landscaping Integration',
    'Filtration Upgrades',
    'Lighting Installation',
    'Maintenance Programs'
  ];

  return (
    <>
      <SEO 
        title="Before & After - Pond Transformations & Water Feature Renovations | Utah Water Gardens"
        description="See dramatic pond transformations and water feature renovations. View our before and after gallery of 100+ pond makeovers, renovations, and restorations across Utah. Professional pond restoration and modernization services."
        keywords="pond transformations, before and after, pond renovations, water feature restoration, pond makeovers, pond upgrades, pond modernization, pond restoration, utah pond renovations, pond cleaning, pond repair, water feature upgrades"
        canonical="https://utahwatergardens.com/pond-gallery/before-after"
      />
      <div className={`pond-gallery-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <PageHero
          title="Before & After"
          subtitle="See the dramatic transformations we've achieved for our clients. From neglected ponds to stunning water features, witness the power of professional pond restoration and renovation."
          backgroundImage="/images/cleaningBefore1000x750.webp"
          stats={stats}
        />

        {/* Main Content Wrapper */}
        <div className="main-content-gradient">
          {/* Main Content */}
          <section className="pond-gallery-main-content">
            <div className="container">
              <div className="page-intro">
                <h2>Dramatic Pond Transformations</h2>
                <p>
                  Witness the incredible transformations we've achieved for our clients. From neglected, 
                  overgrown ponds to stunning water features, our before and after gallery showcases the 
                  dramatic improvements possible with professional pond restoration and renovation.
                </p>
                
                <div className="intro-images">
                  <img src="/images/cleaningBefore1000x750.webp" alt="Before: Neglected pond with algae and overgrowth" className="intro-image" />
                  <img src="/images/koi-topaz-enhance-4x.jpeg" alt="After: Beautiful, clean koi pond" className="intro-image" />
                </div>
                
                <div className="portfolio-overview">
                  <h3>Professional Pond Transformation Services</h3>
                  <p>
                    At Utah Water Gardens, we specialize in transforming neglected, outdated, or damaged 
                    water features into beautiful, functional installations. Our portfolio showcases over 
                    100 completed transformation projects across Utah, from complete pond renovations to 
                    equipment upgrades and design modernizations. Each project demonstrates our expertise 
                    in restoration, renovation, and modernization techniques.
                  </p>
                  <p>
                    Our experienced transformation team understands the unique challenges of working with 
                    existing water features, including proper assessment, planning, and execution of 
                    renovation projects. Whether you have a neglected pond, outdated equipment, or simply 
                    want to modernize your water feature, our before and after gallery demonstrates the 
                    dramatic improvements possible with professional pond restoration services throughout Utah.
                  </p>
                </div>
              </div>

              {/* Transformation Services */}
              <div className="featured-projects">
                <h2>Transformation Services</h2>
                <p>Comprehensive pond and water feature transformation services</p>
                
                <div className="projects-grid">
                  {transformationServices.map((service, index) => (
                    <div key={index} className="project-card">
                      <div className="project-content">
                        <h3>{service}</h3>
                        <p>Professional transformation services to restore and modernize your water feature</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div className="featured-projects">
                <h2>Featured Transformations</h2>
                <p>Showcasing some of our most dramatic pond and water feature transformations</p>
                
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
                        <img src={project.afterImage} alt={`After: ${project.title}`} />
                        <div className="project-category">{project.type}</div>
                      </div>
                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-details">
                          <span className="project-duration">{project.duration}</span>
                          <span className="project-year">{project.year}</span>
                        </div>
                        <div className="project-features">
                          <h4>Transformation Features:</h4>
                          <ul>
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="before-after-toggle">
                          <button 
                            className="toggle-btn"
                            onClick={() => {
                              const img = document.querySelector(`[alt="After: ${project.title}"]`);
                              if (img) {
                                img.src = img.src === project.afterImage ? project.beforeImage : project.afterImage;
                                img.alt = img.src === project.afterImage ? `After: ${project.title}` : `Before: ${project.title}`;
                              }
                            }}
                          >
                            View Before/After
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Transformation Types Section */}
          <section className="why-choose-section">
            <div className="container">
              <h2>Why Choose Our Transformation Services?</h2>
              <div className="benefits-grid">
                {transformationTypes.map((type, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">{type.icon}</div>
                    <h4>{type.title}</h4>
                    <p>{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Transformation Process Section */}
          <section className="design-process-section">
            <div className="container">
              <h2>Our Transformation Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Assessment & Planning</h3>
                  <p>We thoroughly assess your existing water feature to identify issues and plan the best transformation approach.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Design & Proposal</h3>
                  <p>Our team creates detailed transformation plans and provides comprehensive proposals for your approval.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Professional Transformation</h3>
                  <p>Our experienced team executes the transformation with minimal disruption and maximum attention to detail.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Maintenance & Support</h3>
                  <p>We provide ongoing maintenance guidance and support to ensure your transformed water feature remains beautiful.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Materials & Technology Section */}
          <section className="materials-section">
            <div className="container">
              <h2>Transformation Materials & Technology</h2>
              <div className="materials-content">
                <div className="materials-text">
                  <p>
                    We use only the highest quality materials and modern technology for all transformation projects. 
                    Our renovations feature premium equipment, advanced filtration systems, and contemporary design 
                    elements that ensure long-lasting beauty and performance.
                  </p>
                  <p>
                    Our transformation process includes proper assessment of existing systems, careful planning 
                    for minimal disruption, and professional installation of new components. We work with trusted 
                    suppliers to source the best materials available, ensuring your transformed water feature 
                    provides years of enjoyment and beauty.
                  </p>
                </div>
                <div className="materials-images">
                  <img src="/images/IMG_2782.jpg" alt="Modern pond equipment and filtration systems" className="materials-image" />
                  <img src="/images/IMG_2770.jpg" alt="Professional pond transformation in progress" className="materials-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="service-areas-section">
            <div className="container">
              <h2>Transformation Service Areas</h2>
              <p className="service-areas-intro">
                We proudly serve clients throughout the greater Salt Lake City area and surrounding communities 
                with our pond and water feature transformation services. Our portfolio includes transformations 
                throughout Utah's most beautiful locations.
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
                  <h2>Transform Your Water Feature Today</h2>
                  <p>
                    Ready to transform your existing water feature? Contact us for a 
                    free assessment and let us show you what's possible with professional renovation.
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
                    <a href="tel:(801) 590-8516" className="btn btn-primary">Call for Assessment</a>
                    <Link to="/free-estimate" className="btn btn-secondary">Get Free Estimate</Link>
                  </div>
                </div>
                <div className="store-info-image">
                  <img src="/images/735e2dfc82cdc5f4ee2cede5bd9c631f-enhance-4x.jpeg" alt="Dramatic pond transformation projects" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/cleaningBefore1000x750.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <h2>Ready to Transform Your Water Feature?</h2>
            <p>Let us show you the dramatic improvements possible with professional pond renovation.</p>
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

export default BeforeAfterPage;
