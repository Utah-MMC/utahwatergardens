import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CityPageTemplate from '../components/CityPageTemplate';
import { utahCitiesByCounty, createCityUrl } from '../data/utahCities';
import { reservedPaths } from '../utils/urlAudit';

const CityPage = () => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    // Check if this is a reserved path
    if (reservedPaths.includes(cityName)) {
      setCityData(null);
      return;
    }
    
    // Find the city data
    const findCityData = () => {
      for (const [county, cities] of Object.entries(utahCitiesByCounty)) {
        for (const city of cities) {
          if (createCityUrl(city) === cityName) {
            return { city, county };
          }
        }
      }
      return null;
    };

    const found = findCityData();
    setCityData(found);
  }, [cityName]);

  if (!cityData) {
    return (
      <div className="city-page">
        <div className="container">
          <h1>City Not Found</h1>
          <p>The city you're looking for doesn't exist in our service areas.</p>
          <Link to="/pond-services" className="btn btn-primary">
            View All Service Areas
          </Link>
        </div>
      </div>
    );
  }

  const { city, county } = cityData;
  const cityUrl = createCityUrl(city);

  // Create comprehensive city data for the template
  const templateData = {
    cityName: city,
    citySlug: cityUrl,
    state: "Utah",
    phoneNumber: "(801) 590-8516",
    latitude: "40.7608", // Default to Salt Lake City coordinates
    longitude: "-111.8910",
    landmarks: [
      {
        name: `${city} City Center`,
        address: `${city}, ${county}, UT`,
        description: "Central business and cultural district"
      },
      {
        name: `${city} Parks`,
        address: `${city}, ${county}, UT`,
        description: "Local parks and recreational areas"
      }
    ],
    businessDistricts: [
      {
        name: `Downtown ${city}`,
        description: "Central business district with commercial properties",
        link: `/pond-services/${cityUrl}`
      },
      {
        name: `${city} Residential Areas`,
        description: "Residential neighborhoods and communities",
        link: `/pond-services/${cityUrl}`
      }
    ],
    permitInfo: {
      cityName: city,
      phoneNumber: "(801) 555-1234",
      requirements: `Contact ${city} for pond and water feature permit requirements and applications.`
    },
    contentSections: {
      overview: `Utah Water Gardens provides comprehensive pond and water feature services throughout ${city}, ${county}, Utah. Our local expertise in ${city}'s unique climate, water conditions, and seasonal changes ensures your pond thrives year-round. From custom pond design and construction to ongoing maintenance and repair services, we're your trusted partner for all water feature needs in the ${city} area.`,
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
      whyChooseUs: `Utah Water Gardens has been serving ${city} and surrounding areas for over 15 years. Our local expertise, professional equipment, and commitment to quality make us the premier choice for pond services in ${city}.`,
      localInfo: `${city} is a beautiful city in ${county}, Utah with a growing community of water garden enthusiasts. Our local knowledge of ${city}'s climate, soil conditions, and seasonal changes allows us to provide the most effective pond care solutions.`,
      serviceAreas: `We proudly serve all areas of ${city} and surrounding communities. Our service area includes residential neighborhoods, commercial districts, and local attractions throughout the ${city} region.`
    }
  };

  return <CityPageTemplate {...templateData} />;
};

export default CityPage;
