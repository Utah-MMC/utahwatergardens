// Service Area Page Generator
// This file contains the template and data for generating all service area pages

export const serviceAreaData = {
  // Salt Lake County (17 cities)
  'riverton': {
    name: 'Riverton',
    county: 'Salt Lake County',
    nearbyAreas: ['west-jordan', 'south-jordan', 'herriman', 'bluffdale', 'draper', 'sandy', 'midvale', 'taylorsville', 'millcreek', 'holladay']
  },
  'herriman': {
    name: 'Herriman',
    county: 'Salt Lake County',
    nearbyAreas: ['west-jordan', 'south-jordan', 'riverton', 'bluffdale', 'draper', 'sandy', 'midvale', 'taylorsville', 'millcreek', 'holladay']
  },
  'bluffdale': {
    name: 'Bluffdale',
    county: 'Salt Lake County',
    nearbyAreas: ['west-jordan', 'south-jordan', 'riverton', 'herriman', 'draper', 'sandy', 'midvale', 'taylorsville', 'millcreek', 'holladay']
  },
  'draper': {
    name: 'Draper',
    county: 'Salt Lake County',
    nearbyAreas: ['sandy', 'south-jordan', 'riverton', 'herriman', 'bluffdale', 'midvale', 'taylorsville', 'millcreek', 'holladay', 'cottonwood-heights']
  },
  'midvale': {
    name: 'Midvale',
    county: 'Salt Lake County',
    nearbyAreas: ['sandy', 'murray', 'taylorsville', 'millcreek', 'holladay', 'cottonwood-heights', 'draper', 'south-jordan', 'riverton', 'herriman']
  },
  'taylorsville': {
    name: 'Taylorsville',
    county: 'Salt Lake County',
    nearbyAreas: ['west-valley-city', 'murray', 'midvale', 'millcreek', 'holladay', 'cottonwood-heights', 'west-jordan', 'kearns', 'magna']
  },
  'kearns': {
    name: 'Kearns',
    county: 'Salt Lake County',
    nearbyAreas: ['west-valley-city', 'taylorsville', 'magna', 'west-jordan', 'south-jordan', 'riverton', 'herriman', 'bluffdale']
  },
  'magna': {
    name: 'Magna',
    county: 'Salt Lake County',
    nearbyAreas: ['west-valley-city', 'kearns', 'taylorsville', 'west-jordan', 'south-jordan', 'riverton', 'herriman', 'bluffdale']
  },
  'millcreek': {
    name: 'Millcreek',
    county: 'Salt Lake County',
    nearbyAreas: ['salt-lake-city', 'murray', 'midvale', 'taylorsville', 'holladay', 'cottonwood-heights', 'sandy', 'draper']
  },
  'holladay': {
    name: 'Holladay',
    county: 'Salt Lake County',
    nearbyAreas: ['salt-lake-city', 'millcreek', 'cottonwood-heights', 'midvale', 'taylorsville', 'murray', 'sandy', 'draper']
  },
  'cottonwood-heights': {
    name: 'Cottonwood Heights',
    county: 'Salt Lake County',
    nearbyAreas: ['salt-lake-city', 'holladay', 'millcreek', 'midvale', 'taylorsville', 'murray', 'sandy', 'draper']
  },

  // Davis County (16 cities)
  'clearfield': {
    name: 'Clearfield',
    county: 'Davis County',
    nearbyAreas: ['layton', 'clinton', 'roy', 'south-ogden', 'washington-terrace', 'riverdale', 'pleasant-view', 'north-ogden', 'ogden', 'syracuse']
  },
  'bountiful': {
    name: 'Bountiful',
    county: 'Davis County',
    nearbyAreas: ['north-salt-lake', 'woods-cross', 'centerville', 'farmington', 'kaysville', 'layton', 'clearfield', 'clinton', 'roy']
  },
  'kaysville': {
    name: 'Kaysville',
    county: 'Davis County',
    nearbyAreas: ['farmington', 'centerville', 'bountiful', 'north-salt-lake', 'woods-cross', 'layton', 'clearfield', 'clinton', 'roy']
  },
  'farmington': {
    name: 'Farmington',
    county: 'Davis County',
    nearbyAreas: ['kaysville', 'centerville', 'bountiful', 'north-salt-lake', 'woods-cross', 'layton', 'clearfield', 'clinton', 'roy']
  },
  'centerville': {
    name: 'Centerville',
    county: 'Davis County',
    nearbyAreas: ['farmington', 'kaysville', 'bountiful', 'north-salt-lake', 'woods-cross', 'layton', 'clearfield', 'clinton', 'roy']
  },
  'north-salt-lake': {
    name: 'North Salt Lake',
    county: 'Davis County',
    nearbyAreas: ['bountiful', 'woods-cross', 'centerville', 'farmington', 'kaysville', 'layton', 'clearfield', 'clinton', 'roy']
  },
  'woods-cross': {
    name: 'Woods Cross',
    county: 'Davis County',
    nearbyAreas: ['north-salt-lake', 'bountiful', 'centerville', 'farmington', 'kaysville', 'layton', 'clearfield', 'clinton', 'roy']
  },
  'syracuse': {
    name: 'Syracuse',
    county: 'Davis County',
    nearbyAreas: ['layton', 'clearfield', 'clinton', 'roy', 'south-ogden', 'washington-terrace', 'riverdale', 'pleasant-view', 'north-ogden', 'ogden']
  },
  'clinton': {
    name: 'Clinton',
    county: 'Davis County',
    nearbyAreas: ['layton', 'clearfield', 'syracuse', 'roy', 'south-ogden', 'washington-terrace', 'riverdale', 'pleasant-view', 'north-ogden', 'ogden']
  },
  'roy': {
    name: 'Roy',
    county: 'Davis County',
    nearbyAreas: ['layton', 'clearfield', 'clinton', 'syracuse', 'south-ogden', 'washington-terrace', 'riverdale', 'pleasant-view', 'north-ogden', 'ogden']
  },
  'south-ogden': {
    name: 'South Ogden',
    county: 'Davis County',
    nearbyAreas: ['ogden', 'north-ogden', 'pleasant-view', 'washington-terrace', 'riverdale', 'roy', 'clinton', 'syracuse', 'clearfield', 'layton']
  },
  'washington-terrace': {
    name: 'Washington Terrace',
    county: 'Davis County',
    nearbyAreas: ['ogden', 'south-ogden', 'north-ogden', 'pleasant-view', 'riverdale', 'roy', 'clinton', 'syracuse', 'clearfield', 'layton']
  },
  'riverdale': {
    name: 'Riverdale',
    county: 'Davis County',
    nearbyAreas: ['ogden', 'south-ogden', 'north-ogden', 'pleasant-view', 'washington-terrace', 'roy', 'clinton', 'syracuse', 'clearfield', 'layton']
  },
  'pleasant-view': {
    name: 'Pleasant View',
    county: 'Davis County',
    nearbyAreas: ['ogden', 'north-ogden', 'south-ogden', 'washington-terrace', 'riverdale', 'roy', 'clinton', 'syracuse', 'clearfield', 'layton']
  },
  'north-ogden': {
    name: 'North Ogden',
    county: 'Davis County',
    nearbyAreas: ['ogden', 'south-ogden', 'pleasant-view', 'washington-terrace', 'riverdale', 'roy', 'clinton', 'syracuse', 'clearfield', 'layton']
  },

  // Utah County (20 cities)
  'lehi': {
    name: 'Lehi',
    county: 'Utah County',
    nearbyAreas: ['american-fork', 'pleasant-grove', 'lindon', 'orem', 'provo', 'spanish-fork', 'springville', 'mapleton', 'payson', 'salem']
  },
  'american-fork': {
    name: 'American Fork',
    county: 'Utah County',
    nearbyAreas: ['lehi', 'pleasant-grove', 'lindon', 'orem', 'provo', 'spanish-fork', 'springville', 'mapleton', 'payson', 'salem']
  },
  'pleasant-grove': {
    name: 'Pleasant Grove',
    county: 'Utah County',
    nearbyAreas: ['american-fork', 'lehi', 'lindon', 'orem', 'provo', 'spanish-fork', 'springville', 'mapleton', 'payson', 'salem']
  },
  'lindon': {
    name: 'Lindon',
    county: 'Utah County',
    nearbyAreas: ['pleasant-grove', 'american-fork', 'lehi', 'orem', 'provo', 'spanish-fork', 'springville', 'mapleton', 'payson', 'salem']
  },
  'spanish-fork': {
    name: 'Spanish Fork',
    county: 'Utah County',
    nearbyAreas: ['provo', 'orem', 'lindon', 'pleasant-grove', 'american-fork', 'lehi', 'springville', 'mapleton', 'payson', 'salem']
  },
  'springville': {
    name: 'Springville',
    county: 'Utah County',
    nearbyAreas: ['provo', 'spanish-fork', 'orem', 'lindon', 'pleasant-grove', 'american-fork', 'lehi', 'mapleton', 'payson', 'salem']
  },
  'mapleton': {
    name: 'Mapleton',
    county: 'Utah County',
    nearbyAreas: ['springville', 'provo', 'spanish-fork', 'orem', 'lindon', 'pleasant-grove', 'american-fork', 'lehi', 'payson', 'salem']
  },
  'payson': {
    name: 'Payson',
    county: 'Utah County',
    nearbyAreas: ['mapleton', 'springville', 'provo', 'spanish-fork', 'orem', 'lindon', 'pleasant-grove', 'american-fork', 'lehi', 'salem']
  },
  'salem': {
    name: 'Salem',
    county: 'Utah County',
    nearbyAreas: ['payson', 'mapleton', 'springville', 'provo', 'spanish-fork', 'orem', 'lindon', 'pleasant-grove', 'american-fork', 'lehi']
  },
  'cedar-hills': {
    name: 'Cedar Hills',
    county: 'Utah County',
    nearbyAreas: ['alpine', 'highland', 'pleasant-grove', 'american-fork', 'lehi', 'orem', 'provo', 'spanish-fork', 'springville', 'mapleton']
  },
  'alpine': {
    name: 'Alpine',
    county: 'Utah County',
    nearbyAreas: ['cedar-hills', 'highland', 'pleasant-grove', 'american-fork', 'lehi', 'orem', 'provo', 'spanish-fork', 'springville', 'mapleton']
  },
  'highland': {
    name: 'Highland',
    county: 'Utah County',
    nearbyAreas: ['alpine', 'cedar-hills', 'pleasant-grove', 'american-fork', 'lehi', 'orem', 'provo', 'spanish-fork', 'springville', 'mapleton']
  },
  'saratoga-springs': {
    name: 'Saratoga Springs',
    county: 'Utah County',
    nearbyAreas: ['eagle-mountain', 'cedar-valley', 'lehi', 'american-fork', 'pleasant-grove', 'lindon', 'orem', 'provo', 'spanish-fork', 'springville']
  },
  'eagle-mountain': {
    name: 'Eagle Mountain',
    county: 'Utah County',
    nearbyAreas: ['saratoga-springs', 'cedar-valley', 'lehi', 'american-fork', 'pleasant-grove', 'lindon', 'orem', 'provo', 'spanish-fork', 'springville']
  },
  'cedar-valley': {
    name: 'Cedar Valley',
    county: 'Utah County',
    nearbyAreas: ['eagle-mountain', 'saratoga-springs', 'lehi', 'american-fork', 'pleasant-grove', 'lindon', 'orem', 'provo', 'spanish-fork', 'springville']
  },
  'genola': {
    name: 'Genola',
    county: 'Utah County',
    nearbyAreas: ['goshen', 'payson', 'mapleton', 'springville', 'provo', 'spanish-fork', 'orem', 'lindon', 'pleasant-grove', 'american-fork']
  },
  'goshen': {
    name: 'Goshen',
    county: 'Utah County',
    nearbyAreas: ['genola', 'payson', 'mapleton', 'springville', 'provo', 'spanish-fork', 'orem', 'lindon', 'pleasant-grove', 'american-fork']
  },
  'woodland-hills': {
    name: 'Woodland Hills',
    county: 'Utah County',
    nearbyAreas: ['salem', 'payson', 'mapleton', 'springville', 'provo', 'spanish-fork', 'orem', 'lindon', 'pleasant-grove', 'american-fork']
  },

  // Summit County (9 cities)
  'kamas': {
    name: 'Kamas',
    county: 'Summit County',
    nearbyAreas: ['coalville', 'park-city', 'oakley', 'francis', 'hoytsville', 'peoa', 'samak', 'snyderville']
  },
  'oakley': {
    name: 'Oakley',
    county: 'Summit County',
    nearbyAreas: ['coalville', 'park-city', 'kamas', 'francis', 'hoytsville', 'peoa', 'samak', 'snyderville']
  },
  'francis': {
    name: 'Francis',
    county: 'Summit County',
    nearbyAreas: ['coalville', 'park-city', 'kamas', 'oakley', 'hoytsville', 'peoa', 'samak', 'snyderville']
  },
  'hoytsville': {
    name: 'Hoytsville',
    county: 'Summit County',
    nearbyAreas: ['coalville', 'park-city', 'kamas', 'oakley', 'francis', 'peoa', 'samak', 'snyderville']
  },
  'peoa': {
    name: 'Peoa',
    county: 'Summit County',
    nearbyAreas: ['coalville', 'park-city', 'kamas', 'oakley', 'francis', 'hoytsville', 'samak', 'snyderville']
  },
  'samak': {
    name: 'Samak',
    county: 'Summit County',
    nearbyAreas: ['coalville', 'park-city', 'kamas', 'oakley', 'francis', 'hoytsville', 'peoa', 'snyderville']
  },
  'snyderville': {
    name: 'Snyderville',
    county: 'Summit County',
    nearbyAreas: ['coalville', 'park-city', 'kamas', 'oakley', 'francis', 'hoytsville', 'peoa', 'samak']
  },

  // Tooele County (17 cities)
  'grantsville': {
    name: 'Grantsville',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah', 'callao']
  },
  'stansbury-park': {
    name: 'Stansbury Park',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah', 'callao']
  },
  'lake-point': {
    name: 'Lake Point',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah', 'callao']
  },
  'erda': {
    name: 'Erda',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah', 'callao']
  },
  'stockton': {
    name: 'Stockton',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'vernon', 'wendover', 'dugway', 'ibapah', 'callao']
  },
  'vernon': {
    name: 'Vernon',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'wendover', 'dugway', 'ibapah', 'callao']
  },
  'wendover': {
    name: 'Wendover',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'dugway', 'ibapah', 'callao']
  },
  'dugway': {
    name: 'Dugway',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'ibapah', 'callao']
  },
  'ibapah': {
    name: 'Ibapah',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'callao']
  },
  'callao': {
    name: 'Callao',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah']
  },
  'knolls': {
    name: 'Knolls',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah']
  },
  'rush-valley': {
    name: 'Rush Valley',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah']
  },
  'terra': {
    name: 'Terra',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah']
  },
  'timpe': {
    name: 'Timpe',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah']
  },
  'trinidad': {
    name: 'Trinidad',
    county: 'Tooele County',
    nearbyAreas: ['tooele', 'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon', 'wendover', 'dugway', 'ibapah']
  }
};

