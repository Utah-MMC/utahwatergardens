// XMind Export Service for Utah Water Gardens
// Converts app content to XMind-compatible formats

class XMindExportService {
  constructor() {
    this.supportedFormats = ['opml', 'markdown', 'json', 'text'];
  }

  // Export plant database as mind map
  exportPlantDatabase(plantData) {
    const mindMapStructure = {
      title: "Utah Water Gardens - Plant Database",
      children: []
    };

    // Group plants by categories
    const categories = {
      'Water Lilies': [],
      'Marginal Plants': [],
      'Submerged Plants': [],
      'Floating Plants': [],
      'Bog Plants': []
    };

    Object.entries(plantData).forEach(([slug, plant]) => {
      const category = this.categorizePlant(plant);
      if (categories[category]) {
        categories[category].push({
          title: plant.name,
          children: [
            { title: `Care Level: ${plant.careLevel}` },
            { title: `Sunlight: ${plant.sunlight}` },
            { title: `Planting Depth: ${plant.plantingDepth}` },
            { title: `Bloom Time: ${plant.bloomTime}` },
            { title: `Hardiness: ${plant.hardiness}` },
            { 
              title: "Care Instructions",
              children: [
                { title: `Planting: ${plant.careInstructions.planting.text}` },
                { title: `Sunlight: ${plant.careInstructions.sunlight.text}` },
                { title: `Fertilization: ${plant.careInstructions.fertilization.text}` },
                { title: `Winter Care: ${plant.careInstructions.winterCare.text}` }
              ]
            }
          ]
        });
      }
    });

    // Convert to mind map structure
    Object.entries(categories).forEach(([categoryName, plants]) => {
      if (plants.length > 0) {
        mindMapStructure.children.push({
          title: categoryName,
          children: plants
        });
      }
    });

    return mindMapStructure;
  }

  // Export service areas as mind map
  exportServiceAreas(serviceAreas) {
    const mindMapStructure = {
      title: "Utah Water Gardens - Service Areas",
      children: []
    };

    // Group by county first
    const counties = {};
    serviceAreas.forEach(area => {
      if (!counties[area.county]) {
        counties[area.county] = [];
      }
      counties[area.county].push(area);
    });

    // Create county-based structure
    Object.entries(counties).forEach(([countyName, areas]) => {
      const countyNode = {
        title: countyName,
        children: []
      };

      areas.forEach(area => {
        const cityNode = {
          title: area.cityName,
          children: [
            { title: `Phone: ${area.phoneNumber}` },
            { title: `County: ${area.county}` },
            { title: `Coordinates: ${area.latitude}, ${area.longitude}` },
            {
              title: "Services Offered",
              children: area.services.map(service => ({
                title: service
              }))
            },
            {
              title: "Local Landmarks",
              children: area.landmarks.map(landmark => ({
                title: landmark
              }))
            },
            {
              title: "Business Districts",
              children: area.businessDistricts.map(district => ({
                title: district
              }))
            },
            {
              title: "Permit Information",
              children: [
                { title: `Required: ${area.permitInfo.required ? 'Yes' : 'No'}` },
                { title: `Details: ${area.permitInfo.description}` }
              ]
            }
          ]
        };
        countyNode.children.push(cityNode);
      });

      mindMapStructure.children.push(countyNode);
    });

    return mindMapStructure;
  }

