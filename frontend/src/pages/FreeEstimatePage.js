import React, { useState } from 'react';
import './FreeEstimatePage.css';

const FreeEstimatePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    propertySize: '',
    projectSize: '',
    timeline: '',
    message: '',
    preferredContact: 'phone'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Show modal after brief delay
    setTimeout(() => {
      setShowModal(true);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="free-estimate-page">
      <div className="estimate-hero">
        <div 
          className="hero-background"
          style={{
            backgroundImage: `url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Get Your Free Estimate</h1>
          <p>Transform your property with a custom water garden designed just for you</p>
        </div>
      </div>

      {/* Wavy Divider - Attached to Hero with Blue Gradient */}
      <div className="hero-wave-attached">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className="wave-layer-1" d="M0,0L50,20C100,40,200,80,300,80C400,80,500,40,600,20C700,0,800,0,900,20C1000,40,1100,80,1150,100L1200,120V0Z" fill="#ffffff" opacity="0.1"></path>
          <path className="wave-layer-2" d="M0,0L50,15C100,30,200,60,300,60C400,60,500,30,600,15C700,0,800,0,900,15C1000,30,1100,60,1150,75L1200,90V0Z" fill="#ffffff" opacity="0.2"></path>
          <path className="wave-layer-3" d="M0,0L50,10C100,20,200,40,300,40C400,40,500,20,600,10C700,0,800,0,900,10C1000,20,1100,40,1150,50L1200,60V0Z" fill="#ffffff" opacity="0.3"></path>
        </svg>
      </div>

      <div className="estimate-content first-section-gradient">
        <div className="container">
          <div className="content-grid">
            <div className="form-section">
              <div className="form-header">
                <h2>Request Your Free Estimate</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours with a detailed estimate for your water garden project.</p>
              </div>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <h3>Thank you for your request!</h3>
                  <p>Your email client should have opened with a pre-filled message. Please send the email to complete your estimate request.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <h3>Something went wrong</h3>
                  <p>Please try again or call us directly at (801) 590-8516.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="estimate-form">
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
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferredContact">Preferred Contact Method</label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                    >
                      <option value="phone">Phone Call</option>
                      <option value="email">Email</option>
                      <option value="text">Text Message</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="new-pond">New Pond Construction</option>
                      <option value="pond-renovation">Pond Renovation</option>
                      <option value="pond-maintenance">Pond Maintenance</option>
                      <option value="water-feature">Water Feature</option>
                      <option value="landscaping">Landscaping Integration</option>
                      <option value="consultation">Consultation Only</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="propertySize">Property Size</label>
                    <select
                      id="propertySize"
                      name="propertySize"
                      value={formData.propertySize}
                      onChange={handleChange}
                    >
                      <option value="">Select Property Size</option>
                      <option value="small">Small (Under 1/4 acre)</option>
                      <option value="medium">Medium (1/4 - 1 acre)</option>
                      <option value="large">Large (1+ acres)</option>
                      <option value="commercial">Commercial Property</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectSize">Project Size</label>
                    <select
                      id="projectSize"
                      name="projectSize"
                      value={formData.projectSize}
                      onChange={handleChange}
                    >
                      <option value="">Select Project Size</option>
                      <option value="small">Small Water Feature</option>
                      <option value="medium">Medium Pond</option>
                      <option value="large">Large Pond</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Project Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select Timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="3-months">Within 3 Months</option>
                      <option value="6-months">Within 6 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details & Special Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Please describe your vision, any specific requirements, site conditions, or questions you have..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Free Estimate Request'}
                </button>
              </form>
            </div>

            <div className="info-section gradient-wipe-up">
              <div className="info-card">
                <h3>Why Choose Utah Water Gardens?</h3>
                <ul>
                  <li><span className="checkmark">✓</span> 11+ years of experience in water garden design</li>
                  <li><span className="checkmark">✓</span> Utah's largest selection of aquatic plants</li>
                  <li><span className="checkmark">✓</span> Complete design, construction, and maintenance services</li>
                  <li><span className="checkmark">✓</span> Licensed and insured professionals</li>
                  <li><span className="checkmark">✓</span> 100% satisfaction guarantee</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>What to Expect</h3>
                <div className="process-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Initial Consultation</h4>
                      <p>We'll discuss your vision and assess your property</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Custom Design</h4>
                      <p>Detailed plans tailored to your space and vision</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Professional Installation</h4>
                      <p>Expert construction with quality materials</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Ongoing Support</h4>
                      <p>Maintenance services to keep your pond thriving</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <strong>Phone:</strong>
                    <a href="tel:(801) 590-8516">(801) 590-8516</a>
                  </div>
                  <div className="contact-item">
                    <strong>Email:</strong>
                    <a href="mailto:contact@utahwatergardens.com">contact@utahwatergardens.com</a>
                  </div>
                  <div className="contact-item">
                    <strong>Business Hours:</strong>
                    <span>Mon-Sat: 10:00AM-6PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Form Under Maintenance</h3>
              <button 
                className="modal-close" 
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Sorry, our estimate form is currently under maintenance. Please give us a call instead!</p>
              <div className="modal-phone">
                <a href="tel:+18015908516" className="btn" data-variant="primary">
                  Call (801) 590-8516
                </a>
              </div>
              <p className="modal-hours">Monday - Friday, 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreeEstimatePage;
