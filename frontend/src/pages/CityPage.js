import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StandardHero from '../components/StandardHero';
import CTA from '../components/CTA';
import { utahCitiesByCounty, createCityUrl } from '../data/utahCities';
import { reservedPaths } from '../utils/urlAudit';
import './CityPage.css';

const CityPage = () => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Reserved paths are imported from urlAudit utility

  useEffect(() => {
    setIsVisible(true);
    
    // Check if this is a reserved path
    if (reservedPaths.includes(cityName)) {
      setCityData(null);
      return;
    }
    
    // Find the city data
    const findCityData = () => {
      for (const [county, cities] of Object.entries(utahCitiesByCounty)) {
        for (const city of cities) {
          if (createCityUrl(city) === cityName) {
            return { city, county };
          }
        }
      }
      return null;
    };

    const found = findCityData();
    setCityData(found);
  }, [cityName]); // Only depend on cityName, reservedPaths is static

  if (!cityData) {
    return (
      <div className="city-page">
        <div className="container">
          <h1>City Not Found</h1>
          <p>The city you're looking for doesn't exist in our service areas.</p>
          <Link to="/pond-services" className="btn btn-primary">
            View All Service Areas
          </Link>
        </div>
      </div>
    );
  }

  const { city, county } = cityData;
  const cityUrl = createCityUrl(city);

  return (
    <>
      <SEO 
        title={`Pond Services in ${city}, ${county} | Utah Water Gardens`}
        description={`Professional pond services in ${city}, ${county}. Pond cleaning, maintenance, repair, and design services. Call (801) 590-8516 for expert pond care.`}
        keywords={`pond services ${city}, pond cleaning ${city}, pond maintenance ${city}, ${county} pond services, utah pond services, water features ${city}`}
        canonical={`https://utahwatergardens.com/${cityUrl}`}
      />
      
      <div className={`city-page ${isVisible ? 'visible' : ''}`}>
        <StandardHero 
          title={`Pond Services in ${city}`}
          subtitle={`Professional pond services for ${city} and surrounding ${county} areas. Expert pond cleaning, maintenance, and design services.`}
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          backgroundImageAlt={`Professional pond services in ${city}, ${county}`}
          primaryButtonText="CALL (801) 590-8516"
          primaryButtonLink="tel:(801) 590-8516"
          secondaryButtonText="GET QUOTE"
          secondaryButtonLink="/contact"
        />

        {/* Main Content */}
        <section className="city-main-content">
          <div className="container">
            <div className="page-intro">
              <h2>Professional Pond Services in {city}</h2>
              <p>
                Utah Water Gardens proudly serves {city} and the surrounding {county} area with 
                comprehensive pond and water feature services. Our experienced team provides 
                professional pond cleaning, maintenance, repair, and design services to keep 
                your water features healthy and beautiful year-round.
              </p>
            </div>

            {/* Services Grid */}
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🧹</div>
                <h3>Pond Cleaning</h3>
                <p>Deep cleaning and debris removal services with our professional equipment including the Truxor T50.</p>
                <ul>
                  <li>Debris removal</li>
                  <li>Algae control</li>
                  <li>Filter cleaning</li>
                  <li>Water clarity improvement</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Pond Maintenance</h3>
                <p>Regular maintenance to keep your pond healthy and beautiful throughout the year.</p>
                <ul>
                  <li>Water testing</li>
                  <li>Plant care</li>
                  <li>Fish health monitoring</li>
                  <li>Seasonal maintenance</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">⚡</div>
                <h3>Equipment Repair</h3>
                <p>Professional repair and maintenance of pond equipment and systems.</p>
                <ul>
                  <li>Pump repair</li>
                  <li>Filter maintenance</li>
                  <li>Electrical work</li>
                  <li>System diagnostics</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">🏗️</div>
                <h3>Pond Design & Build</h3>
                <p>Custom pond design and construction services for residential and commercial properties.</p>
                <ul>
                  <li>Custom design</li>
                  <li>Professional installation</li>
                  <li>Water feature integration</li>
                  <li>Landscaping coordination</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="why-choose-section">
              <h2>Why Choose Utah Water Gardens in {city}?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">🏆</div>
                  <h4>15+ Years Experience</h4>
                  <p>Over a decade of expertise in pond care and maintenance in Utah</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛠️</div>
                  <h4>Professional Equipment</h4>
                  <p>State-of-the-art tools including our new Truxor T50 for efficient cleaning</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🌊</div>
                  <h4>Comprehensive Service</h4>
                  <p>From routine maintenance to emergency repairs and new installations</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🏔️</div>
                  <h4>Local Expertise</h4>
                  <p>We understand Utah's unique climate and seasonal challenges</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="service-areas-section">
              <h2>Other Cities We Serve in {county}</h2>
              <p>We also provide pond services to other cities in {county}:</p>
              <div className="nearby-cities">
                {utahCitiesByCounty[county]
                  .filter(otherCity => otherCity !== city)
                  .slice(0, 8)
                  .map((otherCity, index) => (
                    <Link 
                      key={index} 
                      to={`/${createCityUrl(otherCity)}`}
                      className="city-link"
                    >
                      {otherCity}
                    </Link>
                  ))}
              </div>
              <Link to="/pond-services" className="btn btn-secondary">
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </div>
    </>
  );
};

export default CityPage;
