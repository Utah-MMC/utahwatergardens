import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TestCityPage = () => {
  const { citySlug } = useParams();
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '50vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1>Test City Page</h1>
      <p>City Slug: {citySlug}</p>
      <p>This is a test page to verify routing is working.</p>
    </div>
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



export default TestCityPage;
