import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const ParkCityPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="ParkCityPage"
      citySlug="parkcitypage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default ParkCityPagePage;