import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero.js';
import ImageModal from '../components/ImageModal';
import { getPlantsByCategory } from '../data/plantData';
import './WaterLiliesPage.css';

const WaterLiliesPage = () => {
  const waterLilies = getPlantsByCategory('Water Lilies');
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
    <>
      <SEO 
        title="Water Lilies - Beautiful Aquatic Plants | Utah Water Gardens"
        description="Discover our stunning collection of water lilies in various colors and sizes. Premium aquatic plants for your pond or water garden in Utah."
        keywords="water lilies, aquatic plants, pond plants, water garden plants, utah water lilies, pond flowers"
        canonical="https://utahwatergardens.com/plants-fish/water-lilies"
      />
      <div className="water-lilies-page">
        <PageHero 
          title="Water Lilies"
          subtitle="Discover our stunning collection of water lilies in various colors and sizes"
          backgroundImage="/images/waterLillies-topaz-enhance-4x.jpeg"
          backgroundImageAlt="Beautiful water lilies in a pond"
        />

      <div className="container">
        {/* Introduction */}
        <section className="intro-section">
          <h2>Water Lilies Collection</h2>
          <p>
            Water lilies are the crown jewels of any water garden, providing stunning beauty, 
            natural shade for fish, and helping to maintain water quality. Our collection features 
            hardy varieties perfect for Utah's climate, from classic white and pink varieties to 
            unique changeable colors that transform throughout the day.
          </p>
        </section>

        {/* Water Lilies Grid */}
        <section className="plants-grid-section">
          <h2>Our Water Lilies</h2>
          <div className="plants-grid">
            {waterLilies.map((plant) => (
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
                    <span className="spec">Bloom: {plant.specifications.bloomTime}</span>
                  </div>
                  <span className="view-details">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Care Information */}
        <section className="care-info-section">
          <h2>Water Lily Care Guide</h2>
          <div className="care-grid">
            <div className="care-item">
              <h3>Planting Depth</h3>
              <p>Most water lilies prefer 12-24 inches of water depth. Plant in heavy clay soil in planting baskets for best results.</p>
              <div className="care-images">
                <img src="/images/IMG_2770.jpg" alt="Planting depth example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Planting depth example")} />
                <img src="/images/IMG_2775.jpg" alt="Planting basket example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Planting basket example")} />
                <img src="/images/IMG_2779.jpg" alt="Water depth example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Water depth example")} />
                <img src="/images/IMG_2780.jpg" alt="Clay soil example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Clay soil example")} />
                <img src="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg" alt="Planting setup example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_3266-topaz-enhance-2x-faceai.jpeg", "Planting setup example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Sunlight Requirements</h3>
              <p>Water lilies need 6-8 hours of direct sunlight daily for optimal flowering and growth.</p>
              <div className="care-images">
                <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Sunlight on water lilies" className="care-image clickable-image" onClick={() => handleImageClick("/images/waterLillies-topaz-enhance-4x.jpeg", "Sunlight on water lilies")} />
                <img src="/images/IMG_2770.jpg" alt="Sunny pond example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Sunny pond example")} />
                <img src="/images/IMG_2775.jpg" alt="Light conditions example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Light conditions example")} />
                <img src="/images/IMG_2779.jpg" alt="Optimal lighting example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Optimal lighting example")} />
                <img src="/images/IMG_2780.jpg" alt="Flowering in sun example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Flowering in sun example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Fertilization</h3>
              <p>Fertilize monthly during the growing season with aquatic plant fertilizer tablets placed near the roots.</p>
              <div className="care-images">
                <img src="/images/IMG_2779.jpg" alt="Fertilizer application example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Fertilizer application example")} />
                <img src="/images/IMG_2770.jpg" alt="Fertilizer tablets example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Fertilizer tablets example")} />
                <img src="/images/IMG_2775.jpg" alt="Root feeding example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Root feeding example")} />
                <img src="/images/IMG_2780.jpg" alt="Monthly care example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Monthly care example")} />
                <img src="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg" alt="Growing season care example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_3266-topaz-enhance-2x-faceai.jpeg", "Growing season care example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Winter Care</h3>
              <p>In Utah's climate, most varieties are hardy. Trim back leaves in fall and protect from extreme cold.</p>
              <div className="care-images">
                <img src="/images/IMG_2780.jpg" alt="Winter preparation example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Winter preparation example")} />
                <img src="/images/IMG_2770.jpg" alt="Fall trimming example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Fall trimming example")} />
                <img src="/images/IMG_2775.jpg" alt="Cold protection example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Cold protection example")} />
                <img src="/images/IMG_2779.jpg" alt="Utah climate example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Utah climate example")} />
                <img src="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg" alt="Hardy varieties example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_3266-topaz-enhance-2x-faceai.jpeg", "Hardy varieties example")} />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits-section">
          <h2>Why Choose Water Lilies?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Natural Shade</h3>
              <p>Provide essential shade for fish and help control water temperature</p>
            </div>
            <div className="benefit-item">
              <h3>Algae Control</h3>
              <p>Help reduce algae growth by competing for nutrients and blocking sunlight</p>
            </div>
            <div className="benefit-item">
              <h3>Beautiful Blooms</h3>
              <p>Stunning flowers in various colors that bloom throughout the growing season</p>
            </div>
            <div className="benefit-item">
              <h3>Wildlife Habitat</h3>
              <p>Create shelter and habitat for beneficial insects and pond wildlife</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h2>Related Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Water Lily Installation</h3>
              <p>Professional planting and placement of water lilies in your pond</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Installation
              </a>
            </div>
            <div className="service-card">
              <h3>Pond Design Consultation</h3>
              <p>Expert advice on water lily selection and pond layout</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Consultation
              </a>
            </div>
            <div className="service-card">
              <h3>Pond Maintenance</h3>
              <p>Keep your water lilies healthy and your pond beautiful year-round</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Maintenance
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
          <h2>Ready to Add Water Lilies to Your Pond?</h2>
          <p>Contact us today to learn more about our water lily collection and how they can enhance your water garden</p>
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
    </>
  );
};

export default WaterLiliesPage;