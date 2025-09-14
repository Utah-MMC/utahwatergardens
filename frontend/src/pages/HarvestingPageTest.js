import React from 'react';
import SEO from '../components/SEO';

const HarvestingPageTest = () => {
  return (
    <>
      <SEO 
        title="Test Page"
        description="Test description"
        keywords="test"
        canonical="https://utahwatergardens.com/test"
        ogTitle="Test"
        ogDescription="Test"
        ogImage="/images/test.jpg"
        twitterCard="summary_large_image"
      />
      <div className="harvesting-page">
        <h1>Test Page</h1>
        <p>This is a test page to check if the structure works.</p>
      </div>
    </>
  );
};

export default HarvestingPageTest;
