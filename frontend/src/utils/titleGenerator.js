// Dynamic Title Generator for SEO Optimization

/**
 * Generate unique page titles for different page types
 * This fixes the "Too many pages with identical titles" issue
 */

// Base company information
const COMPANY_INFO = {
  name: "Utah Water Gardens",
  location: "Salt Lake City, UT",
  state: "Utah"
};

// Service-specific titles
const SERVICE_TITLES = {
  "pond-construction": "Pond Construction & Design Services in Utah | Utah Water Gardens",
  "pond-maintenance": "Pond Maintenance & Care Services in Utah | Utah Water Gardens", 
  "pond-cleaning": "Professional Pond Cleaning Services in Utah | Utah Water Gardens",
  "pond-repair": "Pond Repair & Restoration Services in Utah | Utah Water Gardens",
  "aquatic-plants": "Aquatic Plants for Utah Ponds | Water Lilies & Pond Plants | Utah Water Gardens",
  "koi-fish": "Koi & Goldfish for Utah Ponds | Pond Fish Selection | Utah Water Gardens",
  "pond-supplies": "Pond Supplies & Equipment in Utah | Pumps, Filters & Accessories | Utah Water Gardens",
  "pond-filters": "Pond Filtration Systems in Utah | Professional Pond Filters | Utah Water Gardens",
  "pond-pumps": "Pond Pumps & Aeration Systems in Utah | Energy Efficient Pumps | Utah Water Gardens",
  "pond-liners": "Pond Liners & Underlayment in Utah | EPDM & PVC Liners | Utah Water Gardens",
  "water-treatments": "Pond Water Treatments in Utah | Algae Control & Water Quality | Utah Water Gardens",
  "pond-lighting": "Pond Lighting Systems in Utah | LED Pond Lights | Utah Water Gardens",
  "pond-consultations": "Pond Consultations in Utah | Expert Pond Advice | Utah Water Gardens",
  "pond-gallery": "Pond Gallery | Beautiful Water Features in Utah | Utah Water Gardens",
  "dredging": "Pond Dredging Services in Utah | Professional Pond Restoration | Utah Water Gardens",
  "harvesting": "Pond Harvesting Services in Utah | Fish & Plant Management | Utah Water Gardens"
};

