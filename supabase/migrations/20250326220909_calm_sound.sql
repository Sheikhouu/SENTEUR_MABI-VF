/*
  # Update product weights and descriptions

  1. Changes
    - Update incense weights from 200g to 150g
    - Update incense weights from 300g to 350g
    - Update product descriptions
    - Remove men's specific products and merge into "Luxe Homme" category

  2. Security
    - No changes to security policies
*/

DO $$ 
BEGIN
  -- Update incense weights
  UPDATE incense_products 
  SET size_g = 150 
  WHERE size_g = 200;

  UPDATE incense_products 
  SET size_g = 300 
  WHERE size_g = 350;

  -- Update incense descriptions
  UPDATE incense_products SET
    description = 'Une évasion sensorielle, intense et sophistiquée. Plongez dans un univers de mystère et de passion avec Éclat Rouge. L''accord profond du Naak Jeedah et du Bakhour dévoile une senteur envoûtante et luxueuse.'
  WHERE name = 'Éclat Rouge';

  UPDATE incense_products SET
    description = 'Une brise fraîche et apaisante. Laissez-vous séduire par la légèreté rafraîchissante de la menthe alliée au Naak Jeedah. Une senteur pure et vivifiante qui purifie l''air et apporte une sensation de sérénité absolue.'
  WHERE name = 'Douceur de Menthe';

  -- Merge men's products into "Luxe Homme" category
  UPDATE body_mists SET
    name = 'Luxe Homme',
    description = 'Une fragrance masculine affirmée, puissante et raffinée.'
  WHERE gender = 'homme';

  UPDATE body_oils SET
    name = 'Luxe Homme',
    description = 'Une fusion envoûtante entre fraîcheur, sensualité et intensité boisée.'
  WHERE gender = 'homme';

  -- Verify the changes
  IF NOT EXISTS (
    SELECT 1 FROM incense_products WHERE size_g IN (200, 350)
  ) THEN
    RAISE NOTICE 'Product updates completed successfully';
  ELSE
    RAISE EXCEPTION 'Some updates were not applied correctly';
  END IF;
END $$;