import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StandardHero from '../components/StandardHero';
import './AboutPage.css';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'story', label: 'Our Story', icon: 'Story' },
    { id: 'mission', label: 'Our Mission', icon: 'Mission' },
    { id: 'values', label: 'Our Values', icon: 'Values' },
    { id: 'team', label: 'Our Team', icon: 'Team' },
    { id: 'services', label: 'Our Services', icon: 'Services' }
  ];

  // const stats = [
  //   { number: '15+', label: 'Years Experience', icon: 'Experience' },
  //   { number: '500+', label: 'Projects Completed', icon: 'Projects' },
  //   { number: '1000+', label: 'Happy Customers', icon: 'Customers' },
  //   { number: '50+', label: 'Plant Varieties', icon: 'Plants' }
  // ];

  const values = [
    {
      title: 'Quality First',
      description: 'We use only the highest quality materials and equipment to ensure your pond project exceeds expectations.',
      icon: 'Quality'
    },
    {
      title: 'Expert Knowledge',
      description: 'Our team has years of experience in pond construction, maintenance, and aquatic plant care.',
      icon: 'Expertise'
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We work closely with you to bring your vision to life.',
      icon: 'Service'
    },
    {
      title: 'Local Expertise',
      description: 'We understand Utah\'s unique climate and can recommend the best solutions for your location.',
      icon: 'Local'
    },
    {
      title: 'Innovation',
      description: 'We stay current with the latest pond technology and design trends to provide cutting-edge solutions.',
      icon: 'Innovation'
    }
  ];

  const teamMembers = [
    {
      name: 'Expert Team',
      role: 'Pond Specialists',
      description: 'Our experienced team brings together expertise in pond construction, aquatic plant care, and water feature maintenance.',
      image: '/images/IMG_2770.jpg'
    },
    {
      name: 'Plant Experts',
      role: 'Aquatic Specialists',
      description: 'We have the largest selection of aquatic plants in Utah and the knowledge to help you choose the perfect ones.',
      image: '/images/IMG_2775.jpg'
    },
    {
      name: 'Maintenance Crew',
      role: 'Care Specialists',
      description: 'Our maintenance team ensures your pond stays healthy and beautiful year-round with professional care.',
      image: '/images/IMG_2779.jpg'
    },
    {
      name: 'Design Team',
      role: 'Creative Specialists',
      description: 'Our design team creates stunning water features that complement your landscape and exceed your expectations.',
      image: '/images/IMG_2780.jpg'
    },
    {
      name: 'Installation Team',
      role: 'Installation Specialists',
      description: 'Our installation team ensures your pond is built to perfection with professional craftsmanship.',
      image: '/images/IMG_2781.jpg'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <div className="tab-content">
            <div className="content-grid">
              <div className="content-text">
                <h3>Building Dreams, One Pond at a Time</h3>
                <p>Utah Water Gardens was founded with a simple mission: to bring the beauty and tranquility of water features to homes and businesses throughout Utah. What started as a passion for aquatic plants and pond design has grown into Utah's premier water feature company.</p>
                <p>Over the years, we've helped hundreds of customers transform their outdoor spaces with custom ponds, waterfalls, and aquatic gardens. Our expertise spans from intimate backyard water features to large commercial installations.</p>
                <p>We pride ourselves on staying at the forefront of pond technology and design trends, while maintaining our commitment to quality craftsmanship and exceptional customer service.</p>
                <div className="story-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">Award</span>
                    <span>Utah's Largest Aquatic Plant Selection</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">Licensed</span>
                    <span>Licensed & Insured Professionals</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">Expert</span>
                    <span>Expert Plant Care & Maintenance</span>
                  </div>
                </div>
              </div>
              <div className="content-image">
                <img src="/images/9a6a85478f82960b2ce177e0310807c8-denoise.jpeg" alt="Beautiful water feature construction" />
              </div>
            </div>
          </div>
        );
      case 'mission':
        return (
          <div className="tab-content">
            <div className="mission-content">
              <div className="mission-statement">
                <h3>Our Mission</h3>
                <p className="mission-text">
                  "To create and maintain beautiful water features that enhance our customers' lives while promoting sustainable aquatic ecosystems in Utah's unique environment."
                </p>
              </div>
              <div className="mission-goals">
                <div className="goal-item">
                  <div className="goal-icon">Design</div>
                  <h4>Creative Design</h4>
                  <p>Transform your outdoor space with custom-designed water features that complement your landscape and lifestyle.</p>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">Sustainable</div>
                  <h4>Sustainable Practices</h4>
                  <p>Promote healthy aquatic ecosystems using environmentally friendly methods and native plant selections.</p>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">Education</div>
                  <h4>Education & Support</h4>
                  <p>Empower our customers with knowledge and ongoing support to maintain their water features successfully.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'values':
        return (
          <div className="tab-content">
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'team':
        return (
          <div className="tab-content">
            <div className="team-grid">
              {teamMembers.map((member, index) => {
                const teamSlug = member.name.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link key={index} to={`/team/${teamSlug}`} className="team-card">
                    <div className="team-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="team-info">
                      <h4>{member.name}</h4>
                      <p className="team-role">{member.role}</p>
                      <p className="team-description">{member.description}</p>
                      <span className="team-link">Learn More →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="tab-content">
            <div className="services-content">
              <h3>Our Services</h3>
              <p>Utah Water Gardens offers comprehensive water feature services to meet all your pond and aquatic needs.</p>
              <div className="services-grid">
                <div className="service-item">
                  <div className="service-icon">Design</div>
                  <h4>Pond Design & Build</h4>
                  <p>Custom pond design and construction services for residential and commercial properties.</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">Maintenance</div>
                  <h4>Pond Maintenance</h4>
                  <p>Regular maintenance services to keep your pond healthy and beautiful year-round.</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">Plants</div>
                  <h4>Aquatic Plant Care</h4>
                  <p>Expert care and maintenance of aquatic plants and water gardens.</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">Repair</div>
                  <h4>Equipment Repair</h4>
                  <p>Professional repair and maintenance of pond pumps, filters, and equipment.</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">Consultation</div>
                  <h4>Expert Consultation</h4>
                  <p>Professional advice on pond design, plant selection, and maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEO 
        title="About Utah Water Gardens - Utah's Premier Pond & Water Feature Company"
        description="Learn about Utah Water Gardens, Utah's premier pond and water feature company. 15+ years of experience, 500+ projects completed, and Utah's largest selection of aquatic plants."
        keywords="about utah water gardens, pond company utah, water feature experts, aquatic plant specialists, pond construction utah"
        canonical="https://utahwatergardens.com/about"
      />
      <div className={`about-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <StandardHero 
          title="About Utah Water Gardens"
          subtitle="Utah's premier pond and water feature company with over 15 years of experience creating beautiful aquatic landscapes."
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          backgroundImageAlt="Beautiful pond landscape with waterfall and rock features"
          primaryButtonText="LEARN MORE"
          primaryButtonLink="#about-main-content"
          secondaryButtonText="CONTACT US"
          secondaryButtonLink="/contact"
        />

        {/* Main Content */}
        <section className="about-main-content first-section-gradient">
          <div className="container">
            {/* Tab Navigation */}
            <div className="tab-navigation">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content-container">
              {renderTabContent()}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="services-overview-section first-section-gradient">
          <div className="container">
            <div className="section-header">
              <h2>What We Do</h2>
              <p>Comprehensive water feature solutions from design to maintenance</p>
            </div>
            <div className="services-overview-grid">
              <Link to="/pond-services/design-build" className="service-overview-item">
                <div className="service-image">
                  <img src="/images/9ab8773a32e35a8b8431ca4c5a2370cb-denoise.jpeg" alt="Custom pond construction services" />
                  <div className="service-overlay">
                    <span className="service-icon">Construction</span>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Construction</h3>
                  <p>Custom design and construction of beautiful water features for your property.</p>
                  <p className="service-description-mobile">Custom water feature design and construction.</p>
                  <span className="service-link">Learn More →</span>
                </div>
              </Link>
              
              <Link to="/plants-fish" className="service-overview-item">
                <div className="service-image">
                  <img src="/images/9b722d0d34e1a978dbc09c43207da2c3-enhance-4x.jpeg" alt="Aquatic plant expertise and retail" />
                  <div className="service-overlay">
                    <span className="service-icon">Plants</span>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Plant Expertise</h3>
                  <p>Largest selection of aquatic plants in Utah with expert advice for your pond.</p>
                  <p className="service-description-mobile">Largest selection of aquatic plants in Utah.</p>
                  <span className="service-link">View Plants →</span>
                </div>
              </Link>
              
              <Link to="/pond-services/maintenance" className="service-overview-item">
                <div className="service-image">
                  <img src="/images/9e49a00419a2222e5e5fe0a5bebe34f4-enhance-4x.jpeg" alt="Professional pond maintenance services" />
                  <div className="service-overlay">
                    <span className="service-icon">Maintenance</span>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Maintenance</h3>
                  <p>Professional maintenance services to keep your pond healthy and beautiful year-round.</p>
                  <p className="service-description-mobile">Professional pond maintenance services.</p>
                  <span className="service-link">Schedule Service →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Store Information */}
        <section className="store-info-section first-section-gradient">
          <div className="container">
            <div className="store-info-content">
              <div className="store-info-text">
                <h2>Visit Our Store</h2>
                <p>
                  Come visit our retail location to see our complete selection of aquatic plants, fish, and pond supplies. 
                  Our knowledgeable staff is ready to help you choose the perfect additions for your water garden.
                </p>
                <div className="store-details">
                  <div className="store-detail">
                    <i className="fas fa-map-marker-alt" aria-hidden></i>
                    <span>5911 S 1300 E, Salt Lake City, UT 84121</span>
                  </div>
                  <div className="store-detail">
                    <i className="fas fa-phone" aria-hidden></i>
                    <a href="tel:(801) 590-8516">(801) 590-8516</a>
                  </div>
                  <div className="store-detail">
                    <i className="fas fa-clock" aria-hidden></i>
                    <span>Monday - Friday: 10:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="store-cta-buttons">
                  <a href="tel:(801) 590-8516" className="btn btn-primary">Call Us Now</a>
                  <a
                    href="https://maps.google.com/maps?q=5911+S+1300+E,+Salt+Lake+City,+UT+84121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="store-info-image">
                <img src="/images/a27cb0627c39a5184b51cc152a9ae837-enhance-4x.jpeg" alt="Our store and pond maintenance services" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <h2>Ready to Start Your Project?</h2>
            <p>Let us help you create the water feature of your dreams.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </section>
      </div>
      <InternalLinks />
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

export default AboutPage;