import fs from 'fs';
import path from 'path';
import { getAllServicePageCombinations } from '../data/expandedServiceAreas.js';

// Template for service pages
const generateServicePageTemplate = (city, service, serviceType) => {
  const serviceTitle = serviceType.title;
  const serviceDescription = serviceType.description;
  const serviceFeatures = serviceType.features;
  const serviceImage = serviceType.image;
  const serviceAlt = serviceType.alt;
  
  return `import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const ${service.charAt(0).toUpperCase() + service.slice(1)}${city.replace(/\s+/g, '')}Page = () => {
  const services = [
    {
      name: '${serviceType.services[0].name}',
      description: '${serviceType.services[0].description}',
      features: [${serviceType.services[0].features.map(f => `'${f}'`).join(', ')}]
    },
    {
      name: '${serviceType.services[1].name}',
      description: '${serviceType.services[1].description}',
      features: [${serviceType.services[1].features.map(f => `'${f}'`).join(', ')}]
    },
    {
      name: '${serviceType.services[2].name}',
      description: '${serviceType.services[2].description}',
      features: [${serviceType.services[2].features.map(f => `'${f}'`).join(', ')}]
    },
    {
      name: '${serviceType.services[3].name}',
      description: '${serviceType.services[3].description}',
      features: [${serviceType.services[3].features.map(f => `'${f}'`).join(', ')}]
    }
  ];

  const testimonials = [
    {
      text: "${serviceType.testimonials[0].text}",
      author: "${serviceType.testimonials[0].author}"
    },
    {
      text: "${serviceType.testimonials[1].text}",
      author: "${serviceType.testimonials[1].author}"
    }
  ];

  return (
    <>
      <SEO 
        title="${serviceTitle} ${city} | Professional ${serviceType.serviceName} Services"
        description="Expert ${serviceType.serviceName.toLowerCase()} services in ${city}. ${serviceDescription} Licensed & insured. Call (801) 590-8516."
        keywords="${serviceType.keywords}, ${city.toLowerCase()} ${serviceType.serviceName.toLowerCase()}, ${serviceType.serviceName.toLowerCase()} ${city.toLowerCase()}"
        canonical="https://utahwatergardens.com/${service}-${city.toLowerCase().replace(/\s+/g, '-')}"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "${serviceTitle} Services ${city}",
          "description": "Professional ${serviceType.serviceName.toLowerCase()} services in ${city}",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Utah Water Gardens",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5911 S 1300 E",
              "addressLocality": "Salt Lake City",
              "addressRegion": "UT",
              "postalCode": "84121",
              "addressCountry": "US"
            },
            "telephone": "+1-801-590-8516"
          },
          "areaServed": {
            "@type": "City",
            "name": "${city}"
          },
          "serviceType": "${serviceTitle}",
          "offers": {
            "@type": "Offer",
            "description": "Professional ${serviceType.serviceName.toLowerCase()} services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <PageHero 
          title="${serviceTitle} Services in ${city}"
          subtitle="${serviceDescription}"
          backgroundImage="${serviceImage}"
          backgroundImageAlt="${serviceAlt}"
        />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional ${serviceTitle} in ${city}</h2>
            <p>
              ${serviceType.overview}
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our ${city} ${serviceTitle}?</h3>
                <ul>
                  ${serviceType.whyChoose.map(item => `<li>${item}</li>`).join('\n                  ')}
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2s${city.replace(/\s+/g, '%20')}!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="${city} ${serviceTitle} Service Area"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our ${city} ${serviceTitle} Services</h2>
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

          {/* Testimonials */}
          <section className="testimonials-section">
            <h2>What ${city} Customers Say About Our ${serviceTitle}</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p>"{testimonial.text}"</p>
                  <cite>- {testimonial.author}</cite>
                </div>
              ))}
            </div>
          </section>

          {/* Service Areas */}
          <section className="nearby-areas gradient-wipe-up">
            <h2>We Also Provide ${serviceTitle} in These Areas</h2>
            <div className="areas-grid">
              <Link to="/${service}-nearby-city-1" className="area-link">Nearby City 1</Link>
              <Link to="/${service}-nearby-city-2" className="area-link">Nearby City 2</Link>
              <Link to="/${service}-nearby-city-3" className="area-link">Nearby City 3</Link>
              <Link to="/${service}-nearby-city-4" className="area-link">Nearby City 4</Link>
            </div>
          </section>

          {/* Contact CTA */}
          <section 
            className="contact-cta"
            style={{
              backgroundImage: \`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')\`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <h2>Ready for Professional ${serviceTitle} in ${city}?</h2>
            <p>Contact us today to schedule your ${serviceType.serviceName.toLowerCase()} service or get a free consultation.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
              <Link to="/contact" className="btn btn-secondary">Get Free Quote</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ${service.charAt(0).toUpperCase() + service.slice(1)}${city.replace(/\s+/g, '')}Page;`;
};

