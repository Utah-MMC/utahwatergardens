// Services Data for Utah Water Gardens
// Comprehensive breakdown of all services offered

export const servicesData = {
  pondServices: {
    category: 'Pond Services',
    description: 'Complete pond design, construction, and maintenance services',
    services: [
      {
        id: 'pond-design-build',
        name: 'Pond Design & Build',
        description: 'Custom pond design and construction services for residential and commercial properties',
        icon: '🏗️',
        features: [
          'Custom Design Consultation',
          'Site Analysis & Planning',
          'Excavation & Construction',
          'Liner Installation',
          'Waterfall & Stream Features',
          'Electrical Installation',
          'Plant Installation',
          'Fish Introduction',
          'Initial Setup & Cycling'
        ],
        process: [
          {
            step: 1,
            title: 'Initial Consultation',
            description: 'Discuss your vision, budget, and site requirements',
            duration: '1-2 hours'
          },
          {
            step: 2,
            title: 'Site Analysis',
            description: 'Evaluate location, soil, drainage, and access',
            duration: '1-2 hours'
          },
          {
            step: 3,
            title: 'Design & Planning',
            description: 'Create detailed plans and 3D renderings',
            duration: '1-2 weeks'
          },
          {
            step: 4,
            title: 'Permits & Approvals',
            description: 'Handle all necessary permits and approvals',
            duration: '1-4 weeks'
          },
          {
            step: 5,
            title: 'Construction',
            description: 'Excavation, liner installation, and feature construction',
            duration: '1-3 weeks'
          },
          {
            step: 6,
            title: 'Installation & Setup',
            description: 'Install equipment, plants, and establish ecosystem',
            duration: '3-5 days'
          }
        ],
        pricing: {
          small: '$3,000 - $8,000',
          medium: '$8,000 - $20,000',
          large: '$20,000 - $50,000+',
          note: 'Pricing varies based on size, complexity, and features'
        },
        timeline: '2-8 weeks',
        warranty: '2 years on construction, 1 year on equipment'
      },
      {
        id: 'pond-maintenance',
        name: 'Pond Maintenance',
        description: 'Regular maintenance services to keep your pond healthy and beautiful year-round',
        icon: '🔧',
        features: [
          'Weekly Maintenance Visits',
          'Water Quality Testing',
          'Filter Cleaning & Maintenance',
          'Pump & Equipment Service',
          'Plant Care & Pruning',
          'Fish Health Monitoring',
          'Seasonal Preparation',
          'Emergency Repairs',
          'Water Treatment'
        ],
        process: [
          {
            step: 1,
            title: 'Initial Assessment',
            description: 'Evaluate current pond condition and needs',
            duration: '1 hour'
          },
          {
            step: 2,
            title: 'Maintenance Plan',
            description: 'Create customized maintenance schedule',
            duration: '1 day'
          },
          {
            step: 3,
            title: 'Regular Service',
            description: 'Weekly or bi-weekly maintenance visits',
            duration: '1-2 hours per visit'
          },
          {
            step: 4,
            title: 'Seasonal Care',
            description: 'Special seasonal preparation and care',
            duration: '2-4 hours per season'
          }
        ],
        pricing: {
          basic: '$150 - $300/month',
          premium: '$300 - $500/month',
          commercial: '$500 - $1,000/month',
          note: 'Pricing based on pond size and service level'
        },
        timeline: 'Ongoing',
        warranty: 'Service guarantee on all maintenance work'
      },
      {
        id: 'pond-cleaning',
        name: 'Pond Cleaning',
        description: 'Deep cleaning and restoration services for existing ponds',
        icon: '🧽',
        features: [
          'Complete Pond Draining',
          'Sludge & Debris Removal',
          'Liner Cleaning & Inspection',
          'Equipment Cleaning',
          'Water Quality Restoration',
          'Plant Care & Pruning',
          'Fish Temporary Housing',
          'Ecosystem Re-establishment',
          'Post-Cleaning Monitoring'
        ],
        process: [
          {
            step: 1,
            title: 'Pre-Cleaning Assessment',
            description: 'Evaluate pond condition and plan cleaning approach',
            duration: '1 hour'
          },
          {
            step: 2,
            title: 'Fish & Plant Removal',
            description: 'Safely remove and temporarily house fish and plants',
            duration: '2-3 hours'
          },
          {
            step: 3,
            title: 'Draining & Cleaning',
            description: 'Drain pond and remove all debris and sludge',
            duration: '4-6 hours'
          },
          {
            step: 4,
            title: 'Equipment Service',
            description: 'Clean and service all pond equipment',
            duration: '2-3 hours'
          },
          {
            step: 5,
            title: 'Refill & Re-establishment',
            description: 'Refill pond and re-establish ecosystem',
            duration: '3-4 hours'
          }
        ],
        pricing: {
          small: '$500 - $1,000',
          medium: '$1,000 - $2,500',
          large: '$2,500 - $5,000+',
          note: 'Pricing based on pond size and condition'
        },
        timeline: '1-2 days',
        warranty: '30 days on cleaning work'
      },
      {
        id: 'water-quality-testing',
        name: 'Water Quality Testing',
        description: 'Professional water quality testing and treatment services',
        icon: '🧪',
        features: [
          'Comprehensive Water Analysis',
          'pH Level Testing',
          'Ammonia & Nitrite Testing',
          'Dissolved Oxygen Testing',
          'Alkalinity & Hardness Testing',
          'Treatment Recommendations',
          'Follow-up Testing',
          'Water Quality Reports',
          'Emergency Testing'
        ],
        process: [
          {
            step: 1,
            title: 'Water Sample Collection',
            description: 'Collect representative water samples',
            duration: '30 minutes'
          },
          {
            step: 2,
            title: 'Laboratory Analysis',
            description: 'Perform comprehensive water quality tests',
            duration: '1-2 hours'
          },
          {
            step: 3,
            title: 'Results Analysis',
            description: 'Analyze results and identify issues',
            duration: '30 minutes'
          },
          {
            step: 4,
            title: 'Treatment Plan',
            description: 'Develop treatment recommendations',
            duration: '1 hour'
          },
          {
            step: 5,
            title: 'Follow-up Testing',
            description: 'Monitor results and adjust treatment',
            duration: 'Ongoing'
          }
        ],
        pricing: {
          basic: '$75 - $150',
          comprehensive: '$150 - $300',
          emergency: '$200 - $400',
          note: 'Pricing includes testing and recommendations'
        },
        timeline: '1-2 days',
        warranty: 'Testing accuracy guarantee'
      },
      {
        id: 'equipment-repair',
        name: 'Equipment Repair',
        description: 'Professional repair and maintenance of pond pumps, filters, and equipment',
        icon: '⚙️',
        features: [
          'Pump Repair & Service',
          'Filter System Maintenance',
          'Electrical Repairs',
          'Plumbing Repairs',
          'UV Sterilizer Service',
          'Aeration System Repair',
          'Emergency Repairs',
          'Equipment Upgrades',
          'Preventive Maintenance'
        ],
        process: [
          {
            step: 1,
            title: 'Diagnosis',
            description: 'Identify equipment problems and issues',
            duration: '30-60 minutes'
          },
          {
            step: 2,
            title: 'Repair Plan',
            description: 'Develop repair strategy and timeline',
            duration: '30 minutes'
          },
          {
            step: 3,
            title: 'Parts & Service',
            description: 'Order parts and perform repairs',
            duration: '1-3 days'
          },
          {
            step: 4,
            title: 'Testing & Verification',
            description: 'Test equipment and verify proper operation',
            duration: '1 hour'
          }
        ],
        pricing: {
          diagnosis: '$75 - $150',
          minor: '$150 - $300',
          major: '$300 - $800',
          emergency: '$200 - $500',
          note: 'Pricing varies by repair complexity'
        },
        timeline: '1-5 days',
        warranty: '90 days on all repairs'
      },
      {
        id: 'seasonal-services',
        name: 'Seasonal Services',
        description: 'Specialized services for each season to keep your pond healthy year-round',
        icon: '🍂',
        features: [
          'Spring Startup',
          'Summer Maintenance',
          'Fall Cleanup',
          'Winter Protection',
          'Seasonal Plant Care',
          'Fish Seasonal Care',
          'Equipment Seasonal Service',
          'Water Quality Seasonal Management',
          'Emergency Seasonal Repairs'
        ],
        process: [
          {
            step: 1,
            title: 'Seasonal Assessment',
            description: 'Evaluate pond needs for the upcoming season',
            duration: '1 hour'
          },
          {
            step: 2,
            title: 'Seasonal Preparation',
            description: 'Prepare pond and equipment for season',
            duration: '2-4 hours'
          },
          {
            step: 3,
            title: 'Ongoing Seasonal Care',
            description: 'Provide season-specific maintenance',
            duration: 'Ongoing'
          },
          {
            step: 4,
            title: 'Season Transition',
            description: 'Prepare for next season',
            duration: '2-3 hours'
          }
        ],
        pricing: {
          spring: '$200 - $500',
          summer: '$150 - $400',
          fall: '$300 - $600',
          winter: '$200 - $400',
          note: 'Pricing based on pond size and services needed'
        },
        timeline: 'Seasonal',
        warranty: 'Seasonal service guarantee'
      }
    ]
  },
  pondSupplies: {
    category: 'Pond Supplies',
    description: 'High-quality pond equipment, supplies, and accessories',
    services: [
      {
        id: 'filtration-systems',
        name: 'Filtration Systems',
        description: 'Complete filtration solutions for clean, healthy pond water',
        icon: '🔍',
        features: [
          'Biological Filters',
          'Mechanical Filters',
          'UV Sterilizers',
          'Skimmers',
          'Bog Filters',
          'Pressurized Filters',
          'Gravity Filters',
          'Custom Filtration',
          'Filter Media'
        ],
        products: [
          'Laguna Pressure-Flo Filter',
          'Aquascape BioFalls Filter',
          'Oase BioSmart Filter',
          'Pondmaster UV Sterilizer',
          'Aquascape Skimmer',
          'Custom Bog Filter Systems'
        ],
        pricing: {
          basic: '$200 - $500',
          premium: '$500 - $1,500',
          commercial: '$1,500 - $5,000+',
          note: 'Pricing varies by system size and features'
        }
      },
      {
        id: 'pumps-aeration',
        name: 'Pumps & Aeration',
        description: 'High-efficiency pumps and aeration systems for optimal water circulation',
        icon: '💨',
        features: [
          'Submersible Pumps',
          'External Pumps',
          'Aeration Systems',
          'Air Pumps',
          'Diffusers',
          'Fountain Pumps',
          'Waterfall Pumps',
          'Energy-Efficient Models',
          'Variable Speed Pumps'
        ],
        products: [
          'Laguna Max-Flo Pumps',
          'Aquascape AquaForce Pumps',
          'Oase AquaMax Pumps',
          'Aquascape Aeration Systems',
          'Laguna Aeration Kits',
          'Custom Aeration Solutions'
        ],
        pricing: {
          basic: '$150 - $400',
          premium: '$400 - $1,200',
          commercial: '$1,200 - $3,000+',
          note: 'Pricing based on flow rate and features'
        }
      },
      {
        id: 'pond-liners',
        name: 'Pond Liners',
        description: 'Durable, high-quality pond liners for all pond sizes and applications',
        icon: '🛡️',
        features: [
          'EPDM Rubber Liners',
          'PVC Liners',
          'RPE Liners',
          'Underlayment',
          'Custom Sizing',
          'Professional Installation',
          'Warranty Coverage',
          'Leak Testing',
          'Liner Repair'
        ],
        products: [
          'Firestone EPDM Liners',
          'Aquascape EPDM Liners',
          'BTL Liners RPE',
          'Custom Cut Liners',
          'Underlayment Fabric',
          'Liner Repair Kits'
        ],
        pricing: {
          small: '$200 - $500',
          medium: '$500 - $1,500',
          large: '$1,500 - $5,000+',
          note: 'Pricing based on size and material type'
        }
      },
      {
        id: 'water-treatments',
        name: 'Water Treatments',
        description: 'Safe, effective water treatments for optimal pond health',
        icon: '💧',
        features: [
          'Beneficial Bacteria',
          'Water Conditioners',
          'pH Adjusters',
          'Algae Treatments',
          'Sludge Removers',
          'Fish Medications',
          'Plant Fertilizers',
          'Natural Treatments',
          'Emergency Treatments'
        ],
        products: [
          'Aquascape Beneficial Bacteria',
          'API Pond Treatments',
          'Microbe-Lift Products',
          'Natural Algae Control',
          'Pond Care Treatments',
          'Custom Treatment Plans'
        ],
        pricing: {
          basic: '$20 - $50',
          premium: '$50 - $150',
          commercial: '$150 - $500+',
          note: 'Pricing varies by product type and size'
        }
      },
      {
        id: 'pond-lighting',
        name: 'Pond Lighting',
        description: 'Beautiful, energy-efficient lighting solutions for your pond',
        icon: '💡',
        features: [
          'LED Underwater Lights',
          'Spot Lights',
          'Pathway Lighting',
          'Solar Lights',
          'Color-Changing Lights',
          'Remote Control',
          'Low Voltage Systems',
          'Professional Installation',
          'Lighting Design'
        ],
        products: [
          'Aquascape LED Lights',
          'Laguna LED Systems',
          'Solar Pond Lights',
          'Color-Changing LED',
          'Custom Lighting Design',
          'Professional Installation'
        ],
        pricing: {
          basic: '$100 - $300',
          premium: '$300 - $800',
          commercial: '$800 - $2,000+',
          note: 'Pricing based on number of lights and features'
        }
      },
      {
        id: 'tools-accessories',
        name: 'Tools & Accessories',
        description: 'Essential tools and accessories for pond maintenance and care',
        icon: '🔧',
        features: [
          'Pond Nets',
          'Pond Vacuums',
          'Water Test Kits',
          'Planting Tools',
          'Fish Nets',
          'Cleaning Tools',
          'Maintenance Kits',
          'Safety Equipment',
          'Storage Solutions'
        ],
        products: [
          'Aquascape Maintenance Kits',
          'Laguna Pond Tools',
          'API Test Kits',
          'Professional Nets',
          'Pond Vacuums',
          'Safety Equipment'
        ],
        pricing: {
          basic: '$25 - $75',
          premium: '$75 - $200',
          professional: '$200 - $500+',
          note: 'Pricing varies by tool type and quality'
        }
      }
    ]
  },
  plantsFish: {
    category: 'Plants & Fish',
    description: 'Beautiful aquatic plants and healthy fish for your pond',
    services: [
      {
        id: 'aquatic-plants',
        name: 'Aquatic Plants',
        description: 'Wide selection of water lilies, marginal plants, and floating plants',
        icon: '🌿',
        features: [
          'Water Lilies',
          'Marginal Plants',
          'Floating Plants',
          'Submerged Plants',
          'Bog Plants',
          'Native Plants',
          'Tropical Plants',
          'Hardy Plants',
          'Plant Care Services'
        ],
        products: [
          'Hardy Water Lilies',
          'Tropical Water Lilies',
          'Marginal Plants',
          'Floating Plants',
          'Native Utah Plants',
          'Plant Care Packages'
        ],
        pricing: {
          basic: '$15 - $50',
          premium: '$50 - $150',
          specialty: '$150 - $500+',
          note: 'Pricing varies by plant type and size'
        }
      },
      {
        id: 'koi-goldfish',
        name: 'Koi & Goldfish',
        description: 'Healthy, beautiful koi and goldfish for your pond',
        icon: '🐟',
        features: [
          'Koi Fish',
          'Goldfish',
          'Comet Goldfish',
          'Shubunkin',
          'Fantail Goldfish',
          'Fish Health Guarantee',
          'Quarantine Service',
          'Fish Care Guidance',
          'Breeding Services'
        ],
        products: [
          'Premium Koi',
          'Goldfish Varieties',
          'Healthy Fish Guarantee',
          'Quarantine Service',
          'Fish Care Packages',
          'Breeding Services'
        ],
        pricing: {
          basic: '$10 - $50',
          premium: '$50 - $200',
          show: '$200 - $1,000+',
          note: 'Pricing varies by fish size and quality'
        }
      }
    ]
  },
  consultation: {
    category: 'Consultation Services',
    description: 'Expert advice and consultation for all your pond needs',
    services: [
      {
        id: 'design-consultation',
        name: 'Design Consultation',
        description: 'Professional design advice for your pond project',
        icon: '🎨',
        features: [
          'Site Analysis',
          'Design Planning',
          '3D Renderings',
          'Plant Selection',
          'Fish Selection',
          'Equipment Recommendations',
          'Budget Planning',
          'Timeline Planning',
          'Permit Assistance'
        ],
        pricing: {
          basic: '$150 - $300',
          premium: '$300 - $600',
          commercial: '$600 - $1,500+',
          note: 'Pricing based on consultation scope'
        }
      },
      {
        id: 'maintenance-consultation',
        name: 'Maintenance Consultation',
        description: 'Expert advice on pond maintenance and care',
        icon: '📋',
        features: [
          'Pond Assessment',
          'Maintenance Planning',
          'Problem Diagnosis',
          'Treatment Recommendations',
          'Equipment Evaluation',
          'Care Schedule Development',
          'Training Sessions',
          'Follow-up Support',
          'Emergency Consultation'
        ],
        pricing: {
          basic: '$100 - $200',
          premium: '$200 - $400',
          emergency: '$300 - $500',
          note: 'Pricing varies by consultation type'
        }
      }
    ]
  }
};

// Service categories for organization
export const serviceCategories = [
  'Pond Services',
  'Pond Supplies',
  'Plants & Fish',
  'Consultation Services'
];

// Service types for filtering
export const serviceTypes = [
  'Design & Build',
  'Maintenance',
  'Cleaning',
  'Testing',
  'Repair',
  'Seasonal',
  'Equipment',
  'Plants',
  'Fish',
  'Consultation'
];
