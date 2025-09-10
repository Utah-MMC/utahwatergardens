import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';

const Pond-dredgingOphirPage = () => {
  // Convert slug to proper city name
  const citySlug = 'ophir';
  const cityName = citySlug.replace(/-/g, ' ').replace(/w/g, l => l.toUpperCase());
  
  // Create comprehensive city data object
  const cityData = {
    cityName: cityName,
    citySlug: citySlug,
    state: "Utah",
    phoneNumber: "(801) 590-8516",
    landmarks: [
      {
        name: `${cityName} City Hall`,
        address: `${cityName}, UT`,
        description: "Local government center and municipal services"
      },
      {
        name: `${cityName} Public Library`,
        address: `${cityName}, UT`,
        description: "Community library and meeting space"
      },
      {
        name: `${cityName} Community Center`,
        address: `${cityName}, UT`,
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
    contentSections: {
      overview: `Professional pond services in ${cityName}, Utah. From pond design and construction to maintenance and cleaning, we provide comprehensive water garden solutions for residential and commercial properties throughout the ${cityName} area. Our local expertise in ${cityName}'s unique climate and soil conditions ensures your pond thrives year-round.`,
      residentialServices: [
        "Custom Pond Design & Construction",
        "Pond Cleaning & Maintenance", 
        "Water Quality Testing & Treatment",
        "Aquatic Plant Installation & Care",
        "Koi & Goldfish Health Management",
        "Seasonal Pond Care & Winterization",
        "Pond Equipment Repair & Installation",
        "Emergency Pond Services"
      ],
      commercialServices: [
        "Commercial Water Feature Design",
        "Corporate Pond Maintenance Contracts",
        "Restaurant & Hotel Water Features",
        "Office Building Water Gardens",
        "Retail Center Pond Services",
        "Public Space Water Features",
        "Maintenance Programs",
        "Emergency Commercial Services"
      ],
      whyChooseUs: `Utah Water Gardens has been serving ${cityName} and surrounding areas for over 15 years. Our local expertise, professional equipment including the Truxor T50 system, and commitment to quality make us the premier choice for pond services in ${cityName}. We understand the unique challenges of ${cityName}'s climate and provide tailored solutions for your water feature needs.`,
      localInfo: `${cityName} is a beautiful city in Utah with a growing community of water garden enthusiasts. Our local knowledge of ${cityName}'s climate, soil conditions, and seasonal changes allows us to provide the most effective pond care solutions. We're familiar with local regulations and can help with permit requirements for your pond project.`,
      serviceAreas: `We proudly serve all areas of ${cityName} and surrounding communities. Our service area includes residential neighborhoods, commercial districts, and local attractions throughout the ${cityName} region. We provide same-day service for emergencies and regular maintenance programs for ongoing pond care.`
    }
  };

  return <CityPageTemplate {...cityData} />;
};

export default Pond-dredgingOphirPage;