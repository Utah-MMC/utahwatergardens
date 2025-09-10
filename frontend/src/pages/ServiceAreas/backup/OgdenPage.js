import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';

const OgdenPage = () => {
  const cityData = {
    cityName: "Ogden",
    citySlug: "ogden",
    state: "Utah",
    phoneNumber: "(801) 590-8516",
    latitude: "41.2230",
    longitude: "-111.9738",
    landmarks: [
      {
        name: "Ogden Canyon",
        address: "Ogden Canyon, UT",
        description: "Scenic canyon with waterfalls and natural beauty"
      },
      {
        name: "Weber State University",
        address: "3848 Harrison Blvd, Ogden, UT 84408",
        description: "University campus with beautiful grounds"
      },
      {
        name: "Union Station",
        address: "2501 Wall Ave, Ogden, UT 84401",
        description: "Historic train station and museum"
      },
      {
        name: "Ogden River Parkway",
        address: "Ogden, UT",
        description: "Beautiful parkway along the Ogden River"
      }
    ],
    businessDistricts: [
      {
        name: "Downtown Ogden",
        description: "Historic downtown with shops and restaurants",
        link: "/pond-services/ogden"
      },
      {
        name: "Washington Boulevard",
        description: "Main commercial corridor",
        link: "/pond-services/ogden"
      },
      {
        name: "Newgate Mall Area",
        description: "Shopping and entertainment district",
        link: "/pond-services/ogden"
      }
    ],
    permitInfo: {
      cityName: "Ogden",
      phoneNumber: "(801) 629-8000",
      requirements: "Contact Ogden City for pond and water feature permit requirements and applications."
    },
    contentSections: {
      overview: "Utah Water Gardens provides comprehensive pond and water feature services throughout Ogden, Utah. Our local expertise in Ogden's unique climate, water conditions, and seasonal changes ensures your pond thrives year-round. From custom pond design and construction to ongoing maintenance and repair services, we're your trusted partner for all water feature needs in the Ogden area.",
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
      whyChooseUs: "Utah Water Gardens has been serving Ogden and surrounding areas for over 15 years. Our local expertise, professional equipment, and commitment to quality make us the premier choice for pond services in Ogden.",
      localInfo: "Ogden is a beautiful city in Utah with a growing community of water garden enthusiasts. Our local knowledge of Ogden's climate, soil conditions, and seasonal changes allows us to provide the most effective pond care solutions.",
      serviceAreas: "We proudly serve all areas of Ogden and surrounding communities. Our service area includes residential neighborhoods, commercial districts, and local attractions throughout the Ogden region."
    }
  };

  return <CityPageTemplate {...cityData} />;
};

export default OgdenPage;