  // Export care guides as mind map
  exportCareGuides(careGuides) {
    const mindMapStructure = {
      title: "Utah Water Gardens - Care Guides",
      children: []
    };

    // Group guides by category
    const categories = {};
    careGuides.forEach(guide => {
      if (!categories[guide.category]) {
        categories[guide.category] = [];
      }
      categories[guide.category].push(guide);
    });

    // Create category-based structure
    Object.entries(categories).forEach(([categoryName, guides]) => {
      const categoryNode = {
        title: categoryName,
        children: []
      };

      guides.forEach(guide => {
        const guideNode = {
          title: guide.name,
          children: [
            { title: `Difficulty: ${guide.difficulty}` },
            { title: `Duration: ${guide.duration}` },
            { title: `Description: ${guide.description}` },
            {
              title: "Topics Covered",
              children: guide.topics.map(topic => ({ title: topic }))
            },
            {
              title: "Equipment Needed",
              children: guide.equipment ? guide.equipment.map(item => ({ title: item })) : []
            },
            {
              title: "Step-by-Step Process",
              children: guide.steps ? guide.steps.map(step => ({
                title: `${step.step}. ${step.title}`,
                children: [
                  { title: step.description },
                  { title: `Duration: ${step.duration}` },
                  {
                    title: "Details",
                    children: step.details.map(detail => ({ title: detail }))
                  }
                ]
              })) : []
            },
            {
              title: "Tips & Best Practices",
              children: guide.tips ? guide.tips.map(tip => ({ title: tip })) : []
            },
            {
              title: "Common Mistakes to Avoid",
              children: guide.commonMistakes ? guide.commonMistakes.map(mistake => ({ title: mistake })) : []
            }
          ]
        };
        categoryNode.children.push(guideNode);
      });

      mindMapStructure.children.push(categoryNode);
    });

    return mindMapStructure;
  }

  // Export services as mind map
  exportServices(servicesData) {
    const mindMapStructure = {
      title: "Utah Water Gardens - Services",
      children: []
    };

    // Create structure for each service category
    Object.entries(servicesData).forEach(([categoryKey, categoryData]) => {
      const categoryNode = {
        title: categoryData.category,
        children: [
          { title: `Description: ${categoryData.description}` }
        ]
      };

      // Add services within each category
      if (categoryData.services) {
        categoryData.services.forEach(service => {
          const serviceNode = {
            title: service.name,
            children: [
              { title: `Description: ${service.description}` },
              { title: `Icon: ${service.icon}` },
              {
                title: "Features",
                children: service.features.map(feature => ({ title: feature }))
              }
            ]
          };

          // Add process steps if available
          if (service.process) {
            serviceNode.children.push({
              title: "Process Steps",
              children: service.process.map(step => ({
                title: `Step ${step.step}: ${step.title}`,
                children: [
                  { title: step.description },
                  { title: `Duration: ${step.duration}` }
                ]
              }))
            });
          }

          // Add pricing if available
          if (service.pricing) {
            const pricingNode = {
              title: "Pricing",
              children: []
            };
            
            Object.entries(service.pricing).forEach(([tier, price]) => {
              if (tier !== 'note') {
                pricingNode.children.push({ title: `${tier}: ${price}` });
              }
            });
            
            if (service.pricing.note) {
              pricingNode.children.push({ title: `Note: ${service.pricing.note}` });
            }
            
            serviceNode.children.push(pricingNode);
          }

          // Add timeline if available
          if (service.timeline) {
            serviceNode.children.push({ title: `Timeline: ${service.timeline}` });
          }

          // Add warranty if available
          if (service.warranty) {
            serviceNode.children.push({ title: `Warranty: ${service.warranty}` });
          }

          // Add products if available
          if (service.products) {
            serviceNode.children.push({
              title: "Products",
              children: service.products.map(product => ({ title: product }))
            });
          }

          categoryNode.children.push(serviceNode);
        });
      }

      mindMapStructure.children.push(categoryNode);
    });

    return mindMapStructure;
  }

  // Export video tutorials as mind map
  exportVideoTutorials(videoCategories) {
    const mindMapStructure = {
      title: "Utah Water Gardens - Video Tutorials",
      children: []
    };

    videoCategories.forEach(category => {
      mindMapStructure.children.push({
        title: category.name,
        children: [
          { title: `Description: ${category.description}` },
          {
            title: "Videos",
            children: category.videos.map(video => ({
              title: video.title,
              children: [
                { title: `Duration: ${video.duration}` },
                { title: `Difficulty: ${video.difficulty}` },
                { title: `Description: ${video.description}` },
                {
                  title: "Topics",
                  children: video.topics.map(topic => ({ title: topic }))
                },
                {
                  title: "Equipment",
                  children: video.equipment.map(item => ({ title: item }))
                },
                {
                  title: "Tags",
                  children: video.tags.map(tag => ({ title: tag }))
                }
              ]
            }))
          }
        ]
      });
    });

    return mindMapStructure;
  }

