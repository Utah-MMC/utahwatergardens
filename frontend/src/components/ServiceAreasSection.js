import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceAreasSection.css';

const ServiceAreasSection = () => {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const counties = {
    'Salt Lake County': {
      cities: [
        'Salt Lake City', 'West Jordan', 'Sandy', 'West Valley City', 'Murray',
        'South Jordan', 'Riverton', 'Herriman', 'Bluffdale', 'Draper',
        'Midvale', 'Taylorsville', 'Kearns', 'Magna', 'Millcreek',
        'Holladay', 'Cottonwood Heights'
      ],
      description: 'Utah\'s most populous county with diverse neighborhoods and commercial districts'
    },
    'Davis County': {
      cities: [
        'Clearfield', 'Bountiful', 'Kaysville', 'Farmington', 'Centerville',
        'North Salt Lake', 'Woods Cross', 'Syracuse', 'Clinton', 'Roy',
        'South Ogden', 'Washington Terrace', 'Riverdale', 'Pleasant View', 'North Ogden'
      ],
      description: 'Growing county with family-friendly communities and business opportunities'
    },
    'Utah County': {
      cities: [
        'Provo', 'Orem', 'Lehi', 'American Fork', 'Pleasant Grove', 'Lindon',
        'Spanish Fork', 'Springville', 'Mapleton', 'Payson', 'Salem',
        'Cedar Hills', 'Alpine', 'Highland', 'Saratoga Springs', 'Eagle Mountain'
      ],
      description: 'Technology hub with beautiful mountain views and growing communities'
    },
    'Weber County': {
      cities: [
        'Ogden', 'Layton', 'Clearfield', 'Roy', 'South Ogden', 'Washington Terrace',
        'Riverdale', 'Pleasant View', 'North Ogden', 'Harrisville', 'Farr West'
      ],
      description: 'Historic county with strong community values and outdoor recreation'
    },
    'Tooele County': {
      cities: [
        'Tooele', 'Grantsville', 'Stansbury Park', 'Lake Point', 'Erda',
        'Stockton', 'Vernon', 'Wendover', 'Dugway', 'Ibapah'
      ],
      description: 'Rural county with wide-open spaces and growing residential areas'
    },
    'Summit County': {
      cities: [
        'Park City', 'Coalville', 'Kamas', 'Oakley', 'Francis', 'Hoytsville',
        'Peoa', 'Samak', 'Snyderville', 'Pepperwood', 'Red Ledges'
      ],
      description: 'Mountain county known for world-class skiing and outdoor recreation'
    },
    'Wasatch County': {
      cities: [
        'Heber City', 'Midway', 'Charleston', 'Daniel', 'Hideout', 'Independence'
      ],
      description: 'Scenic mountain county with pristine natural beauty'
    },
    'Southern Utah': {
      cities: [
        'Cedar City', 'St. George', 'Mesquite', 'Nephi', 'Mona', 'Manti',
        'Ephraim', 'Richfield', 'Salina', 'Delta', 'Fillmore', 'Beaver',
        'Milford', 'Enoch', 'Parowan', 'Hurricane', 'La Verkin', 'Virgin',
        'Springdale', 'Ivins', 'Santa Clara', 'Washington', 'Leeds'
      ],
      description: 'Beautiful southern Utah with red rock landscapes and warm climate'
    }
  };

  const handleCountyClick = (countyName) => {
    setSelectedCounty(selectedCounty === countyName ? null : countyName);
  };

  const getCitySlug = (cityName) => {
    return cityName.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section className="service-areas-section">
      <div className="container">
        <div className="section-header">
          <h2>Service Areas</h2>
          <p>
            We proudly serve the greater Salt Lake City area and surrounding communities. 
            Click on any county to see the cities we service.
          </p>
        </div>

        <div className="counties-grid">
          {Object.entries(counties).map(([countyName, countyData]) => (
            <div key={countyName} className="county-card">
              <button
                className={`county-button ${selectedCounty === countyName ? 'active' : ''}`}
                onClick={() => handleCountyClick(countyName)}
              >
                <span className="county-name">{countyName}</span>
                <span className="county-icon">
                  {selectedCounty === countyName ? '−' : '+'}
                </span>
              </button>
              
              {selectedCounty === countyName && (
                <div className="cities-dropdown">
                  <p className="county-description">{countyData.description}</p>
                  <div className="cities-grid">
                    {countyData.cities.map((city) => (
                      <Link
                        key={city}
                        to={`/pond-services/${getCitySlug(city)}`}
                        className="city-link"
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="service-coverage">
          <h3>Complete Service Coverage</h3>
          <div className="coverage-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Cities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Counties Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Mile Radius</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3>Don't See Your City?</h3>
          <p>
            We're always expanding our service areas. Contact us to see if we can serve your location.
          </p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">
              Call (801) 590-8516
            </a>
            <a href="mailto:contact@utahwatergardens.com" className="btn btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
