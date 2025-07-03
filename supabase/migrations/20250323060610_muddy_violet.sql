/*
  # Mise à jour des poids des encens

  1. Modifications
    - Mise à jour des poids des encens de 200g à 150g
    - Mise à jour des poids des encens de 350g à 300g
*/

-- Mise à jour des encens de 200g à 150g
UPDATE incense_products
SET size_g = 150
WHERE size_g = 200;

-- Mise à jour des encens de 350g à 300g
UPDATE incense_products
SET size_g = 300
WHERE size_g = 350;