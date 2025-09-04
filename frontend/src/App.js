import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import ResourcesPage from './pages/ResourcesPage';

// New pages based on sitemap
import PlantsFishPage from './pages/PlantsFishPage';
import PondServicesPage from './pages/PondServicesPage';
import PondSuppliesPage from './pages/PondSuppliesPage';
import PondGalleryPage from './pages/PondGalleryPage';

// Individual dropdown menu pages
import AquaticPlantsPage from './pages/AquaticPlantsPage';
import KoiGoldfishPage from './pages/KoiGoldfishPage';
import TropicalFishPage from './pages/TropicalFishPage';
import WaterLiliesPage from './pages/WaterLiliesPage';
import FloatingPlantsPage from './pages/FloatingPlantsPage';
import PondDesignBuildPage from './pages/PondDesignBuildPage';
import FiltrationSystemsPage from './pages/FiltrationSystemsPage';
import MarginalPlantsPage from './pages/MarginalPlantsPage';
import PondMaintenancePage from './pages/PondMaintenancePage';
import WaterQualityTestingPage from './pages/WaterQualityTestingPage';
import PondCleaningPage from './pages/PondCleaningPage';
import EquipmentRepairPage from './pages/EquipmentRepairPage';
import SeasonalServicesPage from './pages/SeasonalServicesPage';
import PumpsAerationPage from './pages/PumpsAerationPage';
import PondLinersPage from './pages/PondLinersPage';
import WaterTreatmentsPage from './pages/WaterTreatmentsPage';
import PondLightingPage from './pages/PondLightingPage';
import ToolsAccessoriesPage from './pages/ToolsAccessoriesPage';
import CareGuidesPage from './pages/CareGuidesPage';
import PondTipsTricksPage from './pages/PondTipsTricksPage';
import SeasonalCarePage from './pages/SeasonalCarePage';
import TroubleshootingPage from './pages/TroubleshootingPage';
import HarvestingPage from './pages/HarvestingPage';
import LakeDredgingPage from './pages/LakeDredgingPage';
import PondDredgingPage from './pages/PondDredgingPage';
import VideoTutorialsPage from './pages/VideoTutorialsPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Main Navigation Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/plants-fish" element={<PlantsFishPage />} />
            <Route path="/pond-services" element={<PondServicesPage />} />
            <Route path="/pond-supplies" element={<PondSuppliesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/pond-gallery" element={<PondGalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Legacy routes for backward compatibility */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            
            {/* Plants & Fish Sub-routes */}
            <Route path="/plants-fish/aquatic-plants" element={<AquaticPlantsPage />} />
            <Route path="/plants-fish/koi-goldfish" element={<KoiGoldfishPage />} />
            <Route path="/plants-fish/tropical-fish" element={<TropicalFishPage />} />
            <Route path="/plants-fish/water-lilies" element={<WaterLiliesPage />} />
            <Route path="/plants-fish/floating-plants" element={<FloatingPlantsPage />} />
            <Route path="/plants-fish/marginal-plants" element={<MarginalPlantsPage />} />
            
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
            
            {/* Additional Service Routes from Sitemap */}
            <Route path="/pond-consultations" element={<PondServicesPage />} />
            <Route path="/pond-maintenance" element={<PondServicesPage />} />
            <Route path="/pond-cleaning" element={<PondServicesPage />} />
            <Route path="/pond-construction" element={<PondServicesPage />} />
            <Route path="/pond-repair-and-rebuild" element={<PondServicesPage />} />
            <Route path="/pond-and-lake-dredging" element={<PondServicesPage />} />
            <Route path="/pond-filters" element={<PondSuppliesPage />} />
            <Route path="/pumps" element={<PondSuppliesPage />} />
            <Route path="/plant-delivery" element={<PlantsFishPage />} />
            <Route path="/schedule" element={<ContactPage />} />
            
            {/* Resource Article Routes */}
            <Route path="/resources/finding-a-leak-in-your-pond" element={<ResourcesPage />} />
            <Route path="/resources/pondwaterloss" element={<ResourcesPage />} />
            
            {/* Plant Specific Routes */}
            <Route path="/plants" element={<PlantsFishPage />} />
            <Route path="/fish-and-koi" element={<PlantsFishPage />} />
            <Route path="/koi" element={<PlantsFishPage />} />
            <Route path="/aquatic-plants" element={<PlantsFishPage />} />
            
            {/* Privacy and Legal */}
            <Route path="/privacy-and-legal-info" element={<AboutPage />} />
            
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
