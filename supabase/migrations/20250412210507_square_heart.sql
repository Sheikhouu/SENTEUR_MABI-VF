/*
  # Fix Women's Collection Data

  1. Changes
    - Verify and update women's collection data
    - Add missing products
    - Update prices and descriptions

  2. Security
    - No changes to security policies
*/

-- First, let's check if we have the correct data
DO $$ 
BEGIN
  -- Clear existing data to avoid duplicates
  DELETE FROM women_collection;

  -- Insert products with correct data
  INSERT INTO women_collection (
    name,
    description,
    price,
    volume_ml,
    type,
    image_url
  ) VALUES 
  -- Oils
  (
    'Nayla',
    'Une essence éclatante aux agrumes frais et vivifiants.',
    7500,
    50,
    'oil',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/nayla_last_yytnl1.png'
  ),
  (
    'Selma',
    'Un parfum délicat et séduisant aux fruits rouges et musc.',
    7500,
    50,
    'oil',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894099/selmat_last_last_e0gyon.png'
  ),
  (
    'Mayssane',
    'Une senteur opulente et envoûtante entre Médine, oud et douceur orientale.',
    7500,
    50,
    'oil',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/mayssane_last_bgzxdp.png'
  ),
  (
    'Saphira',
    'Un voyage sensoriel aux fruits tropicaux, coco et ananas.',
    7500,
    50,
    'oil',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894098/saphira_last_ywevn7.png'
  ),
  (
    'Liyana',
    'Une fragrance florale élégante mêlant rose, lavande et orange.',
    7500,
    50,
    'oil',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894096/LILIYANA_HUILE_LAST_gpfuqm.png'
  ),
  -- Mists
  (
    'Nayla',
    'Une essence éclatante aux agrumes frais et vivifiants.',
    8000,
    100,
    'mist',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/nayla_last_yytnl1.png'
  ),
  (
    'Selma',
    'Un parfum délicat et séduisant aux fruits rouges et musc.',
    8000,
    100,
    'mist',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894099/selmat_last_last_e0gyon.png'
  ),
  (
    'Mayssane',
    'Une senteur opulente et envoûtante entre Médine, oud et douceur orientale.',
    8000,
    100,
    'mist',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/mayssane_last_bgzxdp.png'
  ),
  (
    'Saphira',
    'Un voyage sensoriel aux fruits tropicaux, coco et ananas.',
    8000,
    100,
    'mist',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894098/saphira_last_ywevn7.png'
  ),
  (
    'Liyana',
    'Une fragrance florale élégante mêlant rose, lavande et orange.',
    8000,
    100,
    'mist',
    'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894096/LILIYANA_HUILE_LAST_gpfuqm.png'
  );
END $$;