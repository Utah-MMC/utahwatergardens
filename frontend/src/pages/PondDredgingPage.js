import React from 'react';
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

export default PondDredgingPage;
