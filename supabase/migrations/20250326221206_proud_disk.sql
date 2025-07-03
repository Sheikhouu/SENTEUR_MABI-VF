/*
  # Update incense weights back to 200g

  1. Changes
    - Update incense weights from 150g to 200g
    - Update incense weights from 300g to 350g

  2. Security
    - No changes to security policies
*/

DO $$ 
BEGIN
  -- Update incense weights from 150g to 200g
  UPDATE incense_products 
  SET size_g = 200 
  WHERE size_g = 150;

  -- Update incense weights from 300g to 350g
  UPDATE incense_products 
  SET size_g = 350 
  WHERE size_g = 300;

  -- Verify the changes
  IF EXISTS (
    SELECT 1 FROM incense_products 
    WHERE size_g IN (150, 300)
  ) THEN
    RAISE EXCEPTION 'Some weights were not updated correctly';
  ELSE
    RAISE NOTICE 'Weight updates completed successfully';
  END IF;
END $$;