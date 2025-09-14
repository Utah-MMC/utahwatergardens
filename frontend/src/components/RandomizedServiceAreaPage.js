import React from 'react';
import { useParams } from 'react-router-dom';
import CityPageTemplate from './CityPageTemplate';
import { generateServicePageContent, getRandomImages, TEMPLATE_TYPES } from '../utils/servicePageRandomizer';

const RandomizedServiceAreaPage = () => {
  const { serviceType, citySlug } = useParams();
  
  // Convert slug to proper city name
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Determine state based on city
  const getStateForCity = (cityName) => {
    const nonUtahCities = {
      'Boulder': 'Colorado',
      'Denver': 'Colorado',
      'Colorado Springs': 'Colorado',
      'Las Vegas': 'Nevada',
      'Phoenix': 'Arizona',
      'Boise': 'Idaho',
      'Jackson': 'Wyoming',
      'Casper': 'Wyoming'
    };
    return nonUtahCities[cityName] || 'Utah';
  };
  
  const state = getStateForCity(cityName);
  
  // Generate randomized content
  const randomizedContent = generateServicePageContent(citySlug, serviceType, cityName, state);
  
  // Get template-specific images
  const heroImage = getRandomImages(randomizedContent.templateType, citySlug);
  
  // Create service-specific content based on service type
  const getServiceSpecificContent = (serviceType, cityName, state, templateType) => {
    const baseContent = {
      overview: randomizedContent.overview,
      residentialServices: randomizedContent.residentialServices,
      commercialServices: [
        `Commercial ${serviceType} Design`,
        `Corporate ${serviceType} Maintenance Contracts`,
        "Restaurant & Hotel Water Features",
        "Office Building Water Gardens",
        "Retail Center Pond Services",
        "Public Space Water Features",
        "Maintenance Programs",
        "Emergency Commercial Services"
      ],
      whyChooseUs: randomizedContent.whyChooseUs,
      localInfo: `${cityName} is a beautiful city in ${state} with a growing community of water garden enthusiasts. Our local knowledge of ${cityName}'s climate, soil conditions, and seasonal changes allows us to provide the most effective ${serviceType} care solutions. We're familiar with local regulations and can help with permit requirements for your pond project.`,
      serviceAreas: `We proudly serve all areas of ${cityName} and surrounding communities. Our service area includes residential neighborhoods, commercial districts, and local attractions throughout the ${cityName} region. We provide same-day service for emergencies and regular maintenance programs for ongoing ${serviceType} care.`
    };
    
    // Customize content based on specific service types
    switch (serviceType) {
      case 'pond-cleaning':
        return {
          ...baseContent,
          overview: `Professional pond cleaning services in ${cityName}, ${state}. Deep cleaning, algae control, and seasonal maintenance for residential and commercial ponds throughout the ${cityName} area.`,
          residentialServices: [
            "Deep Pond Cleaning",
            "Algae Control & Prevention", 
            "Debris Removal & Water Clarification",
            "Filter System Cleaning",
            "Seasonal Maintenance Programs",
            "Emergency Cleaning Services"
          ]
        };
      case 'pond-dredging':
        return {
          ...baseContent,
          overview: `Professional pond dredging services in ${cityName}, ${state}. Complete, partial, emergency, and maintenance dredging for ponds and lakes throughout the ${cityName} area.`,
          residentialServices: [
            "Complete Pond Dredging",
            "Partial Dredging Services", 
            "Emergency Dredging",
            "Maintenance Dredging Programs",
            "Sediment Removal",
            "Pond Depth Restoration"
          ]
        };
      case 'pond-construction':
        return {
          ...baseContent,
          overview: `Professional pond construction services in ${cityName}, ${state}. Custom design, koi ponds, water features, and commercial installations throughout the ${cityName} area.`,
          residentialServices: [
            "Custom Pond Design",
            "Koi Pond Construction", 
            "Water Feature Installation",
            "Natural Pond Creation",
            "Pond Renovation",
            "Commercial Pond Construction"
          ]
        };
      case 'harvesting':
        return {
          ...baseContent,
          overview: `Professional pond and lake harvesting services in ${cityName}, ${state}. Selective plant harvesting, seasonal management, and emergency services throughout the ${cityName} area.`,
          residentialServices: [
            "Selective Plant Harvesting",
            "Seasonal Management", 
            "Emergency Harvesting",
            "Aquatic Plant Control",
            "Lake Maintenance",
            "Ecosystem Balance"
          ]
        };
      case 'water-treatments':
        return {
          ...baseContent,
          overview: `Professional water treatments and chemicals in ${cityName}, ${state}. Algae control, beneficial bacteria, pH balancers, water clarifiers, and comprehensive water quality solutions for ponds throughout the ${cityName} area.`,
          residentialServices: [
            "Water Quality Testing & Analysis",
            "Algae Control & Prevention", 
            "Beneficial Bacteria Treatment",
            "pH Balancing & Water Chemistry",
            "Water Clarification Services",
            "Sludge Removal & Treatment",
            "Seasonal Treatment Programs",
            "Emergency Water Treatment"
          ]
        };
      case 'pond-maintenance':
        return {
          ...baseContent,
          overview: `Professional pond maintenance services in ${cityName}, ${state}. Regular maintenance, water quality testing, equipment servicing, and seasonal care for ponds throughout the ${cityName} area.`,
          residentialServices: [
            "Regular Water Quality Testing",
            "Equipment Maintenance & Repair",
            "Plant Care & Trimming",
            "Fish Health Monitoring",
            "Seasonal Pond Care",
            "Emergency Maintenance Services",
            "Preventive Maintenance Programs",
            "Water Feature Cleaning"
          ]
        };
      case 'pond-supplies':
        return {
          ...baseContent,
          overview: `Premium pond supplies and equipment in ${cityName}, ${state}. Filtration systems, pumps, liners, treatments, and accessories for ponds throughout the ${cityName} area.`,
          residentialServices: [
            "Filtration Systems",
            "Pumps & Aeration Equipment",
            "Pond Liners & Underlayment",
            "Water Treatments & Chemicals",
            "Lighting Systems",
            "Tools & Accessories",
            "Fish Food & Health Products",
            "Plant Care Supplies"
          ]
        };
      case 'pond-gallery':
        return {
          ...baseContent,
          overview: `Explore our portfolio of beautiful pond projects in ${cityName}, ${state}. Residential ponds, commercial water features, koi ponds, and water gardens throughout the ${cityName} area.`,
          residentialServices: [
            "Residential Pond Installations",
            "Koi Pond Designs",
            "Water Feature Installations",
            "Before & After Transformations",
            "Customer Project Showcases",
            "Commercial Water Features",
            "Custom Design Solutions",
            "Landscape Integration"
          ]
        };
      case 'pond-services/repair':
        return {
          ...baseContent,
          overview: `Professional pond equipment repair services in ${cityName}, ${state}. Pump repair, filtration system maintenance, and equipment restoration for ponds throughout the ${cityName} area.`,
          residentialServices: [
            "Pump Repair & Maintenance",
            "Filtration System Repair",
            "Aeration System Repair",
            "Lighting System Repair",
            "Water Feature Repair",
            "Control System Repair",
            "Emergency Repair Services",
            "Preventive Maintenance"
          ]
        };
      case 'pond-services/water-quality':
        return {
          ...baseContent,
          overview: `Professional water quality testing and treatment in ${cityName}, ${state}. Comprehensive testing, analysis, and treatment solutions for ponds throughout the ${cityName} area.`,
          residentialServices: [
            "Water Quality Testing",
            "pH Balance Analysis",
            "Chemical Treatment Plans",
            "Algae Control Programs",
            "Bacteria Treatment",
            "Oxygen Level Management",
            "Seasonal Water Care",
            "Emergency Water Treatment"
          ]
        };
      case 'pond-services/design-build':
        return {
          ...baseContent,
          overview: `Custom pond design and construction in ${cityName}, ${state}. Professional design, installation, and construction services for ponds throughout the ${cityName} area.`,
          residentialServices: [
            "Custom Pond Design",
            "Koi Pond Construction",
            "Water Feature Installation",
            "Landscape Integration",
            "Filtration System Design",
            "Lighting Installation",
            "Plant Selection & Placement",
            "Maintenance Planning"
          ]
        };
      case 'pond-supplies/liners':
        return {
          ...baseContent,
          overview: `Premium pond liners and underlayment in ${cityName}, ${state}. EPDM liners, underlayment, and installation services for ponds throughout the ${cityName} area.`,
          residentialServices: [
            "EPDM Pond Liners",
            "Underlayment Installation",
            "Liner Repair Services",
            "Custom Liner Sizing",
            "Professional Installation",
            "Liner Maintenance",
            "Leak Detection & Repair",
            "Liner Replacement"
          ]
        };
      case 'pond-supplies/pumps-aeration':
        return {
          ...baseContent,
          overview: `Professional pumps and aeration systems in ${cityName}, ${state}. Water pumps, air pumps, diffusers, and aeration equipment for ponds throughout the ${cityName} area.`,
          residentialServices: [
            "Water Pump Installation",
            "Aeration System Setup",
            "Pump Maintenance & Repair",
            "Air Diffuser Installation",
            "System Optimization",
            "Energy Efficient Pumps",
            "Emergency Pump Services",
            "Seasonal System Care"
          ]
        };
      case 'pond-supplies/filtration':
        return {
          ...baseContent,
          overview: `Advanced filtration systems in ${cityName}, ${state}. Mechanical, biological, and UV filtration systems for ponds throughout the ${cityName} area.`,
          residentialServices: [
            "Mechanical Filtration",
            "Biological Filtration",
            "UV Sterilizer Systems",
            "Filter Media Replacement",
            "System Maintenance",
            "Custom Filtration Design",
            "Emergency Filter Services",
            "Water Quality Optimization"
          ]
        };
      case 'pond-gallery/before-after':
        return {
          ...baseContent,
          overview: `Dramatic pond transformations in ${cityName}, ${state}. Before and after showcases of pond renovations, restorations, and upgrades throughout the ${cityName} area.`,
          residentialServices: [
            "Pond Renovations",
            "Complete Restorations",
            "Upgrade Projects",
            "Transformation Services",
            "Before & After Documentation",
            "Customer Success Stories",
            "Project Showcases",
            "Transformation Planning"
          ]
        };
      case 'pond-gallery/water-features':
        return {
          ...baseContent,
          overview: `Creative water feature installations in ${cityName}, ${state}. Fountains, waterfalls, streams, and decorative water elements throughout the ${cityName} area.`,
          residentialServices: [
            "Fountain Installations",
            "Waterfall Construction",
            "Stream Design & Build",
            "Decorative Water Elements",
            "Custom Water Features",
            "Landscape Integration",
            "Feature Maintenance",
            "Seasonal Care"
          ]
        };
      case 'pond-gallery/koi-ponds':
        return {
          ...baseContent,
          overview: `Specialized koi pond designs in ${cityName}, ${state}. Professional koi pond construction, filtration, and maintenance for koi enthusiasts throughout the ${cityName} area.`,
          residentialServices: [
            "Koi Pond Design",
            "Koi-Specific Filtration",
            "Aeration Systems",
            "Health Monitoring",
            "Koi Care Programs",
            "Pond Maintenance",
            "Water Quality Management",
            "Seasonal Koi Care"
          ]
        };
      case 'pond-gallery/residential':
        return {
          ...baseContent,
          overview: `Beautiful residential pond installations in ${cityName}, ${state}. Custom residential ponds, water gardens, and backyard water features throughout the ${cityName} area.`,
          residentialServices: [
            "Custom Residential Ponds",
            "Water Garden Design",
            "Backyard Water Features",
            "Landscape Integration",
            "LED Lighting Systems",
            "Maintenance Programs",
            "Seasonal Care",
            "Emergency Services"
          ]
        };
      case 'pond-gallery/customer-projects':
        return {
          ...baseContent,
          overview: `Customer project showcases in ${cityName}, ${state}. Real success stories, testimonials, and case studies of pond projects throughout the ${cityName} area.`,
          residentialServices: [
            "Customer Success Stories",
            "Project Testimonials",
            "Case Study Reviews",
            "Before & After Galleries",
            "Customer Spotlights",
            "Project Documentation",
            "Success Metrics",
            "Customer Satisfaction"
          ]
        };
      case 'pond-gallery/commercial':
        return {
          ...baseContent,
          overview: `Professional commercial water features in ${cityName}, ${state}. Large-scale commercial installations, corporate water features, and business water elements throughout the ${cityName} area.`,
          residentialServices: [
            "Corporate Water Features",
            "Commercial Fountains",
            "Business Water Elements",
            "Stone Work & Hardscaping",
            "Maintenance Contracts",
            "Commercial Design",
            "Large-Scale Installations",
            "Business Integration"
          ]
        };
      default:
        return baseContent;
    }
  };
  
  // Create comprehensive city data object with randomized content
  const cityData = {
    cityName: cityName,
    citySlug: citySlug,
    state: state,
    phoneNumber: "(801) 590-8516",
    landmarks: [
      {
        name: `${cityName} City Hall`,
        address: `${cityName}, ${state}`,
        description: "Local government center and municipal services"
      },
      {
        name: `${cityName} Public Library`,
        address: `${cityName}, ${state}`,
        description: "Community library and meeting space"
      },
      {
        name: `${cityName} Community Center`,
        address: `${cityName}, ${state}`,
        description: "Local community events and activities"
      }
    ],
    businessDistricts: [
      {
        name: "Downtown District",
        description: "Main business district with office buildings and commercial properties"
      },
      {
        name: "Shopping Center",
        description: "Local shopping and retail area"
      },
      {
        name: "Industrial Area",
        description: "Commercial and industrial properties"
      }
    ],
    contentSections: getServiceSpecificContent(serviceType, cityName, state, randomizedContent.templateType),
    // Add randomized elements
    heroTitle: randomizedContent.heroTitle,
    heroSubtitle: randomizedContent.heroSubtitle,
    heroBackgroundImage: heroImage,
    heroBackgroundImageAlt: `${randomizedContent.templateType} style pond services in ${cityName}`,
    templateType: randomizedContent.templateType
  };

  return <CityPageTemplate {...cityData} />;
};

export default RandomizedServiceAreaPage;
