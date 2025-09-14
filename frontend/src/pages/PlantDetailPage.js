import React, { useState } from 'react';
import SEO from '../components/SEO';

import { Link, useParams } from 'react-router-dom';
import { getPlantById } from '../data/plantData';
import PageHero from '../components/PageHero.js';
import ImageModal from '../components/ImageModal';
import './PlantDetailPage.css';

const PlantDetailPage = () => {
  const { plantId } = useParams();
  const plant = getPlantById(plantId);
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

  if (!plant) {
    return (
      <div className="plant-detail-page">
        <div className="container">
          <div className="error-message">
            <h1>Plant Not Found</h1>
            <p>The plant you're looking for doesn't exist.</p>
            <Link to="/plants-fish" className="btn btn-primary">
              Back to Plant Gallery
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Aquatic Plant Details | Plant Care Guide | Utah Water Gardens"
        description="Detailed information about aquatic plants. Care guides, planting tips, and plant selection for your pond."
        keywords="aquatic plant details, plant care guide, water plants, pond plants"
        canonical="https://utahwatergardens.com/plant-detail"
        ogTitle="Aquatic Plant Details"
        ogDescription="Detailed aquatic plant information and care guides"
        ogImage="/images/plant-detail.jpg"
        twitterCard="summary_large_image"
      />
      <div className="plant-detail-page">
      <PageHero 
        title={plant.name}
        subtitle={plant.description}
        backgroundImage={plant.image}
        backgroundImageAlt={`${plant.name} in a water garden`}
      />

      <div className="container">
        {/* Plant Overview */}
        <section className="plant-overview first-section-gradient">
          <div className="plant-content">
            <div className="plant-image-section">
              <div className="main-image-container">
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className="main-plant-image"
                />
              </div>
              {plant.images && plant.images.length > 1 && (
                <div className="image-gallery">
                  <h4>More Images</h4>
                  <div className="gallery-grid">
                    {plant.images.slice(1, 5).map((image, index) => (
                      <div key={index} className="gallery-item">
                        <img 
                          src={image} 
                          alt={`${plant.name} - ${index + 2}`}
                          className="gallery-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="plant-info">
              <div className="plant-header">
                <h1>{plant.name}</h1>
                <p className="scientific-name">
                  <em>{plant.scientificName}</em>
                </p>
                <span className="plant-category">{plant.category}</span>
              </div>
              
              <div className="plant-description">
                <h3>Description</h3>
                <p>{plant.detailedDescription}</p>
              </div>

              <div className="plant-specifications">
                <h3>Specifications</h3>
                <div className="specs-grid">
                  <div className="spec-item">
                    <strong>Height:</strong> {plant.specifications.height}
                  </div>
                  <div className="spec-item">
                    <strong>Spread:</strong> {plant.specifications.spread}
                  </div>
                  <div className="spec-item">
                    <strong>Bloom Time:</strong> {plant.specifications.bloomTime}
                  </div>
                  <div className="spec-item">
                    <strong>Hardiness:</strong> {plant.specifications.hardiness}
                  </div>
                  <div className="spec-item">
                    <strong>Water Depth:</strong> {plant.specifications.waterDepth}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section className="care-instructions">
          <h2>Care Instructions</h2>
          <div className="care-grid">
            <div className="care-item">
              <h3>Planting</h3>
              <p>{plant.careInstructions.planting.text}</p>
              {plant.careInstructions.planting.images && (
                <div className="care-images">
                  {plant.careInstructions.planting.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Planting instruction ${index + 1}`}
                      className="care-image clickable-image"
                      onClick={() => handleImageClick(image, `Planting instruction ${index + 1}`)}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="care-item">
              <h3>Sunlight</h3>
              <p>{plant.careInstructions.sunlight.text}</p>
              {plant.careInstructions.sunlight.images && (
                <div className="care-images">
                  {plant.careInstructions.sunlight.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Sunlight instruction ${index + 1}`}
                      className="care-image clickable-image"
                      onClick={() => handleImageClick(image, `Sunlight instruction ${index + 1}`)}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="care-item">
              <h3>Fertilization</h3>
              <p>{plant.careInstructions.fertilization.text}</p>
              {plant.careInstructions.fertilization.images && (
                <div className="care-images">
                  {plant.careInstructions.fertilization.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Fertilization instruction ${index + 1}`}
                      className="care-image clickable-image"
                      onClick={() => handleImageClick(image, `Fertilization instruction ${index + 1}`)}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="care-item">
              <h3>Winter Care</h3>
              <p>{plant.careInstructions.winterCare.text}</p>
              {plant.careInstructions.winterCare.images && (
                <div className="care-images">
                  {plant.careInstructions.winterCare.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Winter care instruction ${index + 1}`}
                      className="care-image clickable-image"
                      onClick={() => handleImageClick(image, `Winter care instruction ${index + 1}`)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="plant-benefits">
          <h2>Benefits</h2>
          <ul className="benefits-list">
            {plant.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        {/* Availability */}
        <section className="availability">
          <div className="availability-card">
            <h3>Availability</h3>
            <div className="availability-info">
              <div className="availability-item">
                <strong>Availability:</strong> {plant.availability}
              </div>
            </div>
            <div className="contact-actions">
              <a href="tel:(801) 590-8516" className="btn btn-primary">
                Call (801) 590-8516
              </a>
              <Link to="/contact" className="btn btn-outline">
                Send Message
              </Link>
            </div>
          </div>
        </section>

        {/* Related Plants */}
        <section className="related-plants">
          <h2>Related Plants</h2>
          <div className="related-grid">
            <Link to="/plants-fish" className="related-card">
              <h4>All Plants</h4>
              <p>Browse our complete plant collection</p>
            </Link>
            <Link to={`/plants-fish/${plant.category.toLowerCase().replace(/\s+/g, '-')}`} className="related-card">
              <h4>More {plant.category}</h4>
              <p>Explore other {plant.category.toLowerCase()}</p>
            </Link>
            <Link to="/plants-fish" className="related-card">
              <h4>Plant Gallery</h4>
              <p>View all plants in our gallery</p>
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h2>Related Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Plant Installation</h3>
              <p>Professional plant installation and placement services</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Installation
              </a>
            </div>
            <div className="service-card">
              <h3>Pond Consultation</h3>
              <p>Get expert advice on plant selection and pond design</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">
                Call for Consultation
              </a>
            </div>
            <div className="service-card">
              <h3>Pond Maintenance</h3>
              <p>Keep your plants and pond healthy year-round</p>
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
          <h2>Ready to Add {plant.name} to Your Pond?</h2>
          <p>Contact us today to learn more about this beautiful plant and how it can enhance your water garden</p>
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
    </>
  );
};

export default PlantDetailPage;
