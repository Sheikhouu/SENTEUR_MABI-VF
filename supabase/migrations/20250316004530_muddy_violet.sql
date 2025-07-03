/*
  # Add Hero Image and Path Constraint

  1. Changes
    - Add unique constraint on path column in media_files table
    - Insert hero image into media_files table

  2. Security
    - No changes to security policies
*/

-- Add unique constraint on path column
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'media_files_path_key'
  ) THEN
    ALTER TABLE media_files ADD CONSTRAINT media_files_path_key UNIQUE (path);
  END IF;
END $$;

-- Insert hero image
INSERT INTO media_files (
  name,
  path,
  size,
  mime_type,
  created_at
) VALUES (
  'hero-image',
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742078068/Mabi/senteurs/epk6bmvdrmyixgrtpajh.jpg',
  500000,
  'image/jpeg',
  now()
) ON CONFLICT (path) DO NOTHING;