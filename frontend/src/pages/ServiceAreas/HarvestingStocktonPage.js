import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const StocktonPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="StocktonPage"
      citySlug="stocktonpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default StocktonPagePage;