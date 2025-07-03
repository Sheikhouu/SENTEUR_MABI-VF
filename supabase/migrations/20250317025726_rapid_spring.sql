/*
  # Fix Cloudinary Image URLs

  1. Changes
    - Update image URLs to use correct Cloudinary paths
    - Remove version numbers and transformations from URLs
*/

-- Clear existing products to avoid duplicates
TRUNCATE TABLE incense_products;

-- Insert incense products with corrected Cloudinary URLs
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
  'https://res.cloudinary.com/dkzwityrq/image/upload/Mabi/encen-photo-Un/IMG_0492.jpg'
),
(
  'Encens Ayurvédique',
  'Un mélange apaisant d''herbes ayurvédiques traditionnelles pour la méditation.',
  19.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/Mabi/encen-photo-Un/IMG_0493.jpg'
),
(
  'Encens Tibétain',
  'Un encens sacré aux notes de cèdre et de myrrhe, parfait pour la méditation.',
  29.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/Mabi/encen-photo-Un/IMG_0494.jpg'
),
(
  'Encens Premium',
  'Une sélection premium d''encens aux fragrances raffinées et durables.',
  34.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/Mabi/encen-photo-Un/IMG_0495.jpg'
),
(
  'Collection Signature',
  'Notre collection signature d''encens aux parfums exclusifs.',
  39.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/Mabi/encen-photo-Un/IMG_0496.jpg'
),
(
  'Encens Naturel',
  'Un encens 100% naturel aux senteurs authentiques et apaisantes.',
  22.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/Mabi/encen-photo-Un/IMG_0497.jpg'
) ON CONFLICT DO NOTHING;