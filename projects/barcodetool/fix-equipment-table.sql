-- Fix Equipment Table - Add Missing Category Column
-- Run this if you have an existing equipment table without the category column

-- Add the missing category column
ALTER TABLE equipment ADD COLUMN IF NOT EXISTS category TEXT;

-- Add index for category searches if it doesn't exist
CREATE INDEX IF NOT EXISTS idx_equipment_category ON equipment(category);

-- Verify the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'equipment' 
ORDER BY ordinal_position; 