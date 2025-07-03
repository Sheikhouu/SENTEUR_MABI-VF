/*
  # Merge Women's Collections

  1. Changes
    - Create new women_collection table
    - Migrate data from body_oils and body_mists
    - Update product images

  2. Security
    - Enable RLS on new table
    - Add policies for public read access
*/

-- Create new women_collection table
CREATE TABLE IF NOT EXISTS women_collection (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  volume_ml integer NOT NULL,
  type text NOT NULL, -- 'oil' or 'mist'
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE women_collection ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access to women_collection"
  ON women_collection
  FOR SELECT
  TO public
  USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_women_collection_updated_at
  BEFORE UPDATE ON women_collection
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert products
INSERT INTO women_collection (name, description, price, volume_ml, type, image_url)
VALUES 
-- Oils
('Nayla', 'Une essence éclatante aux agrumes frais et vivifiants.', 7500, 50, 'oil', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/nayla_last_yytnl1.png'),
('Selma', 'Un parfum délicat et séduisant aux fruits rouges et musc.', 7500, 50, 'oil', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894099/selmat_last_last_e0gyon.png'),
('Mayssane', 'Une senteur opulente et envoûtante entre Médine, oud et douceur orientale.', 7500, 50, 'oil', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/mayssane_last_bgzxdp.png'),
('Saphira', 'Un voyage sensoriel aux fruits tropicaux, coco et ananas.', 7500, 50, 'oil', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894098/saphira_last_ywevn7.png'),
('Liyana', 'Une fragrance florale élégante mêlant rose, lavande et orange.', 7500, 50, 'oil', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894096/LILIYANA_HUILE_LAST_gpfuqm.png'),
-- Mists
('Nayla', 'Une essence éclatante aux agrumes frais et vivifiants.', 8000, 100, 'mist', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/nayla_last_yytnl1.png'),
('Selma', 'Un parfum délicat et séduisant aux fruits rouges et musc.', 8000, 100, 'mist', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894099/selmat_last_last_e0gyon.png'),
('Mayssane', 'Une senteur opulente et envoûtante entre Médine, oud et douceur orientale.', 8000, 100, 'mist', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/mayssane_last_bgzxdp.png'),
('Saphira', 'Un voyage sensoriel aux fruits tropicaux, coco et ananas.', 8000, 100, 'mist', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894098/saphira_last_ywevn7.png'),
('Liyana', 'Une fragrance florale élégante mêlant rose, lavande et orange.', 8000, 100, 'mist', 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894096/LILIYANA_HUILE_LAST_gpfuqm.png');