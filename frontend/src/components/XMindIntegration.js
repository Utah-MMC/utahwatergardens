import React, { useState } from 'react';
import xmindExportService from '../services/xmindExportService';

const XMindIntegration = () => {
  const [selectedContent, setSelectedContent] = useState('plants');
  const [selectedFormat, setSelectedFormat] = useState('opml');
  const [isExporting, setIsExporting] = useState(false);
  const [exportResult, setExportResult] = useState(null);
  const [error, setError] = useState(null);

  const contentTypes = [
    { value: 'plants', label: 'Plant Database', description: 'Export all plant information with care instructions' },
    { value: 'services', label: 'Service Areas', description: 'Export service area information and local details' },
    { value: 'services-breakdown', label: 'Services Breakdown', description: 'Export detailed service categories, pricing, and processes' },
    { value: 'care-guides', label: 'Care Guides', description: 'Export step-by-step care instructions and best practices' },
    { value: 'video-tutorials', label: 'Video Tutorials', description: 'Export categorized video tutorial information' }
  ];

  const exportFormats = [
    { value: 'opml', label: 'OPML', description: 'XMind native format - can be imported directly' },
    { value: 'markdown', label: 'Markdown', description: 'Text-based format for documentation' },
    { value: 'json', label: 'JSON', description: 'Structured data format for API integration' }
  ];

  const handleExport = async () => {
    setIsExporting(true);
    setError(null);
    setExportResult(null);

    try {
      const result = await xmindExportService.exportToXMind(selectedContent, selectedFormat);
      setExportResult(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsExporting(false);
    }
  };

  const downloadFile = () => {
    if (!exportResult) return;

    const blob = new Blob([exportResult], { 
      type: selectedFormat === 'json' ? 'application/json' : 'text/plain' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `utah-water-gardens-${selectedContent}.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    if (!exportResult) return;
    navigator.clipboard.writeText(exportResult);
    alert('Content copied to clipboard!');
  };

  return (
    <div className="xmind-integration">
      <div className="integration-header">
        <h2>🧠 XMind Integration</h2>
        <p>Export Utah Water Gardens content to XMind mind maps for better organization and visualization.</p>
      </div>

      <div className="export-controls">
        <div className="control-group">
          <label htmlFor="content-type">Content Type:</label>
          <select 
            id="content-type"
            value={selectedContent} 
            onChange={(e) => setSelectedContent(e.target.value)}
          >
            {contentTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <p className="description">
            {contentTypes.find(type => type.value === selectedContent)?.description}
          </p>
        </div>

        <div className="control-group">
          <label htmlFor="export-format">Export Format:</label>
          <select 
            id="export-format"
            value={selectedFormat} 
            onChange={(e) => setSelectedFormat(e.target.value)}
          >
            {exportFormats.map(format => (
              <option key={format.value} value={format.value}>
                {format.label}
              </option>
            ))}
          </select>
          <p className="description">
            {exportFormats.find(format => format.value === selectedFormat)?.description}
          </p>
        </div>

        <button 
          className="export-button"
          onClick={handleExport}
          disabled={isExporting}
        >
          {isExporting ? 'Exporting...' : 'Export to XMind'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          <h3>Export Error</h3>
          <p>{error}</p>
        </div>
      )}

      {exportResult && (
        <div className="export-result">
          <div className="result-header">
            <h3>Export Successful!</h3>
            <div className="result-actions">
              <button onClick={downloadFile} className="download-button">
                📥 Download File
              </button>
              <button onClick={copyToClipboard} className="copy-button">
                📋 Copy to Clipboard
              </button>
            </div>
          </div>
          
          <div className="result-preview">
            <h4>Preview:</h4>
            <pre className="preview-content">
              {selectedFormat === 'json' 
                ? JSON.stringify(JSON.parse(exportResult), null, 2)
                : exportResult
              }
            </pre>
          </div>

          <div className="import-instructions">
            <h4>How to Import into XMind:</h4>
            <ol>
              <li>Open XMind application</li>
              <li>Go to <strong>File → Import</strong></li>
              <li>Select the downloaded file</li>
              <li>Choose the appropriate format (OPML/Markdown)</li>
              <li>Click <strong>Import</strong> to create your mind map</li>
            </ol>
          </div>
        </div>
      )}

      <div className="integration-benefits">
        <h3>Benefits of XMind Integration:</h3>
        <ul>
          <li>📊 <strong>Visual Organization:</strong> Transform your content into interactive mind maps</li>
          <li>🔍 <strong>Better Navigation:</strong> Easily explore complex plant databases and care guides</li>
          <li>📱 <strong>Mobile Access:</strong> View and edit mind maps on XMind mobile apps</li>
          <li>🤝 <strong>Collaboration:</strong> Share mind maps with team members and clients</li>
          <li>📈 <strong>Presentation:</strong> Use mind maps for client presentations and training</li>
          <li>🔄 <strong>Sync:</strong> Keep content synchronized across devices</li>
        </ul>
      </div>

      <style jsx>{`
        .xmind-integration {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .integration-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .integration-header h2 {
          color: #2c5530;
          margin-bottom: 10px;
        }

        .export-controls {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .control-group {
          margin-bottom: 20px;
        }

        .control-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 5px;
          color: #2c5530;
        }

        .control-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        .description {
          font-size: 14px;
          color: #666;
          margin-top: 5px;
        }

        .export-button {
          background: #2c5530;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .export-button:hover:not(:disabled) {
          background: #1e3a21;
        }

        .export-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .error-message {
          background: #f8d7da;
          color: #721c24;
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 20px;
        }

        .export-result {
          background: #d4edda;
          color: #155724;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .result-actions {
          display: flex;
          gap: 10px;
        }

        .download-button, .copy-button {
          background: #28a745;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .download-button:hover, .copy-button:hover {
          background: #218838;
        }

        .result-preview {
          margin-bottom: 20px;
        }

        .preview-content {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 4px;
          overflow-x: auto;
          max-height: 300px;
          font-size: 12px;
          border: 1px solid #dee2e6;
        }

        .import-instructions {
          background: white;
          padding: 15px;
          border-radius: 6px;
          border-left: 4px solid #2c5530;
        }

        .import-instructions ol {
          margin: 10px 0;
          padding-left: 20px;
        }

        .import-instructions li {
          margin-bottom: 5px;
        }

        .integration-benefits {
          background: #e7f3ff;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #007bff;
        }

        .integration-benefits h3 {
          color: #0056b3;
          margin-bottom: 15px;
        }

        .integration-benefits ul {
          list-style: none;
          padding: 0;
        }

        .integration-benefits li {
          margin-bottom: 10px;
          padding-left: 0;
        }

        @media (max-width: 768px) {
          .result-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .result-actions {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default XMindIntegration;
