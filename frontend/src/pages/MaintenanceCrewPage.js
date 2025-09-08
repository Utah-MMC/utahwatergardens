import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero.js';
import './TeamDetailPage.css';

const MaintenanceCrewPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const maintenanceServices = [
    {
      title: 'Routine Maintenance',
      description: 'Regular care to keep your pond healthy and beautiful',
      features: ['Water quality testing', 'Debris removal', 'Plant trimming', 'Equipment checks', 'Filter cleaning']
    },
    {
      title: 'Seasonal Care',
      description: 'Specialized care for each season',
      features: ['Spring startup', 'Summer maintenance', 'Fall cleanup', 'Winter preparation']
    },
    {
      title: 'Emergency Repairs',
      description: 'Quick response for urgent pond issues',
      features: ['Leak detection and repair', 'Pump failures', 'Filter problems', 'Water quality issues']
    }
  ];

  const maintenanceSchedule = [
    { period: 'Weekly', tasks: ['Check water level', 'Remove debris', 'Test water quality'] },
    { period: 'Monthly', tasks: ['Clean filters', 'Trim plants', 'Check equipment'] },
    { period: 'Seasonally', tasks: ['Deep cleaning', 'Plant care', 'System maintenance'] },
    { period: 'Annually', tasks: ['Complete inspection', 'Equipment replacement', 'System upgrades'] }
  ];

  return (
    <>
      <SEO 
        title="Maintenance Crew - Care Specialists | Utah Water Gardens"
        description="Meet our maintenance crew. Professional pond maintenance services to keep your water features healthy and beautiful year-round in Utah."
        keywords="maintenance crew, pond maintenance, water feature care, pond cleaning, seasonal care, utah pond maintenance"
        canonical="https://utahwatergardens.com/team/maintenance-crew"
      />
      <div className={`team-detail-page ${isVisible ? 'visible' : ''}`}>
        <PageHero 
          title="Maintenance Crew"
          subtitle="Care Specialists ensuring your pond stays healthy and beautiful year-round"
          backgroundImage="/images/IMG_2779.jpg"
          backgroundImageAlt="Professional pond maintenance and care services"
          showCTA={true}
          ctaButtons={[
            { text: "Schedule Service", href: "/pond-services/maintenance", type: "primary" },
            { text: "Call (801) 590-8516", href: "tel:(801) 590-8516", type: "secondary" }
          ]}
        />

        {/* Main Content */}
        <section className="team-main-content first-section-gradient">
          <div className="container">
            <div className="team-intro">
              <h2>Our Maintenance Crew</h2>
              <p className="intro-text">
                Our maintenance team ensures your pond stays healthy and beautiful year-round with professional care. 
                We understand the unique challenges of maintaining water features in Utah's climate and provide 
                comprehensive services to keep your pond in perfect condition.
              </p>
            </div>

            {/* Maintenance Services */}
            <div className="maintenance-services">
              <h2>Our Maintenance Services</h2>
              <div className="services-grid">
                {maintenanceServices.map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-header">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <div className="service-features">
                      <h4>What's Included:</h4>
                      <ul>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance Schedule */}
            <div className="maintenance-schedule">
              <h2>Maintenance Schedule</h2>
              <div className="schedule-grid">
                {maintenanceSchedule.map((schedule, index) => (
                  <div key={index} className="schedule-item">
                    <div className="schedule-period">{schedule.period}</div>
                    <div className="schedule-tasks">
                      {schedule.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="task-item">
                          <span className="task-icon">Task</span>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Our Maintenance */}
            <div className="why-choose-section">
              <h2>Why Choose Our Maintenance Services?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">Experience</div>
                  <h4>Experienced Team</h4>
                  <p>Years of experience with Utah's unique climate</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">Reliable</div>
                  <h4>Reliable Service</h4>
                  <p>Consistent, dependable maintenance schedules</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">Equipment</div>
                  <h4>Professional Equipment</h4>
                  <p>State-of-the-art tools and equipment</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">Emergency</div>
                  <h4>Emergency Response</h4>
                  <p>Quick response for urgent maintenance needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="team-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <h2>Keep Your Pond Beautiful Year-Round</h2>
            <p>Let our maintenance crew take care of your water feature so you can enjoy it worry-free.</p>
            <div className="cta-buttons">
              <Link to="/pond-services/maintenance" className="btn btn-primary">Schedule Maintenance</Link>
              <a href="tel:(801) 590-8516" className="btn btn-secondary">Call (801) 590-8516</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MaintenanceCrewPage;
