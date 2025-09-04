import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoTutorialsPage.css';

const VideoTutorialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const videoCategories = [
    {
      name: 'Pond Setup & Installation',
      icon: '🏗️',
      description: 'Step-by-step guides for building and installing ponds',
      videos: [
        {
          title: 'How to Build a Small Backyard Pond',
          duration: '15:32',
          difficulty: 'Beginner',
          thumbnail: '/images/IMG_2775.jpg',
          description: 'Complete guide to building a 100-gallon backyard pond with waterfall',
          topics: ['Site selection', 'Excavation', 'Liner installation', 'Rock placement', 'Water feature setup'],
          equipment: ['Shovel', 'Pond liner', 'Pump', 'Rocks', 'Level'],
          tags: ['DIY', 'Small pond', 'Backyard', 'Waterfall']
        },
        {
          title: 'Installing a Pond Pump System',
          duration: '12:18',
          difficulty: 'Intermediate',
          thumbnail: '/images/IMG_2782.jpg',
          description: 'Proper installation and setup of pond pump and filtration system',
          topics: ['Pump selection', 'Electrical safety', 'Plumbing setup', 'Filter installation', 'Testing'],
          equipment: ['Pond pump', 'Filter', 'PVC piping', 'Electrical supplies', 'Tools'],
          tags: ['Pump', 'Filtration', 'Electrical', 'Installation']
        },
        {
          title: 'Pond Liner Installation Guide',
          duration: '18:45',
          difficulty: 'Intermediate',
          thumbnail: '/images/IMG_2779.jpg',
          description: 'Professional techniques for installing pond liners without wrinkles or leaks',
          topics: ['Liner selection', 'Site preparation', 'Wrinkle prevention', 'Seam sealing', 'Testing'],
          equipment: ['Pond liner', 'Underlayment', 'Sealant', 'Smooth rocks', 'Utility knife'],
          tags: ['Liner', 'Installation', 'Waterproofing', 'Professional']
        }
      ]
    },
    {
      name: 'Water Quality Management',
      icon: '💧',
      description: 'Tutorials on maintaining crystal clear water and proper chemistry',
      videos: [
        {
          title: 'Testing Pond Water Quality',
          duration: '8:56',
          difficulty: 'Beginner',
          thumbnail: '/images/IMG_2780.jpg',
          description: 'How to test and interpret water quality parameters for healthy ponds',
          topics: ['pH testing', 'Ammonia levels', 'Nitrite testing', 'Alkalinity', 'Results interpretation'],
          equipment: ['Test kits', 'Water samples', 'Notebook', 'pH meter', 'Chemical treatments'],
          tags: ['Water testing', 'Chemistry', 'Health', 'Monitoring']
        },
        {
          title: 'Fixing Green Water Problems',
          duration: '14:22',
          difficulty: 'Intermediate',
          thumbnail: '/images/IMG_2775.jpg',
          description: 'Complete solution for algae blooms and green water issues',
          topics: ['Algae identification', 'UV sterilizer setup', 'Beneficial bacteria', 'Plant solutions', 'Prevention'],
          equipment: ['UV sterilizer', 'Beneficial bacteria', 'Aquatic plants', 'Test kits', 'Pond dye'],
          tags: ['Algae', 'Green water', 'UV sterilizer', 'Solutions']
        },
        {
          title: 'Seasonal Water Quality Maintenance',
          duration: '20:15',
          difficulty: 'Advanced',
          thumbnail: '/images/IMG_2779.jpg',
          description: 'Year-round water quality maintenance for different seasons',
          topics: ['Spring startup', 'Summer monitoring', 'Fall preparation', 'Winter maintenance', 'Equipment care'],
          equipment: ['Seasonal treatments', 'Test kits', 'Beneficial bacteria', 'Equipment', 'Monitoring tools'],
          tags: ['Seasonal', 'Maintenance', 'Year-round', 'Advanced']
        }
      ]
    },
    {
      name: 'Fish Care & Health',
      icon: '🐟',
      description: 'Comprehensive guides for fish health, feeding, and disease prevention',
      videos: [
        {
          title: 'Proper Fish Feeding Techniques',
          duration: '11:34',
          difficulty: 'Beginner',
          thumbnail: '/images/IMG_2782.jpg',
          description: 'Learn the right way to feed your pond fish for optimal health',
          topics: ['Food selection', 'Feeding frequency', 'Amount control', 'Seasonal feeding', 'Fish behavior'],
          equipment: ['Quality fish food', 'Feeding ring', 'Timer', 'Food storage', 'Feeding tools'],
          tags: ['Feeding', 'Fish health', 'Nutrition', 'Beginner']
        },
        {
          title: 'Identifying and Treating Fish Diseases',
          duration: '16:48',
          difficulty: 'Advanced',
          thumbnail: '/images/IMG_2780.jpg',
          description: 'How to recognize common fish diseases and treat them effectively',
          topics: ['Disease symptoms', 'Diagnosis methods', 'Treatment options', 'Quarantine procedures', 'Prevention'],
          equipment: ['Microscope', 'Treatment medications', 'Quarantine tank', 'Test kits', 'Medical supplies'],
          tags: ['Disease', 'Treatment', 'Health', 'Advanced']
        },
        {
          title: 'Fish Quarantine Procedures',
          duration: '13:27',
          difficulty: 'Intermediate',
          thumbnail: '/images/IMG_2775.jpg',
          description: 'Proper quarantine setup and procedures for new fish',
          topics: ['Quarantine tank setup', 'Water parameters', 'Observation period', 'Disease screening', 'Introduction'],
          equipment: ['Quarantine tank', 'Filter', 'Heater', 'Test kits', 'Net'],
          tags: ['Quarantine', 'New fish', 'Safety', 'Prevention']
        }
      ]
    },
    {
      name: 'Plant Care & Maintenance',
      icon: '🌱',
      description: 'Tutorials on aquatic plant selection, planting, and maintenance',
      videos: [
        {
          title: 'Planting Aquatic Plants in Your Pond',
          duration: '19:12',
          difficulty: 'Beginner',
          thumbnail: '/images/IMG_2779.jpg',
          description: 'Complete guide to selecting and planting aquatic plants for your pond',
          topics: ['Plant selection', 'Planting depth', 'Substrate preparation', 'Fertilization', 'Maintenance'],
          equipment: ['Aquatic plants', 'Planting baskets', 'Substrate', 'Fertilizer', 'Pruning tools'],
          tags: ['Plants', 'Planting', 'Aquatic', 'Beginner']
        },
        {
          title: 'Dividing and Propagating Pond Plants',
          duration: '22:45',
          difficulty: 'Intermediate',
          thumbnail: '/images/IMG_2782.jpg',
          description: 'How to divide overgrown plants and propagate new ones',
          topics: ['Plant division', 'Propagation methods', 'Timing', 'Root care', 'New plant care'],
          equipment: ['Sharp knife', 'Planting baskets', 'Substrate', 'Rooting hormone', 'New containers'],
          tags: ['Propagation', 'Division', 'Plants', 'Intermediate']
        },
        {
          title: 'Seasonal Plant Care Guide',
          duration: '17:33',
          difficulty: 'Intermediate',
          thumbnail: '/images/IMG_2775.jpg',
          description: 'Year-round plant care for different seasons and climates',
          topics: ['Spring growth', 'Summer maintenance', 'Fall preparation', 'Winter protection', 'Seasonal tasks'],
          equipment: ['Seasonal tools', 'Protection materials', 'Fertilizer', 'Pruning tools', 'Storage containers'],
          tags: ['Seasonal', 'Plant care', 'Maintenance', 'Year-round']
        }
      ]
    },
    {
      name: 'Equipment Maintenance',
      icon: '🔧',
      description: 'How-to videos for maintaining and troubleshooting pond equipment',
      videos: [
        {
          title: 'Cleaning and Maintaining Pond Filters',
          duration: '14:56',
          difficulty: 'Intermediate',
          thumbnail: '/images/IMG_2780.jpg',
          description: 'Proper cleaning and maintenance of mechanical and biological filters',
          topics: ['Filter types', 'Cleaning frequency', 'Media replacement', 'Performance monitoring', 'Troubleshooting'],
          equipment: ['Filter media', 'Cleaning tools', 'Replacement parts', 'Test kits', 'Maintenance schedule'],
          tags: ['Filters', 'Maintenance', 'Cleaning', 'Equipment']
        },
        {
          title: 'Pump Maintenance and Troubleshooting',
          duration: '21:18',
          difficulty: 'Advanced',
          thumbnail: '/images/IMG_2779.jpg',
          description: 'Complete pump maintenance guide and common problem solutions',
          topics: ['Pump disassembly', 'Impeller cleaning', 'Seal replacement', 'Performance testing', 'Problem diagnosis'],
          equipment: ['Replacement parts', 'Cleaning supplies', 'Tools', 'Lubricants', 'Testing equipment'],
          tags: ['Pump', 'Maintenance', 'Troubleshooting', 'Advanced']
        },
        {
          title: 'UV Sterilizer Maintenance',
          duration: '12:42',
          difficulty: 'Intermediate',
          thumbnail: '/images/IMG_2782.jpg',
          description: 'How to maintain and replace UV sterilizer components',
          topics: ['Bulb replacement', 'Sleeve cleaning', 'Flow rate checking', 'Timer settings', 'Performance monitoring'],
          equipment: ['UV bulbs', 'Cleaning supplies', 'Flow meter', 'Timer', 'Replacement parts'],
          tags: ['UV sterilizer', 'Maintenance', 'Bulb replacement', 'Performance']
        }
      ]
    },
    {
      name: 'Seasonal Care',
      icon: '🍂',
      description: 'Season-specific care tutorials for year-round pond health',
      videos: [
        {
          title: 'Spring Pond Startup',
          duration: '25:18',
          difficulty: 'Intermediate',
          thumbnail: '/images/IMG_2775.jpg',
          description: 'Complete spring startup procedure for your pond after winter',
          topics: ['Winter cover removal', 'Equipment startup', 'Water quality testing', 'Plant care', 'Fish feeding'],
          equipment: ['Test kits', 'Beneficial bacteria', 'Plant fertilizer', 'Cleaning tools', 'Feeding supplies'],
          tags: ['Spring', 'Startup', 'Seasonal', 'Maintenance']
        },
        {
          title: 'Summer Pond Care',
          duration: '18:45',
          difficulty: 'Beginner',
          thumbnail: '/images/IMG_2782.jpg',
          description: 'Essential summer maintenance for hot weather pond care',
          topics: ['Temperature monitoring', 'Aeration increase', 'Feeding adjustments', 'Plant trimming', 'Algae control'],
          equipment: ['Thermometer', 'Aeration system', 'Pruning tools', 'Algae treatments', 'Shade materials'],
          tags: ['Summer', 'Heat', 'Maintenance', 'Beginner']
        },
        {
          title: 'Winter Pond Preparation',
          duration: '23:12',
          difficulty: 'Advanced',
          thumbnail: '/images/IMG_2780.jpg',
          description: 'Comprehensive winter preparation to protect your pond and fish',
          topics: ['Equipment winterization', 'Fish protection', 'Plant care', 'Ice prevention', 'Emergency planning'],
          equipment: ['Pond heater', 'De-icer', 'Winter covers', 'Protection materials', 'Emergency supplies'],
          tags: ['Winter', 'Preparation', 'Protection', 'Advanced']
        }
      ]
    }
  ];

  const featuredVideos = [
    {
      title: 'Complete Pond Setup from Start to Finish',
      duration: '45:22',
      difficulty: 'All Levels',
      thumbnail: '/images/IMG_2779.jpg',
      description: 'Our most comprehensive tutorial covering everything from planning to completion',
      views: '2,847',
      rating: '4.9',
      featured: true
    },
    {
      title: 'Emergency Pond Problem Solutions',
      duration: '18:33',
      difficulty: 'All Levels',
      thumbnail: '/images/IMG_2780.jpg',
      description: 'Quick solutions for common emergency situations',
      views: '1,956',
      rating: '4.8',
      featured: true
    },
    {
      title: 'Advanced Koi Pond Design',
      duration: '32:15',
      difficulty: 'Advanced',
      thumbnail: '/images/IMG_2775.jpg',
      description: 'Professional techniques for designing and building koi ponds',
      views: '1,234',
      rating: '4.9',
      featured: true
    }
  ];

  const learningPaths = [
    {
      name: 'Beginner Pond Owner',
      description: 'Perfect for new pond owners getting started',
      videos: ['How to Build a Small Backyard Pond', 'Testing Pond Water Quality', 'Proper Fish Feeding Techniques', 'Planting Aquatic Plants in Your Pond'],
      estimatedTime: '2-3 hours',
      difficulty: 'Beginner'
    },
    {
      name: 'Intermediate Maintenance',
      description: 'For pond owners ready to tackle more advanced maintenance',
      videos: ['Installing a Pond Pump System', 'Cleaning and Maintaining Pond Filters', 'Dividing and Propagating Pond Plants', 'Seasonal Plant Care Guide'],
      estimatedTime: '3-4 hours',
      difficulty: 'Intermediate'
    },
    {
      name: 'Advanced Troubleshooting',
      description: 'Expert-level problem solving and optimization',
      videos: ['Identifying and Treating Fish Diseases', 'Pump Maintenance and Troubleshooting', 'Advanced Koi Pond Design', 'Winter Pond Preparation'],
      estimatedTime: '4-5 hours',
      difficulty: 'Advanced'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? videoCategories 
    : videoCategories.filter(category => category.name === selectedCategory);

  return (
    <div className="video-tutorials-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Video Tutorials</h1>
          <p>Learn pond care through our comprehensive video library. From basic setup to advanced maintenance, we have tutorials for every skill level.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Video Support</a>
            <Link to="/resources" className="secondary-button">View All Resources</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2782.jpg" alt="Video tutorials for pond care and maintenance" />
        </div>
      </section>

      {/* Featured Videos */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Tutorials</h2>
          <p>Our most popular and comprehensive video guides</p>
          <div className="featured-grid">
            {featuredVideos.map((video, index) => (
              <div key={index} className="featured-card">
                <div className="featured-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="featured-badge">Featured</div>
                  <div className="video-duration">{video.duration}</div>
                </div>
                <div className="featured-content">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <div className="video-meta">
                    <span className="difficulty-badge">{video.difficulty}</span>
                    <span className="views">{video.views} views</span>
                    <span className="rating">⭐ {video.rating}</span>
                  </div>
                  <button className="watch-button">Watch Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="learning-paths-section">
        <div className="container">
          <h2>Learning Paths</h2>
          <p>Follow these structured learning paths based on your experience level</p>
          <div className="learning-paths-grid">
            {learningPaths.map((path, index) => (
              <div key={index} className="learning-path-card">
                <div className="path-header">
                  <h3>{path.name}</h3>
                  <span className={`difficulty-badge ${path.difficulty.toLowerCase()}`}>
                    {path.difficulty}
                  </span>
                </div>
                <p className="path-description">{path.description}</p>
                <div className="path-videos">
                  <h4>Included Videos:</h4>
                  <ul>
                    {path.videos.map((video, videoIndex) => (
                      <li key={videoIndex}>{video}</li>
                    ))}
                  </ul>
                </div>
                <div className="path-meta">
                  <span className="estimated-time">⏱️ {path.estimatedTime}</span>
                  <button className="start-path-button">Start Learning Path</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filter-section">
        <div className="container">
          <h2>Browse by Category</h2>
          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Categories
            </button>
            {videoCategories.map((category, index) => (
              <button 
                key={index}
                className={`filter-btn ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="videos-section">
        <div className="container">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category-section">
              <div className="category-header">
                <h2>{category.icon} {category.name}</h2>
                <p>{category.description}</p>
              </div>
              <div className="videos-grid">
                {category.videos.map((video, videoIndex) => (
                  <div key={videoIndex} className="video-card">
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="video-duration">{video.duration}</div>
                      <div className="play-button">▶️</div>
                    </div>
                    <div className="video-content">
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                      
                      <div className="video-topics">
                        <h4>Topics Covered:</h4>
                        <div className="topics-tags">
                          {video.topics.map((topic, topicIndex) => (
                            <span key={topicIndex} className="topic-tag">{topic}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="video-equipment">
                        <h4>Equipment Needed:</h4>
                        <div className="equipment-tags">
                          {video.equipment.map((item, itemIndex) => (
                            <span key={itemIndex} className="equipment-tag">{item}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="video-meta">
                        <span className={`difficulty-badge ${video.difficulty.toLowerCase()}`}>
                          {video.difficulty}
                        </span>
                        <span className="duration">{video.duration}</span>
                        <div className="video-tags">
                          {video.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="video-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="watch-video-button">Watch Tutorial</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Tips */}
      <section className="tips-section">
        <div className="container">
          <h2>Video Learning Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">📱</div>
              <h3>Watch on Any Device</h3>
              <p>Our videos are optimized for mobile, tablet, and desktop viewing</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">📝</div>
              <h3>Take Notes</h3>
              <p>Pause videos to take notes and follow along with the demonstrations</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🔄</div>
              <h3>Replay Sections</h3>
              <p>Don't hesitate to rewatch difficult sections until you understand</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">📞</div>
              <h3>Ask Questions</h3>
              <p>Call us if you need clarification on any video content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Need Help with a Specific Topic?</h2>
          <p>Our experts can provide personalized guidance and answer questions about any tutorial</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoTutorialsPage;
