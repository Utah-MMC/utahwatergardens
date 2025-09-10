import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getCitiesByCountyWithPaths } from '../data/utahCities';
import './PondServicesPage.css';

const PondServicesPage = () => {
  const [expandedCounties, setExpandedCounties] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleCounty = (county) => {
    setExpandedCounties(prev => ({
      ...prev,
      [county]: !prev[county]
    }));
  };

  const stats = [
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '500+', label: 'Projects Completed', icon: 'Projects' },
    { number: '50+', label: 'Service Areas', icon: 'Areas' },
    { number: '100%', label: 'Satisfaction Rate', icon: 'Satisfaction' }
  ];

  // Get comprehensive service areas by county
  const serviceAreasByCounty = getCitiesByCountyWithPaths();

  // Featured services - emphasizing cleaning and service
  const featuredServices = [
    {
      name: 'Pond Cleaning',
      path: '/pond-services/cleaning',
      description: 'Deep cleaning and debris removal services with our NEW Truxor T50 equipment',
      image: '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity'],
      featured: true,
      badge: 'Most Popular'
    },
    {
      name: 'Pond Maintenance',
      path: '/pond-services/maintenance',
      description: 'Regular maintenance to keep your pond healthy and beautiful year-round',
      image: '/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance'],
      featured: true,
      badge: 'Essential Service'
    }
  ];

  const services = [
    {
      name: 'Pond Cleaning',
      path: '/pond-services/cleaning',
      description: 'Deep cleaning and debris removal services',
      image: '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Pond Maintenance',
      path: '/pond-services/maintenance',
      description: 'Regular maintenance to keep your pond healthy and beautiful',
      image: '/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Equipment Repair',
      path: '/pond-services/repair',
      description: 'Repair and maintenance of pond equipment',
      image: '/images/pumpRepair.webp',
      features: ['Pump Repair', 'Filter Maintenance', 'Electrical Work', 'System Diagnostics']
    },
    {
      name: 'Pond Dredging',
      path: '/pond-services/dredging',
      description: 'Professional dredging services to restore pond depth',
      image: '/images/IMG_2770.jpg',
      features: ['Sediment Removal', 'Depth Restoration', 'Water Quality Improvement', 'Equipment Rental']
    },
    {
      name: 'Water Quality Testing',
      path: '/pond-services/water-testing',
      description: 'Comprehensive water quality analysis and treatment',
      image: '/images/IMG_2782.jpg',
      features: ['pH Testing', 'Chemical Analysis', 'Treatment Plans', 'Ongoing Monitoring']
    },
    {
      name: 'Seasonal Services',
      path: '/pond-services/seasonal',
      description: 'Season-specific care for your pond',
      image: '/images/IMG_2775.jpg',
      features: ['Spring Startup', 'Summer Care', 'Fall Cleanup', 'Winter Preparation']
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Services - Professional Pond Care & Maintenance | Utah Water Gardens"
        description="Professional pond services including cleaning, maintenance, repair, and dredging. Serving Salt Lake County, Davis County, and surrounding areas with 15+ years of experience."
        keywords="pond services, pond cleaning, pond maintenance, pond repair, pond dredging, water quality testing, utah pond services, salt lake county pond services"
        canonical="https://utahwatergardens.com/pond-services"
      />
      <div className={`pond-services-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <section className="pond-services-hero">
          <div className="hero-background">
            <img 
              src="/images/2a2ff15adcbcad6b2b30001e86d21d40-denoise-enhance-4x.jpeg" 
              alt="Professional pond services and maintenance"
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-text-content">
              <h1 className="hero-title">
                Pond 
                <span className="hero-title-highlight"> Services</span>
              </h1>
              
              <p className="hero-subtitle">
                Professional pond care and maintenance services to keep your water features healthy and beautiful year-round.
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

        {/* Wavy Divider - Attached to Hero with Blue Gradient */}
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
          <section className="pond-services-main-content">
          <div className="container">
            <div className="page-intro">
              <h2>Professional Pond Services</h2>
              <p>
                From routine maintenance to specialized cleaning and repair services, we provide comprehensive 
                care for your pond and water features. Our experienced team uses professional equipment and 
                proven techniques to ensure your pond stays healthy and beautiful throughout the year.
              </p>
              
              <div className="intro-images">
                <img src="/images/2b9aef53da4c2aff799d5b0f08116364-denoise.jpeg" alt="Professional pond cleaning service" className="intro-image" />
                <img src="/images/2f5160e87ccdc3259c69ecd3d8776206-denoise.jpeg" alt="Pond maintenance and care" className="intro-image" />
              </div>
              
              <div className="service-overview">
                <h3>Comprehensive Pond Care Solutions</h3>
                <p>
                  At Utah Water Gardens, we understand that every pond is unique and requires specialized attention. 
                  Our comprehensive service approach combines years of experience with cutting-edge equipment to deliver 
                  exceptional results. Whether you have a small backyard water feature or a large commercial pond, 
                  our team is equipped to handle all your pond care needs.
                </p>
                <p>
                  Our services are designed to maintain optimal water quality, promote healthy aquatic life, and 
                  preserve the aesthetic beauty of your pond. We work with both residential and commercial clients 
                  throughout Utah, providing flexible scheduling and customized service plans to meet your specific 
                  requirements and budget.
                </p>
              </div>
            </div>

            {/* Featured Services */}
            <div className="featured-services">
              <h2>Our Most Popular Services</h2>
              <div className="featured-grid">
                {featuredServices.map((service, index) => (
                  <Link key={index} to={service.path} className="featured-service-card">
                    <div className="service-badge">{service.badge}</div>
                    <div className="service-image">
                      <img src={service.image} alt={service.name} />
                      <div className="service-overlay">
                        <span className="service-icon">Service</span>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                      <div className="service-features">
                        <h4>What's Included:</h4>
                        <ul>
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <span className="service-link">Learn More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Services */}
            <div className="all-services">
              <h2>All Our Services</h2>
              <div className="services-grid">
                {services.map((service, index) => (
                  <Link key={index} to={service.path} className="service-card">
                    <div className="service-image">
                      <img src={service.image} alt={service.name} />
                      <div className="service-overlay">
                        <span className="service-icon">Service</span>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                      <div className="service-features">
                        <ul>
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <span className="service-link">View Details →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Service Process */}
            <div className="service-process">
              <h2>Our Service Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Initial Assessment</h3>
                  <p>We begin with a thorough evaluation of your pond's current condition, identifying any issues and determining the best approach for maintenance or repair.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Customized Plan</h3>
                  <p>Based on our assessment, we develop a customized service plan that addresses your specific needs and fits your schedule and budget.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Professional Service</h3>
                  <p>Our experienced technicians perform the work using professional-grade equipment and proven techniques to ensure optimal results.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Follow-up Care</h3>
                  <p>We provide ongoing support and maintenance recommendations to keep your pond healthy and beautiful year-round.</p>
                </div>
              </div>
            </div>
            
            {/* Equipment & Technology */}
            <div className="equipment-section">
              <h2>Professional Equipment & Technology</h2>
              <div className="equipment-content">
                <div className="equipment-text">
                  <p>
                    We invest in the latest pond care technology to deliver superior results. Our equipment includes 
                    the state-of-the-art Truxor T50 dredging system, high-pressure cleaning equipment, and specialized 
                    water testing instruments. This professional-grade equipment allows us to work efficiently and 
                    effectively, reducing service time while improving results.
                  </p>
                  <p>
                    Our team is trained on all equipment and stays current with the latest techniques and best practices 
                    in pond care. We regularly update our tools and methods to ensure we're providing the most effective 
                    and efficient service possible.
                  </p>
                </div>
                <div className="equipment-images">
                  <img src="/images/truxor-equipment-1.jpg" alt="Truxor T50 professional dredging equipment" className="equipment-image" />
                  <img src="/images/truxor-equipment-2.jpg" alt="Professional pond maintenance equipment" className="equipment-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas-section">
          <div className="container">
            <h2>Service Areas</h2>
            <p className="service-areas-intro">
              We proudly serve the greater Salt Lake City area and surrounding communities. 
              Click on any county to see the cities we service.
            </p>
            
            <div className="counties-grid">
              {Object.entries(serviceAreasByCounty).map(([county, cities]) => (
                <div key={county} className="county-section">
                  <button 
                    className="county-header"
                    onClick={() => toggleCounty(county)}
                  >
                    <h3>{county}</h3>
                    <span className={`county-toggle ${expandedCounties[county] ? 'expanded' : ''}`}>
                      {expandedCounties[county] ? '−' : '+'}
                    </span>
                  </button>
                  
                  {expandedCounties[county] && (
                    <div className="cities-grid">
                      {cities.map((city, index) => (
                        <Link key={index} to={city.path} className="city-link">
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Choose Our Pond Services?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">Experience</div>
                <h4>15+ Years Experience</h4>
                <p>Over a decade of expertise in pond care and maintenance</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Equipment</div>
                <h4>Professional Equipment</h4>
                <p>State-of-the-art tools including our new Truxor T50</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Service</div>
                <h4>Comprehensive Service</h4>
                <p>From routine maintenance to emergency repairs</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Local</div>
                <h4>Local Expertise</h4>
                <p>We understand Utah's unique climate and challenges</p>
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
            <h2>Ready to Schedule Your Pond Service?</h2>
            <p>Contact us today for professional pond care and maintenance services.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PondServicesPage;