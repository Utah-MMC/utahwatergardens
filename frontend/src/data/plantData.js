// Comprehensive plant data for Utah Water Gardens

// Helper function to generate care instructions with images
const createCareInstructions = (plantingText, sunlightText, fertilizationText, winterCareText) => ({
  planting: {
    text: plantingText,
    images: [
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ]
  },
  sunlight: {
    text: sunlightText,
    images: [
      '/images/waterLillies-topaz-enhance-4x.jpeg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg'
    ]
  },
  fertilization: {
    text: fertilizationText,
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ]
  },
  winterCare: {
    text: winterCareText,
    images: [
      '/images/IMG_2780.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ]
  }
});

export const plantData = {
  'sunset-changeable-water-lily': {
    id: 'sunset-changeable-water-lily',
    name: 'Sunset Changeable Water Lily',
    scientificName: 'Nymphaea x hybrida',
    category: 'Water Lilies',
    description: 'A stunning water lily with flowers that change color throughout the day, creating a beautiful sunset effect in your pond.',
    detailedDescription: 'The Sunset Changeable Water Lily is a remarkable hybrid that showcases nature\'s artistry. Its flowers open in the morning with one color and gradually transform throughout the day, creating a living sunset display. This variety is perfect for medium to large ponds and provides excellent shade for fish while adding dramatic visual interest.',
    careInstructions: createCareInstructions(
      'Plant in 12-18 inches of water depth. Use heavy clay soil in a planting basket.',
      'Requires 6-8 hours of direct sunlight daily for best flowering.',
      'Fertilize monthly during growing season with aquatic plant fertilizer tablets.',
      'Trim back leaves in fall. In Utah\'s climate, may need protection in very cold winters.'
    ),
    specifications: {
      height: '6-12 inches above water',
      spread: '3-5 feet',
      bloomTime: 'Late spring through early fall',
      hardiness: 'Zones 4-11',
      waterDepth: '12-18 inches'
    },
    benefits: [
      'Provides shade and shelter for fish',
      'Helps control algae growth',
      'Beautiful changing flower colors',
      'Low maintenance once established',
      'Attracts beneficial insects'
    ],
    images: [
      '/images/waterLillies-topaz-enhance-4x.jpeg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg'
    ],
    image: '/images/waterLillies-topaz-enhance-4x.jpeg',
    price: 'Contact for pricing',
    availability: 'Seasonal availability - call for current stock'
  },
  'chromatella-yellow-water-lily': {
    id: 'chromatella-yellow-water-lily',
    name: 'Chromatella Yellow Water Lily',
    scientificName: 'Nymphaea x marliacea "Chromatella"',
    category: 'Water Lilies',
    description: 'A hardy yellow water lily with beautiful golden flowers and green leaves with purple mottling.',
    detailedDescription: 'The Chromatella Yellow Water Lily is one of the most reliable and beautiful yellow water lilies available. Its bright golden-yellow flowers contrast beautifully with the green leaves that feature attractive purple mottling. This variety is exceptionally hardy and perfect for Utah\'s climate.',
    careInstructions: createCareInstructions(
      'Plant in 12-24 inches of water depth. Prefers heavy clay soil.',
      'Needs 6+ hours of direct sunlight for optimal flowering.',
      'Fertilize every 4-6 weeks during growing season.',
      'Very hardy - minimal winter care needed in Utah.'
    ),
    specifications: {
      height: '6-10 inches above water',
      spread: '4-6 feet',
      bloomTime: 'May through September',
      hardiness: 'Zones 3-11',
      waterDepth: '12-24 inches'
    },
    benefits: [
      'Bright yellow flowers add warmth to pond',
      'Very hardy and reliable bloomer',
      'Excellent for beginners',
      'Provides good fish cover',
      'Long blooming season'
    ],
    images: [
      '/images/waterLillies-topaz-enhance-4x.jpeg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg'
    ],
    image: '/images/waterLillies-topaz-enhance-4x.jpeg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'pink-water-lily': {
    id: 'pink-water-lily',
    name: 'Pink Water Lily',
    scientificName: 'Nymphaea x hybrida',
    category: 'Water Lilies',
    description: 'Elegant pink water lily with large, fragrant flowers perfect for romantic pond settings.',
    detailedDescription: 'The Pink Water Lily brings elegance and romance to any water garden. With its large, fragrant pink flowers and glossy green leaves, it creates a stunning focal point. This variety is perfect for creating a peaceful, serene atmosphere in your pond.',
    careInstructions: createCareInstructions(
      'Plant in 12-18 inches of water depth in heavy clay soil.',
      'Requires 6-8 hours of direct sunlight daily.',
      'Monthly fertilization during growing season recommended.',
      'Trim back in fall, protect from extreme cold.'
    ),
    specifications: {
      height: '8-12 inches above water',
      spread: '3-4 feet',
      bloomTime: 'June through September',
      hardiness: 'Zones 4-10',
      waterDepth: '12-18 inches'
    },
    benefits: [
      'Large, fragrant flowers',
      'Romantic pink color',
      'Excellent for focal points',
      'Good fish habitat',
      'Easy to maintain'
    ],
    images: [
      '/images/waterLillies-topaz-enhance-4x.jpeg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg'
    ],
    image: '/images/waterLillies-topaz-enhance-4x.jpeg',
    price: 'Contact for pricing',
    availability: 'Seasonal availability'
  },
  'white-water-lily': {
    id: 'white-water-lily',
    name: 'White Water Lily',
    scientificName: 'Nymphaea alba',
    category: 'Water Lilies',
    description: 'Classic white water lily with pure white flowers and traditional water garden beauty.',
    detailedDescription: 'The White Water Lily is the classic choice for traditional water gardens. Its pure white flowers and round green leaves create a timeless, elegant appearance. This variety is perfect for formal ponds and provides excellent contrast with other colored plants.',
    careInstructions: createCareInstructions(
      'Plant in 12-24 inches of water depth in clay soil.',
      'Needs 6+ hours of direct sunlight daily.',
      'Fertilize monthly during active growth period.',
      'Hardy variety, minimal winter protection needed.'
    ),
    specifications: {
      height: '6-10 inches above water',
      spread: '3-5 feet',
      bloomTime: 'May through August',
      hardiness: 'Zones 3-11',
      waterDepth: '12-24 inches'
    },
    benefits: [
      'Classic, timeless beauty',
      'Pure white flowers',
      'Excellent contrast plant',
      'Very hardy',
      'Traditional water garden appeal'
    ],
    images: [
      '/images/waterLillies-topaz-enhance-4x.jpeg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg'
    ],
    image: '/images/waterLillies-topaz-enhance-4x.jpeg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'chinese-arrowhead': {
    id: 'chinese-arrowhead',
    name: 'Chinese Arrowhead',
    scientificName: 'Sagittaria trifolia',
    category: 'Marginal Plants',
    description: 'Attractive marginal plant with arrow-shaped leaves and white flowers, perfect for pond edges.',
    detailedDescription: 'Chinese Arrowhead is an excellent marginal plant for pond edges and shallow water areas. Its distinctive arrow-shaped leaves and delicate white flowers add texture and interest to the pond perimeter. This plant is great for naturalizing pond edges.',
    careInstructions: createCareInstructions(
      'Plant in 2-6 inches of water or moist soil at pond edge.',
      'Prefers full sun to partial shade.',
      'Light fertilization in spring and summer.',
      'Cut back in fall, hardy in Utah winters.'
    ),
    specifications: {
      height: '12-24 inches',
      spread: '12-18 inches',
      bloomTime: 'July through September',
      hardiness: 'Zones 4-9',
      waterDepth: '2-6 inches'
    },
    benefits: [
      'Unique arrow-shaped leaves',
      'Good for pond edges',
      'Naturalizes well',
      'Provides habitat for wildlife',
      'Low maintenance'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'marsh-marigold': {
    id: 'marsh-marigold',
    name: 'Marsh Marigold',
    scientificName: 'Caltha palustris',
    category: 'Marginal Plants',
    description: 'Bright yellow spring flowers that herald the beginning of the pond season.',
    detailedDescription: 'Marsh Marigold is one of the first plants to bloom in spring, bringing bright yellow flowers to your pond. Its glossy, heart-shaped leaves and cheerful yellow blooms make it a favorite for early season color. Perfect for natural pond edges and bog gardens.',
    careInstructions: createCareInstructions(
      'Plant in 2-4 inches of water or very moist soil.',
      'Prefers partial shade, can tolerate full sun in cooler climates.',
      'Minimal fertilization needed.',
      'Dies back in winter, returns in spring.'
    ),
    specifications: {
      height: '8-16 inches',
      spread: '12-18 inches',
      bloomTime: 'March through May',
      hardiness: 'Zones 3-7',
      waterDepth: '2-4 inches'
    },
    benefits: [
      'Early spring color',
      'Bright yellow flowers',
      'Native plant benefits',
      'Attracts early pollinators',
      'Natural pond edge plant'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available in spring'
  },
  'pickerel-rush': {
    id: 'pickerel-rush',
    name: 'Pickerel Rush',
    scientificName: 'Pontederia cordata',
    category: 'Marginal Plants',
    description: 'Tall marginal plant with blue flower spikes, excellent for pond edges and wildlife habitat.',
    detailedDescription: 'Pickerel Rush is a tall, stately marginal plant perfect for creating vertical interest in your pond. Its blue flower spikes and broad leaves provide excellent habitat for wildlife while adding height and structure to your water garden design.',
    careInstructions: createCareInstructions(
      'Plant in 2-6 inches of water depth.',
      'Prefers full sun for best flowering.',
      'Fertilize monthly during growing season.',
      'Cut back in fall, hardy perennial.'
    ),
    specifications: {
      height: '2-4 feet',
      spread: '18-24 inches',
      bloomTime: 'June through September',
      hardiness: 'Zones 3-10',
      waterDepth: '2-6 inches'
    },
    benefits: [
      'Tall vertical accent',
      'Blue flower spikes',
      'Wildlife habitat',
      'Natural pond edge plant',
      'Long blooming period'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'golden-spike-rush': {
    id: 'golden-spike-rush',
    name: 'Golden Spike Rush',
    scientificName: 'Eleocharis acicularis',
    category: 'Marginal Plants',
    description: 'Fine-textured rush with golden-green color, perfect for natural pond edges.',
    detailedDescription: 'Golden Spike Rush adds fine texture and golden-green color to your pond edges. This delicate-looking but hardy plant creates a natural, meadow-like appearance and is excellent for softening hard pond edges.',
    careInstructions: createCareInstructions(
      'Plant in 1-3 inches of water or moist soil.',
      'Full sun to partial shade.',
      'Minimal fertilization required.',
      'Hardy, minimal care needed.'
    ),
    specifications: {
      height: '6-12 inches',
      spread: '8-12 inches',
      bloomTime: 'Summer',
      hardiness: 'Zones 4-9',
      waterDepth: '1-3 inches'
    },
    benefits: [
      'Fine texture',
      'Golden-green color',
      'Natural appearance',
      'Softens pond edges',
      'Low maintenance'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'equisetum': {
    id: 'equisetum',
    name: 'Equisetum (Horsetail)',
    scientificName: 'Equisetum hyemale',
    category: 'Marginal Plants',
    description: 'Ancient, architectural plant with jointed stems, perfect for modern pond designs.',
    detailedDescription: 'Equisetum, also known as Horsetail, is an ancient plant with a unique architectural form. Its jointed, bamboo-like stems create striking vertical lines and add a modern, minimalist touch to contemporary pond designs.',
    careInstructions: createCareInstructions(
      'Plant in 2-4 inches of water or moist soil.',
      'Full sun to partial shade.',
      'Minimal fertilization needed.',
      'Evergreen in mild climates, cut back in cold areas.'
    ),
    specifications: {
      height: '2-4 feet',
      spread: '12-18 inches',
      bloomTime: 'No flowers (spore-producing)',
      hardiness: 'Zones 4-9',
      waterDepth: '2-4 inches'
    },
    benefits: [
      'Unique architectural form',
      'Modern design appeal',
      'Low maintenance',
      'Evergreen in mild climates',
      'Striking vertical accent'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'umbrella-palm': {
    id: 'umbrella-palm',
    name: 'Umbrella Palm',
    scientificName: 'Cyperus alternifolius',
    category: 'Marginal Plants',
    description: 'Tropical-looking palm with umbrella-like leaves, perfect for creating exotic pond atmosphere.',
    detailedDescription: 'Umbrella Palm brings a tropical feel to your pond with its distinctive umbrella-like leaves radiating from tall stems. This plant creates excellent vertical interest and provides good cover for fish while adding an exotic touch to your water garden.',
    careInstructions: createCareInstructions(
      'Plant in 2-6 inches of water depth.',
      'Prefers full sun to partial shade.',
      'Regular fertilization during growing season.',
      'Bring indoors in cold climates or treat as annual.'
    ),
    specifications: {
      height: '3-6 feet',
      spread: '2-3 feet',
      bloomTime: 'Summer',
      hardiness: 'Zones 9-11 (annual in colder zones)',
      waterDepth: '2-6 inches'
    },
    benefits: [
      'Tropical appearance',
      'Tall vertical accent',
      'Good fish cover',
      'Exotic garden feel',
      'Fast growing'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'water-hyacinth': {
    id: 'water-hyacinth',
    name: 'Water Hyacinth',
    scientificName: 'Eichhornia crassipes',
    category: 'Floating Plants',
    description: 'Fast-growing floating plant with beautiful purple flowers and natural water filtration benefits.',
    detailedDescription: 'Water Hyacinth is an excellent floating plant that provides rapid water coverage and natural filtration. Its beautiful purple flowers and bulbous leaf bases make it both functional and attractive. This plant helps control algae and provides shade for fish.',
    careInstructions: createCareInstructions(
      'Simply float on water surface.',
      'Prefers full sun for best flowering.',
      'Absorbs nutrients from water, minimal fertilization needed.',
      'Not winter hardy in Utah - treat as annual or overwinter indoors.'
    ),
    specifications: {
      height: '6-12 inches above water',
      spread: 'Rapid spreading',
      bloomTime: 'Summer through fall',
      hardiness: 'Zones 9-11 (annual in colder zones)',
      waterDepth: 'Floating'
    },
    benefits: [
      'Natural water filtration',
      'Algae control',
      'Beautiful purple flowers',
      'Fast water coverage',
      'Fish shade and habitat'
    ],
    images: [
      '/images/IMG_2775.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2775.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'water-lettuce': {
    id: 'water-lettuce',
    name: 'Water Lettuce',
    scientificName: 'Pistia stratiotes',
    category: 'Floating Plants',
    description: 'Attractive floating plant with rosette-shaped leaves that resemble lettuce heads.',
    detailedDescription: 'Water Lettuce is a charming floating plant with soft, velvety leaves arranged in rosettes that resemble small lettuce heads. It provides excellent water coverage, helps control algae, and creates a natural, organic look in your pond.',
    careInstructions: createCareInstructions(
      'Float on water surface.',
      'Prefers partial shade to full sun.',
      'Absorbs nutrients from water.',
      'Not winter hardy - treat as annual or overwinter indoors.'
    ),
    specifications: {
      height: '4-8 inches above water',
      spread: 'Rapid spreading',
      bloomTime: 'Summer',
      hardiness: 'Zones 9-11 (annual in colder zones)',
      waterDepth: 'Floating'
    },
    benefits: [
      'Natural water coverage',
      'Algae control',
      'Soft, attractive foliage',
      'Fish habitat',
      'Easy to maintain'
    ],
    images: [
      '/images/IMG_2775.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2775.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'duckweed': {
    id: 'duckweed',
    name: 'Duckweed',
    scientificName: 'Lemna minor',
    category: 'Floating Plants',
    description: 'Small floating plant that provides rapid water coverage and excellent fish food.',
    detailedDescription: 'Duckweed is a tiny floating plant that forms a green carpet on your pond surface. While some consider it a weed, it\'s actually beneficial for water quality and provides excellent food for fish and waterfowl. It\'s perfect for natural pond systems.',
    careInstructions: createCareInstructions(
      'Simply add to water surface.',
      'Prefers partial shade.',
      'Absorbs excess nutrients from water.',
      'May die back in winter, returns in spring.'
    ),
    specifications: {
      height: '1/8 inch',
      spread: 'Rapid spreading',
      bloomTime: 'Rarely flowers',
      hardiness: 'Zones 3-11',
      waterDepth: 'Floating'
    },
    benefits: [
      'Natural water coverage',
      'Fish food source',
      'Nutrient absorption',
      'Water quality improvement',
      'Wildlife habitat'
    ],
    images: [
      '/images/IMG_2775.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2775.jpg',
    price: 'Contact for pricing',
    availability: 'Available year-round'
  },
  'azolla': {
    id: 'azolla',
    name: 'Azolla (Fairy Moss)',
    scientificName: 'Azolla filiculoides',
    category: 'Floating Plants',
    description: 'Small floating fern that changes color with the seasons and provides natural water coverage.',
    detailedDescription: 'Azolla, also known as Fairy Moss, is a small floating fern that creates a beautiful carpet on your pond surface. It changes color throughout the seasons, from green in summer to red in fall, adding seasonal interest to your water garden.',
    careInstructions: createCareInstructions(
      'Float on water surface.',
      'Prefers partial shade.',
      'Fixes nitrogen from air, minimal fertilization needed.',
      'May die back in cold winters, returns in spring.'
    ),
    specifications: {
      height: '1/4 inch',
      spread: 'Rapid spreading',
      bloomTime: 'No flowers (spore-producing)',
      hardiness: 'Zones 6-11',
      waterDepth: 'Floating'
    },
    benefits: [
      'Seasonal color changes',
      'Nitrogen fixation',
      'Natural water coverage',
      'Wildlife habitat',
      'Low maintenance'
    ],
    images: [
      '/images/IMG_2775.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2779.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2775.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'red-amaranth': {
    id: 'red-amaranth',
    name: 'Red Amaranth',
    scientificName: 'Amaranthus tricolor',
    category: 'Marginal Plants',
    description: 'Colorful marginal plant with striking red foliage, perfect for adding drama to pond edges.',
    detailedDescription: 'Red Amaranth brings bold color to your pond edges with its striking red and green variegated foliage. This annual plant creates dramatic contrast and adds tropical flair to your water garden design.',
    careInstructions: createCareInstructions(
      'Plant in moist soil at pond edge or in shallow water.',
      'Prefers full sun for best color.',
      'Regular fertilization for best growth.',
      'Annual plant - dies with frost.'
    ),
    specifications: {
      height: '2-4 feet',
      spread: '12-18 inches',
      bloomTime: 'Summer through fall',
      hardiness: 'Annual',
      waterDepth: 'Moist soil to 2 inches'
    },
    benefits: [
      'Bold red foliage',
      'Dramatic color contrast',
      'Tropical appearance',
      'Fast growing',
      'Eye-catching accent'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'red-mimulus': {
    id: 'red-mimulus',
    name: 'Red Mimulus',
    scientificName: 'Mimulus cardinalis',
    category: 'Marginal Plants',
    description: 'Native marginal plant with bright red tubular flowers that attract hummingbirds.',
    detailedDescription: 'Red Mimulus is a native marginal plant with bright red tubular flowers that are perfect for attracting hummingbirds to your pond. Its glossy green leaves and striking flowers make it an excellent choice for natural pond edges.',
    careInstructions: createCareInstructions(
      'Plant in 1-3 inches of water or moist soil.',
      'Prefers partial shade.',
      'Minimal fertilization needed.',
      'Hardy perennial, dies back in winter.'
    ),
    specifications: {
      height: '12-24 inches',
      spread: '12-18 inches',
      bloomTime: 'May through August',
      hardiness: 'Zones 6-9',
      waterDepth: '1-3 inches'
    },
    benefits: [
      'Attracts hummingbirds',
      'Native plant benefits',
      'Bright red flowers',
      'Natural pond edge plant',
      'Wildlife habitat'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'sensitive-plant': {
    id: 'sensitive-plant',
    name: 'Sensitive Plant',
    scientificName: 'Mimosa pudica',
    category: 'Marginal Plants',
    description: 'Fascinating plant with leaves that fold when touched, creating interactive garden interest.',
    detailedDescription: 'The Sensitive Plant is a unique marginal plant whose leaves fold up when touched, creating an interactive element in your water garden. Its pink pom-pom flowers and fern-like leaves make it both educational and beautiful.',
    careInstructions: createCareInstructions(
      'Plant in moist soil at pond edge.',
      'Prefers partial shade.',
      'Light fertilization during growing season.',
      'Not winter hardy in Utah - treat as annual.'
    ),
    specifications: {
      height: '6-12 inches',
      spread: '8-12 inches',
      bloomTime: 'Summer',
      hardiness: 'Zones 9-11 (annual in colder zones)',
      waterDepth: 'Moist soil'
    },
    benefits: [
      'Interactive plant behavior',
      'Educational value',
      'Pink pom-pom flowers',
      'Unique garden feature',
      'Children love it'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'slenderleaf-dragonhead': {
    id: 'slenderleaf-dragonhead',
    name: 'Slenderleaf Dragonhead',
    scientificName: 'Dracocephalum moldavica',
    category: 'Marginal Plants',
    description: 'Aromatic marginal plant with blue flowers and mint-like fragrance.',
    detailedDescription: 'Slenderleaf Dragonhead is an aromatic marginal plant with beautiful blue flowers and a pleasant mint-like fragrance. Its slender leaves and upright growth habit make it perfect for adding height and fragrance to pond edges.',
    careInstructions: createCareInstructions(
      'Plant in moist soil at pond edge.',
      'Prefers full sun to partial shade.',
      'Light fertilization in spring.',
      'Annual plant - dies with frost.'
    ),
    specifications: {
      height: '12-24 inches',
      spread: '8-12 inches',
      bloomTime: 'June through September',
      hardiness: 'Annual',
      waterDepth: 'Moist soil'
    },
    benefits: [
      'Aromatic foliage',
      'Blue flowers',
      'Mint-like fragrance',
      'Attracts pollinators',
      'Upright growth habit'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'utah-water-clover': {
    id: 'utah-water-clover',
    name: 'Utah Water Clover',
    scientificName: 'Marsilea vestita',
    category: 'Marginal Plants',
    description: 'Native Utah plant with clover-like leaves, perfect for natural pond edges.',
    detailedDescription: 'Utah Water Clover is a native plant with distinctive four-leaf clover-like leaves. This hardy plant is perfect for naturalizing pond edges and provides excellent ground cover in moist areas around your water garden.',
    careInstructions: createCareInstructions(
      'Plant in moist soil or shallow water.',
      'Prefers partial shade.',
      'Minimal fertilization needed.',
      'Hardy perennial, dies back in winter.'
    ),
    specifications: {
      height: '4-8 inches',
      spread: '12-18 inches',
      bloomTime: 'Summer',
      hardiness: 'Zones 4-9',
      waterDepth: 'Moist soil to 2 inches'
    },
    benefits: [
      'Native Utah plant',
      'Clover-like leaves',
      'Natural ground cover',
      'Low maintenance',
      'Wildlife habitat'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'yerba-mansa': {
    id: 'yerba-mansa',
    name: 'Yerba Mansa',
    scientificName: 'Anemopsis californica',
    category: 'Marginal Plants',
    description: 'Native southwestern plant with white flowers and aromatic leaves, excellent for natural pond edges.',
    detailedDescription: 'Yerba Mansa is a native southwestern plant with beautiful white flowers and aromatic leaves. This plant is perfect for natural pond edges and bog gardens, providing both beauty and traditional medicinal uses.',
    careInstructions: createCareInstructions(
      'Plant in moist soil or shallow water.',
      'Prefers full sun to partial shade.',
      'Minimal fertilization needed.',
      'Hardy perennial, dies back in winter.'
    ),
    specifications: {
      height: '8-16 inches',
      spread: '12-24 inches',
      bloomTime: 'May through August',
      hardiness: 'Zones 6-10',
      waterDepth: 'Moist soil to 2 inches'
    },
    benefits: [
      'Native southwestern plant',
      'White flowers',
      'Aromatic leaves',
      'Traditional uses',
      'Natural pond edge plant'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'calla-lily': {
    id: 'calla-lily',
    name: 'Calla Lily',
    scientificName: 'Zantedeschia aethiopica',
    category: 'Marginal Plants',
    description: 'Elegant marginal plant with white trumpet-shaped flowers and glossy green leaves.',
    detailedDescription: 'Calla Lily brings elegance to your pond edges with its classic white trumpet-shaped flowers and glossy green leaves. This plant is perfect for formal water gardens and creates a sophisticated, timeless appearance.',
    careInstructions: createCareInstructions(
      'Plant in moist soil at pond edge or shallow water.',
      'Prefers partial shade.',
      'Regular fertilization during growing season.',
      'Not winter hardy in Utah - dig and store indoors.'
    ),
    specifications: {
      height: '18-36 inches',
      spread: '12-18 inches',
      bloomTime: 'Late spring through summer',
      hardiness: 'Zones 8-10 (tender in colder zones)',
      waterDepth: 'Moist soil to 3 inches'
    },
    benefits: [
      'Elegant white flowers',
      'Classic garden appeal',
      'Glossy green foliage',
      'Formal garden plant',
      'Long-lasting blooms'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  },
  'blue-flower': {
    id: 'blue-flower',
    name: 'Blue Flower',
    scientificName: 'Various species',
    category: 'Marginal Plants',
    description: 'Various blue-flowering marginal plants perfect for adding cool color to pond edges.',
    detailedDescription: 'Blue flowering marginal plants add cool, calming color to your pond edges. We offer various species of blue-flowering plants that are perfect for creating color harmony and attracting beneficial insects to your water garden.',
    careInstructions: createCareInstructions(
      'Plant in moist soil or shallow water depending on species.',
      'Varies by species - full sun to partial shade.',
      'Light fertilization during growing season.',
      'Varies by species - some hardy, some annual.'
    ),
    specifications: {
      height: 'Varies by species',
      spread: 'Varies by species',
      bloomTime: 'Varies by species',
      hardiness: 'Varies by species',
      waterDepth: 'Varies by species'
    },
    benefits: [
      'Cool blue color',
      'Color harmony',
      'Attracts beneficial insects',
      'Various species available',
      'Pond edge beauty'
    ],
    images: [
      '/images/IMG_2779.jpg',
      '/images/IMG_2770.jpg',
      '/images/IMG_2775.jpg',
      '/images/IMG_2780.jpg',
      '/images/IMG_3266-topaz-enhance-2x-faceai.jpeg'
    ],
    image: '/images/IMG_2779.jpg',
    price: 'Contact for pricing',
    availability: 'Available spring through fall'
  }
};

// Helper function to get plant by ID
export const getPlantById = (id) => {
  return plantData[id] || null;
};

// Helper function to get all plants
export const getAllPlants = () => {
  return Object.values(plantData);
};

// Helper function to get plants by category
export const getPlantsByCategory = (category) => {
  return Object.values(plantData).filter(plant => plant.category === category);
};

// Helper function to create URL-friendly slug from plant name
export const createPlantSlug = (plantName) => {
  return plantName.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};