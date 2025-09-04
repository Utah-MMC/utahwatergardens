import React from 'react';
import { Link } from 'react-router-dom';
import './SeasonalServicesPage.css';

const SeasonalServicesPage = () => {
  const seasonalServices = [
    {
      season: 'Spring',
      image: '/images/IMG_2775.jpg',
      description: 'Prepare your pond for the growing season with our comprehensive spring services',
      services: [
        'Pond cleaning and debris removal',
        'Filter system startup and testing',
        'Plant division and repotting',
        'Water quality testing and adjustment',
        'Fish health assessment',
        'Equipment maintenance and repair'
      ],
      price: 'Starting at $149'
    },
    {
      season: 'Summer',
      image: '/images/IMG_2779.jpg',
      description: 'Keep your pond thriving during the hot summer months with our maintenance services',
      services: [
        'Water quality monitoring',
        'Algae control and treatment',
        'Plant maintenance and fertilization',
        'Fish feeding and health checks',
        'Equipment performance optimization',
        'Emergency repair services'
      ],
      price: 'Starting at $99'
    },
    {
      season: 'Fall',
      image: '/images/IMG_2780.jpg',
      description: 'Prepare your pond for winter with our essential fall maintenance services',
      services: [
        'Leaf and debris removal',
        'Plant winterization',
        'Fish winter preparation',
        'Equipment winterization',
        'Water level adjustment',
        'Winter cover installation'
      ],
      price: 'Starting at $129'
    },
    {
      season: 'Winter',
      image: '/images/IMG_2776.jpg',
      description: 'Protect your pond during the cold winter months with our specialized services',
      services: [
        'Ice management and de-icing',
        'Equipment monitoring',
        'Fish winter care',
        'Emergency winter services',
        'Equipment protection',
        'Winter maintenance planning'
      ],
      price: 'Starting at $89'
    }
  ];

  const seasonalTips = {
    spring: [
      'Start feeding fish when water temperature reaches 50°F',
      'Clean filters and replace media as needed',
      'Test water parameters weekly during startup',
      'Gradually increase pump flow rates',
      'Monitor for early signs of algae growth'
    ],
    summer: [
      'Maintain water temperature below 80°F',
      'Increase aeration during hot weather',
      'Feed fish 2-3 times daily',
      'Check water quality weekly',
      'Remove excess algae and debris regularly'
    ],
    fall: [
      'Reduce feeding as temperatures drop',
      'Remove falling leaves daily',
      'Prepare plants for dormancy',
      'Check equipment for winter readiness',
      'Plan for winter equipment needs'
    ],
    winter: [
      'Keep a hole in the ice for gas exchange',
      'Monitor equipment for freezing issues',
      'Don\'t feed fish below 50°F',
      'Check water levels regularly',
      'Have emergency equipment ready'
    ]
  };

  const maintenanceSchedule = [
    {
      month: 'March',
      tasks: ['Spring startup', 'Filter cleaning', 'Water testing', 'Plant preparation']
    },
    {
      month: 'April',
      tasks: ['Plant installation', 'Fish introduction', 'Equipment testing', 'Algae prevention']
    },
    {
      month: 'May',
      tasks: ['Regular maintenance', 'Water quality monitoring', 'Plant care', 'Fish feeding']
    },
    {
      month: 'June',
      tasks: ['Summer maintenance', 'Algae control', 'Equipment optimization', 'Water testing']
    },
    {
      month: 'July',
      tasks: ['Peak season care', 'Water quality management', 'Plant maintenance', 'Fish health checks']
    },
    {
      month: 'August',
      tasks: ['Late summer care', 'Water quality monitoring', 'Equipment maintenance', 'Fall preparation']
    },
    {
      month: 'September',
      tasks: ['Fall preparation', 'Plant winterization', 'Equipment checks', 'Winter planning']
    },
    {
      month: 'October',
      tasks: ['Fall maintenance', 'Leaf removal', 'Winter preparation', 'Equipment winterization']
    },
    {
      month: 'November',
      tasks: ['Winter setup', 'Equipment protection', 'Final cleanup', 'Winter monitoring setup']
    },
    {
      month: 'December',
      tasks: ['Winter maintenance', 'Ice management', 'Equipment monitoring', 'Emergency preparation']
    },
    {
      month: 'January',
      tasks: ['Winter care', 'Equipment checks', 'Water quality monitoring', 'Emergency services']
    },
    {
      month: 'February',
      tasks: ['Late winter care', 'Spring planning', 'Equipment preparation', 'Season transition']
    }
  ];

  return (
    <div className="seasonal-services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Seasonal Pond Care Services</h1>
          <p>Professional seasonal maintenance to keep your pond healthy and beautiful year-round. Our experts understand the unique needs of each season.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Seasonal Care</a>
            <Link to="/pond-services" className="secondary-button">View All Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2775.jpg" alt="Seasonal pond care services throughout the year" />
        </div>
      </section>

      {/* Seasonal Services Overview */}
      <section className="services-section">
        <div className="container">
          <h2>Our Seasonal Services</h2>
          <p>Each season brings unique challenges and opportunities for your pond. We provide specialized care for every time of year.</p>
          <div className="seasonal-grid">
            {seasonalServices.map((season, index) => (
              <div key={index} className="season-card">
                <div className="season-header">
                  <h3>{season.season}</h3>
                  <div className="season-price">{season.price}</div>
                </div>
                <div className="season-image">
                  <img src={season.image} alt={`${season.season} pond care`} />
                </div>
                <div className="season-content">
                  <p>{season.description}</p>
                  <div className="season-services">
                    <h4>Services Include:</h4>
                    <ul>
                      {season.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <a href="tel:(801) 590-8516" className="season-cta">Call for {season.season} Care</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Seasonal Care Matters */}
      <section className="why-matters-section">
        <div className="container">
          <h2>Why Seasonal Care Matters</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🌱</div>
              <h3>Prevent Problems</h3>
              <p>Regular seasonal maintenance prevents major issues before they become costly problems</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🐟</div>
              <h3>Fish Health</h3>
              <p>Proper seasonal care ensures your fish remain healthy and happy throughout the year</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💧</div>
              <h3>Water Quality</h3>
              <p>Seasonal adjustments maintain optimal water conditions for all pond life</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔧</div>
              <h3>Equipment Longevity</h3>
              <p>Proper seasonal maintenance extends the life of your pond equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="tips-section">
        <div className="container">
          <h2>Seasonal Care Tips</h2>
          <div className="tips-grid">
            <div className="tip-card spring">
              <h3>Spring Tips</h3>
              <ul>
                {seasonalTips.spring.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="tip-card summer">
              <h3>Summer Tips</h3>
              <ul>
                {seasonalTips.summer.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="tip-card fall">
              <h3>Fall Tips</h3>
              <ul>
                {seasonalTips.fall.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="tip-card winter">
              <h3>Winter Tips</h3>
              <ul>
                {seasonalTips.winter.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Maintenance Schedule */}
      <section className="schedule-section">
        <div className="container">
          <h2>Annual Maintenance Schedule</h2>
          <p>Stay on track with our comprehensive monthly maintenance guide</p>
          <div className="schedule-grid">
            {maintenanceSchedule.map((month, index) => (
              <div key={index} className="month-card">
                <h3>{month.month}</h3>
                <ul>
                  {month.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Packages */}
      <section className="packages-section">
        <div className="container">
          <h2>Seasonal Care Packages</h2>
          <p>Choose the package that best fits your pond care needs</p>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Basic Seasonal Care</h3>
              <div className="package-price">$399/year</div>
              <div className="package-description">Essential seasonal maintenance for small ponds</div>
              <ul>
                <li>4 seasonal visits per year</li>
                <li>Basic water quality testing</li>
                <li>Equipment inspection</li>
                <li>Seasonal recommendations</li>
                <li>Emergency support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Enroll</a>
            </div>
            <div className="package-card featured">
              <h3>Premium Seasonal Care</h3>
              <div className="package-price">$699/year</div>
              <div className="package-description">Comprehensive seasonal care for medium to large ponds</div>
              <ul>
                <li>6 seasonal visits per year</li>
                <li>Comprehensive water testing</li>
                <li>Plant care and maintenance</li>
                <li>Fish health monitoring</li>
                <li>Equipment maintenance</li>
                <li>Priority emergency support</li>
                <li>Seasonal care reports</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Enroll</a>
            </div>
            <div className="package-card">
              <h3>Ultimate Seasonal Care</h3>
              <div className="package-price">$999/year</div>
              <div className="package-description">Complete seasonal care for premium ponds</div>
              <ul>
                <li>12 monthly visits per year</li>
                <li>Advanced water quality management</li>
                <li>Complete plant and fish care</li>
                <li>Equipment optimization</li>
                <li>24/7 emergency support</li>
                <li>Custom care plans</li>
                <li>Quarterly detailed reports</li>
                <li>Seasonal consultation calls</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Enroll</a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Seasonal Services */}
      <section className="emergency-section">
        <div className="container">
          <h2>Emergency Seasonal Services</h2>
          <div className="emergency-content">
            <div className="emergency-text">
              <h3>When Seasons Go Wrong</h3>
              <p>Unexpected weather events or seasonal problems can threaten your pond. We offer emergency services to protect your investment.</p>
              <div className="emergency-features">
                <div className="emergency-feature">
                  <span className="feature-icon">🌪️</span>
                  <span>Storm damage repair</span>
                </div>
                <div className="emergency-feature">
                  <span className="feature-icon">❄️</span>
                  <span>Freeze protection</span>
                </div>
                <div className="emergency-feature">
                  <span className="feature-icon">🌊</span>
                  <span>Flood response</span>
                </div>
                <div className="emergency-feature">
                  <span className="feature-icon">🔥</span>
                  <span>Heat wave protection</span>
                </div>
              </div>
              <a href="tel:(801) 590-8516" className="emergency-cta">Call Emergency Services</a>
            </div>
            <div className="emergency-image">
              <img src="/images/IMG_2782.jpg" alt="Emergency seasonal pond services" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Ready for Seasonal Care?</h2>
          <p>Our seasonal experts are ready to keep your pond healthy and beautiful throughout the year</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeasonalServicesPage;
