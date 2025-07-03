/*
  # Update incense weights and formats

  1. Changes
    - Update incense weights from 200g to 150g
    - Update incense weights from 350g to 300g
    - Ensure proper weight formats for all products

  2. Security
    - No changes to security policies
*/

-- Create a DO block to handle the updates safely
DO $$ 
BEGIN
  -- Update incense weights from 200g to 150g
  UPDATE incense_products 
  SET size_g = 150 
  WHERE size_g = 200;

  -- Update incense weights from 350g to 300g
  UPDATE incense_products 
  SET size_g = 300 
  WHERE size_g = 350;

  -- Verify the changes
  IF NOT EXISTS (
    SELECT 1 FROM incense_products WHERE size_g IN (200, 350)
  ) THEN
    RAISE NOTICE 'Weight updates completed successfully';
  ELSE
    RAISE EXCEPTION 'Some weights were not updated correctly';
  END IF;
END $$;