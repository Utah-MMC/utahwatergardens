import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './PondCleaningPage.css';

const PondCleaningPage = () => {
  const stats = [
    { number: '500+', label: 'Ponds Cleaned', icon: 'Ponds' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '100%', label: 'Customer Satisfaction', icon: 'Quality' },
    { number: '24/7', label: 'Emergency Service', icon: 'Support' }
  ];

  const cleaningServices = [
    {
      name: 'Debris Removal',
      image: '/images/IMG_2770.jpg',
      description: 'Remove leaves, twigs, and other organic debris that can decompose and harm water quality',
      benefits: ['Prevents water quality issues', 'Reduces algae growth', 'Maintains pond aesthetics'],
      frequency: 'Seasonal',
    },
    {
      name: 'Algae Control',
      image: '/images/IMG_2775.jpg',
      description: 'Professional algae removal and prevention to maintain clear, healthy water',
      benefits: ['Improves water clarity', 'Enhances fish health', 'Prevents oxygen depletion'],
      frequency: 'As needed',
    },
    {
      name: 'Sediment Removal',
      image: '/images/IMG_2776.jpg',
      description: 'Remove accumulated sediment and sludge from pond bottom',
      benefits: ['Restores pond depth', 'Improves water circulation', 'Prevents toxic buildup'],
      frequency: 'Annual',
    },
    {
      name: 'Filter Cleaning',
      image: '/images/IMG_2779.jpg',
      description: 'Clean and maintain filtration systems for optimal performance',
      benefits: ['Maintains water quality', 'Extends filter life', 'Improves efficiency'],
      frequency: 'Monthly',
    },
    {
      name: 'Plant Maintenance',
      image: '/images/IMG_2780.jpg',
      description: 'Trim and maintain aquatic plants to prevent overgrowth',
      benefits: ['Controls plant spread', 'Maintains balance', 'Improves aesthetics'],
      frequency: 'Bi-monthly',
    },
    {
      name: 'Water Change',
      image: '/images/IMG_2782.jpg',
      description: 'Partial water changes to refresh pond water and remove accumulated waste',
      benefits: ['Improves water quality', 'Reduces toxins', 'Refreshes ecosystem'],
      frequency: 'Seasonal',
    }
  ];

  const cleaningPackages = [
    {
      name: 'Basic Cleaning',
      services: ['Debris removal', 'Surface cleaning', 'Basic plant trimming'],
      duration: '2-3 hours',
      image: '/images/IMG_2770.jpg'
    },
    {
      name: 'Standard Cleaning',
      services: ['Debris removal', 'Algae control', 'Filter cleaning', 'Plant maintenance'],
      duration: '4-5 hours',
      image: '/images/IMG_2775.jpg'
    },
    {
      name: 'Deep Cleaning',
      services: ['All standard services', 'Sediment removal', 'Water change', 'Equipment inspection'],
      duration: '6-8 hours',
      image: '/images/IMG_2779.jpg'
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Cleaning Services - Professional Pond Cleaning | Utah Water Gardens"
        description="Professional pond cleaning services in Utah. Debris removal, algae control, sediment removal, filter cleaning. 15+ years experience, 500+ ponds cleaned. Serving Salt Lake County, Davis County, and surrounding areas."
        keywords="pond cleaning, pond cleaning services, algae removal, debris removal, sediment removal, filter cleaning, utah pond cleaning, salt lake county pond cleaning, davis county pond cleaning, professional pond cleaning, pond maintenance"
        canonical="https://utahwatergardens.com/pond-services/cleaning"
      />
      <div className="pond-cleaning-page">
        <PageHero 
          title="Pond Cleaning Services"
          subtitle="Professional pond cleaning to restore water clarity and maintain a healthy ecosystem"
          backgroundImage="/images/a2f13a6fa6605287e6578c3fe26cc94d-enhance-4x.jpeg"
          backgroundImageAlt="Professional pond cleaning services"
          stats={stats}
        />

      {/* Why Clean Your Pond */}
      <section className="why-clean-section first-section-gradient">
        <div className="container">
          <h2>Why Regular Pond Cleaning is Essential</h2>
          <p>Maintaining a clean pond is crucial for the health of your fish, plants, and overall ecosystem</p>
          <div className="why-clean-grid">
            <div className="why-clean-item">
              <div className="why-clean-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#FF6B6B"/>
                </svg>
              </div>
              <h3>Fish Health</h3>
              <p>Clean water prevents disease and stress in your pond fish</p>
            </div>
            <div className="why-clean-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 6 17.25C7.12 17.25 8.25 16.75 9 16L17 8Z" fill="#32CD32"/>
  </svg>
              </div>
              <h3>Plant Growth</h3>
              <p>Proper cleaning allows aquatic plants to thrive and provide natural filtration</p>
            </div>
            <div className="why-clean-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#00BFFF"/>
  </svg>
              </div>
              <h3>Water Quality</h3>
              <p>Regular cleaning maintains optimal water parameters and clarity</p>
            </div>
            <div className="why-clean-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
  </svg>
              </div>
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
              <Link key={index} to="/pond-services/cleaning" className="cleaning-service-card">
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
                  <a href="tel:(801) 590-8516" className="cleaning-service-cta" onClick={(e) => e.stopPropagation()}>Call for Service</a>
                </div>
              </Link>
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
              <Link key={index} to="/pond-services/cleaning" className={`cleaning-package-card ${pkg.name === 'Standard Cleaning' ? 'featured' : ''}`}>
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
                  <a href="tel:(801) 590-8516" className="cleaning-package-cta" onClick={(e) => e.stopPropagation()}>Call for {pkg.name}</a>
                </div>
              </Link>
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
              <img src="/images/a5604a70ec7723a9bafd10a9e309e113-enhance-4x.jpeg" alt="Pond assessment" />
            </div>
            <div className="cleaning-process-step">
              <div className="step-number">2</div>
              <h3>Preparation</h3>
              <p>We prepare the area and protect fish and plants during the cleaning process</p>
              <img src="/images/a68f5846d64bba8feebcef312d7bfd24-sharpen.jpeg" alt="Cleaning preparation" />
            </div>
            <div className="cleaning-process-step">
              <div className="step-number">3</div>
              <h3>Cleaning</h3>
              <p>Professional cleaning using appropriate tools and techniques for your pond type</p>
              <img src="/images/a7da75b080b639d3ca4962092011eea0-enhance-4x.jpeg" alt="Professional cleaning" />
            </div>
            <div className="cleaning-process-step">
              <div className="step-number">4</div>
              <h3>Restoration</h3>
              <p>We restore your pond to optimal condition and provide maintenance recommendations</p>
              <img src="/images/a9f0e423dbf4d51fe226bcc8d5f2055f-denoise-enhance-4x.jpeg" alt="Pond restoration" />
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Cleaning */}
      <section className="seasonal-cleaning-section gradient-wipe-up">
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

      {/* Service Areas */}
      <section className="service-areas-section">
        <div className="container">
          <h2>Areas We Serve</h2>
          <p className="service-areas-intro">
            We proudly serve the greater Salt Lake City area and surrounding communities with our professional 
            pond cleaning services. Our experienced team provides thorough cleaning throughout Utah.
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



export default PondCleaningPage;
