import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import ImageModal from '../components/ImageModal';
import { getPlantsByCategory, createPlantSlug } from '../data/plantData';
import './FloatingPlantsPage.css';

const FloatingPlantsPage = () => {
  const floatingPlants = getPlantsByCategory('Floating Plants');
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState('');

  const handleImageClick = (imageSrc, imageAlt) => {
    setModalImage(imageSrc);
    setModalAlt(imageAlt);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalAlt('');
  };

  return (
    <div className="floating-plants-page">
      <PageHero 
        title="Floating Plants"
        subtitle="Natural water coverage and filtration for your pond"
        backgroundImage="/images/IMG_2775.jpg"
        backgroundImageAlt="Beautiful floating plants on pond surface"
      />

      <div className="container">
        {/* Introduction */}
        <section className="intro-section">
          <h2>Floating Plants Collection</h2>
          <p>
            Floating plants are essential for natural water coverage, algae control, and providing 
            shade for fish. These plants float freely on the water surface, creating beautiful 
            green carpets and helping to maintain water quality. Our collection includes both 
            hardy and tropical varieties, perfect for different pond conditions and climates.
          </p>
        </section>

        {/* Floating Plants Grid */}
        <section className="plants-grid-section">
          <h2>Our Floating Plants</h2>
          <div className="plants-grid">
            {floatingPlants.map((plant) => (
              <Link 
                key={plant.id}
                to={`/plant/${plant.id}`}
                className="plant-card"
              >
                <div className="plant-image">
                  <img src={plant.image} alt={plant.name} />
                </div>
                <div className="plant-info">
                  <h3>{plant.name}</h3>
                  <p className="scientific-name">
                    <em>{plant.scientificName}</em>
                  </p>
                  <p className="description">{plant.description}</p>
                  <div className="plant-specs">
                    <span className="spec">Height: {plant.specifications.height}</span>
                    <span className="spec">Spread: {plant.specifications.spread}</span>
                  </div>
                  <span className="view-details">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Care Information */}
        <section className="care-info-section">
          <h2>Floating Plant Care Guide</h2>
          <div className="care-grid">
            <div className="care-item">
              <h3>Simple Installation</h3>
              <p>Simply place floating plants on the water surface - no planting required! They'll spread naturally across your pond.</p>
              <div className="care-images">
                <img src="/images/IMG_2770.jpg" alt="Simple installation example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Simple installation example")} />
                <img src="/images/IMG_2775.jpg" alt="Water surface placement example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Water surface placement example")} />
                <img src="/images/IMG_2779.jpg" alt="Natural spreading example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Natural spreading example")} />
                <img src="/images/IMG_2780.jpg" alt="No planting required example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "No planting required example")} />
                <img src="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg" alt="Pond coverage example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_3266-topaz-enhance-2x-faceai.jpeg", "Pond coverage example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Light Requirements</h3>
              <p>Most floating plants prefer partial shade to full sun. Some varieties can tolerate more shade than others.</p>
              <div className="care-images">
                <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Light requirements example" className="care-image clickable-image" onClick={() => handleImageClick("/images/waterLillies-topaz-enhance-4x.jpeg", "Light requirements example")} />
                <img src="/images/IMG_2770.jpg" alt="Partial shade example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Partial shade example")} />
                <img src="/images/IMG_2775.jpg" alt="Full sun example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Full sun example")} />
                <img src="/images/IMG_2779.jpg" alt="Shade tolerance example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Shade tolerance example")} />
                <img src="/images/IMG_2780.jpg" alt="Variety differences example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Variety differences example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Nutrient Absorption</h3>
              <p>These plants absorb nutrients directly from the water, helping to control algae and improve water quality naturally.</p>
              <div className="care-images">
                <img src="/images/IMG_2779.jpg" alt="Nutrient absorption example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Nutrient absorption example")} />
                <img src="/images/IMG_2770.jpg" alt="Water quality improvement example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Water quality improvement example")} />
                <img src="/images/IMG_2775.jpg" alt="Algae control example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Algae control example")} />
                <img src="/images/IMG_2780.jpg" alt="Natural filtration example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Natural filtration example")} />
                <img src="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg" alt="Direct water absorption example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_3266-topaz-enhance-2x-faceai.jpeg", "Direct water absorption example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Seasonal Management</h3>
              <p>Some varieties are annual in Utah's climate and may need to be replaced each season or overwintered indoors.</p>
              <div className="care-images">
                <img src="/images/IMG_2780.jpg" alt="Seasonal management example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Seasonal management example")} />
                <img src="/images/IMG_2770.jpg" alt="Annual varieties example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Annual varieties example")} />
                <img src="/images/IMG_2775.jpg" alt="Seasonal replacement example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Seasonal replacement example")} />
                <img src="/images/IMG_2779.jpg" alt="Overwintering example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Overwintering example")} />
                <img src="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg" alt="Utah climate example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_3266-topaz-enhance-2x-faceai.jpeg", "Utah climate example")} />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits-section">
          <h2>Why Choose Floating Plants?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Natural Algae Control</h3>
              <p>Compete with algae for nutrients and block sunlight, naturally reducing algae growth</p>
            </div>
            <div className="benefit-item">
              <h3>Fish Protection</h3>
              <p>Provide essential shade and cover for fish, helping to reduce stress and improve health</p>
            </div>
            <div className="benefit-item">
              <h3>Water Filtration</h3>
              <p>Absorb excess nutrients and help maintain clear, healthy water conditions</p>
            </div>
            <div className="benefit-item">
              <h3>Easy Maintenance</h3>
              <p>Require minimal care and spread naturally, making them perfect for low-maintenance ponds</p>
            </div>
          </div>
        </section>

        {/* Plant Types */}
        <section className="plant-types-section">
          <h2>Types of Floating Plants</h2>
          <div className="types-grid">
            <div className="type-item">
              <h3>Water Hyacinth</h3>
              <p>Beautiful purple flowers and rapid growth. Excellent for large ponds and natural filtration.</p>
            </div>
            <div className="type-item">
              <h3>Water Lettuce</h3>
              <p>Soft, velvety leaves in rosette form. Perfect for smaller ponds and gentle water coverage.</p>
            </div>
            <div className="type-item">
              <h3>Duckweed</h3>
              <p>Tiny floating plant that forms green carpets. Great for fish food and natural water coverage.</p>
            </div>
            <div className="type-item">
              <h3>Azolla (Fairy Moss)</h3>
              <p>Small floating fern that changes color seasonally. Adds unique texture and nitrogen fixation.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h2>Related Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Floating Plant Installation</h3>
              <p>Professional placement and management of floating plants for optimal pond health</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Installation
              </a>
            </div>
            <div className="service-card">
              <h3>Pond Balance Consultation</h3>
              <p>Expert advice on using floating plants to achieve perfect pond balance and water quality</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Consultation
              </a>
            </div>
            <div className="service-card">
              <h3>Seasonal Plant Management</h3>
              <p>Help with seasonal care, overwintering, and replacement of floating plants</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Management
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
          <h2>Ready to Add Floating Plants to Your Pond?</h2>
          <p>Contact us today to learn more about our floating plant collection and how they can improve your pond's health and beauty</p>
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
      
      <ImageModal 
        isOpen={!!modalImage}
        onClose={closeModal}
        imageSrc={modalImage}
        imageAlt={modalAlt}
      />
    </div>
  );
};

export default FloatingPlantsPage;