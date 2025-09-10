import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './PondGalleryPage.css';

const CustomerProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Customer Projects', icon: 'Projects' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '50+', label: 'Service Areas', icon: 'Areas' },
    { number: '100%', label: 'Customer Satisfaction', icon: 'Quality' }
  ];

  const customerProjects = [
    {
      title: 'The Johnson Family Koi Paradise',
      location: 'Sandy, UT',
      description: 'A beautiful family koi pond that has become the centerpiece of their backyard entertainment area',
      image: '/images/koi-topaz-enhance-4x.jpeg',
      features: ['Family-Friendly Design', 'Koi Fish', 'Entertainment Area', 'Easy Maintenance', 'Child Safety'],
      customer: 'Johnson Family',
      year: '2023',
      testimonial: 'Our koi pond has transformed our backyard into a peaceful retreat. The kids love feeding the fish!'
    },
    {
      title: 'Corporate Headquarters Water Feature',
      location: 'West Jordan, UT',
      description: 'Impressive water feature for a technology company that creates a welcoming atmosphere for employees and visitors',
      image: '/images/IMG_2770.jpg',
      features: ['Corporate Design', 'Employee Amenity', 'Visitor Welcome', 'Low Maintenance', 'Professional Appearance'],
      customer: 'TechCorp Solutions',
      year: '2023',
      testimonial: 'The water feature has become a focal point that impresses clients and provides a calming environment for our team.'
    },
    {
      title: 'Restaurant Patio Water Wall',
      location: 'Murray, UT',
      description: 'Elegant water wall that enhances the dining experience and creates ambient sound for outdoor seating',
      image: '/images/IMG_2782.jpg',
      features: ['Ambient Sound', 'Dining Enhancement', 'Weather Resistant', 'Easy Maintenance', 'Visual Appeal'],
      customer: 'Bella Vista Restaurant',
      year: '2022',
      testimonial: 'Our customers love the peaceful atmosphere the water wall creates. It has definitely increased our patio dining business.'
    },
    {
      title: 'Retirement Community Garden Pond',
      location: 'Draper, UT',
      description: 'Therapeutic water feature designed for senior residents to enjoy and relax by',
      image: '/images/IMG_2775.jpg',
      features: ['Therapeutic Design', 'Accessibility', 'Calming Features', 'Low Maintenance', 'Senior Friendly'],
      customer: 'Sunset Gardens Retirement',
      year: '2022',
      testimonial: 'Our residents spend hours enjoying the peaceful pond. It has become a favorite gathering spot in our community.'
    },
    {
      title: 'Family Home Water Garden',
      location: 'Cottonwood Heights, UT',
      description: 'Complete water garden transformation that turned a plain backyard into an outdoor paradise',
      image: '/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg',
      features: ['Complete Transformation', 'Family Entertainment', 'Wildlife Habitat', 'Natural Design', 'Year-Round Beauty'],
      customer: 'The Martinez Family',
      year: '2023',
      testimonial: 'We never imagined our backyard could look this beautiful. It has become our favorite place to spend time as a family.'
    },
    {
      title: 'Medical Office Lobby Fountain',
      location: 'Holladay, UT',
      description: 'Soothing fountain installation that creates a calming environment for patients and staff',
      image: '/images/IMG_2780.jpg',
      features: ['Calming Design', 'Patient Comfort', 'Staff Wellness', 'Professional Appearance', 'Low Maintenance'],
      customer: 'Holladay Medical Center',
      year: '2023',
      testimonial: 'The fountain has created such a peaceful atmosphere. Patients often comment on how relaxing it is to wait in our lobby.'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', count: 500 },
    { id: 'residential', name: 'Residential', count: 350 },
    { id: 'commercial', name: 'Commercial', count: 100 },
    { id: 'healthcare', name: 'Healthcare', count: 25 },
    { id: 'hospitality', name: 'Hospitality', count: 25 }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? customerProjects 
    : customerProjects.filter(project => 
        project.features.some(feature => 
          feature.toLowerCase().includes(activeFilter)
        )
      );

  const customerBenefits = [
    {
      title: 'Customer-Focused Design',
      description: 'Every project is designed with our customers\' specific needs, preferences, and lifestyle in mind',
      icon: 'Customer'
    },
    {
      title: 'Quality Craftsmanship',
      description: 'We take pride in delivering exceptional quality and attention to detail in every project',
      icon: 'Quality'
    },
    {
      title: 'Ongoing Support',
      description: 'We provide comprehensive support and maintenance services to ensure long-term satisfaction',
      icon: 'Support'
    },
    {
      title: 'Proven Results',
      description: 'Our portfolio of successful projects demonstrates our commitment to customer satisfaction',
      icon: 'Results'
    }
  ];

  const projectTypes = [
    'Residential Water Gardens',
    'Commercial Water Features',
    'Koi Pond Installations',
    'Waterfall Systems',
    'Fountain Installations',
    'Therapeutic Water Features',
    'Restaurant Water Elements',
    'Healthcare Water Features'
  ];

  return (
    <>
      <SEO 
        title="Customer Projects - Real Water Garden Success Stories | Utah Water Gardens"
        description="See real customer success stories and water garden projects. View our gallery of 500+ completed customer projects with testimonials, case studies, and success stories from satisfied clients across Utah."
        keywords="customer projects, water garden success stories, customer testimonials, pond project case studies, customer satisfaction, utah water garden projects, customer reviews, project testimonials, water feature success stories"
        canonical="https://utahwatergardens.com/pond-gallery/customer-projects"
      />
      <div className={`pond-gallery-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <PageHero
          title="Customer Projects"
          subtitle="Real success stories from our valued customers. See how we've transformed outdoor spaces and created beautiful water gardens that exceed expectations and provide years of enjoyment."
          backgroundImage="/images/IMG_2775.jpg"
          stats={stats}
        />

        {/* Main Content Wrapper */}
        <div className="main-content-gradient">
          {/* Main Content */}
          <section className="pond-gallery-main-content">
            <div className="container">
              <div className="page-intro">
                <h2>Real Customer Success Stories</h2>
                <p>
                  Discover the real stories behind our water garden projects. From residential transformations 
                  to commercial installations, our customers share their experiences and the impact our work 
                  has had on their lives and businesses.
                </p>
                
                <div className="intro-images">
                  <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Happy customer with beautiful koi pond" className="intro-image" />
                  <img src="/images/IMG_2770.jpg" alt="Successful commercial water feature project" className="intro-image" />
                </div>
                
                <div className="portfolio-overview">
                  <h3>Customer-Focused Project Success</h3>
                  <p>
                    At Utah Water Gardens, we measure our success by the satisfaction and happiness of our customers. 
                    Our portfolio showcases over 500 completed customer projects across Utah, each one a testament 
                    to our commitment to quality, customer service, and exceeding expectations. Every project tells 
                    a unique story of transformation and satisfaction.
                  </p>
                  <p>
                    Our customer-focused approach means we work closely with each client to understand their vision, 
                    needs, and goals. Whether it's creating a peaceful backyard retreat, enhancing a business environment, 
                    or providing therapeutic water features, our customer projects demonstrate the positive impact 
                    beautiful water gardens can have on people's lives and businesses throughout Utah.
                  </p>
                </div>
              </div>

              {/* Project Types */}
              <div className="featured-projects">
                <h2>Customer Project Types</h2>
                <p>Diverse water garden projects that have delighted our customers</p>
                
                <div className="projects-grid">
                  {projectTypes.map((type, index) => (
                    <div key={index} className="project-card">
                      <div className="project-content">
                        <h3>{type}</h3>
                        <p>Successful customer projects that exceed expectations</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div className="featured-projects">
                <h2>Featured Customer Projects</h2>
                <p>Real customer stories and testimonials from our successful projects</p>
                
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
                        <div className="project-category">{project.customer}</div>
                      </div>
                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-details">
                          <span className="project-customer">Customer: {project.customer}</span>
                          <span className="project-year">{project.year}</span>
                        </div>
                        <div className="project-features">
                          <h4>Project Features:</h4>
                          <ul>
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="customer-testimonial">
                          <h4>Customer Testimonial:</h4>
                          <p className="testimonial-text">"{project.testimonial}"</p>
                          <span className="testimonial-author">- {project.customer}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Customer Benefits Section */}
          <section className="why-choose-section">
            <div className="container">
              <h2>Why Our Customers Choose Us</h2>
              <div className="benefits-grid">
                {customerBenefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Customer Process Section */}
          <section className="design-process-section">
            <div className="container">
              <h2>Our Customer-Focused Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Customer Consultation</h3>
                  <p>We listen carefully to understand your vision, needs, and goals to create the perfect water garden for you.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Custom Design</h3>
                  <p>Our design team creates detailed plans that reflect your preferences and complement your space perfectly.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Professional Installation</h3>
                  <p>Our experienced team installs your water garden with attention to detail and minimal disruption to your daily life.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Ongoing Partnership</h3>
                  <p>We provide ongoing support and maintenance services to ensure your water garden continues to bring you joy for years to come.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Materials & Technology Section */}
          <section className="materials-section">
            <div className="container">
              <h2>Quality Materials for Customer Satisfaction</h2>
              <div className="materials-content">
                <div className="materials-text">
                  <p>
                    We use only the highest quality materials and equipment to ensure our customers receive 
                    water gardens that exceed their expectations. Our installations feature premium components, 
                    advanced systems, and durable materials designed for long-term performance and beauty.
                  </p>
                  <p>
                    Our commitment to customer satisfaction means we carefully select every component and 
                    material used in our projects. We work with trusted suppliers to source the best 
                    materials available, ensuring your water garden investment provides years of enjoyment 
                    and beauty while maintaining its value and performance.
                  </p>
                </div>
                <div className="materials-images">
                  <img src="/images/IMG_2782.jpg" alt="Premium materials used in customer projects" className="materials-image" />
                  <img src="/images/IMG_2770.jpg" alt="Professional installation for customer satisfaction" className="materials-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="service-areas-section">
            <div className="container">
              <h2>Customer Service Areas</h2>
              <p className="service-areas-intro">
                We proudly serve customers throughout the greater Salt Lake City area and surrounding communities 
                with our water garden design and construction services. Our customer projects span throughout 
                Utah's most beautiful locations.
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
                  <h2>Join Our Success Stories</h2>
                  <p>
                    Ready to become our next success story? Contact us for a 
                    free consultation and let us create a beautiful water garden that exceeds your expectations.
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
                  <img src="/images/735e2dfc82cdc5f4ee2cede5bd9c631f-enhance-4x.jpeg" alt="Successful customer water garden projects" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_2775.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <h2>Ready to Become Our Next Success Story?</h2>
            <p>Let us create a beautiful water garden that exceeds your expectations and brings you years of joy.</p>
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

export default CustomerProjectsPage;
