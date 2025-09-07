import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
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

  // Organize service areas by county
  const serviceAreasByCounty = {
    'Salt Lake County': [
      { name: 'Salt Lake City', path: '/pond-services/salt-lake-city' },
      { name: 'West Jordan', path: '/pond-services/west-jordan' },
      { name: 'Sandy', path: '/pond-services/sandy' },
      { name: 'Murray', path: '/pond-services/murray' },
      { name: 'West Valley City', path: '/pond-services/west-valley-city' },
      { name: 'South Jordan', path: '/pond-services/south-jordan' },
      { name: 'Riverton', path: '/pond-services/riverton' },
      { name: 'Herriman', path: '/pond-services/herriman' },
      { name: 'Bluffdale', path: '/pond-services/bluffdale' },
      { name: 'Draper', path: '/pond-services/draper' },
      { name: 'Midvale', path: '/pond-services/midvale' },
      { name: 'Taylorsville', path: '/pond-services/taylorsville' },
      { name: 'Kearns', path: '/pond-services/kearns' },
      { name: 'Magna', path: '/pond-services/magna' },
      { name: 'Millcreek', path: '/pond-services/millcreek' },
      { name: 'Holladay', path: '/pond-services/holladay' },
      { name: 'Cottonwood Heights', path: '/pond-services/cottonwood-heights' }
    ],
    'Davis County': [
      { name: 'Ogden', path: '/pond-services/ogden' },
      { name: 'Layton', path: '/pond-services/layton' },
      { name: 'Clearfield', path: '/pond-services/clearfield' },
      { name: 'Bountiful', path: '/pond-services/bountiful' },
      { name: 'Kaysville', path: '/pond-services/kaysville' },
      { name: 'Farmington', path: '/pond-services/farmington' },
      { name: 'Centerville', path: '/pond-services/centerville' },
      { name: 'North Salt Lake', path: '/pond-services/north-salt-lake' },
      { name: 'Woods Cross', path: '/pond-services/woods-cross' },
      { name: 'Syracuse', path: '/pond-services/syracuse' },
      { name: 'Clinton', path: '/pond-services/clinton' },
      { name: 'Roy', path: '/pond-services/roy' },
      { name: 'South Ogden', path: '/pond-services/south-ogden' },
      { name: 'Washington Terrace', path: '/pond-services/washington-terrace' },
      { name: 'Riverdale', path: '/pond-services/riverdale' },
      { name: 'Fruit Heights', path: '/pond-services/fruit-heights' },
      { name: 'West Bountiful', path: '/pond-services/west-bountiful' },
      { name: 'Sunset', path: '/pond-services/sunset' },
      { name: 'Hooper', path: '/pond-services/hooper' },
      { name: 'Uintah', path: '/pond-services/uintah' },
      { name: 'Pleasant View', path: '/pond-services/pleasant-view' },
      { name: 'South Weber', path: '/pond-services/south-weber' },
      { name: 'West Haven', path: '/pond-services/west-haven' },
      { name: 'Harrisville', path: '/pond-services/harrisville' },
      { name: 'Farr West', path: '/pond-services/farr-west' },
      { name: 'Plain City', path: '/pond-services/plain-city' },
      { name: 'Marriott-Slaterville', path: '/pond-services/marriott-slaterville' },
      { name: 'Huntsville', path: '/pond-services/huntsville' },
      { name: 'Eden', path: '/pond-services/eden' },
      { name: 'Liberty', path: '/pond-services/liberty' },
      { name: 'Mountain Green', path: '/pond-services/mountain-green' },
      { name: 'Weber Canyon', path: '/pond-services/weber-canyon' },
      { name: 'Warren', path: '/pond-services/warren' },
      { name: 'West Warren', path: '/pond-services/west-warren' },
      { name: 'Taylor', path: '/pond-services/taylor' },
      { name: 'Callao', path: '/pond-services/callao' },
      { name: 'Knolls', path: '/pond-services/knolls' },
      { name: 'Rush Valley', path: '/pond-services/rush-valley' },
      { name: 'Terra', path: '/pond-services/terra' },
      { name: 'Timpe', path: '/pond-services/timpe' },
      { name: 'Trinidad', path: '/pond-services/trinidad' }
    ]
  };

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
              src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
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
              <Link to="/free-estimate" className="btn btn-secondary">Get Free Estimate</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PondServicesPage;