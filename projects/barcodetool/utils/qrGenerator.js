// QR Code Generator with GPS Data
// Uses CDN version of QRCode library

// Load QRCode library dynamically
function loadQRCodeLibrary() {
    return new Promise((resolve, reject) => {
        if (window.QRCode) {
            resolve(window.QRCode);
            return;
        }
        
        // Try local library first
        const localScript = document.createElement('script');
        localScript.src = '../../lib/qrcode.min.js';
        localScript.onload = () => {
            if (window.QRCode) {
                resolve(window.QRCode);
            } else {
                // Fallback to CDN
                const cdnScript = document.createElement('script');
                cdnScript.src = 'https://unpkg.com/qrcode@1.5.3/build/qrcode.min.js';
                cdnScript.onload = () => resolve(window.QRCode);
                cdnScript.onerror = reject;
                document.head.appendChild(cdnScript);
            }
        };
        localScript.onerror = () => {
            // Fallback to CDN
            const cdnScript = document.createElement('script');
            cdnScript.src = 'https://unpkg.com/qrcode@1.5.3/build/qrcode.min.js';
            cdnScript.onload = () => resolve(window.QRCode);
            cdnScript.onerror = reject;
            document.head.appendChild(cdnScript);
        };
        document.head.appendChild(localScript);
    });
}

// Get current GPS location
async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            resolve({ lat: null, lng: null, error: 'Geolocation not supported' });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                    timestamp: position.timestamp
                });
            },
            (error) => {
                resolve({ 
                    lat: null, 
                    lng: null, 
                    error: `Location error: ${error.message}` 
                });
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
        );
    });
}

// Generate QR code for equipment with GPS data
export async function generateEquipmentQR(equipmentId, name, category = null) {
    try {
        // Load QRCode library
        const QRCode = await loadQRCodeLibrary();
        
        // Get current location
        const location = await getCurrentLocation();
        
        // Create data object
        const data = {
            equipmentId: equipmentId,
            name: name,
            category: category,
            gps: {
                lat: location.lat,
                lng: location.lng,
                accuracy: location.accuracy,
                timestamp: location.timestamp
            },
            generatedAt: new Date().toISOString(),
            type: 'equipment'
        };

        // Generate QR code
        const qrData = JSON.stringify(data);
        const qrCode = await QRCode.toDataURL(qrData, {
            width: 300,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        });

        // Store in database using global supabase client
        if (window.supabaseClient) {
            const { error } = await window.supabaseClient
                .from('equipment')
                .upsert({
                    id: equipmentId,
                    qr_code: qrData,
                    name: name,
                    category: category,
                    last_known_lat: location.lat,
                    last_known_lng: location.lng,
                    last_known_accuracy: location.accuracy,
                    last_scanned: new Date().toISOString(),
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                });

            if (error) {
                console.error('Database error:', error);
            }
        }

        return {
            qrCode: qrCode,
            data: data,
            location: location,
            success: true
        };

    } catch (error) {
        console.error('QR Generation error:', error);
        return {
            qrCode: null,
            data: null,
            location: null,
            success: false,
            error: error.message
        };
    }
}

// Generate QR code for product with location
export async function generateProductQR(barcode, name, category = null) {
    try {
        // Load QRCode library
        const QRCode = await loadQRCodeLibrary();
        
        // Get current location
        const location = await getCurrentLocation();
        
        // Create data object
        const data = {
            barcode: barcode,
            name: name,
            category: category,
            gps: {
                lat: location.lat,
                lng: location.lng,
                accuracy: location.accuracy,
                timestamp: location.timestamp
            },
            generatedAt: new Date().toISOString(),
            type: 'product'
        };

        // Generate QR code
        const qrData = JSON.stringify(data);
        
        // Create temporary div for QR code generation
        const tempDiv = document.createElement('div');
        tempDiv.style.display = 'none';
        document.body.appendChild(tempDiv);
        
        // Generate QR code using the constructor
        new QRCode(tempDiv, {
            text: qrData,
            width: 300,
            height: 300,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // Get the QR code image
        const qrImage = tempDiv.querySelector('img');
        const qrCode = qrImage.src;
        
        // Remove temporary div
        document.body.removeChild(tempDiv);

        return {
            qrCode: qrCode,
            data: data,
            location: location,
            success: true
        };

    } catch (error) {
        console.error('QR Generation error:', error);
        return {
            qrCode: null,
            data: null,
            location: null,
            success: false,
            error: error.message
        };
    }
}

// Scan QR code and extract data
export async function scanQRCode(qrCodeDataURL) {
    try {
        // Load QRCode library
        const QRCode = await loadQRCodeLibrary();
        
        // Decode QR code
        const decodedData = await QRCode.decode(qrCodeDataURL);
        const data = JSON.parse(decodedData);
        
        return {
            data: data,
            success: true
        };

    } catch (error) {
        console.error('QR Scan error:', error);
        return {
            data: null,
            success: false,
            error: error.message
        };
    }
}

// Generate simple QR code without GPS
export async function generateSimpleQR(text) {
    try {
        // Load QRCode library
        const QRCode = await loadQRCodeLibrary();
        
        // Create temporary div for QR code generation
        const tempDiv = document.createElement('div');
        tempDiv.style.display = 'none';
        document.body.appendChild(tempDiv);
        
        // Generate QR code using the constructor
        new QRCode(tempDiv, {
            text: text,
            width: 300,
            height: 300,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // Get the QR code image
        const qrImage = tempDiv.querySelector('img');
        const qrCode = qrImage.src;
        
        // Remove temporary div
        document.body.removeChild(tempDiv);

        return {
            qrCode: qrCode,
            success: true
        };

    } catch (error) {
        console.error('QR Generation error:', error);
        return {
            qrCode: null,
            success: false,
            error: error.message
        };
    }
}

// Get equipment location history
export async function getEquipmentLocationHistory(equipmentId) {
    try {
        if (!window.supabaseClient) {
            throw new Error('Supabase client not available');
        }

        const { data, error } = await window.supabaseClient
            .from('equipment')
            .select('*')
            .eq('id', equipmentId)
            .order('updated_at', { ascending: false });

        if (error) {
            throw error;
        }

        return {
            history: data,
            success: true
        };

    } catch (error) {
        console.error('Location history error:', error);
        return {
            history: [],
            success: false,
            error: error.message
        };
    }
}

// Update equipment location
export async function updateEquipmentLocation(equipmentId, lat, lng, accuracy = null) {
    try {
        if (!window.supabaseClient) {
            throw new Error('Supabase client not available');
        }

        const { error } = await window.supabaseClient
            .from('equipment')
            .update({
                last_known_lat: lat,
                last_known_lng: lng,
                last_known_accuracy: accuracy,
                last_scanned: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
            .eq('id', equipmentId);

        if (error) {
            throw error;
        }

        return {
            success: true
        };

    } catch (error) {
        console.error('Location update error:', error);
        return {
            success: false,
            error: error.message
        };
    }
} 