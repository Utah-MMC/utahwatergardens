
// Add this to your App.js or routing configuration
import RandomizedServiceAreaPage from './components/RandomizedServiceAreaPage';

// Dynamic service area routes
<Route path="/:serviceType/:citySlug" component={RandomizedServiceAreaPage} />

// Examples of URLs this will handle:
// /pond-cleaning/salt-lake-city
// /pond-dredging/west-jordan  
// /pond-construction/sandy
// /harvesting/provo
