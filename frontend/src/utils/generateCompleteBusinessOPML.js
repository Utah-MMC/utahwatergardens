// Generate Complete Business OPML for Utah Water Gardens
import { completeBusinessMindMap } from '../data/completeBusinessMindMap.js';

export function generateCompleteBusinessOPML() {
  const mindMapStructure = completeBusinessMindMap;
  
  let opml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  opml += '<opml version="1.0">\n';
  opml += '  <head>\n';
  opml += `    <title>${mindMapStructure.title}</title>\n`;
  opml += '    <dateCreated>' + new Date().toISOString() + '</dateCreated>\n';
  opml += '    <ownerName>Utah Water Gardens</ownerName>\n';
  opml += '    <ownerEmail>contact@utahwatergardens.com</ownerEmail>\n';
  opml += '  </head>\n';
  opml += '  <body>\n';
  
  opml += generateOPMLOutline(mindMapStructure, 2);
  
  opml += '  </body>\n';
  opml += '</opml>';
  
  return opml;
}

// Generate OPML outline recursively
function generateOPMLOutline(node, indentLevel) {
  const indent = '  '.repeat(indentLevel);
  let outline = `${indent}<outline text="${escapeXML(node.title)}"`;
  
  if (node.children && node.children.length > 0) {
    outline += '>\n';
    node.children.forEach(child => {
      outline += generateOPMLOutline(child, indentLevel + 1);
    });
    outline += `${indent}</outline>\n`;
  } else {
    outline += '/>\n';
  }
  
  return outline;
}

// Escape XML special characters
function escapeXML(text) {
  return text.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#39;');
}

// Download the OPML file
export function downloadCompleteBusinessOPML() {
  const opmlContent = generateCompleteBusinessOPML();
  
  const blob = new Blob([opmlContent], { type: 'text/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'utah-water-gardens-complete-business-mindmap.opml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Copy OPML to clipboard
export function copyCompleteBusinessOPMLToClipboard() {
  const opmlContent = generateCompleteBusinessOPML();
  navigator.clipboard.writeText(opmlContent).then(() => {
    alert('Complete business mind map OPML copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy to clipboard:', err);
    alert('Failed to copy to clipboard. Please try downloading the file instead.');
  });
}
