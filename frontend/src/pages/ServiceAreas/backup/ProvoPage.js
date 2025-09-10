import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';

const ProvoPage = () => {
  const cityData = {
    cityName: "Provo",
    citySlug: "provo",
    state: "Utah",
    phoneNumber: "(801) 590-8516",
    latitude: "40.2338",
    longitude: "-111.6585",
    landmarks: [
      {
        name: "Brigham Young University",
        address: "Provo, UT 84602",
        description: "Major university campus with beautiful grounds"
      },
      {
        name: "Provo Canyon",
        address: "Provo Canyon, UT",
        description: "Scenic canyon with waterfalls and natural beauty"
      },
      {
        name: "Sundance Resort",
        address: "8841 Alpine Loop Scenic Byway, Sundance, UT 84604",
        description: "Mountain resort with natural water features"
      },
      {
        name: "Bridal Veil Falls",
        address: "Provo Canyon, UT",
        description: "Beautiful waterfall and natural attraction"
      }
    ],
    businessDistricts: [
      {
        name: "Downtown Provo",
        description: "Historic downtown with shops and restaurants",
        link: "/pond-services/provo"
      },
      {
        name: "University Avenue",
        description: "Main commercial corridor near BYU",
        link: "/pond-services/provo"
      },
      {
        name: "Riverwoods",
        description: "Shopping and entertainment district",
        link: "/pond-services/provo"
      }
    ],
    permitInfo: {
      cityName: "Provo",
      phoneNumber: "(801) 852-6000",
      requirements: "Contact Provo City for pond and water feature permit requirements and applications."
    },
    contentSections: {
      overview: "Utah Water Gardens provides comprehensive pond and water feature services throughout Provo, Utah. Our local expertise in Provo's unique climate, water conditions, and seasonal changes ensures your pond thrives year-round. From custom pond design and construction to ongoing maintenance and repair services, we're your trusted partner for all water feature needs in the Provo area.",
      residentialServices: [
        "Custom pond design and construction",
        "Koi pond installation and maintenance",
        "Water garden design and planting",
        "Pond cleaning and maintenance",
        "Fish health management",
        "Seasonal pond care",
        "Equipment repair and replacement",
        "Pond renovation and upgrades"
      ],
      commercialServices: [
        "Commercial pond design and installation",
        "Hotel and resort water features",
        "Office building water features",
        "Restaurant and retail water displays",
        "Maintenance contracts for commercial properties",
        "Emergency repair services",
        "Water quality management",
        "Seasonal maintenance programs"
      ],
      whyChooseUs: "Utah Water Gardens has been serving Provo and surrounding areas for over 15 years. Our local expertise, professional equipment, and commitment to quality make us the premier choice for pond services in Provo.",
      localInfo: "Provo is a beautiful city in Utah with a growing community of water garden enthusiasts. Our local knowledge of Provo's climate, soil conditions, and seasonal changes allows us to provide the most effective pond care solutions.",
      serviceAreas: "We proudly serve all areas of Provo and surrounding communities. Our service area includes residential neighborhoods, commercial districts, and local attractions throughout the Provo region."
    }
  };

  return <CityPageTemplate {...cityData} />;
};

export default ProvoPage;