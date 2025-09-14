/**
 * Performance Monitoring Script
 * Monitors and reports performance metrics during development and production
 */

const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      build: {},
      runtime: {},
      bundle: {},
      recommendations: []
    };
    
    this.startTime = Date.now();
  }

  // Monitor build performance
  monitorBuild() {
    const buildStartTime = Date.now();
    
    console.log('🔍 Monitoring build performance...');
    
    // Monitor bundle size
    this.monitorBundleSize();
    
    // Monitor build time
    const buildEndTime = Date.now();
    this.metrics.build = {
      duration: buildEndTime - buildStartTime,
      timestamp: Date.now()
    };
    
    console.log(`✅ Build completed in ${this.metrics.build.duration}ms`);
  }

  // Monitor bundle size
  monitorBundleSize() {
    const buildPath = path.join(__dirname, '../build');
    
    if (!fs.existsSync(buildPath)) {
      console.warn('⚠️ Build directory not found');
      return;
    }

    const bundleStats = this.analyzeBundleSize(buildPath);
    this.metrics.bundle = bundleStats;
    
    // Generate recommendations
    this.generateBundleRecommendations(bundleStats);
    
    console.log(`📦 Bundle Analysis:`);
    console.log(`   Total Size: ${(bundleStats.totalSize / 1024).toFixed(1)}KB`);
    console.log(`   JS Chunks: ${bundleStats.jsChunks}`);
    console.log(`   CSS Chunks: ${bundleStats.cssChunks}`);
    console.log(`   Images: ${bundleStats.images}`);
  }

  // Analyze bundle size
  analyzeBundleSize(buildPath) {
    const stats = {
      totalSize: 0,
      jsChunks: 0,
      cssChunks: 0,
      images: 0,
      largestFiles: []
    };

    const analyzeDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          analyzeDirectory(itemPath);
        } else {
          const size = stat.size;
          stats.totalSize += size;
          
          const ext = path.extname(item).toLowerCase();
          
          if (ext === '.js') {
            stats.jsChunks++;
          } else if (ext === '.css') {
            stats.cssChunks++;
          } else if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
            stats.images++;
          }
          
          // Track largest files
          stats.largestFiles.push({
            path: itemPath.replace(buildPath, ''),
            size: size,
            type: ext
          });
        }
      });
    };

    analyzeDirectory(buildPath);
    
    // Sort largest files
    stats.largestFiles.sort((a, b) => b.size - a.size);
    stats.largestFiles = stats.largestFiles.slice(0, 10);
    
    return stats;
  }

  // Generate bundle recommendations
  generateBundleRecommendations(stats) {
    const recommendations = [];

    // Bundle size recommendations
    if (stats.totalSize > 2 * 1024 * 1024) { // 2MB
      recommendations.push({
        type: 'bundle_size',
        priority: 'high',
        message: 'Bundle size is very large',
        suggestion: 'Consider code splitting and tree shaking',
        impact: 'Improve initial load time'
      });
    } else if (stats.totalSize > 1 * 1024 * 1024) { // 1MB
      recommendations.push({
        type: 'bundle_size',
        priority: 'medium',
        message: 'Bundle size could be optimized',
        suggestion: 'Enable compression and remove unused code',
        impact: 'Reduce load time'
      });
    }

    // JS chunk recommendations
    if (stats.jsChunks > 20) {
      recommendations.push({
        type: 'js_chunks',
        priority: 'medium',
        message: 'Too many JS chunks',
        suggestion: 'Consolidate smaller chunks',
        impact: 'Reduce HTTP requests'
      });
    }

    // Image optimization recommendations
    if (stats.images > 50) {
      recommendations.push({
        type: 'images',
        priority: 'medium',
        message: 'Many images detected',
        suggestion: 'Implement lazy loading and WebP format',
        impact: 'Improve page load performance'
      });
    }

    // Largest file recommendations
    const largeFiles = stats.largestFiles.filter(file => file.size > 100 * 1024); // 100KB
    if (largeFiles.length > 0) {
      recommendations.push({
        type: 'large_files',
        priority: 'high',
        message: `${largeFiles.length} large files detected`,
        suggestion: 'Optimize or split large files',
        impact: 'Reduce initial load time',
        files: largeFiles.slice(0, 5).map(f => f.path)
      });
    }

    this.metrics.recommendations = recommendations;
  }

  // Monitor runtime performance
  monitorRuntime() {
    console.log('⚡ Monitoring runtime performance...');
    
    // This would typically connect to a running application
    // For now, we'll simulate runtime metrics
    this.metrics.runtime = {
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      timestamp: Date.now()
    };
  }

  // Generate performance report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      summary: this.generateSummary()
    };

    // Save report to file
    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Performance report generated:', reportPath);
    
    // Display summary
    this.displaySummary(report.summary);
    
    return report;
  }

  // Generate performance summary
  generateSummary() {
    const summary = {
      score: 100,
      issues: [],
      optimizations: []
    };

    // Deduct points for issues
    if (this.metrics.bundle.totalSize > 2 * 1024 * 1024) {
      summary.score -= 30;
      summary.issues.push('Large bundle size');
    }

    if (this.metrics.recommendations.length > 5) {
      summary.score -= 20;
      summary.issues.push('Multiple optimization opportunities');
    }

    if (this.metrics.bundle.jsChunks > 20) {
      summary.score -= 10;
      summary.issues.push('Too many JS chunks');
    }

    // Add optimizations
    this.metrics.recommendations.forEach(rec => {
      if (rec.priority === 'high') {
        summary.optimizations.push(rec.suggestion);
      }
    });

    return summary;
  }

  // Display performance summary
  displaySummary(summary) {
    console.log('\n📈 Performance Summary:');
    console.log(`   Score: ${summary.score}/100`);
    
    if (summary.issues.length > 0) {
      console.log('\n⚠️ Issues:');
      summary.issues.forEach(issue => {
        console.log(`   • ${issue}`);
      });
    }

    if (summary.optimizations.length > 0) {
      console.log('\n🚀 Recommended Optimizations:');
      summary.optimizations.forEach(opt => {
        console.log(`   • ${opt}`);
      });
    }

    console.log('\n💡 Run "npm run performance:test" for detailed analysis');
  }

  // Run complete monitoring
  async run() {
    console.log('🚀 Starting Performance Monitoring...\n');
    
    this.monitorBuild();
    this.monitorRuntime();
    
    const report = this.generateReport();
    
    console.log('\n✅ Performance monitoring complete!');
    
    return report;
  }
}

// Run monitoring if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;
