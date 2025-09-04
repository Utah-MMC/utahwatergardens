-- Barcode Tool Database Setup for Supabase
-- Run this in your Supabase SQL Editor

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    barcode TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT,
    description TEXT,
    price DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Drop equipment table if it exists to recreate with correct schema
DROP TABLE IF EXISTS equipment CASCADE;

-- Create equipment table for QR codes with GPS data
CREATE TABLE equipment (
    id TEXT PRIMARY KEY,
    qr_code TEXT,
    name TEXT NOT NULL,
    category TEXT,
    last_known_lat DECIMAL(10,8),
    last_known_lng DECIMAL(11,8),
    last_known_accuracy DECIMAL(10,2),
    last_scanned TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster barcode searches
CREATE INDEX IF NOT EXISTS idx_products_barcode ON products(barcode);

-- Create index for category searches
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

-- Create index for name searches
CREATE INDEX IF NOT EXISTS idx_products_name ON products(name);

-- Create index for equipment searches
CREATE INDEX IF NOT EXISTS idx_equipment_name ON equipment(name);
CREATE INDEX IF NOT EXISTS idx_equipment_category ON equipment(category);
CREATE INDEX IF NOT EXISTS idx_equipment_location ON equipment(last_known_lat, last_known_lng);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous access to products" ON products;
DROP POLICY IF EXISTS "Allow anonymous access to equipment" ON equipment;

-- Create policy for anonymous access (for demo purposes)
-- You can modify this for production with proper authentication
CREATE POLICY "Allow anonymous access to products" ON products
    FOR ALL USING (true);

CREATE POLICY "Allow anonymous access to equipment" ON equipment
    FOR ALL USING (true);

-- Insert some sample data for testing
INSERT INTO products (barcode, name, category, description, price) VALUES
    ('UWG12345678', 'Pond Pump 1000GPH', 'pond_equipment', 'High-quality submersible pond pump, 1000 gallons per hour', 89.99),
    ('UWG87654321', 'Waterfall Filter', 'water_features', 'Natural waterfall filter with bio-media', 149.99),
    ('UWG11223344', 'Koi Food Premium', 'accessories', 'Premium koi food with vitamins and minerals', 24.99),
    ('UWG55667788', 'Pond Liner 10x15', 'pond_equipment', 'Heavy-duty EPDM pond liner, 10x15 feet', 199.99),
    ('UWG99887766', 'Fountain Nozzle Set', 'water_features', 'Complete fountain nozzle kit with 5 different patterns', 39.99)
ON CONFLICT (barcode) DO NOTHING;

-- Insert sample equipment data
INSERT INTO equipment (id, name, category, last_known_lat, last_known_lng, last_known_accuracy) VALUES
    ('UWG-EQ-001', 'Pond Pump Station A', 'pond_equipment', 40.7608, -111.8910, 5.0),
    ('UWG-EQ-002', 'Waterfall System B', 'water_features', 40.7589, -111.8762, 3.2),
    ('UWG-EQ-003', 'Filtration Unit C', 'pond_equipment', 40.7623, -111.8945, 4.1)
ON CONFLICT (id) DO NOTHING;

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS update_products_updated_at ON products;
DROP TRIGGER IF EXISTS update_equipment_updated_at ON equipment;

-- Create trigger to automatically update updated_at for products
CREATE TRIGGER update_products_updated_at 
    BEFORE UPDATE ON products 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create trigger to automatically update updated_at for equipment
CREATE TRIGGER update_equipment_updated_at 
    BEFORE UPDATE ON equipment 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Grant necessary permissions
GRANT ALL ON products TO anon;
GRANT ALL ON equipment TO anon;
GRANT ALL ON products TO authenticated;
GRANT ALL ON equipment TO authenticated;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated; 