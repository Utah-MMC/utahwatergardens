#!/usr/bin/env node

/**
 * Utah Water Gardens Mobile App Setup Script
 * This script helps configure the mobile app and check dependencies
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Utah Water Gardens Mobile App Setup\n');

// Check Node.js version
function checkNodeVersion() {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  console.log(`📦 Node.js Version: ${nodeVersion}`);
  
  if (majorVersion < 16) {
    console.error('❌ Error: Node.js version 16 or higher is required');
    process.exit(1);
  }
  
  console.log('✅ Node.js version is compatible\n');
}

// Check if React Native CLI is installed
function checkReactNativeCLI() {
  try {
    execSync('react-native --version', { stdio: 'pipe' });
    console.log('✅ React Native CLI is installed');
  } catch (error) {
    console.log('⚠️  React Native CLI not found. Installing...');
    try {
      execSync('npm install -g react-native-cli', { stdio: 'inherit' });
      console.log('✅ React Native CLI installed successfully');
    } catch (installError) {
      console.error('❌ Failed to install React Native CLI');
      console.log('Please install manually: npm install -g react-native-cli');
    }
  }
  console.log('');
}

// Check package.json dependencies
function checkDependencies() {
  const packagePath = path.join(__dirname, 'package.json');
  
  if (!fs.existsSync(packagePath)) {
    console.error('❌ package.json not found');
    process.exit(1);
  }
  
  console.log('📋 Checking dependencies...');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const requiredDeps = [
      'react-native-camera',
      'react-native-webview',
      '@supabase/supabase-js',
      'react-native-geolocation-service'
    ];
    
    const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
    
    if (missingDeps.length > 0) {
      console.log(`⚠️  Missing dependencies: ${missingDeps.join(', ')}`);
      console.log('Installing dependencies...');
      execSync('npm install', { stdio: 'inherit' });
    } else {
      console.log('✅ All required dependencies are present');
    }
  } catch (error) {
    console.error('❌ Error checking dependencies:', error.message);
  }
  console.log('');
}

// Check Supabase configuration
function checkSupabaseConfig() {
  const supabasePath = path.join(__dirname, 'lib', 'supabase.js');
  
  if (!fs.existsSync(supabasePath)) {
    console.error('❌ Supabase configuration not found');
    console.log('Creating lib/supabase.js...');
    
    const libDir = path.join(__dirname, 'lib');
    if (!fs.existsSync(libDir)) {
      fs.mkdirSync(libDir, { recursive: true });
    }
    
    const supabaseTemplate = `import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});

export default supabase;
`;
    
    fs.writeFileSync(supabasePath, supabaseTemplate);
    console.log('✅ Created Supabase configuration template');
    console.log('⚠️  Please update lib/supabase.js with your actual Supabase credentials');
  } else {
    console.log('✅ Supabase configuration found');
    
    const supabaseContent = fs.readFileSync(supabasePath, 'utf8');
    if (supabaseContent.includes('YOUR_SUPABASE_URL')) {
      console.log('⚠️  Please update lib/supabase.js with your actual Supabase credentials');
    } else {
      console.log('✅ Supabase credentials appear to be configured');
    }
  }
  console.log('');
}

// Check Android setup
function checkAndroidSetup() {
  console.log('🤖 Checking Android setup...');
  
  try {
    // Check if ANDROID_HOME is set
    const androidHome = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT;
    if (!androidHome) {
      console.log('⚠️  ANDROID_HOME environment variable not set');
      console.log('Please set ANDROID_HOME to your Android SDK location');
    } else {
      console.log(`✅ ANDROID_HOME: ${androidHome}`);
    }
    
    // Check if adb is available
    try {
      execSync('adb version', { stdio: 'pipe' });
      console.log('✅ ADB (Android Debug Bridge) is available');
    } catch (error) {
      console.log('⚠️  ADB not found. Make sure Android SDK is properly installed');
    }
    
  } catch (error) {
    console.log('⚠️  Android setup check failed');
  }
  console.log('');
}

// Check iOS setup (macOS only)
function checkIOSSetup() {
  if (process.platform === 'darwin') {
    console.log('🍎 Checking iOS setup...');
    
    try {
      // Check if Xcode is installed
      execSync('xcode-select --version', { stdio: 'pipe' });
      console.log('✅ Xcode command line tools are available');
      
      // Check if CocoaPods is installed
      try {
        execSync('pod --version', { stdio: 'pipe' });
        console.log('✅ CocoaPods is available');
      } catch (error) {
        console.log('⚠️  CocoaPods not found. Install with: sudo gem install cocoapods');
      }
      
    } catch (error) {
      console.log('⚠️  Xcode command line tools not found');
      console.log('Install with: xcode-select --install');
    }
  } else {
    console.log('🍎 iOS setup check skipped (not on macOS)');
  }
  console.log('');
}

// Generate sample QR codes
function generateSampleQRs() {
  console.log('📱 Generating sample QR codes...');
  
  const sampleEquipment = [
    { id: 'PUMP-001', name: 'Main Water Pump', category: 'Pumps' },
    { id: 'FILTER-001', name: 'Primary Filter System', category: 'Filtration' },
    { id: 'VALVE-001', name: 'Control Valve Assembly', category: 'Valves' }
  ];
  
  const qrDir = path.join(__dirname, 'sample-qr-codes');
  if (!fs.existsSync(qrDir)) {
    fs.mkdirSync(qrDir, { recursive: true });
  }
  
  sampleEquipment.forEach(equipment => {
    const qrData = {
      equipmentId: equipment.id,
      name: equipment.name,
      category: equipment.category,
      gps: {
        lat: 40.7608 + (Math.random() - 0.5) * 0.01, // Salt Lake City area
        lng: -111.8910 + (Math.random() - 0.5) * 0.01,
        accuracy: 5.0,
        timestamp: new Date().toISOString()
      },
      generatedAt: new Date().toISOString(),
      type: 'equipment'
    };
    
    const qrFilePath = path.join(qrDir, `${equipment.id}.json`);
    fs.writeFileSync(qrFilePath, JSON.stringify(qrData, null, 2));
  });
  
  console.log(`✅ Generated ${sampleEquipment.length} sample QR code data files in sample-qr-codes/`);
  console.log('You can use these to test the app with QR code generators');
  console.log('');
}

// Display next steps
function displayNextSteps() {
  console.log('🎯 Next Steps:');
  console.log('');
  console.log('1. 📝 Update Supabase Configuration:');
  console.log('   - Edit lib/supabase.js with your Supabase URL and key');
  console.log('   - Ensure your database has the required tables');
  console.log('');
  console.log('2. 🚀 Run the App:');
  console.log('   - Start Metro: npm start');
  console.log('   - Android: npm run android');
  console.log('   - iOS: npm run ios (macOS only)');
  console.log('');
  console.log('3. 📱 Test the App:');
  console.log('   - Use the sample QR codes in sample-qr-codes/');
  console.log('   - Test GPS functionality');
  console.log('   - Verify database updates');
  console.log('');
  console.log('4. 🔧 Troubleshooting:');
  console.log('   - Check README.md for detailed instructions');
  console.log('   - Ensure all permissions are granted');
  console.log('   - Verify Supabase connection');
  console.log('');
  console.log('📚 Documentation: README.md');
  console.log('🐛 Issues: Create an issue on GitHub');
  console.log('');
  console.log('✨ Setup complete! Happy coding! 🎉');
}

// Main setup function
function main() {
  try {
    checkNodeVersion();
    checkReactNativeCLI();
    checkDependencies();
    checkSupabaseConfig();
    checkAndroidSetup();
    checkIOSSetup();
    generateSampleQRs();
    displayNextSteps();
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run setup if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = {
  checkNodeVersion,
  checkReactNativeCLI,
  checkDependencies,
  checkSupabaseConfig,
  checkAndroidSetup,
  checkIOSSetup,
  generateSampleQRs,
  displayNextSteps
}; 