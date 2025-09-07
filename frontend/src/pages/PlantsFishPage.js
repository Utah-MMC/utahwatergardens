import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { createPlantSlug, getAllPlants } from '../data/plantData';
import './PlantsFishPage.css';

const PlantsFishPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '50+', label: 'Plant Varieties', icon: 'Plants' },
    { number: '3', label: 'Plant Categories', icon: 'Categories' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '100%', label: 'Healthy Stock', icon: 'Quality' }
  ];

  const plantCategories = [
    {
      name: 'Water Lilies',
      path: '/plants-fish/water-lilies',
      description: 'Stunning water lilies in various colors and sizes',
      image: '/images/waterLillies-topaz-enhance-4x.jpeg',
      features: ['Hardy & Tropical Varieties', 'Multiple Colors', 'Full Sun to Partial Shade', 'Natural Filtration']
    },
    {
      name: 'Marginal Plants',
      path: '/plants-fish/marginal-plants',
      description: 'Plants for pond edges and shallow areas',
      image: '/images/IMG_2779.jpg',
      features: ['Bog Plants', 'Edge Plants', 'Natural Filtration', 'Wildlife Habitat']
    },
    {
      name: 'Floating Plants',
      path: '/plants-fish/floating-plants',
      description: 'Natural floating plants for water coverage',
      image: '/images/IMG_2775.jpg',
      features: ['Natural Shade', 'Algae Control', 'Easy Maintenance', 'Rapid Growth']
    }
  ];

  const fishCategories = [
    {
      name: 'Koi & Goldfish',
      path: '/plants-fish/koi-goldfish',
      description: 'Beautiful koi and goldfish varieties',
      image: '/images/koi-topaz-enhance-4x.jpeg',
      features: ['Colorful Varieties', 'Hardy Fish', 'Pond Compatible', 'Expert Care']
    },
    {
      name: 'Pond Equipment',
      path: '/pond-supplies/pumps-aeration',
      description: 'Energy-efficient pumps and aeration systems',
      image: '/images/pumpRepair.webp',
      features: ['Pond Pumps', 'Aeration Systems', 'Filtration', 'Maintenance']
    }
  ];

  const specificPlants = [
    'Sunset Changeable Water Lily',
    'Chromatella Yellow Water Lily',
    'Pink Water Lily',
    'White Water Lily',
    'Chinese Arrowhead',
    'Marsh Marigold',
    'Pickerel Rush',
    'Golden Spike Rush',
    'Equisetum',
    'Umbrella Palm',
    'Water Hyacinth',
    'Water Lettuce',
    'Duckweed',
    'Azolla',
    'Red Amaranth',
    'Red Mimulus',
    'Sensitive Plant',
    'Slenderleaf Dragonhead',
    'Utah Water Clover',
    'Yerba Mansa',
    'Calla Lily',
    'Blue Flower'
  ];

  const allPlants = getAllPlants();

  return (
    <>
      <SEO 
        title="Plants & Fish - Aquatic Plants and Pond Fish | Utah Water Gardens"
        description="Discover Utah's largest selection of aquatic plants and pond fish. Water lilies, marginal plants, floating plants, koi, and goldfish. Expert advice and healthy stock guaranteed."
        keywords="aquatic plants, pond plants, water lilies, marginal plants, floating plants, koi fish, goldfish, pond fish, utah aquatic plants, water garden plants"
        canonical="https://utahwatergardens.com/plants-fish"
      />
      <div className={`plants-fish-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <section className="plants-fish-hero">
          <div className="hero-background">
            <img 
              src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
              alt="Beautiful water garden with aquatic plants and fish"
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-text-content">
              <h1 className="hero-title">
                Plants & 
                <span className="hero-title-highlight"> Fish</span>
              </h1>
              
              <p className="hero-subtitle">
                Utah's largest selection of aquatic plants and healthy pond fish for your water garden.
              </p>
              
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="plants-fish-main-content">
          <div className="container">
            <div className="page-intro">
              <h2>Utah's Premier Aquatic Plant & Fish Selection</h2>
              <p>
                From stunning water lilies to colorful koi, we offer the largest selection of aquatic plants 
                and fish in Utah. Our expert team ensures all our stock is healthy and well-cared for, 
                providing you with the perfect additions for your water garden.
              </p>
            </div>

            {/* Plant Categories */}
            <div className="plant-categories">
              <h2>Aquatic Plants</h2>
              <div className="categories-grid">
                {plantCategories.map((category, index) => (
                  <Link key={index} to={category.path} className="category-card">
                    <div className="category-image">
                      <img src={category.image} alt={category.name} />
                      <div className="category-overlay">
                        <span className="category-icon">Plants</span>
                      </div>
                    </div>
                    <div className="category-content">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                      <div className="category-features">
                        <h4>Features:</h4>
                        <ul>
                          {category.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <span className="category-link">View {category.name} →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Fish Categories */}
            <div className="fish-categories">
              <h2>Fish & Equipment</h2>
              <div className="categories-grid">
                {fishCategories.map((category, index) => (
                  <Link key={index} to={category.path} className="category-card">
                    <div className="category-image">
                      <img src={category.image} alt={category.name} />
                      <div className="category-overlay">
                        <span className="category-icon">Fish</span>
                      </div>
                    </div>
                    <div className="category-content">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                      <div className="category-features">
                        <h4>Features:</h4>
                        <ul>
                          {category.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <span className="category-link">View {category.name} →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Individual Plants */}
            <div className="individual-plants">
              <h2>Our Plant Collection</h2>
              <p>Browse our complete collection of individual plants</p>
              <div className="plants-grid">
                {allPlants.slice(0, 12).map((plant, index) => (
                  <Link 
                    key={index} 
                    to={`/plant/${createPlantSlug(plant.name)}`} 
                    className="plant-card"
                  >
                    <div className="plant-image">
                      <img src={plant.images[0]} alt={plant.name} />
                    </div>
                    <div className="plant-content">
                      <h3>{plant.name}</h3>
                      <p className="plant-category">{plant.category}</p>
                      <p className="plant-description">{plant.description}</p>
                      <div className="plant-price">${plant.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="view-all-plants">
                <Link to="/plants-fish/all" className="btn btn-primary">View All Plants</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Plants */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Choose Our Plants & Fish?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">Selection</div>
                <h4>Largest Selection</h4>
                <p>Utah's largest variety of aquatic plants and fish</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Quality</div>
                <h4>Healthy Stock</h4>
                <p>All plants and fish are healthy and well-cared for</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Expertise</div>
                <h4>Expert Advice</h4>
                <p>Professional guidance on plant and fish selection</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Support</div>
                <h4>Ongoing Support</h4>
                <p>Help with care and maintenance after purchase</p>
              </div>
            </div>
          </div>
        </section>

        {/* Store Information */}
        <section className="store-info-section">
          <div className="container">
            <div className="store-info-content">
              <div className="store-info-text">
                <h2>Visit Our Store</h2>
                <p>
                  Come see our complete selection of aquatic plants and fish in person. 
                  Our knowledgeable staff can help you choose the perfect additions for your water garden.
                </p>
                <div className="store-details">
                  <div className="store-detail">
                    <i className="fas fa-map-marker-alt" aria-hidden></i>
                    <span>5911 S 1300 E, Salt Lake City, UT 84121</span>
                  </div>
                  <div className="store-detail">
                    <i className="fas fa-phone" aria-hidden></i>
                    <a href="tel:(801) 590-8516">(801) 590-8516</a>
                  </div>
                  <div className="store-detail">
                    <i className="fas fa-clock" aria-hidden></i>
                    <span>Monday - Friday: 10:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="store-cta-buttons">
                  <a href="tel:(801) 590-8516" className="btn btn-primary">Call Us Now</a>
                  <a
                    href="https://maps.google.com/maps?q=5911+S+1300+E,+Salt+Lake+City,+UT+84121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="store-info-image">
                <img src="/images/IMG_2770.jpg" alt="Our store with aquatic plants and fish" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
            <h2>Ready to Transform Your Pond?</h2>
            <p>Visit our store to see our complete selection of plants and fish.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
              <Link to="/contact" className="btn btn-secondary">Get Expert Advice</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlantsFishPage;