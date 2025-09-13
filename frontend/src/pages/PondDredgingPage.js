import React from 'react';
import { Link } from 'react-router-dom';
import PondDredgingTemplate from '../components/PondDredgingTemplate';

const PondDredgingPage = () => {
  return (
    <PondDredgingTemplate
      cityName="Utah"
      citySlug="utah"
      state="Utah"
      phoneNumber="(801) 590-8516"
      heroBackgroundImage="/images/pondDredging-topaz-enhance-3.9x.jpeg"
      heroBackgroundImageAlt="Professional pond dredging equipment in action"
      landmarks={[
        "Great Salt Lake",
        "Utah Lake",
        "Bear Lake",
        "Flaming Gorge Reservoir",
        "Lake Powell"
      ]}
      businessDistricts={[
        "Salt Lake City",
        "Provo",
        "Ogden",
        "St. George",
        "Park City"
      ]}
    />
  );
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



export default PondDredgingPage;
