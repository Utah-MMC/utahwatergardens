import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './PondGalleryPage.css';

const WaterFeaturesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '250+', label: 'Water Features', icon: 'Projects' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '50+', label: 'Service Areas', icon: 'Areas' },
    { number: '100%', label: 'Design Excellence', icon: 'Quality' }
  ];

  const waterFeatureProjects = [
    {
      title: 'Natural Stone Waterfall',
      location: 'Sandy, UT',
      description: 'Dramatic natural stone waterfall with cascading streams and natural rock formations',
      image: '/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg',
      features: ['Natural Stone', 'Cascading Streams', 'Rock Formations', 'Natural Flow', 'Wildlife Integration'],
      type: 'Waterfall',
      year: '2023'
    },
    {
      title: 'Modern Fountain Installation',
      location: 'West Jordan, UT',
      description: 'Contemporary fountain design with LED lighting and programmable water patterns',
      image: '/images/IMG_2770.jpg',
      features: ['LED Lighting', 'Programmable Patterns', 'Modern Design', 'Energy Efficient', 'Low Maintenance'],
      type: 'Fountain',
      year: '2023'
    },
    {
      title: 'Stream and Pond System',
      location: 'Murray, UT',
      description: 'Flowing stream system connecting multiple ponds with natural filtration',
      image: '/images/IMG_2775.jpg',
      features: ['Flowing Streams', 'Multiple Ponds', 'Natural Filtration', 'Ecosystem Balance', 'Wildlife Habitat'],
      type: 'Stream',
      year: '2022'
    },
    {
      title: 'Decorative Water Wall',
      location: 'Draper, UT',
      description: 'Elegant water wall feature with textured surface and ambient lighting',
      image: '/images/IMG_2782.jpg',
      features: ['Water Wall', 'Textured Surface', 'Ambient Lighting', 'Modern Aesthetic', 'Sound Features'],
      type: 'Water Wall',
      year: '2023'
    },
    {
      title: 'Interactive Splash Pad',
      location: 'Cottonwood Heights, UT',
      description: 'Family-friendly interactive water feature with multiple spray patterns',
      image: '/images/IMG_2780.jpg',
      features: ['Interactive Design', 'Multiple Spray Patterns', 'Child-Safe', 'Seasonal Operation', 'Easy Controls'],
      type: 'Interactive',
      year: '2022'
    },
    {
      title: 'Reflection Pool',
      location: 'Holladay, UT',
      description: 'Serene reflection pool with minimal design and maximum visual impact',
      image: '/images/IMG_2775.jpg',
      features: ['Reflection Design', 'Minimal Aesthetic', 'Visual Impact', 'Low Maintenance', 'Zen Features'],
      type: 'Reflection Pool',
      year: '2023'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Features', count: 250 },
    { id: 'waterfall', name: 'Waterfalls', count: 85 },
    { id: 'fountain', name: 'Fountains', count: 65 },
    { id: 'stream', name: 'Streams', count: 45 },
    { id: 'interactive', name: 'Interactive', count: 35 },
    { id: 'reflection', name: 'Reflection Pools', count: 20 }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? waterFeatureProjects 
    : waterFeatureProjects.filter(project => 
        project.type.toLowerCase().includes(activeFilter)
      );

  const waterFeatureTypes = [
    {
      title: 'Creative Design',
      description: 'Unique water feature designs that complement your landscape and architectural style',
      icon: 'Design'
    },
    {
      title: 'Premium Materials',
      description: 'High-quality materials and components for lasting beauty and performance',
      icon: 'Materials'
    },
    {
      title: 'Expert Installation',
      description: 'Professional installation with attention to detail and proper water flow dynamics',
      icon: 'Installation'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored water features designed specifically for your space and preferences',
      icon: 'Custom'
    }
  ];

  const featureTypes = [
    'Natural Waterfalls',
    'Modern Fountains',
    'Flowing Streams',
    'Water Walls',
    'Interactive Features',
    'Reflection Pools',
    'Bubbling Rocks',
    'Decorative Spouts'
  ];

  return (
    <>
      <SEO 
        title="Water Features - Creative Water Gardens & Decorative Features | Utah Water Gardens"
        description="Professional water feature design and installation. View our gallery of 250+ creative water features, waterfalls, fountains, and decorative water elements across Utah. Custom water feature design for residential and commercial properties."
        keywords="water features, waterfalls, fountains, water walls, streams, decorative water features, water feature design, water feature installation, utah water features, custom water features, residential water features, commercial water features"
        canonical="https://utahwatergardens.com/pond-gallery/water-features"
      />
      <div className={`pond-gallery-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <PageHero
          title="Water Features"
          subtitle="Create stunning water features that enhance your landscape. From dramatic waterfalls to elegant fountains, we design and install beautiful water elements for any space."
          backgroundImage="/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg"
          stats={stats}
        />

        {/* Main Content Wrapper */}
        <div className="main-content-gradient">
          {/* Main Content */}
          <section className="pond-gallery-main-content">
            <div className="container">
              <div className="page-intro">
                <h2>Creative Water Feature Designs</h2>
                <p>
                  Transform your outdoor space with our creative water feature designs. From dramatic waterfalls 
                  to elegant fountains, we create beautiful water elements that enhance your landscape and 
                  provide years of enjoyment.
                </p>
                
                <div className="intro-images">
                  <img src="/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg" alt="Natural stone waterfall with cascading water" className="intro-image" />
                  <img src="/images/IMG_2770.jpg" alt="Modern fountain with LED lighting" className="intro-image" />
                </div>
                
                <div className="portfolio-overview">
                  <h3>Comprehensive Water Feature Solutions</h3>
                  <p>
                    At Utah Water Gardens, we specialize in creating stunning water features that transform 
                    outdoor spaces into beautiful, tranquil environments. Our portfolio showcases over 250 
                    completed water feature projects across Utah, from natural stone waterfalls to modern 
                    fountains and interactive water elements. Each project reflects our commitment to creative 
                    design, quality craftsmanship, and environmental integration.
                  </p>
                  <p>
                    Our experienced design team understands the unique requirements of different water features, 
                    including proper water flow dynamics, material selection, and integration with existing 
                    landscapes. Whether you're looking for a dramatic focal point, a subtle accent feature, 
                    or an interactive water element, our water feature gallery demonstrates the range and 
                    quality of our creative work throughout Utah's diverse landscapes.
                  </p>
                </div>
              </div>

              {/* Feature Types */}
              <div className="featured-projects">
                <h2>Water Feature Types</h2>
                <p>Explore the variety of water features we design and install</p>
                
                <div className="projects-grid">
                  {featureTypes.map((feature, index) => (
                    <div key={index} className="project-card">
                      <div className="project-content">
                        <h3>{feature}</h3>
                        <p>Custom designed and professionally installed water features</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div className="featured-projects">
                <h2>Featured Water Feature Projects</h2>
                <p>Showcasing some of our most impressive water feature installations</p>
                
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

          {/* Water Feature Types Section */}
          <section className="why-choose-section">
            <div className="container">
              <h2>Why Choose Our Water Features?</h2>
              <div className="benefits-grid">
                {waterFeatureTypes.map((feature, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section className="design-process-section">
            <div className="container">
              <h2>Our Water Feature Design Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Site Analysis</h3>
                  <p>We analyze your space to understand the best water feature options, water flow dynamics, and integration with your existing landscape.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Creative Design</h3>
                  <p>Our design team creates unique water feature concepts that complement your space and reflect your personal style and preferences.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Professional Installation</h3>
                  <p>Our experienced installation team uses specialized techniques and equipment to bring your water feature vision to life.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Ongoing Support</h3>
                  <p>We provide comprehensive maintenance guidance and support to ensure your water feature remains beautiful and functional for years to come.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Materials & Technology Section */}
          <section className="materials-section">
            <div className="container">
              <h2>Premium Materials & Water Feature Technology</h2>
              <div className="materials-content">
                <div className="materials-text">
                  <p>
                    We use only the highest quality materials and components specifically selected for water features. 
                    Our installations feature premium natural stone, commercial-grade pumps, and advanced water 
                    treatment systems designed for optimal performance and longevity.
                  </p>
                  <p>
                    Our water feature construction process includes proper water flow engineering, professional 
                    plumbing installation, and careful attention to aesthetic details. We work with trusted suppliers 
                    to source the best materials available, ensuring your water feature provides years of beauty 
                    and enjoyment in Utah's climate.
                  </p>
                </div>
                <div className="materials-images">
                  <img src="/images/IMG_2782.jpg" alt="Premium water feature materials and components" className="materials-image" />
                  <img src="/images/IMG_2770.jpg" alt="Professional water feature installation" className="materials-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="service-areas-section">
            <div className="container">
              <h2>Water Feature Service Areas</h2>
              <p className="service-areas-intro">
                We proudly serve clients throughout the greater Salt Lake City area and surrounding communities 
                with our water feature design and construction services. Our portfolio includes water features 
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
                  <h2>Start Your Water Feature Project Today</h2>
                  <p>
                    Ready to enhance your landscape with a beautiful water feature? Contact us for a 
                    free consultation and let us create a stunning water element for your space.
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
                  <img src="/images/735e2dfc82cdc5f4ee2cede5bd9c631f-enhance-4x.jpeg" alt="Beautiful water feature projects and installations" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <h2>Ready to Create Your Dream Water Feature?</h2>
            <p>Let us design and install a stunning water element that transforms your outdoor space.</p>
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

export default WaterFeaturesPage;
