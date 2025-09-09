// Centralized site data for better organization and scalability

export const siteConfig = {
  name: 'Utah Water Gardens',
  tagline: 'Complete Pond & Water Feature Solutions',
  description: 'We design, build, and maintain beautiful custom ponds, waterfalls, and aquatic plant features throughout Utah.',
  url: 'https://utahwatergardens.com',
  phone: '(801) 590-8516',
  email: 'contact@utahwatergardens.com',
  address: {
    street: '1234 Pond Lane',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84101',
    full: '1234 Pond Lane, Salt Lake City, UT 84101'
  },
  hours: {
    monday: '10:00 AM - 6:00 PM',
    tuesday: '10:00 AM - 6:00 PM',
    wednesday: '10:00 AM - 6:00 PM',
    thursday: '10:00 AM - 6:00 PM',
    friday: '10:00 AM - 6:00 PM',
    saturday: '9:00 AM - 5:00 PM',
    sunday: 'Closed'
  },
  social: {
    facebook: 'https://facebook.com/utahwatergardens',
    instagram: 'https://instagram.com/utahwatergardens',
    youtube: 'https://youtube.com/utahwatergardens'
  }
};

export const navigation = {
  main: [
    { name: 'Home', path: '/' },
    { name: 'Plants & Fish', path: '/plants-fish' },
    { name: 'Pond Services', path: '/pond-services' },
    { name: 'Pond Supplies', path: '/pond-supplies' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Shop', path: '/shop' }
  ],
  footer: [
    {
      title: 'Services',
      links: [
        { name: 'Pond Design & Build', path: '/pond-design-build' },
        { name: 'Pond Maintenance', path: '/pond-maintenance' },
        { name: 'Pond Cleaning', path: '/pond-cleaning' },
        { name: 'Pond Dredging', path: '/pond-dredging' },
        { name: 'Lake Dredging', path: '/lake-dredging' },
        { name: 'Equipment Repair', path: '/equipment-repair' }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Aquatic Plants', path: '/aquatic-plants' },
        { name: 'Koi & Goldfish', path: '/koi-goldfish' },
        { name: 'Water Lilies', path: '/water-lilies' },
        { name: 'Pond Liners', path: '/pond-liners' },
        { name: 'Pumps & Aeration', path: '/pumps-aeration' },
        { name: 'Filtration Systems', path: '/filtration-systems' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Care Guides', path: '/resources/care-guides' },
        { name: 'Tips & Tricks', path: '/resources/tips-tricks' },
        { name: 'Seasonal Care', path: '/resources/seasonal-care' },
        { name: 'Troubleshooting', path: '/resources/troubleshooting' },
        { name: 'Video Tutorials', path: '/resources/video-tutorials' },
        { name: 'FAQ', path: '/resources/faq' }
      ]
    },
    {
      title: 'Service Areas',
      links: [
        { name: 'Salt Lake City', path: '/service-areas/salt-lake-city' },
        { name: 'West Jordan', path: '/service-areas/west-jordan' },
        { name: 'Sandy', path: '/service-areas/sandy' },
        { name: 'Murray', path: '/service-areas/murray' },
        { name: 'View All Areas', path: '/service-areas' }
      ]
    }
  ]
};

export const serviceAreas = [
  'salt-lake-city', 'west-jordan', 'sandy', 'murray', 'west-valley-city',
  'south-jordan', 'riverton', 'herriman', 'bluffdale', 'draper', 'midvale',
  'taylorsville', 'kearns', 'magna', 'millcreek', 'holladay', 'cottonwood-heights',
  'clearfield', 'bountiful', 'kaysville', 'farmington', 'centerville',
  'north-salt-lake', 'woods-cross', 'syracuse', 'clinton', 'roy', 'south-ogden',
  'washington-terrace', 'riverdale', 'pleasant-view', 'north-ogden', 'ogden',
  'layton', 'lehi', 'american-fork', 'pleasant-grove', 'lindon', 'spanish-fork',
  'springville', 'mapleton', 'payson', 'salem', 'cedar-hills', 'alpine',
  'highland', 'saratoga-springs', 'eagle-mountain', 'cedar-valley', 'genola',
  'goshen', 'woodland-hills', 'provo', 'orem', 'kamas', 'oakley', 'francis',
  'hoytsville', 'peoa', 'samak', 'snyderville', 'pepperwood', 'red-ledges',
  'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon',
  'wendover', 'dugway', 'ibapah', 'heber-city', 'midway', 'cedar-city',
  'st-george', 'mesquite', 'nephi', 'mona', 'manti', 'ephraim', 'richfield',
  'salina', 'delta', 'fillmore', 'beaver', 'milford', 'enoch', 'parowan',
  'hurricane', 'la-verkin', 'virgin', 'springdale', 'ivins', 'santa-clara',
  'washington', 'leeds', 'coalville', 'park-city', 'tooele'
];

export const productCategories = {
  plants: [
    'aquatic-plants', 'water-lilies', 'floating-plants', 'marginal-plants'
  ],
  fish: [
    'koi-goldfish'
  ],
  supplies: [
    'pond-liners', 'pumps-aeration', 'filtration-systems', 'water-treatments',
    'pond-lighting', 'tools-accessories'
  ],
  services: [
    'pond-design-build', 'pond-maintenance', 'pond-cleaning', 'pond-dredging',
    'lake-dredging', 'equipment-repair', 'seasonal-services', 'water-quality-testing',
    'harvesting', 'truxor-service'
  ]
};

export const resourceCategories = [
  'care-guides', 'tips-tricks', 'seasonal-care', 'troubleshooting',
  'video-tutorials', 'faq'
];

export const seoDefaults = {
  title: 'Utah Water Gardens - Complete Pond & Water Feature Solutions',
  description: 'We design, build, and maintain beautiful custom ponds, waterfalls, and aquatic plant features throughout Utah.',
  keywords: 'pond maintenance, pond cleaning, pond construction, pond dredging, aquatic plants, koi fish, pond supplies, utah water gardens',
  image: '/images/utahWaterGardensLogo500x463.png',
  type: 'website'
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Utah Water Gardens",
    "url": "https://utahwatergardens.com",
    "logo": "https://utahwatergardens.com/images/utahWaterGardensLogo500x463.png",
    "description": "Complete pond and water feature solutions in Utah",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Pond Lane",
      "addressLocality": "Salt Lake City",
      "addressRegion": "UT",
      "postalCode": "84101",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-801-590-8516",
      "contactType": "customer service",
      "areaServed": "UT",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/utahwatergardens",
      "https://instagram.com/utahwatergardens",
      "https://youtube.com/utahwatergardens"
    ]
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Utah Water Gardens",
    "image": "https://utahwatergardens.com/images/utahWaterGardensLogo500x463.png",
    "description": "Complete pond and water feature solutions in Utah",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Pond Lane",
      "addressLocality": "Salt Lake City",
      "addressRegion": "UT",
      "postalCode": "84101",
      "addressCountry": "US"
    },
    "telephone": "+1-801-590-8516",
    "openingHours": [
      "Mo-Fr 10:00-18:00",
      "Sa 09:00-17:00"
    ],
    "serviceArea": {
      "@type": "State",
      "name": "Utah"
    }
  }
};
