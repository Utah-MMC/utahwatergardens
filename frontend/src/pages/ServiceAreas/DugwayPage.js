import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const DugwayPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Dugway"
      citySlug="dugway"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default DugwayPage;