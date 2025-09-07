import React from 'react';
import { Link } from 'react-router-dom';
import './MarginalPlantsPage.css';

const MarginalPlantsPage = () => {
  const marginalPlants = [
    {
      name: 'Cattails',
      image: '/images/IMG_2779.jpg',
      description: 'Classic marginal plants that provide height and texture to pond edges',
      benefits: ['Natural filtration', 'Wildlife habitat', 'Erosion control'],
      price: '$12.99'
    },
    {
      name: 'Rushes',
      image: '/images/IMG_2770.jpg',
      description: 'Grass-like plants that add movement and natural beauty to pond borders',
      benefits: ['Oxygen production', 'Water clarity', 'Low maintenance'],
      price: '$9.99'
    },
    {
      name: 'Pickerel Rush',
      image: '/images/IMG_2775.jpg',
      description: 'Beautiful flowering rush with blue-purple spikes in summer',
      benefits: ['Attractive flowers', 'Butterfly attractant', 'Hardy perennial'],
      price: '$14.99'
    },
    {
      name: 'Golden Spike Rush',
      image: '/images/IMG_2776.jpg',
      description: 'Bright golden-yellow foliage that brightens pond edges',
      benefits: ['Colorful foliage', 'Year-round interest', 'Disease resistant'],
      price: '$11.99'
    },
    {
      name: 'Equisetum',
      image: '/images/IMG_2780.jpg',
      description: 'Ancient horsetail plant with unique segmented stems',
      benefits: ['Unique appearance', 'Natural water filter', 'Very hardy'],
      price: '$13.99'
    },
    {
      name: 'Umbrella Palm',
      image: '/images/IMG_2782.jpg',
      description: 'Tropical-looking plant with umbrella-shaped leaves',
      benefits: ['Tropical appearance', 'Large leaves', 'Shade provider'],
      price: '$16.99'
    }
  ];

  const careTips = [
    'Plant in shallow water (2-6 inches deep)',
    'Provide full sun to partial shade',
    'Fertilize monthly during growing season',
    'Divide every 2-3 years to maintain health',
    'Remove dead foliage in spring',
    'Protect from extreme cold in winter'
  ];

  return (
    <div className="marginal-plants-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Marginal Plants for Your Pond</h1>
          <p>Add natural beauty and ecological benefits to your pond edges with our selection of marginal plants</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Expert Advice</a>
            <Link to="/plants-fish" className="secondary-button">View All Plants</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2779.jpg" alt="Beautiful marginal plants along pond edge" />
        </div>
      </section>

      {/* Plant Selection */}
      <section className="plants-section first-section-gradient">
        <div className="container">
          <h2>Our Marginal Plant Selection</h2>
          <p>We offer the largest variety of marginal plants in Utah, perfect for creating natural pond borders</p>
          <div className="plants-grid">
            {marginalPlants.map((plant, index) => (
              <Link key={index} to="/plants-fish/marginal-plants" className="plant-card">
                <div className="plant-image">
                  <img src={plant.image} alt={plant.name} />
                </div>
                <div className="plant-info">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="plant-benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {plant.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="plant-price">{plant.price}</div>
                  <a href="tel:(801) 590-8516" className="plant-cta" onClick={(e) => e.stopPropagation()}>Call for Availability</a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Care Guide */}
      <section className="care-guide-section">
        <div className="container">
          <h2>Marginal Plant Care Guide</h2>
          <div className="care-content">
            <div className="care-text">
              <h3>Essential Care Tips</h3>
              <p>Marginal plants are essential for creating natural pond ecosystems and providing habitat for wildlife.</p>
              <ul className="care-tips">
                {careTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
              <a href="tel:(801) 590-8516" className="care-cta">Call for Care Advice</a>
            </div>
            <div className="care-image">
              <img src="/images/IMG_2770.jpg" alt="Healthy marginal plants in pond" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Marginal Plants */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Marginal Plants?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 6 17.25C7.12 17.25 8.25 16.75 9 16L17 8Z" fill="#32CD32"/>
  </svg>
              </div>
              <h3>Natural Filtration</h3>
              <p>Marginal plants help filter water and remove excess nutrients naturally</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
                </svg>
              </div>
              <h3>Wildlife Habitat</h3>
              <p>Provide shelter and food for frogs, birds, and beneficial insects</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
  </svg>
              </div>
              <h3>Visual Appeal</h3>
              <p>Add height, texture, and seasonal interest to your pond</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <h3>Erosion Control</h3>
              <p>Help stabilize pond edges and prevent soil erosion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Availability */}
      <section className="seasonal-section gradient-wipe-up">
        <div className="container">
          <h2>Seasonal Availability</h2>
          <div className="seasonal-grid">
            <div className="season-item">
              <img src="/images/IMG_2775.jpg" alt="Spring marginal plants" />
              <h3>Spring</h3>
              <p>Early spring marginal plants and new growth</p>
              <a href="tel:(801) 590-8516" className="seasonal-cta">Check Spring Stock</a>
            </div>
            <div className="season-item">
              <img src="/images/IMG_2779.jpg" alt="Summer marginal plants" />
              <h3>Summer</h3>
              <p>Full-grown plants with flowers and foliage</p>
              <a href="tel:(801) 590-8516" className="seasonal-cta">Check Summer Stock</a>
            </div>
            <div className="season-item">
              <img src="/images/IMG_2780.jpg" alt="Fall marginal plants" />
              <h3>Fall</h3>
              <p>Fall color and winter preparation plants</p>
              <a href="tel:(801) 590-8516" className="seasonal-cta">Check Fall Stock</a>
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
          <h2>Ready to Add Marginal Plants?</h2>
          <p>Our experts can help you choose the perfect marginal plants for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarginalPlantsPage;
