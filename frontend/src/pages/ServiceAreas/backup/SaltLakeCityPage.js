import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';

const SaltLakeCityPage = () => {
  const cityData = {
    cityName: "Salt Lake City",
    citySlug: "salt-lake-city",
    state: "Utah",
    phoneNumber: "(801) 590-8516",
    latitude: "40.7608",
    longitude: "-111.8910",
    landmarks: [
      {
        name: "Temple Square",
        address: "50 W North Temple, Salt Lake City, UT 84150",
        description: "Historic religious and cultural center"
      },
      {
        name: "Liberty Park",
        address: "600 E 900 S, Salt Lake City, UT 84105",
        description: "Large urban park with pond and gardens"
      },
      {
        name: "Memory Grove Park",
        address: "300 Canyon Rd, Salt Lake City, UT 84103",
        description: "Beautiful park with water features and memorials"
      },
      {
        name: "Red Butte Garden",
        address: "300 Wakara Way, Salt Lake City, UT 84108",
        description: "Botanical garden with water features"
      }
    ],
    businessDistricts: [
      {
        name: "Downtown Salt Lake City",
        description: "Central business district with office buildings and commercial properties",
        link: "/pond-services/salt-lake-city"
      },
      {
        name: "Sugar House",
        description: "Historic shopping and entertainment district",
        link: "/pond-services/salt-lake-city"
      },
      {
        name: "The Avenues",
        description: "Residential neighborhood with historic homes",
        link: "/pond-services/salt-lake-city"
      }
    ],
    permitInfo: {
      cityName: "Salt Lake City",
      phoneNumber: "(801) 535-6000",
      requirements: "Contact Salt Lake City for pond and water feature permit requirements and applications."
    },
    contentSections: {
      overview: "Utah Water Gardens provides comprehensive pond and water feature services throughout Salt Lake City, Utah. Our local expertise in Salt Lake City's unique climate, water conditions, and seasonal changes ensures your pond thrives year-round. From custom pond design and construction to ongoing maintenance and repair services, we're your trusted partner for all water feature needs in the Salt Lake City area.",
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
      whyChooseUs: "Utah Water Gardens has been serving Salt Lake City and surrounding areas for over 15 years. Our local expertise, professional equipment, and commitment to quality make us the premier choice for pond services in Salt Lake City.",
      localInfo: "Salt Lake City is a beautiful city in Utah with a growing community of water garden enthusiasts. Our local knowledge of Salt Lake City's climate, soil conditions, and seasonal changes allows us to provide the most effective pond care solutions.",
      serviceAreas: "We proudly serve all areas of Salt Lake City and surrounding communities. Our service area includes residential neighborhoods, commercial districts, and local attractions throughout the Salt Lake City region."
    }
  };

  return <CityPageTemplate {...cityData} />;
};

export default SaltLakeCityPage;
