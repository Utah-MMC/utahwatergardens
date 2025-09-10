import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const RedmondPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="RedmondPage"
      citySlug="redmondpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default RedmondPagePage;