// Service type configurations
const serviceTypeConfigs = {
  'pond-maintenance': {
    title: 'Pond Maintenance',
    serviceName: 'Pond Maintenance',
    description: 'Professional pond maintenance and care services for your water feature',
    image: '/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg',
    alt: 'Professional pond maintenance services',
    keywords: 'pond maintenance, pond care, pond service, water feature maintenance',
    overview: 'Keep your pond healthy and beautiful year-round with our comprehensive maintenance services. Our experienced team provides tailored care to ensure your water feature thrives in every season.',
    whyChoose: [
      'Local expertise in your area\'s climate and water conditions',
      'Flexible maintenance schedules to fit your needs',
      'Emergency services available 24/7',
      'Licensed and insured professionals',
      'Comprehensive water quality testing',
      'Seasonal care programs'
    ],
    services: [
      {
        name: 'Regular Pond Maintenance',
        description: 'Weekly, bi-weekly, or monthly maintenance schedules tailored to your pond',
        features: ['Water Quality Testing', 'Filter Cleaning', 'Plant Trimming', 'Debris Removal']
      },
      {
        name: 'Seasonal Pond Care',
        description: 'Specialized care for your area\'s unique seasonal changes',
        features: ['Spring Startup', 'Summer Care', 'Fall Preparation', 'Winter Protection']
      },
      {
        name: 'Emergency Pond Service',
        description: '24/7 emergency pond maintenance services',
        features: ['Pump Failures', 'Water Quality Issues', 'Equipment Breakdowns', 'Storm Damage']
      },
      {
        name: 'Pond Health Monitoring',
        description: 'Comprehensive monitoring to keep your pond healthy',
        features: ['Water Testing', 'Fish Health Checks', 'Plant Health Assessment', 'Equipment Inspection']
      }
    ],
    testimonials: [
      {
        text: "Utah Water Gardens keeps our pond in perfect condition year-round. Their maintenance program is comprehensive and reliable.",
        author: "Jennifer L."
      },
      {
        text: "Professional, knowledgeable, and always on time. They understand our climate challenges and keep our pond thriving.",
        author: "Robert K."
      }
    ]
  },
  'pond-construction': {
    title: 'Pond Construction',
    serviceName: 'Pond Construction',
    description: 'Custom pond design and construction services for your property',
    image: '/images/pondConstruction1000x800.webp',
    alt: 'Custom pond construction services',
    keywords: 'pond construction, custom pond design, koi pond construction, water feature installation',
    overview: 'Transform your property with a custom-designed pond or water feature. Our experienced construction team specializes in creating beautiful, functional ponds that complement your landscape and thrive in your local climate conditions.',
    whyChoose: [
      'Over 25 years of pond construction experience',
      'Custom designs tailored to your property and budget',
      'Licensed and insured construction team',
      'Knowledge of local building codes and permits',
      'Quality materials and professional installation',
      'Comprehensive warranty on all construction work'
    ],
    services: [
      {
        name: 'Custom Pond Design',
        description: 'Bespoke pond designs tailored to your property and lifestyle',
        features: ['Site Analysis', 'Custom Design', '3D Visualization', 'Permit Assistance']
      },
      {
        name: 'Koi Pond Construction',
        description: 'Professional koi pond construction with proper filtration and aeration',
        features: ['Proper Depth & Size', 'Advanced Filtration', 'Aeration Systems', 'Fish Health Focus']
      },
      {
        name: 'Water Feature Installation',
        description: 'Beautiful waterfalls, streams, and fountains for your home',
        features: ['Natural Stone Work', 'Waterfall Design', 'Stream Creation', 'Fountain Installation']
      },
      {
        name: 'Pond Renovation',
        description: 'Transform your existing pond with professional renovation',
        features: ['Design Updates', 'Equipment Upgrades', 'Landscaping Integration', 'Modern Features']
      }
    ],
    testimonials: [
      {
        text: "Utah Water Gardens designed and built the most beautiful pond in our backyard. Their attention to detail is incredible.",
        author: "David M."
      },
      {
        text: "From design to completion, the entire process was professional and stress-free. Our new pond is the centerpiece of our garden.",
        author: "Lisa R."
      }
    ]
  },
  'pond-cleaning': {
    title: 'Pond Cleaning',
    serviceName: 'Pond Cleaning',
    description: 'Professional pond cleaning and maintenance services',
    image: '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
    alt: 'Professional pond cleaning services',
    keywords: 'pond cleaning, pond cleaning services, algae removal, pond maintenance',
    overview: 'Keep your pond crystal clear and healthy with our professional cleaning services. Using state-of-the-art Truxor T50 equipment, we provide thorough cleaning that removes debris, sludge, and algae while preserving the delicate ecosystem of your pond.',
    whyChoose: [
      'Professional Truxor T50 equipment for thorough cleaning',
      'Eco-friendly cleaning methods that protect fish and plants',
      'Licensed and insured cleaning professionals',
      'Flexible scheduling to fit your needs',
      'Emergency cleaning services available',
      'Comprehensive water quality testing'
    ],
    services: [
      {
        name: 'Deep Pond Cleaning',
        description: 'Comprehensive pond cleaning services using our professional Truxor T50 equipment',
        features: ['Debris Removal', 'Sludge Extraction', 'Filter Cleaning', 'Water Clarity Restoration']
      },
      {
        name: 'Algae Control & Removal',
        description: 'Professional algae treatment and removal for your pond',
        features: ['Algae Assessment', 'Treatment Application', 'Prevention Planning', 'Water Balance']
      },
      {
        name: 'Seasonal Pond Cleaning',
        description: 'Spring and fall cleaning services to prepare your pond for seasonal changes',
        features: ['Spring Startup', 'Fall Cleanup', 'Winter Preparation', 'Equipment Maintenance']
      },
      {
        name: 'Emergency Pond Cleaning',
        description: '24/7 emergency pond cleaning services',
        features: ['Storm Damage Cleanup', 'Equipment Failures', 'Water Quality Emergencies', 'Rapid Response']
      }
    ],
    testimonials: [
      {
        text: "Utah Water Gardens completely transformed our murky pond into crystal clear water. Their Truxor equipment made all the difference.",
        author: "Mark T."
      },
      {
        text: "Professional, efficient, and thorough. Our pond has never looked better since their deep cleaning service.",
        author: "Sarah W."
      }
    ]
  },
  'pond-repair': {
    title: 'Pond Repair',
    serviceName: 'Pond Repair',
    description: 'Professional pond repair and equipment maintenance services',
    image: '/images/pumpRepair.webp',
    alt: 'Professional pond repair services',
    keywords: 'pond repair, pond pump repair, pond filter repair, pond liner repair',
    overview: 'When your pond equipment fails, you need fast, reliable repair services. Our experienced technicians provide comprehensive pond repair services, from pump failures to filter system issues, ensuring your pond continues to function properly year-round.',
    whyChoose: [
      'Licensed and certified repair technicians',
      'Emergency repair services available 24/7',
      'Quality parts and equipment from trusted manufacturers',
      'Fair pricing with upfront estimates',
      'Warranty on all repair work',
      'Preventive maintenance programs'
    ],
    services: [
      {
        name: 'Pump Repair & Replacement',
        description: 'Expert pump repair and replacement services for your pond',
        features: ['Pump Diagnosis', 'Repair Services', 'Replacement Options', 'Performance Optimization']
      },
      {
        name: 'Filter System Repair',
        description: 'Comprehensive filter system repair and maintenance for your pond',
        features: ['Filter Assessment', 'Component Repair', 'System Upgrades', 'Performance Testing']
      },
      {
        name: 'Pond Liner Repair',
        description: 'Professional pond liner repair and replacement services',
        features: ['Leak Detection', 'Liner Repair', 'Liner Replacement', 'Sealant Application']
      },
      {
        name: 'Emergency Pond Repair',
        description: '24/7 emergency pond repair services',
        features: ['Emergency Response', 'Quick Diagnosis', 'Temporary Fixes', 'Permanent Solutions']
      }
    ],
    testimonials: [
      {
        text: "Utah Water Gardens fixed our pond pump quickly and efficiently. Their emergency service saved our fish during a critical failure.",
        author: "Tom H."
      },
      {
        text: "Professional repair service with fair pricing. They diagnosed the problem accurately and had it fixed the same day.",
        author: "Maria G."
      }
    ]
  },
  'water-feature-design': {
    title: 'Water Feature Design',
    serviceName: 'Water Feature Design',
    description: 'Custom water feature design and installation services',
    image: '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
    alt: 'Custom water feature design services',
    keywords: 'water feature design, waterfall design, fountain design, custom water features',
    overview: 'Transform your property with stunning custom water features. Our experienced design team creates beautiful waterfalls, fountains, streams, and ponds that enhance your landscape and provide years of enjoyment for your family.',
    whyChoose: [
      'Custom designs tailored to your property and budget',
      '3D visualization to see your design before construction',
      'Licensed and insured design professionals',
      'Knowledge of your local climate and soil conditions',
      'Quality materials and professional installation',
      'Comprehensive warranty on all design work'
    ],
    services: [
      {
        name: 'Custom Water Feature Design',
        description: 'Bespoke water feature designs tailored to your property and aesthetic preferences',
        features: ['Site Analysis', 'Custom Design', '3D Visualization', 'Material Selection']
      },
      {
        name: 'Waterfall Design & Installation',
        description: 'Stunning waterfall designs that complement your landscape',
        features: ['Natural Stone Waterfalls', 'Modern Water Features', 'Multi-Tier Designs', 'Lighting Integration']
      },
      {
        name: 'Fountain Design & Installation',
        description: 'Elegant fountain designs for your home or business',
        features: ['Decorative Fountains', 'Interactive Fountains', 'Wall Fountains', 'Pond Fountains']
      },
      {
        name: 'Stream & Creek Design',
        description: 'Natural-looking streams and creeks that enhance your property',
        features: ['Natural Stream Design', 'Meandering Creeks', 'Rock Work', 'Plant Integration']
      }
    ],
    testimonials: [
      {
        text: "Utah Water Gardens designed the most beautiful waterfall for our backyard. It's become the focal point of our entire landscape.",
        author: "Jennifer S."
      },
      {
        text: "Their water feature design transformed our property completely. The attention to detail and craftsmanship is outstanding.",
        author: "Michael D."
      }
    ]
  },
  'pond-dredging': {
    title: 'Pond Dredging',
    serviceName: 'Pond Dredging',
    description: 'Professional pond dredging services to restore water depth and quality',
    image: '/images/pondDredging-topaz-enhance-3.9x.jpeg',
    alt: 'Professional pond dredging services',
    keywords: 'pond dredging, pond excavation, pond restoration, sediment removal',
    overview: 'Restore your pond to its original depth and beauty with our professional dredging services. Using specialized equipment, we remove accumulated sediment, sludge, and debris to improve water quality, increase depth, and restore the natural beauty of your pond.',
    whyChoose: [
      'Specialized dredging equipment for efficient sediment removal',
      'Eco-friendly dredging methods that protect aquatic life',
      'Licensed and insured dredging professionals',
      'Flexible scheduling to minimize disruption',
      'Comprehensive water quality testing before and after',
      'Proper disposal of dredged materials'
    ],
    services: [
      {
        name: 'Complete Pond Dredging',
        description: 'Full pond dredging services to restore original depth and water quality',
        features: ['Sediment Removal', 'Sludge Extraction', 'Depth Restoration', 'Water Quality Improvement']
      },
      {
        name: 'Partial Pond Dredging',
        description: 'Targeted dredging for specific areas of your pond',
        features: ['Selective Dredging', 'Minimal Disruption', 'Cost-Effective Solutions', 'Quick Turnaround']
      },
      {
        name: 'Emergency Dredging',
        description: 'Emergency dredging services for urgent pond restoration needs',
        features: ['Rapid Response', 'Emergency Assessment', 'Quick Dredging', 'Immediate Relief']
      },
      {
        name: 'Maintenance Dredging',
        description: 'Regular dredging services to prevent sediment buildup',
        features: ['Preventive Maintenance', 'Scheduled Dredging', 'Long-term Pond Health', 'Cost Savings']
      }
    ],
    testimonials: [
      {
        text: "Utah Water Gardens completely restored our pond's depth and clarity. The dredging service brought our pond back to life.",
        author: "Robert L."
      },
      {
        text: "Professional dredging service that transformed our shallow, murky pond into a beautiful, deep water feature.",
        author: "Amanda K."
      }
    ]
  },
  'harvesting': {
    title: 'Aquatic Plant Harvesting',
    serviceName: 'Aquatic Plant Harvesting',
    description: 'Professional aquatic plant harvesting and management services',
    image: '/images/plantHarvesting-topaz-enhance-3.9x.jpeg',
    alt: 'Professional aquatic plant harvesting services',
    keywords: 'aquatic plant harvesting, pond plant management, water plant removal, plant control',
    overview: 'Keep your pond healthy and balanced with our professional aquatic plant harvesting services. We carefully remove excess vegetation while preserving the natural ecosystem, ensuring optimal water quality and fish health.',
    whyChoose: [
      'Expert knowledge of aquatic plant species and growth patterns',
      'Selective harvesting that preserves beneficial plants',
      'Eco-friendly harvesting methods that protect fish and wildlife',
      'Licensed and insured harvesting professionals',
      'Flexible scheduling to fit your pond\'s needs',
      'Comprehensive plant management planning'
    ],
    services: [
      {
        name: 'Selective Plant Harvesting',
        description: 'Careful removal of excess aquatic plants while preserving beneficial species',
        features: ['Species Identification', 'Selective Removal', 'Ecosystem Balance', 'Water Quality Protection']
      },
      {
        name: 'Seasonal Plant Management',
        description: 'Year-round plant management to maintain optimal pond health',
        features: ['Spring Growth Control', 'Summer Maintenance', 'Fall Cleanup', 'Winter Preparation']
      },
      {
        name: 'Invasive Species Removal',
        description: 'Professional removal of invasive aquatic plant species',
        features: ['Invasive Species Identification', 'Complete Removal', 'Prevention Planning', 'Native Plant Restoration']
      },
      {
        name: 'Plant Health Assessment',
        description: 'Comprehensive assessment of your pond\'s plant ecosystem',
        features: ['Plant Health Analysis', 'Growth Pattern Assessment', 'Management Recommendations', 'Long-term Planning']
      }
    ],
    testimonials: [
      {
        text: "Utah Water Gardens expertly managed our pond's plant growth. Their selective harvesting kept our pond healthy and beautiful.",
        author: "David P."
      },
      {
        text: "Professional plant harvesting service that restored balance to our overgrown pond. The results were immediate and lasting.",
        author: "Lisa M."
      }
    ]
  },
  'lake-dredging': {
    title: 'Lake Dredging',
    serviceName: 'Lake Dredging',
    description: 'Professional lake dredging services for large water bodies',
    image: '/images/lakeDredging-topaz-enhance-3.9x.jpeg',
    alt: 'Professional lake dredging services',
    keywords: 'lake dredging, lake restoration, lake excavation, sediment removal, lake maintenance',
    overview: 'Restore your lake to its full potential with our professional lake dredging services. Using specialized equipment designed for large water bodies, we remove accumulated sediment, improve water depth, and restore the natural beauty and functionality of your lake.',
    whyChoose: [
      'Specialized equipment for large-scale lake dredging projects',
      'Experience with lakes of all sizes and types',
      'Licensed and insured lake dredging professionals',
      'Minimal environmental impact with eco-friendly methods',
      'Comprehensive project planning and execution',
      'Proper disposal and management of dredged materials'
    ],
    services: [
      {
        name: 'Complete Lake Dredging',
        description: 'Full lake dredging services to restore original depth and water quality',
        features: ['Large-Scale Sediment Removal', 'Depth Restoration', 'Water Quality Improvement', 'Ecosystem Restoration']
      },
      {
        name: 'Partial Lake Dredging',
        description: 'Targeted dredging for specific areas of your lake',
        features: ['Selective Dredging', 'Minimal Disruption', 'Cost-Effective Solutions', 'Flexible Scheduling']
      },
      {
        name: 'Lake Restoration',
        description: 'Comprehensive lake restoration services including dredging and ecosystem improvement',
        features: ['Complete Restoration', 'Ecosystem Enhancement', 'Water Quality Improvement', 'Long-term Planning']
      },
      {
        name: 'Maintenance Dredging',
        description: 'Regular maintenance dredging to prevent sediment buildup in your lake',
        features: ['Preventive Maintenance', 'Scheduled Dredging', 'Long-term Lake Health', 'Cost Savings']
      }
    ],
    testimonials: [
      {
        text: "Utah Water Gardens transformed our shallow lake into a beautiful, deep water body. Their lake dredging service was exceptional.",
        author: "John R."
      },
      {
        text: "Professional lake dredging that restored our lake's depth and clarity. The improvement in water quality was remarkable.",
        author: "Susan T."
      }
    ]
  }
};

// Generate all service pages
const generateAllServicePages = () => {
  const combinations = getAllServicePageCombinations();
  const serviceAreaDir = path.join(process.cwd(), '..', 'pages', 'ServiceAreas');
  
  console.log(`Generating ${combinations.length} service pages...`);
  
  combinations.forEach(({ city, service, filename }) => {
    const serviceType = serviceTypeConfigs[service];
    const content = generateServicePageTemplate(city, service, serviceType);
    const filePath = path.join(serviceAreaDir, filename);
    
    try {
      fs.writeFileSync(filePath, content);
      console.log(`Generated: ${filename}`);
    } catch (error) {
      console.error(`Error generating ${filename}:`, error.message);
    }
  });
  
  console.log(`Successfully generated ${combinations.length} service pages!`);
};

// Run the generator
generateAllServicePages();
