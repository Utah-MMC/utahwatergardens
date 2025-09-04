// Supabase configuration
const supabaseUrl = 'https://lfmrgwgcdcryokkcynau.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbXJnd2djZGNyeW9ra2N5bmF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDk5NjMsImV4cCI6MjA2OTQ4NTk2M30.1YrGSnZxtOsfZMPrOkOAf8cQbtIfKxm5eJX8XfxlnZ4';

// Initialize Supabase client
let supabase = null;

// Wait for Supabase to be available
function initializeSupabase() {
    if (window.supabase) {
        supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
        // Make supabase client available globally for QR generator
        window.supabaseClient = supabase;
        console.log('Supabase initialized successfully');
        return true;
    } else {
        console.log('Supabase not available yet, retrying...');
        return false;
    }
}

// Global variables
let currentProduct = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Barcode Tool initialized');
    
    // Try to initialize Supabase immediately
    if (initializeSupabase()) {
        testConnection();
    } else {
        // If not available, wait a bit and try again
        setTimeout(() => {
            if (initializeSupabase()) {
                testConnection();
            } else {
                console.error('Failed to initialize Supabase');
                document.getElementById('dbStatus').className = 'status error';
                document.getElementById('dbStatus').textContent = 'Failed to initialize Supabase client';
            }
        }, 1000);
    }
    
    // Add event listeners
    document.getElementById('barcodeInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            scanBarcode();
        }
    });
});

// Test Supabase connection
async function testConnection() {
    const statusElement = document.getElementById('dbStatus');
    
    if (!supabase) {
        statusElement.className = 'status error';
        statusElement.textContent = 'Supabase client not initialized';
        return;
    }
    
    try {
        const { data, error } = await supabase.from('products').select('count').limit(1);
        
        if (error) {
            statusElement.className = 'status error';
            statusElement.textContent = `Connection Error: ${error.message}`;
        } else {
            statusElement.className = 'status success';
            statusElement.textContent = '✅ Connected to Supabase successfully!';
        }
    } catch (error) {
        statusElement.className = 'status error';
        statusElement.textContent = `Connection Failed: ${error.message}`;
    }
}

// Scan barcode and search for product
async function scanBarcode() {
    if (!supabase) {
        showResult('Supabase client not initialized', 'error');
        return;
    }
    
    const barcodeInput = document.getElementById('barcodeInput');
    const barcode = barcodeInput.value.trim();
    
    if (!barcode) {
        showResult('Please enter a barcode number', 'error');
        return;
    }
    
    showResult('Searching for product...', 'info');
    
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('barcode', barcode)
            .single();
        
        if (error) {
            if (error.code === 'PGRST116') {
                showResult('Product not found. Would you like to add it?', 'info');
                clearProductForm();
            } else {
                showResult(`Error: ${error.message}`, 'error');
            }
        } else {
            showResult('Product found!', 'success');
            displayProduct(data);
            populateProductForm(data);
        }
    } catch (error) {
        showResult(`Error: ${error.message}`, 'error');
    }
}

// Generate a new barcode
function generateBarcode() {
    const barcode = generateUniqueBarcode();
    document.getElementById('barcodeInput').value = barcode;
    showResult(`Generated barcode: ${barcode}`, 'success');
}

// Generate unique barcode
function generateUniqueBarcode() {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `UWG${timestamp.slice(-8)}${random}`;
}

// Generate QR code with GPS data
async function generateQRCode() {
    if (!supabase) {
        showResult('Supabase client not initialized', 'error');
        return;
    }
    
    const barcode = document.getElementById('barcodeInput').value.trim();
    const name = document.getElementById('productName').value.trim();
    const category = document.getElementById('productCategory').value;
    
    if (!barcode || !name) {
        showResult('Please enter barcode and product name first', 'error');
        return;
    }
    
    showResult('Generating QR code with GPS data...', 'info');
    
    try {
        // Import QR generator functions
        const { generateProductQR } = await import('./utils/qrGenerator.js');
        
        const result = await generateProductQR(barcode, name, category);
        
        if (result.success) {
            // Display QR code
            displayQRCode(result.qrCode, result.data);
            showResult('QR code generated successfully with GPS data!', 'success');
        } else {
            showResult(`QR generation failed: ${result.error}`, 'error');
        }
    } catch (error) {
        showResult(`Error generating QR code: ${error.message}`, 'error');
    }
}

