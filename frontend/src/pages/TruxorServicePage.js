import React from 'react';
import SEO from '../components/SEO';

import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import './TruxorServicePage.css';

const TruxorServicePage = () => {
  const attachments = [
    {
      name: 'Rip Attachment',
      description: 'Powerful ripping tool for breaking up compacted sediment and hard soil layers',
      features: [
        'Breaks through tough sediment layers',
        'Loosens compacted pond bottoms',
        'Prepares areas for dredging',
        'Effective on clay and hard-packed soil'
      ],
      useCase: 'Ideal for initial pond bottom preparation and breaking up hardened sediment'
    },
    {
      name: 'Cut Attachment',
      description: 'Precision cutting tool for removing overgrown vegetation and aquatic plants',
      features: [
        'Cuts through thick vegetation',
        'Removes invasive plant species',
        'Maintains clear water channels',
        'Precise cutting control'
      ],
      useCase: 'Perfect for vegetation management and maintaining clear pond areas'
    },
    {
      name: 'Scoop Attachment',
      description: 'Heavy-duty scooping tool for efficient material removal and dredging operations',
      features: [
        'High-capacity material removal',
        'Efficient dredging operations',
        'Handles various sediment types',
        'Quick loading and unloading'
      ],
      useCase: 'Essential for large-scale dredging and sediment removal projects'
    },
    {
      name: 'Pull Attachment',
      description: 'Versatile pulling tool for extracting debris, logs, and large objects from water',
      features: [
        'Removes large debris and logs',
        'Extracts sunken objects',
        'Handles heavy materials',
        'Versatile pulling applications'
      ],
      useCase: 'Excellent for debris removal and extracting large objects from ponds'
    }
  ];

  const services = [
    {
      title: 'Pond Dredging',
      description: 'Complete pond bottom cleaning and sediment removal using our Truxor T50',
      benefits: [
        'Restores pond depth and capacity',
        'Removes accumulated sediment',
        'Improves water quality',
        'Prevents future maintenance issues'
      ]
    },
    {
      title: 'Vegetation Management',
      description: 'Professional aquatic plant and vegetation control services',
      benefits: [
        'Removes invasive species',
        'Maintains healthy plant balance',
        'Improves water circulation',
        'Enhances pond aesthetics'
      ]
    },
    {
      title: 'Debris Removal',
      description: 'Comprehensive debris and object removal from ponds and water features',
      benefits: [
        'Removes fallen trees and branches',
        'Extracts sunken objects',
        'Clears water channels',
        'Restores pond functionality'
      ]
    },
    {
      title: 'Emergency Cleanup',
      description: 'Rapid response for storm damage and emergency pond restoration',
      benefits: [
        'Quick response time',
        'Emergency debris removal',
        'Restores pond safety',
        'Minimizes further damage'
      ]
    }
  ];

  const advantages = [
    {
      icon: '🌊',
      title: 'Amphibious Design',
      description: 'Operates on both land and water, providing unmatched versatility for pond work'
    },
    {
      icon: '⚡',
      title: 'Powerful Performance',
      description: 'Heavy-duty engine delivers exceptional power for demanding pond maintenance tasks'
    },
    {
      icon: '🎯',
      title: 'Precision Control',
      description: 'Advanced control systems allow for precise, efficient operations in sensitive areas'
    },
    {
      icon: '🛡️',
      title: 'Environmentally Safe',
      description: 'Low-impact operations that protect surrounding vegetation and wildlife'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Reduces labor costs and project time compared to traditional methods'
    },
    {
      icon: '🔧',
      title: 'Multiple Attachments',
      description: 'Four specialized attachments handle any pond maintenance challenge'
    }
  ];
  return (
    <>
      <SEO 
        title="Truxor Service | Professional Lake Maintenance Equipment | Utah Water Gardens"
        description="Professional Truxor service for lake and pond maintenance. Expert aquatic vegetation management and lake cleaning."
        keywords="truxor service, lake maintenance equipment, aquatic vegetation management, professional lake cleaning"
        canonical="https://utahwatergardens.com/pond-services/truxor"
        ogTitle="Truxor Service"
        ogDescription="Professional lake maintenance with Truxor equipment"
        ogImage="/images/truxor-service.jpg"
        twitterCard="summary_large_image"
      />
      <div className="ruxorservicepage-page">
      <PageHero 
        title="Amphibious Excavator Service"
        subtitle="Professional pond maintenance with our powerful amphibious equipment and specialized attachments"
        backgroundImage="/images/pondCleanings.png"
        backgroundImageAlt="Amphibious excavator equipment in action"
      />

      <div className="container">
        {/* Equipment Overview */}
        <section className="equipment-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Our Amphibious Excavator: Your Pond Maintenance Solution</h2>
              <p>
                Our amphibious excavator represents the cutting edge of pond maintenance technology. 
                This versatile machine operates seamlessly on both land and water, making it the perfect tool 
                for comprehensive pond care and restoration projects.
              </p>
              <p>
                With four specialized attachments designed for different maintenance tasks, our amphibious excavator 
                can handle everything from routine vegetation management to major dredging operations. 
                Its amphibious design means we can work efficiently without draining your pond, 
                protecting your aquatic ecosystem while delivering superior results.
              </p>
              <div className="equipment-specs">
                <h3>Equipment Specifications</h3>
                <ul>
                  <li><strong>Engine:</strong> Heavy-duty diesel engine for maximum power</li>
                  <li><strong>Weight:</strong> Optimized for stability and performance</li>
                  <li><strong>Operating Depth:</strong> Works in shallow to medium-depth ponds</li>
                  <li><strong>Attachments:</strong> 4 specialized tools for complete pond care</li>
                  <li><strong>Mobility:</strong> Amphibious design for land and water operation</li>
                </ul>
              </div>
            </div>
            <div className="overview-image">
              <img src="/images/truxor-equipment-1.jpg" alt="Amphibious excavator equipment in action" />
            </div>
          </div>
        </section>

        {/* Attachments Section */}
        <section className="attachments-section">
          <h2>Specialized Attachments</h2>
          <p className="section-subtitle">
            Four powerful attachments designed for specific pond maintenance tasks
          </p>
          <div className="equipment-showcase">
            <img src="/images/truxor-equipment-2.jpg" alt="Amphibious excavator with specialized attachments" />
          </div>
          <div className="attachments-grid">
            {attachments.map((attachment, index) => (
              <div key={index} className="attachment-card">
                <div className="attachment-header">
                  <h3>{attachment.name}</h3>
                  <p className="attachment-description">{attachment.description}</p>
                </div>
                <div className="attachment-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {attachment.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="attachment-use-case">
                  <h4>Best For:</h4>
                  <p>{attachment.useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2>Our Amphibious Excavator Services</h2>
          <p className="section-subtitle">
            Comprehensive pond maintenance services using our advanced amphibious equipment
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages Section */}
        <section className="advantages-section">
          <h2>Why Choose Our Amphibious Excavator Service?</h2>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-item">
                <div className="advantage-icon">{advantage.icon}</div>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section gradient-wipe-up">
          <h2>Our Service Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initial Assessment</h3>
                <p>We evaluate your pond's condition and determine the best approach for your specific needs.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Equipment Selection</h3>
                <p>Choose the appropriate amphibious excavator attachments based on your pond's requirements.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Professional Service</h3>
                <p>Our experienced team performs the maintenance work with precision and care.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Quality Assurance</h3>
                <p>We ensure all work meets our high standards and your satisfaction.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

        {/* Contact CTA */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h2>Ready to Transform Your Pond?</h2>
          <p>
            Experience the power and efficiency of our amphibious excavator equipment. 
            Contact us today for a consultation and see how we can restore your pond to its full potential.
          </p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">
              Call (801) 590-8516
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Get Free Quote
            </Link>
          </div>
        </section>
          
      {/* Service Images */}
      <section className="service-images-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-images-grid">
            <div className="service-image-card">
              <img src="/images/IMG_2770.jpg" alt="Professional pond services and maintenance" />
              <h3>Expert Service</h3>
              <p>Professional pond care and maintenance</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2775.jpg" alt="Quality pond equipment and supplies" />
              <h3>Quality Equipment</h3>
              <p>Only the best pond equipment and supplies</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2779.jpg" alt="Custom pond design and installation" />
              <h3>Custom Design</h3>
              <p>Custom pond design and installation services</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2780.jpg" alt="Ongoing pond maintenance and support" />
              <h3>Ongoing Support</h3>
              <p>Continuous maintenance and support services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <div style={{ display: 'none' }}>
        <Link to="/contact">utah water gardens</Link>
        <Link to="/plants-fish">utah water gardens</Link>
        <Link to="/pondsupplies">utah water gardens</Link>
        <Link to="/aquatic-plants">utah water gardens</Link>
        <Link to="/fish-koi">utah water gardens</Link>
        <Link to="/">utah water gardens</Link>
      </div>
      </div>
    </>
  );
};

export default TruxorServicePage;
