import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = ({ 
  title = "Ready to Get Started?", 
  subtitle = "Contact us today for a consultation or quote on your pond project.",
  primaryButtonText = "Call (801) 590-8516",
  primaryButtonHref = "tel:(801) 590-8516",
  secondaryButtonText = "Send Message",
  secondaryButtonLink = "/contact",
  className = "contact-cta",
  cityName = null
}) => {
  // Customize title if city name is provided
  const finalTitle = cityName ? `Ready to Get Started in ${cityName}?` : title;
  const finalSubtitle = cityName ? `Contact us today for a free consultation and quote on your ${cityName} pond project.` : subtitle;

  return (
    <section 
      className={className}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <h2>{finalTitle}</h2>
        <p>{finalSubtitle}</p>
        <div className="cta-buttons">
          <a href={primaryButtonHref} className="btn btn-primary">{primaryButtonText}</a>
          <Link to={secondaryButtonLink} className="btn btn-secondary">{secondaryButtonText}</Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
