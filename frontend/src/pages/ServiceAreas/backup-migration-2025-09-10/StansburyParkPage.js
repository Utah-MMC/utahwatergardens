import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const StansburyParkPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="StansburyPark"
      citySlug="stansburypark"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default StansburyParkPage;