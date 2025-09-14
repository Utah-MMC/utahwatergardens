import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero.js';
import './TeamDetailPage.css';

const PlantExpertsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plantCategories = [
    {
      title: 'Water Lilies',
      description: 'Beautiful flowering aquatic plants perfect for ponds',
      features: ['Hardy and tropical varieties', 'Full sun to partial shade', 'Blooms from spring to fall', 'Natural water filtration']
    },
    {
      title: 'Marginal Plants',
      description: 'Plants that grow along pond edges and shallow areas',
      features: ['Bog plants and marsh plants', 'Natural filtration', 'Wildlife habitat', 'Aesthetic appeal']
    },
    {
      title: 'Floating Plants',
      description: 'Plants that float on the water surface',
      features: ['Natural shade providers', 'Algae control', 'Easy maintenance', 'Rapid growth']
    }
  ];

  const services = [
    'Plant Selection Consultation',
    'Custom Planting Design',
    'Seasonal Plant Care',
    'Plant Health Assessment',
    'Water Quality Testing',
    'Algae Control Solutions'
  ];

  return (
    <>
      <SEO 
        title="Plant Experts - Aquatic Specialists | Utah Water Gardens"
        description="Meet our plant experts with the largest selection of aquatic plants in Utah. Expert advice on water lilies, marginal plants, and floating plants."
        keywords="plant experts, aquatic plants, water lilies, marginal plants, floating plants, utah aquatic plants, pond plants"
        canonical="https://utahwatergardens.com/team/plant-experts"
        ogTitle="Plant Experts - Aquatic Specialists | Utah Water Gardens"
        ogDescription="Meet our plant experts with the largest selection of aquatic plants in Utah. Expert advice on water lilies, marginal plants, and floating plants."
        ogImage="https://utahwatergardens.com/images/IMG_2775.jpg"
        twitterCard="summary_large_image"
      />
      <div className={`team-detail-page ${isVisible ? 'visible' : ''}`}>
        <PageHero 
          title="Plant Experts"
          subtitle="Aquatic Specialists with Utah's largest selection of pond plants"
          backgroundImage="/images/IMG_2775.jpg"
          backgroundImageAlt="Beautiful aquatic plants and water garden"
          showCTA={true}
          ctaButtons={[
            { text: "View Our Plants", href: "/plants-fish", type: "primary" },
            { text: "Call (801) 590-8516", href: "tel:(801) 590-8516", type: "secondary" }
          ]}
        />

        {/* Main Content */}
        <section className="team-main-content first-section-gradient">
          <div className="container">
            <div className="team-intro">
              <h2>Our Plant Experts</h2>
              <p className="intro-text">
                We have the largest selection of aquatic plants in Utah and the knowledge to help you choose the perfect ones. 
                Our plant experts understand the unique needs of aquatic plants and can guide you in creating a thriving 
                water garden that's both beautiful and healthy.
              </p>
            </div>

            {/* Plant Categories */}
            <div className="plant-categories">
              <h2>Our Plant Specialties</h2>
              <div className="categories-grid">
                {plantCategories.map((category, index) => (
                  <div key={index} className="category-card">
                    <div className="category-header">
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                    </div>
                    <div className="category-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="category-cta">
                      <Link to={`/${category.title.toLowerCase().replace(' ', '-')}`} className="btn btn-outline">
                        View {category.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="services-section">
              <h2>Our Plant Services</h2>
              <div className="services-list">
                {services.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-icon">Service</div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Our Plants */}
            <div className="why-choose-section">
              <h2>Why Choose Our Plants?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">Selection</div>
                  <h4>Largest Selection</h4>
                  <p>Utah's largest variety of aquatic plants</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">Expertise</div>
                  <h4>Expert Knowledge</h4>
                  <p>Years of experience with aquatic plants</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">Quality</div>
                  <h4>Quality Plants</h4>
                  <p>Healthy, well-cared-for plants</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">Support</div>
                  <h4>Ongoing Support</h4>
                  <p>Help with plant care and maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="team-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <h2>Ready to Transform Your Pond with Beautiful Plants?</h2>
            <p>Visit our store to see our complete selection or get expert advice.</p>
            <div className="cta-buttons">
              <Link to="/plants-fish" className="btn btn-primary">View All Plants</Link>
              <a href="tel:(801) 590-8516" className="btn btn-secondary">Call (801) 590-8516</a>
            </div>
          </div>
        </section>
      </div>
    </>
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


);



export default PlantExpertsPage;
