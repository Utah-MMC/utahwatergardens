# Utah Water Gardens Service Areas Template System

## Overview

This template system provides a centralized way to manage all city pages with SEO-optimized content of 1500+ words. When you make changes to the template, they automatically apply to all city pages, ensuring consistency and easy maintenance.

## How It Works

### 1. Template Component (`CityPageTemplate.js`)
- Located at: `frontend/src/components/CityPageTemplate.js`
- Contains the complete page structure and layout
- Includes all SEO elements, content sections, and styling
- Generates metadata dynamically based on city data

### 2. City Data Configuration (`cityData.js`)
- Located at: `frontend/src/data/cityData.js`
- Contains all city-specific information
- Easy to add new cities or modify existing ones
- Centralized content management

### 3. Service Areas Section (`ServiceAreasSection.js`)
- Located at: `frontend/src/components/ServiceAreasSection.js`
- Interactive component for main pages
- Expandable county/city navigation
- Statistics and coverage information

### 4. Individual City Pages
- Each city page imports the template and city data
- Minimal code required per city
- Consistent structure across all pages

## Adding a New City

### Step 1: Add City Data
Add your new city to the `cityData` object in `frontend/src/data/cityData.js`:

```javascript
'new-city': {
  cityName: 'New City',
  citySlug: 'new-city',
  state: 'UT',
  phoneNumber: '(801) 590-8516',
  latitude: '40.7608',
  longitude: '-111.8910',
  landmarks: [
    {
      name: 'City Hall',
      address: '123 Main St, New City, UT 84000',
      url: 'https://www.newcity.gov/',
    },
    // Add more landmarks...
  ],
  businessDistricts: [
    {
      name: 'Downtown',
      description: 'Business district with office buildings',
      link: '/pond-services/new-city',
    },
    // Add more districts...
  ],
  permitInfo: {
    cityName: 'New City',
    phoneNumber: '(801) 555-1234',
    requirements: 'Contact New City for permit requirements and applications.',
  },
  contentSections: {
    overview: 'Utah Water Gardens provides comprehensive pond services throughout New City, Utah...',
    residentialServices: [
      'Custom pond design and construction',
      'Koi pond installation and maintenance',
      // Add more services...
    ],
    commercialServices: [
      'Commercial pond design and installation',
      'Business water features',
      // Add more services...
    ],
    whyChooseUs: 'When you need reliable pond services in New City...',
    pondSizes: [
      {
        size: 'Small Garden Pond',
        description: 'Perfect for intimate spaces and small yards',
        useCases: ['Patio water features', 'Small garden ponds', 'Fountain installations'],
      },
      // Add more sizes...
    ],
    localInfo: 'New City is home to several popular attractions...',
    serviceAreas: 'We provide pond services throughout New City...',
  },
  nearbyAreas: [
    'Nearby City 1', 'Nearby City 2', 'Nearby City 3'
  ],
},
```

### Step 2: Create City Page
Create a new file at `frontend/src/pages/ServiceAreas/NewCityPage.js`:

```javascript
import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const NewCityPage = () => {
  const cityData = getCityData('new-city');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default NewCityPage;
```

### Step 3: Add Route
Add the route to `frontend/src/App.js`:

```javascript
// Import the new page
const NewCityPage = lazy(() => import('./pages/ServiceAreas/NewCityPage'));

// Add the route
<Route path="/pond-services/new-city" element={<NewCityPage />} />
```

## Making Changes That Affect All Pages

### Template Changes
To modify the layout, styling, or structure of all city pages:

1. Edit `frontend/src/components/CityPageTemplate.js`
2. Changes automatically apply to all cities using the template
3. Test on one city page to verify changes

### Content Changes
To update content that applies to all cities:

1. Edit the `contentSections` in `frontend/src/data/cityData.js`
2. Update the specific sections you want to change
3. Changes apply to all cities with that content

### Adding New Sections
To add a new content section to all pages:

1. Update the `CityData` interface in `cityData.js`
2. Add the new section to the template component
3. Add the content for each city in the `cityData` object

## SEO Features

