import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './SEO';
import PageHero from './PageHero';
import { generateSEOData } from '../utils/seoUtils';

// Generic page template for consistent structure
const PageTemplate = ({ 
  pageType, 
  pageData, 
  heroData, 
  children, 
  className = '' 
}) => {
  const seoData = generateSEOData(pageType, pageData);

  return (
    <HelmetProvider>
      <div className={`page ${className}`}>
        <SEO {...seoData} />
        
        {heroData && (
          <PageHero
            title={heroData.title}
            subtitle={heroData.subtitle}
            backgroundImage={heroData.backgroundImage}
            backgroundImageAlt={heroData.backgroundImageAlt}
          />
        )}
        
        <div className="container">
          {children}
        </div>
      </div>
    </HelmetProvider>
  );
};

// Service area page factory
export const createServiceAreaPage = (areaData) => {
  const ServiceAreaPage = () => (
    <PageTemplate
      pageType="service-area"
      pageData={areaData}
      heroData={{
        title: `Pond Services in ${areaData.areaName}`,
        subtitle: `Professional pond maintenance, cleaning, and construction services in ${areaData.areaName}, Utah`,
        backgroundImage: areaData.heroImage || '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
        backgroundImageAlt: `Pond services in ${areaData.areaName}, Utah`
      }}
      className="service-area-page"
    >
      <section className="service-area-content">
        <h2>Why Choose Utah Water Gardens in {areaData.areaName}?</h2>
        <p>
          We provide comprehensive pond services to {areaData.areaName} and surrounding areas. 
          Our experienced team offers everything from pond design and construction to ongoing 
          maintenance and repair services.
        </p>
        
        <div className="services-grid">
          <div className="service-card">
            <h3>Pond Maintenance</h3>
            <p>Regular maintenance keeps your pond healthy and beautiful year-round.</p>
          </div>
          <div className="service-card">
            <h3>Pond Cleaning</h3>
            <p>Professional cleaning services to remove debris and maintain water quality.</p>
          </div>
          <div className="service-card">
            <h3>Pond Construction</h3>
            <p>Custom pond design and construction tailored to your property.</p>
          </div>
          <div className="service-card">
            <h3>Equipment Repair</h3>
            <p>Expert repair services for pumps, filters, and other pond equipment.</p>
          </div>
        </div>
        
        <div className="cta-section">
          <h3>Ready to Get Started?</h3>
          <p>Contact us today for a free consultation and estimate.</p>
          <a href="tel:(801) 590-8516" className="btn btn-primary">
            Call (801) 590-8516
          </a>
        </div>
      </section>
    </PageTemplate>
  );
  
  return ServiceAreaPage;
};

// Product page factory
export const createProductPage = (productData) => {
  const ProductPage = () => (
    <PageTemplate
      pageType="product"
      pageData={productData}
      heroData={{
        title: productData.name,
        subtitle: productData.description,
        backgroundImage: productData.heroImage || '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
        backgroundImageAlt: productData.name
      }}
      className="product-page"
    >
      <section className="product-content">
        <div className="product-details">
          <h2>About {productData.name}</h2>
          <p>{productData.longDescription}</p>
          
          {productData.features && (
            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                {productData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="product-cta">
            <a href="tel:(801) 590-8516" className="btn btn-primary">
              Call for Availability
            </a>
            <a href="/contact" className="btn btn-secondary">
              Visit Our Store
            </a>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
  
  return ProductPage;
};

// Service page factory
export const createServicePage = (serviceData) => {
  const ServicePage = () => (
    <PageTemplate
      pageType="service"
      pageData={serviceData}
      heroData={{
        title: serviceData.name,
        subtitle: serviceData.description,
        backgroundImage: serviceData.heroImage || '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
        backgroundImageAlt: serviceData.name
      }}
      className="service-page"
    >
      <section className="service-content">
        <div className="service-details">
          <h2>Our {serviceData.name} Services</h2>
          <p>{serviceData.longDescription}</p>
          
          {serviceData.process && (
            <div className="service-process">
              <h3>Our Process</h3>
              <ol>
                {serviceData.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
          
          {serviceData.benefits && (
            <div className="service-benefits">
              <h3>Benefits</h3>
              <ul>
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="service-cta">
            <a href="tel:(801) 590-8516" className="btn btn-primary">
              Get Free Estimate
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
  
  return ServicePage;
};

// Resource page factory
export const createResourcePage = (resourceData) => {
  const ResourcePage = () => (
    <PageTemplate
      pageType="resource"
      pageData={resourceData}
      heroData={{
        title: resourceData.title,
        subtitle: resourceData.description,
        backgroundImage: resourceData.heroImage || '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
        backgroundImageAlt: resourceData.title
      }}
      className="resource-page"
    >
      <section className="resource-content">
        <div className="resource-details">
          <h2>{resourceData.title}</h2>
          <p>{resourceData.longDescription}</p>
          
          {resourceData.content && (
            <div className="resource-content-body">
              {resourceData.content}
            </div>
          )}
          
          {resourceData.tips && (
            <div className="resource-tips">
              <h3>Key Tips</h3>
              <ul>
                {resourceData.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="resource-cta">
            <p>Need personalized help with your pond?</p>
            <a href="tel:(801) 590-8516" className="btn btn-primary">
              Call Our Experts
            </a>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
  
  return ResourcePage;
};

export default PageTemplate;