export const generateServiceAreaPage = (cityKey, cityData) => {
  const { name, county, nearbyAreas } = cityData;
  
  return `import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import CTA from '../../components/CTA.js';
import './ServiceAreaPage.css';

const ${name.replace(/\s+/g, '')}Page = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for ${name} properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your ${name} pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in ${name}',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created an amazing pond for our ${name} home. Their expertise in ${county}'s climate is impressive.",
      author: "Mark S., ${name}"
    },
    {
      text: "Professional service and beautiful results. They understand what works in ${name}'s environment and deliver every time.",
      author: "Susan P., ${name}"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in ${name}"
        subtitle="Professional pond services for ${name} and surrounding ${county} areas"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in ${name}"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in ${name}</h2>
          <p>
            Utah Water Gardens proudly serves ${name} and surrounding ${county} areas with comprehensive pond and water feature services. 
            Our local expertise in ${name}'s unique climate and water conditions ensures your pond thrives year-round.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for ${name} Pond Services?</h3>
              <ul>
                <li>Local expertise in ${name}'s climate and water conditions</li>
                <li>Over 25 years of experience serving the ${name} area</li>
                <li>Licensed and insured for all ${name} projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2s${encodeURIComponent(name)}%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="${name} Service Area"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our ${name} Pond Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <a href="tel:(801) 590-8516" className="btn btn-primary">
                  Call (801) 590-8516
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What ${name} Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>"{testimonial.text}"</p>
                <cite>- {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </section>

        <section className="nearby-areas">
          <h2>We Also Serve These Nearby Areas</h2>
          <div className="areas-grid">
            ${nearbyAreas.map(area => `<Link to="/pond-services/${area}" className="area-link">${area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Link>`).join('\n            ')}
          </div>
        </section>

        <CTA 
          cityName="${name}"
          secondaryButtonText="Get Free Quote"
        />
      </div>
    </div>
  );
};

export default ${name.replace(/\s+/g, '')}Page;`;
};
