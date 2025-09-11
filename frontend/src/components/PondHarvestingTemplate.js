import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import CTA from './CTA';
import './PondHarvestingTemplate.css';

const PondHarvestingTemplate = ({
  cityName,
  citySlug,
  state = "Utah",
  phoneNumber = "(801) 590-8516",
  latitude,
  longitude,
  landmarks = [],
  businessDistricts = [],
  permitInfo = {},
  contentSections = {},
  heroBackgroundImage = "/images/pondDredging-topaz-enhance-3.9x.jpeg",
  heroBackgroundImageAlt = "Professional pond and lake harvesting equipment in action"
}) => {
  
  // Cost Calculator Function
  const calculateEstimate = () => {
    const lakeSize = parseFloat(document.getElementById('lakeSize').value);
    const vegetationLevel = document.getElementById('vegetationLevel').value;
    const accessDifficulty = document.getElementById('accessDifficulty').value;
    
    let basePrice = lakeSize * 500; // $500 per acre base
    
    // Vegetation multipliers
    const vegetationMultipliers = {
      light: 1.0,
      moderate: 1.3,
      heavy: 1.6,
      severe: 2.0
    };
    
    // Access difficulty multipliers
    const accessMultipliers = {
      easy: 1.0,
      moderate: 1.2,
      difficult: 1.5
    };
    
    const totalPrice = basePrice * vegetationMultipliers[vegetationLevel] * accessMultipliers[accessDifficulty];
    
    const resultDiv = document.getElementById('estimateResult');
    resultDiv.innerHTML = `
      <div className="estimate-display">
        <h4>Estimated Cost Range</h4>
        <div className="price-range">
          $${Math.round(totalPrice * 0.8).toLocaleString()} - $${Math.round(totalPrice * 1.2).toLocaleString()}
        </div>
        <p className="estimate-note">*This is a preliminary estimate. Final pricing depends on site conditions and specific requirements.</p>
        <a href="/contact" className="btn btn-primary">Get Detailed Quote</a>
      </div>
    `;
  };

  // FAQ Toggle Function
  const toggleFAQ = (e) => {
    const faqItem = e.target.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const icon = faqItem.querySelector('.faq-icon');
    
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.textContent = '+';
    } else {
      // Close all other FAQs
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.maxHeight = null;
      });
      document.querySelectorAll('.faq-icon').forEach(item => {
        item.textContent = '+';
      });
      
      // Open clicked FAQ
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.textContent = '−';
    }
  };

  // Before/After Slider Function
  const initBeforeAfterSlider = () => {
    const slider = document.querySelector('.before-after-slider');
    const handle = document.querySelector('.slider-handle');
    const beforeImage = document.querySelector('.before-image');
    
    if (!slider || !handle || !beforeImage) return;
    
    let isDragging = false;
    
    const updateSlider = (x) => {
      const rect = slider.getBoundingClientRect();
      const xPos = Math.max(0, Math.min(x - rect.left, rect.width));
      const percentage = (xPos / rect.width) * 100;
      
      beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      handle.style.left = `${percentage}%`;
    };
    
    const handleMouseDown = (e) => {
      isDragging = true;
      updateSlider(e.clientX);
      e.preventDefault();
      e.stopPropagation();
    };
    
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
      e.preventDefault();
    };
    
    const handleMouseUp = (e) => {
      isDragging = false;
      e.preventDefault();
    };
    
    const handleTouchStart = (e) => {
      isDragging = true;
      updateSlider(e.touches[0].clientX);
      e.preventDefault();
      e.stopPropagation();
    };
    
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      updateSlider(e.touches[0].clientX);
      e.preventDefault();
    };
    
    const handleTouchEnd = (e) => {
      isDragging = false;
      e.preventDefault();
    };
    
    const handleSliderClick = (e) => {
      if (e.target === handle || e.target.closest('.slider-handle')) return;
      updateSlider(e.clientX);
    };
    
    // Remove any existing event listeners first
    handle.removeEventListener('mousedown', handleMouseDown);
    handle.removeEventListener('touchstart', handleTouchStart);
    slider.removeEventListener('click', handleSliderClick);
    
    // Add event listeners
    handle.addEventListener('mousedown', handleMouseDown);
    handle.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('click', handleSliderClick);
    
    // Global event listeners for mouse/touch
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    // Initialize slider at 50%
    setTimeout(() => {
      const rect = slider.getBoundingClientRect();
      updateSlider(rect.left + rect.width / 2);
    }, 50);
  };

  // Initialize slider when component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => {
      initBeforeAfterSlider();
    }, 200);
    
    // Re-initialize on window resize
    const handleResize = () => {
      setTimeout(initBeforeAfterSlider, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Mobile viewport height fix
  React.useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial value
    setVH();

    // Update on resize
    const handleResize = () => {
      setVH();
    };

    // Update on orientation change
    const handleOrientationChange = () => {
      setTimeout(setVH, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);
  
  // Default content sections for pond harvesting
  const defaultContentSections = {
    overview: `Professional lake harvesting services in ${cityName}, ${state}. Our specialized lake vegetation management and harvesting solutions help maintain healthy lake ecosystems while preserving the natural beauty of your lakes throughout the ${cityName} area. We combine advanced lake harvesting techniques with comprehensive lake maintenance services.`,
    
    whatIsHarvesting: `Lake harvesting is a sophisticated aquatic vegetation management technique that involves the systematic removal of excess aquatic plants, algae, and organic matter from lakes and water bodies. This advanced lake harvesting process combines mechanical, biological, and environmental engineering principles to maintain optimal lake water quality, prevent oxygen depletion, and preserve the delicate ecological balance of your lake ecosystem. Lake harvesting specifically targets problematic vegetation like cattails, water lilies, algae blooms, bullrush, chara, milfoil, duckweed, azolla, and other invasive species that can quickly take over and choke your water body.`,
    
    whyHarvesting: `Regular lake harvesting is crucial for maintaining healthy lake ecosystems. Without proper lake harvesting management, excessive aquatic vegetation can lead to oxygen depletion, fish kills, unpleasant odors, and reduced recreational value. Our advanced lake harvesting services help prevent these issues while promoting sustainable lake management through cutting-edge technology and proven methodologies.`,
    
    harvestingMethods: {
      mechanicalHarvesting: `Mechanical lake harvesting involves the use of specialized equipment to physically remove aquatic vegetation from lakes. Our fleet includes state-of-the-art lake harvesting boats, amphibious vehicles, and precision cutting systems that can operate in lake depths from 6 inches to 20 feet. This lake harvesting method is highly effective for large-scale lake vegetation removal while minimizing environmental impact.`,
      
      selectiveHarvesting: `Selective lake harvesting targets specific problem species while preserving beneficial lake vegetation. Our team uses advanced identification techniques and precision lake harvesting equipment to remove invasive species like Eurasian watermilfoil, curly-leaf pondweed, and hydrilla while maintaining native plant communities that support healthy lake ecosystems.`,
      
      bottomHarvesting: `For deeper lakes, we employ specialized bottom lake harvesting techniques using our amphibious equipment. This lake harvesting process removes accumulated organic matter, dead vegetation, and sediment that can contribute to lake water quality issues and excessive nutrient loading.`,
      
      shorelineHarvesting: `Shoreline lake harvesting focuses on vegetation management along lake edges. Our lake harvesting equipment can operate in shallow water and marshy areas, removing overgrown lake vegetation that impedes access while maintaining natural shoreline stability and wildlife habitat.`
    },
    
    amphibiousEquipment: {
      amphibiousExcavator: {
        name: "Amphibious Excavator",
        description: "Our flagship amphibious equipment is a revolutionary machine that operates both on land and water. This advanced marvel features a unique pontoon system that allows it to float and maneuver in water while maintaining the power and precision of a traditional excavator.",
        specifications: [
          "Operating weight: 5,000 kg (11,000 lbs)",
          "Engine: 74 HP Kubota diesel engine",
          "Working depth: Up to 2.5 meters (8.2 feet)",
          "Harvesting capacity: 15-20 cubic meters per hour",
          "Amphibious capability: Can transition from land to water seamlessly",
          "Precision cutting: 360-degree rotating cutting head",
          "Environmental impact: Minimal disturbance to water quality"
        ],
        advantages: [
          "Access to areas unreachable by traditional boats",
          "Minimal environmental impact with low ground pressure",
          "Versatile attachment system for various harvesting tasks",
          "Precision control for selective vegetation removal",
          "Ability to work in shallow water and marshy conditions",
          "Reduced need for multiple pieces of equipment"
        ]
      },
      
      specializedAttachments: [
        {
          name: "Aquatic Vegetation Cutter",
          description: "High-precision cutting head designed specifically for aquatic vegetation removal. Features rotating blades that can cut through thick vegetation while preserving beneficial plants.",
          capabilities: ["Selective cutting", "Variable cutting depth", "360-degree rotation", "Minimal sediment disturbance"]
        },
        {
          name: "Sediment Removal Bucket",
          description: "Specialized bucket attachment for removing accumulated organic matter and sediment from pond and lake bottoms.",
          capabilities: ["Precise sediment removal", "Minimal water turbidity", "Efficient material handling", "Environmental protection"]
        },
        {
          name: "Aquatic Rake System",
          description: "Advanced raking system for collecting and removing cut vegetation from the water surface.",
          capabilities: ["Surface vegetation collection", "Efficient material transport", "Minimal water disturbance", "High-capacity collection"]
        }
      ]
    },
    
    highTechMachinery: {
      gpsNavigation: `Our harvesting equipment is equipped with advanced GPS navigation systems that allow for precise positioning and systematic coverage of large water bodies. This technology ensures complete coverage while avoiding over-harvesting and maintaining consistent results.`,
      
      waterQualityMonitoring: `Real-time water quality monitoring systems track pH, dissolved oxygen, temperature, and turbidity levels during harvesting operations. This data helps us adjust our methods in real-time to minimize environmental impact and optimize results.`,
      
      remoteOperation: `Some of our specialized equipment features remote operation capabilities, allowing our operators to work in challenging conditions while maintaining safety and precision. This technology is particularly valuable in deep water or areas with limited access.`,
      
      dataLogging: `All harvesting operations are logged with detailed data including location, depth, vegetation types removed, and environmental conditions. This information helps us track progress, optimize future operations, and provide detailed reports to clients.`
    },
    
    harvestingProcess: [
      {
        step: "Assessment & Planning",
        description: "We conduct a comprehensive evaluation of your water body, including water quality testing, vegetation analysis, and ecological assessment to develop a customized harvesting plan."
      },
      {
        step: "Equipment Setup",
        description: "Our professional harvesting equipment is carefully positioned and calibrated for optimal performance, ensuring efficient and environmentally responsible vegetation removal."
      },
      {
        step: "Selective Harvesting",
        description: "Using specialized harvesting techniques, we selectively remove excess vegetation while preserving beneficial plants and maintaining the natural ecosystem balance."
      },
      {
        step: "Material Processing",
        description: "Harvested vegetation is processed and removed from the site using environmentally responsible methods, with options for composting or proper disposal."
      },
      {
        step: "Water Quality Monitoring",
        description: "Post-harvesting water quality testing ensures optimal conditions for fish, plants, and overall ecosystem health."
      },
      {
        step: "Follow-up Care",
        description: "We provide ongoing monitoring and maintenance recommendations to help maintain the benefits of harvesting throughout the season."
      }
    ],
    
    equipment: [
      {
        name: "Amphibious Excavator",
        description: "Our flagship amphibious equipment that operates both on land and water. Features a unique pontoon system for seamless land-to-water transitions and precision cutting capabilities.",
        image: "/images/truxor-equipment-1.jpg",
        specifications: "5,000 kg operating weight, 74 HP engine, 2.5m working depth, 15-20 m³/hour capacity"
      },
      {
        name: "Aquatic Vegetation Harvesting Boats",
        description: "Specialized boats equipped with advanced cutting and collection systems for efficient large-scale vegetation removal in deep water applications.",
        image: "/images/pondDredging-topaz-enhance-3.9x.jpeg",
        specifications: "GPS navigation, real-time monitoring, selective cutting systems, high-capacity collection"
      },
      {
        name: "Precision Water Quality Monitoring",
        description: "Advanced testing systems that monitor pH, dissolved oxygen, temperature, and turbidity levels in real-time during harvesting operations.",
        image: "/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg",
        specifications: "Real-time data logging, automated alerts, environmental compliance tracking"
      },
      {
        name: "Specialized Attachment Systems",
        description: "Modular attachment system including aquatic vegetation cutters, sediment removal buckets, and surface collection rakes for comprehensive harvesting operations.",
        image: "/images/truxor-equipment-2.jpg",
        specifications: "360-degree rotation, variable cutting depth, minimal environmental impact, high-efficiency collection"
      }
    ],
    
    benefits: [
      "Improved water quality and clarity",
      "Enhanced oxygen levels for fish and aquatic life",
      "Reduced algae blooms and unwanted vegetation",
      "Better recreational opportunities",
      "Prevention of fish kills and ecosystem collapse",
      "Maintained property values and aesthetic appeal",
      "Compliance with environmental regulations",
      "Sustainable long-term water management"
    ],
    
    seasonalConsiderations: `The timing of lake harvesting is crucial for optimal results. In ${cityName}, we recommend lake harvesting during late spring through early fall when lake vegetation growth is most active. Our team considers local climate conditions, lake water temperature, and seasonal growth patterns to schedule lake harvesting at the most effective times.`,
    
    environmentalImpact: `Our lake harvesting methods are designed to minimize environmental impact while maximizing ecological benefits. We use selective lake harvesting techniques that preserve beneficial lake vegetation, maintain habitat for wildlife, and promote natural lake water filtration processes. All harvested lake materials are processed using environmentally responsible methods.`,
    
    costFactors: `Lake harvesting costs vary based on several factors including lake size, vegetation density, accessibility, and frequency of service. We provide detailed estimates that include lake harvesting equipment costs, labor, material disposal, and any necessary permits. Our transparent pricing ensures you understand exactly what lake harvesting services you're receiving.`,
    
    maintenanceSchedule: `Regular lake harvesting is essential for maintaining lake water quality. We recommend annual lake harvesting for most lakes, with more frequent service for heavily vegetated lakes. Our team will work with you to develop a customized lake harvesting maintenance schedule that fits your budget and lake water quality goals.`,
    
    localRegulations: `In ${cityName} and throughout ${state}, there may be specific regulations regarding lake vegetation management. Our team is familiar with local permitting requirements and environmental regulations, ensuring all lake harvesting activities comply with applicable laws and guidelines.`,
    
    whyChooseUs: `Utah Water Gardens has been providing professional lake harvesting services in ${cityName} and surrounding areas for over 15 years. Our experienced team, specialized amphibious equipment, and commitment to environmental responsibility make us the premier choice for lake vegetation management in the ${cityName} region. We offer comprehensive lake services including design, construction, and ongoing lake maintenance.`,
    
    localInfo: `${cityName} is home to numerous lakes and water features that benefit from professional lake harvesting services. Our local knowledge of ${cityName}'s climate, lake water conditions, and seasonal patterns allows us to provide the most effective lake harvesting solutions for your specific needs.`,
    
    serviceAreas: `We proudly serve all areas of ${cityName} and surrounding communities. Our lake harvesting services are available for residential lakes, commercial water features, municipal lakes, and recreational water bodies throughout the ${cityName} region.`,
    
    // Comprehensive Plant Problem Identification and Removal
    plantProblems: {
      cattails: {
        name: "Cattails (Typha)",
        description: "Cattails are one of the most aggressive pond and lake plants, forming dense stands that can completely take over shallow water areas. These tall, reed-like plants spread rapidly through underground rhizomes and can quickly transform open water into marshland.",
        problems: [
          "Rapid spread through underground rhizomes",
          "Blocks access to water for recreation and livestock",
          "Reduces open water area for fish habitat",
          "Creates stagnant water conditions",
          "Harbors mosquitoes and other pests",
          "Reduces property values and aesthetic appeal"
        ],
        removalMethods: [
          "Mechanical cutting and removal of root systems",
          "Amphibious equipment for deep rhizome removal",
          "Selective herbicide application for large infestations",
          "Regular maintenance to prevent regrowth"
        ],
        ranchPondSpecific: "In ranch ponds, cattail removal is critical for livestock access to water. Our amphibious equipment can remove cattails while maintaining water quality for cattle and horses."
      },
      
      waterLilies: {
        name: "Water Lilies (Nymphaea)",
        description: "While beautiful, water lilies can quickly overpopulate ponds and lakes, covering the entire surface and blocking sunlight from reaching underwater plants and fish. They spread through seeds and rhizomes, creating dense mats that impede water circulation.",
        problems: [
          "Complete surface coverage blocking sunlight",
          "Prevents oxygen exchange with atmosphere",
          "Blocks recreational activities like fishing and boating",
          "Creates stagnant, low-oxygen conditions",
          "Harbors algae and other unwanted vegetation",
          "Reduces fish habitat and spawning areas"
        ],
        removalMethods: [
          "Selective harvesting to maintain some lilies while removing excess",
          "Root system removal to prevent rapid regrowth",
          "Mechanical raking and collection systems",
          "Seasonal maintenance programs"
        ]
      },
      
      algae: {
        name: "Algae Blooms (Various Species)",
        description: "Algae blooms are one of the most visible and problematic issues in ponds and lakes. They can range from surface scum to thick mats that completely cover the water, creating dangerous conditions for fish and wildlife.",
        problems: [
          "Blocks sunlight penetration to deeper water",
          "Creates oxygen depletion during decomposition",
          "Produces toxins harmful to fish and wildlife",
          "Creates foul odors and unsightly appearance",
          "Makes water unsafe for swimming and recreation",
          "Can cause fish kills and ecosystem collapse"
        ],
        removalMethods: [
          "Mechanical skimming and collection",
          "Aeration systems to improve water circulation",
          "Nutrient management to prevent future blooms",
          "Biological controls and water quality improvement"
        ]
      },
      
      bullrush: {
        name: "Bullrush (Schoenoplectus)",
        description: "Bullrush forms dense stands in shallow water areas, creating impenetrable barriers that block access and reduce open water. These tall, grass-like plants spread quickly and are particularly problematic in ranch ponds and irrigation reservoirs.",
        problems: [
          "Forms dense, impenetrable stands",
          "Blocks livestock access to water",
          "Reduces open water area for fish",
          "Creates stagnant water conditions",
          "Harbors pests and reduces water quality",
          "Difficult to control once established"
        ],
        removalMethods: [
          "Mechanical cutting below water level",
          "Root system excavation with specialized equipment",
          "Seasonal maintenance to prevent regrowth",
          "Integrated management with other vegetation control"
        ]
      },
      
      chara: {
        name: "Chara (Stonewort)",
        description: "Chara is a submerged aquatic plant that forms dense underwater mats. It has a distinctive musky odor and can completely fill shallow areas, making swimming and fishing difficult while reducing water quality.",
        problems: [
          "Forms dense underwater mats",
          "Produces unpleasant musky odor",
          "Makes swimming and recreation difficult",
          "Reduces water clarity and quality",
          "Can dominate entire pond bottom",
          "Creates habitat for unwanted aquatic life"
        ],
        removalMethods: [
          "Mechanical harvesting from pond bottom",
          "Amphibious equipment for shallow water removal",
          "Seasonal maintenance programs",
          "Water quality management to prevent regrowth"
        ]
      },
      
      milfoil: {
        name: "Milfoil (Myriophyllum)",
        description: "Milfoil is an invasive submerged plant that forms dense underwater forests. It spreads rapidly through fragmentation and can completely take over a water body, making it nearly impossible to fish or swim.",
        problems: [
          "Forms dense underwater forests",
          "Spreads rapidly through plant fragments",
          "Makes fishing lines and boat propellers useless",
          "Reduces water flow and circulation",
          "Creates stagnant, low-oxygen conditions",
          "Extremely difficult to control once established"
        ],
        removalMethods: [
          "Mechanical harvesting with specialized equipment",
          "Careful removal to prevent fragmentation",
          "Regular maintenance to prevent regrowth",
          "Integrated management with other control methods"
        ]
      },
      
      duckweed: {
        name: "Duckweed (Lemna)",
        description: "Duckweed forms a green carpet on the water surface, completely covering ponds and lakes. While it provides some benefits, excessive growth can block sunlight and create oxygen depletion problems.",
        problems: [
          "Forms complete surface coverage",
          "Blocks sunlight penetration",
          "Reduces oxygen levels in water",
          "Makes water appear stagnant and unhealthy",
          "Can double in size every few days",
          "Difficult to control due to rapid growth"
        ],
        removalMethods: [
          "Surface skimming and collection",
          "Mechanical raking systems",
          "Biological controls and water quality management",
          "Regular maintenance to prevent overgrowth"
        ]
      },
      
      azolla: {
        name: "Azolla (Water Fern)",
        description: "Azolla is a small floating fern that can quickly cover the entire surface of ponds and lakes. It forms thick mats that block sunlight and can cause serious water quality problems.",
        problems: [
          "Rapid surface coverage",
          "Blocks sunlight and oxygen exchange",
          "Creates thick, impenetrable mats",
          "Reduces water quality and clarity",
          "Can cause fish kills in severe cases",
          "Makes recreational activities impossible"
        ],
        removalMethods: [
          "Surface skimming and mechanical removal",
          "Regular maintenance to prevent overgrowth",
          "Water quality management",
          "Integrated control with other vegetation management"
        ]
      }
    },
    
    ranchPondHarvesting: {
      title: "Ranch Pond Harvesting and Cattail Removal",
      description: `Ranch pond harvesting is a specialized service focused on maintaining water access for livestock while preserving water quality. In ${cityName} and throughout ${state}, ranch ponds are essential for cattle, horses, and other livestock. Our ranch pond harvesting services ensure your animals have clean, accessible water year-round.`,
      cattailRemoval: {
        importance: "Cattail removal in ranch ponds is critical for maintaining livestock access to water. Cattails can quickly take over shallow areas, creating impenetrable barriers that prevent cattle and horses from reaching the water's edge.",
        methods: [
          "Amphibious equipment for deep rhizome removal",
          "Selective cutting to maintain some vegetation for erosion control",
          "Seasonal maintenance to prevent regrowth",
          "Integrated management with other pond maintenance"
        ],
        benefits: [
          "Improved livestock access to clean water",
          "Better water quality for animal health",
          "Reduced mosquito breeding areas",
          "Maintained property values and aesthetics"
        ]
      },
      livestockConsiderations: [
        "Safe removal methods that don't harm livestock",
        "Maintaining water quality during harvesting",
        "Preserving some vegetation for erosion control",
        "Scheduling around grazing seasons"
      ]
    },
    
    underwaterPlantRemoval: {
      title: "Underwater Plant Removal and Management",
      description: "Underwater plant removal is essential for maintaining healthy pond and lake ecosystems. Submerged vegetation like chara, milfoil, and other underwater plants can quickly take over, making swimming, fishing, and boating difficult while reducing water quality.",
      commonUnderwaterPlants: [
        "Chara (Stonewort) - forms dense underwater mats",
        "Milfoil - creates underwater forests",
        "Pondweed - blocks water flow and recreation",
        "Coontail - forms thick underwater masses",
        "Water celery - spreads rapidly in shallow areas"
      ],
      removalTechniques: [
        "Mechanical harvesting with specialized underwater equipment",
        "Amphibious vehicles for shallow water removal",
        "Precision cutting to prevent fragmentation",
        "Seasonal maintenance programs"
      ],
      benefits: [
        "Improved water circulation and quality",
        "Better fish habitat and spawning areas",
        "Enhanced recreational opportunities",
        "Reduced mosquito breeding areas"
      ]
    },
    
    plantMitigationStrategies: {
      title: "Aquatic Plant Mitigation and Prevention",
      description: "Effective plant mitigation involves both removal and prevention strategies. Our comprehensive approach combines immediate removal with long-term management to prevent future overgrowth and maintain healthy water bodies.",
      preventionMethods: [
        "Regular monitoring and early intervention",
        "Water quality management to prevent excessive nutrients",
        "Aeration systems to improve circulation",
        "Biological controls and beneficial plant introduction"
      ],
      mitigationTechniques: [
        "Selective removal to maintain beneficial vegetation",
        "Integrated pest management approaches",
        "Seasonal maintenance schedules",
        "Environmental monitoring and adjustment"
      ],
      longTermManagement: [
        "Annual maintenance contracts",
        "Water quality testing and improvement",
        "Ecosystem balance restoration",
        "Preventive treatment programs"
      ]
    }
  };

  const sections = { ...defaultContentSections, ...contentSections };

  return (
    <>
        <SEO
          title={`Lake Harvesting Service in ${cityName} | Utah Water Gardens`}
          description={`Professional lake harvesting services in ${cityName}, ${state}. Expert lake vegetation management, water quality improvement, and ecosystem maintenance. Licensed & insured. Call ${phoneNumber}.`}
          keywords={`lake harvesting ${cityName}, lake harvesting service ${cityName}, lake vegetation management ${cityName}, lake maintenance ${cityName}, lake cleaning ${cityName}, aquatic vegetation removal ${cityName}, ${state} lake services, utah water gardens`}
          canonical={`https://utahwatergardens.com/lake-harvesting/${citySlug}`}
        />
      
      <div className="pond-harvesting-template">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img 
              src={heroBackgroundImage} 
              alt={heroBackgroundImageAlt}
              className="hero-bg-img"
            />
            <div className="hero-overlay">
              <div className="container">
                <div className="hero-content">
                  <h1>Lake Harvesting Service in {cityName}</h1>
                  <p>Expert lake vegetation management and water quality improvement services for lakes and ponds throughout the {cityName} area.</p>
                  <div className="hero-buttons">
                    <a href={`tel:${phoneNumber}`} className="btn btn-primary">Call {phoneNumber}</a>
                    <Link to="/contact" className="btn btn-outline">Get Free Estimate</Link>
                    <Link to="/pond-services/harvesting" className="btn btn-secondary">Learn More About Harvesting</Link>
                  </div>
                  <div className="hero-stats">
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Lakes Harvested</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Satisfaction Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section">
          <div className="container">
            <div className="content-grid">
              <div className="content-main">
                <h2>Lake Harvesting Service in {cityName}</h2>
                <p className="lead">{sections.overview}</p>
                
                <h3>What is Lake Harvesting?</h3>
                <p>{sections.whatIsHarvesting}</p>
                
                <h3>Why is Lake Harvesting Important?</h3>
                <p>{sections.whyHarvesting}</p>
                
                <p>For more detailed information about our <Link to="/pond-services/water-quality">water quality testing</Link> and <Link to="/pond-services/maintenance">pond maintenance services</Link>, visit our comprehensive service pages.</p>
              </div>
              
              <div className="content-sidebar">
                <div className="service-card">
                  <h3>Quick Service Request</h3>
                  <p>Get a free estimate for your lake harvesting needs.</p>
                  <a href={`tel:${phoneNumber}`} className="btn btn-primary">Call Now</a>
                  <Link to="/contact" className="btn btn-outline">Contact Form</Link>
                  <Link to="/pond-services/truxor-t50" className="btn btn-secondary">View Our Equipment</Link>
                </div>
                
                <div className="cost-calculator-card">
                  <h3>Quick Cost Estimate</h3>
                  <div className="calculator-form">
                    <div className="form-group">
                      <label>Lake Size (acres)</label>
                      <select className="form-control" id="lakeSize">
                        <option value="0.5">0.5 acres</option>
                        <option value="1">1 acre</option>
                        <option value="2">2 acres</option>
                        <option value="5">5 acres</option>
                        <option value="10">10+ acres</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Vegetation Level</label>
                      <select className="form-control" id="vegetationLevel">
                        <option value="light">Light</option>
                        <option value="moderate">Moderate</option>
                        <option value="heavy">Heavy</option>
                        <option value="severe">Severe</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Access Difficulty</label>
                      <select className="form-control" id="accessDifficulty">
                        <option value="easy">Easy</option>
                        <option value="moderate">Moderate</option>
                        <option value="difficult">Difficult</option>
                      </select>
                    </div>
                    <button className="btn btn-primary" onClick={() => calculateEstimate()}>
                      Get Estimate
                    </button>
                    <div className="estimate-result" id="estimateResult"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Harvesting Methods Section */}
        <section className="section alt methods-bg">
          <div className="section-background">
            <img src="/images/IMG_3269-faceai-sharpen.jpeg" alt="Professional pond harvesting equipment in action" />
            <div className="section-overlay"></div>
            <div className="section-pattern"></div>
          </div>
          <div className="container">
            <h2>Advanced Lake Harvesting Methods & Techniques</h2>
            <p className="section-intro">We employ multiple specialized lake harvesting methods to address different vegetation challenges and lake conditions.</p>
            
            {/* Video Showcase */}
            <div className="video-showcase">
              <div className="video-container">
                <video 
                  className="harvesting-video"
                  controls 
                  poster="/images/truxor-equipment-1.jpg"
                >
                  <source src="/images/truxorharvestingshort.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                  <h3>See Our Amphibious Equipment in Action</h3>
                  <p>Watch our specialized lake harvesting equipment efficiently remove vegetation while preserving the natural ecosystem.</p>
                </div>
              </div>
            </div>
            
            <div className="methods-grid">
              <div className="method-card">
                <h3>Mechanical Harvesting</h3>
                <p>{sections.harvestingMethods.mechanicalHarvesting}</p>
                <ul>
                  <li>Operates in water depths from 6 inches to 20 feet</li>
                  <li>State-of-the-art harvesting boats and amphibious vehicles</li>
                  <li>Precision cutting systems for large-scale removal</li>
                  <li>Minimal environmental impact</li>
                </ul>
              </div>
              
              <div className="method-card">
                <h3>Selective Harvesting</h3>
                <p>{sections.harvestingMethods.selectiveHarvesting}</p>
                <ul>
                  <li>Targets invasive species like Eurasian watermilfoil</li>
                  <li>Preserves beneficial native vegetation</li>
                  <li>Advanced identification techniques</li>
                  <li>Maintains healthy ecosystem balance</li>
                </ul>
              </div>
              
              <div className="method-card">
                <h3>Bottom Harvesting</h3>
                <p>{sections.harvestingMethods.bottomHarvesting}</p>
                <ul>
                  <li>Removes accumulated organic matter and sediment</li>
                  <li>Specialized amphibious equipment for deep water</li>
                  <li>Reduces nutrient loading</li>
                  <li>Improves water quality and clarity</li>
                </ul>
              </div>
              
              <div className="method-card">
                <h3>Shoreline Harvesting</h3>
                <p>{sections.harvestingMethods.shorelineHarvesting}</p>
                <ul>
                  <li>Operates in shallow water and marshy areas</li>
                  <li>Removes overgrown vegetation</li>
                  <li>Maintains natural shoreline stability</li>
                  <li>Preserves wildlife habitat</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Amphibious Equipment Section */}
        <section className="section equipment-bg">
          <div className="section-background">
            <img src="/images/IMG_3265-denoise.jpeg" alt="Amphibious excavator in action" />
            <div className="section-overlay"></div>
            <div className="section-pattern equipment-pattern"></div>
          </div>
          <div className="container">
            <h2>Our Revolutionary Amphibious Equipment</h2>
            <p className="section-intro">Our amphibious excavator represents the pinnacle of amphibious harvesting technology, allowing us to access areas unreachable by traditional equipment. Learn more about our <Link to="/pond-services/truxor-t50">specialized amphibious equipment</Link> and <Link to="/pond-services/pond-dredging">pond dredging services</Link>.</p>
            
            <div className="equipment-showcase">
              <div className="equipment-main">
                <h3>{sections.amphibiousEquipment.amphibiousExcavator.name}</h3>
                <p>{sections.amphibiousEquipment.amphibiousExcavator.description}</p>
                
                <div className="specifications">
                  <h4>Technical Specifications</h4>
                  <ul>
                    {sections.amphibiousEquipment.amphibiousExcavator.specifications.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="advantages">
                  <h4>Key Advantages</h4>
                  <ul>
                    {sections.amphibiousEquipment.amphibiousExcavator.advantages.map((advantage, index) => (
                      <li key={index}>{advantage}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="equipment-image">
                <img src="/images/truxor-equipment-1.jpg" alt="Amphibious Excavator" />
              </div>
            </div>
            
            <div className="attachments-section">
              <h3>Specialized Attachment Systems</h3>
              <div className="attachments-grid">
                {sections.amphibiousEquipment.specializedAttachments.map((attachment, index) => (
                  <div key={index} className="attachment-card">
                    <h4>{attachment.name}</h4>
                    <p>{attachment.description}</p>
                    <div className="capabilities">
                      <h5>Capabilities:</h5>
                      <ul>
                        {attachment.capabilities.map((capability, capIndex) => (
                          <li key={capIndex}>{capability}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* High-Tech Machinery Section */}
        <section className="section alt tech-bg">
          <div className="section-background">
            <img src="/images/IMG_3263-faceai-sharpen.jpeg" alt="Advanced water quality monitoring equipment" />
            <div className="section-overlay"></div>
            <div className="section-pattern tech-pattern"></div>
          </div>
          <div className="container">
            <h2>Cutting-Edge Technology & Monitoring Systems</h2>
            <p className="section-intro">Our advanced technology ensures precise, efficient, and environmentally responsible harvesting operations.</p>
            
            <div className="tech-features">
              <div className="tech-feature">
                <h3>GPS Navigation & Precision Positioning</h3>
                <p>{sections.highTechMachinery.gpsNavigation}</p>
                <ul>
                  <li>Systematic coverage of large water bodies</li>
                  <li>Precise positioning for consistent results</li>
                  <li>Complete coverage without over-harvesting</li>
                  <li>Real-time tracking and progress monitoring</li>
                </ul>
              </div>
              
              <div className="tech-feature">
                <h3>Real-Time Water Quality Monitoring</h3>
                <p>{sections.highTechMachinery.waterQualityMonitoring}</p>
                <ul>
                  <li>Continuous pH, oxygen, and temperature tracking</li>
                  <li>Real-time turbidity monitoring</li>
                  <li>Automated environmental impact assessment</li>
                  <li>Instant adjustment of harvesting methods</li>
                </ul>
              </div>
              
              <div className="tech-feature">
                <h3>Remote Operation Capabilities</h3>
                <p>{sections.highTechMachinery.remoteOperation}</p>
                <ul>
                  <li>Safe operation in challenging conditions</li>
                  <li>Precision control in deep water applications</li>
                  <li>Enhanced safety for operators</li>
                  <li>Access to previously unreachable areas</li>
                </ul>
              </div>
              
              <div className="tech-feature">
                <h3>Comprehensive Data Logging</h3>
                <p>{sections.highTechMachinery.dataLogging}</p>
                <ul>
                  <li>Detailed operation records and progress tracking</li>
                  <li>Environmental condition documentation</li>
                  <li>Vegetation type and quantity analysis</li>
                  <li>Client reporting and future optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Harvesting Process Section */}
        <section className="section alt process-bg">
          <div className="section-background">
            <img src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" alt="Beautiful lake landscape showing harvesting results" />
            <div className="section-overlay"></div>
          </div>
          <div className="container">
            <h2>Our Professional Lake Harvesting Process</h2>
            <p className="section-intro">We follow a systematic approach to ensure effective and environmentally responsible lake harvesting results.</p>
            
            <div className="process-steps">
              {sections.harvestingProcess.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h3>{step.step}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="section equipment-showcase-bg">
          <div className="section-background">
            <img src="/images/truxor-equipment-2.jpg" alt="Professional harvesting equipment and attachments" />
            <div className="section-overlay"></div>
          </div>
          <div className="container">
            <h2>Professional Lake Harvesting Equipment</h2>
            <p className="section-intro">We use state-of-the-art equipment designed specifically for lake vegetation management and harvesting.</p>
            
            <div className="equipment-grid">
              {sections.equipment.map((item, index) => (
                <div key={index} className="equipment-card">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section alt">
          <div className="container">
            <h2>Benefits of Professional Lake Harvesting</h2>
            <p className="section-intro">Regular lake harvesting provides numerous benefits for your lake and surrounding ecosystem. Combine lake harvesting with our <Link to="/pond-services/cleaning">pond cleaning services</Link> and <Link to="/pond-services/seasonal">seasonal maintenance</Link> for optimal results.</p>
            
            <div className="benefits-grid">
              {sections.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Plant Problem Identification Section */}
        <section className="section plant-problems-bg">
          <div className="section-background">
            <img src="/images/IMG_3269-faceai-sharpen.jpeg" alt="Overgrown pond with various aquatic plants" />
            <div className="section-overlay"></div>
            <div className="section-pattern plant-pattern"></div>
          </div>
          <div className="container">
            <h2>Common Aquatic Plant Problems and Removal Solutions</h2>
            <p className="section-intro">Understanding the specific plant problems in your pond or lake is crucial for effective harvesting. Here's a comprehensive guide to the most common problematic aquatic vegetation and our specialized removal methods.</p>
            
            <div className="plant-problems-grid">
              {Object.entries(sections.plantProblems).map(([key, plant]) => (
                <div key={key} className="plant-problem-card">
                  <h3>{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  
                  <div className="plant-problems">
                    <h4>Problems Caused:</h4>
                    <ul>
                      {plant.problems.map((problem, index) => (
                        <li key={index}>{problem}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="plant-removal">
                    <h4>Our Removal Methods:</h4>
                    <ul>
                      {plant.removalMethods.map((method, index) => (
                        <li key={index}>{method}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {plant.ranchPondSpecific && (
                    <div className="ranch-pond-note">
                      <h4>Ranch Pond Specific:</h4>
                      <p>{plant.ranchPondSpecific}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ranch Pond Harvesting Section */}
        <section className="section alt ranch-pond-bg">
          <div className="section-background">
            <img src="/images/pondDredging-topaz-enhance-3.9x.jpeg" alt="Ranch pond with cattle access" />
            <div className="section-overlay"></div>
          </div>
          <div className="container">
            <h2>{sections.ranchPondHarvesting.title}</h2>
            <p className="section-intro">{sections.ranchPondHarvesting.description}</p>
            
            <div className="ranch-pond-content">
              <div className="cattail-removal">
                <h3>Cattail Removal in Ranch Ponds</h3>
                <p>{sections.ranchPondHarvesting.cattailRemoval.importance}</p>
                
                <div className="removal-methods">
                  <h4>Our Cattail Removal Methods:</h4>
                  <ul>
                    {sections.ranchPondHarvesting.cattailRemoval.methods.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="removal-benefits">
                  <h4>Benefits of Professional Cattail Removal:</h4>
                  <ul>
                    {sections.ranchPondHarvesting.cattailRemoval.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="livestock-considerations">
                <h3>Livestock Considerations</h3>
                <ul>
                  {sections.ranchPondHarvesting.livestockConsiderations.map((consideration, index) => (
                    <li key={index}>{consideration}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Underwater Plant Removal Section */}
        <section className="section underwater-removal-bg">
          <div className="section-background">
            <img src="/images/IMG_3263-faceai-sharpen.jpeg" alt="Underwater plant removal equipment" />
            <div className="section-overlay"></div>
            <div className="section-pattern underwater-pattern"></div>
          </div>
          <div className="container">
            <h2>{sections.underwaterPlantRemoval.title}</h2>
            <p className="section-intro">{sections.underwaterPlantRemoval.description}</p>
            
            <div className="underwater-content">
              <div className="common-plants">
                <h3>Common Underwater Plants We Remove:</h3>
                <ul>
                  {sections.underwaterPlantRemoval.commonUnderwaterPlants.map((plant, index) => (
                    <li key={index}>{plant}</li>
                  ))}
                </ul>
              </div>
              
              <div className="removal-techniques">
                <h3>Our Underwater Removal Techniques:</h3>
                <ul>
                  {sections.underwaterPlantRemoval.removalTechniques.map((technique, index) => (
                    <li key={index}>{technique}</li>
                  ))}
                </ul>
              </div>
              
              <div className="removal-benefits">
                <h3>Benefits of Underwater Plant Removal:</h3>
                <ul>
                  {sections.underwaterPlantRemoval.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plant Mitigation Strategies Section */}
        <section className="section alt">
          <div className="container">
            <h2>{sections.plantMitigationStrategies.title}</h2>
            <p className="section-intro">{sections.plantMitigationStrategies.description}</p>
            
            <div className="mitigation-grid">
              <div className="mitigation-card">
                <h3>Prevention Methods</h3>
                <ul>
                  {sections.plantMitigationStrategies.preventionMethods.map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mitigation-card">
                <h3>Mitigation Techniques</h3>
                <ul>
                  {sections.plantMitigationStrategies.mitigationTechniques.map((technique, index) => (
                    <li key={index}>{technique}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mitigation-card">
                <h3>Long-Term Management</h3>
                <ul>
                  {sections.plantMitigationStrategies.longTermManagement.map((management, index) => (
                    <li key={index}>{management}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Considerations */}
        <section className="section">
          <div className="container">
            <h2>Seasonal Lake Harvesting Considerations</h2>
            <p>{sections.seasonalConsiderations}</p>
            <p>For comprehensive seasonal care, explore our <Link to="/resources/seasonal-care">seasonal care guide</Link> and <Link to="/resources/care-guides">pond care resources</Link>.</p>
            
            <div className="seasonal-info">
              <div className="seasonal-card">
                <h3>Spring Lake Harvesting</h3>
                <p>Early season lake harvesting helps control initial lake vegetation growth and prepares your lake for the growing season.</p>
              </div>
              <div className="seasonal-card">
                <h3>Summer Lake Harvesting</h3>
                <p>Mid-season lake harvesting maintains lake water quality during peak vegetation growth and recreational use.</p>
              </div>
              <div className="seasonal-card">
                <h3>Fall Lake Harvesting</h3>
                <p>Late season lake harvesting prepares your lake for winter and removes accumulated organic matter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="section alt environmental-bg">
          <div className="section-background">
            <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Healthy aquatic ecosystem with water lilies" />
            <div className="section-overlay"></div>
          </div>
          <div className="container">
            <h2>Environmental Responsibility</h2>
            <p>{sections.environmentalImpact}</p>
            <p>Learn more about our commitment to <Link to="/about">environmental stewardship</Link> and sustainable pond management practices.</p>
            
            <div className="environmental-features">
              <div className="feature">
                <h3>Sustainable Practices</h3>
                <p>Our harvesting methods promote long-term ecosystem health and biodiversity.</p>
              </div>
              <div className="feature">
                <h3>Wildlife Protection</h3>
                <p>We carefully plan harvesting activities to minimize impact on fish, birds, and other wildlife.</p>
              </div>
              <div className="feature">
                <h3>Water Quality Preservation</h3>
                <p>Our techniques maintain natural water filtration processes and prevent contamination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost and Maintenance */}
        <section className="section">
          <div className="container">
            <div className="cost-maintenance-grid">
              <div className="cost-info">
                <h2>Lake Harvesting Costs & Investment</h2>
                <p>{sections.costFactors}</p>
                <p>Get a detailed <Link to="/free-estimate">free estimate</Link> for your specific lake harvesting needs, or explore our <Link to="/pond-services">complete service offerings</Link>.</p>
                <ul>
                  <li>Lake size and depth</li>
                  <li>Lake vegetation density and type</li>
                  <li>Lake accessibility and site conditions</li>
                  <li>Frequency of lake harvesting service required</li>
                  <li>Lake material disposal and processing costs</li>
                </ul>
              </div>
              
              <div className="maintenance-info">
                <h2>Maintenance Schedule</h2>
                <p>{sections.maintenanceSchedule}</p>
                <p>Create a comprehensive maintenance plan with our <Link to="/pond-services/maintenance">pond maintenance services</Link> and <Link to="/resources/tips-tricks">expert tips</Link>.</p>
                <div className="schedule-options">
                  <div className="schedule-option">
                    <h4>Annual Lake Harvesting</h4>
                    <p>Recommended for most residential lakes</p>
                  </div>
                  <div className="schedule-option">
                    <h4>Bi-Annual Lake Harvesting</h4>
                    <p>For heavily vegetated or large lakes</p>
                  </div>
                  <div className="schedule-option">
                    <h4>Custom Lake Harvesting Schedule</h4>
                    <p>Tailored to your specific lake needs and budget</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="section alt">
          <div className="container">
            <h2>Local Regulations & Permits</h2>
            <p>{sections.localRegulations}</p>
            <p>Our team handles all necessary permits and compliance requirements. Learn more about our <Link to="/about">licensing and certifications</Link>.</p>
            
            <div className="regulations-info">
              <div className="regulation-item">
                <h3>Permit Requirements</h3>
                <p>We handle all necessary permits and ensure compliance with local environmental regulations.</p>
              </div>
              <div className="regulation-item">
                <h3>Environmental Compliance</h3>
                <p>Our methods meet or exceed all state and local environmental protection standards.</p>
              </div>
              <div className="regulation-item">
                <h3>Documentation</h3>
                <p>We provide complete documentation of all harvesting activities for regulatory compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section alt">
          <div className="container">
            <h2>What Our Clients Say About Our Lake Harvesting Services</h2>
            <div className="testimonials-carousel">
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>"Utah Water Gardens completely transformed our lake! The harvesting process was professional and efficient. Our water quality improved dramatically within weeks."</p>
                  <div className="testimonial-author">
                    <strong>Sarah Johnson</strong>
                    <span>Lake Owner, {cityName}</span>
                  </div>
                  <div className="testimonial-rating">★★★★★</div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>"Their amphibious equipment is incredible - they were able to access areas of our lake that other companies couldn't reach. Highly recommend!"</p>
                  <div className="testimonial-author">
                    <strong>Mike Chen</strong>
                    <span>Property Manager, {cityName}</span>
                  </div>
                  <div className="testimonial-rating">★★★★★</div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>"The team was knowledgeable, professional, and environmentally conscious. Our lake looks amazing and the fish are thriving!"</p>
                  <div className="testimonial-author">
                    <strong>Jennifer Davis</strong>
                    <span>Homeowner, {cityName}</span>
                  </div>
                  <div className="testimonial-rating">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2>Frequently Asked Questions About Lake Harvesting</h2>
            <div className="faq-accordion">
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>How often should I have my lake harvested?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>Most lakes benefit from annual harvesting, though heavily vegetated lakes may require bi-annual service. We'll assess your specific lake conditions and recommend the optimal schedule.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>Will harvesting harm fish and wildlife?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>No, our selective harvesting methods preserve beneficial vegetation and wildlife habitat. We use techniques that actually improve fish habitat by removing invasive species while maintaining native plants.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>How long does the harvesting process take?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>Harvesting time varies by lake size and vegetation density. A typical 2-acre lake takes 1-2 days, while larger lakes may require 3-5 days. We provide detailed timelines during consultation.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>What happens to the harvested vegetation?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>We dispose of harvested vegetation using environmentally responsible methods, including composting and proper disposal at licensed facilities. We never leave debris on your property.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>Do you provide maintenance after harvesting?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>Yes, we offer ongoing maintenance programs to keep your lake healthy year-round. This includes water quality monitoring, seasonal treatments, and follow-up harvesting as needed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section why-choose-bg">
          <div className="section-background">
            <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Beautiful clean lake with water lilies after professional harvesting" />
            <div className="section-overlay"></div>
            <div className="section-pattern why-choose-pattern"></div>
          </div>
          <div className="container">
            <div className="why-choose-header">
              <h2>Why Choose Utah Water Gardens for Lake Harvesting Service in {cityName}?</h2>
              <p className="why-choose-intro">We're not just another lake service company. We're your local experts with the experience, equipment, and dedication to transform your water feature into a pristine, healthy ecosystem.</p>
            </div>
            
            <div className="why-choose-grid">
              <div className="why-item featured">
                <div className="why-icon">🏆</div>
                <h3>Utah's #1 Lake Harvesting Experts</h3>
                <p>Over 15 years of specialized experience in lake vegetation management. We've successfully harvested 500+ lakes across Utah, earning us the reputation as the state's premier lake harvesting specialists.</p>
                <div className="why-stats">
                  <span>500+ Lakes Harvested</span>
                  <span>15+ Years Experience</span>
                </div>
              </div>
              
              <div className="why-item">
                <div className="why-icon">🚁</div>
                <h3>Revolutionary Amphibious Technology</h3>
                <p>Our state-of-the-art amphibious equipment can access areas unreachable by traditional boats. This cutting-edge technology allows us to harvest vegetation in shallow water, marshy areas, and difficult-to-reach locations.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">🌱</div>
                <h3>Eco-Friendly & Sustainable</h3>
                <p>We use selective harvesting methods that preserve beneficial vegetation while removing invasive species. Our approach promotes long-term lake health and maintains natural wildlife habitats.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">📍</div>
                <h3>Local {cityName} Experts</h3>
                <p>Deep knowledge of {cityName}'s unique climate, water conditions, and seasonal patterns. We understand local regulations and provide solutions tailored specifically to your area's needs.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">⚡</div>
                <h3>Fast & Efficient Service</h3>
                <p>Our advanced equipment and experienced team complete most lake harvesting projects in 1-3 days. We minimize disruption to your property while maximizing results.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">🛡️</div>
                <h3>Fully Licensed & Insured</h3>
                <p>Complete peace of mind with full licensing, insurance coverage, and environmental compliance. We handle all permits and ensure every project meets state regulations.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">💰</div>
                <h3>Competitive Pricing & Guarantees</h3>
                <p>Transparent pricing with no hidden fees. We provide detailed estimates and stand behind our work with satisfaction guarantees. Quality service at fair prices.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">📞</div>
                <h3>24/7 Customer Support</h3>
                <p>Dedicated customer service team available to answer questions, schedule services, and provide ongoing support. We're here when you need us, every step of the way.</p>
              </div>
            </div>
            
            <div className="why-choose-cta">
              <h3>Ready to Experience the Difference?</h3>
              <p>Join hundreds of satisfied customers who trust Utah Water Gardens for their lake harvesting needs.</p>
              <div className="cta-buttons">
                <a href={`tel:${phoneNumber}`} className="btn btn-primary">Call {phoneNumber}</a>
                <Link to="/contact" className="btn btn-outline">Get Free Estimate</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Local Information */}
        <section className="section alt">
          <div className="container">
            <h2>Lake Harvesting Service in {cityName}</h2>
            <p>{sections.localInfo}</p>
            
            {landmarks.length > 0 && (
              <div className="local-landmarks">
                <h3>Local Water Features We Serve</h3>
                <ul>
                  {landmarks.map((landmark, index) => (
                    <li key={index}>
                      {typeof landmark === 'string' ? landmark : landmark.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="service-areas">
              <h3>Service Areas</h3>
              <p>{sections.serviceAreas}</p>
              <p>Explore our <Link to="/pond-gallery">project gallery</Link> to see examples of our harvesting work, or check out our <Link to="/plants-fish">aquatic plants and fish</Link> for post-harvesting pond enhancement.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section">
          <div className="container">
            <h2>Ready to Improve Your Water Quality?</h2>
            <p>Contact Utah Water Gardens today for professional lake harvesting service in {cityName}.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Call Us</h3>
                <a href={`tel:${phoneNumber}`} className="contact-link">{phoneNumber}</a>
                <p>Mon-Sat: 8:00AM-6:00PM</p>
              </div>
              <div className="contact-method">
                <h3>Get Free Estimate</h3>
                <Link to="/contact" className="btn btn-primary">Contact Form</Link>
                <Link to="/free-estimate" className="btn btn-outline">Quick Estimate</Link>
                <p>We respond within 24 hours</p>
              </div>
              <div className="contact-method">
                <h3>Service Area</h3>
                <p>{cityName} and surrounding areas</p>
                <p>Licensed & Insured</p>
                <Link to="/about" className="btn btn-secondary">About Our Team</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="section alt">
          <div className="container">
            <h2>See the Difference: Before & After Lake Harvesting</h2>
            <div className="before-after-container">
              <div className="before-after-slider">
                <div className="before-after-images">
                  <div className="after-image">
                    <img src="/images/2b5d2f918801edaa8047c2741195122c-enhance-4x.jpeg" alt="Lake after harvesting - clean and clear water" />
                    <div className="before-after-label">After</div>
                  </div>
                  <div className="before-image">
                    <img src="/images/IMG_3269-faceai-sharpen.jpeg" alt="Lake before harvesting - overgrown vegetation" />
                    <div className="before-after-label">Before</div>
                  </div>
                </div>
                <div className="slider-handle">
                  <div className="slider-line"></div>
                  <div className="slider-button">
                    <span>⟷</span>
                  </div>
                </div>
              </div>
              <div className="before-after-description">
                <h3>Transform Your Lake with Professional Harvesting</h3>
                <p>Our lake harvesting services remove excess vegetation, improve water clarity, and restore the natural beauty of your water feature. See the dramatic difference professional harvesting can make!</p>
                <ul>
                  <li>Clear, clean water</li>
                  <li>Improved fish habitat</li>
                  <li>Enhanced recreational value</li>
                  <li>Better water circulation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
        
        {/* Floating Action Buttons */}
        <div className="floating-actions">
          <a href={`tel:${phoneNumber}`} className="fab fab-phone" title="Call Now">
            <span>📞</span>
          </a>
          <Link to="/contact" className="fab fab-contact" title="Get Quote">
            <span>💬</span>
          </Link>
          <button className="fab fab-scroll" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} title="Back to Top">
            <span>↑</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PondHarvestingTemplate;