### Automatic SEO Elements
- Dynamic title and meta description generation
- Open Graph and Twitter Card support
- Canonical URLs
- Geographic meta tags
- Structured data support

### Content Optimization
- 1500+ words of unique content per page
- City-specific landmarks and attractions
- Local business information
- Internal linking structure
- FAQ sections for long-tail keywords

## Content Structure

Each city page includes:

1. **Hero Section** - City name, description, and CTAs
2. **Location Overview** - Local expertise and landmarks
3. **Services** - Residential and commercial services
4. **Why Choose Us** - Local benefits and features
5. **Pond Sizes** - Available sizes with use cases
6. **Local Information** - Landmarks and business districts
7. **Process Guide** - Step-by-step installation process
8. **FAQ Section** - Common questions and answers
9. **Nearby Areas** - Related city links
10. **CTA Section** - Final call-to-action

## Service Areas Section

The `ServiceAreasSection` component provides:

- **Interactive County Navigation** - Click to expand cities
- **Comprehensive Coverage** - All 8 Utah counties
- **Statistics Display** - Service coverage metrics
- **Call-to-Action** - Contact information and CTAs

### Usage on Main Pages

```javascript
import ServiceAreasSection from '../components/ServiceAreasSection';

// In your component
<ServiceAreasSection />
```

## Best Practices

### Adding New Cities
1. Research local landmarks and attractions
2. Find accurate permit information
3. Include relevant business districts
4. Write unique content for each section
5. Use proper SEO keywords

### Content Updates
1. Keep content fresh and relevant
2. Update permit information regularly
3. Add new landmarks as they develop
4. Monitor local business changes
5. Update phone numbers and contact info

### SEO Maintenance
1. Regularly update meta descriptions
2. Monitor keyword performance
3. Add new internal links
4. Update local business information
5. Keep content length optimal (1500+ words)

## File Structure

```
frontend/src/
├── components/
│   ├── CityPageTemplate.js        # Main template component
│   ├── CityPageTemplate.css       # Template styles
│   ├── ServiceAreasSection.js     # Service areas component
│   └── ServiceAreasSection.css    # Service areas styles
├── data/
│   └── cityData.js                # City data configuration
├── pages/ServiceAreas/
│   ├── SaltLakeCityPageNew.js     # Example city page
│   ├── WestJordanPageNew.js       # Example city page
│   └── [other-cities]/            # Other city pages
└── App.js                         # Routes configuration
```

## Benefits

1. **Consistency** - All pages follow the same structure
2. **Maintainability** - Changes in one place affect all pages
3. **SEO Optimization** - Built-in SEO best practices
4. **Scalability** - Easy to add new cities
5. **Content Management** - Centralized content control
6. **Performance** - Optimized for speed and user experience
7. **User Experience** - Interactive service areas navigation

## Migration from Existing Pages

To migrate existing city pages to the new template system:

1. **Extract Content** - Pull unique content from existing pages
2. **Add to cityData.js** - Add city data to the configuration
3. **Create New Page** - Use the template system
4. **Update Routes** - Point to the new page
5. **Test & Verify** - Ensure all functionality works
6. **Remove Old Page** - Delete the old page file

## Troubleshooting

### Common Issues
1. **City not found error** - Check city slug in `cityData.js`
2. **Missing content** - Verify all required fields are filled
3. **SEO issues** - Check metadata generation
4. **Styling problems** - Verify template component changes

### Testing
1. Test changes on a single city page first
2. Verify all links work correctly
3. Check mobile responsiveness
4. Validate SEO elements
5. Test form functionality

## Future Enhancements

Potential improvements to the system:

1. **Dynamic Content** - Pull content from CMS
2. **Image Management** - City-specific images
3. **Reviews Integration** - Local review display
4. **Pricing Calculator** - Dynamic pricing by location
5. **Appointment Booking** - Integrated scheduling
6. **Analytics Tracking** - Enhanced performance monitoring

This template system ensures all your city pages are SEO-optimized, content-rich, and easy to maintain while providing a consistent user experience across your entire site.