// Display QR code
function displayQRCode(qrCodeDataURL, data) {
    const resultDiv = document.getElementById('barcodeResult');
    resultDiv.style.display = 'block';
    
    let html = `
        <h3>📱 Scannable QR Code Generated</h3>
        <div style="text-align: center; margin: 20px 0;">
            <img src="${qrCodeDataURL}" alt="QR Code" style="max-width: 300px; border: 3px solid #333; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        </div>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <h4>QR Code Information:</h4>
            <p><strong>Product:</strong> ${data.name}</p>
            <p><strong>Barcode:</strong> ${data.barcode}</p>
            <p><strong>Category:</strong> ${data.category || 'N/A'}</p>
            <p><strong>GPS Location:</strong> ${data.gps.lat ? `${data.gps.lat.toFixed(6)}, ${data.gps.lng.toFixed(6)}` : 'Not available'}</p>
            <p><strong>Accuracy:</strong> ${data.gps.accuracy ? `${data.gps.accuracy.toFixed(1)}m` : 'N/A'}</p>
            <p><strong>Generated:</strong> ${new Date(data.generatedAt).toLocaleString()}</p>
        </div>
        <div style="margin-top: 15px; text-align: center;">
            <button class="btn" onclick="downloadQRCode('${qrCodeDataURL}', '${data.barcode}')" style="margin-right: 10px;">📥 Download QR Code</button>
            <button class="btn btn-secondary" onclick="printQRCode('${qrCodeDataURL}', '${data.name}', '${data.barcode}', '${data.category || ''}')">🖨️ Print QR Code</button>
        </div>
        <div style="margin-top: 15px; padding: 10px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #4caf50;">
            <p style="margin: 0; color: #2e7d32;"><strong>✅ QR Code is scannable!</strong> This QR code contains all the product information and can be scanned by any QR code reader app.</p>
        </div>
    `;
    
    resultDiv.innerHTML = html;
}

// Download QR code
function downloadQRCode(qrCodeDataURL, filename) {
    const link = document.createElement('a');
    link.download = `qr-code-${filename}.png`;
    link.href = qrCodeDataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showResult('QR code downloaded!', 'success');
}

