import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './PondGalleryPage.css';

const ResidentialPondsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '200+', label: 'Residential Projects', icon: 'Projects' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '50+', label: 'Service Areas', icon: 'Areas' },
    { number: '100%', label: 'Satisfaction Rate', icon: 'Quality' }
  ];

  const residentialProjects = [
    {
      title: 'Murray Family Koi Pond',
      location: 'Murray, UT',
      description: 'A stunning 500-gallon koi pond with natural stone waterfall and LED lighting system',
      image: '/images/koi-topaz-enhance-4x.jpeg',
      features: ['Koi Fish', 'Natural Stone Waterfall', 'LED Lighting', 'Premium Filtration', 'Custom Design'],
      size: '500 gallons',
      year: '2023'
    },
    {
      title: 'West Jordan Garden Pond',
      location: 'West Jordan, UT',
      description: 'Natural-style pond with native plants and wildlife habitat features',
      image: '/images/IMG_2775.jpg',
      features: ['Native Plants', 'Wildlife Habitat', 'Natural Stone', 'Eco-Friendly Design', 'Low Maintenance'],
      size: '300 gallons',
      year: '2023'
    },
    {
      title: 'Sandy Backyard Oasis',
      location: 'Sandy, UT',
      description: 'Luxury residential pond with multiple water features and seating area',
      image: '/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg',
      features: ['Multiple Waterfalls', 'Seating Area', 'Premium Lighting', 'Fish Habitat', 'Landscaping'],
      size: '800 gallons',
      year: '2022'
    },
    {
      title: 'Draper Hillside Pond',
      location: 'Draper, UT',
      description: 'Terraced pond design built into natural hillside with cascading waterfalls',
      image: '/images/IMG_2770.jpg',
      features: ['Terraced Design', 'Cascading Waterfalls', 'Hillside Integration', 'Natural Stone', 'Drainage System'],
      size: '1200 gallons',
      year: '2022'
    },
    {
      title: 'Cottonwood Heights Koi Garden',
      location: 'Cottonwood Heights, UT',
      description: 'Traditional Japanese-style koi pond with bridge and meditation area',
      image: '/images/IMG_2782.jpg',
      features: ['Japanese Design', 'Koi Fish', 'Bridge Feature', 'Meditation Area', 'Zen Garden'],
      size: '600 gallons',
      year: '2023'
    },
    {
      title: 'Holladay Family Pond',
      location: 'Holladay, UT',
      description: 'Family-friendly pond with shallow areas for children and deep areas for fish',
      image: '/images/IMG_2780.jpg',
      features: ['Child-Safe Design', 'Multiple Depths', 'Fish Habitat', 'Easy Access', 'Safety Features'],
      size: '400 gallons',
      year: '2023'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', count: 200 },
    { id: 'koi', name: 'Koi Ponds', count: 85 },
    { id: 'natural', name: 'Natural Style', count: 65 },
    { id: 'modern', name: 'Modern Design', count: 50 }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? residentialProjects 
    : residentialProjects.filter(project => 
        project.features.some(feature => 
          feature.toLowerCase().includes(activeFilter)
        )
      );

  const designFeatures = [
    {
      title: 'Custom Design',
      description: 'Every residential pond is uniquely designed to complement your home and landscape',
      icon: 'Design'
    },
    {
      title: 'Premium Materials',
      description: 'We use only the highest quality EPDM liners, pumps, and filtration systems',
      icon: 'Quality'
    },
    {
      title: 'Expert Installation',
      description: 'Professional installation by our experienced team with attention to every detail',
      icon: 'Installation'
    },
    {
      title: 'Ongoing Support',
      description: 'Complete maintenance and support services to keep your pond beautiful year-round',
      icon: 'Support'
    }
  ];

  const popularFeatures = [
    'Koi Fish Habitats',
    'Natural Stone Waterfalls',
    'LED Lighting Systems',
    'Premium Filtration',
    'Wildlife Integration',
    'Child-Safe Designs',
    'Low Maintenance Systems',
    'Seasonal Adaptations'
  ];

  return (
    <>
      <SEO 
        title="Residential Ponds - Custom Home Water Gardens & Koi Ponds | Utah Water Gardens"
        description="Transform your backyard with a custom residential pond. View our gallery of 200+ beautiful home water gardens, koi ponds, and water features across Utah."
        keywords="residential ponds, home water gardens, koi ponds, backyard ponds, custom pond design, residential water features, utah pond builders, home pond installation, koi pond design, residential pond gallery, salt lake county ponds, davis county ponds, backyard water features"
        canonical="https://utahwatergardens.com/pond-gallery/residential"
      />
      <div className={`pond-gallery-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <PageHero
          title="Residential Ponds"
          subtitle="Transform your backyard into a peaceful oasis with our custom residential pond designs. From intimate koi ponds to expansive water gardens."
          backgroundImage="/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg"
          stats={stats}
        />

        {/* Main Content Wrapper */}
        <div className="main-content-gradient">
          {/* Main Content */}
          <section className="pond-gallery-main-content">
            <div className="container">
              <div className="page-intro">
                <h2>Beautiful Residential Water Gardens</h2>
                <p>
                  Create your own backyard paradise with our custom residential pond designs. 
                  Each project is carefully crafted to enhance your outdoor living space while 
                  providing years of enjoyment and natural beauty.
                </p>
                
                <div className="intro-images">
                  <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Beautiful residential koi pond with waterfall" className="intro-image" />
                  <img src="/images/IMG_2775.jpg" alt="Natural-style residential pond design" className="intro-image" />
                </div>
                
                <div className="portfolio-overview">
                  <h3>Custom Residential Pond Solutions</h3>
                  <p>
                    At Utah Water Gardens, we specialize in creating stunning residential water features that transform 
                    ordinary backyards into extraordinary outdoor retreats. Our portfolio showcases over 200 completed 
                    residential projects across Utah, from intimate koi ponds to expansive water gardens. Each project 
                    reflects our commitment to quality craftsmanship, innovative design, and environmental sustainability.
                  </p>
                  <p>
                    Our experienced design team works closely with homeowners to understand their vision and create 
                    custom water gardens that perfectly complement their home and lifestyle. Whether you're looking for 
                    a peaceful meditation space, a family-friendly water feature, or an impressive koi pond, our 
                    residential gallery demonstrates the range and quality of our work throughout Salt Lake County, 
                    Davis County, and surrounding areas.
                  </p>
                </div>
              </div>

              {/* Popular Features */}
              <div className="featured-projects">
                <h2>Popular Residential Features</h2>
                <p>Discover the most requested features for residential water gardens</p>
                
                <div className="projects-grid">
                  {popularFeatures.map((feature, index) => (
                    <div key={index} className="project-card">
                      <div className="project-content">
                        <h3>{feature}</h3>
                        <p>Custom designed and professionally installed for your home</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div className="featured-projects">
                <h2>Featured Residential Projects</h2>
                <p>Showcasing some of our most impressive residential water garden installations</p>
                
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
                        <div className="project-category">{project.location}</div>
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

          {/* Design Features Section */}
          <section className="why-choose-section">
            <div className="container">
              <h2>Why Choose Our Residential Pond Designs?</h2>
              <div className="benefits-grid">
                {designFeatures.map((feature, index) => (
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
              <h2>Our Residential Design Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Home Consultation</h3>
                  <p>We visit your property to assess your space, discuss your vision, and understand your family's needs and lifestyle preferences.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Custom Design</h3>
                  <p>Our design team creates detailed plans and 3D renderings that incorporate your preferences, home architecture, and landscape features.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Professional Installation</h3>
                  <p>Our experienced construction team uses professional-grade equipment and proven techniques to bring your residential water garden to life.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Family Training</h3>
                  <p>We provide comprehensive training and ongoing support to ensure your family can enjoy and maintain your new water garden for years to come.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Materials & Technology Section */}
          <section className="materials-section">
            <div className="container">
              <h2>Premium Materials for Residential Ponds</h2>
              <div className="materials-content">
                <div className="materials-text">
                  <p>
                    We use only the highest quality materials specifically selected for residential applications. 
                    Our projects feature premium EPDM liners, energy-efficient pumps, and advanced filtration 
                    systems designed for Utah's unique climate conditions and family use.
                  </p>
                  <p>
                    Our residential construction process includes proper excavation, professional plumbing 
                    installation, and careful attention to safety features. We work with trusted suppliers 
                    to source the best materials available, ensuring durability and long-term performance 
                    of your family's investment.
                  </p>
                </div>
                <div className="materials-images">
                  <img src="/images/IMG_2782.jpg" alt="Premium residential pond filtration system" className="materials-image" />
                  <img src="/images/IMG_2770.jpg" alt="Professional residential pond construction" className="materials-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="service-areas-section">
            <div className="container">
              <h2>Residential Service Areas</h2>
              <p className="service-areas-intro">
                We proudly serve homeowners throughout the greater Salt Lake City area and surrounding communities 
                with our residential water garden design and construction services. Our portfolio includes projects 
                throughout Utah's most beautiful residential neighborhoods.
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
                  <h2>Start Your Residential Project Today</h2>
                  <p>
                    Ready to create your own beautiful residential water garden? Contact us for a 
                    free consultation and let us bring your backyard vision to life.
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
                  <img src="/images/735e2dfc82cdc5f4ee2cede5bd9c631f-enhance-4x.jpeg" alt="Beautiful residential pond projects and installations" />
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
            <h2>Ready to Create Your Dream Residential Water Garden?</h2>
            <p>Let us transform your backyard into a beautiful, peaceful retreat.</p>
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



export default ResidentialPondsPage;
