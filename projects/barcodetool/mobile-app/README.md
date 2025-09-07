# Utah Water Gardens Mobile App

A React Native mobile application for QR code scanning and equipment tracking with GPS functionality.

## 🚀 Features

### 📱 QR Code Scanning
- **Real-time QR Code Detection**: Scan equipment QR codes instantly
- **GPS Integration**: Automatically capture location data when scanning
- **Equipment Tracking**: Update equipment locations in real-time
- **Visual Feedback**: Clear scanning interface with frame overlay

### 🗺️ Interactive Map
- **Equipment Location Display**: View all equipment on an interactive map
- **Real-time Updates**: See equipment locations as they're scanned
- **Detailed Popups**: Equipment information with last scan details
- **Responsive Design**: Optimized for mobile viewing

### 📊 Database Integration
- **Supabase Backend**: Real-time data synchronization
- **Equipment Management**: Track equipment locations and history
- **Product Database**: Manage product inventory
- **Location History**: View equipment movement over time

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **React Native CLI** (`npm install -g react-native-cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **Java Development Kit (JDK)** 11 or higher
- **Android SDK** (API level 28 or higher)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/utahwatergardens/mobile-app.git
   cd mobile-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Configure Supabase**
   - Update `lib/supabase.js` with your Supabase credentials
   - Ensure your database has the required tables (`equipment`, `products`)

## 🔧 Configuration

### Supabase Setup

1. **Update Supabase Configuration**
   Edit `lib/supabase.js`:
   ```javascript
   const supabaseUrl = 'YOUR_SUPABASE_URL';
   const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
   ```

2. **Database Schema**
   Ensure your Supabase database has the following tables:
   - `equipment` (id, name, category, last_known_lat, last_known_lng, etc.)
   - `products` (id, barcode, name, category, price, etc.)

### Permissions

The app requires the following permissions:

- **Camera**: For QR code scanning
- **Location**: For GPS tracking
- **Internet**: For database connectivity

## 🚀 Running the App

### Android

1. **Start Metro bundler**
   ```bash
   npm start
   ```

2. **Run on Android device/emulator**
   ```bash
   npm run android
   ```

### iOS (macOS only)

1. **Start Metro bundler**
   ```bash
   npm start
   ```

2. **Run on iOS device/simulator**
   ```bash
   npm run ios
   ```

## 📱 App Structure

```
mobile-app/
├── App.js                 # Main application component
├── index.js              # App entry point
├── app.json              # App configuration
├── package.json          # Dependencies and scripts
├── lib/
│   └── supabase.js       # Supabase configuration and API
├── components/
│   └── EquipmentMap.js   # Interactive map component
└── README.md             # This file
```

## 🔍 Usage Guide

### Scanning Equipment

1. **Open the app** and grant camera/location permissions
2. **Point camera** at equipment QR code
3. **Wait for scan** - app will automatically detect QR code
4. **View results** - see equipment details and updated location
5. **Choose action** - scan another or view map

### Viewing Equipment Map

1. **Tap "View Map"** button from scanner or results screen
2. **See all equipment** with location data
3. **Tap markers** for detailed equipment information
4. **Navigate map** using standard map controls

### Managing Equipment

- **Real-time Updates**: Equipment locations update automatically
- **Location History**: Track equipment movement over time
- **Accuracy Tracking**: Monitor GPS accuracy for each scan
- **Offline Support**: Basic functionality works without internet

## 🛠️ Development

### Project Structure

- **App.js**: Main application logic and UI
- **EquipmentMap.js**: Interactive map component using WebView
- **supabase.js**: Database integration and API functions

### Key Technologies

- **React Native**: Cross-platform mobile development
- **react-native-camera**: QR code scanning functionality
- **react-native-webview**: Interactive map display
- **@supabase/supabase-js**: Database integration
- **Leaflet**: Interactive map library (via WebView)

### Building for Production

#### Android
```bash
npm run build-android
```

#### iOS
```bash
npm run build-ios
```

## 🔧 Troubleshooting

### Common Issues

1. **Camera Permission Denied**
   - Go to device settings and enable camera permission
   - Restart the app

2. **Location Services Disabled**
   - Enable location services in device settings
   - Grant location permission to the app

3. **Metro Bundler Issues**
   ```bash
   npm start -- --reset-cache
   ```

4. **Build Errors**
   ```bash
   npm run clean
   npm install
   ```

### Debug Mode

Enable debug mode for development:
```bash
# Android
adb reverse tcp:8081 tcp:8081

# iOS
# Use Xcode debugger or React Native Debugger
```

## 📊 Database Schema

### Equipment Table
```sql
CREATE TABLE equipment (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  last_known_lat DECIMAL(10,8),
  last_known_lng DECIMAL(11,8),
  last_known_accuracy DECIMAL(10,2),
  last_scanned TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Products Table
```sql
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  barcode TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT,
  description TEXT,
  price DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔒 Security

- **API Keys**: Store Supabase keys securely
- **Permissions**: Request only necessary permissions
- **Data Validation**: Validate all user inputs
- **Error Handling**: Graceful error handling throughout app

## 📈 Performance

- **Optimized Scanning**: Efficient QR code detection
- **Lazy Loading**: Load map data on demand
- **Caching**: Cache equipment data locally
- **Background Processing**: Handle GPS updates efficiently

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact: support@utahwatergardens.com
- Documentation: [Wiki](https://github.com/utahwatergardens/mobile-app/wiki)

## 🔄 Updates

Stay updated with the latest features:
- Watch the repository for updates
- Check release notes for new features
- Follow our development blog

---

**Built with ❤️ for Utah Water Gardens** 