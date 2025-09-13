import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './PondGalleryPage.css';

const KoiPondsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '300+', label: 'Koi Ponds Built', icon: 'Projects' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '50+', label: 'Service Areas', icon: 'Areas' },
    { number: '100%', label: 'Fish Health', icon: 'Quality' }
  ];

  const koiProjects = [
    {
      title: 'Traditional Japanese Koi Garden',
      location: 'Cottonwood Heights, UT',
      description: 'Authentic Japanese-style koi pond with bridge, meditation area, and premium koi collection',
      image: '/images/koi-topaz-enhance-4x.jpeg',
      features: ['Premium Koi Fish', 'Japanese Design', 'Bridge Feature', 'Meditation Area', 'Zen Garden'],
      size: '2000 gallons',
      year: '2023',
      koiCount: '12 koi'
    },
    {
      title: 'Modern Koi Pond with Waterfall',
      location: 'Sandy, UT',
      description: 'Contemporary koi pond design with natural stone waterfall and LED lighting system',
      image: '/images/IMG_2775.jpg',
      features: ['Natural Stone Waterfall', 'LED Lighting', 'Premium Filtration', 'Koi Health Monitoring', 'Easy Access'],
      size: '1500 gallons',
      year: '2023',
      koiCount: '8 koi'
    },
    {
      title: 'Family Koi Pond with Viewing Deck',
      location: 'West Jordan, UT',
      description: 'Family-friendly koi pond with viewing deck and shallow areas for children to enjoy',
      image: '/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg',
      features: ['Viewing Deck', 'Child-Safe Design', 'Multiple Depths', 'Koi Feeding Station', 'Educational Features'],
      size: '1200 gallons',
      year: '2022',
      koiCount: '10 koi'
    },
    {
      title: 'Indoor Koi Pond Installation',
      location: 'Murray, UT',
      description: 'Climate-controlled indoor koi pond with advanced filtration and viewing windows',
      image: '/images/IMG_2782.jpg',
      features: ['Climate Control', 'Advanced Filtration', 'Viewing Windows', 'Year-Round Enjoyment', 'Premium Koi'],
      size: '800 gallons',
      year: '2023',
      koiCount: '6 koi'
    },
    {
      title: 'Large Estate Koi Pond',
      location: 'Draper, UT',
      description: 'Expansive koi pond with multiple viewing areas and premium koi collection',
      image: '/images/IMG_2770.jpg',
      features: ['Multiple Viewing Areas', 'Premium Koi Collection', 'Natural Filtration', 'Landscaping Integration', 'Maintenance Access'],
      size: '5000 gallons',
      year: '2022',
      koiCount: '25 koi'
    },
    {
      title: 'Compact Urban Koi Pond',
      location: 'Salt Lake City, UT',
      description: 'Space-efficient koi pond design perfect for urban environments and smaller yards',
      image: '/images/IMG_2780.jpg',
      features: ['Space-Efficient Design', 'Urban Friendly', 'Low Maintenance', 'Premium Filtration', 'Compact Koi'],
      size: '600 gallons',
      year: '2023',
      koiCount: '4 koi'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Koi Ponds', count: 300 },
    { id: 'japanese', name: 'Japanese Style', count: 85 },
    { id: 'modern', name: 'Modern Design', count: 120 },
    { id: 'indoor', name: 'Indoor Ponds', count: 45 },
    { id: 'family', name: 'Family Friendly', count: 50 }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? koiProjects 
    : koiProjects.filter(project => 
        project.features.some(feature => 
          feature.toLowerCase().includes(activeFilter)
        )
      );

  const koiFeatures = [
    {
      title: 'Koi Health Focus',
      description: 'Specialized design and filtration systems optimized for koi fish health and longevity',
      icon: 'Health'
    },
    {
      title: 'Premium Filtration',
      description: 'Advanced biological and mechanical filtration systems for crystal clear water',
      icon: 'Filtration'
    },
    {
      title: 'Expert Koi Care',
      description: 'Comprehensive koi care guidance and ongoing support for fish health',
      icon: 'Care'
    },
    {
      title: 'Custom Design',
      description: 'Every koi pond is uniquely designed to showcase your fish and complement your space',
      icon: 'Design'
    }
  ];

  const koiCareServices = [
    'Koi Health Monitoring',
    'Water Quality Testing',
    'Feeding Programs',
    'Seasonal Care',
    'Disease Prevention',
    'Breeding Support',
    'Koi Selection',
    'Pond Maintenance'
  ];

  return (
    <>
      <SEO 
        title="Koi Ponds - Premium Koi Fish Ponds & Water Gardens | Utah Water Gardens"
        description="Professional koi pond design and installation. View our gallery of 300+ beautiful koi ponds, Japanese-style water gardens, and premium koi fish habitats across Utah. Expert koi care and maintenance services."
        keywords="koi ponds, koi fish ponds, Japanese koi ponds, koi pond design, koi pond installation, koi fish care, premium koi, koi pond filtration, koi pond maintenance, utah koi ponds, koi pond builders, koi fish health"
        canonical="https://utahwatergardens.com/pond-gallery/koi-ponds"
      />
      <div className={`pond-gallery-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <PageHero
          title="Koi Ponds"
          subtitle="Create a stunning home for your koi fish with our specialized koi pond designs. From traditional Japanese gardens to modern installations, we build ponds that prioritize koi health and beauty."
          backgroundImage="/images/koi-topaz-enhance-4x.jpeg"
          stats={stats}
        />

        {/* Main Content Wrapper */}
        <div className="main-content-gradient">
          {/* Main Content */}
          <section className="pond-gallery-main-content">
            <div className="container">
              <div className="page-intro">
                <h2>Specialized Koi Pond Designs</h2>
                <p>
                  Create the perfect environment for your koi fish with our specialized koi pond designs. 
                  Each pond is carefully engineered to promote koi health, showcase their beauty, and 
                  provide years of enjoyment for you and your family.
                </p>
                
                <div className="intro-images">
                  <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Beautiful koi fish in crystal clear pond water" className="intro-image" />
                  <img src="/images/IMG_2775.jpg" alt="Traditional Japanese koi pond with waterfall" className="intro-image" />
                </div>
                
                <div className="portfolio-overview">
                  <h3>Premium Koi Pond Solutions</h3>
                  <p>
                    At Utah Water Gardens, we specialize in creating exceptional koi ponds that prioritize 
                    fish health and showcase the natural beauty of koi. Our portfolio showcases over 300 
                    completed koi pond projects across Utah, from traditional Japanese-style gardens to 
                    modern contemporary designs. Each project reflects our deep understanding of koi biology, 
                    water chemistry, and pond ecosystem balance.
                  </p>
                  <p>
                    Our experienced koi specialists understand the unique requirements of koi fish, including 
                    proper depth, filtration, aeration, and water quality parameters. Whether you're looking 
                    for a traditional Japanese koi garden, a modern showcase pond, or a family-friendly 
                    installation, our koi pond gallery demonstrates the range and quality of our specialized 
                    work throughout Utah's koi community.
                  </p>
                </div>
              </div>

              {/* Koi Care Services */}
              <div className="featured-projects">
                <h2>Koi Care Services</h2>
                <p>Comprehensive koi care and maintenance services for healthy, beautiful fish</p>
                
                <div className="projects-grid">
                  {koiCareServices.map((service, index) => (
                    <div key={index} className="project-card">
                      <div className="project-content">
                        <h3>{service}</h3>
                        <p>Expert koi care services to keep your fish healthy and thriving</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div className="featured-projects">
                <h2>Featured Koi Pond Projects</h2>
                <p>Showcasing some of our most impressive koi pond installations</p>
                
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
                        <div className="project-category">{project.koiCount}</div>
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

          {/* Koi Features Section */}
          <section className="why-choose-section">
            <div className="container">
              <h2>Why Choose Our Koi Pond Designs?</h2>
              <div className="benefits-grid">
                {koiFeatures.map((feature, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Koi Care Process Section */}
          <section className="design-process-section">
            <div className="container">
              <h2>Our Koi Pond Design Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Koi Requirements Assessment</h3>
                  <p>We assess your space and koi goals to determine the optimal pond size, depth, and filtration requirements for healthy fish.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Specialized Design</h3>
                  <p>Our koi specialists create detailed plans that prioritize fish health, water quality, and showcase the natural beauty of koi.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Professional Installation</h3>
                  <p>Our experienced team installs specialized koi pond equipment including advanced filtration, aeration, and water quality systems.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Koi Care Training</h3>
                  <p>We provide comprehensive training on koi care, feeding, water quality monitoring, and ongoing maintenance for healthy fish.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Materials & Technology Section */}
          <section className="materials-section">
            <div className="container">
              <h2>Koi-Specific Materials & Technology</h2>
              <div className="materials-content">
                <div className="materials-text">
                  <p>
                    We use specialized materials and equipment specifically designed for koi ponds and fish health. 
                    Our installations feature koi-grade EPDM liners, advanced biological filtration systems, and 
                    premium aeration equipment designed to maintain optimal water quality for koi fish.
                  </p>
                  <p>
                    Our koi pond construction process includes proper depth considerations, specialized filtration 
                    design, and careful attention to water chemistry parameters. We work with trusted koi equipment 
                    suppliers to source the best materials available, ensuring optimal conditions for koi health 
                    and longevity in Utah's climate.
                  </p>
                </div>
                <div className="materials-images">
                  <img src="/images/IMG_2782.jpg" alt="Advanced koi pond filtration system" className="materials-image" />
                  <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Premium koi fish in crystal clear water" className="materials-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="service-areas-section">
            <div className="container">
              <h2>Koi Pond Service Areas</h2>
              <p className="service-areas-intro">
                We proudly serve koi enthusiasts throughout the greater Salt Lake City area and surrounding communities 
                with our specialized koi pond design and construction services. Our portfolio includes koi ponds 
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
                  <h2>Start Your Koi Pond Project Today</h2>
                  <p>
                    Ready to create the perfect home for your koi fish? Contact us for a 
                    free consultation and let us design a koi pond that showcases your fish beautifully.
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
                  <img src="/images/735e2dfc82cdc5f4ee2cede5bd9c631f-enhance-4x.jpeg" alt="Beautiful koi pond projects and installations" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/koi-topaz-enhance-4x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <h2>Ready to Create Your Dream Koi Pond?</h2>
            <p>Let us design and build a stunning koi pond that showcases your fish beautifully.</p>
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



export default KoiPondsPage;
