import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './WaterTreatmentsPage.css';

const WaterTreatmentsPage = () => {
  const stats = [
    { number: '100+', label: 'Treatment Products', icon: 'Products' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '100%', label: 'Fish Safe', icon: 'Safety' },
    { number: '24/7', label: 'Expert Support', icon: 'Support' }
  ];

  const treatmentCategories = [
    {
      name: 'Water Clarifiers',
      image: '/images/IMG_2779.jpg',
      description: 'Professional water clarifiers to eliminate cloudiness and improve water clarity',
      features: ['Fast-acting formula', 'Safe for fish and plants', 'Removes suspended particles', 'Improves water clarity'],
      products: ['Pond Clear Pro', 'Crystal Clear Plus', 'Ultra Clarifier', 'Professional Grade'],
      applications: ['Cloudy water', 'Suspended debris', 'Algae blooms', 'General maintenance'],
    },
    {
      name: 'Algae Control',
      image: '/images/IMG_2780.jpg',
      description: 'Effective algae control products to prevent and eliminate algae growth',
      features: ['Prevents algae growth', 'Eliminates existing algae', 'Safe for aquatic life', 'Long-lasting protection'],
      products: ['Algae Block', 'Green Water Control', 'String Algae Remover', 'Algae Prevention'],
      applications: ['Green water', 'String algae', 'Blue-green algae', 'Preventive treatment'],
    },
    {
      name: 'Beneficial Bacteria',
      image: '/images/IMG_2776.jpg',
      description: 'Natural beneficial bacteria to maintain healthy pond ecosystem',
      features: ['Natural biological filtration', 'Breaks down organic waste', 'Reduces ammonia levels', 'Improves water quality'],
      products: ['Pond Balance Pro', 'Eco-Bacteria Plus', 'Natural Clean', 'Biological Boost'],
      applications: ['Organic waste breakdown', 'Ammonia reduction', 'Ecosystem balance', 'Seasonal maintenance'],
    },
    {
      name: 'pH Balancers',
      image: '/images/IMG_2782.jpg',
      description: 'pH adjustment products to maintain optimal water chemistry',
      features: ['Precise pH control', 'Safe for fish', 'Easy to use', 'Long-lasting effects'],
      products: ['pH Up', 'pH Down', 'pH Stabilizer', 'Buffer Plus'],
      applications: ['pH adjustment', 'Water chemistry', 'Fish health', 'Seasonal changes'],
    },
    {
      name: 'Dechlorinators',
      image: '/images/IMG_2770.jpg',
      description: 'Water conditioners to remove chlorine and chloramines from tap water',
      features: ['Removes chlorine', 'Neutralizes chloramines', 'Safe for fish', 'Instant action'],
      products: ['Chlorine Neutralizer', 'Tap Water Conditioner', 'Instant Safe', 'Water Prep'],
      applications: ['Tap water treatment', 'Water changes', 'New pond setup', 'Emergency treatment'],
    },
    {
      name: 'Sludge Removers',
      image: '/images/IMG_2775.jpg',
      description: 'Powerful sludge removers to break down organic debris and muck',
      features: ['Breaks down sludge', 'Reduces muck buildup', 'Improves water flow', 'Natural enzymes'],
      products: ['Sludge Buster', 'Muck Remover', 'Organic Clean', 'Debris Dissolver'],
      applications: ['Sludge removal', 'Muck reduction', 'Bottom cleaning', 'Maintenance'],
    }
  ];

  const seasonalTreatments = [
    {
      season: 'Spring',
      image: '/images/IMG_2779.jpg',
      description: 'Essential treatments for spring pond startup and maintenance',
      treatments: ['Beneficial bacteria boost', 'Water clarifier', 'pH adjustment', 'Algae prevention'],
      benefits: ['Healthy startup', 'Clear water', 'Balanced chemistry', 'Algae control'],
    },
    {
      season: 'Summer',
      image: '/images/IMG_2780.jpg',
      description: 'Summer maintenance treatments for optimal pond health',
      treatments: ['Algae control', 'Water clarifier', 'Beneficial bacteria', 'pH stabilizer'],
      benefits: ['Algae prevention', 'Clear water', 'Ecosystem balance', 'Stable chemistry'],
    },
    {
      season: 'Fall',
      image: '/images/IMG_2776.jpg',
      description: 'Fall preparation treatments for winter readiness',
      treatments: ['Sludge remover', 'Beneficial bacteria', 'Water clarifier', 'pH adjustment'],
      benefits: ['Clean bottom', 'Healthy bacteria', 'Clear water', 'Winter preparation'],
    },
    {
      season: 'Winter',
      image: '/images/IMG_2782.jpg',
      description: 'Winter maintenance treatments for cold weather care',
      treatments: ['Cold water bacteria', 'pH stabilizer', 'Water clarifier', 'Sludge control'],
      benefits: ['Cold weather protection', 'Stable chemistry', 'Clear water', 'Bottom maintenance'],
    }
  ];

  const waterTesting = [
    {
      name: 'pH Test Kits',
      image: '/images/IMG_2770.jpg',
      description: 'Accurate pH testing kits for water chemistry monitoring',
      features: ['Easy to use', 'Accurate results', 'Color-coded', 'Multiple tests'],
      applications: ['pH monitoring', 'Water chemistry', 'Fish health', 'Treatment planning'],
    },
    {
      name: 'Ammonia Test Kits',
      image: '/images/IMG_2775.jpg',
      description: 'Ammonia testing kits to monitor water quality and fish health',
      features: ['Precise measurement', 'Easy reading', 'Multiple tests', 'Professional grade'],
      applications: ['Ammonia monitoring', 'Fish health', 'Water quality', 'Treatment planning'],
    },
    {
      name: 'Complete Test Kits',
      image: '/images/IMG_2779.jpg',
      description: 'Comprehensive water testing kits for complete water analysis',
      features: ['Multiple parameters', 'Professional accuracy', 'Easy to use', 'Complete analysis'],
      applications: ['Complete water analysis', 'Health monitoring', 'Treatment planning', 'Professional use'],
    }
  ];

  const maintenancePrograms = [
    {
      name: 'Basic Maintenance Program',
      image: '/images/IMG_2780.jpg',
      description: 'Essential treatments for small to medium ponds',
      includes: ['Water clarifier', 'Beneficial bacteria', 'pH stabilizer', 'Basic test kit'],
      frequency: 'Monthly',
      benefits: ['Clear water', 'Healthy ecosystem', 'Balanced chemistry', 'Easy maintenance'],
    },
    {
      name: 'Professional Maintenance Program',
      image: '/images/IMG_2776.jpg',
      description: 'Comprehensive treatment program for large ponds and koi ponds',
      includes: ['All basic treatments', 'Algae control', 'Sludge remover', 'Complete test kit', 'Seasonal treatments'],
      frequency: 'Bi-weekly',
      benefits: ['Optimal water quality', 'Algae prevention', 'Clean bottom', 'Professional results'],
    },
    {
      name: 'Commercial Maintenance Program',
      image: '/images/IMG_2782.jpg',
      description: 'Industrial-grade treatment program for commercial and large installations',
      includes: ['All professional treatments', 'Custom formulations', 'Bulk quantities', 'Professional testing', '24/7 support'],
      frequency: 'Weekly',
      benefits: ['Industrial performance', 'Custom solutions', 'Bulk savings', 'Professional support'],
    }
  ];

  const treatmentTips = [
    'Test water quality before adding any treatments',
    'Follow manufacturer instructions for proper dosing',
    'Add treatments gradually to avoid shocking fish',
    'Monitor water parameters after treatment',
    'Store treatments in cool, dry places',
    'Use treatments during optimal weather conditions',
    'Keep records of treatment schedules and results',
    'Consult professionals for complex water issues'
  ];

  return (
    <>
      <SEO 
        title="Water Treatments & Chemicals - Professional Pond Water Care | Utah Water Gardens"
        description="Professional-grade water treatments and chemicals in Utah. Algae control, beneficial bacteria, pH balancers, water clarifiers. 100+ products, 15+ years experience. Serving Salt Lake County, Davis County, and surrounding areas."
        keywords="water treatments, pond chemicals, algae control, beneficial bacteria, pH balancers, water clarifiers, utah pond treatments, salt lake county pond chemicals, davis county water treatments, pond water care, water quality"
        canonical="https://utahwatergardens.com/pond-supplies/water-treatments"
      />
      <div className="water-treatments-page">
        <PageHero 
          title="Water Treatments & Chemicals"
          subtitle="Professional-grade water treatments and chemicals to maintain crystal clear, healthy pond water. From algae control to beneficial bacteria, we have everything you need."
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          backgroundImageAlt="Professional water treatments and chemicals for pond maintenance"
          stats={stats}
        />

      {/* Treatment Categories */}
      <section className="treatments-section first-section-gradient">
        <div className="container">
          <h2>Our Treatment Selection</h2>
          <p>We carry the highest quality water treatments from trusted manufacturers, ensuring your pond stays healthy and clear</p>
          <div className="treatments-grid">
            {treatmentCategories.map((treatment, index) => (
              <div key={index} className="treatment-card">
                <div className="treatment-image">
                  <img src={treatment.image} alt={treatment.name} />
                </div>
                <div className="treatment-info">
                  <h3>{treatment.name}</h3>
                  <p>{treatment.description}</p>
                  <div className="treatment-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {treatment.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="treatment-products">
                    <h4>Popular Products:</h4>
                    <ul>
                      {treatment.products.map((product, productIndex) => (
                        <li key={productIndex}>{product}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="treatment-applications">
                    <h4>Perfect For:</h4>
                    <ul>
                      {treatment.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="treatment-price">{treatment.price}</div>
                  <a href="tel:(801) 590-8516" className="treatment-cta">Call for Availability</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Treatments */}
      <section className="seasonal-section">
        <div className="container">
          <h2>Seasonal Treatment Programs</h2>
          <p>Comprehensive seasonal treatment programs designed for year-round pond health</p>
          <div className="seasonal-grid">
            {seasonalTreatments.map((season, index) => (
              <div key={index} className="seasonal-card">
                <div className="seasonal-image">
                  <img src={season.image} alt={`${season.season} treatments`} />
                </div>
                <div className="seasonal-info">
                  <h3>{season.season} Treatments</h3>
                  <p>{season.description}</p>
                  <div className="seasonal-treatments">
                    <h4>Includes:</h4>
                    <ul>
                      {season.treatments.map((treatment, treatmentIndex) => (
                        <li key={treatmentIndex}>{treatment}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="seasonal-benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {season.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="seasonal-price">{season.price}</div>
                  <a href="tel:(801) 590-8516" className="seasonal-cta">Call to Order</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Testing */}
      <section className="testing-section">
        <div className="container">
          <h2>Water Testing & Monitoring</h2>
          <p>Professional water testing kits to monitor and maintain optimal water quality</p>
          <div className="testing-grid">
            {waterTesting.map((test, index) => (
              <div key={index} className="testing-card">
                <div className="testing-image">
                  <img src={test.image} alt={test.name} />
                </div>
                <div className="testing-info">
                  <h3>{test.name}</h3>
                  <p>{test.description}</p>
                  <div className="testing-features">
                    <h4>Features:</h4>
                    <ul>
                      {test.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="testing-applications">
                    <h4>Applications:</h4>
                    <ul>
                      {test.applications.map((application, appIndex) => (
                        <li key={appIndex}>{application}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="testing-price">{test.price}</div>
                  <a href="tel:(801) 590-8516" className="testing-cta">Call for Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Programs */}
      <section className="maintenance-section">
        <div className="container">
          <h2>Maintenance Programs</h2>
          <p>Comprehensive maintenance programs for hassle-free pond care</p>
          <div className="maintenance-grid">
            {maintenancePrograms.map((program, index) => (
              <div key={index} className="maintenance-card">
                <div className="maintenance-image">
                  <img src={program.image} alt={program.name} />
                </div>
                <div className="maintenance-info">
                  <h3>{program.name}</h3>
                  <p>{program.description}</p>
                  <div className="maintenance-includes">
                    <h4>Program Includes:</h4>
                    <ul>
                      {program.includes.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="maintenance-benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="maintenance-frequency">
                    <strong>Frequency:</strong> {program.frequency}
                  </div>
                  <div className="maintenance-price">{program.price}</div>
                  <a href="tel:(801) 590-8516" className="maintenance-cta">Call to Enroll</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Treatments */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Our Water Treatments?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#6C757D"/>
                </svg>
              </div>
              <h3>Professional Grade</h3>
              <p>We only carry treatments from trusted manufacturers with proven results</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#FF6B6B"/>
                </svg>
              </div>
              <h3>Fish Safe</h3>
              <p>All our treatments are safe for fish, plants, and beneficial bacteria</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#007BFF"/>
  </svg>
              </div>
              <h3>Expert Support</h3>
              <p>Our specialists provide guidance on proper treatment selection and usage</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
                </svg>
              </div>
              <h3>Quality Guarantee</h3>
              <p>All treatments come with manufacturer warranties and satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Tips */}
      <section className="tips-section">
        <div className="container">
          <h2>Treatment Tips & Best Practices</h2>
          <p>Follow these expert tips for safe and effective water treatment</p>
          <div className="tips-content">
            <div className="tips-list">
              <h3>Essential Treatment Tips</h3>
              <ul>
                {treatmentTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
              <a href="tel:(801) 590-8516" className="tips-cta">Call for Expert Advice</a>
            </div>
            <div className="tips-image">
              <img src="/images/IMG_2770.jpg" alt="Water treatment tips and best practices" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Packages */}
      <section className="packages-section gradient-wipe-up">
        <div className="container">
          <h2>Treatment Packages</h2>
          <p>Save money with our complete treatment packages</p>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Starter Treatment Package</h3>
              <div className="package-description">Perfect for small ponds and new pond owners</div>
              <ul>
                <li>Water clarifier</li>
                <li>Beneficial bacteria</li>
                <li>pH test kit</li>
                <li>Basic algae control</li>
                <li>Treatment guide</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card featured">
              <h3>Professional Treatment Package</h3>
              <div className="package-description">Ideal for medium to large residential ponds</div>
              <ul>
                <li>All starter treatments</li>
                <li>Advanced algae control</li>
                <li>Sludge remover</li>
                <li>Complete test kit</li>
                <li>Seasonal treatments</li>
                <li>Professional guidance</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
            </div>
            <div className="package-card">
              <h3>Commercial Treatment Package</h3>
              <div className="package-description">For large ponds and commercial applications</div>
              <ul>
                <li>All professional treatments</li>
                <li>Bulk quantities</li>
                <li>Custom formulations</li>
                <li>Professional testing</li>
                <li>24/7 support</li>
                <li>Maintenance program</li>
                <li>Performance monitoring</li>
              </ul>
              <a href="tel:(801) 590-8516" className="package-cta">Call to Order</a>
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
            water treatments and chemicals. Our experienced team provides expert guidance throughout Utah.
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
          <h2>Need Help with Water Treatment?</h2>
          <p>Our experts can help you choose the right treatments for your specific pond needs</p>
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

export default WaterTreatmentsPage;
