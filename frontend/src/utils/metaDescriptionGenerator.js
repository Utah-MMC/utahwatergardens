// Dynamic Meta Description Generator for SEO Optimization

/**
 * Generate unique meta descriptions for different page types
 * This fixes the "Too many pages with identical meta descriptions" issue
 */

// Base company information
const COMPANY_INFO = {
  name: "Utah Water Gardens",
  phone: "(801) 590-8516",
  location: "Salt Lake City, UT",
  serviceAreas: ["Salt Lake County", "Davis County", "Utah County", "Weber County"],
  experience: "15+ years"
};

// Service-specific descriptions
const SERVICE_DESCRIPTIONS = {
  "pond-construction": "Professional pond construction and design services in Utah. Custom water features, waterfalls, and koi ponds. Licensed & insured. Free consultations.",
  "pond-maintenance": "Expert pond maintenance services in Utah. Regular cleaning, water quality testing, and seasonal care. Keep your pond healthy year-round.",
  "pond-cleaning": "Professional pond cleaning services in Utah. Deep cleaning, algae removal, and water feature restoration. Serving Salt Lake and Davis counties.",
  "pond-repair": "Pond repair and restoration services in Utah. Fix leaks, replace equipment, and restore your water feature to perfect condition.",
  "aquatic-plants": "Premium aquatic plants for Utah ponds. Water lilies, marginal plants, and submerged vegetation. Expert plant selection and care advice.",
  "koi-fish": "Beautiful koi and goldfish for Utah ponds. Healthy, vibrant fish with expert care advice. Professional pond fish selection and maintenance.",
  "pond-supplies": "Complete pond supplies and equipment in Utah. Pumps, filters, liners, and accessories. Professional-grade products with expert advice.",
  "pond-filters": "High-quality pond filtration systems in Utah. Keep your pond water crystal clear with professional-grade filters and expert installation.",
  "pond-pumps": "Energy-efficient pond pumps and aeration systems in Utah. Professional installation and maintenance for healthy, clear pond water.",
  "pond-liners": "Premium pond liners and underlayment in Utah. EPDM and PVC liners for leak-proof pond construction. Professional installation available.",
  "water-treatments": "Professional water treatments for Utah ponds. Algae control, beneficial bacteria, and water quality solutions. Expert advice included.",
  "pond-lighting": "Beautiful pond lighting systems in Utah. LED lights, floating lights, and pathway lighting. Enhance your water feature's nighttime beauty.",
  "pond-consultations": "Expert pond consultations in Utah. Get professional advice on design, maintenance, and troubleshooting. Free initial consultations available.",
  "pond-gallery": "View our portfolio of beautiful pond projects in Utah. Custom water features, koi ponds, and landscape designs. Inspiration for your project."
};

