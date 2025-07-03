/*
  # Update Incense Products Images

  1. Changes
    - Clear existing products
    - Insert products with working Cloudinary image URLs
*/

-- Clear existing products to avoid duplicates
TRUNCATE TABLE incense_products;

-- Insert incense products with working Cloudinary URLs
INSERT INTO incense_products (
  name,
  description,
  price,
  image_url
) VALUES 
(
  'Encens Traditionnel Japonais',
  'Un encens traditionnel japonais aux notes délicates de bois de santal et de jasmin.',
  24.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742078087/Mabi/senteurs/zmxh54d941moryv2surt.jpg'
),
(
  'Encens Ayurvédique',
  'Un mélange apaisant d''herbes ayurvédiques traditionnelles pour la méditation.',
  19.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742078088/Mabi/senteurs/ztjxdvixawy65gyuey2w.jpg'
),
(
  'Encens Tibétain',
  'Un encens sacré aux notes de cèdre et de myrrhe, parfait pour la méditation.',
  29.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742171861/_DSC0035_nyz1ac.webp'
),
(
  'Encens Premium',
  'Une sélection premium d''encens aux fragrances raffinées et durables.',
  34.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742171843/_DSC0138_g9lqbq.webp'
) ON CONFLICT DO NOTHING;