/*
  # Add Ambient Fragrance Images

  1. Changes
    - Add image_url column to ambient_fragrances table
    - Update existing products with Cloudinary image URL

  2. Security
    - No changes to security policies
*/

-- Add image_url column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'ambient_fragrances' AND column_name = 'image_url'
  ) THEN
    ALTER TABLE ambient_fragrances ADD COLUMN image_url text;
  END IF;
END $$;

-- Update existing products with image URL
UPDATE ambient_fragrances
SET image_url = 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743404957/parfum_d_ambiance_lul4jz.png'
WHERE id IS NOT NULL;