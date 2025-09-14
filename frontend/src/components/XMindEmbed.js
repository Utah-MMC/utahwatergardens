import React, { useState, useEffect } from 'react';

const XMindEmbed = ({ 
  mindMapId, 
  title = "Utah Water Gardens Mind Map",
  width = "100%", 
  height = "600px",
  showControls = true 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading XMind embed
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [mindMapId]);

  const handleXMindClick = () => {
    // Open XMind in new tab with the mind map
    window.open(`https://xmind.net/mindmap/${mindMapId}`, '_blank');
  };

  const handleDownload = () => {
    // Trigger download of the mind map
    const link = document.createElement('a');
    link.href = `https://xmind.net/download/${mindMapId}`;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.xmind`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (error) {
    return (
      <div className="xmind-embed-error">
        <h3>Unable to load XMind</h3>
        <p>There was an error loading the mind map. Please try again later.</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="xmind-embed-container">
      <div className="xmind-embed-header">
        <h3>{title}</h3>
        {showControls && (
          <div className="xmind-embed-controls">
            <button 
              className="xmind-button primary"
              onClick={handleXMindClick}
            >
              🧠 Open in XMind
            </button>
            <button 
              className="xmind-button secondary"
              onClick={handleDownload}
            >
              📥 Download
            </button>
          </div>
        )}
      </div>

      <div 
        className="xmind-embed-frame"
        style={{ width, height }}
      >
        {!isLoaded ? (
          <div className="xmind-loading">
            <div className="loading-spinner"></div>
            <p>Loading mind map...</p>
          </div>
        ) : (
          <div className="xmind-preview">
            <div className="mind-map-preview">
              <div className="central-topic">
                <h4>Utah Water Gardens</h4>
                <div className="topic-branches">
                  <div className="branch">
                    <div className="topic">Plant Database</div>
                    <div className="sub-topics">
                      <div className="sub-topic">Water Lilies</div>
                      <div className="sub-topic">Marginal Plants</div>
                      <div className="sub-topic">Submerged Plants</div>
                    </div>
                  </div>
                  <div className="branch">
                    <div className="topic">Services</div>
                    <div className="sub-topics">
                      <div className="sub-topic">Pond Construction</div>
                      <div className="sub-topic">Maintenance</div>
                      <div className="sub-topic">Cleaning</div>
                    </div>
                  </div>
                  <div className="branch">
                    <div className="topic">Care Guides</div>
                    <div className="sub-topics">
                      <div className="sub-topic">Seasonal Care</div>
                      <div className="sub-topic">Water Quality</div>
                      <div className="sub-topic">Plant Care</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embed-overlay">
              <p>Interactive mind map preview</p>
              <button 
                className="open-fullscreen"
                onClick={handleXMindClick}
              >
                Open Full Mind Map
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="xmind-embed-footer">
        <p>
          <strong>Powered by XMind</strong> - Create, share, and collaborate on mind maps
        </p>
        <div className="xmind-links">
          <a href="https://xmind.net" target="_blank" rel="noopener noreferrer">
            Visit XMind
          </a>
          <a href="https://xmind.net/features" target="_blank" rel="noopener noreferrer">
            Features
          </a>
          <a href="https://xmind.net/pricing" target="_blank" rel="noopener noreferrer">
            Pricing
          </a>
        </div>
      </div>

      <style jsx>{`
        .xmind-embed-container {
          border: 1px solid #e1e5e9;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .xmind-embed-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background: #f8f9fa;
          border-bottom: 1px solid #e1e5e9;
        }

        .xmind-embed-header h3 {
          margin: 0;
          color: #2c5530;
          font-size: 18px;
        }

        .xmind-embed-controls {
          display: flex;
          gap: 10px;
        }

        .xmind-button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s;
        }

        .xmind-button.primary {
          background: #2c5530;
          color: white;
        }

        .xmind-button.primary:hover {
          background: #1e3a21;
        }

        .xmind-button.secondary {
          background: #6c757d;
          color: white;
        }

        .xmind-button.secondary:hover {
          background: #545b62;
        }

        .xmind-embed-frame {
          position: relative;
          background: #fafbfc;
        }

        .xmind-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #666;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #2c5530;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 15px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .xmind-preview {
          position: relative;
          height: 100%;
          padding: 20px;
        }

        .mind-map-preview {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .central-topic {
          text-align: center;
        }

        .central-topic h4 {
          background: #2c5530;
          color: white;
          padding: 15px 25px;
          border-radius: 25px;
          margin: 0 0 30px 0;
          font-size: 18px;
          box-shadow: 0 4px 8px rgba(44, 85, 48, 0.3);
        }

        .topic-branches {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .branch {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .topic {
          background: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          margin-bottom: 15px;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
        }

        .sub-topics {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sub-topic {
          background: #e9ecef;
          color: #495057;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 12px;
          border: 1px solid #dee2e6;
        }

        .embed-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .mind-map-preview:hover .embed-overlay {
          opacity: 1;
        }

        .open-fullscreen {
          background: #2c5530;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 15px;
        }

        .open-fullscreen:hover {
          background: #1e3a21;
        }

        .xmind-embed-footer {
          padding: 15px 20px;
          background: #f8f9fa;
          border-top: 1px solid #e1e5e9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .xmind-embed-footer p {
          margin: 0;
          color: #666;
          font-size: 14px;
        }

        .xmind-links {
          display: flex;
          gap: 15px;
        }

        .xmind-links a {
          color: #2c5530;
          text-decoration: none;
          font-size: 14px;
        }

        .xmind-links a:hover {
          text-decoration: underline;
        }

        .xmind-embed-error {
          padding: 40px;
          text-align: center;
          background: #f8d7da;
          color: #721c24;
          border-radius: 8px;
        }

        .xmind-embed-error button {
          background: #dc3545;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 15px;
        }

        @media (max-width: 768px) {
          .xmind-embed-header {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }

          .xmind-embed-controls {
            width: 100%;
            justify-content: space-between;
          }

          .topic-branches {
            flex-direction: column;
            gap: 20px;
          }

          .xmind-embed-footer {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default XMindEmbed;
