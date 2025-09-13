import React from 'react';
import { Link } from 'react-router-dom';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Pond-cleaningStansburyParkPage = () => {
  const cityData = getCityData('stansburypark');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
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



export default Pond-cleaningStansburyParkPage;