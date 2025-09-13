const fs = require('fs');
const path = require('path');

// Read and parse the CSV file
function processInternalLinks() {
    const csvPath = 'c:\\Users\\jerem\\Downloads\\utahwatergardens_12-sep-2025_link-opportuniti_2025-09-12_23-30-32.csv';
    
    try {
        let csvContent = fs.readFileSync(csvPath, 'utf8');
        
        // Remove BOM if present
        if (csvContent.charCodeAt(0) === 0xFEFF) {
            csvContent = csvContent.slice(1);
        }
        
        const lines = csvContent.split('\n');
        
        // Skip header row
        const dataLines = lines.slice(1).filter(line => line.trim());
        
        const opportunities = [];
        const sourcePages = new Map();
        const targetPages = new Map();
        
        dataLines.forEach((line, index) => {
            // Parse CSV line (tab-separated with quoted fields)
            const columns = [];
            let current = '';
            let inQuotes = false;
            
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === '\t' && !inQuotes) {
                    columns.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            columns.push(current.trim());
            
            if (columns.length >= 12) {
                const prStr = columns[0].replace(/"/g, '').trim().replace(/\0/g, '');
                const pr = parseInt(prStr);
                const sourcePage = columns[1].replace(/"/g, '').trim();
                const keyword = columns[6].replace(/"/g, '').trim();
                const targetPage = columns[10].replace(/"/g, '').trim();
                
                
                if (pr && sourcePage && keyword && targetPage) {
                    opportunities.push({
                        pr,
                        sourcePage,
                        keyword,
                        targetPage,
                        lineNumber: index + 2
                    });
                    
                    // Track source pages
                    if (!sourcePages.has(sourcePage)) {
                        sourcePages.set(sourcePage, []);
                    }
                    sourcePages.get(sourcePage).push({
                        keyword,
                        targetPage,
                        pr
                    });
                    
                    // Track target pages
                    if (!targetPages.has(targetPage)) {
                        targetPages.set(targetPage, []);
                    }
                    targetPages.get(targetPage).push({
                        keyword,
                        sourcePage,
                        pr
                    });
                }
            }
        });
        
        console.log(`\n=== INTERNAL LINKING OPPORTUNITIES ANALYSIS ===`);
        console.log(`Total opportunities: ${opportunities.length}`);
        console.log(`Unique source pages: ${sourcePages.size}`);
        console.log(`Unique target pages: ${targetPages.size}`);
        
        // Analyze by PR score
        const prGroups = {};
        opportunities.forEach(opp => {
            if (!prGroups[opp.pr]) {
                prGroups[opp.pr] = [];
            }
            prGroups[opp.pr].push(opp);
        });
        
        console.log(`\n=== OPPORTUNITIES BY PR SCORE ===`);
        Object.keys(prGroups).sort((a, b) => parseInt(b) - parseInt(a)).forEach(pr => {
            console.log(`PR ${pr}: ${prGroups[pr].length} opportunities`);
        });
        
        // Most common target pages
        console.log(`\n=== TOP TARGET PAGES ===`);
        const targetCounts = Array.from(targetPages.entries())
            .map(([page, links]) => ({ page, count: links.length }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);
        
        targetCounts.forEach(({ page, count }) => {
            console.log(`${page}: ${count} incoming links`);
        });
        
        // Most common source pages
        console.log(`\n=== TOP SOURCE PAGES ===`);
        const sourceCounts = Array.from(sourcePages.entries())
            .map(([page, links]) => ({ page, count: links.length }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);
        
        sourceCounts.forEach(({ page, count }) => {
            console.log(`${page}: ${count} outgoing links`);
        });
        
        // Generate recommendations
        console.log(`\n=== HIGH PRIORITY RECOMMENDATIONS (PR 20+) ===`);
        const highPriority = opportunities.filter(opp => opp.pr >= 20);
        
        // Group by source page for easier implementation
        const recommendations = new Map();
        highPriority.forEach(opp => {
            if (!recommendations.has(opp.sourcePage)) {
                recommendations.set(opp.sourcePage, []);
            }
            recommendations.get(opp.sourcePage).push({
                keyword: opp.keyword,
                targetPage: opp.targetPage,
                pr: opp.pr
            });
        });
        
        // Write recommendations to file
        const recommendationsFile = 'internal-linking-recommendations.json';
        const recommendationsData = {
            summary: {
                totalOpportunities: opportunities.length,
                highPriorityCount: highPriority.length,
                uniqueSourcePages: sourcePages.size,
                uniqueTargetPages: targetPages.size
            },
            recommendations: Object.fromEntries(recommendations)
        };
        
        fs.writeFileSync(recommendationsFile, JSON.stringify(recommendationsData, null, 2));
        console.log(`\nRecommendations written to: ${recommendationsFile}`);
        
        // Show first 10 recommendations
        console.log(`\n=== SAMPLE RECOMMENDATIONS ===`);
        let count = 0;
        for (const [sourcePage, links] of recommendations) {
            if (count >= 10) break;
            console.log(`\n${sourcePage}:`);
            links.forEach(link => {
                console.log(`  - Link "${link.keyword}" to ${link.targetPage} (PR: ${link.pr})`);
            });
            count++;
        }
        
        return recommendationsData;
        
    } catch (error) {
        console.error('Error processing CSV:', error);
        return null;
    }
}

// Run the analysis
if (require.main === module) {
    processInternalLinks();
}

module.exports = { processInternalLinks };
