import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero.js';
import ImageModal from '../components/ImageModal';
import CTA from '../components/CTA';
import { getPlantsByCategory } from '../data/plantData';
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
                <img src="/images/b4dda81b66ed3f80f0f0a641b09fcf90-enhance-4x.jpeg" alt="Planting zones example" className="care-image clickable-image" onClick={() => handleImageClick("/images/b4dda81b66ed3f80f0f0a641b09fcf90-enhance-4x.jpeg", "Planting zones example")} />
                <img src="/images/b912a3f21b5bad3ad31288399483df63-enhance-4x.jpeg" alt="Shallow water planting example" className="care-image clickable-image" onClick={() => handleImageClick("/images/b912a3f21b5bad3ad31288399483df63-enhance-4x.jpeg", "Shallow water planting example")} />
                <img src="/images/b9544836cab7b95d82a578eaf9c8f9df-sharpen.jpeg" alt="Pond edge planting example" className="care-image clickable-image" onClick={() => handleImageClick("/images/b9544836cab7b95d82a578eaf9c8f9df-sharpen.jpeg", "Pond edge planting example")} />
                <img src="/images/c2658f1b-ae64-4191-ad69-14401733ecff.png" alt="Transition zone example" className="care-image clickable-image" onClick={() => handleImageClick("/images/c2658f1b-ae64-4191-ad69-14401733ecff.png", "Transition zone example")} />
                <img src="/images/ef0c96a240676467c411d8521154c93b-denoise-enhance-4x.jpeg" alt="Moist soil example" className="care-image clickable-image" onClick={() => handleImageClick("/images/ef0c96a240676467c411d8521154c93b-denoise-enhance-4x.jpeg", "Moist soil example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Sunlight Requirements</h3>
              <p>Most marginal plants prefer partial shade to full sun, depending on the species. Native varieties are adapted to local conditions.</p>
              <div className="care-images">
                <img src="/images/e6608a4e328ffded9ac60dbcaf4c71b1-enhance-4x.jpeg" alt="Partial shade example" className="care-image clickable-image" onClick={() => handleImageClick("/images/e6608a4e328ffded9ac60dbcaf4c71b1-enhance-4x.jpeg", "Partial shade example")} />
                <img src="/images/c2e5455e8bace88209b0fe4abf1e033f-denoise-enhance-4x.jpeg" alt="Full sun example" className="care-image clickable-image" onClick={() => handleImageClick("/images/c2e5455e8bace88209b0fe4abf1e033f-denoise-enhance-4x.jpeg", "Full sun example")} />
                <img src="/images/c3470b7f30ad7f6e6930bdeb0c4f85c8-sharpen.jpeg" alt="Light conditions example" className="care-image clickable-image" onClick={() => handleImageClick("/images/c3470b7f30ad7f6e6930bdeb0c4f85c8-sharpen.jpeg", "Light conditions example")} />
                <img src="/images/c6c164f38c0f50f8aaf6a8a66152e5db-denoise-enhance-4x.jpeg" alt="Native varieties example" className="care-image clickable-image" onClick={() => handleImageClick("/images/c6c164f38c0f50f8aaf6a8a66152e5db-denoise-enhance-4x.jpeg", "Native varieties example")} />
                <img src="/images/c73b4863a384bb723ed702f0c2a3aa44-enhance-4x.jpeg" alt="Local adaptation example" className="care-image clickable-image" onClick={() => handleImageClick("/images/c73b4863a384bb723ed702f0c2a3aa44-enhance-4x.jpeg", "Local adaptation example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Soil & Water</h3>
              <p>Use heavy clay soil or aquatic planting mix. Keep soil consistently moist but not waterlogged for best results.</p>
              <div className="care-images">
                <img src="/images/c7d15d3b1c3ea3c8cbbcabceebfbbf25-sharpen.jpeg" alt="Clay soil example" className="care-image clickable-image" onClick={() => handleImageClick("/images/c7d15d3b1c3ea3c8cbbcabceebfbbf25-sharpen.jpeg", "Clay soil example")} />
                <img src="/images/c9d181c6825a98a44d73180b923bbc69-denoise-enhance-4x.jpeg" alt="Aquatic planting mix example" className="care-image clickable-image" onClick={() => handleImageClick("/images/c9d181c6825a98a44d73180b923bbc69-denoise-enhance-4x.jpeg", "Aquatic planting mix example")} />
                <img src="/images/c9e8c1cf579a2c9d16324279f60b2873-enhance-4x.jpeg" alt="Moist soil example" className="care-image clickable-image" onClick={() => handleImageClick("/images/c9e8c1cf579a2c9d16324279f60b2873-enhance-4x.jpeg", "Moist soil example")} />
                <img src="/images/c9fb8447cf9fddf89cafb96a3606b316-sharpen.jpeg" alt="Waterlogged prevention example" className="care-image clickable-image" onClick={() => handleImageClick("/images/c9fb8447cf9fddf89cafb96a3606b316-sharpen.jpeg", "Waterlogged prevention example")} />
                <img src="/images/f37a8a5be4354f891e25467eebf500b6-enhance-4x.jpeg" alt="Soil preparation example" className="care-image clickable-image" onClick={() => handleImageClick("/images/f37a8a5be4354f891e25467eebf500b6-enhance-4x.jpeg", "Soil preparation example")} />
              </div>
            </div>
            <div className="care-item">
              <h3>Seasonal Care</h3>
              <p>Many are hardy perennials that die back in winter and return in spring. Some may need protection in extreme cold.</p>
              <div className="care-images">
                <img src="/images/d3b6a414b3a3cacbe45f6fb330e24419-denoise-enhance-4x.jpeg" alt="Seasonal care example" className="care-image clickable-image" onClick={() => handleImageClick("/images/d3b6a414b3a3cacbe45f6fb330e24419-denoise-enhance-4x.jpeg", "Seasonal care example")} />
                <img src="/images/d3cb101ddb5ea21f682b256fb7aacf93-enhance-4x.jpeg" alt="Hardy perennials example" className="care-image clickable-image" onClick={() => handleImageClick("/images/d3cb101ddb5ea21f682b256fb7aacf93-enhance-4x.jpeg", "Hardy perennials example")} />
                <img src="/images/d7db0208422b815e133b7d22542bc71a-denoise.jpeg" alt="Winter dieback example" className="care-image clickable-image" onClick={() => handleImageClick("/images/d7db0208422b815e133b7d22542bc71a-denoise.jpeg", "Winter dieback example")} />
                <img src="/images/ddaffd5a73e7f7c07e501744e757f4d5-denoise-enhance-4x.jpeg" alt="Spring return example" className="care-image clickable-image" onClick={() => handleImageClick("/images/ddaffd5a73e7f7c07e501744e757f4d5-denoise-enhance-4x.jpeg", "Spring return example")} />
                <img src="/images/f502726727f39aa2a972ad523bed9e85-sharpen.jpeg" alt="Cold protection example" className="care-image clickable-image" onClick={() => handleImageClick("/images/f502726727f39aa2a972ad523bed9e85-sharpen.jpeg", "Cold protection example")} />
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

        {/* CTA Section */}
        <CTA />
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