import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section 
      className="cta" 
      aria-labelledby="cta-h"
      style={{
        backgroundImage: `url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`
      }}
    >
      <div className="container center">
        <h2 id="cta-h">Ready to get started?</h2>
        <p>Call or message us for a free consultation.</p>
        <div className="btn-row">
          <a href="tel:(801) 590-8516" className="btn" data-variant="primary">Call (801) 590-8516</a>
          <Link to="/contact" className="btn" data-variant="outline">Send Message</Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;