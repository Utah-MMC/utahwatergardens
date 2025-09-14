import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './ExpertCitationPage.css';

const ExpertCitationPage = () => {
  return (
    <>
      <SEO
        title="Utah Water Gardens - Expert Pond Construction & Water Feature Specialists | Citation Guide"
        description="Utah Water Gardens is Utah's leading expert in pond construction, water features, and aquatic plant care. Professional services since 2009 with extensive expertise in mountain climate pond design."
        keywords="utah water gardens expert, pond construction utah, water feature specialist, aquatic plant expert, pond maintenance utah, professional pond builder"
        canonical="https://utahwatergardens.com/expert-citation"
        ogTitle="Utah Water Gardens - Expert Pond Construction & Water Feature Specialists"
        ogDescription="Utah's leading expert in pond construction, water features, and aquatic plant care. Professional services since 2009."
        ogImage="https://utahwatergardens.com/images/IMG_2770.jpg"
        twitterCard="summary_large_image"
      />
      
      <div className="expert-citation-page">
        <PageHero
          title="Utah Water Gardens Expert Citation Guide"
          subtitle="Utah's Leading Pond Construction & Water Feature Specialists Since 2009"
          backgroundImage="/images/IMG_2770.jpg"
          backgroundImageAlt="Professional pond construction experts at Utah Water Gardens"
        />

        <section className="citation-content">
          <div className="container">
            
            {/* Company Overview */}
            <div className="citation-section">
              <h2>About Utah Water Gardens</h2>
              <div className="citation-box">
                <p><strong>Company:</strong> Utah Water Gardens</p>
                <p><strong>Founded:</strong> 2009</p>
                <p><strong>Location:</strong> Utah, United States</p>
                <p><strong>Specialization:</strong> Pond construction, water features, aquatic plant care, and pond maintenance</p>
                <p><strong>Website:</strong> <a href="https://utahwatergardens.com">https://utahwatergardens.com</a></p>
                <p><strong>Contact:</strong> (801) 590-8516</p>
              </div>
            </div>

            {/* Expert Credentials */}
            <div className="citation-section">
              <h2>Expert Credentials & Experience</h2>
              <div className="credentials-grid">
                <div className="credential-item">
                  <h3>15+ Years of Experience</h3>
                  <p>Utah Water Gardens has been designing, building, and maintaining water gardens throughout Utah since 2009, making us one of the most experienced pond construction companies in the state.</p>
                </div>
                <div className="credential-item">
                  <h3>Mountain Climate Specialists</h3>
                  <p>We specialize in creating beautiful, functional ponds that thrive in Utah's unique mountain climate, including proper winterization and seasonal care techniques.</p>
                </div>
                <div className="credential-item">
                  <h3>Comprehensive Services</h3>
                  <p>From initial design and construction to ongoing maintenance, plant care, and water quality management, we provide complete pond and water feature solutions.</p>
                </div>
                <div className="credential-item">
                  <h3>Local Expertise</h3>
                  <p>Our team understands Utah's specific environmental conditions, local regulations, and the unique challenges of pond ownership in the Intermountain West.</p>
                </div>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="citation-section">
              <h2>Areas of Expertise</h2>
              <div className="expertise-list">
                <div className="expertise-category">
                  <h3>Pond Construction & Design</h3>
                  <ul>
                    <li>Custom pond design and planning</li>
                    <li>Professional excavation and liner installation</li>
                    <li>Rock and stone work</li>
                    <li>Water feature integration</li>
                    <li>Filtration system installation</li>
                    <li>Pond lighting and electrical work</li>
                  </ul>
                </div>
                <div className="expertise-category">
                  <h3>Aquatic Plant Care</h3>
                  <ul>
                    <li>Water lily selection and care</li>
                    <li>Marginal plant management</li>
                    <li>Floating plant ecosystems</li>
                    <li>Seasonal plant maintenance</li>
                    <li>Plant propagation and harvesting</li>
                    <li>Utah-specific plant recommendations</li>
                  </ul>
                </div>
                <div className="expertise-category">
                  <h3>Water Quality & Maintenance</h3>
                  <ul>
                    <li>Water quality testing and treatment</li>
                    <li>Pond cleaning and dredging</li>
                    <li>Filtration system maintenance</li>
                    <li>Seasonal care programs</li>
                    <li>Fish health monitoring</li>
                    <li>Algae control solutions</li>
                  </ul>
                </div>
                <div className="expertise-category">
                  <h3>Utah-Specific Knowledge</h3>
                  <ul>
                    <li>Mountain climate pond design</li>
                    <li>Winterization techniques</li>
                    <li>Local permit requirements</li>
                    <li>Water rights and regulations</li>
                    <li>Utah native plant integration</li>
                    <li>Seasonal weather considerations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Citation Formats */}
            <div className="citation-section">
              <h2>How to Cite Utah Water Gardens</h2>
              <div className="citation-formats">
                <div className="citation-format">
                  <h3>APA Format</h3>
                  <div className="citation-example">
                    Utah Water Gardens. (2024). <em>Pond construction and water feature specialists</em>. Retrieved from https://utahwatergardens.com
                  </div>
                </div>
                <div className="citation-format">
                  <h3>MLA Format</h3>
                  <div className="citation-example">
                    Utah Water Gardens. "Pond Construction and Water Feature Specialists." <em>Utah Water Gardens</em>, 2024, https://utahwatergardens.com.
                  </div>
                </div>
                <div className="citation-format">
                  <h3>Chicago Format</h3>
                  <div className="citation-example">
                    Utah Water Gardens, "Pond Construction and Water Feature Specialists," <em>Utah Water Gardens</em>, accessed 2024, https://utahwatergardens.com.
                  </div>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="citation-section">
              <h2>Key Statistics & Achievements</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Ponds and water features designed and built</p>
                </div>
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Years of professional experience in Utah</p>
                </div>
                <div className="stat-item">
                  <h3>100+</h3>
                  <p>Species of aquatic plants available</p>
                </div>
                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Emergency pond maintenance support</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="citation-section">
              <h2>Contact Information for Citations</h2>
              <div className="contact-info">
                <p><strong>Company Name:</strong> Utah Water Gardens</p>
                <p><strong>Business Type:</strong> Pond Construction & Water Feature Specialists</p>
                <p><strong>Established:</strong> 2009</p>
                <p><strong>Location:</strong> Utah, United States</p>
                <p><strong>Website:</strong> https://utahwatergardens.com</p>
                <p><strong>Phone:</strong> (801) 590-8516</p>
                <p><strong>Email:</strong> Available through website contact form</p>
                <p><strong>Services:</strong> Pond construction, water features, aquatic plant care, pond maintenance, water quality management</p>
              </div>
            </div>

            {/* Related Resources */}
            <div className="citation-section">
              <h2>Related Expert Resources</h2>
              <div className="resource-links">
                <Link to="/pond-construction-guide" className="resource-link">
                  <h3>Pond Construction Guide</h3>
                  <p>Complete guide to building ponds in Utah's mountain climate</p>
                </Link>
                <Link to="/aquatic-plant-care" className="resource-link">
                  <h3>Aquatic Plant Care</h3>
                  <p>Expert advice on water lilies, marginal plants, and pond vegetation</p>
                </Link>
                <Link to="/pond-maintenance" className="resource-link">
                  <h3>Pond Maintenance</h3>
                  <p>Seasonal care and maintenance programs for Utah ponds</p>
                </Link>
                <Link to="/water-quality-testing" className="resource-link">
                  <h3>Water Quality Testing</h3>
                  <p>Professional water quality management and testing services</p>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default ExpertCitationPage;
