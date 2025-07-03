/*
  # Update Collections Structure and Product Images

  1. Changes
    - Merge women's mists and oils into "Collection Femme"
    - Update product images with new Cloudinary URLs
    - Ensure consistent image display

  2. Security
    - No changes to security policies
*/

-- Update body oils images and structure
UPDATE body_oils
SET image_url = CASE name
  WHEN 'Selma' THEN 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894099/selmat_last_last_e0gyon.png'
  WHEN 'Mayssane' THEN 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/mayssane_last_bgzxdp.png'
  WHEN 'Liyana' THEN 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894096/LILIYANA_HUILE_LAST_gpfuqm.png'
  WHEN 'Saphira' THEN 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894098/saphira_last_ywevn7.png'
  WHEN 'Nayla' THEN 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/nayla_last_yytnl1.png'
  ELSE image_url
END
WHERE gender = 'femme';

-- Update ambient fragrances images
UPDATE ambient_fragrances
SET image_url = 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/parfum_de_chambre_last_iprd5l.png'
WHERE id IS NOT NULL;

-- Update incense products images
UPDATE incense_products
SET image_url = 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893955/symphonie_florale_mgezmm.png'
WHERE name = 'Symphonie Florale';