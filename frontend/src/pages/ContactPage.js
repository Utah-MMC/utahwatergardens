import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import StandardHero from '../components/StandardHero';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Submitting contact form...', formData);
      
            const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('API Response:', { status: response.status, result });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
      console.error('Error details:', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact methods data removed - now using structured contact details in JSX

  const storeHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const services = [
    'Pond Design & Construction',
    'Pond Maintenance',
    'Pond Cleaning',
    'Pond Dredging',
    'Aquatic Plants',
    'Koi & Fish',
    'Pond Supplies',
    'Equipment Repair',
    'Other'
  ];

  return (
    <>
      <SEO 
        title="Contact Utah Water Gardens - Get Expert Pond Advice"
        description="Contact Utah Water Gardens for expert pond advice, consultations, and services. Call (801) 590-8516 or visit our store at 5911 S 1300 E, Salt Lake City, UT."
        keywords="contact utah water gardens, pond consultation, pond advice, utah pond services, salt lake city pond company"
        canonical="https://utahwatergardens.com/contact"
      />
      <div className={`contact-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <StandardHero 
          title="Contact Utah Water Gardens"
          subtitle="Get expert advice, schedule consultations, or visit our store to see our wide variety of plants and pond supplies."
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          backgroundImageAlt="Professional pond consultation services"
          primaryButtonText="CALL (801) 590-8516"
          primaryButtonLink="tel:(801) 590-8516"
          secondaryButtonText="VISIT STORE"
          secondaryButtonLink="#contact-main-content"
        />

        {/* Main Content */}
        <section className="contact-main-content">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-section">
                <div className="form-header">
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(801) 555-0123"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="form-success">
                      <span className="success-icon">Success</span>
                      <p>Thank you for your message! We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="form-error">
                      <span className="error-icon">Error</span>
                      <p>Sorry, there was an error sending your message. Please try again or call us directly.</p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info-section">
                <div className="info-card">
                  <div className="card-header">
                    <h3>Get in Touch</h3>
                    <p>We're here to help with all your pond and water feature needs. Choose the method that works best for you.</p>
                  </div>
                  
                  <div className="contact-details">
                    {/* Phone Section */}
                    <div className="contact-detail">
                      <div className="detail-icon phone-icon">
                        <span className="icon-label">PHONE</span>
                      </div>
                      <div className="detail-content">
                        <h4>Phone</h4>
                        <a href="tel:(801) 590-8516" className="phone-number">(801) 590-8516</a>
                        <p className="detail-description">Call for immediate assistance</p>
                      </div>
                    </div>
                    
                    {/* Address Section */}
                    <div className="contact-detail">
                      <div className="detail-icon location-icon">
                        <span className="icon-label">LOCATION</span>
                      </div>
                      <div className="detail-content">
                        <h4>Address</h4>
                        <div className="address-info">
                          <span className="street-address">5911 S 1300 E</span>
                          <div className="city-directions">
                            <span className="city-state">Salt Lake City, UT 84121</span>
                            <a 
                              href="https://maps.google.com/maps?q=5911+S+1300+E,+Salt+Lake+City,+UT+84121"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="directions-link"
                            >
                              Get Directions →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Store Hours Section */}
                    <div className="contact-detail">
                      <div className="detail-icon hours-icon">
                        <span className="icon-label">HOURS</span>
                      </div>
                      <div className="detail-content">
                        <h4>Store Hours</h4>
                        <div className="hours-list">
                          {storeHours.map((schedule, index) => (
                            <div key={index} className="hours-item">
                              <span className="day">{schedule.day}</span>
                              <span className="hours">{schedule.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                  <h3>Quick Actions</h3>
                  <div className="action-buttons">
                    <a href="tel:(801) 590-8516" className="action-button primary">
                      <span className="button-icon">Call</span>
                      <span>Call Now</span>
                    </a>
                    <a 
                      href="https://maps.google.com/maps?q=5911+S+1300+E,+Salt+Lake+City,+UT+84121"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button secondary"
                    >
                      <span className="button-icon">Map</span>
                      <span>Get Directions</span>
                    </a>
                    <a href="/free-estimate" className="action-button secondary">
                      <span className="button-icon">Estimate</span>
                      <span>Free Estimate</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <h2>Find Us</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5!2d-111.8!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiAxMTnCsDQ4JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Utah Water Gardens Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact-faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>How quickly can you respond to my inquiry?</h4>
                <p>We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly at (801) 590-8516.</p>
              </div>
              <div className="faq-item">
                <h4>Do you offer free consultations?</h4>
                <p>Yes! We offer free consultations for pond design and construction projects. Contact us to schedule your consultation.</p>
              </div>
              <div className="faq-item">
                <h4>Can I visit your store to see plants and supplies?</h4>
                <p>Absolutely! We encourage customers to visit our store to see our complete selection of aquatic plants, fish, and pond supplies.</p>
              </div>
              <div className="faq-item">
                <h4>What areas do you serve?</h4>
                <p>We serve the greater Salt Lake City area and surrounding communities throughout Utah. Contact us to confirm service in your area.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;