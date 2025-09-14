// Service Page Randomization System
// This ensures unique content for every service area page by using multiple templates and content variations

// Template Types - Different layouts and content structures
export const TEMPLATE_TYPES = {
  PROFESSIONAL: 'professional',
  COMMUNITY_FOCUSED: 'community_focused', 
  NATURE_INSPIRED: 'nature_inspired',
  TECHNICAL_EXPERT: 'technical_expert',
  LOCAL_HERITAGE: 'local_heritage'
};

// Content Variations for Different Sections
export const CONTENT_VARIATIONS = {
  // Hero Section Variations
  heroTitles: {
    [TEMPLATE_TYPES.PROFESSIONAL]: [
      "Professional {serviceType} Services in {cityName}",
      "Expert {serviceType} Solutions for {cityName}",
      "Premier {serviceType} Services in {cityName}, {state}"
    ],
    [TEMPLATE_TYPES.COMMUNITY_FOCUSED]: [
      "Serving {cityName} with Quality {serviceType} Care",
      "Your Local {cityName} {serviceType} Specialists",
      "Trusted {serviceType} Services in {cityName}"
    ],
    [TEMPLATE_TYPES.NATURE_INSPIRED]: [
      "Natural {serviceType} Solutions in {cityName}",
      "Creating Beautiful Water Features in {cityName}",
      "Harmonious {serviceType} Design for {cityName}"
    ],
    [TEMPLATE_TYPES.TECHNICAL_EXPERT]: [
      "Advanced {serviceType} Technology in {cityName}",
      "Precision {serviceType} Engineering for {cityName}",
      "State-of-the-Art {serviceType} Solutions in {cityName}"
    ],
    [TEMPLATE_TYPES.LOCAL_HERITAGE]: [
      "Traditional {serviceType} Craftsmanship in {cityName}",
      "Heritage {serviceType} Services for {cityName}",
      "Time-Honored {serviceType} Solutions in {cityName}"
    ]
  },

  // Subtitle Variations
  heroSubtitles: {
    [TEMPLATE_TYPES.PROFESSIONAL]: [
      "Licensed and insured professionals delivering exceptional {serviceType} services throughout {cityName} and surrounding areas.",
      "Our certified team provides comprehensive {serviceType} solutions with guaranteed results for {cityName} residents and businesses.",
      "Industry-leading {serviceType} expertise serving {cityName} with professional-grade equipment and proven techniques."
    ],
    [TEMPLATE_TYPES.COMMUNITY_FOCUSED]: [
      "Proudly serving the {cityName} community with personalized {serviceType} care and local expertise you can trust.",
      "Your neighbors in {cityName} - providing reliable {serviceType} services with a personal touch and community commitment.",
      "Local {cityName} business dedicated to enhancing your property with professional {serviceType} solutions."
    ],
    [TEMPLATE_TYPES.NATURE_INSPIRED]: [
      "Creating sustainable, eco-friendly {serviceType} solutions that harmonize with {cityName}'s natural beauty.",
      "Designing water features that complement {cityName}'s landscape while promoting environmental stewardship.",
      "Natural {serviceType} approaches that enhance {cityName}'s ecosystem and create lasting beauty."
    ],
    [TEMPLATE_TYPES.TECHNICAL_EXPERT]: [
      "Cutting-edge {serviceType} technology and precision engineering for optimal results in {cityName}.",
      "Advanced equipment and scientific methods delivering superior {serviceType} performance in {cityName}.",
      "Innovative {serviceType} solutions powered by the latest technology and engineering expertise."
    ],
    [TEMPLATE_TYPES.LOCAL_HERITAGE]: [
      "Traditional {serviceType} methods combined with modern expertise, serving {cityName} with time-tested quality.",
      "Heritage craftsmanship meets contemporary standards in our {serviceType} services for {cityName}.",
      "Preserving traditional {serviceType} techniques while incorporating modern innovations for {cityName}."
    ]
  },

  // Overview Content Variations
  overviewContent: {
    [TEMPLATE_TYPES.PROFESSIONAL]: [
      "Utah Water Gardens brings professional {serviceType} expertise to {cityName}, {state}. Our certified technicians use industry-standard equipment and proven methodologies to deliver exceptional results for residential and commercial properties throughout the {cityName} area.",
      "With over 15 years of professional {serviceType} experience, we provide comprehensive solutions for {cityName} property owners. Our systematic approach ensures consistent, high-quality results that exceed industry standards.",
      "Professional {serviceType} services in {cityName} delivered with precision and reliability. Our team combines technical expertise with quality materials to create lasting water features that enhance your property value."
    ],
    [TEMPLATE_TYPES.COMMUNITY_FOCUSED]: [
      "As your local {cityName} {serviceType} specialists, we understand the unique needs of our community. We're committed to providing personalized service and building lasting relationships with our neighbors throughout the {cityName} area.",
      "Proudly serving {cityName} families and businesses with dedicated {serviceType} care. We know our community's preferences and work closely with local suppliers to deliver the best value and service.",
      "Your trusted {cityName} neighbors for all {serviceType} needs. We're invested in our community's success and take pride in enhancing local properties with beautiful, functional water features."
    ],
    [TEMPLATE_TYPES.NATURE_INSPIRED]: [
      "Creating sustainable {serviceType} solutions that work in harmony with {cityName}'s natural environment. Our eco-friendly approaches promote water conservation while creating beautiful, self-sustaining ecosystems.",
      "Natural {serviceType} design that enhances {cityName}'s landscape and supports local wildlife. We use native plants and environmentally responsible techniques to create water features that thrive naturally.",
      "Eco-conscious {serviceType} solutions for {cityName} that respect the environment while creating stunning water features. Our sustainable practices ensure your pond contributes positively to the local ecosystem."
    ],
    [TEMPLATE_TYPES.TECHNICAL_EXPERT]: [
      "Advanced {serviceType} engineering and cutting-edge technology deliver superior performance in {cityName}. Our precision equipment and scientific approach ensure optimal water quality and system efficiency.",
      "State-of-the-art {serviceType} solutions powered by the latest technology and engineering expertise. We use advanced monitoring systems and precision equipment for unmatched results in {cityName}.",
      "Technical excellence in {serviceType} services for {cityName}. Our engineering-based approach combines advanced equipment with scientific water management for superior performance and reliability."
    ],
    [TEMPLATE_TYPES.LOCAL_HERITAGE]: [
      "Traditional {serviceType} craftsmanship meets modern expertise in {cityName}. We honor time-tested techniques while incorporating contemporary innovations to deliver heritage-quality results.",
      "Heritage {serviceType} methods refined over generations, now serving {cityName} with traditional quality and modern reliability. Our craftsmen bring decades of experience to every project.",
      "Preserving traditional {serviceType} artistry while embracing modern standards for {cityName}. Our heritage approach ensures your water feature reflects both timeless beauty and contemporary functionality."
    ]
  },

  // Service Lists Variations
  residentialServices: {
    [TEMPLATE_TYPES.PROFESSIONAL]: [
      "Professional {serviceType} Assessment & Planning",
      "Certified {serviceType} Installation & Construction", 
      "Systematic {serviceType} Maintenance Programs",
      "Quality Control & Performance Monitoring",
      "Emergency {serviceType} Response Services",
      "Warranty-Backed {serviceType} Solutions"
    ],
    [TEMPLATE_TYPES.COMMUNITY_FOCUSED]: [
      "Personalized {serviceType} Consultation",
      "Family-Friendly {serviceType} Design", 
      "Neighborhood {serviceType} Maintenance",
      "Local {serviceType} Support & Service",
      "Community {serviceType} Events & Education",
      "Trusted {serviceType} Emergency Response"
    ],
    [TEMPLATE_TYPES.NATURE_INSPIRED]: [
      "Eco-Friendly {serviceType} Design",
      "Native Plant {serviceType} Integration", 
      "Sustainable {serviceType} Maintenance",
      "Wildlife-Friendly {serviceType} Features",
      "Natural {serviceType} Ecosystem Balance",
      "Environmental {serviceType} Stewardship"
    ],
    [TEMPLATE_TYPES.TECHNICAL_EXPERT]: [
      "Advanced {serviceType} System Design",
      "Precision {serviceType} Engineering", 
      "High-Tech {serviceType} Monitoring",
      "Automated {serviceType} Control Systems",
      "Scientific {serviceType} Water Management",
      "Innovative {serviceType} Technology Integration"
    ],
    [TEMPLATE_TYPES.LOCAL_HERITAGE]: [
      "Traditional {serviceType} Craftsmanship",
      "Heritage {serviceType} Design Methods", 
      "Time-Honored {serviceType} Techniques",
      "Artisan {serviceType} Construction",
      "Classic {serviceType} Maintenance",
      "Traditional {serviceType} Materials & Methods"
    ]
  },

  // Why Choose Us Variations
  whyChooseUs: {
    [TEMPLATE_TYPES.PROFESSIONAL]: [
      "Utah Water Gardens brings professional {serviceType} expertise to {cityName} with certified technicians, industry-standard equipment, and proven methodologies. Our systematic approach ensures consistent, high-quality results that exceed expectations.",
      "Professional {serviceType} services in {cityName} delivered with precision and reliability. Our team combines technical expertise with quality materials to create lasting water features that enhance your property value and provide years of enjoyment.",
      "With over 15 years of professional {serviceType} experience, we provide comprehensive solutions for {cityName} property owners. Our systematic approach ensures consistent, high-quality results that exceed industry standards."
    ],
    [TEMPLATE_TYPES.COMMUNITY_FOCUSED]: [
      "As your local {cityName} {serviceType} specialists, we understand the unique needs of our community. We're committed to providing personalized service and building lasting relationships with our neighbors throughout the {cityName} area.",
      "Proudly serving {cityName} families and businesses with dedicated {serviceType} care. We know our community's preferences and work closely with local suppliers to deliver the best value and service.",
      "Your trusted {cityName} neighbors for all {serviceType} needs. We're invested in our community's success and take pride in enhancing local properties with beautiful, functional water features."
    ],
    [TEMPLATE_TYPES.NATURE_INSPIRED]: [
      "Creating sustainable {serviceType} solutions that work in harmony with {cityName}'s natural environment. Our eco-friendly approaches promote water conservation while creating beautiful, self-sustaining ecosystems.",
      "Natural {serviceType} design that enhances {cityName}'s landscape and supports local wildlife. We use native plants and environmentally responsible techniques to create water features that thrive naturally.",
      "Eco-conscious {serviceType} solutions for {cityName} that respect the environment while creating stunning water features. Our sustainable practices ensure your pond contributes positively to the local ecosystem."
    ],
    [TEMPLATE_TYPES.TECHNICAL_EXPERT]: [
      "Advanced {serviceType} engineering and cutting-edge technology deliver superior performance in {cityName}. Our precision equipment and scientific approach ensure optimal water quality and system efficiency.",
      "State-of-the-art {serviceType} solutions powered by the latest technology and engineering expertise. We use advanced monitoring systems and precision equipment for unmatched results in {cityName}.",
      "Technical excellence in {serviceType} services for {cityName}. Our engineering-based approach combines advanced equipment with scientific water management for superior performance and reliability."
    ],
    [TEMPLATE_TYPES.LOCAL_HERITAGE]: [
      "Traditional {serviceType} craftsmanship meets modern expertise in {cityName}. We honor time-tested techniques while incorporating contemporary innovations to deliver heritage-quality results.",
      "Heritage {serviceType} methods refined over generations, now serving {cityName} with traditional quality and modern reliability. Our craftsmen bring decades of experience to every project.",
      "Preserving traditional {serviceType} artistry while embracing modern standards for {cityName}. Our heritage approach ensures your water feature reflects both timeless beauty and contemporary functionality."
    ]
  }
};

