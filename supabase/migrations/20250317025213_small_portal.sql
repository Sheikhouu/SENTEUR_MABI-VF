/*
  # Add Sample Incense Products

  1. Changes
    - Insert sample incense products into the incense_products table
    - Add product details including name, description, price, and image URLs

  2. Security
    - No changes to security policies
*/

-- Insert sample incense products
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
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742078085/Mabi/encens/encens-1.jpg'
),
(
  'Encens Ayurvédique',
  'Un mélange apaisant d''herbes ayurvédiques traditionnelles pour la méditation.',
  19.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742078085/Mabi/encens/encens-2.jpg'
),
(
  'Encens Tibétain',
  'Un encens sacré aux notes de cèdre et de myrrhe, parfait pour la méditation.',
  29.99,
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1742078085/Mabi/encens/encens-3.jpg'
) ON CONFLICT DO NOTHING;