// City name variations for proper capitalization
const CITY_NAME_VARIATIONS = {
  "salt-lake-city": "Salt Lake City",
  "west-valley-city": "West Valley City", 
  "west-jordan": "West Jordan",
  "sandy": "Sandy",
  "ogden": "Ogden",
  "provo": "Provo",
  "orem": "Orem",
  "layton": "Layton",
  "taylorsville": "Taylorsville",
  "st-george": "St. George",
  "lehi": "Lehi",
  "millcreek": "Millcreek",
  "south-jordan": "South Jordan",
  "riverton": "Riverton",
  "draper": "Draper",
  "murray": "Murray",
  "midvale": "Midvale",
  "bountiful": "Bountiful",
  "clearfield": "Clearfield",
  "kaysville": "Kaysville",
  "spanish-fork": "Spanish Fork",
  "pleasant-grove": "Pleasant Grove",
  "american-fork": "American Fork",
  "springville": "Springville",
  "payson": "Payson",
  "north-ogden": "North Ogden",
  "south-ogden": "South Ogden",
  "north-salt-lake": "North Salt Lake",
  "west-bountiful": "West Bountiful",
  "woods-cross": "Woods Cross",
  "farmington": "Farmington",
  "centerville": "Centerville",
  "syracuse": "Syracuse",
  "clinton": "Clinton",
  "roy": "Roy",
  "south-weber": "South Weber",
  "uintah": "Uintah",
  "riverdale": "Riverdale",
  "washington-terrace": "Washington Terrace",
  "hooper": "Hooper",
  "west-haven": "West Haven",
  "plain-city": "Plain City",
  "farr-west": "Farr West",
  "harrisville": "Harrisville",
  "north-logan": "North Logan",
  "hyrum": "Hyrum",
  "smithfield": "Smithfield",
  "richmond": "Richmond",
  "lewiston": "Lewiston",
  "tremonton": "Tremonton",
  "brigham-city": "Brigham City",
  "perry": "Perry",
  "willard": "Willard",
  "mantua": "Mantua",
  "honeyville": "Honeyville",
  "corinne": "Corinne",
  "bear-river-city": "Bear River City",
  "garland": "Garland",
  "fielding": "Fielding",
  "portage": "Portage",
  "deweyville": "Deweyville",
  "petersboro": "Petersboro",
  "collinston": "Collinston",
  "bothwell": "Bothwell",
  "promontory": "Promontory",
  "howell": "Howell",
  "snowville": "Snowville",
  "park-valley": "Park Valley",
  "grouse-creek": "Grouse Creek",
  "lucin": "Lucin",
  "rosebud": "Rosebud",
  "kelton": "Kelton",
  "locomotive-springs": "Locomotive Springs",
  "gold-hill": "Gold Hill",
  "ibapah": "Ibapah",
  "callao": "Callao",
  "trout-creek": "Trout Creek",
  "wendover": "Wendover",
  "west-wendover": "West Wendover",
  "leeds": "Leeds",
  "enoch": "Enoch",
  "cedar-city": "Cedar City",
  "hurricane": "Hurricane",
  "la-verkin": "La Verkin",
  "virgin": "Virgin",
  "rockville": "Rockville",
  "springdale": "Springdale",
  "mount-carmel": "Mount Carmel",
  "orderville": "Orderville",
  "glendale": "Glendale",
  "kanab": "Kanab",
  "big-water": "Big Water",
  "page": "Page",
  "bullfrog": "Bullfrog",
  "hall-crossing": "Hall Crossing",
  "hite": "Hite",
  "fry-canyon": "Fry Canyon",
  "ticaboo": "Ticaboo",
  "henrieville": "Henrieville",
  "cannonville": "Cannonville",
  "tropic": "Tropic",
  "bryce-canyon-city": "Bryce Canyon City",
  "panguitch": "Panguitch",
  "junction": "Junction",
  "circleville": "Circleville",
  "marysvale": "Marysvale",
  "sevier": "Sevier",
  "richfield": "Richfield",
  "salina": "Salina",
  "redmond": "Redmond",
  "aurora": "Aurora",
  "sigurd": "Sigurd",
  "koosharem": "Koosharem",
  "kingston": "Kingston",
  "joseph": "Joseph",
  "monroe": "Monroe",
  "elsinore": "Elsinore",
  "annabella": "Annabella",
  "central": "Central",
  "venice": "Venice",
  "glenwood": "Glenwood",
  "bicknell": "Bicknell",
  "lyman": "Lyman",
  "teasdale": "Teasdale",
  "torrey": "Torrey",
  "grover": "Grover",
  "caineville": "Caineville",
  "hanksville": "Hanksville",
  "green-river": "Green River",
  "moab": "Moab",
  "castle-valley": "Castle Valley",
  "cisco": "Cisco",
  "thompson": "Thompson",
  "sunnyside": "Sunnyside",
  "price": "Price",
  "helper": "Helper",
  "wellington": "Wellington",
  "east-carbon": "East Carbon",
  "carbonville": "Carbonville",
  "kenilworth": "Kenilworth",
  "scofield": "Scofield",
  "clear-creek": "Clear Creek",
  "tucker": "Tucker",
  "columbia": "Columbia",
  "huntington": "Huntington",
  "ferron": "Ferron",
  "clawson": "Clawson",
  "emery": "Emery",
  "orangeville": "Orangeville",
  "castle-dale": "Castle Dale",
  "cleveland": "Cleveland",
  "elmo": "Elmo",
  "woodside": "Woodside",
  "mohrland": "Mohrland",
  "mutual": "Mutual",
  "lawrence": "Lawrence",
  "spring-glen": "Spring Glen",
  "wattis": "Wattis"
};

