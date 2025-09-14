import React from 'react';
import { downloadCompleteBusinessOPML, copyCompleteBusinessOPMLToClipboard } from '../utils/generateCompleteBusinessOPML';

const CompleteBusinessOPMLGenerator = () => {
  const handleDownload = () => {
    downloadCompleteBusinessOPML();
  };

  const handleCopy = () => {
    copyCompleteBusinessOPMLToClipboard();
  };

  return (
    <div className="complete-business-opml-generator">
      <div className="generator-header">
        <h2>🏢 Complete Business Mind Map</h2>
        <p>
          Generate a comprehensive OPML file containing your entire Utah Water Gardens business overview. 
          This includes all services, service areas, care guides, pricing, and business operations.
        </p>
      </div>

      <div className="generator-actions">
        <button 
          className="download-button primary"
          onClick={handleDownload}
        >
          📥 Download Complete Business OPML
        </button>
        
        <button 
          className="copy-button secondary"
          onClick={handleCopy}
        >
          📋 Copy to Clipboard
        </button>
      </div>

      <div className="mind-map-preview">
        <h3>What's Included in Your Complete Business Mind Map:</h3>
        <div className="preview-sections">
          <div className="preview-section">
            <h4>🏢 Company Overview</h4>
            <ul>
              <li>Business Information & Contact Details</li>
              <li>Mission, Vision & Values</li>
              <li>Key Differentiators</li>
            </ul>
          </div>

          <div className="preview-section">
            <h4>📍 Service Areas</h4>
            <ul>
              <li>Salt Lake County (8 cities)</li>
              <li>Davis County (8 cities)</li>
              <li>Utah County (7 cities)</li>
            </ul>
          </div>

          <div className="preview-section">
            <h4>🛠️ Core Services</h4>
            <ul>
              <li>Pond Services (6 services with pricing)</li>
              <li>Pond Supplies (6 categories)</li>
              <li>Plants & Fish (2 categories)</li>
              <li>Consultation Services (2 types)</li>
            </ul>
          </div>

          <div className="preview-section">
            <h4>📚 Care Guides & Education</h4>
            <ul>
              <li>Installation Guides</li>
              <li>Maintenance Guides</li>
              <li>Animal Care</li>
              <li>Plant Care</li>
              <li>Problem Solving</li>
            </ul>
          </div>

          <div className="preview-section">
            <h4>🎯 Target Markets</h4>
            <ul>
              <li>Residential Customers</li>
              <li>Commercial Customers</li>
              <li>Municipal & Government</li>
            </ul>
          </div>

          <div className="preview-section">
            <h4>💪 Competitive Advantages</h4>
            <ul>
              <li>Local Expertise</li>
              <li>Professional Equipment</li>
              <li>Comprehensive Services</li>
              <li>Quality Guarantee</li>
            </ul>
          </div>

          <div className="preview-section">
            <h4>⚙️ Business Operations</h4>
            <ul>
              <li>Team Structure</li>
              <li>Equipment & Tools</li>
              <li>Quality Standards</li>
            </ul>
          </div>

          <div className="preview-section">
            <h4>📈 Marketing & Outreach</h4>
            <ul>
              <li>Digital Presence</li>
              <li>Community Engagement</li>
              <li>Content Marketing</li>
            </ul>
          </div>

          <div className="preview-section">
            <h4>🚀 Future Growth</h4>
            <ul>
              <li>Service Expansion</li>
              <li>Market Development</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="usage-instructions">
        <h3>How to Use Your Complete Business Mind Map:</h3>
        <ol>
          <li><strong>Download the OPML file</strong> using the button above</li>
          <li><strong>Open XMind</strong> application on your computer</li>
          <li><strong>Import the file:</strong> Go to File → Import → Select your downloaded OPML file</li>
          <li><strong>Customize:</strong> Add colors, icons, and additional notes to personalize your mind map</li>
          <li><strong>Share:</strong> Export to PDF, PowerPoint, or share directly with team members</li>
          <li><strong>Present:</strong> Use for client presentations, team meetings, and business planning</li>
        </ol>
      </div>

      <div className="benefits">
        <h3>Benefits of Your Complete Business Mind Map:</h3>
        <div className="benefits-grid">
          <div className="benefit">
            <h4>📊 Business Overview</h4>
            <p>Complete visual representation of your entire business structure and operations</p>
          </div>
          <div className="benefit">
            <h4>🎯 Strategic Planning</h4>
            <p>Use for business planning, goal setting, and strategic decision making</p>
          </div>
          <div className="benefit">
            <h4>👥 Team Training</h4>
            <p>Train new employees with comprehensive business knowledge</p>
          </div>
          <div className="benefit">
            <h4>🤝 Client Presentations</h4>
            <p>Present your complete service offering to potential clients</p>
          </div>
          <div className="benefit">
            <h4>📈 Growth Planning</h4>
            <p>Identify opportunities for expansion and service development</p>
          </div>
          <div className="benefit">
            <h4>🔄 Process Improvement</h4>
            <p>Visualize workflows and identify areas for optimization</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .complete-business-opml-generator {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .generator-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #2c5530, #4a7c59);
          color: white;
          border-radius: 12px;
        }

        .generator-header h2 {
          margin-bottom: 15px;
          font-size: 2rem;
        }

        .generator-header p {
          font-size: 1.1rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .generator-actions {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .download-button, .copy-button {
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .download-button.primary {
          background: #2c5530;
          color: white;
        }

        .download-button.primary:hover {
          background: #1e3a21;
          transform: translateY(-2px);
        }

        .copy-button.secondary {
          background: #6c757d;
          color: white;
        }

        .copy-button.secondary:hover {
          background: #545b62;
          transform: translateY(-2px);
        }

        .mind-map-preview {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 30px;
        }

        .mind-map-preview h3 {
          color: #2c5530;
          margin-bottom: 20px;
          text-align: center;
        }

        .preview-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .preview-section {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #2c5530;
        }

        .preview-section h4 {
          color: #2c5530;
          margin-bottom: 10px;
        }

        .preview-section ul {
          list-style: none;
          padding: 0;
        }

        .preview-section li {
          padding: 5px 0;
          color: #666;
        }

        .preview-section li:before {
          content: "✓ ";
          color: #28a745;
          font-weight: bold;
        }

        .usage-instructions {
          background: #e7f3ff;
          padding: 30px;
          border-radius: 12px;
          border-left: 4px solid #007bff;
          margin-bottom: 30px;
        }

        .usage-instructions h3 {
          color: #0056b3;
          margin-bottom: 20px;
        }

        .usage-instructions ol {
          margin: 0;
          padding-left: 20px;
        }

        .usage-instructions li {
          margin-bottom: 10px;
          line-height: 1.6;
        }

        .benefits {
          background: #f0f8f0;
          padding: 30px;
          border-radius: 12px;
          border-left: 4px solid #28a745;
        }

        .benefits h3 {
          color: #155724;
          margin-bottom: 20px;
          text-align: center;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .benefit {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }

        .benefit h4 {
          color: #155724;
          margin-bottom: 10px;
        }

        .benefit p {
          color: #666;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .generator-actions {
            flex-direction: column;
            align-items: center;
          }

          .preview-sections {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CompleteBusinessOPMLGenerator;