// City-specific descriptions
const generateCityDescription = (cityName, state = "Utah") => {
  const cityVariations = {
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
    "sunnyside": "Sunnyside",
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
    "wattis": "Wattis",
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

  const displayName = cityVariations[cityName.toLowerCase()] || cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return `Professional pond services in ${displayName}, ${state}. Expert pond design, construction, maintenance, and cleaning. Licensed & insured. Call ${COMPANY_INFO.phone} for consultation.`;
};

// Generate meta description based on page type and data
export const generateMetaDescription = (pageType, pageData = {}) => {
  const { cityName, serviceType, title, customDescription } = pageData;

  // If custom description is provided, use it
  if (customDescription) {
    return customDescription;
  }

  switch (pageType) {
    case 'homepage':
      return `Utah's premier pond services near Salt Lake City, UT. Expert pond design, construction, maintenance, and cleaning. Licensed & insured. Call ${COMPANY_INFO.phone} for consultation.`;

    case 'city-page':
      return generateCityDescription(cityName, pageData.state);

    case 'service-page':
      return SERVICE_DESCRIPTIONS[serviceType] || `Professional ${serviceType.replace(/-/g, ' ')} services in Utah. Expert pond care and maintenance. Call ${COMPANY_INFO.phone} for consultation.`;

    case 'contact':
      return `Contact Utah Water Gardens in Salt Lake City for pond services. Visit our showroom or schedule service. Call ${COMPANY_INFO.phone} for expert pond advice.`;

    case 'about':
      return `Learn about Utah Water Gardens - Utah's premier pond service company. ${COMPANY_INFO.experience} of experience in pond design, construction, and maintenance.`;

    case 'resources':
      return `Pond care resources and guides from Utah Water Gardens. Expert advice on pond maintenance, plant care, and water quality. Free educational content.`;

    case 'schedule':
      return `Schedule pond cleaning, maintenance, repair, or consultation with Utah Water Gardens. Professional service scheduling. Call ${COMPANY_INFO.phone} to book.`;

    case 'gallery':
      return `View our portfolio of beautiful pond projects in Utah. Custom water features, koi ponds, and landscape designs. Get inspired for your pond project.`;

    case 'blog':
      return `Pond care tips and advice from Utah Water Gardens experts. Learn about pond maintenance, plant care, and water feature design.`;

    case 'shop':
      return `Shop pond supplies and equipment at Utah Water Gardens. Pumps, filters, plants, fish, and accessories. Expert advice included with every purchase.`;

    case 'consultation':
      return `Expert pond consultations in Utah. Get professional advice on design, maintenance, and troubleshooting. Free initial consultations available.`;

    case 'cleaning':
      return `Professional pond cleaning services in Utah. Deep cleaning, algae removal, and water feature restoration. Serving Salt Lake and Davis counties.`;

    case 'maintenance':
      return `Expert pond maintenance services in Utah. Regular cleaning, water quality testing, and seasonal care. Keep your pond healthy year-round.`;

    case 'construction':
      return `Professional pond construction and design services in Utah. Custom water features, waterfalls, and koi ponds. Licensed & insured. Free consultations.`;

    case 'repair':
      return `Pond repair and restoration services in Utah. Fix leaks, replace equipment, and restore your water feature to perfect condition.`;

    case 'plants':
      return `Premium aquatic plants for Utah ponds. Water lilies, marginal plants, and submerged vegetation. Expert plant selection and care advice.`;

    case 'fish':
      return `Beautiful koi and goldfish for Utah ponds. Healthy, vibrant fish with expert care advice. Professional pond fish selection and maintenance.`;

    case 'supplies':
      return `Complete pond supplies and equipment in Utah. Pumps, filters, liners, and accessories. Professional-grade products with expert advice.`;

    case 'filters':
      return `High-quality pond filtration systems in Utah. Keep your pond water crystal clear with professional-grade filters and expert installation.`;

    case 'pumps':
      return `Energy-efficient pond pumps and aeration systems in Utah. Professional installation and maintenance for healthy, clear pond water.`;

    case 'liners':
      return `Premium pond liners and underlayment in Utah. EPDM and PVC liners for leak-proof pond construction. Professional installation available.`;

    case 'treatments':
      return `Professional water treatments for Utah ponds. Algae control, beneficial bacteria, and water quality solutions. Expert advice included.`;

    case 'lighting':
      return `Beautiful pond lighting systems in Utah. LED lights, floating lights, and pathway lighting. Enhance your water feature's nighttime beauty.`;

    case 'dredging':
      return `Professional pond dredging services in Utah. Remove silt, restore depth, and improve water quality. Expert pond restoration and maintenance.`;

    case 'harvesting':
      return `Pond harvesting services in Utah. Professional fish removal, plant management, and pond restoration. Expert aquatic management solutions.`;

    default:
      // Fallback for unknown page types
      if (title) {
        return `${title} - Professional pond services in Utah. Expert advice and quality service. Call ${COMPANY_INFO.phone} for consultation.`;
      }
      return `Professional pond services in Utah. Expert pond design, construction, maintenance, and cleaning. Licensed & insured. Call ${COMPANY_INFO.phone} for consultation.`;
  }
};

// Generate unique meta description for any URL
export const generateMetaDescriptionFromUrl = (url) => {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    
    // Extract city name from service-areas URLs
    if (pathname.startsWith('/service-areas/')) {
      const citySlug = pathname.split('/service-areas/')[1];
      return generateCityDescription(citySlug);
    }
    
    // Extract service type from other URLs
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    if (pathSegments.length > 0) {
      const mainSegment = pathSegments[0];
      return generateMetaDescription(mainSegment.replace(/-/g, '-'), { serviceType: mainSegment });
    }
    
    return generateMetaDescription('homepage');
  } catch (error) {
    console.error('Error generating meta description from URL:', error);
    return generateMetaDescription('homepage');
  }
};

export default generateMetaDescription;
