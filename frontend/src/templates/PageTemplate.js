// Page Template for Utah Water Gardens
// Use this template when creating new pages to ensure consistency

import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import CTA from '../components/CTA.js';
import './PageTemplate.css';

const PageTemplate = ({ 
  title,
  subtitle,
  backgroundImage,
  backgroundImageAlt,
  children,
  ctaTitle,
  ctaSubtitle,
  ctaCityName,
  ctaSecondaryButtonText = "Send Message"
}) => {
  return (
    <div className="page-template">
      {/* Page Hero Section */}
      <PageHero 
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        backgroundImageAlt={backgroundImageAlt}
      />

      {/* Main Content */}
      <div className="container">
        {children}
      </div>

      {/* CTA Section - Always uses the pond image */}
      <CTA 
        title={ctaTitle}
        subtitle={ctaSubtitle}
        cityName={ctaCityName}
        secondaryButtonText={ctaSecondaryButtonText}
      />
    </div>
  );
};

export default PageTemplate;

// Example usage:
/*
import PageTemplate from '../templates/PageTemplate.js';

const MyNewPage = () => {
  return (
    <PageTemplate
      title="My New Page"
      subtitle="Description of my new page"
      backgroundImage="/images/my-hero-image.jpg"
      backgroundImageAlt="Description of hero image"
      ctaTitle="Ready to Get Started?"
      ctaSubtitle="Contact us today for a consultation"
      ctaCityName="Salt Lake City" // Optional - will customize title if provided
      ctaSecondaryButtonText="Get Quote" // Optional
    >
      <section className="my-content">
        <h2>My Content Section</h2>
        <p>Your page content goes here...</p>
      </section>
    </PageTemplate>
  );
};
*/
