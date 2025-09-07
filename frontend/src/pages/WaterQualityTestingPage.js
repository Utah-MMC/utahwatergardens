import React from 'react';
import { Link } from 'react-router-dom';
import './WaterQualityTestingPage.css';

const WaterQualityTestingPage = () => {
  const testingServices = [
    {
      name: 'pH Testing',
      image: '/images/IMG_2782.jpg',
      description: 'Monitor pH levels to ensure optimal water conditions for fish and plants',
      importance: 'Critical for fish health and plant growth',
      idealRange: '6.5 - 8.5',
      frequency: 'Weekly',
      price: 'Starting at $25'
    },
    {
      name: 'Ammonia Testing',
      image: '/images/IMG_2770.jpg',
      description: 'Detect harmful ammonia levels that can stress or kill fish',
      importance: 'Prevents fish poisoning and stress',
      idealRange: '0 ppm',
      frequency: 'Weekly',
      price: 'Starting at $30'
    },
    {
      name: 'Nitrite Testing',
      image: '/images/IMG_2775.jpg',
      description: 'Monitor nitrite levels during pond cycling and maintenance',
      importance: 'Essential for biological filtration health',
      idealRange: '0 ppm',
      frequency: 'Weekly',
      price: 'Starting at $30'
    },
    {
      name: 'Nitrate Testing',
      image: '/images/IMG_2776.jpg',
      description: 'Check nitrate levels to prevent algae blooms and plant issues',
      importance: 'Controls algae growth and plant health',
      idealRange: 'Below 40 ppm',
      frequency: 'Monthly',
      price: 'Starting at $25'
    },
    {
      name: 'Dissolved Oxygen Testing',
      image: '/images/IMG_2779.jpg',
      description: 'Ensure adequate oxygen levels for fish and beneficial bacteria',
      importance: 'Critical for fish survival and water clarity',
      idealRange: '5-8 ppm',
      frequency: 'Weekly',
      price: 'Starting at $35'
    },
    {
      name: 'Alkalinity Testing',
      image: '/images/IMG_2780.jpg',
      description: 'Measure water buffering capacity to maintain stable pH',
      importance: 'Prevents pH fluctuations and stress',
      idealRange: '80-120 ppm',
      frequency: 'Monthly',
      price: 'Starting at $25'
    }
  ];

  const testingPackages = [
    {
      name: 'Basic Water Test',
      tests: ['pH', 'Ammonia', 'Nitrite'],
      price: '$45',
      turnaround: 'Same day',
      image: '/images/IMG_2770.jpg'
    },
    {
      name: 'Standard Water Test',
      tests: ['pH', 'Ammonia', 'Nitrite', 'Nitrate', 'Dissolved Oxygen'],
      price: '$75',
      turnaround: 'Same day',
      image: '/images/IMG_2775.jpg'
    },
    {
      name: 'Comprehensive Water Test',
      tests: ['pH', 'Ammonia', 'Nitrite', 'Nitrate', 'Dissolved Oxygen', 'Alkalinity', 'Hardness', 'Phosphate'],
      price: '$120',
      turnaround: 'Same day',
      image: '/images/IMG_2779.jpg'
    }
  ];

  return (
    <div className="water-quality-testing-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/cropped-20140919_105345-topaz-enhance-3.2x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>Water Quality Testing Services</h1>
          <p>Professional water quality testing to ensure your pond maintains optimal conditions for fish and plants</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Testing Quote</a>
            <Link to="/pond-services" className="secondary-button">View All Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2782.jpg" alt="Professional water quality testing" />
        </div>
      </section>

      {/* Why Water Testing Matters */}
      <section className="importance-section first-section-gradient">
        <div className="container">
          <h2>Why Water Quality Testing Matters</h2>
          <p>Maintaining proper water quality is essential for a healthy pond ecosystem</p>
          <div className="importance-grid">
            <div className="importance-item">
              <div className="importance-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#FF6B6B"/>
                </svg>
              </div>
              <h3>Fish Health</h3>
              <p>Poor water quality can stress fish, making them susceptible to disease and death</p>
            </div>
            <div className="importance-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 6 17.25C7.12 17.25 8.25 16.75 9 16L17 8Z" fill="#32CD32"/>
  </svg>
              </div>
              <h3>Plant Growth</h3>
              <p>Aquatic plants need specific water conditions to thrive and provide natural filtration</p>
            </div>
            <div className="importance-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#00BFFF"/>
  </svg>
              </div>
              <h3>Water Clarity</h3>
              <p>Balanced water chemistry prevents algae blooms and maintains crystal clear water</p>
            </div>
            <div className="importance-item">
              <div className="importance-icon">🔬</div>
              <h3>Preventive Care</h3>
              <p>Regular testing catches problems early before they become expensive to fix</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Services */}
      <section className="testing-services-section">
        <div className="container">
          <h2>Our Water Quality Testing Services</h2>
          <p>Comprehensive testing for all critical water parameters</p>
          <div className="testing-services-grid">
            {testingServices.map((service, index) => (
              <div key={index} className="testing-service-card">
                <div className="testing-service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="testing-service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="testing-details">
                    <div className="detail-item">
                      <strong>Importance:</strong> {service.importance}
                    </div>
                    <div className="detail-item">
                      <strong>Ideal Range:</strong> {service.idealRange}
                    </div>
                    <div className="detail-item">
                      <strong>Frequency:</strong> {service.frequency}
                    </div>
                    <div className="detail-item">
                      <strong>Price:</strong> {service.price}
                    </div>
                  </div>
                  <a href="tel:(801) 590-8516" className="testing-service-cta">Call for Testing</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Packages */}
      <section className="packages-section">
        <div className="container">
          <h2>Testing Packages</h2>
          <p>Choose the testing package that fits your needs and budget</p>
          <div className="packages-grid">
            {testingPackages.map((pkg, index) => (
              <div key={index} className={`package-card ${pkg.name === 'Standard Water Test' ? 'featured' : ''}`}>
                <div className="package-image">
                  <img src={pkg.image} alt={pkg.name} />
                </div>
                <div className="package-content">
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                  <div className="package-turnaround">{pkg.turnaround}</div>
                  <ul className="package-tests">
                    {pkg.tests.map((test, testIndex) => (
                      <li key={testIndex}>{test}</li>
                    ))}
                  </ul>
                  <a href="tel:(801) 590-8516" className="package-cta">Call for {pkg.name}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="process-section">
        <div className="container">
          <h2>Our Testing Process</h2>
          <p>Professional testing with quick turnaround and detailed reporting</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Sample Collection</h3>
              <p>We collect water samples from multiple locations in your pond for accurate results</p>
              <img src="/images/IMG_2770.jpg" alt="Water sample collection" />
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Laboratory Testing</h3>
              <p>Professional testing using calibrated equipment and industry-standard methods</p>
              <img src="/images/IMG_2782.jpg" alt="Laboratory testing" />
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Results & Recommendations</h3>
              <p>Detailed report with results, ideal ranges, and specific recommendations for your pond</p>
              <img src="/images/IMG_2775.jpg" alt="Test results and recommendations" />
            </div>
          </div>
        </div>
      </section>

      {/* When to Test */}
      <section className="when-to-test-section gradient-wipe-up">
        <div className="container">
          <h2>When Should You Test Your Water?</h2>
          <div className="testing-schedule">
            <div className="schedule-item">
              <h3>Weekly Testing</h3>
              <p>Essential for new ponds, after water changes, or when problems arise</p>
              <ul>
                <li>pH levels</li>
                <li>Ammonia levels</li>
                <li>Nitrite levels</li>
                <li>Dissolved oxygen</li>
              </ul>
            </div>
            <div className="schedule-item">
              <h3>Monthly Testing</h3>
              <p>Maintenance testing for established ponds with stable conditions</p>
              <ul>
                <li>Nitrate levels</li>
                <li>Alkalinity</li>
                <li>Hardness</li>
                <li>Phosphate levels</li>
              </ul>
            </div>
            <div className="schedule-item">
              <h3>Seasonal Testing</h3>
              <p>Special testing during seasonal changes and extreme weather</p>
              <ul>
                <li>Spring opening</li>
                <li>Summer heat stress</li>
                <li>Fall preparation</li>
                <li>Winter monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Test Your Water Quality?</h2>
          <p>Contact us today to schedule professional water quality testing for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterQualityTestingPage;
