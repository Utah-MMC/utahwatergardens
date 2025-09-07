import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PerformanceMonitor from './components/PerformanceMonitor';
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

// Lazy load service area pages
const SaltLakeCityPage = lazy(() => import('./pages/ServiceAreas/SaltLakeCityPage'));
const WestJordanPage = lazy(() => import('./pages/ServiceAreas/WestJordanPage'));
const SandyPage = lazy(() => import('./pages/ServiceAreas/SandyPage'));
const MurrayPage = lazy(() => import('./pages/ServiceAreas/MurrayPage'));
const WestValleyCityPage = lazy(() => import('./pages/ServiceAreas/WestValleyCityPage'));
const SouthJordanPage = lazy(() => import('./pages/ServiceAreas/SouthJordanPage'));
const RivertonPage = lazy(() => import('./pages/ServiceAreas/RivertonPage'));
const HerrimanPage = lazy(() => import('./pages/ServiceAreas/HerrimanPage'));
const BluffdalePage = lazy(() => import('./pages/ServiceAreas/BluffdalePage'));
const DraperPage = lazy(() => import('./pages/ServiceAreas/DraperPage'));
const MidvalePage = lazy(() => import('./pages/ServiceAreas/MidvalePage'));
const TaylorsvillePage = lazy(() => import('./pages/ServiceAreas/TaylorsvillePage'));
const KearnsPage = lazy(() => import('./pages/ServiceAreas/KearnsPage'));
const MagnaPage = lazy(() => import('./pages/ServiceAreas/MagnaPage'));
const MillcreekPage = lazy(() => import('./pages/ServiceAreas/MillcreekPage'));
const HolladayPage = lazy(() => import('./pages/ServiceAreas/HolladayPage'));
const CottonwoodHeightsPage = lazy(() => import('./pages/ServiceAreas/CottonwoodHeightsPage'));
const ClearfieldPage = lazy(() => import('./pages/ServiceAreas/ClearfieldPage'));
const BountifulPage = lazy(() => import('./pages/ServiceAreas/BountifulPage'));
const KaysvillePage = lazy(() => import('./pages/ServiceAreas/KaysvillePage'));
const FarmingtonPage = lazy(() => import('./pages/ServiceAreas/FarmingtonPage'));
const CentervillePage = lazy(() => import('./pages/ServiceAreas/CentervillePage'));
const NorthSaltLakePage = lazy(() => import('./pages/ServiceAreas/NorthSaltLakePage'));
const WoodsCrossPage = lazy(() => import('./pages/ServiceAreas/WoodsCrossPage'));
const SyracusePage = lazy(() => import('./pages/ServiceAreas/SyracusePage'));
const ClintonPage = lazy(() => import('./pages/ServiceAreas/ClintonPage'));
const RoyPage = lazy(() => import('./pages/ServiceAreas/RoyPage'));
const SouthOgdenPage = lazy(() => import('./pages/ServiceAreas/SouthOgdenPage'));
const WashingtonTerracePage = lazy(() => import('./pages/ServiceAreas/WashingtonTerracePage'));
const RiverdalePage = lazy(() => import('./pages/ServiceAreas/RiverdalePage'));
const PleasantViewPage = lazy(() => import('./pages/ServiceAreas/PleasantViewPage'));
const NorthOgdenPage = lazy(() => import('./pages/ServiceAreas/NorthOgdenPage'));
const OgdenPage = lazy(() => import('./pages/ServiceAreas/OgdenPage'));
const LaytonPage = lazy(() => import('./pages/ServiceAreas/LaytonPage'));
const LehiPage = lazy(() => import('./pages/ServiceAreas/LehiPage'));
const AmericanForkPage = lazy(() => import('./pages/ServiceAreas/AmericanForkPage'));
const PleasantGrovePage = lazy(() => import('./pages/ServiceAreas/PleasantGrovePage'));
const LindonPage = lazy(() => import('./pages/ServiceAreas/LindonPage'));
const SpanishForkPage = lazy(() => import('./pages/ServiceAreas/SpanishForkPage'));
const SpringvillePage = lazy(() => import('./pages/ServiceAreas/SpringvillePage'));
const MapletonPage = lazy(() => import('./pages/ServiceAreas/MapletonPage'));
const PaysonPage = lazy(() => import('./pages/ServiceAreas/PaysonPage'));
const SalemPage = lazy(() => import('./pages/ServiceAreas/SalemPage'));
const CedarHillsPage = lazy(() => import('./pages/ServiceAreas/CedarHillsPage'));
const AlpinePage = lazy(() => import('./pages/ServiceAreas/AlpinePage'));
const HighlandPage = lazy(() => import('./pages/ServiceAreas/HighlandPage'));
const SaratogaSpringsPage = lazy(() => import('./pages/ServiceAreas/SaratogaSpringsPage'));
const EagleMountainPage = lazy(() => import('./pages/ServiceAreas/EagleMountainPage'));
const CedarValleyPage = lazy(() => import('./pages/ServiceAreas/CedarValleyPage'));
const GenolaPage = lazy(() => import('./pages/ServiceAreas/GenolaPage'));
const GoshenPage = lazy(() => import('./pages/ServiceAreas/GoshenPage'));
const WoodlandHillsPage = lazy(() => import('./pages/ServiceAreas/WoodlandHillsPage'));
const ProvoPage = lazy(() => import('./pages/ServiceAreas/ProvoPage'));
const OremPage = lazy(() => import('./pages/ServiceAreas/OremPage'));
const KamasPage = lazy(() => import('./pages/ServiceAreas/KamasPage'));
const OakleyPage = lazy(() => import('./pages/ServiceAreas/OakleyPage'));
const FrancisPage = lazy(() => import('./pages/ServiceAreas/FrancisPage'));
const HoytsvillePage = lazy(() => import('./pages/ServiceAreas/HoytsvillePage'));
const PeoaPage = lazy(() => import('./pages/ServiceAreas/PeoaPage'));
const SamakPage = lazy(() => import('./pages/ServiceAreas/SamakPage'));
const SnydervillePage = lazy(() => import('./pages/ServiceAreas/SnydervillePage'));
const PepperwoodPage = lazy(() => import('./pages/ServiceAreas/PepperwoodPage'));
const RedLedgesPage = lazy(() => import('./pages/ServiceAreas/RedLedgesPage'));
const GrantsvillePage = lazy(() => import('./pages/ServiceAreas/GrantsvillePage'));
const StansburyParkPage = lazy(() => import('./pages/ServiceAreas/StansburyParkPage'));
const LakePointPage = lazy(() => import('./pages/ServiceAreas/LakePointPage'));
const ErdaPage = lazy(() => import('./pages/ServiceAreas/ErdaPage'));
const StocktonPage = lazy(() => import('./pages/ServiceAreas/StocktonPage'));
const VernonPage = lazy(() => import('./pages/ServiceAreas/VernonPage'));
const WendoverPage = lazy(() => import('./pages/ServiceAreas/WendoverPage'));
const DugwayPage = lazy(() => import('./pages/ServiceAreas/DugwayPage'));
const IbapahPage = lazy(() => import('./pages/ServiceAreas/IbapahPage'));
const HeberCityPage = lazy(() => import('./pages/ServiceAreas/HeberCityPage'));
const MidwayPage = lazy(() => import('./pages/ServiceAreas/MidwayPage'));
const CedarCityPage = lazy(() => import('./pages/ServiceAreas/CedarCityPage'));
const StGeorgePage = lazy(() => import('./pages/ServiceAreas/StGeorgePage'));
const MesquitePage = lazy(() => import('./pages/ServiceAreas/MesquitePage'));
const NephiPage = lazy(() => import('./pages/ServiceAreas/NephiPage'));
const MonaPage = lazy(() => import('./pages/ServiceAreas/MonaPage'));
const MantiPage = lazy(() => import('./pages/ServiceAreas/MantiPage'));
const EphraimPage = lazy(() => import('./pages/ServiceAreas/EphraimPage'));
const RichfieldPage = lazy(() => import('./pages/ServiceAreas/RichfieldPage'));
const SalinaPage = lazy(() => import('./pages/ServiceAreas/SalinaPage'));
const DeltaPage = lazy(() => import('./pages/ServiceAreas/DeltaPage'));
const FillmorePage = lazy(() => import('./pages/ServiceAreas/FillmorePage'));
const BeaverPage = lazy(() => import('./pages/ServiceAreas/BeaverPage'));
const MilfordPage = lazy(() => import('./pages/ServiceAreas/MilfordPage'));
const EnochPage = lazy(() => import('./pages/ServiceAreas/EnochPage'));
const ParowanPage = lazy(() => import('./pages/ServiceAreas/ParowanPage'));
const HurricanePage = lazy(() => import('./pages/ServiceAreas/HurricanePage'));
const LaVerkinPage = lazy(() => import('./pages/ServiceAreas/LaVerkinPage'));
const VirginPage = lazy(() => import('./pages/ServiceAreas/VirginPage'));
const SpringdalePage = lazy(() => import('./pages/ServiceAreas/SpringdalePage'));
const IvinsPage = lazy(() => import('./pages/ServiceAreas/IvinsPage'));
const SantaClaraPage = lazy(() => import('./pages/ServiceAreas/SantaClaraPage'));
const WashingtonPage = lazy(() => import('./pages/ServiceAreas/WashingtonPage'));
const LeedsPage = lazy(() => import('./pages/ServiceAreas/LeedsPage'));
const CoalvillePage = lazy(() => import('./pages/ServiceAreas/CoalvillePage'));
const ParkCityPage = lazy(() => import('./pages/ServiceAreas/ParkCityPage'));
const TooelePage = lazy(() => import('./pages/ServiceAreas/TooelePage'));

