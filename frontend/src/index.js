import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './index.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import reportWebVitals from './reportWebVitals';

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

// Lazy load other pages
const AquaticPlantsPage = lazy(() => import('./pages/AquaticPlantsPage'));
const KoiGoldfishPage = lazy(() => import('./pages/KoiGoldfishPage'));
const PondDesignBuildPage = lazy(() => import('./pages/PondDesignBuildPage'));
const FiltrationSystemsPage = lazy(() => import('./pages/FiltrationSystemsPage'));
const PondMaintenancePage = lazy(() => import('./pages/PondMaintenancePage'));
const WaterQualityTestingPage = lazy(() => import('./pages/WaterQualityTestingPage'));
const PondCleaningPage = lazy(() => import('./pages/PondCleaningPage'));
const EquipmentRepairPage = lazy(() => import('./pages/EquipmentRepairPage'));
const SeasonalServicesPage = lazy(() => import('./pages/SeasonalServicesPage'));
const PumpsAerationPage = lazy(() => import('./pages/PumpsAerationPage'));
const PondLinersPage = lazy(() => import('./pages/PondLinersPage'));
const WaterTreatmentsPage = lazy(() => import('./pages/WaterTreatmentsPage'));
const PondLightingPage = lazy(() => import('./pages/PondLightingPage'));
const ToolsAccessoriesPage = lazy(() => import('./pages/ToolsAccessoriesPage'));
const CareGuidesPage = lazy(() => import('./pages/CareGuidesPage'));
const PondTipsTricksPage = lazy(() => import('./pages/PondTipsTricksPage'));
const SeasonalCarePage = lazy(() => import('./pages/SeasonalCarePage'));
const TroubleshootingPage = lazy(() => import('./pages/TroubleshootingPage'));
const HarvestingPage = lazy(() => import('./pages/HarvestingPage'));
const LakeDredgingPage = lazy(() => import('./pages/LakeDredgingPage'));
const PondDredgingPage = lazy(() => import('./pages/PondDredgingPage'));
const VideoTutorialsPage = lazy(() => import('./pages/VideoTutorialsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));

// Loading component for Suspense
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '50vh',
    fontSize: '1.2rem',
    color: '#1e40af'
  }}>
    <div>Loading...</div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" href="/images/favicon.ico?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png?v=3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png?v=3" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/android-chrome-512x512.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png?v=3" />
        <link rel="apple-touch-icon" sizes="192x192" href="/images/android-chrome-192x192.png?v=3" />
        <link rel="shortcut icon" href="/images/favicon.ico?v=3" />
        <meta name="theme-color" content="#1e40af" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Navigation Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/plants-fish" element={<PlantsFishPage />} />
                <Route path="/pond-services" element={<PondServicesPage />} />
                <Route path="/pond-supplies" element={<PondSuppliesPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/pond-gallery" element={<PondGalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/free-estimate" element={<FreeEstimatePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/plant/:plantId" element={<PlantDetailPage />} />
                <Route path="/plants-fish/water-lilies" element={<WaterLiliesPage />} />
                <Route path="/plants-fish/marginal-plants" element={<MarginalPlantsPage />} />
                <Route path="/plants-fish/floating-plants" element={<FloatingPlantsPage />} />
                
                {/* Team Pages */}
                <Route path="/team/expert-team" element={<ExpertTeamPage />} />
                <Route path="/team/plant-experts" element={<PlantExpertsPage />} />
                <Route path="/team/maintenance-crew" element={<MaintenanceCrewPage />} />
                
                {/* Legacy routes for backward compatibility */}
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/shop" element={<ShopPage />} />
                
                {/* Plants & Fish Sub-routes */}
                <Route path="/plants-fish/aquatic-plants" element={<AquaticPlantsPage />} />
                <Route path="/plants-fish/koi-goldfish" element={<KoiGoldfishPage />} />
                
                {/* Pond Services Sub-routes */}
                <Route path="/pond-services/design-build" element={<PondDesignBuildPage />} />
                <Route path="/pond-services/maintenance" element={<PondMaintenancePage />} />
                <Route path="/pond-services/water-quality" element={<WaterQualityTestingPage />} />
                <Route path="/pond-services/cleaning" element={<PondCleaningPage />} />
                <Route path="/pond-services/repair" element={<EquipmentRepairPage />} />
                <Route path="/pond-services/seasonal" element={<SeasonalServicesPage />} />
                <Route path="/pond-services/harvesting" element={<HarvestingPage />} />
                <Route path="/pond-services/lake-dredging" element={<LakeDredgingPage />} />
                <Route path="/pond-services/pond-dredging" element={<PondDredgingPage />} />
                
                {/* Pond Supplies Sub-routes */}
                <Route path="/pond-supplies/filtration" element={<FiltrationSystemsPage />} />
                <Route path="/pond-supplies/pumps-aeration" element={<PumpsAerationPage />} />
                <Route path="/pond-supplies/liners" element={<PondLinersPage />} />
                <Route path="/pond-supplies/water-treatments" element={<WaterTreatmentsPage />} />
                <Route path="/pond-supplies/lighting" element={<PondLightingPage />} />
                <Route path="/pond-supplies/tools" element={<ToolsAccessoriesPage />} />
                
                {/* Resources Sub-routes */}
                <Route path="/resources/care-guides" element={<CareGuidesPage />} />
                <Route path="/resources/tips-tricks" element={<PondTipsTricksPage />} />
                <Route path="/resources/seasonal-care" element={<SeasonalCarePage />} />
                <Route path="/resources/troubleshooting" element={<TroubleshootingPage />} />
                <Route path="/resources/video-tutorials" element={<VideoTutorialsPage />} />
                <Route path="/resources/faq" element={<FAQPage />} />
                
                {/* Pond Gallery Sub-routes */}
                <Route path="/pond-gallery/residential" element={<PondGalleryPage />} />
                <Route path="/pond-gallery/commercial" element={<PondGalleryPage />} />
                <Route path="/pond-gallery/koi-ponds" element={<PondGalleryPage />} />
                <Route path="/pond-gallery/water-features" element={<PondGalleryPage />} />
                <Route path="/pond-gallery/before-after" element={<PondGalleryPage />} />
                <Route path="/pond-gallery/customer-projects" element={<PondGalleryPage />} />
                
                {/* Catch-all route for 404 errors */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
