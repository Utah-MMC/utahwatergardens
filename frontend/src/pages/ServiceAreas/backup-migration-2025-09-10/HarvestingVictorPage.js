import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const VictorPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="VictorPage"
      citySlug="victorpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default VictorPagePage;