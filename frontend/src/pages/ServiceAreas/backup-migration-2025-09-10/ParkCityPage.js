import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const ParkCityPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="ParkCity"
      citySlug="parkcity"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default ParkCityPage;