// Randomization Functions
export const getRandomTemplate = (citySlug) => {
  // Use city slug to create consistent randomization
  const hash = citySlug.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const templateKeys = Object.keys(TEMPLATE_TYPES);
  const templateIndex = Math.abs(hash) % templateKeys.length;
  return TEMPLATE_TYPES[templateKeys[templateIndex]];
};

export const getRandomContent = (templateType, contentType, citySlug, serviceType, cityName, state) => {
  const variations = CONTENT_VARIATIONS[contentType][templateType];
  if (!variations) return '';
  
  // Use city slug for consistent randomization
  const hash = citySlug.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const index = Math.abs(hash) % variations.length;
  let content = variations[index];
  
  // Replace placeholders
  content = content.replace(/{serviceType}/g, serviceType);
  content = content.replace(/{cityName}/g, cityName);
  content = content.replace(/{state}/g, state);
  
  return content;
};

// Generate unique content for a service area page
export const generateServicePageContent = (citySlug, serviceType, cityName, state) => {
  const templateType = getRandomTemplate(citySlug);
  
  return {
    templateType,
    heroTitle: getRandomContent(templateType, 'heroTitles', citySlug, serviceType, cityName, state),
    heroSubtitle: getRandomContent(templateType, 'heroSubtitles', citySlug, serviceType, cityName, state),
    overview: getRandomContent(templateType, 'overviewContent', citySlug, serviceType, cityName, state),
    residentialServices: CONTENT_VARIATIONS.residentialServices[templateType].map(service => 
      service.replace(/{serviceType}/g, serviceType)
    ),
    whyChooseUs: getRandomContent(templateType, 'whyChooseUs', citySlug, serviceType, cityName, state)
  };
};

