import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
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
import TruxorServicePage from './pages/TruxorServicePage';
import VideoTutorialsPage from './pages/VideoTutorialsPage';
import FAQPage from './pages/FAQPage';
import FreeEstimatePage from './pages/FreeEstimatePage';

// Service Area Pages
import SaltLakeCityPage from './pages/ServiceAreas/SaltLakeCityPage';
import WestJordanPage from './pages/ServiceAreas/WestJordanPage';
import SandyPage from './pages/ServiceAreas/SandyPage';
import MurrayPage from './pages/ServiceAreas/MurrayPage';
import WestValleyCityPage from './pages/ServiceAreas/WestValleyCityPage';
import SouthJordanPage from './pages/ServiceAreas/SouthJordanPage';
import RivertonPage from './pages/ServiceAreas/RivertonPage';
import HerrimanPage from './pages/ServiceAreas/HerrimanPage';
import BluffdalePage from './pages/ServiceAreas/BluffdalePage';
import DraperPage from './pages/ServiceAreas/DraperPage';
import MidvalePage from './pages/ServiceAreas/MidvalePage';
import TaylorsvillePage from './pages/ServiceAreas/TaylorsvillePage';
import KearnsPage from './pages/ServiceAreas/KearnsPage';
import MagnaPage from './pages/ServiceAreas/MagnaPage';
import MillcreekPage from './pages/ServiceAreas/MillcreekPage';
import HolladayPage from './pages/ServiceAreas/HolladayPage';
import CottonwoodHeightsPage from './pages/ServiceAreas/CottonwoodHeightsPage';
import ClearfieldPage from './pages/ServiceAreas/ClearfieldPage';
import BountifulPage from './pages/ServiceAreas/BountifulPage';
import KaysvillePage from './pages/ServiceAreas/KaysvillePage';
import FarmingtonPage from './pages/ServiceAreas/FarmingtonPage';
import CentervillePage from './pages/ServiceAreas/CentervillePage';
import NorthSaltLakePage from './pages/ServiceAreas/NorthSaltLakePage';
import WoodsCrossPage from './pages/ServiceAreas/WoodsCrossPage';
import SyracusePage from './pages/ServiceAreas/SyracusePage';
import ClintonPage from './pages/ServiceAreas/ClintonPage';
import RoyPage from './pages/ServiceAreas/RoyPage';
import SouthOgdenPage from './pages/ServiceAreas/SouthOgdenPage';
import WashingtonTerracePage from './pages/ServiceAreas/WashingtonTerracePage';
import RiverdalePage from './pages/ServiceAreas/RiverdalePage';
import PleasantViewPage from './pages/ServiceAreas/PleasantViewPage';
import NorthOgdenPage from './pages/ServiceAreas/NorthOgdenPage';
import OgdenPage from './pages/ServiceAreas/OgdenPage';
import LaytonPage from './pages/ServiceAreas/LaytonPage';
import LehiPage from './pages/ServiceAreas/LehiPage';
import AmericanForkPage from './pages/ServiceAreas/AmericanForkPage';
import PleasantGrovePage from './pages/ServiceAreas/PleasantGrovePage';
import LindonPage from './pages/ServiceAreas/LindonPage';
import SpanishForkPage from './pages/ServiceAreas/SpanishForkPage';
import SpringvillePage from './pages/ServiceAreas/SpringvillePage';
import MapletonPage from './pages/ServiceAreas/MapletonPage';
import PaysonPage from './pages/ServiceAreas/PaysonPage';
import SalemPage from './pages/ServiceAreas/SalemPage';
import CedarHillsPage from './pages/ServiceAreas/CedarHillsPage';
import AlpinePage from './pages/ServiceAreas/AlpinePage';
import HighlandPage from './pages/ServiceAreas/HighlandPage';
import SaratogaSpringsPage from './pages/ServiceAreas/SaratogaSpringsPage';
import EagleMountainPage from './pages/ServiceAreas/EagleMountainPage';
import CedarValleyPage from './pages/ServiceAreas/CedarValleyPage';
import GenolaPage from './pages/ServiceAreas/GenolaPage';
import GoshenPage from './pages/ServiceAreas/GoshenPage';
import WoodlandHillsPage from './pages/ServiceAreas/WoodlandHillsPage';
import ProvoPage from './pages/ServiceAreas/ProvoPage';
import OremPage from './pages/ServiceAreas/OremPage';
import KamasPage from './pages/ServiceAreas/KamasPage';
import OakleyPage from './pages/ServiceAreas/OakleyPage';
import FrancisPage from './pages/ServiceAreas/FrancisPage';
import HoytsvillePage from './pages/ServiceAreas/HoytsvillePage';
import PeoaPage from './pages/ServiceAreas/PeoaPage';
import SamakPage from './pages/ServiceAreas/SamakPage';
import SnydervillePage from './pages/ServiceAreas/SnydervillePage';
import PepperwoodPage from './pages/ServiceAreas/PepperwoodPage';
import RedLedgesPage from './pages/ServiceAreas/RedLedgesPage';
import GrantsvillePage from './pages/ServiceAreas/GrantsvillePage';
import StansburyParkPage from './pages/ServiceAreas/StansburyParkPage';
import LakePointPage from './pages/ServiceAreas/LakePointPage';
import ErdaPage from './pages/ServiceAreas/ErdaPage';
import StocktonPage from './pages/ServiceAreas/StocktonPage';
import VernonPage from './pages/ServiceAreas/VernonPage';
import WendoverPage from './pages/ServiceAreas/WendoverPage';
import DugwayPage from './pages/ServiceAreas/DugwayPage';
import IbapahPage from './pages/ServiceAreas/IbapahPage';
import HeberCityPage from './pages/ServiceAreas/HeberCityPage';
import MidwayPage from './pages/ServiceAreas/MidwayPage';
import CedarCityPage from './pages/ServiceAreas/CedarCityPage';
import StGeorgePage from './pages/ServiceAreas/StGeorgePage';
import MesquitePage from './pages/ServiceAreas/MesquitePage';
import NephiPage from './pages/ServiceAreas/NephiPage';
import MonaPage from './pages/ServiceAreas/MonaPage';
import MantiPage from './pages/ServiceAreas/MantiPage';
import EphraimPage from './pages/ServiceAreas/EphraimPage';
import RichfieldPage from './pages/ServiceAreas/RichfieldPage';
import SalinaPage from './pages/ServiceAreas/SalinaPage';
import DeltaPage from './pages/ServiceAreas/DeltaPage';
import FillmorePage from './pages/ServiceAreas/FillmorePage';
import BeaverPage from './pages/ServiceAreas/BeaverPage';
import MilfordPage from './pages/ServiceAreas/MilfordPage';
import EnochPage from './pages/ServiceAreas/EnochPage';
import ParowanPage from './pages/ServiceAreas/ParowanPage';
import HurricanePage from './pages/ServiceAreas/HurricanePage';
import LaVerkinPage from './pages/ServiceAreas/LaVerkinPage';
import VirginPage from './pages/ServiceAreas/VirginPage';
import SpringdalePage from './pages/ServiceAreas/SpringdalePage';
import IvinsPage from './pages/ServiceAreas/IvinsPage';
import SantaClaraPage from './pages/ServiceAreas/SantaClaraPage';
import WashingtonPage from './pages/ServiceAreas/WashingtonPage';
import LeedsPage from './pages/ServiceAreas/LeedsPage';
import CoalvillePage from './pages/ServiceAreas/CoalvillePage';
import ParkCityPage from './pages/ServiceAreas/ParkCityPage';
import TooelePage from './pages/ServiceAreas/TooelePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            <Route path="/free-estimate" element={<FreeEstimatePage />} />
            
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
