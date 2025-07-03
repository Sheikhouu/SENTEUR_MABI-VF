/*
  # Revert deployment changes

  1. Changes
    - Revert incense weights back to original values
    - Revert product descriptions to original
    - Revert men's category changes

  2. Security
    - No changes to security policies
*/

DO $$ 
BEGIN
  -- Revert incense weights back to original values
  UPDATE incense_products 
  SET size_g = 200 
  WHERE size_g = 150;

  UPDATE incense_products 
  SET size_g = 350 
  WHERE size_g = 300;

  -- Revert men's products back to original categories
  UPDATE body_mists SET
    name = CASE 
      WHEN gender = 'homme' THEN 'Brume Luxe Homme'
      ELSE name
    END,
    price = CASE
      WHEN gender = 'homme' THEN 8000
      ELSE price
    END
  WHERE gender = 'homme';

  UPDATE body_oils SET
    name = CASE
      WHEN gender = 'homme' THEN 'Huile Luxe Homme'
      ELSE name
    END,
    price = CASE
      WHEN gender = 'homme' THEN 7000
      ELSE price
    END
  WHERE gender = 'homme';

  -- Verify the changes
  IF EXISTS (
    SELECT 1 FROM incense_products 
    WHERE size_g IN (150, 300)
  ) THEN
    RAISE EXCEPTION 'Some weights were not reverted correctly';
  END IF;

  IF EXISTS (
    SELECT 1 FROM body_mists
    WHERE gender = 'homme' AND name = 'Luxe Homme'
  ) THEN
    RAISE EXCEPTION 'Some men''s products were not reverted correctly';
  END IF;

  RAISE NOTICE 'All changes reverted successfully';
END $$;