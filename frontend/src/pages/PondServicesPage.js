import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import './PondServicesPage.css';

const PondServicesPage = () => {
  const [expandedCounties, setExpandedCounties] = useState({});

  const toggleCounty = (county) => {
    setExpandedCounties(prev => ({
      ...prev,
      [county]: !prev[county]
    }));
  };

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
      { name: 'Pleasant View', path: '/pond-services/pleasant-view' },
      { name: 'North Ogden', path: '/pond-services/north-ogden' }
    ],
    'Utah County': [
      { name: 'Provo', path: '/pond-services/provo' },
      { name: 'Orem', path: '/pond-services/orem' },
      { name: 'Lehi', path: '/pond-services/lehi' },
      { name: 'American Fork', path: '/pond-services/american-fork' },
      { name: 'Pleasant Grove', path: '/pond-services/pleasant-grove' },
      { name: 'Lindon', path: '/pond-services/lindon' },
      { name: 'Spanish Fork', path: '/pond-services/spanish-fork' },
      { name: 'Springville', path: '/pond-services/springville' },
      { name: 'Mapleton', path: '/pond-services/mapleton' },
      { name: 'Payson', path: '/pond-services/payson' },
      { name: 'Salem', path: '/pond-services/salem' },
      { name: 'Cedar Hills', path: '/pond-services/cedar-hills' },
      { name: 'Alpine', path: '/pond-services/alpine' },
      { name: 'Highland', path: '/pond-services/highland' },
      { name: 'Saratoga Springs', path: '/pond-services/saratoga-springs' },
      { name: 'Eagle Mountain', path: '/pond-services/eagle-mountain' },
      { name: 'Cedar Valley', path: '/pond-services/cedar-valley' },
      { name: 'Genola', path: '/pond-services/genola' },
      { name: 'Goshen', path: '/pond-services/goshen' },
      { name: 'Woodland Hills', path: '/pond-services/woodland-hills' }
    ],
    'Summit County': [
      { name: 'Coalville', path: '/pond-services/coalville' },
      { name: 'Park City', path: '/pond-services/park-city' },
      { name: 'Kamas', path: '/pond-services/kamas' },
      { name: 'Oakley', path: '/pond-services/oakley' },
      { name: 'Francis', path: '/pond-services/francis' },
      { name: 'Hoytsville', path: '/pond-services/hoytsville' },
      { name: 'Peoa', path: '/pond-services/peoa' },
      { name: 'Samak', path: '/pond-services/samak' },
      { name: 'Snyderville', path: '/pond-services/snyderville' }
    ],
    'Tooele County': [
      { name: 'Tooele', path: '/pond-services/tooele' },
      { name: 'Grantsville', path: '/pond-services/grantsville' },
      { name: 'Stansbury Park', path: '/pond-services/stansbury-park' },
      { name: 'Lake Point', path: '/pond-services/lake-point' },
      { name: 'Erda', path: '/pond-services/erda' },
      { name: 'Stockton', path: '/pond-services/stockton' },
      { name: 'Vernon', path: '/pond-services/vernon' },
      { name: 'Wendover', path: '/pond-services/wendover' },
      { name: 'Dugway', path: '/pond-services/dugway' },
      { name: 'Ibapah', path: '/pond-services/ibapah' },
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
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    },
    {
      name: 'Water Quality Testing',
      path: '/pond-services/water-quality',
      description: 'Professional water quality analysis and treatment',
      image: '/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg',
      features: ['pH Testing', 'Chemical Analysis', 'Treatment Plans', 'Monitoring']
    },
    {
      name: 'Pond Design & Build',
      path: '/pond-services/design-build',
      description: 'Custom pond design and construction services',
      image: '/images/pondConstruction1000x800-topaz-enhance-3.9x.jpeg',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Warranty']
    },
    {
      name: 'Seasonal Services',
      path: '/pond-services/seasonal',
      description: 'Season-specific pond care and preparation',
      image: '/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg',
      features: ['Winter Prep', 'Spring Opening', 'Summer Care', 'Fall Cleanup']
    }
  ];

  const additionalServices = [
    {
      name: 'Pond Dredging',
      path: '/pond-and-lake-dredging',
      description: 'Remove built-up sediment and restore pond depth'
    },
    {
      name: 'Pond Repair & Rebuild',
      path: '/pond-repair-and-rebuild',
      description: 'Fix damage and restore pond functionality'
    },
    {
      name: 'Pond Consultations',
      path: '/pond-consultations',
      description: 'Expert advice for pond planning and maintenance'
    }
  ];

  return (
    <div className="pond-services-page">
      <PageHero 
        title="Pond Services"
        subtitle="Professional pond services to keep your water feature beautiful and healthy"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond vacuum services and maintenance equipment"
      />

      <div className="container">
        {/* Featured Services */}
        <section className="featured-services first-section-gradient">
          <h2>Featured Services</h2>
          <p>Our most popular and essential pond services</p>
          <div className="featured-services-grid">
            {featuredServices.map((service, index) => (
              <div key={index} className="featured-service-card">
                <div className="service-badge">{service.badge}</div>
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <div className="service-cta">
                    <Link to={service.path} className="btn btn-primary">
                      Learn More
                    </Link>
                    <a href="tel:(801) 590-8516" className="btn btn-secondary">
                      Call (801) 590-8516
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Services */}
        <section className="main-services">
          <h2>All Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <Link to={service.path} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="additional-services">
          <h2>Additional Services</h2>
          <div className="additional-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="additional-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link to={service.path} className="btn btn-outline">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <h2>Why Choose Utah Water Gardens?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h3>Expert Team</h3>
              <p>Years of experience in pond design and maintenance</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <h3>Quality Service</h3>
              <p>Professional equipment and proven techniques</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💚</div>
              <h3>Eco-Friendly</h3>
              <p>Sustainable practices that protect your pond ecosystem</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Emergency services when you need them most</p>
            </div>
          </div>
        </section>
      </div>

      {/* Service Areas - Full Width */}
      <section className="service-areas gradient-wipe-up">
        <div className="container">
          <h2>Service Areas</h2>
          <p>We proudly serve the greater Utah area from Ogden to Provo and Coalville to Tooele. Click on a county to see all cities we serve:</p>
          <div className="counties-container">
            {Object.entries(serviceAreasByCounty).map(([county, cities]) => (
              <div key={county} className="county-dropdown">
                <button 
                  className="county-header"
                  onClick={() => toggleCounty(county)}
                  aria-expanded={expandedCounties[county]}
                >
                  <span className="county-name">{county}</span>
                  <span className="county-count">({cities.length} cities)</span>
                  <span className={`dropdown-arrow ${expandedCounties[county] ? 'expanded' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`county-cities ${expandedCounties[county] ? 'expanded' : ''}`}>
                  <div className="cities-grid">
                    {cities.map((city, index) => (
                      <Link key={index} to={city.path} className="city-link">
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        {/* Contact CTA */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a free consultation and quote</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Free Quote
            </Link>
            <Link to="/schedule" className="btn btn-outline">
              Schedule Service
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PondServicesPage;