// Generate title based on page type and data
export const generatePageTitle = (pageType, pageData = {}) => {
  const { cityName, serviceType, title, customTitle } = pageData;

  // If custom title is provided, use it
  if (customTitle) {
    return customTitle;
  }

  switch (pageType) {
    case 'homepage':
      return "Pond Services Near Salt Lake City, UT | Utah Water Gardens";

    case 'city-page':
      const displayName = CITY_NAME_VARIATIONS[cityName?.toLowerCase()] || 
                         cityName?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      return `Pond Services in ${displayName}, Utah | Utah Water Gardens`;

    case 'service-page':
      return SERVICE_TITLES[serviceType] || `Professional ${serviceType?.replace(/-/g, ' ')} Services in Utah | Utah Water Gardens`;

    case 'contact':
      return "Contact Utah Water Gardens | Expert Pond Consultation & Store Visit";

    case 'about':
      return "About Utah Water Gardens | Utah's Premier Pond Service Company";

    case 'resources':
      return "Pond Care Resources & Guides | Expert Advice | Utah Water Gardens";

    case 'schedule':
      return "Schedule Pond Services | Professional Service Booking | Utah Water Gardens";

    case 'gallery':
      return "Pond Gallery | Beautiful Water Features in Utah | Utah Water Gardens";

    case 'blog':
      return "Pond Care Tips & Advice | Expert Blog | Utah Water Gardens";

    case 'shop':
      return "Pond Supplies & Equipment | Professional Products | Utah Water Gardens";

    case 'consultation':
      return "Pond Consultations in Utah | Expert Pond Advice | Utah Water Gardens";

    case 'cleaning':
      return "Professional Pond Cleaning Services in Utah | Utah Water Gardens";

    case 'maintenance':
      return "Pond Maintenance & Care Services in Utah | Utah Water Gardens";

    case 'construction':
      return "Pond Construction & Design Services in Utah | Utah Water Gardens";

    case 'repair':
      return "Pond Repair & Restoration Services in Utah | Utah Water Gardens";

    case 'plants':
      return "Aquatic Plants for Utah Ponds | Water Lilies & Pond Plants | Utah Water Gardens";

    case 'fish':
      return "Koi & Goldfish for Utah Ponds | Pond Fish Selection | Utah Water Gardens";

    case 'supplies':
      return "Pond Supplies & Equipment in Utah | Pumps, Filters & Accessories | Utah Water Gardens";

    case 'filters':
      return "Pond Filtration Systems in Utah | Professional Pond Filters | Utah Water Gardens";

    case 'pumps':
      return "Pond Pumps & Aeration Systems in Utah | Energy Efficient Pumps | Utah Water Gardens";

    case 'liners':
      return "Pond Liners & Underlayment in Utah | EPDM & PVC Liners | Utah Water Gardens";

    case 'treatments':
      return "Pond Water Treatments in Utah | Algae Control & Water Quality | Utah Water Gardens";

    case 'lighting':
      return "Pond Lighting Systems in Utah | LED Pond Lights | Utah Water Gardens";

    case 'dredging':
      return "Pond Dredging Services in Utah | Professional Pond Restoration | Utah Water Gardens";

    case 'harvesting':
      return "Pond Harvesting Services in Utah | Fish & Plant Management | Utah Water Gardens";

    case 'plants-fish':
      return "Plants & Fish for Utah Ponds | Aquatic Plants & Koi | Utah Water Gardens";

    case 'pond-services':
      return "Pond Services in Utah | Professional Pond Care & Maintenance | Utah Water Gardens";

    case 'pond-construction':
      return "Pond Construction & Design Services in Utah | Utah Water Gardens";

    case 'pond-maintenance':
      return "Pond Maintenance & Care Services in Utah | Utah Water Gardens";

    case 'pond-cleaning':
      return "Professional Pond Cleaning Services in Utah | Utah Water Gardens";

    case 'pond-repair':
      return "Pond Repair & Restoration Services in Utah | Utah Water Gardens";

    case 'pond-gallery':
      return "Pond Gallery | Beautiful Water Features in Utah | Utah Water Gardens";

    case 'pond-filters':
      return "Pond Filtration Systems in Utah | Professional Pond Filters | Utah Water Gardens";

    case 'pond-consultations':
      return "Pond Consultations in Utah | Expert Pond Advice | Utah Water Gardens";

    case 'pond-supplies':
      return "Pond Supplies & Equipment in Utah | Pumps, Filters & Accessories | Utah Water Gardens";

    case 'pond-cleanings':
      return "Pond Cleanings | Professional Pond Cleaning Services in Utah | Utah Water Gardens";

    case 'pond-maintenance':
      return "Pond Maintenance & Care Services in Utah | Utah Water Gardens";

    case 'pond-pump-repair':
      return "Pond Pump Repair Services in Utah | Professional Equipment Repair | Utah Water Gardens";

    case 'harvesting-middleton':
      return "Pond Harvesting Services in Middleton, Utah | Fish & Plant Management | Utah Water Gardens";

    case 'harvesting-powell':
      return "Pond Harvesting Services in Powell, Utah | Fish & Plant Management | Utah Water Gardens";

    case 'fish-koi':
      return "Koi & Goldfish for Utah Ponds | Pond Fish Selection | Utah Water Gardens";

    case 'services':
      return "Pond Services in Utah | Professional Pond Care & Maintenance | Utah Water Gardens";

    case 'schedule':
      return "Schedule Pond Services | Professional Service Booking | Utah Water Gardens";

    case 'pumps':
      return "Pond Pumps & Aeration Systems in Utah | Energy Efficient Pumps | Utah Water Gardens";

    case 'resources':
      return "Pond Care Resources & Guides | Expert Advice | Utah Water Gardens";

    case 'company-resources':
      return "Company Resources | Utah Water Gardens Partners & Services";

    case 'dredging-a-pond-in-utah':
      return "Pond Dredging Services in Utah | Professional Pond Restoration | Utah Water Gardens";

    case 'pond-supplies-4':
      return "Pond Supplies & Equipment in Utah | Pumps, Filters & Accessories | Utah Water Gardens";

    case 'pondsupplies':
      return "Pond Supplies & Equipment in Utah | Pumps, Filters & Accessories | Utah Water Gardens";

    case 'pondmaintenance-2':
      return "Pond Maintenance & Care Services in Utah | Utah Water Gardens";

    case 'finding-a-leak-in-your-pond':
      return "Finding a Leak in Your Pond | Expert Troubleshooting Guide | Utah Water Gardens";

    default:
      // Fallback for unknown page types
      if (title) {
        return `${title} | Utah Water Gardens`;
      }
      return "Professional Pond Services in Utah | Utah Water Gardens";
  }
};

