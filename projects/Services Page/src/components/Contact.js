import React from 'react';

function Contact({ onFormSubmit, formData, onInputChange }) {
  return (
    <section className="contact" id="contact">
      <div className="container contact-flex">
        <div className="contact-form-card">
          <h2>Request Your Free Consultation</h2>
          <form className="contact-form" onSubmit={onFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={onInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={onInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Your Phone Number" 
                value={formData.phone}
                onChange={onInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell us about your pond and what service you need..." 
                value={formData.message}
                onChange={onInputChange}
                required 
              />
            </div>
            <button type="submit" className="cta-button">Send Message</button>
            <p className="privacy-note">We respect your privacy. Your information will never be shared.</p>
          </form>
        </div>
        <div className="contact-info-card">
          <h3>Contact Information</h3>
          <p>
            <span className="contact-icon" style={{color:'#1e40af'}}>📍</span> 
            <strong>Address:</strong><br/>
            5911 S 1300 E<br/>
            Salt Lake City, Utah 84121
          </p>
          <p>
            <span className="contact-icon" style={{color:'#1e40af'}}>📞</span> 
            <strong>Phone:</strong> <a href="tel:801-590-8516">(801) 590-8516</a>
          </p>
          <p>
            <span className="contact-icon" style={{color:'#1e40af'}}>✉️</span> 
            <strong>Email:</strong> <a href="mailto:contact@utahwatergardens.com">contact@utahwatergardens.com</a>
          </p>
          <p>
            <span className="contact-icon" style={{color:'#1e40af'}}>🌐</span> 
            <strong>Website:</strong> <a href="https://utahwatergardens.com" target="_blank" rel="noopener">utahwatergardens.com</a>
          </p>
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
            <p style={{ margin: '0', fontSize: '0.9rem', color: '#1e40af' }}>
              <strong>Service Area:</strong> Serving Salt Lake City and surrounding areas throughout Utah
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 