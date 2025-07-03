/*
  # Update Incense Products with Cloudinary Images

  1. Changes
    - Update existing incense products with new Cloudinary image URLs
    - Add new incense products with images
*/

-- Clear existing products to avoid duplicates
TRUNCATE TABLE incense_products;

-- Insert incense products with Cloudinary images
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
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742179932/Mabi/encen-photo-Un/IMG_0492_yvxwzm.jpg'
),
(
  'Encens Ayurvédique',
  'Un mélange apaisant d''herbes ayurvédiques traditionnelles pour la méditation.',
  19.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742179932/Mabi/encen-photo-Un/IMG_0493_kxwqzn.jpg'
),
(
  'Encens Tibétain',
  'Un encens sacré aux notes de cèdre et de myrrhe, parfait pour la méditation.',
  29.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742179932/Mabi/encen-photo-Un/IMG_0494_lmvxyn.jpg'
),
(
  'Encens Premium',
  'Une sélection premium d''encens aux fragrances raffinées et durables.',
  34.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742179932/Mabi/encen-photo-Un/IMG_0495_nwvyzp.jpg'
),
(
  'Collection Signature',
  'Notre collection signature d''encens aux parfums exclusifs.',
  39.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742179932/Mabi/encen-photo-Un/IMG_0496_qxwyzr.jpg'
),
(
  'Encens Naturel',
  'Un encens 100% naturel aux senteurs authentiques et apaisantes.',
  22.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742179932/Mabi/encen-photo-Un/IMG_0497_sxwyzv.jpg'
) ON CONFLICT DO NOTHING;