/*
  # Update product weights and categories

  1. Changes
    - Update incense weights back to 200g/350g
    - Update product descriptions
    - Update men's category to "Luxe Homme"

  2. Security
    - No changes to security policies
*/

DO $$ 
BEGIN
  -- Update incense weights back to original values
  UPDATE incense_products 
  SET size_g = 200 
  WHERE size_g = 150;

  UPDATE incense_products 
  SET size_g = 350 
  WHERE size_g = 300;

  -- Update product descriptions
  UPDATE incense_products SET
    description = 'Une évasion sensorielle, intense et sophistiquée. Plongez dans un univers de mystère et de passion avec Éclat Rouge. L''accord profond du Naak Jeedah et du Bakhour dévoile une senteur envoûtante et luxueuse.'
  WHERE name = 'Éclat Rouge';

  UPDATE incense_products SET
    description = 'Une brise fraîche et apaisante. Laissez-vous séduire par la légèreté rafraîchissante de la menthe alliée au Naak Jeedah. Une senteur pure et vivifiante qui purifie l''air et apporte une sensation de sérénité absolue.'
  WHERE name = 'Douceur de Menthe';

  -- Update men's products to "Luxe Homme" category
  UPDATE body_mists SET
    name = 'Luxe Homme',
    description = 'Une fragrance masculine affirmée, puissante et raffinée.',
    price = 9000
  WHERE gender = 'homme';

  UPDATE body_oils SET
    name = 'Luxe Homme',
    description = 'Une fusion envoûtante entre fraîcheur, sensualité et intensité boisée.',
    price = 7500
  WHERE gender = 'homme';

  -- Verify the changes
  IF EXISTS (
    SELECT 1 FROM incense_products 
    WHERE size_g IN (150, 300)
  ) THEN
    RAISE EXCEPTION 'Some weights were not updated correctly';
  END IF;

  IF EXISTS (
    SELECT 1 FROM body_mists
    WHERE gender = 'homme' AND name != 'Luxe Homme'
  ) THEN
    RAISE EXCEPTION 'Some men''s products were not updated correctly';
  END IF;

  RAISE NOTICE 'All updates completed successfully';
END $$;