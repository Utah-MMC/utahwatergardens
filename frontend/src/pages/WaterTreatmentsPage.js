import React from 'react';
import { Link } from 'react-router-dom';
import './WaterTreatmentsPage.css';

const WaterTreatmentsPage = () => {
  const treatmentCategories = [
    {
      name: 'Water Clarifiers',
      image: '/images/IMG_2779.jpg',
      description: 'Professional water clarifiers to eliminate cloudiness and improve water clarity',
      features: ['Fast-acting formula', 'Safe for fish and plants', 'Removes suspended particles', 'Improves water clarity'],
      products: ['Pond Clear Pro', 'Crystal Clear Plus', 'Ultra Clarifier', 'Professional Grade'],
      applications: ['Cloudy water', 'Suspended debris', 'Algae blooms', 'General maintenance'],
      price: 'Starting at $12.99'
    },
    {
      name: 'Algae Control',
      image: '/images/IMG_2780.jpg',
      description: 'Effective algae control products to prevent and eliminate algae growth',
      features: ['Prevents algae growth', 'Eliminates existing algae', 'Safe for aquatic life', 'Long-lasting protection'],
      products: ['Algae Block', 'Green Water Control', 'String Algae Remover', 'Algae Prevention'],
      applications: ['Green water', 'String algae', 'Blue-green algae', 'Preventive treatment'],
      price: 'Starting at $15.99'
    },
    {
      name: 'Beneficial Bacteria',
      image: '/images/IMG_2776.jpg',
      description: 'Natural beneficial bacteria to maintain healthy pond ecosystem',
      features: ['Natural biological filtration', 'Breaks down organic waste', 'Reduces ammonia levels', 'Improves water quality'],
      products: ['Pond Balance Pro', 'Eco-Bacteria Plus', 'Natural Clean', 'Biological Boost'],
      applications: ['Organic waste breakdown', 'Ammonia reduction', 'Ecosystem balance', 'Seasonal maintenance'],
      price: 'Starting at $18.99'
    },
    {
      name: 'pH Balancers',
      image: '/images/IMG_2782.jpg',
      description: 'pH adjustment products to maintain optimal water chemistry',
      features: ['Precise pH control', 'Safe for fish', 'Easy to use', 'Long-lasting effects'],
      products: ['pH Up', 'pH Down', 'pH Stabilizer', 'Buffer Plus'],
      applications: ['pH adjustment', 'Water chemistry', 'Fish health', 'Seasonal changes'],
      price: 'Starting at $9.99'
    },
    {
      name: 'Dechlorinators',
      image: '/images/IMG_2770.jpg',
      description: 'Water conditioners to remove chlorine and chloramines from tap water',
      features: ['Removes chlorine', 'Neutralizes chloramines', 'Safe for fish', 'Instant action'],
      products: ['Chlorine Neutralizer', 'Tap Water Conditioner', 'Instant Safe', 'Water Prep'],
      applications: ['Tap water treatment', 'Water changes', 'New pond setup', 'Emergency treatment'],
      price: 'Starting at $7.99'
    },
    {
      name: 'Sludge Removers',
      image: '/images/IMG_2775.jpg',
      description: 'Powerful sludge removers to break down organic debris and muck',
      features: ['Breaks down sludge', 'Reduces muck buildup', 'Improves water flow', 'Natural enzymes'],
      products: ['Sludge Buster', 'Muck Remover', 'Organic Clean', 'Debris Dissolver'],
      applications: ['Sludge removal', 'Muck reduction', 'Bottom cleaning', 'Maintenance'],
      price: 'Starting at $14.99'
    }
  ];

  const seasonalTreatments = [
    {
      season: 'Spring',
      image: '/images/IMG_2779.jpg',
      description: 'Essential treatments for spring pond startup and maintenance',
      treatments: ['Beneficial bacteria boost', 'Water clarifier', 'pH adjustment', 'Algae prevention'],
      benefits: ['Healthy startup', 'Clear water', 'Balanced chemistry', 'Algae control'],
      price: 'Starting at $25.99'
    },
    {
      season: 'Summer',
      image: '/images/IMG_2780.jpg',
      description: 'Summer maintenance treatments for optimal pond health',
      treatments: ['Algae control', 'Water clarifier', 'Beneficial bacteria', 'pH stabilizer'],
      benefits: ['Algae prevention', 'Clear water', 'Ecosystem balance', 'Stable chemistry'],
      price: 'Starting at $29.99'
    },
    {
      season: 'Fall',
      image: '/images/IMG_2776.jpg',
      description: 'Fall preparation treatments for winter readiness',
      treatments: ['Sludge remover', 'Beneficial bacteria', 'Water clarifier', 'pH adjustment'],
      benefits: ['Clean bottom', 'Healthy bacteria', 'Clear water', 'Winter preparation'],
      price: 'Starting at $27.99'
    },
    {
      season: 'Winter',
      image: '/images/IMG_2782.jpg',
      description: 'Winter maintenance treatments for cold weather care',
      treatments: ['Cold water bacteria', 'pH stabilizer', 'Water clarifier', 'Sludge control'],
      benefits: ['Cold weather protection', 'Stable chemistry', 'Clear water', 'Bottom maintenance'],
      price: 'Starting at $23.99'
    }
  ];

  const waterTesting = [
    {
      name: 'pH Test Kits',
      image: '/images/IMG_2770.jpg',
      description: 'Accurate pH testing kits for water chemistry monitoring',
      features: ['Easy to use', 'Accurate results', 'Color-coded', 'Multiple tests'],
      applications: ['pH monitoring', 'Water chemistry', 'Fish health', 'Treatment planning'],
      price: 'Starting at $8.99'
    },
    {
      name: 'Ammonia Test Kits',
      image: '/images/IMG_2775.jpg',
      description: 'Ammonia testing kits to monitor water quality and fish health',
      features: ['Precise measurement', 'Easy reading', 'Multiple tests', 'Professional grade'],
      applications: ['Ammonia monitoring', 'Fish health', 'Water quality', 'Treatment planning'],
      price: 'Starting at $12.99'
    },
    {
      name: 'Complete Test Kits',
      image: '/images/IMG_2779.jpg',
      description: 'Comprehensive water testing kits for complete water analysis',
      features: ['Multiple parameters', 'Professional accuracy', 'Easy to use', 'Complete analysis'],
      applications: ['Complete water analysis', 'Health monitoring', 'Treatment planning', 'Professional use'],
      price: 'Starting at $24.99'
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
      price: 'Starting at $19.99/month'
    },
    {
      name: 'Professional Maintenance Program',
      image: '/images/IMG_2776.jpg',
      description: 'Comprehensive treatment program for large ponds and koi ponds',
      includes: ['All basic treatments', 'Algae control', 'Sludge remover', 'Complete test kit', 'Seasonal treatments'],
      frequency: 'Bi-weekly',
      benefits: ['Optimal water quality', 'Algae prevention', 'Clean bottom', 'Professional results'],
      price: 'Starting at $39.99/month'
    },
    {
      name: 'Commercial Maintenance Program',
      image: '/images/IMG_2782.jpg',
      description: 'Industrial-grade treatment program for commercial and large installations',
      includes: ['All professional treatments', 'Custom formulations', 'Bulk quantities', 'Professional testing', '24/7 support'],
      frequency: 'Weekly',
      benefits: ['Industrial performance', 'Custom solutions', 'Bulk savings', 'Professional support'],
      price: 'Starting at $79.99/month'
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
    <div className="water-treatments-page">
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
          <h1>Water Treatments & Chemicals</h1>
          <p>Professional-grade water treatments and chemicals to maintain crystal clear, healthy pond water. From algae control to beneficial bacteria, we have everything you need.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Expert Advice</a>
            <Link to="/pond-supplies" className="secondary-button">View All Supplies</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2779.jpg" alt="Professional water treatments and chemicals for pond maintenance" />
        </div>
      </section>

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
              <div className="benefit-icon">🧪</div>
              <h3>Professional Grade</h3>
              <p>We only carry treatments from trusted manufacturers with proven results</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🐟</div>
              <h3>Fish Safe</h3>
              <p>All our treatments are safe for fish, plants, and beneficial bacteria</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📞</div>
              <h3>Expert Support</h3>
              <p>Our specialists provide guidance on proper treatment selection and usage</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💎</div>
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
              <div className="package-price">$29.99</div>
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
              <div className="package-price">$59.99</div>
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
              <div className="package-price">$99.99</div>
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

      {/* Contact CTA */}
      <section className="contact-cta">
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
  );
};

export default WaterTreatmentsPage;
