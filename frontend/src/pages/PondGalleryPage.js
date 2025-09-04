import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PondGalleryPage.css';

const PondGalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryCategories = [
    {
      name: 'Residential Ponds',
      path: '/pond-gallery/residential',
      description: 'Beautiful residential pond installations',
      image: '/images/IMG_2770.jpg',
      count: 12
    },
    {
      name: 'Commercial Projects',
      path: '/pond-gallery/commercial',
      description: 'Large-scale commercial water features',
      image: '/images/pondConstruction1000x800.webp',
      count: 8
    },
    {
      name: 'Koi Ponds',
      path: '/pond-gallery/koi-ponds',
      description: 'Specialized koi pond designs',
      image: '/images/koi.webp',
      count: 15
    },
    {
      name: 'Water Features',
      path: '/pond-gallery/water-features',
      description: 'Creative water feature installations',
      image: '/images/IMG_2770.jpg',
      count: 10
    },
    {
      name: 'Before & After',
      path: '/pond-gallery/before-after',
      description: 'Dramatic pond transformations',
      image: '/images/cleaningBefore1000x750.webp',
      count: 6
    },
    {
      name: 'Customer Projects',
      path: '/pond-gallery/customer-projects',
      description: 'Projects completed for our valued customers',
      image: '/images/IMG_2775.jpg',
      count: 20
    }
  ];

  const featuredProjects = [
    {
      title: 'Murray Family Pond',
      category: 'Residential',
      description: 'A beautiful 500-gallon koi pond with waterfall',
      image: '/images/koi.webp',
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
    <div className="pond-gallery-page">
      <div className="hero-section">
        <div className="container">
          <h1>Pond Gallery</h1>
          <p>Explore our portfolio of beautiful pond and water feature projects</p>
        </div>
      </div>

      <div className="container">
        {/* Gallery Categories */}
        <section className="gallery-categories">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            {galleryCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay">
                    <span className="project-count">{category.count} Projects</span>
                  </div>
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <Link to={category.path} className="btn btn-primary">
                    View Projects
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Filters */}
        <section className="project-filters">
          <h2>Featured Projects</h2>
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
                <span className="filter-count">({filter.count})</span>
              </button>
            ))}
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="featured-projects">
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
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="btn btn-outline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Stats */}
        <section className="gallery-stats">
          <h2>Our Portfolio</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">71+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="customer-testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Utah Water Gardens transformed our backyard into a beautiful oasis. The koi pond is absolutely stunning!"</p>
              </div>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>Murray, UT</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Professional service from start to finish. Our commercial water feature gets compliments daily."</p>
              </div>
              <div className="testimonial-author">
                <strong>Mike R.</strong>
                <span>Sandy, UT</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The team at Utah Water Gardens exceeded our expectations. Highly recommend!"</p>
              </div>
              <div className="testimonial-author">
                <strong>Jennifer L.</strong>
                <span>West Jordan, UT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="get-started-cta">
          <h2>Ready to Start Your Project?</h2>
          <p>Let us help you create the pond of your dreams</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">
              Call (801) 590-8516
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Send Message
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PondGalleryPage;
