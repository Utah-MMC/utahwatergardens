import React from 'react';
import { Link } from 'react-router-dom';
import './PondCleaningPage.css';

const PondCleaningPage = () => {
  const cleaningServices = [
    {
      name: 'Debris Removal',
      image: '/images/IMG_2770.jpg',
      description: 'Remove leaves, twigs, and other organic debris that can decompose and harm water quality',
      benefits: ['Prevents water quality issues', 'Reduces algae growth', 'Maintains pond aesthetics'],
      frequency: 'Seasonal',
      price: 'Starting at $75'
    },
    {
      name: 'Algae Control',
      image: '/images/IMG_2775.jpg',
      description: 'Professional algae removal and prevention to maintain clear, healthy water',
      benefits: ['Improves water clarity', 'Enhances fish health', 'Prevents oxygen depletion'],
      frequency: 'As needed',
      price: 'Starting at $95'
    },
    {
      name: 'Sediment Removal',
      image: '/images/IMG_2776.jpg',
      description: 'Remove accumulated sediment and sludge from pond bottom',
      benefits: ['Restores pond depth', 'Improves water circulation', 'Prevents toxic buildup'],
      frequency: 'Annual',
      price: 'Starting at $150'
    },
    {
      name: 'Filter Cleaning',
      image: '/images/IMG_2779.jpg',
      description: 'Clean and maintain filtration systems for optimal performance',
      benefits: ['Maintains water quality', 'Extends filter life', 'Improves efficiency'],
      frequency: 'Monthly',
      price: 'Starting at $45'
    },
    {
      name: 'Plant Maintenance',
      image: '/images/IMG_2780.jpg',
      description: 'Trim and maintain aquatic plants to prevent overgrowth',
      benefits: ['Controls plant spread', 'Maintains balance', 'Improves aesthetics'],
      frequency: 'Bi-monthly',
      price: 'Starting at $65'
    },
    {
      name: 'Water Change',
      image: '/images/IMG_2782.jpg',
      description: 'Partial water changes to refresh pond water and remove accumulated waste',
      benefits: ['Improves water quality', 'Reduces toxins', 'Refreshes ecosystem'],
      frequency: 'Seasonal',
      price: 'Starting at $85'
    }
  ];

  const cleaningPackages = [
    {
      name: 'Basic Cleaning',
      services: ['Debris removal', 'Surface cleaning', 'Basic plant trimming'],
      price: '$125',
      duration: '2-3 hours',
      image: '/images/IMG_2770.jpg'
    },
    {
      name: 'Standard Cleaning',
      services: ['Debris removal', 'Algae control', 'Filter cleaning', 'Plant maintenance'],
      price: '$195',
      duration: '4-5 hours',
      image: '/images/IMG_2775.jpg'
    },
    {
      name: 'Deep Cleaning',
      services: ['All standard services', 'Sediment removal', 'Water change', 'Equipment inspection'],
      price: '$295',
      duration: '6-8 hours',
      image: '/images/IMG_2779.jpg'
    }
  ];

  return (
    <div className="pond-cleaning-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Pond Cleaning Services</h1>
          <p>Professional pond cleaning to restore water clarity and maintain a healthy ecosystem</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Cleaning Quote</a>
            <Link to="/pond-services" className="secondary-button">View All Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2770.jpg" alt="Professional pond cleaning services" />
        </div>
      </section>

      {/* Why Clean Your Pond */}
      <section className="why-clean-section">
        <div className="container">
          <h2>Why Regular Pond Cleaning is Essential</h2>
          <p>Maintaining a clean pond is crucial for the health of your fish, plants, and overall ecosystem</p>
          <div className="why-clean-grid">
            <div className="why-clean-item">
              <div className="why-clean-icon">🐟</div>
              <h3>Fish Health</h3>
              <p>Clean water prevents disease and stress in your pond fish</p>
            </div>
            <div className="why-clean-item">
              <div className="why-clean-icon">🌿</div>
              <h3>Plant Growth</h3>
              <p>Proper cleaning allows aquatic plants to thrive and provide natural filtration</p>
            </div>
            <div className="why-clean-item">
              <div className="why-clean-icon">💧</div>
              <h3>Water Quality</h3>
              <p>Regular cleaning maintains optimal water parameters and clarity</p>
            </div>
            <div className="why-clean-item">
              <div className="why-clean-icon">🔧</div>
              <h3>Equipment Longevity</h3>
              <p>Clean ponds extend the life of pumps, filters, and other equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="cleaning-services-section">
        <div className="container">
          <h2>Our Pond Cleaning Services</h2>
          <p>Comprehensive cleaning services tailored to your pond's specific needs</p>
          <div className="cleaning-services-grid">
            {cleaningServices.map((service, index) => (
              <div key={index} className="cleaning-service-card">
                <div className="cleaning-service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="cleaning-service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="cleaning-benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="cleaning-details">
                    <span className="frequency">Frequency: {service.frequency}</span>
                    <span className="price">{service.price}</span>
                  </div>
                  <a href="tel:(801) 590-8516" className="cleaning-service-cta">Call for Service</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Packages */}
      <section className="cleaning-packages-section">
        <div className="container">
          <h2>Cleaning Packages</h2>
          <p>Choose the cleaning package that fits your needs and budget</p>
          <div className="cleaning-packages-grid">
            {cleaningPackages.map((pkg, index) => (
              <div key={index} className={`cleaning-package-card ${pkg.name === 'Standard Cleaning' ? 'featured' : ''}`}>
                <div className="cleaning-package-image">
                  <img src={pkg.image} alt={pkg.name} />
                </div>
                <div className="cleaning-package-content">
                  <h3>{pkg.name}</h3>
                  <div className="cleaning-package-price">{pkg.price}</div>
                  <div className="cleaning-package-duration">{pkg.duration}</div>
                  <ul className="cleaning-package-services">
                    {pkg.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>{service}</li>
                    ))}
                  </ul>
                  <a href="tel:(801) 590-8516" className="cleaning-package-cta">Call for {pkg.name}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="cleaning-process-section">
        <div className="container">
          <h2>Our Cleaning Process</h2>
          <p>Professional cleaning with minimal disruption to your pond ecosystem</p>
          <div className="cleaning-process-steps">
            <div className="cleaning-process-step">
              <div className="step-number">1</div>
              <h3>Assessment</h3>
              <p>We evaluate your pond's condition and determine the best cleaning approach</p>
              <img src="/images/IMG_2770.jpg" alt="Pond assessment" />
            </div>
            <div className="cleaning-process-step">
              <div className="step-number">2</div>
              <h3>Preparation</h3>
              <p>We prepare the area and protect fish and plants during the cleaning process</p>
              <img src="/images/IMG_2775.jpg" alt="Cleaning preparation" />
            </div>
            <div className="cleaning-process-step">
              <div className="step-number">3</div>
              <h3>Cleaning</h3>
              <p>Professional cleaning using appropriate tools and techniques for your pond type</p>
              <img src="/images/IMG_2779.jpg" alt="Professional cleaning" />
            </div>
            <div className="cleaning-process-step">
              <div className="step-number">4</div>
              <h3>Restoration</h3>
              <p>We restore your pond to optimal condition and provide maintenance recommendations</p>
              <img src="/images/IMG_2782.jpg" alt="Pond restoration" />
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Cleaning */}
      <section className="seasonal-cleaning-section">
        <div className="container">
          <h2>Seasonal Cleaning Schedule</h2>
          <p>Different seasons require different cleaning approaches</p>
          <div className="seasonal-cleaning-grid">
            <div className="seasonal-cleaning-item">
              <h3>Spring Cleaning</h3>
              <p>Remove winter debris and prepare for the growing season</p>
              <ul>
                <li>Remove fallen leaves and debris</li>
                <li>Clean filters and equipment</li>
                <li>Test water quality</li>
                <li>Plant new aquatic plants</li>
              </ul>
              <a href="tel:(801) 590-8516" className="seasonal-cleaning-cta">Schedule Spring Cleaning</a>
            </div>
            <div className="seasonal-cleaning-item">
              <h3>Summer Maintenance</h3>
              <p>Maintain water quality during peak growing season</p>
              <ul>
                <li>Control algae growth</li>
                <li>Clean filters regularly</li>
                <li>Monitor water levels</li>
                <li>Trim overgrown plants</li>
              </ul>
              <a href="tel:(801) 590-8516" className="seasonal-cleaning-cta">Schedule Summer Maintenance</a>
            </div>
            <div className="seasonal-cleaning-item">
              <h3>Fall Preparation</h3>
              <p>Prepare pond for winter and prevent spring problems</p>
              <ul>
                <li>Remove dying plants</li>
                <li>Clean filters thoroughly</li>
                <li>Remove excess debris</li>
                <li>Prepare for winter</li>
              </ul>
              <a href="tel:(801) 590-8516" className="seasonal-cleaning-cta">Schedule Fall Preparation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Clean Your Pond?</h2>
          <p>Contact us today to schedule professional pond cleaning services</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PondCleaningPage;