// Additional randomization for visual elements
export const getRandomImages = (templateType, citySlug) => {
  const imageSets = {
    [TEMPLATE_TYPES.PROFESSIONAL]: [
      '/images/professional-pond-1.jpg',
      '/images/professional-pond-2.jpg',
      '/images/professional-pond-3.jpg'
    ],
    [TEMPLATE_TYPES.COMMUNITY_FOCUSED]: [
      '/images/community-pond-1.jpg',
      '/images/community-pond-2.jpg',
      '/images/community-pond-3.jpg'
    ],
    [TEMPLATE_TYPES.NATURE_INSPIRED]: [
      '/images/natural-pond-1.jpg',
      '/images/natural-pond-2.jpg',
      '/images/natural-pond-3.jpg'
    ],
    [TEMPLATE_TYPES.TECHNICAL_EXPERT]: [
      '/images/technical-pond-1.jpg',
      '/images/technical-pond-2.jpg',
      '/images/technical-pond-3.jpg'
    ],
    [TEMPLATE_TYPES.LOCAL_HERITAGE]: [
      '/images/heritage-pond-1.jpg',
      '/images/heritage-pond-2.jpg',
      '/images/heritage-pond-3.jpg'
    ]
  };
  
  const hash = citySlug.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const images = imageSets[templateType] || imageSets[TEMPLATE_TYPES.PROFESSIONAL];
  const index = Math.abs(hash) % images.length;
  return images[index];
};

export default {
  TEMPLATE_TYPES,
  CONTENT_VARIATIONS,
  getRandomTemplate,
  getRandomContent,
  generateServicePageContent,
  getRandomImages
};