// Lazy load other pages
const AquaticPlantsPage = lazy(() => import('./pages/AquaticPlantsPage'));
const KoiGoldfishPage = lazy(() => import('./pages/KoiGoldfishPage'));
const WaterLiliesPage = lazy(() => import('./pages/WaterLiliesPage'));
const FloatingPlantsPage = lazy(() => import('./pages/FloatingPlantsPage'));
const PondDesignBuildPage = lazy(() => import('./pages/PondDesignBuildPage'));
const FiltrationSystemsPage = lazy(() => import('./pages/FiltrationSystemsPage'));
const MarginalPlantsPage = lazy(() => import('./pages/MarginalPlantsPage'));
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
const TruxorServicePage = lazy(() => import('./pages/TruxorServicePage'));
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

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <WaterRipple />
        <div className="App">
        <PerformanceMonitor />
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
            
            {/* Legacy routes for backward compatibility */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            
            {/* Plants & Fish Sub-routes */}
            <Route path="/plants-fish/aquatic-plants" element={<AquaticPlantsPage />} />
            <Route path="/plants-fish/koi-goldfish" element={<KoiGoldfishPage />} />
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
            <Route path="/pond-services/truxor-t50" element={<TruxorServicePage />} />
            
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
            
            {/* Service Area Routes */}
            <Route path="/pond-services/salt-lake-city" element={<SaltLakeCityPage />} />
            <Route path="/pond-services/west-jordan" element={<WestJordanPage />} />
            <Route path="/pond-services/sandy" element={<SandyPage />} />
            <Route path="/pond-services/murray" element={<MurrayPage />} />
            <Route path="/pond-services/west-valley-city" element={<WestValleyCityPage />} />
            <Route path="/pond-services/south-jordan" element={<SouthJordanPage />} />
            <Route path="/pond-services/riverton" element={<RivertonPage />} />
            <Route path="/pond-services/herriman" element={<HerrimanPage />} />
            <Route path="/pond-services/bluffdale" element={<BluffdalePage />} />
            <Route path="/pond-services/draper" element={<DraperPage />} />
            <Route path="/pond-services/midvale" element={<MidvalePage />} />
            <Route path="/pond-services/taylorsville" element={<TaylorsvillePage />} />
            <Route path="/pond-services/kearns" element={<KearnsPage />} />
            <Route path="/pond-services/magna" element={<MagnaPage />} />
            <Route path="/pond-services/millcreek" element={<MillcreekPage />} />
            <Route path="/pond-services/holladay" element={<HolladayPage />} />
            <Route path="/pond-services/cottonwood-heights" element={<CottonwoodHeightsPage />} />
            <Route path="/pond-services/clearfield" element={<ClearfieldPage />} />
            <Route path="/pond-services/bountiful" element={<BountifulPage />} />
            <Route path="/pond-services/kaysville" element={<KaysvillePage />} />
            <Route path="/pond-services/farmington" element={<FarmingtonPage />} />
            <Route path="/pond-services/centerville" element={<CentervillePage />} />
            <Route path="/pond-services/north-salt-lake" element={<NorthSaltLakePage />} />
            <Route path="/pond-services/woods-cross" element={<WoodsCrossPage />} />
            <Route path="/pond-services/syracuse" element={<SyracusePage />} />
            <Route path="/pond-services/clinton" element={<ClintonPage />} />
            <Route path="/pond-services/roy" element={<RoyPage />} />
            <Route path="/pond-services/south-ogden" element={<SouthOgdenPage />} />
            <Route path="/pond-services/washington-terrace" element={<WashingtonTerracePage />} />
            <Route path="/pond-services/riverdale" element={<RiverdalePage />} />
            <Route path="/pond-services/pleasant-view" element={<PleasantViewPage />} />
            <Route path="/pond-services/north-ogden" element={<NorthOgdenPage />} />
            <Route path="/pond-services/ogden" element={<OgdenPage />} />
            <Route path="/pond-services/layton" element={<LaytonPage />} />
            <Route path="/pond-services/lehi" element={<LehiPage />} />
            <Route path="/pond-services/american-fork" element={<AmericanForkPage />} />
            <Route path="/pond-services/pleasant-grove" element={<PleasantGrovePage />} />
            <Route path="/pond-services/lindon" element={<LindonPage />} />
            <Route path="/pond-services/spanish-fork" element={<SpanishForkPage />} />
            <Route path="/pond-services/springville" element={<SpringvillePage />} />
            <Route path="/pond-services/mapleton" element={<MapletonPage />} />
            <Route path="/pond-services/payson" element={<PaysonPage />} />
            <Route path="/pond-services/salem" element={<SalemPage />} />
            <Route path="/pond-services/cedar-hills" element={<CedarHillsPage />} />
            <Route path="/pond-services/alpine" element={<AlpinePage />} />
            <Route path="/pond-services/highland" element={<HighlandPage />} />
            <Route path="/pond-services/saratoga-springs" element={<SaratogaSpringsPage />} />
            <Route path="/pond-services/eagle-mountain" element={<EagleMountainPage />} />
            <Route path="/pond-services/cedar-valley" element={<CedarValleyPage />} />
            <Route path="/pond-services/genola" element={<GenolaPage />} />
            <Route path="/pond-services/goshen" element={<GoshenPage />} />
            <Route path="/pond-services/woodland-hills" element={<WoodlandHillsPage />} />
            <Route path="/pond-services/provo" element={<ProvoPage />} />
            <Route path="/pond-services/orem" element={<OremPage />} />
            <Route path="/pond-services/kamas" element={<KamasPage />} />
            <Route path="/pond-services/oakley" element={<OakleyPage />} />
            <Route path="/pond-services/francis" element={<FrancisPage />} />
            <Route path="/pond-services/hoytsville" element={<HoytsvillePage />} />
            <Route path="/pond-services/peoa" element={<PeoaPage />} />
            <Route path="/pond-services/samak" element={<SamakPage />} />
            <Route path="/pond-services/snyderville" element={<SnydervillePage />} />
            <Route path="/pond-services/pepperwood" element={<PepperwoodPage />} />
            <Route path="/pond-services/red-ledges" element={<RedLedgesPage />} />
            <Route path="/pond-services/grantsville" element={<GrantsvillePage />} />
            <Route path="/pond-services/stansbury-park" element={<StansburyParkPage />} />
            <Route path="/pond-services/lake-point" element={<LakePointPage />} />
            <Route path="/pond-services/erda" element={<ErdaPage />} />
            <Route path="/pond-services/stockton" element={<StocktonPage />} />
            <Route path="/pond-services/vernon" element={<VernonPage />} />
            <Route path="/pond-services/wendover" element={<WendoverPage />} />
            <Route path="/pond-services/dugway" element={<DugwayPage />} />
            <Route path="/pond-services/ibapah" element={<IbapahPage />} />
            <Route path="/pond-services/heber-city" element={<HeberCityPage />} />
            <Route path="/pond-services/midway" element={<MidwayPage />} />
            <Route path="/pond-services/cedar-city" element={<CedarCityPage />} />
            <Route path="/pond-services/st-george" element={<StGeorgePage />} />
            <Route path="/pond-services/mesquite" element={<MesquitePage />} />
            <Route path="/pond-services/nephi" element={<NephiPage />} />
            <Route path="/pond-services/mona" element={<MonaPage />} />
            <Route path="/pond-services/manti" element={<MantiPage />} />
            <Route path="/pond-services/ephraim" element={<EphraimPage />} />
            <Route path="/pond-services/richfield" element={<RichfieldPage />} />
            <Route path="/pond-services/salina" element={<SalinaPage />} />
            <Route path="/pond-services/delta" element={<DeltaPage />} />
            <Route path="/pond-services/fillmore" element={<FillmorePage />} />
            <Route path="/pond-services/beaver" element={<BeaverPage />} />
            <Route path="/pond-services/milford" element={<MilfordPage />} />
            <Route path="/pond-services/enoch" element={<EnochPage />} />
            <Route path="/pond-services/parowan" element={<ParowanPage />} />
            <Route path="/pond-services/hurricane" element={<HurricanePage />} />
            <Route path="/pond-services/la-verkin" element={<LaVerkinPage />} />
            <Route path="/pond-services/virgin" element={<VirginPage />} />
            <Route path="/pond-services/springdale" element={<SpringdalePage />} />
            <Route path="/pond-services/ivins" element={<IvinsPage />} />
            <Route path="/pond-services/santa-clara" element={<SantaClaraPage />} />
            <Route path="/pond-services/washington" element={<WashingtonPage />} />
            <Route path="/pond-services/leeds" element={<LeedsPage />} />
            <Route path="/pond-services/coalville" element={<CoalvillePage />} />
            <Route path="/pond-services/park-city" element={<ParkCityPage />} />
            <Route path="/pond-services/tooele" element={<TooelePage />} />
            
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
          </Suspense>
        </main>
        <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