  // Convert mind map structure to OPML format (XMind compatible)
  convertToOPML(mindMapStructure) {
    let opml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    opml += '<opml version="1.0">\n';
    opml += '  <head>\n';
    opml += `    <title>${mindMapStructure.title}</title>\n`;
    opml += '    <dateCreated>' + new Date().toISOString() + '</dateCreated>\n';
    opml += '  </head>\n';
    opml += '  <body>\n';
    
    opml += this.generateOPMLOutline(mindMapStructure, 2);
    
    opml += '  </body>\n';
    opml += '</opml>';
    
    return opml;
  }

  // Generate OPML outline recursively
  generateOPMLOutline(node, indentLevel) {
    const indent = '  '.repeat(indentLevel);
    let outline = `${indent}<outline text="${this.escapeXML(node.title)}"`;
    
    if (node.children && node.children.length > 0) {
      outline += '>\n';
      node.children.forEach(child => {
        outline += this.generateOPMLOutline(child, indentLevel + 1);
      });
      outline += `${indent}</outline>\n`;
    } else {
      outline += '/>\n';
    }
    
    return outline;
  }

  // Convert mind map structure to Markdown format
  convertToMarkdown(mindMapStructure) {
    let markdown = `# ${mindMapStructure.title}\n\n`;
    markdown += this.generateMarkdownOutline(mindMapStructure, 1);
    return markdown;
  }

  // Generate Markdown outline recursively
  generateMarkdownOutline(node, level) {
    let markdown = '';
    const prefix = '#'.repeat(level);
    markdown += `${prefix} ${node.title}\n\n`;
    
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        markdown += this.generateMarkdownOutline(child, level + 1);
      });
    }
    
    return markdown;
  }

  // Convert to JSON format for XMind API
  convertToXMindJSON(mindMapStructure) {
    return {
      "version": "1.0",
      "title": mindMapStructure.title,
      "created": new Date().toISOString(),
      "modified": new Date().toISOString(),
      "rootTopic": this.convertNodeToXMindTopic(mindMapStructure)
    };
  }

  // Convert node to XMind topic format
  convertNodeToXMindTopic(node) {
    const topic = {
      "id": this.generateId(),
      "title": node.title,
      "children": {
        "attached": []
      }
    };

    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        topic.children.attached.push(this.convertNodeToXMindTopic(child));
      });
    }

    return topic;
  }

  // Helper methods
  categorizePlant(plant) {
    // Simple categorization logic - can be enhanced
    if (plant.name.toLowerCase().includes('lily')) return 'Water Lilies';
    if (plant.name.toLowerCase().includes('marginal')) return 'Marginal Plants';
    if (plant.name.toLowerCase().includes('submerged')) return 'Submerged Plants';
    if (plant.name.toLowerCase().includes('floating')) return 'Floating Plants';
    return 'Bog Plants';
  }

  escapeXML(text) {
    return text.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&#39;');
  }

  generateId() {
    return 'topic_' + Math.random().toString(36).substr(2, 9);
  }

  // Main export method
  async exportToXMind(contentType, format = 'opml') {
    let mindMapStructure;
    
    switch (contentType) {
      case 'plants':
        const { plantData } = await import('../data/plantData.js');
        mindMapStructure = this.exportPlantDatabase(plantData);
        break;
      case 'services':
        const { serviceAreasData } = await import('../data/serviceAreasData.js');
        mindMapStructure = this.exportServiceAreas(serviceAreasData);
        break;
      case 'services-breakdown':
        const { servicesData } = await import('../data/servicesData.js');
        mindMapStructure = this.exportServices(servicesData);
        break;
      case 'care-guides':
        const { careGuidesData } = await import('../data/careGuidesData.js');
        mindMapStructure = this.exportCareGuides(careGuidesData);
        break;
      case 'video-tutorials':
        // This would need to be implemented based on your video data
        mindMapStructure = this.exportVideoTutorials([]);
        break;
      default:
        throw new Error(`Unsupported content type: ${contentType}`);
    }

    switch (format) {
      case 'opml':
        return this.convertToOPML(mindMapStructure);
      case 'markdown':
        return this.convertToMarkdown(mindMapStructure);
      case 'json':
        return JSON.stringify(this.convertToXMindJSON(mindMapStructure), null, 2);
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }
}

const xmindExportService = new XMindExportService();
export default xmindExportService;
