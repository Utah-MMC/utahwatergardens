import React, { useState } from 'react';
import SEO from '../components/SEO';
import PasswordProtection from '../components/PasswordProtection';
import XMindIntegration from '../components/XMindIntegration';
import XMindEmbed from '../components/XMindEmbed';
import CompleteBusinessOPMLGenerator from '../components/CompleteBusinessOPMLGenerator';

const XMindPage = () => {
  const [activeTab, setActiveTab] = useState('export');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const tabs = [
    { id: 'export', label: 'Export to XMind', icon: '📤' },
    { id: 'complete-business', label: 'Complete Business Map', icon: '🏢' },
    { id: 'embed', label: 'Embedded Mind Maps', icon: '🧠' },
    { id: 'benefits', label: 'Benefits', icon: '✨' }
  ];

  const mindMaps = [
    {
      id: 'plant-database',
      title: 'Utah Water Gardens Plant Database',
      description: 'Complete plant catalog with care instructions and growing requirements'
    },
    {
      id: 'service-areas',
      title: 'Service Areas & Locations',
      description: 'Geographic coverage and local service information'
    },
    {
      id: 'care-guides',
      title: 'Pond Care Guides',
      description: 'Step-by-step maintenance and care instructions'
    },
    {
      id: 'video-tutorials',
      title: 'Video Tutorial Library',
      description: 'Categorized video tutorials and learning resources'
    }
  ];

  return (
    <>
      <SEO 
        title="XMind Integration - Utah Water Gardens"
        description="Export and visualize Utah Water Gardens content with XMind mind maps. Organize plant databases, service areas, and care guides into interactive visual diagrams."
        keywords="XMind, mind maps, pond care, plant database, visualization, organization"
      />
      
      <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)}>
        <div className="xmind-page">
        <div className="page-header">
          <h1>🧠 XMind Integration</h1>
          <p className="page-subtitle">
            Transform your Utah Water Gardens content into interactive mind maps for better organization, 
            visualization, and collaboration.
          </p>
        </div>

        <div className="tab-navigation">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'export' && (
            <div className="export-tab">
              <XMindIntegration />
            </div>
          )}

          {activeTab === 'complete-business' && (
            <div className="complete-business-tab">
              <CompleteBusinessOPMLGenerator />
            </div>
          )}

          {activeTab === 'embed' && (
            <div className="embed-tab">
              <div className="embed-intro">
                <h2>Interactive Mind Maps</h2>
                <p>
                  Explore our content through interactive XMind mind maps. Click on any mind map below 
                  to open it in XMind for full interactivity and editing capabilities.
                </p>
              </div>

              <div className="mind-maps-grid">
                {mindMaps.map(mindMap => (
                  <div key={mindMap.id} className="mind-map-card">
                    <XMindEmbed
                      mindMapId={mindMap.id}
                      title={mindMap.title}
                      height="400px"
                    />
                    <div className="mind-map-info">
                      <h3>{mindMap.title}</h3>
                      <p>{mindMap.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="benefits-tab">
              <div className="benefits-intro">
                <h2>Why Use XMind with Utah Water Gardens?</h2>
                <p>
                  XMind integration transforms your pond and water garden knowledge into powerful, 
                  visual learning tools that enhance understanding and collaboration.
                </p>
              </div>

              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">📊</div>
                  <h3>Visual Organization</h3>
                  <p>
                    Transform complex plant databases and care instructions into clear, 
                    hierarchical mind maps that are easy to navigate and understand.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">🔍</div>
                  <h3>Enhanced Learning</h3>
                  <p>
                    Visual learners can better understand pond care concepts, plant relationships, 
                    and maintenance procedures through interactive mind maps.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">🤝</div>
                  <h3>Team Collaboration</h3>
                  <p>
                    Share mind maps with team members, clients, and partners for better 
                    communication and collaborative planning of pond projects.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">📱</div>
                  <h3>Mobile Access</h3>
                  <p>
                    Access your mind maps on any device through XMind's mobile apps, 
                    making pond care information available wherever you are.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">📈</div>
                  <h3>Client Presentations</h3>
                  <p>
                    Use mind maps to present pond designs, maintenance schedules, and 
                    care plans to clients in an engaging, professional format.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">🔄</div>
                  <h3>Content Synchronization</h3>
                  <p>
                    Keep your mind maps synchronized across all devices and team members, 
                    ensuring everyone has access to the latest information.
                  </p>
                </div>
              </div>

              <div className="use-cases">
                <h2>Common Use Cases</h2>
                <div className="use-cases-grid">
                  <div className="use-case">
                    <h4>🏠 Residential Projects</h4>
                    <ul>
                      <li>Plan pond designs with clients</li>
                      <li>Create maintenance schedules</li>
                      <li>Document plant selections</li>
                      <li>Track seasonal care tasks</li>
                    </ul>
                  </div>

                  <div className="use-case">
                    <h4>🏢 Commercial Projects</h4>
                    <ul>
                      <li>Project planning and timelines</li>
                      <li>Team coordination and tasks</li>
                      <li>Client communication</li>
                      <li>Quality control checklists</li>
                    </ul>
                  </div>

                  <div className="use-case">
                    <h4>📚 Educational Content</h4>
                    <ul>
                      <li>Training new team members</li>
                      <li>Client education materials</li>
                      <li>Workshop presentations</li>
                      <li>Knowledge base organization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="getting-started">
                <h2>Getting Started</h2>
                <div className="steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Export Your Content</h4>
                      <p>Use the export tool above to convert your Utah Water Gardens content into XMind-compatible formats.</p>
                    </div>
                  </div>

                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Import into XMind</h4>
                      <p>Open XMind and import the exported files to create your mind maps.</p>
                    </div>
                  </div>

                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Customize & Share</h4>
                      <p>Customize your mind maps with colors, icons, and additional notes, then share with your team.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .xmind-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .page-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-header h1 {
          color: #2c5530;
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .tab-navigation {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #e1e5e9;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 15px 25px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 16px;
          color: #666;
          border-bottom: 3px solid transparent;
          transition: all 0.3s;
        }

        .tab-button:hover {
          color: #2c5530;
          background: #f8f9fa;
        }

        .tab-button.active {
          color: #2c5530;
          border-bottom-color: #2c5530;
          font-weight: 600;
        }

        .tab-icon {
          font-size: 18px;
        }

        .tab-content {
          min-height: 500px;
        }

        .embed-intro, .benefits-intro {
          text-align: center;
          margin-bottom: 40px;
        }

        .embed-intro h2, .benefits-intro h2 {
          color: #2c5530;
          margin-bottom: 15px;
        }

        .mind-maps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 30px;
        }

        .mind-map-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .mind-map-info {
          padding: 20px;
        }

        .mind-map-info h3 {
          color: #2c5530;
          margin-bottom: 10px;
        }

        .mind-map-info p {
          color: #666;
          line-height: 1.5;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 50px;
        }

        .benefit-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid #e1e5e9;
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .benefit-card h3 {
          color: #2c5530;
          margin-bottom: 15px;
        }

        .benefit-card p {
          color: #666;
          line-height: 1.6;
        }

        .use-cases {
          margin-bottom: 50px;
        }

        .use-cases h2 {
          color: #2c5530;
          text-align: center;
          margin-bottom: 30px;
        }

        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .use-case {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 12px;
          border-left: 4px solid #2c5530;
        }

        .use-case h4 {
          color: #2c5530;
          margin-bottom: 15px;
        }

        .use-case ul {
          list-style: none;
          padding: 0;
        }

        .use-case li {
          padding: 5px 0;
          color: #666;
        }

        .use-case li:before {
          content: "✓ ";
          color: #28a745;
          font-weight: bold;
        }

        .getting-started {
          background: #e7f3ff;
          padding: 30px;
          border-radius: 12px;
          border-left: 4px solid #007bff;
        }

        .getting-started h2 {
          color: #0056b3;
          text-align: center;
          margin-bottom: 30px;
        }

        .steps {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .step {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .step-number {
          background: #007bff;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .step-content h4 {
          color: #0056b3;
          margin-bottom: 8px;
        }

        .step-content p {
          color: #666;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }

          .page-subtitle {
            font-size: 1rem;
          }

          .tab-navigation {
            flex-direction: column;
          }

          .tab-button {
            justify-content: center;
          }

          .mind-maps-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .use-cases-grid {
            grid-template-columns: 1fr;
          }

          .steps {
            gap: 20px;
          }

          .step {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
      </PasswordProtection>
    </>
  );
};

export default XMindPage;
