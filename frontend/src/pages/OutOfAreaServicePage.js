import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './OutOfAreaServicePage.css';

const OutOfAreaServicePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    distance: '',
    projectType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '50+', label: 'Miles from SLC', icon: 'Distance' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '100+', label: 'Extended Service Projects', icon: 'Projects' },
    { number: '100%', label: 'Custom Solutions', icon: 'Quality' }
  ];

  const projectTypes = [
    'Residential Pond',
    'Commercial Water Feature',
    'Koi Pond',
    'Waterfall',
    'Fountain',
    'Stream System',
    'Pond Renovation',
    'Maintenance Service',
    'Other'
  ];

  const timelineOptions = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Prefer not to say'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.state && formData.zipCode;
      case 3:
        return formData.projectType && formData.timeline && formData.projectDescription;
      default:
        return true;
    }
  };

  // Note: calculateDistance function removed as it's not currently used
  // Distance calculation is handled by the ServiceAreaChecker component

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/extended-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          distance: '',
          projectType: '',
          projectDescription: '',
          timeline: '',
          budget: '',
          additionalInfo: ''
        });
        // Reset to first step
        setCurrentStep(1);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Extended Service Area - Out of Area Pond Services | Utah Water Gardens"
        description="Request pond and water feature services for locations 50+ miles from Salt Lake City. Special extended service area form for customers outside our primary coverage zone. Custom quotes available."
        keywords="out of area pond services, extended service area, remote pond installation, utah water gardens extended service, custom pond quotes, distance pond services, specialized pond projects"
        canonical="https://utahwatergardens.com/out-of-area-service"
      />
      <div className={`out-of-area-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <PageHero
          title="Extended Service Area"
          subtitle="Request pond and water feature services for locations outside our primary service area. We evaluate each extended service request individually."
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          stats={stats}
        />

        {/* Main Content */}
        <div className="main-content-gradient">
          <section className="out-of-area-content">
            <div className="container">
              <div className="page-intro">
                <h2>Extended Service Area Requests</h2>
                <p>
                  While we primarily serve the greater Salt Lake City area, we occasionally take on 
                  special projects outside our standard 50-mile radius. Each extended service request 
                  is evaluated individually based on project scope, timeline, and logistics.
                </p>
                
                <div className="service-info-grid">
                  <div className="info-card">
                    <div className="info-icon">📍</div>
                    <h3>Distance Requirements</h3>
                    <p>Projects must be 50+ miles from Salt Lake City to qualify for extended service evaluation.</p>
                  </div>
                  <div className="info-card">
                    <div className="info-icon">💰</div>
                    <h3>Custom Pricing</h3>
                    <p>Extended service projects include additional travel and logistics costs in the quote.</p>
                  </div>
                  <div className="info-card">
                    <div className="info-icon">⏰</div>
                    <h3>Timeline Considerations</h3>
                    <p>Extended service projects may require longer timelines due to travel and coordination.</p>
                  </div>
                  <div className="info-card">
                    <div className="info-icon">🔧</div>
                    <h3>Project Scope</h3>
                    <p>We prioritize larger, more complex projects for extended service area requests.</p>
                  </div>
                </div>
              </div>

              {/* Service Request Form */}
              <div className="service-request-form">
                <div className="form-header">
                  <h2>Extended Service Request</h2>
                  <p>Let's get started with your project details</p>
                  
                  {/* Progress Steps */}
                  <div className="progress-steps">
                    <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                      <div className="step-number">1</div>
                      <div className="step-label">Contact Info</div>
                    </div>
                    <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                      <div className="step-number">2</div>
                      <div className="step-label">Location</div>
                    </div>
                    <div className={`step ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
                      <div className="step-number">3</div>
                      <div className="step-label">Project Details</div>
                    </div>
                    <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
                      <div className="step-number">4</div>
                      <div className="step-label">Review & Submit</div>
                    </div>
                  </div>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h3>Request Submitted Successfully!</h3>
                    <p>Thank you for your extended service request. We'll review your project details and contact you within 2-3 business days to discuss availability and next steps.</p>
                    <div className="success-actions">
                      <Link to="/" className="btn btn-primary">Return Home</Link>
                      <a href="tel:(801) 590-8516" className="btn btn-outline">Call Us Now</a>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    <div className="error-icon">❌</div>
                    <h3>Submission Error</h3>
                    <p>There was an error submitting your request. Please try again or contact us directly at (801) 590-8516.</p>
                    <button onClick={() => setSubmitStatus(null)} className="btn btn-primary">Try Again</button>
                  </div>
                )}

                {!submitStatus && (
                  <form onSubmit={handleSubmit} className="extended-service-form">
                    {/* Step 1: Contact Information */}
                    {currentStep === 1 && (
                      <div className="form-step">
                        <div className="step-header">
                          <h3>📞 Contact Information</h3>
                          <p>Let's start with your contact details</p>
                        </div>
                        <div className="form-grid">
                          <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="(555) 123-4567"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="distance">Distance from Salt Lake City (miles) *</label>
                            <input
                              type="number"
                              id="distance"
                              name="distance"
                              value={formData.distance}
                              onChange={handleInputChange}
                              min="50"
                              placeholder="50+"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Project Location */}
                    {currentStep === 2 && (
                      <div className="form-step">
                        <div className="step-header">
                          <h3>📍 Project Location</h3>
                          <p>Where will your project be located?</p>
                        </div>
                        <div className="form-grid">
                          <div className="form-group full-width">
                            <label htmlFor="address">Street Address *</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              placeholder="123 Main Street"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="city">City *</label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              placeholder="City name"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="state">State *</label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              placeholder="UT"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="zipCode">ZIP Code *</label>
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              placeholder="84121"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Project Details */}
                    {currentStep === 3 && (
                      <div className="form-step">
                        <div className="step-header">
                          <h3>🏗️ Project Details</h3>
                          <p>Tell us about your dream project</p>
                        </div>
                        <div className="form-grid">
                          <div className="form-group">
                            <label htmlFor="projectType">Project Type *</label>
                            <select
                              id="projectType"
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Select Project Type</option>
                              {projectTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="timeline">Desired Timeline *</label>
                            <select
                              id="timeline"
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Select Timeline</option>
                              {timelineOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="budget">Budget Range</label>
                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                            >
                              <option value="">Select Budget Range</option>
                              {budgetRanges.map((range, index) => (
                                <option key={index} value={range}>{range}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group full-width">
                            <label htmlFor="projectDescription">Project Description *</label>
                            <textarea
                              id="projectDescription"
                              name="projectDescription"
                              value={formData.projectDescription}
                              onChange={handleInputChange}
                              rows="4"
                              placeholder="Please provide detailed information about your project, including size, features, and any specific requirements..."
                              required
                            />
                          </div>
                          <div className="form-group full-width">
                            <label htmlFor="additionalInfo">Additional Information</label>
                            <textarea
                              id="additionalInfo"
                              name="additionalInfo"
                              value={formData.additionalInfo}
                              onChange={handleInputChange}
                              rows="3"
                              placeholder="Any additional information that might help us evaluate your project request..."
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Review & Submit */}
                    {currentStep === 4 && (
                      <div className="form-step">
                        <div className="step-header">
                          <h3>📋 Review & Submit</h3>
                          <p>Please review your information before submitting</p>
                        </div>
                        <div className="review-section">
                          <div className="review-card">
                            <h4>Contact Information</h4>
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>
                            <p><strong>Distance:</strong> {formData.distance} miles from Salt Lake City</p>
                          </div>
                          <div className="review-card">
                            <h4>Project Location</h4>
                            <p><strong>Address:</strong> {formData.address}</p>
                            <p><strong>City:</strong> {formData.city}, {formData.state} {formData.zipCode}</p>
                          </div>
                          <div className="review-card">
                            <h4>Project Details</h4>
                            <p><strong>Type:</strong> {formData.projectType}</p>
                            <p><strong>Timeline:</strong> {formData.timeline}</p>
                            <p><strong>Budget:</strong> {formData.budget || 'Not specified'}</p>
                            <p><strong>Description:</strong> {formData.projectDescription}</p>
                            {formData.additionalInfo && <p><strong>Additional Info:</strong> {formData.additionalInfo}</p>}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="form-navigation">
                      {currentStep > 1 && (
                        <button type="button" onClick={prevStep} className="btn btn-outline">
                          ← Previous
                        </button>
                      )}
                      {currentStep < 4 ? (
                        <button 
                          type="button" 
                          onClick={nextStep} 
                          className="btn btn-primary"
                          disabled={!isStepValid(currentStep)}
                        >
                          Next →
                        </button>
                      ) : (
                        <button 
                          type="submit" 
                          className="btn btn-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Request'}
                        </button>
                      )}
                    </div>
                    
                    <p className="form-note">
                      * Required fields. We'll review your request and contact you within 2-3 business days.
                    </p>
                  </form>
                )}
              </div>

              {/* Alternative Contact Methods */}
              <div className="alternative-contact">
                <h2>Alternative Contact Methods</h2>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">📞</div>
                    <h3>Phone</h3>
                    <p>Call us directly to discuss your extended service needs</p>
                    <a href="tel:(801) 590-8516" className="contact-link">(801) 590-8516</a>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">✉️</div>
                    <h3>Email</h3>
                    <p>Send us detailed information about your project</p>
                    <a href="mailto:contact@utahwatergardens.com" className="contact-link">contact@utahwatergardens.com</a>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">🏪</div>
                    <h3>Visit Our Store</h3>
                    <p>Come see us in person to discuss your project</p>
                    <p className="contact-address">5911 S 1300 E<br />Salt Lake City, UT 84121</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

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
            <h2>Ready to Request Extended Service?</h2>
            <p>Fill out our extended service request form or contact us directly to discuss your project.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OutOfAreaServicePage;
