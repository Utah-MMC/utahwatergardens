import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <PageHero 
        title="About Utah Water Gardens"
        subtitle="Your trusted partner for pond and water feature solutions in Utah"
      />

      <section className="about-content-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Utah Water Gardens offers the largest variety of aquatic plants in Utah. We are your complete pond and water feature solution, handling everything from construction to maintenance.</p>
              <p>Our team has years of experience in creating and maintaining beautiful water features that enhance your landscape and provide a peaceful retreat in your own backyard.</p>
              <p>We pride ourselves on providing exceptional service and using the highest quality materials and equipment to ensure your pond project exceeds your expectations.</p>
            </div>
            <div className="about-image">
              <img 
                src="/images/IMG_2770.jpg" 
                alt="Beautiful water feature with natural rocks and clear turquoise water" 
                onError={(e) => {
                  e.target.src = '/images/IMG_2775.jpg';
                  e.target.alt = 'Beautiful water feature';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-overview-section">
        <div className="container">
          <h2>What We Do</h2>
          <div className="services-overview-grid">
            <div className="service-overview-item">
              <img src="/images/IMG_2770.jpg" alt="Beautiful water garden construction services" />
              <h3>Construction</h3>
              <p>Custom design and construction of beautiful water features for your property.</p>
            </div>
            <div className="service-overview-item">
              <img src="/images/IMG_2775.jpg" alt="Aquatic plant expertise and retail" />
              <h3>Plant Expertise</h3>
              <p>Largest selection of aquatic plants in Utah with expert advice for your pond.</p>
            </div>
            <div className="service-overview-item">
              <img src="/images/IMG_2779.jpg" alt="Comprehensive pond maintenance services" />
              <h3>Maintenance</h3>
              <p>Regular maintenance to keep your pond healthy and beautiful year-round.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Expert Equipment</h3>
              <p>We use professional-grade equipment including diver-operated dredges for thorough pond maintenance.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Largest Plant Selection</h3>
              <p>We offer the largest variety of aquatic plants in Utah to enhance your water feature.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Passion for Ponds</h3>
              <p>Our team is passionate about creating and maintaining beautiful water features.</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Years of Experience</h3>
              <p>We have years of experience in pond construction and maintenance across Utah.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="retail-expertise-section">
        <div className="container">
          <h2>Our Retail Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <img src="/images/pumpRepair.webp" alt="Pond equipment and supplies" />
              <h3>Pond Equipment</h3>
              <p>Expert selection of koi, goldfish, and quality pond equipment for your water garden.</p>
            </div>
            <div className="expertise-item">
              <img src="/images/IMG_2780.jpg" alt="Water garden supplies" />
              <h3>Complete Supplies</h3>
              <p>Everything you need from pond liners to filtration systems and water treatments.</p>
            </div>
            <div className="expertise-item">
              <img src="/images/IMG_2782.jpg" alt="Professional equipment" />
              <h3>Professional Equipment</h3>
              <p>High-quality pumps, filters, and maintenance equipment for professional results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-content">
            <div className="team-text">
              <p>Our experienced team of pond professionals is dedicated to providing exceptional service and creating beautiful water features that enhance your property.</p>
              <p>We combine technical expertise with artistic vision to create ponds that are both functional and beautiful.</p>
              <p>Visit our store to meet our knowledgeable staff and get expert advice on plants, fish, and supplies.</p>
            </div>
            <div className="team-image">
              <img 
                src="/images/IMG_2770.jpg" 
                alt="Our professional pond maintenance team" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a consultation or quote on your pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
