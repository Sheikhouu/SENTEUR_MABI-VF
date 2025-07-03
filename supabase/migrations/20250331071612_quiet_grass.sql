/*
  # Add Product Images

  1. Changes
    - Add image_url column to body_oils table
    - Update existing products with Cloudinary image URLs

  2. Security
    - No changes to security policies
*/

-- Add image_url column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'body_oils' AND column_name = 'image_url'
  ) THEN
    ALTER TABLE body_oils ADD COLUMN image_url text;
  END IF;
END $$;

-- Update existing products with image URLs
UPDATE body_oils
SET image_url = 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743404958/huile_neyla_qkmsii.png'
WHERE name = 'Nayla';

UPDATE body_oils
SET image_url = 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743404958/huile_selma_dptlwa.png'
WHERE name = 'Selma';

UPDATE body_oils
SET image_url = 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743404957/huile_Mayssane_qr4w7n.png'
WHERE name = 'Mayssane';