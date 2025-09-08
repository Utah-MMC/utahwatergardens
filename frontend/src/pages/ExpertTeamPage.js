import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero.js';
import './TeamDetailPage.css';

const ExpertTeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Pond Construction',
      description: 'Custom design and construction of beautiful water features',
      features: ['Site planning and design', 'Excavation and preparation', 'Liner installation', 'Rock and stone work', 'Water feature integration']
    },
    {
      title: 'Aquatic Plant Care',
      description: 'Expert care for all types of aquatic plants',
      features: ['Plant selection and placement', 'Seasonal maintenance', 'Algae control', 'Water quality management']
    },
    {
      title: 'Water Feature Maintenance',
      description: 'Comprehensive maintenance services',
      features: ['Routine cleaning', 'Equipment maintenance', 'Seasonal preparations', 'Emergency repairs']
    }
  ];

  const certifications = [
    'Licensed Pond Construction',
    'Aquatic Plant Specialist',
    'Water Feature Maintenance',
    'Environmental Compliance'
  ];

  return (
    <>
      <SEO 
        title="Expert Team - Pond Specialists | Utah Water Gardens"
        description="Meet our expert team of pond specialists. Professional pond construction, aquatic plant care, and water feature maintenance services in Utah."
        keywords="expert team, pond specialists, pond construction, aquatic plant care, water feature maintenance, utah pond experts"
        canonical="https://utahwatergardens.com/team/expert-team"
      />
      <div className={`team-detail-page ${isVisible ? 'visible' : ''}`}>
        <PageHero 
          title="Expert Team"
          subtitle="Pond Specialists with years of experience in construction, plant care, and maintenance"
          backgroundImage="/images/IMG_2770.jpg"
          backgroundImageAlt="Expert team working on pond construction and maintenance"
          showCTA={true}
          ctaButtons={[
            { text: "Call (801) 590-8516", href: "tel:(801) 590-8516", type: "primary" },
            { text: "Get Consultation", href: "/contact", type: "secondary" }
          ]}
        />

        {/* Main Content */}
        <section className="team-main-content first-section-gradient">
          <div className="container">
            <div className="team-intro">
              <h2>Our Expert Team</h2>
              <p className="intro-text">
                Our experienced team brings together unparalleled expertise in all aspects of pond and water feature management. 
                From initial design and construction to intricate aquatic plant care and ongoing maintenance, our specialists 
                are dedicated to creating and preserving beautiful, healthy aquatic environments.
              </p>
            </div>

            {/* Services Grid */}
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-header">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-features">
                    <h4>What We Offer:</h4>
                    <ul>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="certifications-section">
              <h2>Our Certifications & Expertise</h2>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <div className="cert-icon">Certified</div>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="why-choose-section">
              <h2>Why Choose Our Expert Team?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">Experience</div>
                  <h4>15+ Years Experience</h4>
                  <p>Over a decade of expertise in pond construction and maintenance</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">Quality</div>
                  <h4>Quality Materials</h4>
                  <p>We use only the highest quality materials and equipment</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">Service</div>
                  <h4>Complete Service</h4>
                  <p>From design to maintenance, we handle everything</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">Support</div>
                  <h4>Ongoing Support</h4>
                  <p>We're here for you long after the project is complete</p>
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
            <h2>Ready to Work with Our Expert Team?</h2>
            <p>Let our specialists transform your outdoor space with a beautiful water feature.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
              <Link to="/free-estimate" className="btn btn-secondary">Get Free Estimate</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExpertTeamPage;
