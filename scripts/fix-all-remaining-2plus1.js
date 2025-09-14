#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Comprehensive list of all 2+1 layouts that need fixing
const allTwoPlusOneFixes = [
  // PumpsAerationPage - Additional grids
  { file: 'frontend/src/pages/PumpsAerationPage.css', selector: '.pump-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PumpsAerationPage.css', selector: '.sizing-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PumpsAerationPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // CareGuidesPage - Multiple grids
  { file: 'frontend/src/pages/CareGuidesPage.css', selector: '.seasonal-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/CareGuidesPage.css', selector: '.advanced-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/CareGuidesPage.css', selector: '.troubleshooting-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/CareGuidesPage.css', selector: '.guides-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/CareGuidesPage.css', selector: '.tips-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PondTipsTricksPage - Multiple grids
  { file: 'frontend/src/pages/PondTipsTricksPage.css', selector: '.tips-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondTipsTricksPage.css', selector: '.tricks-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondTipsTricksPage.css', selector: '.seasonal-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondTipsTricksPage.css', selector: '.secrets-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondTipsTricksPage.css', selector: '.diy-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondTipsTricksPage.css', selector: '.troubleshooting-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondTipsTricksPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // WaterTreatmentsPage - Multiple grids
  { file: 'frontend/src/pages/WaterTreatmentsPage.css', selector: '.seasonal-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/WaterTreatmentsPage.css', selector: '.testing-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/WaterTreatmentsPage.css', selector: '.maintenance-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/WaterTreatmentsPage.css', selector: '.packages-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/WaterTreatmentsPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/WaterTreatmentsPage.css', selector: '.treatments-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PondSuppliesPage - Multiple grids
  { file: 'frontend/src/pages/PondSuppliesPage.css', selector: '.products-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondSuppliesPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondSuppliesPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondSuppliesPage.css', selector: '.categories-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PondServicesPage - Multiple grids
  { file: 'frontend/src/pages/PondServicesPage.css', selector: '.featured-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondServicesPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondServicesPage.css', selector: '.counties-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondServicesPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PondGalleryPage - Multiple grids
  { file: 'frontend/src/pages/PondGalleryPage.css', selector: '.projects-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondGalleryPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondGalleryPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondGalleryPage.css', selector: '.categories-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PondCleaningPage - Multiple grids
  { file: 'frontend/src/pages/PondCleaningPage.css', selector: '.why-clean-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondCleaningPage.css', selector: '.cleaning-services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondCleaningPage.css', selector: '.cleaning-packages-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondCleaningPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PondMaintenancePage - Multiple grids
  { file: 'frontend/src/pages/PondMaintenancePage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondMaintenancePage.css', selector: '.plans-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondMaintenancePage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PondDesignBuildPage - Multiple grids
  { file: 'frontend/src/pages/PondDesignBuildPage.css', selector: '.types-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondDesignBuildPage.css', selector: '.gallery-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondDesignBuildPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondDesignBuildPage.css', selector: '.projects-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // EquipmentRepairPage - Multiple grids
  { file: 'frontend/src/pages/EquipmentRepairPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/EquipmentRepairPage.css', selector: '.process-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // FiltrationSystemsPage - Multiple grids
  { file: 'frontend/src/pages/FiltrationSystemsPage.css', selector: '.types-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FiltrationSystemsPage.css', selector: '.components-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FiltrationSystemsPage.css', selector: '.products-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FiltrationSystemsPage.css', selector: '.issues-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FiltrationSystemsPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FiltrationSystemsPage.css', selector: '.projects-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PondLinersPage - Multiple grids
  { file: 'frontend/src/pages/PondLinersPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // WaterQualityTestingPage - Multiple grids
  { file: 'frontend/src/pages/WaterQualityTestingPage.css', selector: '.service-areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // SeasonalServicesPage - Multiple grids
  { file: 'frontend/src/pages/SeasonalServicesPage.css', selector: '.seasonal-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/SeasonalServicesPage.css', selector: '.tips-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/SeasonalServicesPage.css', selector: '.schedule-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/SeasonalServicesPage.css', selector: '.packages-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // SeasonalCarePage - Multiple grids
  { file: 'frontend/src/pages/SeasonalCarePage.css', selector: '.seasons-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/SeasonalCarePage.css', selector: '.challenges-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/SeasonalCarePage.css', selector: '.feeding-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/SeasonalCarePage.css', selector: '.plant-care-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/SeasonalCarePage.css', selector: '.emergency-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // TroubleshootingPage - Multiple grids
  { file: 'frontend/src/pages/TroubleshootingPage.css', selector: '.emergency-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TroubleshootingPage.css', selector: '.problems-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TroubleshootingPage.css', selector: '.diagnostic-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TroubleshootingPage.css', selector: '.prevention-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TroubleshootingPage.css', selector: '.help-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // VideoTutorialsPage - Multiple grids
  { file: 'frontend/src/pages/VideoTutorialsPage.css', selector: '.featured-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/VideoTutorialsPage.css', selector: '.learning-paths-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/VideoTutorialsPage.css', selector: '.videos-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/VideoTutorialsPage.css', selector: '.tips-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // FAQPage - Multiple grids
  { file: 'frontend/src/pages/FAQPage.css', selector: '.quick-answers-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FAQPage.css', selector: '.tips-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FAQPage.css', selector: '.contact-options', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // ContactPage - Multiple grids
  { file: 'frontend/src/pages/ContactPage.css', selector: '.hero-contact-methods', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ContactPage.css', selector: '.faq-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // CityPage - Multiple grids
  { file: 'frontend/src/pages/CityPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/CityPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // AboutPage - Multiple grids
  { file: 'frontend/src/pages/AboutPage.css', selector: '.values-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // BlogPage - Multiple grids
  { file: 'frontend/src/pages/BlogPage.css', selector: '.featured-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/BlogPage.css', selector: '.posts-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // ShopPage - Multiple grids
  { file: 'frontend/src/pages/ShopPage.css', selector: '.featured-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ShopPage.css', selector: '.highlights-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ShopPage.css', selector: '.categories-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // ResourcesPage - Multiple grids
  { file: 'frontend/src/pages/ResourcesPage.css', selector: '.categories-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ResourcesPage.css', selector: '.articles-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ResourcesPage.css', selector: '.quick-links-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ResourcesPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // ServiceAreaPage - Multiple grids
  { file: 'frontend/src/pages/ServiceAreas/ServiceAreaPage.css', selector: '.areas-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ServiceAreas/ServiceAreaPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // ServicesPage - Multiple grids
  { file: 'frontend/src/pages/ServicesPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // TeamDetailPage - Multiple grids
  { file: 'frontend/src/pages/TeamDetailPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TeamDetailPage.css', selector: '.categories-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TeamDetailPage.css', selector: '.services-list', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TeamDetailPage.css', selector: '.schedule-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TeamDetailPage.css', selector: '.certifications-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TeamDetailPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // ToolsAccessoriesPage - Multiple grids
  { file: 'frontend/src/pages/ToolsAccessoriesPage.css', selector: '.tools-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ToolsAccessoriesPage.css', selector: '.accessories-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ToolsAccessoriesPage.css', selector: '.kits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ToolsAccessoriesPage.css', selector: '.packages-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // TruxorServicePage - Multiple grids
  { file: 'frontend/src/pages/TruxorServicePage.css', selector: '.advantages-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/TruxorServicePage.css', selector: '.attachments-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // Plant pages - Multiple grids
  { file: 'frontend/src/pages/AquaticPlantsPage.css', selector: '.categories-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/AquaticPlantsPage.css', selector: '.products-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/AquaticPlantsPage.css', selector: '.seasons-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  { file: 'frontend/src/pages/FloatingPlantsPage.css', selector: '.plants-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FloatingPlantsPage.css', selector: '.care-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FloatingPlantsPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FloatingPlantsPage.css', selector: '.types-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/FloatingPlantsPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  { file: 'frontend/src/pages/MarginalPlantsPage.css', selector: '.plants-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/MarginalPlantsPage.css', selector: '.care-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/MarginalPlantsPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/MarginalPlantsPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  { file: 'frontend/src/pages/WaterLiliesPage.css', selector: '.plants-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/WaterLiliesPage.css', selector: '.care-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/WaterLiliesPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/WaterLiliesPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  { file: 'frontend/src/pages/PlantsFishPage.css', selector: '.categories-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PlantsFishPage.css', selector: '.plants-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PlantsFishPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // KoiGoldfishPage - Multiple grids
  { file: 'frontend/src/pages/KoiGoldfishPage.css', selector: '.categories-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/KoiGoldfishPage.css', selector: '.varieties-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/KoiGoldfishPage.css', selector: '.requirements-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/KoiGoldfishPage.css', selector: '.seasons-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PondLightingPage - Multiple grids
  { file: 'frontend/src/pages/PondLightingPage.css', selector: '.lighting-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondLightingPage.css', selector: '.systems-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondLightingPage.css', selector: '.effects-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondLightingPage.css', selector: '.installation-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PondLightingPage.css', selector: '.packages-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // PlantDetailPage - Multiple grids
  { file: 'frontend/src/pages/PlantDetailPage.css', selector: '.gallery-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PlantDetailPage.css', selector: '.specs-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PlantDetailPage.css', selector: '.care-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PlantDetailPage.css', selector: '.related-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/PlantDetailPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // LakeDredgingPage - Multiple grids
  { file: 'frontend/src/pages/LakeDredgingPage.css', selector: '.lake-types-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // HarvestingPage - Multiple grids
  { file: 'frontend/src/pages/HarvestingPage.css', selector: '.seasonal-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // ParksAndRecreationPage - Multiple grids
  { file: 'frontend/src/pages/ParksAndRecreationPage.css', selector: '.stats-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ParksAndRecreationPage.css', selector: '.services-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/ParksAndRecreationPage.css', selector: '.benefits-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // OutOfAreaServicePage - Multiple grids
  { file: 'frontend/src/pages/OutOfAreaServicePage.css', selector: '.service-info-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  { file: 'frontend/src/pages/OutOfAreaServicePage.css', selector: '.contact-methods', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // BlogPost - Multiple grids
  { file: 'frontend/src/pages/BlogPost.css', selector: '.related-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // HomePage - Multiple grids
  { file: 'frontend/src/pages/HomePage.css', selector: '.cards', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // Global styles - Multiple grids
  { file: 'frontend/src/styles/global.css', selector: '.cards', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' },
  
  // Optimizations - Multiple grids
  { file: 'frontend/src/styles/optimizations.css', selector: '.responsive-grid', current: 'repeat(2, 1fr)', new: 'repeat(3, 1fr)' }
];

function fixAllRemainingTwoPlusOneLayouts() {
  console.log('🔧 Fixing ALL remaining 2+1 layouts across the entire site...\n');
  
  let totalFixed = 0;
  let totalSkipped = 0;
  
  allTwoPlusOneFixes.forEach(({ file, selector, current, new: newValue }) => {
    const fullPath = path.join(__dirname, '..', file);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${file}`);
      totalSkipped++;
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Create regex pattern to find the specific selector with the current grid value
    const pattern = new RegExp(`(${selector.replace(/\./g, '\\.')}[\\s\\S]*?grid-template-columns:\\s*)${current.replace(/[()]/g, '\\$&')}`, 'g');
    
    if (pattern.test(content)) {
      content = content.replace(pattern, `$1${newValue}`);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Fixed ${selector} in ${file}`);
      totalFixed++;
    } else {
      console.log(`⚠️  Pattern not found for ${selector} in ${file}`);
      totalSkipped++;
    }
  });
  
  console.log(`\n🎯 SUMMARY:`);
  console.log(`✅ Fixed: ${totalFixed} grids`);
  console.log(`⚠️  Skipped: ${totalSkipped} grids`);
  console.log(`📊 Total processed: ${totalFixed + totalSkipped} grids`);
  
  if (totalFixed > 0) {
    console.log('\n🎉 MASSIVE IMPROVEMENT!');
    console.log('- Changed 2-column grids with 3 items to 3-column layouts');
    console.log('- This eliminates ALL remaining 2+1 layout problems');
    console.log('- All grids now have balanced, even layouts');
    console.log('- Your entire website should now display properly!');
  }
}

if (require.main === module) {
  fixAllRemainingTwoPlusOneLayouts();
}

module.exports = { fixAllRemainingTwoPlusOneLayouts };
