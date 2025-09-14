import React from 'react';
import { useParams } from 'react-router-dom';
import CityPageTemplate from './CityPageTemplate';

const DynamicServiceAreaPage = () => {
  const { serviceType, citySlug } = useParams();
  
  // Convert slug to proper city name
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Determine state based on city (most are Utah, but some are in other states)
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
  
  // Create service-specific content based on service type
  const getServiceSpecificContent = (serviceType, cityName, state) => {
    const baseContent = {
      overview: `Professional ${serviceType} services in ${cityName}, ${state}. From ${serviceType} design and construction to maintenance and cleaning, we provide comprehensive water garden solutions for residential and commercial properties throughout the ${cityName} area. Our local expertise in ${cityName}'s unique climate and soil conditions ensures your pond thrives year-round.`,
      residentialServices: [
        `Custom ${serviceType} Design & Construction`,
        `${serviceType} Cleaning & Maintenance`, 
        "Water Quality Testing & Treatment",
        "Aquatic Plant Installation & Care",
        "Koi & Goldfish Health Management",
        "Seasonal Pond Care & Winterization",
        "Pond Equipment Repair & Installation",
        "Emergency Pond Services"
      ],
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
      whyChooseUs: `Utah Water Gardens has been serving ${cityName} and surrounding areas for over 15 years. Our local expertise, professional equipment including the Truxor T50 system, and commitment to quality make us the premier choice for ${serviceType} services in ${cityName}. We understand the unique challenges of ${cityName}'s climate and provide tailored solutions for your water feature needs.`,
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
      default:
        return baseContent;
    }
  };
  
  // Create comprehensive city data object
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
    contentSections: getServiceSpecificContent(serviceType, cityName, state)
  };

  return <CityPageTemplate {...cityData} />;
};

export default DynamicServiceAreaPage;
