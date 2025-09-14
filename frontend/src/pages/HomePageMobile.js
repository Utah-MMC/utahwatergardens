import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllPlants, createPlantSlug } from '../data/plantData';

// Simplified HomePage component optimized for mobile
const HomePageMobile = () => {
  const plantList = useMemo(() => {
    try {
      return getAllPlants().slice(0, 8); // Limit to 8 plants for mobile performance
    } catch (error) {
      console.error('Error loading plants:', error);
      return [];
    }
  }, []);

  const services = [
    {
      title: "Pond Design & Construction",
      description: "Transform your vision into reality—from intimate water features to expansive koi ponds.",
      image: "/images/pondConstruction1000x800.webp",
      link: "/pond-services/design-build"
    },
    {
      title: "Pond Maintenance & Care",
      description: "Water quality, plant care, equipment checks, and seasonal prep—handled.",
      image: "/images/pondMaintenance.webp",
      link: "/pond-services/maintenance"
    },
    {
      title: "Lake & Pond Dredging",
      description: "Restore depth, flow, and ecological balance with professional dredging.",
      image: "/images/pondDredging-topaz-enhance-3.9x.jpeg",
      link: "/pond-and-lake-dredging"
    },
    {
      title: "Pond Cleaning Services",
      description: "Deep cleaning, debris removal, and water clarification for crystal-clear results.",
      image: "/images/pondCleanings-topaz-enhance-3.9x.jpeg",
      link: "/pond-services/cleaning"
    }
  ];

  const resources = [
    {
      name: "Care Guides",
      description: "Comprehensive guides for pond and aquatic life care",
      image: "/images/144b4c20031b8d5bdb573f8c9aea03a3-enhance-4x.jpeg",
      path: "/resources/care-guides"
    },
    {
      name: "Pond Tips & Tricks",
      description: "Expert tips to keep your pond healthy and beautiful",
      image: "/images/19765b123d1521ca46ded746c375eeef-enhance-4x.jpeg",
      path: "/resources/tips-tricks"
    },
    {
      name: "Seasonal Care",
      description: "Season-specific care instructions for your pond",
      image: "/images/1a558e9d94802fd824b157129ebe0e1d-enhance-4x.jpeg",
      path: "/resources/seasonal-care"
    },
    {
      name: "Troubleshooting",
      description: "Solutions to common pond problems",
      image: "/images/1a9b7904c3461d26b8b9b177164f11c4-denoise.jpeg",
      path: "/resources/troubleshooting"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-media">
          <img 
            src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
            alt="Pond landscape with waterfall and rock features"
            className="hero-fallback"
            loading="eager"
          />
        </div>
        <div className="hero-inner">
          <h1 className="hero-title">
            Create Your Dream Water Garden
          </h1>
          <p className="hero-sub">
            From stunning koi ponds to tranquil water features, we bring your aquatic vision to life with expert design, construction, and maintenance.
          </p>
          <div className="btn-row">
            <a href="tel:+18015908516" className="btn" data-variant="primary">
              TALK TO EXPERT
            </a>
            <Link to="/pond-services" className="btn" data-variant="outline">
              POND SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Our Services</h2>
            <p>Your full-service pond partner—from design to year-round care.</p>
          </div>
          <div className="cards">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="card">
                <div className="media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{service.title}</h3>
                  <p className="muted">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section alt">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="section-head">
                <h2>About Utah Water Gardens</h2>
                <p>Utah's premier pond and water feature specialists since 1995.</p>
              </div>
              <div className="content">
                <p>
                  With over 30 years of experience, Utah Water Gardens has been transforming outdoor spaces across Salt Lake City and surrounding areas. We specialize in creating beautiful, sustainable water features that enhance your property and provide years of enjoyment.
                </p>
                
                <div className="stats">
                  <div className="stat">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">2500+</span>
                    <span className="stat-label">Happy Customers</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">4.9/5</span>
                    <span className="stat-label">Customer Rating</span>
                  </div>
                </div>

                <div className="btn-row">
                  <Link to="/about" className="btn" data-variant="primary">Learn More About Us</Link>
                  <a href="tel:+18015908516" className="btn" data-variant="outline">Call (801) 590-8516</a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="media">
                <img 
                  src="/images/0cc90ccee5b37dfa6aed153a01581727-enhance-4x.jpeg" 
                  alt="Beautiful pond with waterfall and rock features" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plants Section */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Our Plant Collection</h2>
            <p>Utah-ready lilies, floaters, and marginals—each with care notes.</p>
          </div>
          <div className="cards">
            {plantList.map((plant, index) => (
              <Link 
                key={index} 
                to={`/plant/${plant ? createPlantSlug(plant.name) : 'unknown'}`} 
                className="card"
              >
                <div className="media">
                  <img 
                    src={plant?.image || '/images/placeholder.jpg'} 
                    alt={plant?.name || 'Plant'} 
                    loading="lazy"
                  />
                </div>
                <div className="body">
                  <h3>{plant?.name || 'Unknown Plant'}</h3>
                  {plant?.category && <span className="chip">{plant.category}</span>}
                  {plant?.description && <p className="muted clamp-2">{plant.description}</p>}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/plants-fish" className="btn" data-variant="link">
              View all plants →
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Resources</h2>
            <p>Guides, tips, seasonal care, troubleshooting, and videos.</p>
          </div>
          <div className="cards">
            {resources.map((resource, index) => (
              <Link key={index} to={resource.path} className="card">
                <div className="media">
                  <img src={resource.image} alt={resource.name} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{resource.name}</h3>
                  <p className="muted">{resource.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/resources" className="btn" data-variant="link">
              View all resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="section-head">
            <h2>Ready to Create Your Dream Pond?</h2>
            <p>Get expert consultation and see if we can serve your area</p>
          </div>
          
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-card">
              <div className="card-header">
                <div className="icon">💬</div>
                <h3>Get In Touch</h3>
                <p>Ready to start your pond project? Contact us for a consultation.</p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h4>Call Us</h4>
                    <a href="tel:+18015908516" className="contact-link">(801) 590-8516</a>
                    <span className="method-note">Mon-Sat: 10:00AM-6PM</span>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-content">
                    <h4>Email Us</h4>
                    <a href="mailto:contact@utahwatergardens.com" className="contact-link">contact@utahwatergardens.com</a>
                    <span className="method-note">We respond within 24 hours</span>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h4>Visit Us</h4>
                    <span className="contact-text">Utah 84121</span>
                    <span className="method-note">Salt Lake City area</span>
                  </div>
                </div>
              </div>
              
              <div className="contact-actions">
                <Link to="/contact" className="btn btn-primary">Contact Form</Link>
                <a href="tel:+18015908516" className="btn btn-outline">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageMobile;
