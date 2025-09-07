import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Blog post content - this would typically come from a CMS or API
    const blogPosts = {
      'pond-maintenance-guide': {
        id: 'pond-maintenance-guide',
        title: 'Complete Pond Maintenance Guide for Utah: Year-Round Care (2025)',
        content: `
          <p>Maintaining a pond in Utah's unique climate requires year-round attention and understanding of seasonal changes. This comprehensive guide will help you keep your water garden healthy and beautiful throughout all four seasons.</p>
          
          <img src="/images/pondMaintenance.webp" alt="Utah pond maintenance guide showing seasonal care techniques" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Professional pond maintenance in Utah's challenging climate requires year-round attention to water quality and equipment care.</p>
          
          <h2>Spring Maintenance (March - May)</h2>
          <p>Spring is the most critical time for pond maintenance in Utah. As temperatures rise and ice melts, your pond needs careful attention to prepare for the growing season.</p>
          
          <h3>Water Quality Testing</h3>
          <p>Test your water parameters including pH, ammonia, nitrites, and nitrates. Utah's hard water can affect pH levels, so regular testing is essential.</p>
          
          <h3>Equipment Inspection</h3>
          <p>Check all pumps, filters, and UV clarifiers. Clean or replace filter media and ensure all equipment is functioning properly after winter storage.</p>
          
          <h3>Plant Care</h3>
          <p>Trim back dead foliage from aquatic plants and divide overgrown plants. This is also the perfect time to add new plants to your pond.</p>
          
          <img src="/images/IMG_2770.jpg" alt="Utah pond water quality testing and spring maintenance equipment" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Regular water quality testing is essential for maintaining healthy pond conditions in Utah's hard water environment.</p>
          
          <h2>Summer Maintenance (June - August)</h2>
          <p>Utah summers can be hot and dry, making water management crucial for pond health.</p>
          
          <h3>Water Level Management</h3>
          <p>Monitor water levels daily during hot weather. Evaporation can cause significant water loss, so be prepared to top off with dechlorinated water.</p>
          
          <h3>Algae Control</h3>
          <p>Warm temperatures and long daylight hours create ideal conditions for algae growth. Use UV clarifiers and maintain proper plant coverage to control algae naturally.</p>
          
          <h3>Fish Feeding</h3>
          <p>Feed fish 2-3 times daily with high-quality food. Monitor fish health and watch for signs of stress or disease.</p>
          
          <img src="/images/waterLillies.webp" alt="Summer pond care with water lilies and algae management in Utah" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Summer pond care includes managing algae growth while maintaining beautiful water lilies and healthy fish.</p>
          
          <h2>Fall Maintenance (September - November)</h2>
          <p>Prepare your pond for winter by completing essential maintenance tasks.</p>
          
          <h3>Leaf Management</h3>
          <p>Install netting over your pond to catch falling leaves. Remove debris regularly to prevent water quality issues.</p>
          
          <h3>Plant Preparation</h3>
          <p>Cut back hardy plants and remove tender annuals. Move tropical plants indoors or treat as annuals.</p>
          
          <h3>Equipment Winterization</h3>
          <p>Clean and store equipment that won't be used during winter. Consider installing a pond heater or aerator for fish survival.</p>
          
          <img src="/images/IMG_2779.jpg" alt="Fall pond maintenance and winter preparation in Utah" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Fall maintenance prepares your pond for Utah's harsh winter conditions while maintaining fish health.</p>
          
          <h2>Winter Maintenance (December - February)</h2>
          <p>Winter care focuses on protecting fish and preventing equipment damage from freezing.</p>
          
          <h3>Ice Management</h3>
          <p>Keep a small area of the pond ice-free using a pond heater or aerator. This allows for gas exchange and prevents fish suffocation.</p>
          
          <h3>Minimal Feeding</h3>
          <p>Stop feeding fish when water temperatures drop below 50°F. Fish metabolism slows significantly in cold water.</p>
          
          <h3>Equipment Protection</h3>
          <p>Protect exposed pipes and equipment from freezing. Consider draining and storing pumps and filters in a protected area.</p>
          
          <img src="/images/pondServices-2.png" alt="Winter pond maintenance and equipment protection in Utah" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Professional winter maintenance protects your pond equipment and ensures fish survival through Utah's cold winters.</p>
          
          <h2>Common Utah Pond Issues</h2>
          
          <h3>Hard Water Problems</h3>
          <p>Utah's hard water can cause mineral buildup and affect pH levels. Regular water testing and treatment may be necessary.</p>
          
          <h3>Temperature Extremes</h3>
          <p>Utah's temperature swings can stress fish and plants. Provide adequate depth and consider shade structures for summer protection.</p>
          
          <h3>Dust and Debris</h3>
          <p>Utah's dry climate means more dust and debris in your pond. Regular cleaning and proper filtration are essential.</p>
          
          <h2>Professional Maintenance Services</h2>
          <p>For complex maintenance tasks or if you're unsure about any aspect of pond care, consider hiring professional pond maintenance services. Utah Water Gardens offers comprehensive maintenance programs tailored to Utah's climate.</p>
          
          <img src="/images/IMG_2782.jpg" alt="Professional Utah pond maintenance services and troubleshooting guide" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Professional pond maintenance services ensure your water garden thrives in Utah's challenging climate year-round.</p>
          
          <p>Regular maintenance is the key to a healthy, beautiful pond that will provide years of enjoyment. By following this seasonal guide and adapting to Utah's unique climate, you can maintain a thriving water garden throughout the year.</p>
        `,
        excerpt: 'Complete pond maintenance guide for Utah\'s unique climate. Learn seasonal care, water quality management, equipment maintenance, and troubleshooting for healthy water gardens.',
        date: today,
        category: 'Maintenance',
        readTime: '12 min read',
        image: '/images/pondMaintenance.webp',
        author: 'Utah Water Gardens Team',
        tags: ['pond maintenance', 'utah climate', 'seasonal care', 'water quality']
      },
      'how-to-build-pond-utah-guide': {
        id: 'how-to-build-pond-utah-guide',
        title: 'How to Build a Pond in Utah: Complete Step-by-Step Guide (2025)',
        content: `
          <p>Building a pond in Utah requires careful planning and consideration of the state's unique climate and soil conditions. This comprehensive guide will walk you through every step of creating a beautiful, functional water garden.</p>
          
          <img src="/images/pondConstruction1000x800.webp" alt="Utah pond construction guide showing step-by-step building process" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Professional pond construction in Utah requires careful planning for climate and soil conditions.</p>
          
          <h2>Planning Your Utah Pond</h2>
          
          <h3>Location Selection</h3>
          <p>Choose a location that receives 4-6 hours of sunlight daily but has some afternoon shade. Avoid areas under trees to minimize leaf debris. Consider proximity to electrical outlets for pumps and lighting.</p>
          
          <h3>Size and Depth Considerations</h3>
          <p>For Utah's climate, plan for a minimum depth of 24 inches to prevent complete freezing. Larger ponds (over 1000 gallons) are more stable and easier to maintain in extreme temperatures.</p>
          
          <h3>Permits and Regulations</h3>
          <p>Check with your local municipality for any required permits. Some areas in Utah have specific regulations regarding water features and water usage.</p>
          
          <img src="/images/IMG_2770.jpg" alt="Utah pond planning and site selection for optimal location" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Proper site selection is crucial for pond success in Utah's challenging climate conditions.</p>
          
          <h2>Utah-Specific Considerations</h2>
          
          <h3>Soil Conditions</h3>
          <p>Utah's clay soil can be challenging for pond construction. Clay soil holds water but can expand and contract with temperature changes, potentially damaging pond liners.</p>
          
          <h3>Water Source</h3>
          <p>Consider your water source and quality. Utah's hard water may require treatment for optimal fish and plant health.</p>
          
          <h3>Climate Adaptations</h3>
          <p>Plan for temperature extremes. Include features like shade structures for summer and consider winter protection for fish.</p>
          
          <h2>Step-by-Step Construction</h2>
          
          <h3>Step 1: Marking and Excavation</h3>
          <p>Use spray paint or stakes to mark your pond outline. Excavate to your planned depth, creating shelves for plants. Remove all rocks and debris that could puncture the liner.</p>
          
          <h3>Step 2: Liner Installation</h3>
          <p>Choose a high-quality EPDM liner suitable for Utah's temperature extremes. Install underlayment first, then carefully place the liner, allowing for proper overlap and securing edges.</p>
          
          <img src="/images/pond_liner_40mil.jpg" alt="Utah pond liner installation and EPDM liner selection" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">High-quality EPDM liners are essential for Utah's temperature extremes and clay soil conditions.</p>
          
          <h3>Step 3: Plumbing and Equipment</h3>
          <p>Install skimmers, pumps, and filtration systems. Consider UV clarifiers for algae control in Utah's sunny climate.</p>
          
          <h3>Step 4: Rock and Gravel Placement</h3>
          <p>Use local Utah stone for a natural look. Place larger rocks around the perimeter and use gravel in shallow areas for plant support.</p>
          
          <h3>Step 5: Water and Plant Introduction</h3>
          <p>Fill the pond with dechlorinated water. Add plants gradually, starting with hardy varieties suitable for Utah's climate.</p>
          
          <img src="/images/waterLillies.webp" alt="Utah pond plant selection and water lily installation" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Hardy water lilies and native plants thrive in Utah's climate and provide natural beauty.</p>
          
          <h2>Utah-Appropriate Plants and Fish</h2>
          
          <h3>Hardy Aquatic Plants</h3>
          <p>Choose plants that can withstand Utah's temperature extremes: hardy water lilies, cattails, and native Utah aquatic plants.</p>
          
          <h3>Fish Selection</h3>
          <p>Koi and goldfish are excellent choices for Utah ponds. Ensure adequate depth for winter survival and consider pond heaters for extreme cold.</p>
          
          <img src="/images/koi.webp" alt="Utah pond fish selection including koi and goldfish for cold climate" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Koi and goldfish are excellent choices for Utah ponds, providing beauty and hardiness in cold climates.</p>
          
          <h2>Maintenance Setup</h2>
          <p>Install proper filtration, consider automatic water top-off systems for Utah's dry climate, and plan for seasonal maintenance tasks.</p>
          
          <img src="/images/pondServices-2.png" alt="Utah pond maintenance setup and filtration systems" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Proper maintenance setup ensures your Utah pond thrives year-round with minimal effort.</p>
          
          <p>Building a pond in Utah is a rewarding project that requires careful planning and consideration of local conditions. With proper construction and maintenance, your pond will provide years of enjoyment while thriving in Utah's unique climate.</p>
        `,
        excerpt: 'Learn how to build a pond in Utah with our comprehensive guide. From planning and permits to construction and finishing touches, we cover everything you need to know.',
        date: today,
        category: 'Construction',
        readTime: '15 min read',
        image: '/images/pondConstruction1000x800.webp',
        author: 'Utah Water Gardens Team',
        tags: ['pond construction', 'utah building', 'pond design', 'diy pond']
      },
      'clay-soil-ponds-utah-guide': {
        id: 'clay-soil-ponds-utah-guide',
        title: 'Clay Soil Ponds Utah Guide: Building Ponds in Challenging Soil',
        content: `
          <p>Building ponds in Utah's challenging clay soil requires special techniques and considerations. This comprehensive guide will help you successfully create a water garden despite the difficulties of clay soil conditions.</p>
          
          <h2>Understanding Utah's Clay Soil</h2>
          <p>Utah's clay soil presents unique challenges for pond construction. Clay soil expands when wet and contracts when dry, which can cause structural issues if not properly addressed.</p>
          
          <h3>Clay Soil Characteristics</h3>
          <p>Clay soil has high water retention, poor drainage, and can become very hard when dry. These properties require specific construction techniques to ensure pond stability.</p>
          
          <h2>Excavation Techniques for Clay Soil</h2>
          <p>Proper excavation is crucial when working with clay soil. The excavation process must account for soil expansion and contraction cycles.</p>
          
          <h3>Excavation Steps</h3>
          <p>1. Mark the pond outline with spray paint or stakes<br>
          2. Excavate to the planned depth plus 6 inches for settling<br>
          3. Create smooth, rounded edges to prevent liner stress<br>
          4. Remove all rocks and debris that could puncture the liner</p>
          
          <h2>Liner Installation in Clay Soil</h2>
          <p>Clay soil requires special liner installation techniques to prevent damage from soil movement and ensure long-term stability.</p>
          
          <h3>Underlayment Considerations</h3>
          <p>Use a thick underlayment material to protect the liner from clay soil expansion. Consider using sand or specialized underlayment designed for clay conditions.</p>
          
          <h2>Drainage Solutions</h2>
          <p>Proper drainage is essential when building ponds in clay soil. Without adequate drainage, water can accumulate around the pond and cause structural issues.</p>
          
          <h3>Drainage Techniques</h3>
          <p>Install French drains around the pond perimeter, use gravel backfill, and ensure proper grading to direct water away from the pond area.</p>
          
          <p>Building ponds in clay soil is challenging but achievable with proper techniques and materials. By following these guidelines, you can create a beautiful, stable water garden that will last for years.</p>
        `,
        excerpt: 'Learn how to build successful ponds in Utah\'s challenging clay soil conditions. Expert tips for excavation, liner installation, and long-term stability.',
        date: today,
        category: 'Construction',
        readTime: '8 min read',
        image: '/images/pondConstruction1000x800.webp',
        author: 'Utah Water Gardens Team',
        tags: ['clay soil', 'pond construction', 'utah building', 'liner installation']
      },
      'pond-depth-utah-guide': {
        id: 'pond-depth-utah-guide',
        title: 'Pond Depth Utah Guide: Optimal Depths for Utah Climate',
        content: `
          <p>Choosing the right pond depth is crucial for success in Utah's climate. This guide will help you determine the optimal depth for your specific needs and location.</p>
          
          <h2>Utah Climate Considerations</h2>
          <p>Utah's climate varies significantly across the state, from high mountain areas to desert valleys. Each region has different depth requirements for successful pond construction.</p>
          
          <h3>Temperature Extremes</h3>
          <p>Utah experiences both hot summers and cold winters. Pond depth must accommodate these temperature extremes to protect fish and maintain water quality.</p>
          
          <h2>Minimum Depth Requirements</h2>
          <p>For Utah conditions, a minimum depth of 24 inches is recommended for most ponds. This depth provides protection from freezing and helps maintain stable water temperatures.</p>
          
          <h3>Fish Survival Depths</h3>
          <p>For fish survival through Utah winters, consider depths of 36-48 inches. This ensures adequate water volume and protection from complete freezing.</p>
          
          <h2>Plant Zone Depths</h2>
          <p>Different aquatic plants require different water depths. Plan your pond with varying depths to accommodate various plant species.</p>
          
          <h3>Depth Zones</h3>
          <p>Shallow zones (6-12 inches) for marginal plants, medium zones (12-24 inches) for water lilies, and deep zones (24+ inches) for fish and winter protection.</p>
          
          <h2>Maintenance Considerations</h2>
          <p>Deeper ponds are generally easier to maintain as they provide more stable water conditions and require less frequent cleaning.</p>
          
          <p>Proper pond depth is essential for success in Utah's climate. Consider your specific location, intended use, and maintenance capabilities when planning your pond depth.</p>
        `,
        excerpt: 'Discover the ideal pond depths for Utah\'s climate conditions. Learn how depth affects fish survival, plant growth, and maintenance requirements.',
        date: today,
        category: 'Design',
        readTime: '6 min read',
        image: '/images/IMG_2770.jpg',
        author: 'Utah Water Gardens Team',
        tags: ['pond depth', 'utah climate', 'pond design', 'fish survival']
      },
      'utah-pond-building-permits-guide': {
        id: 'utah-pond-building-permits-guide',
        title: 'Utah Pond Building Permits Guide: Legal Requirements & Process',
        content: `
          <p>Building a pond in Utah may require permits depending on your location and pond size. This guide will help you understand the legal requirements and application process.</p>
          
          <h2>When Permits Are Required</h2>
          <p>Permit requirements vary by location in Utah. Generally, permits are required for ponds over a certain size or those that affect water rights or drainage.</p>
          
          <h3>Size Thresholds</h3>
          <p>Most Utah counties require permits for ponds over 1 acre in surface area or those that hold more than 1 acre-foot of water.</p>
          
          <h2>Types of Permits</h2>
          <p>Different types of permits may be required depending on your specific situation and location.</p>
          
          <h3>Common Permit Types</h3>
          <p>Building permits, water rights permits, environmental permits, and drainage permits may all be required for larger pond projects.</p>
          
          <h2>Application Process</h2>
          <p>The permit application process typically involves submitting plans, paying fees, and waiting for approval from local authorities.</p>
          
          <h3>Required Documentation</h3>
          <p>Site plans, engineering drawings, environmental impact assessments, and water rights documentation may be required.</p>
          
          <h2>Timeline and Costs</h2>
          <p>Permit processing can take several weeks to months, and costs vary by location and project size. Budget accordingly for permit fees and processing time.</p>
          
          <p>Always check with your local planning department before beginning pond construction. Proper permitting ensures your project is legal and protects you from potential fines or legal issues.</p>
        `,
        excerpt: 'Complete guide to Utah pond building permits and regulations. Learn what permits you need, how to apply, and avoid costly mistakes.',
        date: today,
        category: 'Legal',
        readTime: '7 min read',
        image: '/images/pondServices-2.png',
        author: 'Utah Water Gardens Team',
        tags: ['pond permits', 'utah regulations', 'legal requirements', 'pond building']
      },
      'diy-pond-cost-utah': {
        id: 'diy-pond-cost-utah',
        title: 'DIY Pond Cost Utah: Budget Planning for Your Water Garden',
        content: `
          <p>Planning a DIY pond project in Utah? This comprehensive cost guide will help you budget for your water garden project and avoid unexpected expenses.</p>
          
          <h2>Basic Cost Components</h2>
          <p>DIY pond costs include materials, equipment, plants, fish, and ongoing maintenance supplies. Understanding these components helps with accurate budgeting.</p>
          
          <h3>Material Costs</h3>
          <p>Liner, underlayment, rocks, gravel, and hardware typically account for 40-50% of total project costs.</p>
          
          <h2>Size-Based Cost Estimates</h2>
          <p>Pond costs vary significantly based on size. Here are typical cost ranges for different pond sizes in Utah.</p>
          
          <h3>Small Ponds (100-500 gallons)</h3>
          <p>Small ponds typically cost $500-$1,500 for materials, depending on features and quality of materials used.</p>
          
          <h3>Medium Ponds (500-2,000 gallons)</h3>
          <p>Medium ponds range from $1,500-$4,000 for materials, including basic filtration and aeration equipment.</p>
          
          <h3>Large Ponds (2,000+ gallons)</h3>
          <p>Large ponds can cost $4,000-$10,000 or more, depending on size, features, and equipment quality.</p>
          
          <h2>Equipment Costs</h2>
          <p>Pumps, filters, UV sterilizers, and aeration equipment add significantly to project costs but are essential for pond health.</p>
          
          <h3>Essential Equipment</h3>
          <p>Pump ($100-$500), filter ($200-$800), UV sterilizer ($150-$400), and aeration system ($100-$300) are typical equipment costs.</p>
          
          <h2>Plants and Fish Costs</h2>
          <p>Aquatic plants and fish add beauty and functionality to your pond but also add to the overall cost.</p>
          
          <h3>Plant Costs</h3>
          <p>Aquatic plants typically cost $5-$25 each, depending on type and size. Plan for 10-20 plants for a well-balanced pond.</p>
          
          <h2>Ongoing Maintenance Costs</h2>
          <p>Budget for ongoing maintenance including water treatments, fish food, and equipment replacement.</p>
          
          <p>Proper budgeting ensures your DIY pond project stays on track and within your financial means. Consider all cost components when planning your water garden.</p>
        `,
        excerpt: 'Complete cost breakdown for DIY pond projects in Utah. Learn about material costs, equipment prices, and budget planning tips.',
        date: today,
        category: 'Planning',
        readTime: '10 min read',
        image: '/images/IMG_2779.jpg',
        author: 'Utah Water Gardens Team',
        tags: ['diy pond', 'pond costs', 'budget planning', 'utah ponds']
      },
      'complete-seo-strategy-guide-2025': {
        id: 'complete-seo-strategy-guide-2025',
        title: 'Complete SEO Strategy Guide 2025: Boost Your Pond Business',
        content: `
          <p>In 2025, SEO continues to evolve rapidly. For pond and water feature businesses, staying ahead of the curve is essential for attracting customers and growing your business. This comprehensive guide covers the latest SEO strategies and tactics.</p>
          
          <h2>Understanding Modern SEO</h2>
          <p>SEO in 2025 is more sophisticated than ever, focusing on user experience, content quality, and technical excellence. Search engines prioritize websites that provide genuine value to users.</p>
          
          <h3>Core SEO Principles</h3>
          <p>Focus on user intent, create high-quality content, ensure technical excellence, and build genuine authority in your niche. These principles remain constant despite algorithm changes.</p>
          
          <h2>Keyword Research for Pond Businesses</h2>
          <p>Effective keyword research is the foundation of any successful SEO strategy. For pond businesses, focus on local and service-based keywords.</p>
          
          <h3>Primary Keywords</h3>
          <p>Target keywords like "pond construction [city]", "water feature installation", "pond maintenance services", and "aquatic plant suppliers".</p>
          
          <h2>Content Strategy</h2>
          <p>Create comprehensive, helpful content that addresses your customers' needs and questions. This builds authority and attracts organic traffic.</p>
          
          <h3>Content Types</h3>
          <p>Blog posts, guides, case studies, and FAQ pages all contribute to a strong content strategy. Focus on topics your customers care about.</p>
          
          <h2>Technical SEO</h2>
          <p>Ensure your website loads quickly, is mobile-friendly, and provides an excellent user experience. Technical SEO is crucial for ranking success.</p>
          
          <h3>Key Technical Factors</h3>
          <p>Page speed, mobile responsiveness, secure connections (HTTPS), and proper site structure all impact your search rankings.</p>
          
          <h2>Local SEO for Pond Businesses</h2>
          <p>Local SEO is especially important for service-based businesses like pond construction and maintenance. Optimize for local search to attract nearby customers.</p>
          
          <h3>Local SEO Tactics</h3>
          <p>Claim your Google Business Profile, optimize for local keywords, collect customer reviews, and ensure consistent NAP (Name, Address, Phone) information across the web.</p>
          
          <p>Implementing these SEO strategies will help your pond business attract more customers and grow in 2025. Focus on providing value to your customers, and the search rankings will follow.</p>
        `,
        excerpt: 'Comprehensive SEO guide for pond and water feature businesses. Learn modern SEO strategies to attract more customers in 2025.',
        date: today,
        category: 'Business',
        readTime: '15 min read',
        image: '/images/hero-background.jpg',
        author: 'Utah Water Gardens Team',
        tags: ['seo strategy', 'pond business', 'digital marketing', '2025 trends']
      },
      'content-marketing-seo-success-2025': {
        id: 'content-marketing-seo-success-2025',
        title: 'Content Marketing SEO Success 2025: Drive More Leads',
        content: `
          <p>Content marketing and SEO work together to drive qualified leads for your pond business. In 2025, the most successful businesses combine these strategies to create a powerful marketing engine.</p>
          
          <h2>The Content-SEO Connection</h2>
          <p>Great content attracts and engages your audience, while SEO ensures that content is discoverable in search engines. Together, they create a powerful lead generation system.</p>
          
          <h3>Content Marketing Benefits</h3>
          <p>Content marketing builds trust, establishes authority, educates customers, and provides value that keeps people coming back to your business.</p>
          
          <h2>Creating SEO-Optimized Content</h2>
          <p>Every piece of content should be optimized for search engines while providing genuine value to your audience. Balance is key to success.</p>
          
          <h3>Content Optimization Tips</h3>
          <p>Use target keywords naturally, create compelling headlines, include relevant images, and structure content for easy reading and scanning.</p>
          
          <h2>Content Types for Pond Businesses</h2>
          <p>Different types of content serve different purposes in your marketing strategy. Use a variety of content types to reach your audience effectively.</p>
          
          <h3>Effective Content Types</h3>
          <p>How-to guides, seasonal care tips, project showcases, customer testimonials, and FAQ content all work well for pond businesses.</p>
          
          <h2>Measuring Content Marketing Success</h2>
          <p>Track key metrics to understand how your content marketing efforts are performing and where you can improve.</p>
          
          <h3>Key Metrics</h3>
          <p>Website traffic, lead generation, search rankings, social shares, and customer engagement all indicate content marketing success.</p>
          
          <h2>Content Distribution Strategy</h2>
          <p>Creating great content is only half the battle. You also need to distribute that content effectively to reach your target audience.</p>
          
          <h3>Distribution Channels</h3>
          <p>Your website, social media, email newsletters, and industry publications are all effective channels for distributing your content.</p>
          
          <p>Content marketing and SEO together create a powerful system for attracting and converting leads. Focus on creating valuable content that your customers want to read, and optimize it for search engines to maximize your reach.</p>
        `,
        excerpt: 'Learn how to use content marketing and SEO to drive more leads for your pond business. Proven strategies for 2025 success.',
        date: today,
        category: 'Business',
        readTime: '12 min read',
        image: '/images/pondMaintenance.webp',
        author: 'Utah Water Gardens Team',
        tags: ['content marketing', 'seo', 'lead generation', 'pond business']
      },
      'local-seo-strategies-small-businesses-2025': {
        id: 'local-seo-strategies-small-businesses-2025',
        title: 'Local SEO Strategies for Small Businesses 2025',
        content: `
          <p>Local SEO is crucial for small businesses, especially service-based companies like pond construction and maintenance. In 2025, local search continues to evolve, and businesses must adapt to stay competitive.</p>
          
          <h2>Understanding Local SEO</h2>
          <p>Local SEO helps your business appear in local search results when people search for services in your area. It's essential for attracting nearby customers.</p>
          
          <h3>Local Search Factors</h3>
          <p>Google considers proximity, relevance, and prominence when ranking local businesses. Optimize for all three factors to improve your local visibility.</p>
          
          <h2>Google Business Profile Optimization</h2>
          <p>Your Google Business Profile is the foundation of your local SEO strategy. Keep it complete, accurate, and up-to-date.</p>
          
          <h3>Profile Optimization Tips</h3>
          <p>Use accurate business information, add high-quality photos, collect customer reviews, and post regular updates to keep your profile active.</p>
          
          <h2>Local Keyword Strategy</h2>
          <p>Target local keywords that your customers use when searching for your services. Include your city, county, and region in your keyword strategy.</p>
          
          <h3>Local Keyword Examples</h3>
          <p>Keywords like "pond construction Salt Lake City", "water feature installation Utah", and "pond maintenance near me" help attract local customers.</p>
          
          <h2>Local Content Creation</h2>
          <p>Create content that's relevant to your local area. This helps establish your business as a local authority and improves your local search rankings.</p>
          
          <h3>Local Content Ideas</h3>
          <p>Write about local pond projects, seasonal care tips for your climate, and local events or partnerships that showcase your community involvement.</p>
          
          <h2>Customer Reviews and Reputation</h2>
          <p>Customer reviews are crucial for local SEO success. Encourage satisfied customers to leave reviews and respond to all reviews professionally.</p>
          
          <h3>Review Management</h3>
          <p>Monitor your reviews across all platforms, respond promptly and professionally, and use feedback to improve your business operations.</p>
          
          <h2>Local Link Building</h2>
          <p>Build relationships with local businesses, organizations, and media outlets to earn local backlinks that boost your local search rankings.</p>
          
          <h3>Local Link Opportunities</h3>
          <p>Partner with local landscapers, join local business associations, sponsor community events, and collaborate with local media for coverage.</p>
          
          <p>Local SEO is essential for small businesses to compete effectively in their local markets. Focus on providing excellent service, maintaining a strong online presence, and building relationships in your community.</p>
        `,
        excerpt: 'Master local SEO strategies to dominate your local market. Essential tactics for small pond and water feature businesses.',
        date: today,
        category: 'Business',
        readTime: '11 min read',
        image: '/images/IMG_2782.jpg',
        author: 'Utah Water Gardens Team',
        tags: ['local seo', 'small business', 'google business profile', 'local marketing']
      },
      'technical-seo-checklist-2025': {
        id: 'technical-seo-checklist-2025',
        title: 'Technical SEO Checklist 2025: Complete Website Optimization',
        content: `
          <p>Technical SEO is the foundation of any successful SEO strategy. In 2025, search engines continue to prioritize websites that provide excellent technical performance and user experience.</p>
          
          <h2>Site Speed Optimization</h2>
          <p>Page speed is a critical ranking factor and directly impacts user experience. Optimize your website's loading times to improve both SEO and user satisfaction.</p>
          
          <h3>Speed Optimization Techniques</h3>
          <p>Optimize images, minimize code, use a content delivery network (CDN), enable browser caching, and choose a fast hosting provider.</p>
          
          <h2>Mobile Optimization</h2>
          <p>With mobile-first indexing, your website must be fully optimized for mobile devices. Ensure responsive design and mobile-friendly functionality.</p>
          
          <h3>Mobile SEO Checklist</h3>
          <p>Use responsive design, optimize for touch interfaces, ensure fast mobile loading times, and test your site on various mobile devices.</p>
          
          <h2>Site Structure and Navigation</h2>
          <p>A well-organized site structure helps search engines understand your content and improves user experience. Create logical navigation and clear URL structures.</p>
          
          <h3>Structure Best Practices</h3>
          <p>Use descriptive URLs, create a logical site hierarchy, implement breadcrumb navigation, and ensure all pages are accessible within three clicks from the homepage.</p>
          
          <h2>Schema Markup Implementation</h2>
          <p>Schema markup helps search engines understand your content better and can result in rich snippets in search results.</p>
          
          <h3>Schema Types for Pond Businesses</h3>
          <p>Implement LocalBusiness, Service, Review, and FAQ schema markup to enhance your search result appearance.</p>
          
          <h2>Core Web Vitals</h2>
          <p>Core Web Vitals measure user experience metrics that impact search rankings. Optimize for Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>
          
          <h3>Web Vitals Optimization</h3>
          <p>Optimize images and videos, minimize JavaScript execution time, and ensure stable page layouts to improve Core Web Vitals scores.</p>
          
          <h2>Security and HTTPS</h2>
          <p>Website security is essential for SEO and user trust. Ensure your site uses HTTPS and implement proper security measures.</p>
          
          <h3>Security Checklist</h3>
          <p>Install SSL certificates, use strong passwords, keep software updated, implement security headers, and regularly backup your website.</p>
          
          <h2>XML Sitemaps and Robots.txt</h2>
          <p>Help search engines crawl and index your site effectively with proper XML sitemaps and robots.txt files.</p>
          
          <h3>Technical Files</h3>
          <p>Create and submit XML sitemaps to Google Search Console, maintain an accurate robots.txt file, and ensure proper internal linking structure.</p>
          
          <p>Technical SEO is an ongoing process that requires regular monitoring and optimization. Use this checklist to ensure your website meets current SEO standards and provides an excellent user experience.</p>
        `,
        excerpt: 'Comprehensive technical SEO checklist for 2025. Ensure your website is fully optimized for search engines and user experience.',
        date: today,
        category: 'Business',
        readTime: '13 min read',
        image: '/images/waterLillies.webp',
        author: 'Utah Water Gardens Team',
        tags: ['technical seo', 'website optimization', 'core web vitals', 'seo checklist']
      },
      'pond-liners-utah-guide': {
        id: 'pond-liners-utah-guide',
        title: 'Pond Liners Utah Guide: Choosing the Right Liner for Your Climate',
        content: `
          <p>Choosing the right pond liner is crucial for success in Utah's challenging climate. This comprehensive guide will help you select the best liner material for your specific needs and location.</p>
          
          <h2>Understanding Utah's Climate Challenges</h2>
          <p>Utah's climate presents unique challenges for pond liners, including temperature extremes, UV exposure, and freeze-thaw cycles. Your liner choice must account for these factors.</p>
          
          <h3>Climate Factors to Consider</h3>
          <p>Temperature swings from -20°F to 100°F+, intense UV radiation, freeze-thaw cycles, and dry conditions all impact liner performance and longevity.</p>
          
          <h2>EPDM Liners for Utah</h2>
          <p>EPDM (Ethylene Propylene Diene Monomer) liners are excellent for Utah conditions due to their flexibility and temperature resistance.</p>
          
          <h3>EPDM Advantages</h3>
          <p>Flexible in cold temperatures, UV resistant, puncture resistant, and can expand and contract with temperature changes. Perfect for Utah's climate extremes.</p>
          
          <h3>EPDM Considerations</h3>
          <p>More expensive than PVC, requires proper installation, and needs protection from sharp objects during installation.</p>
          
          <h2>PVC Liners for Utah</h2>
          <p>PVC (Polyvinyl Chloride) liners are a cost-effective option but require more careful consideration for Utah's climate.</p>
          
          <h3>PVC Advantages</h3>
          <p>Lower cost, easy to install, lightweight, and available in various thicknesses. Good for smaller ponds with proper protection.</p>
          
          <h3>PVC Limitations</h3>
          <p>Less flexible in cold temperatures, more susceptible to UV damage, and can become brittle over time in extreme conditions.</p>
          
          <h2>Liner Thickness Recommendations</h2>
          <p>Liner thickness is crucial for durability in Utah's challenging conditions. Choose the right thickness for your specific application.</p>
          
          <h3>Thickness Guidelines</h3>
          <p>Small ponds (under 1,000 gallons): 20-30 mil<br>
          Medium ponds (1,000-5,000 gallons): 30-45 mil<br>
          Large ponds (5,000+ gallons): 45-60 mil<br>
          Commercial applications: 60+ mil</p>
          
          <h2>Installation Considerations</h2>
          <p>Proper installation is essential for liner success in Utah. Follow these guidelines to ensure long-term performance.</p>
          
          <h3>Installation Steps</h3>
          <p>1. Prepare the excavation with smooth, rounded edges<br>
          2. Install proper underlayment<br>
          3. Position liner carefully to avoid stress points<br>
          4. Secure edges properly<br>
          5. Test for leaks before adding water</p>
          
          <h2>Underlayment for Utah Conditions</h2>
          <p>Quality underlayment protects your liner from punctures and provides insulation in Utah's temperature extremes.</p>
          
          <h3>Underlayment Options</h3>
          <p>Sand, specialized underlayment fabric, or old carpet can all work as underlayment. Choose based on your soil conditions and budget.</p>
          
          <h2>Maintenance and Longevity</h2>
          <p>Proper maintenance extends liner life in Utah's challenging climate. Follow these tips for maximum longevity.</p>
          
          <h3>Maintenance Tips</h3>
          <p>Protect from sharp objects, maintain proper water levels, avoid harsh chemicals, and inspect regularly for damage or wear.</p>
          
          <h2>Cost Considerations</h2>
          <p>Liner costs vary significantly based on material, thickness, and size. Budget accordingly for your specific needs.</p>
          
          <h3>Cost Factors</h3>
          <p>Material type, thickness, pond size, installation complexity, and underlayment requirements all affect total liner costs.</p>
          
          <p>Choosing the right pond liner for Utah's climate is essential for long-term success. Consider your specific conditions, budget, and maintenance capabilities when making your selection.</p>
        `,
        excerpt: 'Complete guide to pond liners for Utah\'s challenging climate. Learn about EPDM, PVC, and other liner options for durability and performance.',
        date: today,
        category: 'Supplies',
        readTime: '6 min read',
        image: '/images/pond_liner_40mil.jpg',
        author: 'Utah Water Gardens Team',
        tags: ['pond liners', 'utah climate', 'epdm', 'pvc', 'pond supplies']
      },
      'fish-care-guide': {
        id: 'fish-care-guide',
        title: 'Fish Care Guide: Koi & Goldfish for Utah Ponds',
        content: `
          <p>Caring for koi and goldfish in Utah ponds requires understanding their specific needs in our unique climate. This comprehensive guide will help you keep your fish healthy and thriving year-round.</p>
          
          <img src="/images/koi.webp" alt="Utah koi and goldfish care guide for pond fish health" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Proper fish care in Utah requires understanding climate challenges and adapting feeding routines seasonally.</p>
          
          <h2>Understanding Fish Needs in Utah</h2>
          <p>Utah's climate presents unique challenges for fish care, including temperature extremes, water quality issues, and seasonal changes. Your fish care routine must adapt to these conditions.</p>
          
          <h3>Climate Considerations</h3>
          <p>Temperature swings from freezing winters to hot summers, hard water conditions, and seasonal feeding changes all impact fish health and care requirements.</p>
          
          <h2>Koi Care in Utah</h2>
          <p>Koi are hardy fish that can thrive in Utah ponds with proper care. Understanding their specific needs is essential for success.</p>
          
          <h3>Koi Feeding Guidelines</h3>
          <p>Feed koi 2-3 times daily in summer, once daily in spring and fall, and stop feeding when water temperature drops below 50°F. Use high-quality koi food for optimal health.</p>
          
          <h3>Koi Health Monitoring</h3>
          <p>Watch for signs of stress, disease, or injury. Healthy koi are active, have clear eyes, and show good appetite. Regular observation helps catch problems early.</p>
          
          <img src="/images/IMG_2770.jpg" alt="Utah koi health monitoring and water quality testing" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Regular health monitoring and water quality testing are essential for koi success in Utah's climate.</p>
          
          <h2>Goldfish Care in Utah</h2>
          <p>Goldfish are excellent choices for Utah ponds due to their hardiness and adaptability to various conditions.</p>
          
          <h3>Goldfish Varieties</h3>
          <p>Common goldfish, comet goldfish, and shubunkin are all excellent choices for Utah ponds. Avoid fancy varieties that are less hardy in extreme conditions.</p>
          
          <h3>Goldfish Feeding</h3>
          <p>Feed goldfish once or twice daily in summer, reducing frequency as temperatures drop. Use appropriate goldfish food and avoid overfeeding.</p>
          
          <h2>Water Quality Management</h2>
          <p>Maintaining excellent water quality is crucial for fish health in Utah's challenging conditions.</p>
          
          <h3>Water Testing</h3>
          <p>Test water weekly for pH, ammonia, nitrites, and nitrates. Utah's hard water may require pH adjustment for optimal fish health.</p>
          
          <h3>Filtration Requirements</h3>
          <p>Provide adequate filtration for your fish load. Over-filtering is better than under-filtering, especially in Utah's challenging conditions.</p>
          
          <h2>Seasonal Care</h2>
          <p>Fish care changes dramatically with the seasons in Utah. Adapt your routine to provide optimal care year-round.</p>
          
          <h3>Spring Care</h3>
          <p>Gradually resume feeding as water temperatures rise above 50°F. Check fish for winter damage and begin regular maintenance routines.</p>
          
          <h3>Summer Care</h3>
          <p>Monitor water temperatures and provide shade if needed. Increase feeding frequency and watch for signs of heat stress.</p>
          
          <h3>Fall Care</h3>
          <p>Gradually reduce feeding as temperatures drop. Prepare fish for winter by ensuring they're healthy and well-fed.</p>
          
          <h3>Winter Care</h3>
          <p>Stop feeding when water temperature drops below 50°F. Ensure adequate oxygen levels and prevent complete ice coverage.</p>
          
          <img src="/images/waterLillies.webp" alt="Utah fish seasonal care with aquatic plants and water lilies" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Seasonal fish care includes providing shade with aquatic plants and adapting feeding routines to temperature changes.</p>
          
          <h2>Common Health Issues</h2>
          <p>Understanding common fish health problems helps you provide better care and catch issues early.</p>
          
          <h3>Parasites and Disease</h3>
          <p>Watch for signs of parasites, bacterial infections, or fungal diseases. Quarantine new fish and maintain excellent water quality to prevent problems.</p>
          
          <h3>Stress Prevention</h3>
          <p>Provide hiding places, maintain stable water conditions, and avoid overcrowding to minimize stress and health problems.</p>
          
          <h2>Pond Design for Fish</h2>
          <p>Proper pond design is essential for fish health and success in Utah conditions.</p>
          
          <h3>Depth Requirements</h3>
          <p>Provide adequate depth (minimum 24 inches, preferably 36+ inches) for fish survival through Utah winters.</p>
          
          <h3>Plant Integration</h3>
          <p>Include aquatic plants for natural filtration, oxygen production, and fish habitat. Plants also provide shade and hiding places.</p>
          
          <img src="/images/IMG_2779.jpg" alt="Utah pond design for fish health with proper depth and plant integration" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Proper pond design with adequate depth and plant integration ensures fish health in Utah's climate.</p>
          
          <img src="/images/pondServices-2.png" alt="Professional Utah fish care services and pond maintenance" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Professional fish care services ensure your pond fish thrive year-round in Utah's challenging conditions.</p>
          
          <p>Proper fish care in Utah requires understanding local conditions and adapting your routine accordingly. With proper care, your koi and goldfish will thrive and provide years of enjoyment.</p>
        `,
        excerpt: 'Essential guide to caring for koi and goldfish in Utah ponds. Learn about feeding, health, winter care, and creating the perfect environment.',
        date: today,
        category: 'Fish Care',
        readTime: '9 min read',
        image: '/images/koi.webp',
        author: 'Utah Water Gardens Team',
        tags: ['fish care', 'koi', 'goldfish', 'utah ponds', 'aquatic life']
      },
      'water-features-guide': {
        id: 'water-features-guide',
        title: 'Water Features Guide: Fountains, Waterfalls & More for Utah',
        content: `
          <p>Water features add movement, sound, and visual interest to your Utah landscape. This guide explores different water feature options perfect for Utah's climate and aesthetic.</p>
          
          <img src="/images/waterLillies.webp" alt="Utah water features guide showing fountains waterfalls and streams" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Water features add beauty and movement to Utah landscapes while providing soothing sounds and visual interest.</p>
          
          <h2>Types of Water Features</h2>
          <p>From simple fountains to elaborate waterfalls, water features come in many forms. Choose the right type for your space, budget, and maintenance preferences.</p>
          
          <h3>Fountains</h3>
          <p>Fountains are versatile water features that work well in various settings. They provide movement and sound while being relatively easy to maintain.</p>
          
          <h3>Waterfalls</h3>
          <p>Waterfalls create dramatic focal points and natural sounds. They can be integrated with ponds or stand alone as independent features.</p>
          
          <h3>Streams and Rills</h3>
          <p>Streams and rills create flowing water features that guide visitors through your landscape while providing soothing sounds.</p>
          
          <img src="/images/IMG_2770.jpg" alt="Utah water feature types including fountains and waterfalls" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Different water feature types offer various benefits for Utah landscapes and maintenance requirements.</p>
          
          <h2>Utah Climate Considerations</h2>
          <p>Utah's climate affects water feature design, installation, and maintenance. Consider these factors when planning your water feature.</p>
          
          <h3>Freeze Protection</h3>
          <p>Design water features to handle freezing temperatures. Use freeze-resistant materials and consider winter shut-off systems.</p>
          
          <h3>Water Conservation</h3>
          <p>Choose water features that minimize water loss through evaporation and splashing. Recirculating systems are essential for water conservation.</p>
          
          <h3>UV Protection</h3>
          <p>Utah's intense sunlight can damage water feature components. Use UV-resistant materials and consider shade placement.</p>
          
          <h2>Fountain Options for Utah</h2>
          <p>Fountains come in many styles and sizes, making them suitable for various Utah landscapes and budgets.</p>
          
          <h3>Bowl Fountains</h3>
          <p>Bowl fountains are classic, elegant features that work well in formal and informal settings. They're relatively easy to install and maintain.</p>
          
          <h3>Spillway Fountains</h3>
          <p>Spillway fountains create cascading water effects and work well with ponds or as standalone features.</p>
          
          <h3>Wall Fountains</h3>
          <p>Wall fountains save space and create dramatic vertical water features. They're perfect for small spaces or as focal points.</p>
          
          <h2>Waterfall Design</h2>
          <p>Waterfalls can be simple or elaborate, depending on your space, budget, and design preferences.</p>
          
          <h3>Natural Stone Waterfalls</h3>
          <p>Natural stone waterfalls blend seamlessly with Utah landscapes and create authentic, natural-looking features.</p>
          
          <h3>Formal Waterfalls</h3>
          <p>Formal waterfalls use geometric shapes and materials to create structured, architectural water features.</p>
          
          <h3>Multi-Level Waterfalls</h3>
          <p>Multi-level waterfalls create dramatic height and multiple water sounds, perfect for larger landscapes.</p>
          
          <img src="/images/IMG_2779.jpg" alt="Utah waterfall design with natural stone and multi-level features" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Natural stone waterfalls create authentic, dramatic focal points in Utah landscapes.</p>
          
          <h2>Pump and Filtration Systems</h2>
          <p>Proper pump and filtration systems are essential for water feature success in Utah conditions.</p>
          
          <h3>Pump Selection</h3>
          <p>Choose pumps sized appropriately for your water feature. Consider flow rate, head height, and energy efficiency.</p>
          
          <h3>Filtration Needs</h3>
          <p>Even simple fountains benefit from basic filtration to keep water clean and prevent algae growth.</p>
          
          <h3>Winter Shut-off Systems</h3>
          <p>Install systems that allow easy winter shut-off and drainage to prevent freeze damage.</p>
          
          <img src="/images/pondServices-2.png" alt="Utah water feature pump and filtration systems for climate protection" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Proper pump and filtration systems ensure water features function reliably in Utah's climate.</p>
          
          <h2>Installation Considerations</h2>
          <p>Proper installation ensures your water feature will function correctly and last for years in Utah conditions.</p>
          
          <h3>Site Preparation</h3>
          <p>Prepare the site properly, considering drainage, electrical access, and foundation requirements.</p>
          
          <h3>Electrical Requirements</h3>
          <p>Ensure proper electrical installation with GFCI protection and weatherproof connections.</p>
          
          <h3>Water Supply</h3>
          <p>Plan for water supply and drainage, considering Utah's water conservation requirements.</p>
          
          <h2>Maintenance Requirements</h2>
          <p>Regular maintenance keeps your water feature looking and functioning its best throughout Utah's seasons.</p>
          
          <h3>Seasonal Maintenance</h3>
          <p>Clean and inspect water features seasonally, adjusting maintenance routines for Utah's climate changes.</p>
          
          <h3>Water Quality Management</h3>
          <p>Maintain proper water chemistry and clarity to prevent problems and ensure optimal performance.</p>
          
          <h3>Component Care</h3>
          <p>Regularly inspect and maintain pumps, filters, and other components to prevent failures and extend equipment life.</p>
          
          <img src="/images/IMG_2782.jpg" alt="Utah water feature maintenance and seasonal care guide" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Regular maintenance ensures your water features remain beautiful and functional throughout Utah's seasons.</p>
          
          <p>Water features add beauty, sound, and movement to your Utah landscape. Choose the right type for your space and climate, and maintain it properly for years of enjoyment.</p>
        `,
        excerpt: 'Explore different water features perfect for Utah landscapes. From fountains to waterfalls, learn how to add movement and sound to your water garden.',
        date: today,
        category: 'Features',
        readTime: '8 min read',
        image: '/images/waterLillies.webp',
        author: 'Utah Water Gardens Team',
        tags: ['water features', 'fountains', 'waterfalls', 'utah landscape', 'pond design']
      },
      'small-backyard-pond-ideas-utah': {
        id: 'small-backyard-pond-ideas-utah',
        title: 'Small Backyard Pond Ideas for Utah: Maximizing Small Spaces',
        content: `
          <p>Even small backyards can accommodate beautiful water features. This guide explores creative ideas for maximizing small spaces with stunning pond designs perfect for Utah's climate.</p>
          
          <img src="/images/IMG_2779.jpg" alt="Small backyard pond ideas for Utah maximizing limited space" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Creative small backyard pond designs maximize limited space while creating stunning water features in Utah.</p>
          
          <h2>Small Space Pond Design Principles</h2>
          <p>Designing ponds for small spaces requires careful planning and creative solutions. Focus on maximizing visual impact while minimizing space requirements.</p>
          
          <h3>Vertical Design Elements</h3>
          <p>Use vertical space with wall fountains, tiered features, or raised pond designs to create impact without taking up ground space.</p>
          
          <h3>Multi-Functional Features</h3>
          <p>Combine ponds with seating areas, planters, or other landscape features to maximize space efficiency and functionality.</p>
          
          <h2>Container Pond Ideas</h2>
          <p>Container ponds are perfect for small spaces and can be easily moved or modified as needed.</p>
          
          <h3>Barrel Ponds</h3>
          <p>Convert wine barrels or large containers into charming small ponds. They're perfect for patios, decks, or small garden areas.</p>
          
          <h3>Pot Ponds</h3>
          <p>Large ceramic or concrete pots make excellent small pond containers. Choose frost-resistant materials for Utah winters.</p>
          
          <h3>Stock Tank Ponds</h3>
          <p>Galvanized stock tanks create rustic, industrial-style ponds that work well in modern or farmhouse-style landscapes.</p>
          
          <img src="/images/IMG_2770.jpg" alt="Utah container pond ideas including barrel and pot ponds" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Container ponds offer versatile solutions for small spaces while providing beautiful water features.</p>
          
          <h2>Raised Pond Designs</h2>
          <p>Raised ponds save space and create dramatic focal points in small yards.</p>
          
          <h3>Built-in Raised Ponds</h3>
          <p>Integrate raised ponds into patios, decks, or retaining walls for seamless landscape integration.</p>
          
          <h3>Freestanding Raised Ponds</h3>
          <p>Standalone raised ponds can be placed anywhere in your landscape and moved if needed.</p>
          
          <h3>Multi-Level Raised Ponds</h3>
          <p>Create visual interest with multiple levels and cascading water effects in compact spaces.</p>
          
          <h2>Wall and Vertical Features</h2>
          <p>Vertical water features maximize space efficiency while creating dramatic visual impact.</p>
          
          <h3>Wall Fountains</h3>
          <p>Wall fountains take up minimal space while providing water movement and sound. Perfect for small patios or courtyards.</p>
          
          <h3>Living Walls with Water</h3>
          <p>Combine vertical gardens with water features for maximum space efficiency and visual appeal.</p>
          
          <h3>Corner Features</h3>
          <p>Utilize corner spaces with triangular or L-shaped water features that fit perfectly into small areas.</p>
          
          <h2>Utah-Specific Considerations</h2>
          <p>Small ponds in Utah face unique challenges that require special consideration in design and maintenance.</p>
          
          <h3>Freeze Protection</h3>
          <p>Small ponds freeze more quickly than large ones. Plan for winter protection and consider heated elements for year-round enjoyment.</p>
          
          <h3>Water Conservation</h3>
          <p>Minimize water loss with efficient designs, proper covers, and recirculating systems that conserve water.</p>
          
          <h3>Maintenance Access</h3>
          <p>Ensure easy access for cleaning and maintenance, especially in tight spaces where movement is limited.</p>
          
          <img src="/images/waterLillies.webp" alt="Utah small pond plant selection with water lilies and floating plants" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Careful plant selection maximizes beauty and function in small Utah ponds while conserving space.</p>
          
          <h2>Plant Selection for Small Ponds</h2>
          <p>Choose plants that provide maximum impact in minimal space while thriving in Utah conditions.</p>
          
          <h3>Floating Plants</h3>
          <p>Water lettuce, water hyacinth, and duckweed provide coverage and filtration without taking up planting space.</p>
          
          <h3>Marginal Plants</h3>
          <p>Choose compact marginal plants that provide height and interest without overwhelming small spaces.</p>
          
          <h3>Submerged Plants</h3>
          <p>Include oxygenating plants for water quality and fish health in small pond ecosystems.</p>
          
          <h2>Fish for Small Ponds</h2>
          <p>Select fish that thrive in small pond environments and Utah's climate conditions.</p>
          
          <h3>Goldfish Varieties</h3>
          <p>Common goldfish and comet goldfish are excellent choices for small ponds due to their hardiness and adaptability.</p>
          
          <h3>Stocking Guidelines</h3>
          <p>Follow proper stocking guidelines to prevent overcrowding and maintain healthy water conditions in small spaces.</p>
          
          <h3>Winter Considerations</h3>
          <p>Plan for fish survival in small ponds during Utah winters, considering depth and protection requirements.</p>
          
          <img src="/images/koi.webp" alt="Utah small pond fish selection including goldfish and koi" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Proper fish selection ensures success in small Utah ponds while maintaining healthy water conditions.</p>
          
          <h2>Maintenance Tips for Small Ponds</h2>
          <p>Small ponds require regular maintenance to stay healthy and beautiful in Utah conditions.</p>
          
          <h3>Regular Cleaning</h3>
          <p>Clean small ponds more frequently than large ones, as they accumulate debris and waste more quickly.</p>
          
          <h3>Water Quality Management</h3>
          <p>Monitor water quality closely in small ponds, as problems develop more quickly in limited water volumes.</p>
          
          <h3>Seasonal Care</h3>
          <p>Adapt maintenance routines for Utah's seasons, paying special attention to freeze protection and summer heat.</p>
          
          <img src="/images/pondServices-2.png" alt="Utah small pond maintenance and seasonal care guide" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Regular maintenance ensures small ponds remain beautiful and functional throughout Utah's challenging seasons.</p>
          
          <p>Small backyard ponds can be just as beautiful and functional as large ones. With proper design and maintenance, you can create stunning water features that maximize your limited space while thriving in Utah's climate.</p>
        `,
        excerpt: 'Creative ideas for small backyard ponds in Utah. Learn how to create stunning water features even in limited spaces with smart design solutions.',
        date: today,
        category: 'Design',
        readTime: '7 min read',
        image: '/images/IMG_2779.jpg',
        author: 'Utah Water Gardens Team',
        tags: ['small ponds', 'backyard design', 'space maximization', 'utah climate', 'container ponds']
      },
      'natural-vs-liner-ponds-utah-guide': {
        id: 'natural-vs-liner-ponds-utah-guide',
        title: 'Natural vs Liner Ponds in Utah: Which is Right for You?',
        content: `
          <p>Choosing between natural and liner ponds is a crucial decision for Utah pond projects. This guide compares both approaches to help you make the best choice for your property and needs.</p>
          
          <img src="/images/pond_liner_roll.jpg" alt="Natural vs liner ponds comparison guide for Utah pond projects" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Choosing between natural and liner ponds requires careful consideration of Utah's soil conditions and climate challenges.</p>
          
          <h2>Understanding Natural Ponds</h2>
          <p>Natural ponds rely on the existing soil and geology to hold water, creating a more integrated landscape feature that blends with the natural environment.</p>
          
          <h3>Natural Pond Advantages</h3>
          <p>Lower initial cost, natural appearance, integration with existing landscape, and potential for larger sizes without liner costs.</p>
          
          <h3>Natural Pond Challenges</h3>
          <p>Limited to suitable soil conditions, potential water loss through seepage, difficulty in maintaining water levels, and limited design flexibility.</p>
          
          <h2>Understanding Liner Ponds</h2>
          <p>Liner ponds use synthetic or natural materials to create a watertight barrier, allowing ponds to be built in any location with proper preparation.</p>
          
          <h3>Liner Pond Advantages</h3>
          <p>Can be built anywhere, consistent water levels, design flexibility, easier maintenance, and predictable performance.</p>
          
          <h3>Liner Pond Considerations</h3>
          <p>Higher initial cost, potential for liner damage, less natural appearance, and need for proper installation and maintenance.</p>
          
          <img src="/images/pond_liner_40mil.jpg" alt="Utah liner pond installation and EPDM liner benefits" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">High-quality EPDM liners provide reliable water retention and design flexibility for Utah pond projects.</p>
          
          <h2>Utah Soil Conditions</h2>
          <p>Utah's diverse soil conditions significantly impact the feasibility of natural ponds and the requirements for liner ponds.</p>
          
          <h3>Clay Soil Areas</h3>
          <p>Clay soil areas may support natural ponds but require careful evaluation of permeability and stability for long-term success.</p>
          
          <h3>Rocky and Sandy Areas</h3>
          <p>Rocky and sandy areas typically require liner ponds due to high permeability and poor water retention characteristics.</p>
          
          <h3>Mixed Soil Conditions</h3>
          <p>Many Utah locations have mixed soil conditions that require professional evaluation to determine the best pond approach.</p>
          
          <h2>Cost Comparison</h2>
          <p>Understanding the true costs of both approaches helps you make an informed decision for your budget and needs.</p>
          
          <h3>Natural Pond Costs</h3>
          <p>Lower initial costs but potential for higher long-term maintenance and water costs due to seepage and level management issues.</p>
          
          <h3>Liner Pond Costs</h3>
          <p>Higher initial costs but more predictable long-term costs with proper maintenance and water conservation.</p>
          
          <h3>Hidden Costs</h3>
          <p>Consider water costs, maintenance requirements, and potential repairs when comparing total cost of ownership.</p>
          
          <h2>Maintenance Requirements</h2>
          <p>Different pond types require different maintenance approaches and levels of effort in Utah conditions.</p>
          
          <h3>Natural Pond Maintenance</h3>
          <p>May require more frequent water level monitoring, potential for more complex water quality issues, and limited control over water chemistry.</p>
          
          <h3>Liner Pond Maintenance</h3>
          <p>More predictable maintenance requirements, better control over water quality, and easier access for cleaning and repairs.</p>
          
          <h3>Seasonal Considerations</h3>
          <p>Both pond types require seasonal maintenance, but liner ponds typically offer more control and predictability in Utah's climate.</p>
          
          <img src="/images/IMG_2770.jpg" alt="Utah pond maintenance comparison natural vs liner ponds" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Maintenance requirements vary significantly between natural and liner ponds in Utah's climate conditions.</p>
          
          <h2>Design Flexibility</h2>
          <p>The choice between natural and liner ponds affects your design options and creative possibilities.</p>
          
          <h3>Natural Pond Design</h3>
          <p>Limited by existing topography and soil conditions, but can create very natural, integrated landscape features.</p>
          
          <h3>Liner Pond Design</h3>
          <p>Maximum design flexibility, ability to create any shape or size, and integration with various landscape styles and features.</p>
          
          <h3>Feature Integration</h3>
          <p>Liner ponds offer more options for integrating waterfalls, fountains, and other water features into your design.</p>
          
          <h2>Environmental Considerations</h2>
          <p>Both pond types have different environmental impacts and considerations in Utah's sensitive ecosystem.</p>
          
          <h3>Water Conservation</h3>
          <p>Liner ponds typically conserve water better than natural ponds, which is important in Utah's arid climate.</p>
          
          <h3>Wildlife Habitat</h3>
          <p>Both pond types can provide wildlife habitat, but natural ponds may integrate better with existing ecosystems.</p>
          
          <h3>Chemical Use</h3>
          <p>Liner ponds may require more chemical treatments for water quality, while natural ponds rely more on natural processes.</p>
          
          <h2>Making Your Decision</h2>
          <p>Consider your specific site conditions, budget, maintenance preferences, and design goals when choosing between natural and liner ponds.</p>
          
          <h3>Site Evaluation</h3>
          <p>Professional site evaluation is essential to determine soil suitability and recommend the best approach for your location.</p>
          
          <h3>Long-term Planning</h3>
          <p>Consider your long-term goals, maintenance capabilities, and budget when making your pond type decision.</p>
          
          <h3>Hybrid Approaches</h3>
          <p>Some projects may benefit from hybrid approaches that combine elements of both natural and liner pond techniques.</p>
          
          <img src="/images/pondServices-2.png" alt="Professional Utah pond consultation natural vs liner pond decision" style="width: 100%; height: 350px; object-fit: cover; border-radius: 8px; margin: 20px 0;" />
          <p style="text-align: center; font-style: italic; color: #666; margin-top: -10px;">Professional consultation ensures you make the best pond type decision for your Utah property and needs.</p>
          
          <p>The choice between natural and liner ponds depends on your specific site conditions, budget, and goals. Professional evaluation and planning ensure you make the best decision for your Utah pond project.</p>
        `,
        excerpt: 'Compare natural and liner ponds for Utah conditions. Learn the pros and cons of each approach and make the best choice for your property.',
        date: today,
        category: 'Construction',
        readTime: '9 min read',
        image: '/images/pond_liner_roll.jpg',
        author: 'Utah Water Gardens Team',
        tags: ['natural ponds', 'liner ponds', 'pond construction', 'utah soil', 'pond design']
      }
      // Add more blog posts as needed
    };

    const relatedPostsData = [
      {
        id: 'pond-design-guide',
        title: 'Pond Design Guide: Creating Beautiful Water Gardens in Utah',
        slug: 'pond-design-guide',
        image: '/images/pondServices-2.png',
        readTime: '10 min read'
      },
      {
        id: 'aquatic-plants-guide',
        title: 'Aquatic Plants Guide: Best Plants for Utah Ponds',
        slug: 'aquatic-plants-guide',
        image: '/images/plants500x500.webp',
        readTime: '8 min read'
      },
      {
        id: 'utah-climate-guide',
        title: 'Utah Climate Guide: Building Ponds for Mountain Weather',
        slug: 'utah-climate-guide',
        image: '/images/hero-background.jpg',
        readTime: '7 min read'
      }
    ];

    const currentPost = blogPosts[slug];
    if (currentPost) {
      setPost(currentPost);
      setRelatedPosts(relatedPostsData);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="not-found">
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="back-to-blog-btn">Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Helmet>
        <title>{post.title} | Utah Water Gardens Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <link rel="canonical" href={`https://utahwatergardens.com/blog/${post.slug}`} />
        <link rel="icon" href="/images/favicon.ico?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png?v=3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png?v=3" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/android-chrome-512x512.png?v=3" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Utah Water Gardens",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/utahWaterGardensLogo500x463.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://utahwatergardens.com/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-background">
          <img src={post.image} alt={post.title} />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/blog" className="breadcrumb-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                Back to Blog
              </Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{post.category}</span>
            </div>
            
            <div className="post-category-badge">
              <span className="category-tag">{post.category}</span>
            </div>
            
            <h1 className="hero-title">{post.title}</h1>
            
            <div className="hero-meta">
              <div className="meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>{post.readTime}</span>
              </div>
              <div className="meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>{post.author}</span>
              </div>
            </div>
            
            <div className="hero-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="blog-article">
        <div className="container">
          <div className="article-layout">
            <div className="article-content">
              <div className="content-wrapper">
                <div className="post-excerpt">
                  <p>{post.excerpt}</p>
                </div>
                
                <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                {/* Call to Action */}
                <div className="article-cta">
                  <div className="cta-content">
                    <h3>Ready to Create Your Dream Pond?</h3>
                    <p>Let Utah Water Gardens help you design and build the perfect water feature for your Utah property.</p>
                    <div className="cta-buttons">
                      <Link to="/contact" className="cta-btn primary">
                        Get Free Estimate
                      </Link>
                      <Link to="/pond-services" className="cta-btn secondary">
                        View Our Services
                      </Link>
                    </div>
                  </div>
                  <div className="cta-image">
                    <img src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" alt="Beautiful Utah pond with water lilies" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="sidebar-widget author-widget">
                <div className="widget-header">
                  <h3>About the Author</h3>
                </div>
                <div className="author-card">
                  <div className="author-avatar">
                    <img src="/images/utahWaterGardensLogo500x463.png" alt="Utah Water Gardens" />
                  </div>
                  <div className="author-info">
                    <h4>{post.author}</h4>
                    <p className="author-bio">
                      Utah's premier pond and water feature experts with years of experience in the state's unique climate.
                    </p>
                    <div className="author-links">
                      <Link to="/contact" className="author-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        Contact Us
                      </Link>
                      <Link to="/pond-services" className="author-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14,2 14,8 20,8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                          <polyline points="10,9 9,9 8,9"/>
                        </svg>
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="sidebar-widget share-widget">
                <div className="widget-header">
                  <h3>Share This Article</h3>
                </div>
                <div className="share-buttons">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="share-btn facebook"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="share-btn twitter"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="share-btn linkedin"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="sidebar-widget table-of-contents">
                <div className="widget-header">
                  <h3>Table of Contents</h3>
                </div>
                <div className="toc-content">
                  <p>This comprehensive guide covers:</p>
                  <ul>
                    <li>Planning and preparation</li>
                    <li>Step-by-step construction</li>
                    <li>Utah-specific considerations</li>
                    <li>Maintenance and care</li>
                    <li>Professional services</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="related-grid">
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost.id} className="related-post">
                  <div className="related-image">
                    <img src={relatedPost.image} alt={relatedPost.title} />
                  </div>
                  <div className="related-content">
                    <h3>
                      <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="related-read-time">{relatedPost.readTime}</p>
                    <Link to={`/blog/${relatedPost.slug}`} className="read-more-btn">
                      Read Article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="back-to-blog">
        <div className="container">
          <Link to="/blog" className="back-to-blog-btn">
            ← Back to All Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
