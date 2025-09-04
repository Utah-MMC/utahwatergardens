# 🔍 Barcode Tool - Utah Water Gardens

A modern web-based barcode scanning and product management system built with Supabase.

## 🚀 Features

- **Barcode Scanning**: Scan or enter barcodes to find products
- **Product Management**: Add, edit, and search products
- **Real-time Database**: Supabase integration for instant data sync
- **Modern UI**: Beautiful, responsive design
- **Category Management**: Organize products by categories
- **Price Tracking**: Track product prices and updates

## 📋 Prerequisites

- Node.js (v14 or higher)
- Supabase account and project
- Modern web browser

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Supabase Database Setup

Create the following table in your Supabase database:

```sql
-- Create products table
CREATE TABLE products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    barcode TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT,
    description TEXT,
    price DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster barcode searches
CREATE INDEX idx_products_barcode ON products(barcode);

-- Create index for category searches
CREATE INDEX idx_products_category ON products(category);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous access (for demo purposes)
CREATE POLICY "Allow anonymous access" ON products
    FOR ALL USING (true);
```

### 3. Configure Supabase

Your Supabase configuration is already set up in `lib/supabase.js` with:
- URL: `https://lfmrgwgcdcryokkcynau.supabase.co`
- Key: Your provided API key

### 4. Run the Application

Open `index.html` in your web browser or serve it using a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📊 Database Schema

### Products Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key, auto-generated |
| `barcode` | TEXT | Unique barcode identifier |
| `name` | TEXT | Product name |
| `category` | TEXT | Product category |
| `description` | TEXT | Product description |
| `price` | DECIMAL(10,2) | Product price |
| `created_at` | TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |

### Categories

- `pond_equipment` - Pond pumps, filters, liners
- `water_features` - Fountains, waterfalls, streams
- `landscaping` - Plants, rocks, design services
- `maintenance` - Cleaning, repair services
- `accessories` - Tools, decorations, lighting

## 🎯 Usage Guide

### Scanning Barcodes

1. Enter a barcode number in the input field
2. Click "🔍 Scan" or press Enter
3. View product information if found
4. Add new product if not found

### Adding Products

1. Generate a new barcode or enter existing one
2. Fill in product details:
   - Name (required)
   - Category
   - Description
   - Price
3. Click "💾 Save Product"

### Searching Products

1. Enter product name or select category
2. Click "🔍 Search"
3. View matching products
4. Click "Edit" to modify any product

### Managing Products

- **View All**: Click "📋 View All Products" to see recent items
- **Edit**: Click "Edit" on any product to modify details
- **Update**: Changes are saved automatically to Supabase

## 🔧 API Functions

### Core Functions

- `scanBarcode()` - Search for product by barcode
- `generateBarcode()` - Create unique barcode
- `saveProduct()` - Save/update product
- `searchProduct()` - Search by name/category
- `viewProducts()` - Display all products
- `testConnection()` - Test Supabase connection

### Utility Functions

- `displayProduct(product)` - Show single product
- `displayProducts(products)` - Show multiple products
- `loadProduct(id)` - Load product for editing
- `clearProductForm()` - Reset form
- `showResult(message, type)` - Display status messages

## 🎨 Customization

### Styling

The application uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #4facfe;
    --secondary-color: #00f2fe;
    --accent-color: #667eea;
    --text-color: #333;
    --background-color: #f8f9fa;
}
```

### Categories

Add new categories in the HTML select options and update the database schema as needed.

### Barcode Format

The default barcode format is `UWG{timestamp}{random}`. Modify `generateUniqueBarcode()` for custom formats.

## 🔒 Security

- Row Level Security (RLS) enabled
- Anonymous access policy for demo
- Input validation and sanitization
- Error handling for all database operations

## 🚀 Deployment

### Static Hosting

Deploy to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Push to gh-pages branch
- **Supabase Storage**: Upload as static files

### Environment Variables

For production, consider using environment variables:

```javascript
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
```

## 📱 Mobile Support

The application is fully responsive and works on:
- Desktop browsers
- Mobile devices
- Tablets
- Barcode scanner devices

## 🔍 Troubleshooting

### Common Issues

1. **Connection Error**: Check Supabase URL and API key
2. **Table Not Found**: Ensure products table exists in Supabase
3. **CORS Error**: Use a local server instead of file:// protocol
4. **Module Error**: Ensure all files are in correct locations

### Debug Mode

Enable console logging by adding:

```javascript
console.log('Debug mode enabled');
```

## 📈 Future Enhancements

- [ ] Barcode image generation
- [ ] Inventory tracking
- [ ] Sales analytics
- [ ] Multi-user support
- [ ] API endpoints
- [ ] Mobile app version
- [ ] Integration with POS systems
- [ ] Bulk import/export
- [ ] Advanced search filters
- [ ] Product images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- Check the troubleshooting section
- Review Supabase documentation
- Contact the development team

---

**Built with ❤️ for Utah Water Gardens** 