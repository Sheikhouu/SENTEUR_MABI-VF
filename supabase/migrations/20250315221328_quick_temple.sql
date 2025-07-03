/*
  # Create Media Storage System

  1. New Tables
    - media_files
      - id (uuid, primary key)
      - name (text)
      - path (text)
      - size (bigint)
      - mime_type (text)
      - created_at (timestamp)
      - updated_at (timestamp)
      - owner_id (uuid, references auth.users)

  2. Security
    - Enable RLS on media_files table
    - Add policies for public read access
    - Add policies for authenticated users to manage their files
*/

-- Create media_files table
CREATE TABLE IF NOT EXISTS media_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  path text NOT NULL,
  size bigint NOT NULL,
  mime_type text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  owner_id uuid REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to media_files"
  ON media_files
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to upload media"
  ON media_files
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Allow users to update their own media"
  ON media_files
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Allow users to delete their own media"
  ON media_files
  FOR DELETE
  TO authenticated
  USING (auth.uid() = owner_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_media_files_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for media_files table
CREATE TRIGGER update_media_files_updated_at
  BEFORE UPDATE ON media_files
  FOR EACH ROW
  EXECUTE FUNCTION update_media_files_updated_at();