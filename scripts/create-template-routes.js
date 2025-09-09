#!/usr/bin/env node

/**
 * Create Template Routes Script
 * 
 * This script creates a new App.js file that uses the template system
 * for all service area pages instead of individual imports.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const APP_JS_FILE = path.join(__dirname, '../frontend/src/App.js');
const NEW_APP_JS_FILE = path.join(__dirname, '../frontend/src/App.new.js');
const CITY_DATA_FILE = path.join(__dirname, '../frontend/src/data/cityData.js');

// Read current App.js
const currentAppJs = fs.readFileSync(APP_JS_FILE, 'utf8');

// Read city data
const cityDataContent = fs.readFileSync(CITY_DATA_FILE, 'utf8');
const cityDataMatch = cityDataContent.match(/export const cityData = ({[\s\S]*?});/);
const cityData = eval(`(${cityDataMatch[1]})`);

console.log(`📊 Found ${Object.keys(cityData).length} cities in cityData.js`);

// Create new App.js content
const newAppJsContent = `import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollOptimizer from './components/ScrollOptimizer';
import ScrollPerformanceFix from './components/ScrollPerformanceFix';
import CarouselOptimizer from './components/CarouselOptimizer';
import WaterRipple from './components/WaterRipple.js';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const PlantsFishPage = lazy(() => import('./pages/PlantsFishPage'));
const PondServicesPage = lazy(() => import('./pages/PondServicesPage'));
const PondSuppliesPage = lazy(() => import('./pages/PondSuppliesPage'));
const PondGalleryPage = lazy(() => import('./pages/PondGalleryPage'));
const FreeEstimatePage = lazy(() => import('./pages/FreeEstimatePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PlantDetailPage = lazy(() => import('./pages/PlantDetailPage'));
const WaterLiliesPage = lazy(() => import('./pages/WaterLiliesPage'));
const MarginalPlantsPage = lazy(() => import('./pages/MarginalPlantsPage'));
const FloatingPlantsPage = lazy(() => import('./pages/FloatingPlantsPage'));
const ExpertTeamPage = lazy(() => import('./pages/ExpertTeamPage'));
const PlantExpertsPage = lazy(() => import('./pages/PlantExpertsPage'));
const MaintenanceCrewPage = lazy(() => import('./pages/MaintenanceCrewPage'));

// Template-based service area pages
const CityPageTemplate = lazy(() => import('./components/CityPageTemplate'));

// Service area pages using template
const createCityPage = (citySlug) => {
  return React.lazy(() => import('./data/cityData').then(module => {
    const cityData = module.getCityData(citySlug);
    if (!cityData) {
      return { default: () => <div>City not found</div> };
    }
    return { default: () => React.createElement(CityPageTemplate, cityData) };
  }));
};

// Generate city page components
${Object.keys(cityData).map(citySlug => {
  const cityName = cityData[citySlug].cityName;
  const componentName = cityName.replace(/\s+/g, '') + 'Page';
  return `const ${componentName} = createCityPage('${citySlug}');`;
}).join('\n')}

// Lazy load other pages
const AquaticPlantsPage = lazy(() => import('./pages/AquaticPlantsPage'));
const PondDesignBuildPage = lazy(() => import('./pages/PondDesignBuildPage'));
const PondLinersPage = lazy(() => import('./pages/PondLinersPage'));
const PondCleaningPage = lazy(() => import('./pages/PondCleaningPage'));
const WaterQualityTestingPage = lazy(() => import('./pages/WaterQualityTestingPage'));
const PondMaintenancePage = lazy(() => import('./pages/PondMaintenancePage'));
const TruxorServicePage = lazy(() => import('./pages/TruxorServicePage'));

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Utah Water Gardens - Your Complete Pond & Water Feature Solution</title>
        <meta name="description" content="Utah Water Gardens provides professional pond design, construction, maintenance, and supplies. Expert pond services throughout Utah. Call (801) 590-8516 for free quote." />
        <meta name="keywords" content="pond services, pond construction, pond maintenance, water features, koi ponds, pond supplies, Utah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://utahwatergardens.com" />
      </Helmet>
      
      <Router>
        <ScrollToTop />
        <ScrollOptimizer />
        <ScrollPerformanceFix />
        <CarouselOptimizer />
        <WaterRipple />
        
        <div className="App">
          <Header />
          
          <main className="main-content">
            <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/plants-fish" element={<PlantsFishPage />} />
                <Route path="/pond-services" element={<PondServicesPage />} />
                <Route path="/pond-supplies" element={<PondSuppliesPage />} />
                <Route path="/pond-gallery" element={<PondGalleryPage />} />
                <Route path="/free-estimate" element={<FreeEstimatePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/plants/:slug" element={<PlantDetailPage />} />
                <Route path="/water-lilies" element={<WaterLiliesPage />} />
                <Route path="/marginal-plants" element={<MarginalPlantsPage />} />
                <Route path="/floating-plants" element={<FloatingPlantsPage />} />
                <Route path="/expert-team" element={<ExpertTeamPage />} />
                <Route path="/plant-experts" element={<PlantExpertsPage />} />
                <Route path="/maintenance-crew" element={<MaintenanceCrewPage />} />
                
                {/* Service Area Routes - Template Based */}
${Object.keys(cityData).map(citySlug => {
  const cityName = cityData[citySlug].cityName;
  const componentName = cityName.replace(/\s+/g, '') + 'Page';
  return `                <Route path="/pond-services/${citySlug}" element={<${componentName} />} />`;
}).join('\n')}
                
                {/* Other Service Pages */}
                <Route path="/aquatic-plants" element={<AquaticPlantsPage />} />
                <Route path="/pond-design-build" element={<PondDesignBuildPage />} />
                <Route path="/pond-liners" element={<PondLinersPage />} />
                <Route path="/pond-cleaning" element={<PondCleaningPage />} />
                <Route path="/water-quality-testing" element={<WaterQualityTestingPage />} />
                <Route path="/pond-maintenance" element={<PondMaintenancePage />} />
                <Route path="/truxor-service" element={<TruxorServicePage />} />
                
                {/* 404 Page */}
                <Route path="*" element={<div className="not-found">Page not found</div>} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
`;

// Write new App.js file
fs.writeFileSync(NEW_APP_JS_FILE, newAppJsContent);

console.log('✅ Created new App.js with template-based routes');
console.log(`📈 Added ${Object.keys(cityData).length} service area routes`);
console.log(`📁 New file: ${NEW_APP_JS_FILE}`);

// Create backup of original App.js
const backupFile = APP_JS_FILE + '.backup';
fs.writeFileSync(backupFile, currentAppJs);
console.log(`💾 Backup created: ${backupFile}`);

console.log('🎉 Template routes created successfully!');
console.log('📋 Next steps:');
console.log('   1. Review the new App.js file');
console.log('   2. Test with a few sample pages');
console.log('   3. Replace the original App.js when ready');
