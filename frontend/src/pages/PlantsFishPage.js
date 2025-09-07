import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import './PlantsFishPage.css';

const PlantsFishPage = () => {
  const plantCategories = [
    {
      name: 'Aquatic Plants',
      path: '/plants-fish/aquatic-plants',
      description: 'Beautiful aquatic plants for your pond',
      image: '/images/IMG_2770.jpg'
    },
    {
      name: 'Water Lilies',
      path: '/plants-fish/water-lilies',
      description: 'Stunning water lilies in various colors',
      image: '/images/waterLillies-topaz-enhance-4x.jpeg'
    },
    {
      name: 'Floating Plants',
      path: '/plants-fish/floating-plants',
      description: 'Natural floating plants for water coverage',
      image: '/images/IMG_2775.jpg'
    },
    {
      name: 'Marginal Plants',
      path: '/plants-fish/marginal-plants',
      description: 'Plants for pond edges and shallow areas',
      image: '/images/IMG_2779.jpg'
    }
  ];

  const fishCategories = [
    {
      name: 'Koi & Goldfish',
      path: '/plants-fish/koi-goldfish',
      description: 'Beautiful koi and goldfish varieties',
      image: '/images/koi-topaz-enhance-4x.jpeg'
    },
    {
      name: 'Pond Pumps',
      path: '/pond-supplies/pumps-aeration',
      description: 'Energy-efficient pumps and aeration systems',
      image: '/images/pumpRepair.webp'
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

  return (
    <div className="plants-fish-page">
      <PageHero 
        title="Plants & Fish"
        subtitle="Discover our comprehensive selection of aquatic plants and fish for your pond"
        backgroundImage="/images/plants-cta-bg.webp"
        backgroundImageAlt="Beautiful water garden with aquatic plants and fish"
      />

      <div className="container">
        {/* Plants Section */}
        <section className="plants-section first-section-gradient">
          <h2>Aquatic Plants</h2>
          <div className="category-grid">
            {plantCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <Link to={category.path} className="btn btn-primary">
                    View {category.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fish & Equipment Section */}
        <section className="fish-section">
          <h2>Fish & Equipment</h2>
          <div className="category-grid">
            {fishCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <Link to={category.path} className="btn btn-primary">
                    View {category.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Plant Gallery */}
        <section className="plant-gallery">
          <h2>Plant Gallery</h2>
          <div className="plant-grid">
            {specificPlants.map((plant, index) => (
              <div key={index} className="plant-item">
                <h4>{plant}</h4>
                <p>Beautiful {plant.toLowerCase()} for your pond</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="services-section gradient-wipe-up">
          <h2>Related Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Plant Delivery</h3>
              <p>We offer plant delivery services to your location</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Delivery
              </a>
            </div>
            <div className="service-card">
              <h3>Pond Consultation</h3>
              <p>Get expert advice on plant selection and placement</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Consultation
              </a>
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
          <h2>Need Help Choosing?</h2>
          <p>Our experts can help you select the perfect plants and fish for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">
              Call (801) 590-8516
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Send Message
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlantsFishPage;
