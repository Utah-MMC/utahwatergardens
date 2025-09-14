import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import SEO from '../components/SEO';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 'pond-construction',
      title: 'Pond Construction',
      description: 'Custom pond design and construction for residential and commercial properties. We create beautiful, functional water features that enhance your landscape.',
      image: '/images/IMG_2770.jpg',
      features: [
        'Custom design and planning',
        'Professional excavation',
        'Liner installation',
        'Rock and stone work',
        'Water feature integration'
      ]
    },
    {
      id: 'pond-maintenance',
      title: 'Pond Maintenance',
      description: 'Regular maintenance services to keep your pond healthy and beautiful throughout the year.',
      image: '/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg',
      features: [
        'Water quality testing',
        'Plant maintenance',
        'Fish health monitoring',
        'Seasonal care',
        'Equipment maintenance'
      ]
    },
    {
      id: 'pond-cleaning',
      title: 'Pond Cleaning',
      description: 'Professional cleaning services to remove debris, algae, and maintain optimal water quality.',
      image: '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
      features: [
        'Debris removal',
        'Algae control',
        'Water filtration',
        'Equipment cleaning',
        'Water quality restoration'
      ]
    },
    {
      id: 'pond-dredging',
      title: 'Pond Dredging',
      description: 'Specialized dredging services to remove accumulated sediment and restore pond depth.',
      image: '/images/IMG_2782.jpg',
      features: [
        'Sediment removal',
        'Depth restoration',
        'Equipment operation',
        'Environmental protection',
        'Site restoration'
      ]
    },
    {
      id: 'vacuum-services',
      title: 'Vacuum Services',
      description: 'Advanced vacuum cleaning technology for thorough pond cleaning and maintenance.',
      image: '/images/vacServices.webp',
      features: [
        'Deep cleaning',
        'Sediment removal',
        'Non-invasive cleaning',
        'Efficient operation',
        'Complete restoration'
      ]
    },
    {
      id: 'pump-repair',
      title: 'Pump Repair & Maintenance',
      description: 'Expert pump repair and maintenance services to keep your water feature running smoothly.',
      image: '/images/pumpRepair.webp',
      features: [
        'Pump diagnostics',
        'Repair services',
        'Preventive maintenance',
        'Performance optimization',
        'Emergency repairs'
      ]
    }
  ];

  return (
    <div className="services-page">
      <PageHero 
        title="Our Services"
        subtitle="Complete pond and water feature solutions for Utah properties"
        backgroundImage="/images/IMG_2770.jpg"
        backgroundImageAlt="Professional pond construction services"
      />

      <SEO
        title="Pond Services Utah - Professional Pond Construction & Maintenance"
        description="Professional pond construction, maintenance, and water feature services in Utah. Expert design, installation, and year-round care for residential and commercial properties."
        keywords="pond services utah, pond construction, pond maintenance, water features, utah pond builders, pond installation"
        canonical="https://utahwatergardens.com/services"
        ogTitle="Professional Pond Services in Utah - Construction & Maintenance"
        ogDescription="Expert pond construction, maintenance, and water feature services in Utah. Professional design and installation for residential and commercial properties."
        ogImage="https://utahwatergardens.com/images/IMG_2770.jpg"
        twitterCard="summary_large_image"
      />

      <section className="services-section first-section-gradient">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card-large">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="service-description-mobile">{service.description.split('.')[0]}.</p>
                  <ul className="service-features desktop-only">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="equipment-section gradient-wipe-up">
        <div className="container">
          <h2>Our Equipment</h2>
          <div className="equipment-grid">
            <div className="equipment-item">
              <img src="/images/Diver-Operated-Dredge.jpg" alt="Diver-operated dredge equipment" />
              <h3>Diver-Operated Dredge</h3>
              <p>Professional dredging equipment for deep pond cleaning and sediment removal.</p>
            </div>
            <div className="equipment-item">
              <img src="/images/cleaningBefore1000x750.webp" alt="Pond cleaning equipment" />
              <h3>Cleaning Equipment</h3>
              <p>Advanced cleaning tools and equipment for thorough pond maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="services-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a consultation or quote on your pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
        
      {/* Service Images */}
      <section className="service-images-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-images-grid">
            <div className="service-image-card">
              <img src="/images/IMG_2770.jpg" alt="Professional pond services and maintenance" />
              <h3>Expert Service</h3>
              <p>Professional pond care and maintenance</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2775.jpg" alt="Quality pond equipment and supplies" />
              <h3>Quality Equipment</h3>
              <p>Only the best pond equipment and supplies</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2779.jpg" alt="Custom pond design and installation" />
              <h3>Custom Design</h3>
              <p>Custom pond design and installation services</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2780.jpg" alt="Ongoing pond maintenance and support" />
              <h3>Ongoing Support</h3>
              <p>Continuous maintenance and support services</p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: 'none' }}>
        <Link to="/contact">utah water gardens</Link>
        <Link to="/plants-fish">utah water gardens</Link>
        <Link to="/pondsupplies">utah water gardens</Link>
        <Link to="/aquatic-plants">utah water gardens</Link>
        <Link to="/fish-koi">utah water gardens</Link>
        <Link to="/">utah water gardens</Link>
      </div>
    </div>
  );
};



export default ServicesPage;
