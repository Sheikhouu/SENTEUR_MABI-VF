/*
  # Add Product Category Tables

  1. New Tables
    - incense_products (encens)
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - price (numeric)
      - image_url (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - body_oils (huiles pour le corps)
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - price (numeric)
      - volume_ml (integer)
      - image_url (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - room_fragrances (parfums d'ambiance)
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - price (numeric)
      - volume_ml (integer)
      - image_url (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - scented_candles (bougies parfumées)
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - price (numeric)
      - weight_g (integer)
      - burn_time_hours (integer)
      - image_url (text)
      - created_at (timestamp)
      - updated_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Create incense_products table
CREATE TABLE IF NOT EXISTS incense_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create body_oils table
CREATE TABLE IF NOT EXISTS body_oils (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  volume_ml integer NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create room_fragrances table
CREATE TABLE IF NOT EXISTS room_fragrances (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  volume_ml integer NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create scented_candles table
CREATE TABLE IF NOT EXISTS scented_candles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  weight_g integer NOT NULL,
  burn_time_hours integer NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE incense_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE body_oils ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_fragrances ENABLE ROW LEVEL SECURITY;
ALTER TABLE scented_candles ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to incense_products"
  ON incense_products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to body_oils"
  ON body_oils
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to room_fragrances"
  ON room_fragrances
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to scented_candles"
  ON scented_candles
  FOR SELECT
  TO public
  USING (true);

-- Create triggers for updating updated_at timestamps
CREATE TRIGGER update_incense_products_updated_at
  BEFORE UPDATE ON incense_products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_body_oils_updated_at
  BEFORE UPDATE ON body_oils
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_room_fragrances_updated_at
  BEFORE UPDATE ON room_fragrances
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_scented_candles_updated_at
  BEFORE UPDATE ON scented_candles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();