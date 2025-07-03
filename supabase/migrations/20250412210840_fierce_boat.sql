/*
  # Update Women's Collection Products

  1. Changes
    - Remove duplicate products
    - Update descriptions and prices
    - Keep one version of each fragrance
*/

-- Clear existing data
TRUNCATE TABLE women_collection;

-- Insert updated products
INSERT INTO women_collection (
  name,
  description,
  price,
  volume_ml,
  type,
  image_url
) VALUES 
(
  'Nayla',
  'Une essence éclatante et vivifiante aux notes d''agrumes. Cette fragrance lumineuse évoque la fraîcheur d''un jardin d''agrumes au lever du soleil.',
  7500,
  50,
  'oil',
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/nayla_last_yytnl1.png'
),
(
  'Selma',
  'Un parfum délicat et séduisant où les fruits rouges dansent avec le musc. Une composition gourmande et sophistiquée qui révèle votre féminité.',
  7500,
  50,
  'oil',
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894099/selmat_last_last_e0gyon.png'
),
(
  'Mayssane',
  'Une senteur opulente entre Médine et Orient. L''accord profond du oud se mêle à une douceur orientale envoûtante pour une fragrance mystérieuse.',
  7500,
  50,
  'oil',
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/mayssane_last_bgzxdp.png'
),
(
  'Saphira',
  'Un voyage sensoriel exotique où la douceur de la noix de coco rencontre la fraîcheur de l''ananas. Une évasion tropicale en flacon.',
  7500,
  50,
  'oil',
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894098/saphira_last_ywevn7.png'
),
(
  'Liyana',
  'Une fragrance florale d''une rare élégance. La rose et la lavande s''entrelacent dans une danse parfumée, sublimée par des notes d''orange.',
  7500,
  50,
  'oil',
  'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894096/LILIYANA_HUILE_LAST_gpfuqm.png'
);