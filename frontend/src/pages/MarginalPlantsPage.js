import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero.js';
import ImageModal from '../components/ImageModal';
import { getPlantsByCategory, createPlantSlug } from '../data/plantData';
import './MarginalPlantsPage.css';

const MarginalPlantsPage = () => {
  const marginalPlants = getPlantsByCategory('Marginal Plants');
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
        title="Marginal Plants - Pond Edge Plants | Utah Water Gardens"
        description="Perfect plants for pond edges and shallow water areas. Beautiful marginal plants to enhance your water garden in Utah."
        keywords="marginal plants, pond edge plants, shallow water plants, water garden plants, utah pond plants, aquatic plants"
        canonical="https://utahwatergardens.com/plants-fish/marginal-plants"
      />
      <div className="marginal-plants-page">
        <PageHero 
          title="Marginal Plants"
          subtitle="Perfect plants for pond edges and shallow water areas"
          backgroundImage="/images/IMG_2779.jpg"
          backgroundImageAlt="Beautiful marginal plants around a pond edge"
        />

      <div className="container">
        {/* Introduction */}
        <section className="intro-section">
          <h2>Marginal Plants Collection</h2>
          <p>
            Marginal plants are essential for creating natural, beautiful pond edges and providing 
            habitat for wildlife. These plants thrive in shallow water and moist soil areas, 
            creating a seamless transition between your pond and surrounding landscape. Our collection 
            includes native Utah species and exotic varieties perfect for any water garden design.
          </p>
        </section>

        {/* Marginal Plants Grid */}
        <section className="plants-grid-section">
          <h2>Our Marginal Plants</h2>
          <div className="plants-grid">
            {marginalPlants.map((plant) => (
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
                    <span className="spec">Water Depth: {plant.specifications.waterDepth}</span>
                  </div>
                  <span className="view-details">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Care Information */}
        <section className="care-info-section">
          <h2>Marginal Plant Care Guide</h2>
          <div className="care-grid">
            <div className="care-item">
              <h3>Planting Zones</h3>
              <p>Plant in shallow water (1-6 inches) or moist soil at pond edges. Most prefer the transition zone between water and land.</p>
              <div className="care-images">
                <img src="/images/IMG_2770.jpg" alt="Planting zones example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Planting zones example")} />
                <img src="/images/IMG_2775.jpg" alt="Shallow water planting example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Shallow water planting example")} />
                <img src="/images/IMG_2779.jpg" alt="Pond edge planting example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Pond edge planting example")} />
                <img src="/images/IMG_2780.jpg" alt="Transition zone example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Transition zone example")} />
                <img src="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg" alt="Moist soil example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_3266-topaz-enhance-2x-faceai.jpeg", "Moist soil example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Sunlight Requirements</h3>
              <p>Most marginal plants prefer partial shade to full sun, depending on the species. Native varieties are adapted to local conditions.</p>
              <div className="care-images">
                <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Partial shade example" className="care-image clickable-image" onClick={() => handleImageClick("/images/waterLillies-topaz-enhance-4x.jpeg", "Partial shade example")} />
                <img src="/images/IMG_2770.jpg" alt="Full sun example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Full sun example")} />
                <img src="/images/IMG_2775.jpg" alt="Light conditions example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Light conditions example")} />
                <img src="/images/IMG_2779.jpg" alt="Native varieties example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Native varieties example")} />
                <img src="/images/IMG_2780.jpg" alt="Local adaptation example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Local adaptation example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Soil & Water</h3>
              <p>Use heavy clay soil or aquatic planting mix. Keep soil consistently moist but not waterlogged for best results.</p>
              <div className="care-images">
                <img src="/images/IMG_2779.jpg" alt="Clay soil example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Clay soil example")} />
                <img src="/images/IMG_2770.jpg" alt="Aquatic planting mix example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Aquatic planting mix example")} />
                <img src="/images/IMG_2775.jpg" alt="Moist soil example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Moist soil example")} />
                <img src="/images/IMG_2780.jpg" alt="Waterlogged prevention example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Waterlogged prevention example")} />
                <img src="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg" alt="Soil preparation example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_3266-topaz-enhance-2x-faceai.jpeg", "Soil preparation example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Seasonal Care</h3>
              <p>Many are hardy perennials that die back in winter and return in spring. Some may need protection in extreme cold.</p>
              <div className="care-images">
                <img src="/images/IMG_2780.jpg" alt="Seasonal care example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2780.jpg", "Seasonal care example")} />
                <img src="/images/IMG_2770.jpg" alt="Hardy perennials example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2770.jpg", "Hardy perennials example")} />
                <img src="/images/IMG_2775.jpg" alt="Winter dieback example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2775.jpg", "Winter dieback example")} />
                <img src="/images/IMG_2779.jpg" alt="Spring return example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_2779.jpg", "Spring return example")} />
                <img src="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg" alt="Cold protection example" className="care-image clickable-image" onClick={() => handleImageClick("/images/IMG_3266-topaz-enhance-2x-faceai.jpeg", "Cold protection example")} />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits-section">
          <h2>Why Choose Marginal Plants?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Natural Pond Edges</h3>
              <p>Create beautiful, natural-looking pond perimeters that blend seamlessly with your landscape</p>
            </div>
            <div className="benefit-item">
              <h3>Wildlife Habitat</h3>
              <p>Provide essential habitat for frogs, dragonflies, and other beneficial pond wildlife</p>
            </div>
            <div className="benefit-item">
              <h3>Water Filtration</h3>
              <p>Help filter water and absorb excess nutrients, improving overall pond health</p>
            </div>
            <div className="benefit-item">
              <h3>Erosion Control</h3>
              <p>Stabilize pond edges and prevent soil erosion with their extensive root systems</p>
            </div>
          </div>
        </section>

        {/* Native Plants Highlight */}
        <section className="native-plants-section">
          <h2>Native Utah Plants</h2>
          <p>
            We're proud to offer several native Utah marginal plants that are perfectly adapted to our local climate 
            and provide excellent habitat for native wildlife. These plants require minimal care and are naturally 
            resistant to local pests and diseases.
          </p>
          <div className="native-highlights">
            <div className="native-item">
              <h4>Utah Water Clover</h4>
              <p>Native four-leaf clover-like plant perfect for naturalizing pond edges</p>
            </div>
            <div className="native-item">
              <h4>Yerba Mansa</h4>
              <p>Southwestern native with white flowers and aromatic leaves</p>
            </div>
            <div className="native-item">
              <h4>Red Mimulus</h4>
              <p>Native plant with red tubular flowers that attract hummingbirds</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h2>Related Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Pond Edge Design</h3>
              <p>Professional design and installation of natural pond edges with marginal plants</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Design
              </a>
            </div>
            <div className="service-card">
              <h3>Plant Selection Consultation</h3>
              <p>Expert advice on choosing the right marginal plants for your specific pond conditions</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Consultation
              </a>
            </div>
            <div className="service-card">
              <h3>Pond Maintenance</h3>
              <p>Keep your marginal plants healthy and your pond edges beautiful year-round</p>
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
          <h2>Ready to Enhance Your Pond Edges?</h2>
          <p>Contact us today to learn more about our marginal plant collection and how they can transform your pond</p>
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

export default MarginalPlantsPage;