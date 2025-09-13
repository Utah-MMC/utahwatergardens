import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
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
      image: '/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg',
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
      image: '/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg',
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
        title="Pond Gallery - Professional Water Garden Projects & Portfolio | Utah Water Gardens"
        description="Explore our comprehensive pond gallery showcasing 500+ completed water garden projects across Utah. View residential ponds, commercial water features, koi ponds, and custom designs. Professional pond builders serving Salt Lake County, Davis County, and surrounding areas."
        keywords="pond gallery, water garden projects, koi ponds, water features, residential ponds, commercial ponds, utah pond builders, pond design, pond portfolio, water garden examples, utah pond construction, salt lake county ponds, davis county ponds, pond before and after"
        canonical="https://utahwatergardens.com/pond-gallery"
      />
      <div className={`pond-gallery-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <PageHero
          title="Pond Gallery"
          subtitle="Explore our stunning collection of water garden projects across Utah. From residential koi ponds to commercial water features."
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          stats={stats}
        />

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
              
              <div className="intro-images">
                <img src="/images/IMG_2770.jpg" alt="Professional pond construction project" className="intro-image" />
                <img src="/images/IMG_2775.jpg" alt="Beautiful residential pond design" className="intro-image" />
              </div>
              
              <div className="portfolio-overview">
                <h3>Comprehensive Water Garden Solutions</h3>
                <p>
                  At Utah Water Gardens, we specialize in creating stunning water features that transform outdoor spaces. 
                  Our portfolio showcases over 500 completed projects across Utah, from intimate residential koi ponds 
                  to large-scale commercial water features. Each project reflects our commitment to quality craftsmanship, 
                  innovative design, and environmental sustainability.
                </p>
                <p>
                  Our experienced team works closely with clients to understand their vision and create custom water 
                  gardens that exceed expectations. Whether you're looking for a peaceful backyard retreat or an 
                  impressive commercial centerpiece, our gallery demonstrates the range and quality of our work. 
                  We serve clients throughout Salt Lake County, Davis County, and surrounding areas with professional 
                  installation and ongoing maintenance services.
                </p>
              </div>
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

        {/* Design Process Section */}
        <section className="design-process-section">
          <div className="container">
            <h2>Our Design & Construction Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Initial Consultation</h3>
                <p>We begin with a comprehensive site visit to assess your space, discuss your vision, and understand your specific needs and budget requirements.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Custom Design</h3>
                <p>Our design team creates detailed plans and 3D renderings that incorporate your preferences, site conditions, and local climate considerations.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Professional Installation</h3>
                <p>Our experienced construction team uses professional-grade equipment and proven techniques to bring your water garden vision to life.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Ongoing Support</h3>
                <p>We provide comprehensive maintenance services and support to ensure your water garden remains beautiful and healthy for years to come.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Materials & Technology Section */}
        <section className="materials-section">
          <div className="container">
            <h2>Premium Materials & Construction Technology</h2>
            <div className="materials-content">
              <div className="materials-text">
                <p>
                  We use only the highest quality materials and state-of-the-art construction techniques to ensure 
                  your water garden stands the test of time. Our projects feature premium EPDM liners, professional-grade 
                  filtration systems, and energy-efficient pumps designed for Utah's unique climate conditions.
                </p>
                <p>
                  Our construction process includes proper excavation, professional plumbing installation, and careful 
                  attention to detail in every aspect of the build. We work with trusted suppliers and manufacturers 
                  to source the best materials available, ensuring durability and long-term performance of your investment.
                </p>
              </div>
              <div className="materials-images">
                <img src="/images/pondConstruction1000x800.webp" alt="Professional pond construction materials and equipment" className="materials-image" />
                <img src="/images/IMG_2782.jpg" alt="High-quality pond filtration system installation" className="materials-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas-section">
          <div className="container">
            <h2>Areas We Serve</h2>
            <p className="service-areas-intro">
              We proudly serve the greater Salt Lake City area and surrounding communities with our water garden 
              design and construction services. Our portfolio includes projects throughout Utah's most beautiful locations.
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
                <img src="/images/735e2dfc82cdc5f4ee2cede5bd9c631f-enhance-4x.jpeg" alt="Our water garden projects and installations" />
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



export default PondGalleryPage;