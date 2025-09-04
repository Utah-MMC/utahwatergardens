import React from 'react';

function Results() {
  return (
    <section className="results" id="results">
      <div className="container results-flex-modern">
        <div className="results-card">
          <h2>Proven Results</h2>
          <div className="results-stats-grid">
            <div className="results-stat">
              <div className="results-icon">🏆</div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="results-stat">
              <div className="results-icon">🌿</div>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Ponds Maintained</div>
            </div>
            <div className="results-stat">
              <div className="results-icon">⭐</div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
          <p className="results-note">*Based on our track record of excellence in Utah</p>
        </div>
        <div className="testimonial-card-modern">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-content">
            <div className="testimonial-img-wrap">
              <img src="/images/client-testimonial.jpg" alt="Satisfied client" className="testimonial-img-modern" />
            </div>
            <blockquote>
              <span className="testimonial-quote-mark">"</span>
              Utah Water Gardens transformed our neglected pond into a beautiful centerpiece. Their cleaning service was thorough and professional. The water is crystal clear and our fish are thriving!
            </blockquote>
            <cite>- Sarah M., Salt Lake City</cite>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results; 