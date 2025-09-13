import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './BlogPage.css';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Blog posts data - extracted from the HTML files
    const posts = [
      {
        id: 'pond-maintenance-guide',
        title: 'Complete Pond Maintenance Guide for Utah: Year-Round Care (2025)',
        excerpt: 'Complete pond maintenance guide for Utah\'s unique climate. Learn seasonal care, water quality management, equipment maintenance, and troubleshooting for healthy water gardens.',
        slug: 'pond-maintenance-guide',
        date: today,
        category: 'Maintenance',
        readTime: '12 min read',
        image: '/images/pondMaintenance.webp',
        images: [
          '/images/pondMaintenance.webp',
          '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
          '/images/pondServices-2.png',
          '/images/IMG_2770.jpg',
          '/images/waterLillies.webp'
        ],
        author: 'Utah Water Gardens Team',
        featured: true
      },
      {
        id: 'how-to-build-pond-utah-guide',
        title: 'How to Build a Pond in Utah: Complete Step-by-Step Guide (2025)',
        excerpt: 'Learn how to build a pond in Utah with our comprehensive guide. From planning and permits to construction and finishing touches, we cover everything you need to know.',
        slug: 'how-to-build-pond-utah-guide',
        date: today,
        category: 'Construction',
        readTime: '15 min read',
        image: '/images/pondConstruction1000x800.webp',
        images: [
          '/images/pondConstruction1000x800.webp',
          '/images/IMG_2779.jpg',
          '/images/pond_liner_40mil.jpg',
          '/images/IMG_2770.jpg',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: true
      },
      {
        id: 'pond-design-guide',
        title: 'Pond Design Guide: Creating Beautiful Water Gardens in Utah',
        excerpt: 'Discover the art of pond design for Utah\'s unique landscape. Learn about different styles, materials, and design principles to create stunning water features.',
        slug: 'pond-design-guide',
        date: today,
        category: 'Design',
        readTime: '10 min read',
        image: '/images/pondServices-2.png',
        images: [
          '/images/pondServices-2.png',
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
          '/images/waterLillies.webp'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'aquatic-plants-guide',
        title: 'Aquatic Plants Guide: Best Plants for Utah Ponds & Water Gardens',
        excerpt: 'Complete guide to aquatic plants perfect for Utah\'s climate. Learn about water lilies, marginal plants, floating plants, and submerged vegetation.',
        slug: 'aquatic-plants-guide',
        date: today,
        category: 'Plants',
        readTime: '8 min read',
        image: '/images/plants500x500.webp',
        images: [
          '/images/plants500x500.webp',
          '/images/waterLillies.webp',
          '/images/IMG_2779.jpg',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
          '/images/pondServices-2.png'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'fish-care-guide',
        title: 'Fish Care Guide: Koi & Goldfish for Utah Ponds',
        excerpt: 'Essential guide to caring for koi and goldfish in Utah ponds. Learn about feeding, health, winter care, and creating the perfect environment.',
        slug: 'fish-care-guide',
        date: today,
        category: 'Fish Care',
        readTime: '9 min read',
        image: '/images/koi.webp',
        images: [
          '/images/koi.webp',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png',
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'utah-climate-guide',
        title: 'Utah Climate Guide: Building Ponds for Mountain Weather',
        excerpt: 'Understanding Utah\'s unique climate and how it affects pond design, maintenance, and seasonal care. Essential knowledge for successful water gardens.',
        slug: 'utah-climate-guide',
        date: today,
        category: 'Climate',
        readTime: '7 min read',
        image: '/images/hero-background.jpg',
        images: [
          '/images/hero-background.jpg',
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'pond-liners-utah-guide',
        title: 'Pond Liners Utah Guide: Choosing the Right Liner for Your Climate',
        excerpt: 'Complete guide to pond liners for Utah\'s challenging climate. Learn about EPDM, PVC, and other liner options for durability and performance.',
        slug: 'pond-liners-utah-guide',
        date: today,
        category: 'Supplies',
        readTime: '6 min read',
        image: '/images/pond_liner_40mil.jpg',
        images: [
          '/images/pond_liner_40mil.jpg',
          '/images/pond_liner_roll.jpg',
          '/images/pondConstruction1000x800.webp',
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'water-features-guide',
        title: 'Water Features Guide: Fountains, Waterfalls & More for Utah',
        excerpt: 'Explore different water features perfect for Utah landscapes. From fountains to waterfalls, learn how to add movement and sound to your water garden.',
        slug: 'water-features-guide',
        date: today,
        category: 'Features',
        readTime: '8 min read',
        image: '/images/waterLillies.webp',
        images: [
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'small-backyard-pond-ideas-utah',
        title: 'Small Backyard Pond Ideas for Utah: Maximizing Small Spaces',
        excerpt: 'Creative ideas for small backyard ponds in Utah. Learn how to create stunning water features even in limited spaces with smart design solutions.',
        slug: 'small-backyard-pond-ideas-utah',
        date: today,
        category: 'Design',
        readTime: '7 min read',
        image: '/images/IMG_2779.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'natural-vs-liner-ponds-utah-guide',
        title: 'Natural vs Liner Ponds in Utah: Which is Right for You?',
        excerpt: 'Compare natural and liner ponds for Utah conditions. Learn the pros and cons of each approach and make the best choice for your property.',
        slug: 'natural-vs-liner-ponds-utah-guide',
        date: today,
        category: 'Construction',
        readTime: '9 min read',
        image: '/images/pond_liner_roll.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'clay-soil-ponds-utah-guide',
        title: 'Clay Soil Ponds Utah Guide: Building Ponds in Challenging Soil',
        excerpt: 'Learn how to build successful ponds in Utah\'s challenging clay soil conditions. Expert tips for excavation, liner installation, and long-term stability.',
        slug: 'clay-soil-ponds-utah-guide',
        date: today,
        category: 'Construction',
        readTime: '8 min read',
        image: '/images/pondConstruction1000x800.webp',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'pond-depth-utah-guide',
        title: 'Pond Depth Utah Guide: Optimal Depths for Utah Climate',
        excerpt: 'Discover the ideal pond depths for Utah\'s climate conditions. Learn how depth affects fish survival, plant growth, and maintenance requirements.',
        slug: 'pond-depth-utah-guide',
        date: today,
        category: 'Design',
        readTime: '6 min read',
        image: '/images/IMG_2770.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'utah-pond-building-permits-guide',
        title: 'Utah Pond Building Permits Guide: Legal Requirements & Process',
        excerpt: 'Complete guide to Utah pond building permits and regulations. Learn what permits you need, how to apply, and avoid costly mistakes.',
        slug: 'utah-pond-building-permits-guide',
        date: today,
        category: 'Legal',
        readTime: '7 min read',
        image: '/images/pondServices-2.png',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'diy-pond-cost-utah',
        title: 'DIY Pond Cost Utah: Budget Planning for Your Water Garden',
        excerpt: 'Complete cost breakdown for DIY pond projects in Utah. Learn about material costs, equipment prices, and budget planning tips.',
        slug: 'diy-pond-cost-utah',
        date: today,
        category: 'Planning',
        readTime: '10 min read',
        image: '/images/IMG_2779.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'complete-seo-strategy-guide-2025',
        title: 'Complete SEO Strategy Guide 2025: Boost Your Pond Business',
        excerpt: 'Comprehensive SEO guide for pond and water feature businesses. Learn modern SEO strategies to attract more customers in 2025.',
        slug: 'complete-seo-strategy-guide-2025',
        date: today,
        category: 'Business',
        readTime: '15 min read',
        image: '/images/hero-background.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'content-marketing-seo-success-2025',
        title: 'Content Marketing SEO Success 2025: Drive More Leads',
        excerpt: 'Learn how to use content marketing and SEO to drive more leads for your pond business. Proven strategies for 2025 success.',
        slug: 'content-marketing-seo-success-2025',
        date: today,
        category: 'Business',
        readTime: '12 min read',
        image: '/images/pondMaintenance.webp',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'local-seo-strategies-small-businesses-2025',
        title: 'Local SEO Strategies for Small Businesses 2025',
        excerpt: 'Master local SEO strategies to dominate your local market. Essential tactics for small pond and water feature businesses.',
        slug: 'local-seo-strategies-small-businesses-2025',
        date: today,
        category: 'Business',
        readTime: '11 min read',
        image: '/images/IMG_2782.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'technical-seo-checklist-2025',
        title: 'Technical SEO Checklist 2025: Complete Website Optimization',
        excerpt: 'Comprehensive technical SEO checklist for 2025. Ensure your website is fully optimized for search engines and user experience.',
        slug: 'technical-seo-checklist-2025',
        date: today,
        category: 'Business',
        readTime: '13 min read',
        image: '/images/waterLillies.webp',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      // NEW SEO-OPTIMIZED BLOG POSTS
      {
        id: 'stunning-garden-pond-designs-small-spaces',
        title: '10 Stunning Garden Pond Designs for Small Spaces: Maximize Your Backyard',
        excerpt: 'Discover 10 innovative garden pond designs perfect for small spaces. Transform your limited backyard into a beautiful water garden with these creative solutions.',
        slug: 'stunning-garden-pond-designs-small-spaces',
        date: today,
        category: 'Design',
        readTime: '11 min read',
        image: '/images/IMG_2779.jpg',
        images: [
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png',
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: true
      },
      {
        id: 'koi-pond-maintenance-seasonal-care-guide',
        title: 'Koi Pond Maintenance: Complete Seasonal Care Guide for Utah',
        excerpt: 'Master koi pond maintenance with our comprehensive seasonal care guide. Learn essential tasks for spring, summer, fall, and winter to keep your koi healthy year-round.',
        slug: 'koi-pond-maintenance-seasonal-care-guide',
        date: today,
        category: 'Maintenance',
        readTime: '14 min read',
        image: '/images/koi.webp',
        images: [
          '/images/koi.webp',
          '/images/pondMaintenance.webp',
          '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png'
        ],
        author: 'Utah Water Gardens Team',
        featured: true
      },
      {
        id: 'choose-right-water-feature-garden',
        title: 'How to Choose the Right Water Feature for Your Garden: Complete Guide',
        excerpt: 'Learn how to select the perfect water feature for your garden. Compare fountains, waterfalls, ponds, and streams to find the ideal match for your space and style.',
        slug: 'choose-right-water-feature-garden',
        date: today,
        category: 'Design',
        readTime: '9 min read',
        image: '/images/waterLillies.webp',
        images: [
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'benefits-adding-pond-landscape',
        title: 'The Benefits of Adding a Pond to Your Landscape: Why You Need One',
        excerpt: 'Discover the amazing benefits of adding a pond to your landscape. From increased property value to wildlife attraction, learn why ponds are essential for modern gardens.',
        slug: 'benefits-adding-pond-landscape',
        date: today,
        category: 'Planning',
        readTime: '8 min read',
        image: '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
        images: [
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
          '/images/IMG_2779.jpg',
          '/images/waterLillies.webp',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'diy-vs-professional-pond-installation',
        title: 'DIY vs Professional Pond Installation: Which is Best for You?',
        excerpt: 'Compare DIY vs professional pond installation. Learn the pros and cons of each approach, costs, time investment, and when to hire experts for your water garden project.',
        slug: 'diy-vs-professional-pond-installation',
        date: today,
        category: 'Planning',
        readTime: '12 min read',
        image: '/images/pondConstruction1000x800.webp',
        images: [
          '/images/pondConstruction1000x800.webp',
          '/images/IMG_2779.jpg',
          '/images/pond_liner_40mil.jpg',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'wildlife-friendly-water-features-eco-gardens',
        title: 'Wildlife-Friendly Water Features for Eco-Conscious Gardens',
        excerpt: 'Create wildlife-friendly water features that support local ecosystems. Learn how to design ponds that attract birds, butterflies, and beneficial insects to your garden.',
        slug: 'wildlife-friendly-water-features-eco-gardens',
        date: today,
        category: 'Design',
        readTime: '10 min read',
        image: '/images/plants500x500.webp',
        images: [
          '/images/plants500x500.webp',
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'large-koi-pond-build-salt-lake-city-case-study',
        title: 'Case Study: Large Koi Pond Build in Salt Lake City - Complete Project',
        excerpt: 'Follow our complete large koi pond build in Salt Lake City. See the challenges, solutions, and stunning results of this 15,000-gallon koi pond project.',
        slug: 'large-koi-pond-build-salt-lake-city-case-study',
        date: today,
        category: 'Case Study',
        readTime: '16 min read',
        image: '/images/koi.webp',
        images: [
          '/images/koi.webp',
          '/images/pondConstruction1000x800.webp',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: true
      },
      {
        id: 'top-5-koi-pond-design-ideas-2025',
        title: 'Top 5 Koi Pond Design Ideas for 2025: Trending Styles',
        excerpt: 'Explore the top 5 trending koi pond design ideas for 2025. From modern minimalist to natural Japanese styles, find inspiration for your dream koi pond.',
        slug: 'top-5-koi-pond-design-ideas-2025',
        date: today,
        category: 'Design',
        readTime: '9 min read',
        image: '/images/IMG_2770.jpg',
        images: [
          '/images/IMG_2770.jpg',
          '/images/koi.webp',
          '/images/IMG_2779.jpg',
          '/images/pondServices-2.png',
          '/images/waterLillies.webp'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'how-to-winterize-pond-utah-guide',
        title: 'How to Winterize Your Pond in Utah: Complete Winter Preparation Guide',
        excerpt: 'Learn how to properly winterize your pond in Utah\'s harsh climate. Essential steps to protect your fish, plants, and equipment during freezing temperatures.',
        slug: 'how-to-winterize-pond-utah-guide',
        date: today,
        category: 'Maintenance',
        readTime: '11 min read',
        image: '/images/pondMaintenance.webp',
        images: [
          '/images/pondMaintenance.webp',
          '/images/IMG_2779.jpg',
          '/images/pondServices-2.png',
          '/images/IMG_2770.jpg',
          '/images/koi.webp'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'pond-aeration-importance-how-to-achieve',
        title: 'The Importance of Pond Aeration and How to Achieve It: Complete Guide',
        excerpt: 'Understand why pond aeration is crucial for healthy water gardens. Learn about different aeration methods, equipment, and installation tips for optimal results.',
        slug: 'pond-aeration-importance-how-to-achieve',
        date: today,
        category: 'Maintenance',
        readTime: '10 min read',
        image: '/images/pondServices-2.png',
        images: [
          '/images/pondServices-2.png',
          '/images/pondMaintenance.webp',
          '/images/IMG_2770.jpg',
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'common-pond-problems-how-to-fix',
        title: 'Common Pond Problems and How to Fix Them: Troubleshooting Guide',
        excerpt: 'Solve common pond problems with our comprehensive troubleshooting guide. Learn how to fix algae blooms, cloudy water, fish health issues, and equipment failures.',
        slug: 'common-pond-problems-how-to-fix',
        date: today,
        category: 'Maintenance',
        readTime: '13 min read',
        image: '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
        images: [
          '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
          '/images/pondMaintenance.webp',
          '/images/pondServices-2.png',
          '/images/IMG_2770.jpg',
          '/images/waterLillies.webp'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'eco-friendly-pond-maintenance-tips',
        title: 'Eco-Friendly Pond Maintenance Tips: Sustainable Water Garden Care',
        excerpt: 'Discover eco-friendly pond maintenance tips that protect the environment. Learn sustainable practices for water treatment, plant care, and equipment maintenance.',
        slug: 'eco-friendly-pond-maintenance-tips',
        date: today,
        category: 'Maintenance',
        readTime: '8 min read',
        image: '/images/plants500x500.webp',
        images: [
          '/images/plants500x500.webp',
          '/images/waterLillies.webp',
          '/images/pondMaintenance.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
          '/images/IMG_2779.jpg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'aquatic-plants-role-pond-ecosystems',
        title: 'The Role of Aquatic Plants in Pond Ecosystems: Nature\'s Filtration System',
        excerpt: 'Learn how aquatic plants create healthy pond ecosystems. Discover which plants provide natural filtration, oxygen, and habitat for fish and wildlife.',
        slug: 'aquatic-plants-role-pond-ecosystems',
        date: today,
        category: 'Plants',
        readTime: '9 min read',
        image: '/images/waterLillies.webp',
        images: [
          '/images/waterLillies.webp',
          '/images/plants500x500.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'pond-safety-tips-families-children',
        title: 'Pond Safety Tips for Families with Children: Creating Safe Water Gardens',
        excerpt: 'Essential pond safety tips for families with children. Learn how to create beautiful water gardens that are safe for kids while maintaining aesthetic appeal.',
        slug: 'pond-safety-tips-families-children',
        date: today,
        category: 'Safety',
        readTime: '7 min read',
        image: '/images/IMG_2779.jpg',
        images: [
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg',
          '/images/pondServices-2.png',
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'innovative-lighting-ideas-nighttime-pond',
        title: 'Innovative Lighting Ideas for Nighttime Pond Enjoyment: Illuminate Your Water Garden',
        excerpt: 'Transform your pond into a magical nighttime oasis with innovative lighting ideas. Learn about underwater lights, landscape lighting, and creative illumination techniques.',
        slug: 'innovative-lighting-ideas-nighttime-pond',
        date: today,
        category: 'Design',
        readTime: '8 min read',
        image: '/images/IMG_2782.jpg',
        images: [
          '/images/IMG_2782.jpg',
          '/images/IMG_2779.jpg',
          '/images/IMG_2770.jpg',
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'pond-dredging-when-why-how-guide',
        title: 'Pond Dredging: When, Why, and How - Complete Guide to Pond Restoration',
        excerpt: 'Learn everything about pond dredging - when it\'s needed, why it\'s important, and how the process works. Restore your pond\'s depth and water quality with professional dredging.',
        slug: 'pond-dredging-when-why-how-guide',
        date: today,
        category: 'Maintenance',
        readTime: '12 min read',
        image: '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
        images: [
          '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
          '/images/pondMaintenance.webp',
          '/images/pondServices-2.png',
          '/images/IMG_2770.jpg',
          '/images/waterLillies.webp'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'aquatic-plant-harvesting-management-guide',
        title: 'Aquatic Plant Harvesting and Management: Keep Your Pond Balanced',
        excerpt: 'Master aquatic plant harvesting and management techniques. Learn when and how to harvest plants to maintain perfect pond balance and water quality.',
        slug: 'aquatic-plant-harvesting-management-guide',
        date: today,
        category: 'Maintenance',
        readTime: '10 min read',
        image: '/images/plants500x500.webp',
        images: [
          '/images/plants500x500.webp',
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
          '/images/IMG_2779.jpg',
          '/images/pondServices-2.png'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'lake-dredging-large-water-bodies-guide',
        title: 'Lake Dredging for Large Water Bodies: Complete Restoration Guide',
        excerpt: 'Comprehensive guide to lake dredging for large water bodies. Learn about the process, equipment, and benefits of professional lake restoration services.',
        slug: 'lake-dredging-large-water-bodies-guide',
        date: today,
        category: 'Maintenance',
        readTime: '14 min read',
        image: '/images/pondServices-2.png',
        images: [
          '/images/pondServices-2.png',
          '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
          '/images/pondMaintenance.webp',
          '/images/IMG_2770.jpg',
          '/images/waterLillies.webp'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'pond-filtration-systems-complete-guide',
        title: 'Pond Filtration Systems: Complete Guide to Clean, Healthy Water',
        excerpt: 'Master pond filtration systems with our complete guide. Learn about mechanical, biological, and UV filtration to maintain crystal-clear, healthy pond water.',
        slug: 'pond-filtration-systems-complete-guide',
        date: today,
        category: 'Equipment',
        readTime: '11 min read',
        image: '/images/pondMaintenance.webp',
        images: [
          '/images/pondMaintenance.webp',
          '/images/pondServices-2.png',
          '/images/IMG_2770.jpg',
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'water-quality-testing-pond-health-guide',
        title: 'Water Quality Testing for Pond Health: Essential Parameters Guide',
        excerpt: 'Learn essential water quality testing for pond health. Understand pH, ammonia, nitrites, and other critical parameters to maintain optimal water conditions.',
        slug: 'water-quality-testing-pond-health-guide',
        date: today,
        category: 'Maintenance',
        readTime: '9 min read',
        image: '/images/pondServices-2.png',
        images: [
          '/images/pondServices-2.png',
          '/images/pondMaintenance.webp',
          '/images/IMG_2770.jpg',
          '/images/waterLillies.webp',
          '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg'
        ],
        author: 'Utah Water Gardens Team',
        featured: false
      }
    ];

    setBlogPosts(posts);
    setLoading(false);
  }, []);


  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
  };

  const categories = [...new Set(blogPosts.map(post => post.category))];

  // Filter and sort posts
  const filteredAndSortedPosts = blogPosts
    .filter(post => {
      const matchesFilter = activeFilter === 'all' || post.category.toLowerCase() === activeFilter.toLowerCase();
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const featuredPosts = filteredAndSortedPosts.filter(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  if (loading) {
    return (
      <div className="blog-page">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <SEO 
        title="Blog | Utah Water Gardens - Pond & Water Feature Insights"
        description="Utah Water Gardens Blog - Expert insights on pond design, water features, aquatic plants, fish care, and creating beautiful water gardens in Utah's unique climate."
        keywords="water gardens, pond design, Utah ponds, water features, aquatic plants, koi fish, pond maintenance, water garden blog"
        canonical="https://utahwatergardens.com/blog"
      />

      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-background">
          <img 
            src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
            alt="Beautiful Utah water garden with pond and water lilies"
            className="blog-hero-image"
          />
          <div className="blog-hero-overlay"></div>
        </div>
        
        <div className="blog-hero-content">
          <div className="container">
            <div className="blog-hero-text-content">
              <h1 className="blog-hero-title">
                Utah Water Gardens Blog
              </h1>
              <p className="blog-hero-subtitle">
                Expert insights on pond design, water features, aquatic plants, fish care, and creating beautiful water gardens in Utah's unique climate
              </p>
              
              {/* Stats Section */}
              <div className="blog-hero-stats">
                <div className="blog-hero-stat-item">
                  <div className="blog-hero-stat-icon">📝</div>
                  <div className="blog-hero-stat-number">{blogPosts.length}</div>
                  <div className="blog-hero-stat-label">Expert Articles</div>
                </div>
                <div className="blog-hero-stat-item">
                  <div className="blog-hero-stat-icon">📂</div>
                  <div className="blog-hero-stat-number">{categories.length}</div>
                  <div className="blog-hero-stat-label">Categories</div>
                </div>
                <div className="blog-hero-stat-item">
                  <div className="blog-hero-stat-icon">📅</div>
                  <div className="blog-hero-stat-number">2025</div>
                  <div className="blog-hero-stat-label">Updated Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Wavy Divider - Attached to Hero with Blue Gradient */}
      <div className="hero-wave-attached">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className="wave-layer-1" d="M0,0L50,20C100,40,200,80,300,80C400,80,500,40,600,20C700,0,800,0,900,20C1000,40,1100,80,1150,100L1200,120V0Z" fill="#ffffff" opacity="0.1"></path>
          <path className="wave-layer-2" d="M0,0L50,15C100,30,200,60,300,60C400,60,500,30,600,15C700,0,800,0,900,15C1000,30,1100,60,1150,75L1200,90V0Z" fill="#ffffff" opacity="0.2"></path>
          <path className="wave-layer-3" d="M0,0L50,10C100,20,200,40,300,40C400,40,500,20,600,10C700,0,800,0,900,10C1000,20,1100,40,1150,50L1200,60V0Z" fill="#ffffff" opacity="0.3"></path>
        </svg>
      </div>

      {/* Main Content Wrapper with Single Gradient */}
      <div className="main-content-gradient">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="featured-posts">
          <div className="container">
            <h2>Featured Articles</h2>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="featured-post">
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="post-category">{post.category}</div>
                  </div>
                  <div className="post-content">
                    <h3>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-meta">
                      <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="read-more-btn">
                      Read Article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="all-posts first-section-gradient">
        <div className="container">
        <div className="posts-header">
          <h2>All Articles</h2>
        </div>

        {/* Blog Controls */}
        <div className="blog-controls">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="sort-controls">
            <span className="sort-label">Sort by:</span>
            <button 
              className={`sort-btn ${sortBy === 'newest' ? 'active' : ''}`}
              onClick={() => handleSortChange('newest')}
            >
              Newest
            </button>
            <button 
              className={`sort-btn ${sortBy === 'oldest' ? 'active' : ''}`}
              onClick={() => handleSortChange('oldest')}
            >
              Oldest
            </button>
            <button 
              className={`sort-btn ${sortBy === 'title' ? 'active' : ''}`}
              onClick={() => handleSortChange('title')}
            >
              Title
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          {categories.map(category => (
            <button 
              key={category} 
              className={`filter-btn ${activeFilter === category.toLowerCase() ? 'active' : ''}`}
              onClick={() => handleFilterChange(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>
          
          <div className="posts-grid">
            {regularPosts.map(post => (
              <article key={post.id} className="post-card" data-category={post.category.toLowerCase()}>
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-category">{post.category}</div>
                </div>
                <div className="post-content">
                  <h3>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="blog-newsletter first-section-gradient">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get the latest pond and water garden tips delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};


// Internal Links for SEO


const InternalLinks = () => (


  <div style={{ display: 'none' }}>


    <Link to="/contact">utah water gardens</Link>


    <Link to="/plants-fish">utah water gardens</Link>


    <Link to="/pondsupplies">utah water gardens</Link>


    <Link to="/aquatic-plants">utah water gardens</Link>


    <Link to="/fish-koi">utah water gardens</Link>


    <Link to="/">utah water gardens</Link>


  </div>


);



export default BlogPage;
