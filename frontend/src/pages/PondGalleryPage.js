import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './PondGalleryPage.css';

const PondGalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: 'Projects' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '50+', label: 'Service Areas', icon: 'Areas' },
    { number: '100%', label: 'Satisfaction Rate', icon: 'Quality' }
  ];

  const galleryCategories = [
    {
      name: 'Residential Ponds',
      path: '/pond-gallery/residential',
      description: 'Beautiful residential pond installations',
      image: '/images/IMG_2770.jpg',
      count: 12,
      features: ['Custom Design', 'Koi Ponds', 'Waterfalls', 'LED Lighting']
    },
    {
      name: 'Commercial Projects',
      path: '/pond-gallery/commercial',
      description: 'Large-scale commercial water features',
      image: '/images/pondConstruction1000x800.webp',
      count: 8,
      features: ['Corporate Water Features', 'Fountains', 'Stone Work', 'Maintenance']
    },
    {
      name: 'Koi Ponds',
      path: '/pond-gallery/koi-ponds',
      description: 'Specialized koi pond designs',
      image: '/images/koi-topaz-enhance-4x.jpeg',
      count: 15,
      features: ['Koi Fish', 'Filtration Systems', 'Aeration', 'Health Monitoring']
    },
    {
      name: 'Water Features',
      path: '/pond-gallery/water-features',
      description: 'Creative water feature installations',
      image: '/images/IMG_2770.jpg',
      count: 10,
      features: ['Fountains', 'Streams', 'Waterfalls', 'Decorative Elements']
    },
    {
      name: 'Before & After',
      path: '/pond-gallery/before-after',
      description: 'Dramatic pond transformations',
      image: '/images/cleaningBefore1000x750.webp',
      count: 6,
      features: ['Transformations', 'Renovations', 'Upgrades', 'Restorations']
    },
    {
      name: 'Customer Projects',
      path: '/pond-gallery/customer-projects',
      description: 'Projects completed for our valued customers',
      image: '/images/IMG_2775.jpg',
      count: 20,
      features: ['Customer Stories', 'Testimonials', 'Case Studies', 'Success Stories']
    }
  ];

  const featuredProjects = [
    {
      title: 'Murray Family Pond',
      category: 'Residential',
      description: 'A beautiful 500-gallon koi pond with waterfall',
      image: '/images/koi-topaz-enhance-4x.jpeg',
      features: ['Koi Fish', 'Waterfall', 'LED Lighting', 'Filtration System']
    },
    {
      title: 'Sandy Office Complex',
      category: 'Commercial',
      description: 'Large water feature for corporate headquarters',
      image: '/images/IMG_2770.jpg',
      features: ['Fountain', 'Stone Work', 'Landscaping', 'Maintenance System']
    },
    {
      title: 'West Jordan Garden Pond',
      category: 'Residential',
      description: 'Natural-style pond with native plants',
      image: '/images/IMG_2775.jpg',
      features: ['Native Plants', 'Natural Stone', 'Wildlife Habitat', 'Eco-Friendly']
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', count: 71 },
    { id: 'residential', name: 'Residential', count: 32 },
    { id: 'commercial', name: 'Commercial', count: 18 },
    { id: 'koi', name: 'Koi Ponds', count: 21 }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => 
        project.category.toLowerCase().includes(activeFilter)
      );

  return (
    <>
      <SEO 
        title="Pond Gallery - Our Beautiful Water Garden Projects | Utah Water Gardens"
        description="Explore our stunning pond gallery featuring residential ponds, commercial water features, koi ponds, and water features. See our 500+ completed projects across Utah."
        keywords="pond gallery, water garden projects, koi ponds, water features, residential ponds, commercial ponds, utah pond builders, pond design"
        canonical="https://utahwatergardens.com/pond-gallery"
      />
      <div className={`pond-gallery-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <section className="pond-gallery-hero">
          <div className="hero-background">
            <img 
              src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
              alt="Beautiful water garden gallery showcasing our pond projects"
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-text-content">
              <h1 className="hero-title">
                Pond 
                <span className="hero-title-highlight"> Gallery</span>
              </h1>
              
              <p className="hero-subtitle">
                Explore our stunning collection of water garden projects across Utah. 
                From residential koi ponds to commercial water features.
              </p>
              
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wavy Divider - Attached to Hero */}
        <div className="hero-wave-attached">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path className="wave-layer-1" d="M0,0L50,20C100,40,200,80,300,80C400,80,500,40,600,20C700,0,800,0,900,20C1000,40,1100,80,1150,100L1200,120V0Z" fill="#ffffff" opacity="0.1"></path>
            <path className="wave-layer-2" d="M0,0L50,15C100,30,200,60,300,60C400,60,500,30,600,15C700,0,800,0,900,15C1000,30,1100,60,1150,75L1200,90V0Z" fill="#ffffff" opacity="0.2"></path>
            <path className="wave-layer-3" d="M0,0L50,10C100,20,200,40,300,40C400,40,500,20,600,10C700,0,800,0,900,10C1000,20,1100,40,1150,50L1200,60V0Z" fill="#ffffff" opacity="0.3"></path>
          </svg>
        </div>

        {/* Main Content Wrapper with Single Gradient */}
        <div className="main-content-gradient">
          {/* Main Content */}
          <section className="pond-gallery-main-content">
          <div className="container">
            <div className="page-intro">
              <h2>Our Water Garden Portfolio</h2>
              <p>
                Discover the beauty and craftsmanship of our water garden projects. 
                Each project is uniquely designed to complement its environment while 
                providing years of enjoyment and natural beauty.
              </p>
            </div>

            {/* Gallery Categories */}
            <div className="gallery-categories">
              <h2>Project Categories</h2>
              <div className="categories-grid">
                {galleryCategories.map((category, index) => (
                  <Link key={index} to={category.path} className="category-card">
                    <div className="category-image">
                      <img src={category.image} alt={category.name} />
                      <div className="category-overlay">
                        <span className="category-icon">Gallery</span>
                        <span className="category-count">{category.count} Projects</span>
                      </div>
                    </div>
                    <div className="category-content">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                      <div className="category-features">
                        <h4>Features:</h4>
                        <ul>
                          {category.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <span className="category-link">View {category.name} →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="featured-projects">
              <h2>Featured Projects</h2>
              <p>Showcasing some of our most impressive water garden installations</p>
              
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
                      <div className="project-category">{project.category}</div>
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
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

        {/* Why Choose Our Projects */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Choose Our Water Garden Projects?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">Design</div>
                <h4>Custom Design</h4>
                <p>Every project is uniquely designed for your space and preferences</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Quality</div>
                <h4>Premium Materials</h4>
                <p>We use only the highest quality materials and equipment</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Expertise</div>
                <h4>Expert Installation</h4>
                <p>Professional installation by our experienced team</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Support</div>
                <h4>Ongoing Support</h4>
                <p>Complete maintenance and support for all our projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2>Our Project Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Consultation</h3>
                <p>We meet with you to understand your vision and requirements</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Design</h3>
                <p>Create a custom design that fits your space and budget</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Installation</h3>
                <p>Professional installation by our experienced team</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Support</h3>
                <p>Ongoing maintenance and support for your water garden</p>
              </div>
            </div>
          </div>
        </section>

        {/* Store Information */}
        <section className="store-info-section">
          <div className="container">
            <div className="store-info-content">
              <div className="store-info-text">
                <h2>Start Your Project Today</h2>
                <p>
                  Ready to create your own beautiful water garden? Contact us for a 
                  free consultation and let us bring your vision to life.
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
                <img src="/images/IMG_2770.jpg" alt="Our water garden projects and installations" />
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* CTA Section */}
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
            <h2>Ready to Create Your Dream Water Garden?</h2>
            <p>Let us transform your space with a beautiful, custom water feature.</p>
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

export default PondGalleryPage;