import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Alert, 
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { supabase } from './lib/supabase';
import { EquipmentMap } from './components/EquipmentMap';

export default function App() {
  const [lastScanned, setLastScanned] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    try {
      // Request camera permission
      if (Platform.OS === 'android') {
        const cameraPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs camera access to scan QR codes',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        
        const locationPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs location access to track equipment',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        setHasPermission(
          cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
          locationPermission === PermissionsAndroid.RESULTS.GRANTED
        );
      } else {
        setHasPermission(true);
      }
    } catch (err) {
      console.warn(err);
      setHasPermission(false);
    }
  };

  const handleQRScan = async ({ data }) => {
    try {
      setScanning(false);
      
      // Parse QR code data
      const scanData = JSON.parse(data);
      console.log('Scanned data:', scanData);
      
      // Get current GPS location
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          resolve,
          reject,
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
          }
        );
      });
      
      console.log('GPS position:', position);
      
      // Update database with new location
      const { data: equipment, error } = await supabase
        .from('equipment')
        .update({
          last_known_lat: position.coords.latitude,
          last_known_lng: position.coords.longitude,
          last_known_accuracy: position.coords.accuracy,
          last_scanned: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', scanData.equipmentId)
        .select();

      if (error) {
        console.error('Database update error:', error);
        Alert.alert('Error', 'Failed to update equipment location');
        return;
      }

      setLastScanned({
        name: scanData.name,
        category: scanData.category,
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        },
        timestamp: new Date().toISOString()
      });

      Alert.alert(
        'Success!', 
        `Equipment "${scanData.name}" location updated successfully!`,
        [
          {
            text: 'Scan Another',
            onPress: () => setScanning(true)
          },
          {
            text: 'View Map',
            onPress: () => setShowMap(true)
          }
        ]
      );

    } catch (error) {
      console.error('Scan error:', error);
      Alert.alert('Error', 'Failed to process QR code scan');
      setScanning(true);
    }
  };

  const resetScan = () => {
    setLastScanned(null);
    setScanning(true);
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContent}>
          <Text style={styles.text}>Requesting permissions...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (hasPermission === false) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContent}>
          <Text style={styles.text}>No access to camera or location</Text>
          <TouchableOpacity style={styles.button} onPress={requestPermissions}>
            <Text style={styles.buttonText}>Grant Permissions</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (showMap) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => setShowMap(false)}>
            <Text style={styles.backButtonText}>← Back to Scanner</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Equipment Map</Text>
        </View>
        <EquipmentMap />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      
      {scanning ? (
        <RNCamera
          style={styles.camera}
          onBarCodeRead={handleQRScan}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          <View style={styles.overlay}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Utah Water Gardens</Text>
              <Text style={styles.headerSubtitle}>Equipment Scanner</Text>
            </View>
            <View style={styles.scanArea}>
              <Text style={styles.scanText}>📱 Scan Equipment QR Code</Text>
              <View style={styles.scanFrame} />
              <Text style={styles.scanHint}>Position QR code within the frame</Text>
            </View>
            
            <View style={styles.controls}>
              <TouchableOpacity style={styles.mapButton} onPress={() => setShowMap(true)}>
                <Text style={styles.mapButtonText}>🗺️ View Map</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RNCamera>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Scan Complete!</Text>
          
          {lastScanned && (
            <View style={styles.resultCard}>
              <Text style={styles.equipmentName}>{lastScanned.name}</Text>
              <Text style={styles.equipmentCategory}>{lastScanned.category || 'No category'}</Text>
              <Text style={styles.locationText}>
                📍 Location: {lastScanned.location.lat.toFixed(6)}, {lastScanned.location.lng.toFixed(6)}
              </Text>
              <Text style={styles.accuracyText}>
                Accuracy: {lastScanned.location.accuracy?.toFixed(1)}m
              </Text>
              <Text style={styles.timestampText}>
                Scanned: {new Date(lastScanned.timestamp).toLocaleString()}
              </Text>
            </View>
          )}
          
          <View style={styles.resultButtons}>
            <TouchableOpacity style={styles.button} onPress={resetScan}>
              <Text style={styles.buttonText}>🔍 Scan Another</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setShowMap(true)}>
              <Text style={styles.buttonText}>🗺️ View Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 16,
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 5,
  },
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  scanText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  scanFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#00ff00',
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  scanHint: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    opacity: 0.8,
  },
  controls: {
    padding: 20,
    alignItems: 'center',
  },
  mapButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  mapButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2a2a2a',
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    color: '#00a8ff',
    fontSize: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  resultTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  resultCard: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  equipmentName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  equipmentCategory: {
    color: '#00a8ff',
    fontSize: 16,
    marginBottom: 15,
  },
  locationText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  accuracyText: {
    color: '#888',
    fontSize: 14,
    marginBottom: 5,
  },
  timestampText: {
    color: '#888',
    fontSize: 14,
  },
  resultButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#00a8ff',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
}); 