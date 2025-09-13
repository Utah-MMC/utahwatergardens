import React from 'react';
import { Link } from 'react-router-dom';
import PondHarvestingTemplate from '../../components/PondHarvestingTemplate';

const HarvestingTremontonPage = () => {
  const cityData = {
    cityName: 'Tremonton',
    citySlug: 'tremonton',
    state: 'Utah',
    phoneNumber: '(801) 590-8516',
    landmarks: [
      // Add local landmarks here
    ],
    businessDistricts: [
      // Add local business districts here
    ],
    contentSections: {
      localInfo: `Tremonton is a beautiful Utah community known for its stunning natural landscapes and outdoor recreation opportunities. Our pond and lake harvesting services in Tremonton help maintain the natural beauty of this area while preserving water quality for both recreational and ecological purposes.`,
      serviceAreas: `We provide professional pond and lake harvesting services throughout Tremonton and the surrounding area, including residential neighborhoods, commercial properties, and local water features.`
    }
  };

  return <PondHarvestingTemplate {...cityData} />;
};


// Internal Links for SEO


const InternalLinks = () => (


  <div style={{ display: 'none' }}>


    <Link to="/contact">utah water gardens</Link>


    <Link to="/plants-fish">utah water gardens</Link>


    <Link to="/pondsupplies">utah water gardens</Link>


    <Link to="/aquatic-plants">utah water gardens</Link>


    <Link to="/fish-koi">utah water gardens</Link>


    <Link to="/">utah water gardens</Link>


  </div>


);



export default HarvestingTremontonPage;