// Print QR code
function printQRCode(qrCodeDataURL, productName = '', barcode = '', category = '') {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>QR Code Print - ${productName}</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        text-align: center; 
                        padding: 40px;
                        margin: 0;
                        background: #f8f9fa;
                    }
                    .qr-container {
                        border: 3px solid #333;
                        padding: 30px;
                        display: inline-block;
                        border-radius: 15px;
                        background: white;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    }
                    .qr-code-section {
                        margin-bottom: 20px;
                    }
                    .qr-code-section h3 {
                        margin: 0 0 15px 0;
                        color: #333;
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .product-info {
                        margin-top: 20px;
                        font-size: 16px;
                        text-align: left;
                        max-width: 300px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .product-info h2 {
                        margin: 0 0 15px 0;
                        color: #333;
                        text-align: center;
                        font-size: 20px;
                    }
                    .product-info p {
                        margin: 8px 0;
                        color: #666;
                        font-size: 14px;
                    }
                    .data-section {
                        margin-top: 20px;
                        padding: 15px;
                        background: #f8f9fa;
                        border-radius: 10px;
                        text-align: left;
                    }
                    .data-section h3 {
                        margin: 0 0 10px 0;
                        color: #333;
                        font-size: 16px;
                    }
                    .data-section pre {
                        background: #e9ecef;
                        padding: 10px;
                        border-radius: 5px;
                        font-size: 12px;
                        overflow-x: auto;
                        margin: 10px 0;
                        white-space: pre-wrap;
                        word-break: break-all;
                    }
                    @media print {
                        body { padding: 20px; }
                        .qr-container { border: 2px solid #333; }
                    }
                </style>
            </head>
            <body>
                <div class="qr-container">
                    <div class="qr-code-section">
                        <h3>Scannable QR Code</h3>
                        <img src="${qrCodeDataURL}" alt="QR Code" style="width: 250px; height: 250px;">
                    </div>
                    <div class="product-info">
                        <h2>${productName || 'Product'}</h2>
                        <p><strong>Barcode:</strong> ${barcode || 'N/A'}</p>
                        <p><strong>Category:</strong> ${category || 'N/A'}</p>
                        <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
                    </div>
                    <div class="data-section">
                        <h3>QR Code Data:</h3>
                        <pre>${JSON.stringify({
                            barcode: barcode,
                            name: productName,
                            category: category,
                            generatedAt: new Date().toISOString()
                        }, null, 2)}</pre>
                    </div>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Save product to database
async function saveProduct() {
    if (!supabase) {
        showResult('Supabase client not initialized', 'error');
        return;
    }
    
    const barcode = document.getElementById('barcodeInput').value.trim();
    const name = document.getElementById('productName').value.trim();
    const category = document.getElementById('productCategory').value;
    const description = document.getElementById('productDescription').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value) || 0;
    
    if (!barcode || !name) {
        showResult('Please enter barcode and product name', 'error');
        return;
    }
    
    const productData = {
        barcode: barcode,
        name: name,
        category: category,
        description: description,
        price: price,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
    
    try {
        let result;
        if (currentProduct) {
            // Update existing product
            const { data, error } = await supabase
                .from('products')
                .update(productData)
                .eq('id', currentProduct.id);
            result = { data, error };
        } else {
            // Insert new product
            const { data, error } = await supabase
                .from('products')
                .insert([productData]);
            result = { data, error };
        }
        
        if (result.error) {
            showResult(`Error saving product: ${result.error.message}`, 'error');
        } else {
            showResult('Product saved successfully!', 'success');
            currentProduct = result.data ? result.data[0] : currentProduct;
            clearProductForm();
        }
    } catch (error) {
        showResult(`Error: ${error.message}`, 'error');
    }
}

// Search for products
async function searchProduct() {
    if (!supabase) {
        showResult('Supabase client not initialized', 'error');
        return;
    }
    
    const name = document.getElementById('productName').value.trim();
    const category = document.getElementById('productCategory').value;
    
    if (!name && !category) {
        showResult('Please enter a product name or select a category', 'error');
        return;
    }
    
    try {
        let query = supabase.from('products').select('*');
        
        if (name) {
            query = query.ilike('name', `%${name}%`);
        }
        
        if (category) {
            query = query.eq('category', category);
        }
        
        const { data, error } = await query.limit(10);
        
        if (error) {
            showResult(`Error: ${error.message}`, 'error');
        } else if (data.length === 0) {
            showResult('No products found', 'info');
        } else {
            displayProducts(data);
        }
    } catch (error) {
        showResult(`Error: ${error.message}`, 'error');
    }
}

// View all products
async function viewProducts() {
    if (!supabase) {
        showResult('Supabase client not initialized', 'error');
        return;
    }
    
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(20);
        
        if (error) {
            showResult(`Error: ${error.message}`, 'error');
        } else {
            displayProducts(data);
        }
    } catch (error) {
        showResult(`Error: ${error.message}`, 'error');
    }
}

// Display product information
function displayProduct(product) {
    const resultDiv = document.getElementById('barcodeResult');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>📦 ${product.name}</h3>
        <p><strong>Barcode:</strong> ${product.barcode}</p>
        <p><strong>Category:</strong> ${product.category || 'N/A'}</p>
        <p><strong>Price:</strong> $${product.price || '0.00'}</p>
        <p><strong>Description:</strong> ${product.description || 'No description'}</p>
        <p><strong>Last Updated:</strong> ${new Date(product.updated_at).toLocaleDateString()}</p>
        <div style="margin-top: 15px;">
            <button class="btn" onclick="generateQRForProduct('${product.barcode}', '${product.name}', '${product.category || ''}')">📱 Generate QR Code</button>
        </div>
    `;
}

// Generate QR code for existing product
async function generateQRForProduct(barcode, name, category) {
    if (!supabase) {
        showResult('Supabase client not initialized', 'error');
        return;
    }
    
    try {
        const { generateProductQR } = await import('./utils/qrGenerator.js');
        
        const result = await generateProductQR(barcode, name, category);
        
        if (result.success) {
            displayQRCode(result.qrCode, result.data);
            showResult('QR code generated for existing product!', 'success');
        } else {
            showResult(`QR generation failed: ${result.error}`, 'error');
        }
    } catch (error) {
        showResult(`Error generating QR code: ${error.message}`, 'error');
    }
}

// Display multiple products
function displayProducts(products) {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsContent = document.getElementById('resultsContent');
    
    resultsContainer.style.display = 'block';
    
    let html = '<div style="display: grid; gap: 15px;">';
    products.forEach(product => {
        html += `
            <div style="border: 1px solid #e1e5e9; border-radius: 8px; padding: 15px; background: #f8f9fa;">
                <h4>${product.name}</h4>
                <p><strong>Barcode:</strong> ${product.barcode}</p>
                <p><strong>Category:</strong> ${product.category || 'N/A'}</p>
                <p><strong>Price:</strong> $${product.price || '0.00'}</p>
                <div style="margin-top: 10px;">
                    <button class="btn" onclick="loadProduct('${product.id}')" style="margin-right: 10px;">Edit</button>
                    <button class="btn btn-secondary" onclick="generateQRForProduct('${product.barcode}', '${product.name}', '${product.category || ''}')">QR Code</button>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    resultsContent.innerHTML = html;
}

// Load product for editing
async function loadProduct(productId) {
    if (!supabase) {
        showResult('Supabase client not initialized', 'error');
        return;
    }
    
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', productId)
            .single();
        
        if (error) {
            showResult(`Error: ${error.message}`, 'error');
        } else {
            currentProduct = data;
            populateProductForm(data);
            showResult('Product loaded for editing', 'success');
        }
    } catch (error) {
        showResult(`Error: ${error.message}`, 'error');
    }
}

// Populate form with product data
function populateProductForm(product) {
    document.getElementById('barcodeInput').value = product.barcode || '';
    document.getElementById('productName').value = product.name || '';
    document.getElementById('productCategory').value = product.category || '';
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productPrice').value = product.price || '';
}

// Clear product form
function clearProductForm() {
    document.getElementById('barcodeInput').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('productPrice').value = '';
    currentProduct = null;
}

// Show result message
function showResult(message, type = 'info') {
    const resultDiv = document.getElementById('barcodeResult');
    resultDiv.style.display = 'block';
    resultDiv.className = `result status ${type}`;
    resultDiv.innerHTML = `<p>${message}</p>`;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        resultDiv.style.display = 'none';
    }, 5000);
} 