// Generate unique title for any URL
export const generateTitleFromUrl = (url) => {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    
    // Extract city name from service-areas URLs
    if (pathname.startsWith('/service-areas/')) {
      const citySlug = pathname.split('/service-areas/')[1];
      return generatePageTitle('city-page', { cityName: citySlug });
    }
    
    // Extract service type from other URLs
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    if (pathSegments.length > 0) {
      const mainSegment = pathSegments[0];
      return generatePageTitle(mainSegment.replace(/-/g, '-'), { serviceType: mainSegment });
    }
    
    return generatePageTitle('homepage');
  } catch (error) {
    console.error('Error generating title from URL:', error);
    return generatePageTitle('homepage');
  }
};

// Function to clean up duplicate branding in titles
export const cleanTitle = (title) => {
  if (!title) return title;
  
  // Remove duplicate "Utah Water Gardens" branding
  const cleanTitle = title.replace(/\|\s*Utah Water Gardens\s*\|\s*Utah Water Gardens/g, '| Utah Water Gardens');
  
  // Remove triple branding
  const finalTitle = cleanTitle.replace(/\|\s*Utah Water Gardens\s*\|\s*Utah Water Gardens\s*\|\s*Utah Water Gardens/g, '| Utah Water Gardens');
  
  return finalTitle;
};

export default generatePageTitle;
