/*
  # Add Body Oils Products

  1. Changes
    - Clear existing body oils products
    - Insert body oils with working Cloudinary image URLs
*/

-- Clear existing products to avoid duplicates
TRUNCATE TABLE body_oils;

-- Insert body oils products with working Cloudinary URLs
INSERT INTO body_oils (
  name,
  description,
  price,
  volume_ml,
  image_url
) VALUES 
(
  'Huile Relaxante au Jasmin',
  'Une huile délicate au jasmin pour un moment de pure détente.',
  34.99,
  100,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742078059/Mabi/senteurs/pppbi9hg74m4d3e1cxw9.jpg'
),
(
  'Huile Apaisante à la Lavande',
  'Une huile apaisante à la lavande pour un sommeil réparateur.',
  29.99,
  100,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742171857/_DSC0083_y1lz0x.webp'
),
(
  'Huile Énergisante aux Agrumes',
  'Une huile vivifiante aux agrumes pour dynamiser votre journée.',
  32.99,
  100,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742171845/_DSC0240_rhmtdk.webp'
),
(
  'Huile Nourrissante à l''Argan',
  'Une huile riche à l''argan pour une peau douce et hydratée.',
  39.99,
  100,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742171844/_DSC0241_e6iqjj.webp'
),
(
  'Huile Régénérante au Monoï',
  'Une huile exotique au monoï pour une peau sublimée.',
  36.99,
  100,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742078051/Mabi/senteurs/gjztodhsxyywdyntutz0.jpg'
) ON CONFLICT DO NOTHING;