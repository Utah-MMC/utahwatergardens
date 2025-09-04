import React from 'react';

function Hero({ onFormSubmit, formData, onInputChange }) {
  return (
    <section className="hero ai-hero" id="hero">
      <div className="container hero-flex">
        <div className="hero-text">
          <h1 className="hero-title">
            Professional <span className="highlight">Pond Services</span><br/>
            for Your Water Feature
          </h1>
          <p className="hero-sub">
            From pond cleanings and maintenance to construction and repair, Utah Water Gardens provides comprehensive pond services throughout Utah. Our qualified pond technicians ensure your water feature stays beautiful and healthy year-round.
          </p>
          <form className="hero-form" onSubmit={onFormSubmit}>
            <input 
              type="text" 
              name="service" 
              placeholder="What service do you need?" 
              value={formData.service}
              onChange={onInputChange}
              required 
            />
            <input type="hidden" name="subject" value="Pond Service Request from Hero Section" />
            <input type="hidden" name="message" value="New pond service request from website hero section" />
            <button type="submit" className="cta-button">Get Free Consultation &rarr;</button>
          </form>
        </div>
        <div className="hero-image hero-image-rounded">
          <img src="/images/pond-service-hero.jpg" alt="Professional pond cleaning service" />
        </div>
      </div>
    </section>
  );
}

export default Hero; 