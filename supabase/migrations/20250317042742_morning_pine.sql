/*
  # Update Body Oils Descriptions

  1. Changes
    - Update description for lavender oil product
    - Keep other products unchanged

  2. Security
    - No changes to security policies
*/

UPDATE body_oils 
SET description = 'Une huile apaisante à la lavande pour un sommeil réparateur et une relaxation profonde. Enrichie en huiles essentielles naturelles.'
WHERE name = 'Huile Apaisante à la Lavande';