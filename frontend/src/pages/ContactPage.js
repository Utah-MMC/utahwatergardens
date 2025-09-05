import React, { useState } from 'react';
import PageHero from '../components/PageHero.js';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <PageHero 
        title="Contact Us"
        subtitle="Contact us for a consultation, visit our store to see our wide variety of plants and pond supplies, or shop online with delivery and scheduled pickup options"
        backgroundImage="/images/uwg_image_1941-topaz-enhance-3.5x.jpeg"
        backgroundImageAlt="Professional pond consultation services"
      />

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    <option value="pond-construction">Pond Construction</option>
                    <option value="pond-maintenance">Pond Maintenance</option>
                    <option value="pond-cleaning">Pond Cleaning</option>
                    <option value="pond-dredging">Pond Dredging</option>
                    <option value="pump-repair">Pump Repair</option>
                    <option value="plant-advice">Plant & Fish Advice</option>
                    <option value="supplies">Pond Supplies</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p><a href="tel:(801) 590-8516">(801) 590-8516</a></p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>contact@utahwatergardens.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Address</h3>
                    <p>5911 S 1300 E<br />Salt Lake City, UT 84121</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-image">
                <img 
                  src="/images/IMG_2780.jpg" 
                  alt="Beautiful water garden consultation services" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="retail-highlights-section">
        <div className="container">
          <h2>Visit Our Store</h2>
          <p>Come see our wide variety of aquatic plants, fish, and pond supplies. We also offer delivery and scheduled pickup options for your convenience.</p>
          <div className="retail-highlights-grid">
            <div className="retail-highlight">
              <img src="/images/IMG_2775.jpg" alt="Aquatic plant selection" />
              <h3>Aquatic Plants</h3>
              <p>Largest variety of aquatic plants in Utah with expert advice</p>
              <a href="tel:(801) 590-8516" className="retail-cta">Call for Plant Advice</a>
            </div>
            <div className="retail-highlight">
              <img src="/images/IMG_2776.jpg" alt="Fish selection" />
              <h3>Fish & Koi</h3>
              <p>Healthy koi, goldfish, and quality pond equipment for your water garden</p>
              <a href="tel:(801) 590-8516" className="retail-cta">Call for Fish Selection</a>
            </div>
            <div className="retail-highlight">
              <img src="/images/IMG_2779.jpg" alt="Pond supplies" />
              <h3>Pond Supplies</h3>
              <p>Complete selection of pond maintenance and enhancement supplies</p>
              <a href="tel:(801) 590-8516" className="retail-cta">Call for Supplies</a>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-111.1234567890123!3d40.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzM0LjQiTiAxMTnCsDA3JzM0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Utah Water Gardens Location"
            ></iframe>
          </div>
        </div>
      </section>

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
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a consultation or quote on your pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <button onClick={() => document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary">Send Message</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
