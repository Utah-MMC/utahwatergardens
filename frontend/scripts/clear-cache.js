/**
 * Cache Clearing Script
 * Clears various caches for development and testing
 */

const fs = require('fs');
const path = require('path');

class CacheManager {
  constructor() {
    this.cachePaths = [
      path.join(__dirname, '../build'),
      path.join(__dirname, '../node_modules/.cache'),
      path.join(__dirname, '../.cache'),
      path.join(__dirname, '../coverage'),
      path.join(__dirname, '../dist')
    ];
  }

  // Clear build cache
  clearBuildCache() {
    const buildPath = path.join(__dirname, '../build');
    
    if (fs.existsSync(buildPath)) {
      console.log('🧹 Clearing build cache...');
      this.removeDirectory(buildPath);
      console.log('✅ Build cache cleared');
    } else {
      console.log('ℹ️ No build cache to clear');
    }
  }

  // Clear node modules cache
  clearNodeModulesCache() {
    const cachePath = path.join(__dirname, '../node_modules/.cache');
    
    if (fs.existsSync(cachePath)) {
      console.log('🧹 Clearing node_modules cache...');
      this.removeDirectory(cachePath);
      console.log('✅ Node modules cache cleared');
    } else {
      console.log('ℹ️ No node_modules cache to clear');
    }
  }

  // Clear all caches
  clearAllCaches() {
    console.log('🧹 Clearing all caches...\n');
    
    this.cachePaths.forEach(cachePath => {
      if (fs.existsSync(cachePath)) {
        console.log(`   Clearing: ${path.relative(process.cwd(), cachePath)}`);
        this.removeDirectory(cachePath);
      }
    });
    
    console.log('\n✅ All caches cleared');
  }

  // Remove directory recursively
  removeDirectory(dirPath) {
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        
        if (fs.statSync(filePath).isDirectory()) {
          this.removeDirectory(filePath);
        } else {
          fs.unlinkSync(filePath);
        }
      });
      
      fs.rmdirSync(dirPath);
    }
  }

  // Clear browser cache (instructions)
  showBrowserCacheInstructions() {
    console.log('\n🌐 To clear browser cache:');
    console.log('   Chrome/Edge: Ctrl+Shift+Delete');
    console.log('   Firefox: Ctrl+Shift+Delete');
    console.log('   Safari: Cmd+Option+E');
    console.log('\n   Or open DevTools > Application > Storage > Clear storage');
  }

  // Run cache clearing
  async run() {
    console.log('🚀 Cache Manager\n');
    
    const args = process.argv.slice(2);
    
    if (args.includes('--all') || args.length === 0) {
      this.clearAllCaches();
    } else {
      if (args.includes('--build')) {
        this.clearBuildCache();
      }
      
      if (args.includes('--node-modules')) {
        this.clearNodeModulesCache();
      }
    }
    
    this.showBrowserCacheInstructions();
    
    console.log('\n💡 Run "npm start" to rebuild the project');
  }
}

// Run cache manager if called directly
if (require.main === module) {
  const cacheManager = new CacheManager();
  cacheManager.run().catch(console.error);
}

module.exports = CacheManager;
