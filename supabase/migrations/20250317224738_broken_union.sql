/*
  # Mise à jour de la structure des produits

  1. Modifications
    - Mise à jour des prix en FCFA
    - Ajout des tailles pour les encens
    - Réorganisation des catégories
    - Mise à jour des descriptions

  2. Tables modifiées
    - incense_products: Ajout de la taille
    - body_oils: Mise à jour des prix et descriptions
    - body_mists: Mise à jour des prix et descriptions
    - room_fragrances: Renommé en ambient_fragrances

  3. Nouvelles tables
    - incense_box: Pour les box découverte
    - accessories: Pour les accessoires
*/

-- Modification de la table incense_products
ALTER TABLE incense_products 
ADD COLUMN IF NOT EXISTS size_g integer NOT NULL DEFAULT 200;

-- Mise à jour des encens
TRUNCATE TABLE incense_products;
INSERT INTO incense_products (name, description, price, size_g) VALUES 
('Éclat Rouge', 'Une évasion sensorielle, intense et sophistiquée. Plongez dans un univers de mystère et de passion avec Éclat Rouge. L''accord profond du Naak Jeedah et du Bakhour dévoile une senteur envoûtante et luxueuse.', 5000, 200),
('Douceur de Menthe', 'Une brise fraîche et apaisante. Laissez-vous séduire par la légèreté rafraîchissante de la menthe alliée au Naak Jeedah. Une senteur pure et vivifiante qui purifie l''air et apporte une sensation de sérénité absolue.', 5000, 200),
('Rêve Tropical', 'Un voyage sensoriel au cœur des îles exotiques. L''Encens Liban, le Nassem et le Naak Jeedah se marient harmonieusement aux notes sucrées d''ananas, de coco et de fruits exotiques.', 5000, 200),
('Symphonie Florale', 'Un bouquet envoûtant, délicat et enivrant. Une composition où les pétales de rose, le bakhour et la lavande se mêlent dans une danse florale exquise.', 5000, 200),
('Harmonie Sauvage', 'Un souffle boisé, brut et authentique. L''intensité du Soufou Médine s''unit à la profondeur du Nak Goudron et du Coco, offrant un parfum puissant et charismatique.', 5000, 200),
('Feu Doré', 'Une fragrance ardente, vibrante et solaire. L''éclat des agrumes allié à la profondeur du Soufou Médine crée un encens à la fois dynamique et sophistiqué.', 5000, 200),
('Frénésie', 'Un tourbillon de senteurs audacieuses et puissantes. Le Diguidié et le Sarkhatan fusionnent dans une fragrance enivrante et sensuelle.', 5000, 200),
('Mystère des Bois', 'Un parfum boisé, noble et envoûtant. Une alchimie subtile entre le Bois de Santal et le Bois d''Oud.', 5000, 200),
('Gowé', 'Une essence précieuse, riche de tradition. Un encens puissant et authentique, apprécié pour son héritage olfactif intemporel.', 5000, 200),
('Cocktail', 'Une composition audacieuse, un équilibre parfait. Un mélange sophistiqué où chaque note s''unit harmonieusement.', 5000, 200),
('Gardena', 'Une ode à la nature, florale et fruitée. Une alliance subtile entre les copeaux du Tchad, les pétales de rose et les agrumes.', 5000, 200);

-- Insertion des versions 350g
INSERT INTO incense_products (name, description, price, size_g)
SELECT name, description, 10000, 350
FROM incense_products
WHERE size_g = 200;

-- Création de la table box découverte
CREATE TABLE IF NOT EXISTS incense_box (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10,2) NOT NULL,
  contents text[] NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Insertion de la box découverte
INSERT INTO incense_box (name, description, price, contents) VALUES
('Box Découverte', 'Découvrez 4 encens au choix (50g chacun) et 1 huile de 15ml', 10000, ARRAY['4 encens au choix - 50g chacun', '1 huile de 15ml']);

-- Mise à jour des huiles pour le corps
TRUNCATE TABLE body_oils;
INSERT INTO body_oils (name, description, price, volume_ml, gender) VALUES 
-- Femmes
('Nayla', 'Une essence éclatante aux agrumes frais et vivifiants.', 7500, 50, 'femme'),
('Selma', 'Un parfum délicat et séduisant aux fruits rouges et musc.', 7500, 50, 'femme'),
('Mayssane', 'Une senteur opulente et envoûtante entre Médine, oud et douceur orientale.', 7500, 50, 'femme'),
('Saphira', 'Un voyage sensoriel aux fruits tropicaux, coco et ananas.', 7500, 50, 'femme'),
('Liyana', 'Une fragrance florale élégante mêlant rose, lavande et orange.', 7500, 50, 'femme'),
-- Version 30ml
('Nayla', 'Une essence éclatante aux agrumes frais et vivifiants.', 5000, 30, 'femme'),
('Selma', 'Un parfum délicat et séduisant aux fruits rouges et musc.', 5000, 30, 'femme'),
('Mayssane', 'Une senteur opulente et envoûtante entre Médine, oud et douceur orientale.', 5000, 30, 'femme'),
('Saphira', 'Un voyage sensoriel aux fruits tropicaux, coco et ananas.', 5000, 30, 'femme'),
('Liyana', 'Une fragrance florale élégante mêlant rose, lavande et orange.', 5000, 30, 'femme'),
-- Hommes
('Huile Luxe Homme', 'Une fusion envoûtante entre fraîcheur, sensualité et intensité boisée.', 7500, 50, 'homme');

-- Mise à jour des brumes corporelles
TRUNCATE TABLE body_mists;
INSERT INTO body_mists (name, description, price, volume_ml, gender) VALUES 
-- Femmes
('Nayla', 'Une essence éclatante aux agrumes frais et vivifiants.', 8000, 100, 'femme'),
('Selma', 'Un parfum délicat et séduisant aux fruits rouges et musc.', 8000, 100, 'femme'),
('Mayssane', 'Une senteur opulente et envoûtante entre Médine, oud et douceur orientale.', 8000, 100, 'femme'),
('Saphira', 'Un voyage sensoriel aux fruits tropicaux, coco et ananas.', 8000, 100, 'femme'),
('Liyana', 'Une fragrance florale élégante mêlant rose, lavande et orange.', 8000, 100, 'femme'),
-- Hommes
('Brume Luxe Homme', 'Une fragrance masculine affirmée, puissante et raffinée.', 9000, 100, 'homme');

-- Renommer room_fragrances en ambient_fragrances
ALTER TABLE room_fragrances RENAME TO ambient_fragrances;

-- Création de la table accessories
CREATE TABLE IF NOT EXISTS accessories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10,2) NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Activer RLS sur les nouvelles tables
ALTER TABLE incense_box ENABLE ROW LEVEL SECURITY;
ALTER TABLE accessories ENABLE ROW LEVEL SECURITY;

-- Créer les politiques pour les nouvelles tables
CREATE POLICY "Allow public read access to incense_box"
  ON incense_box
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to accessories"
  ON accessories
  FOR SELECT
  TO public
  USING (true);

-- Créer les triggers pour updated_at
CREATE TRIGGER update_incense_box_updated_at
  BEFORE UPDATE ON incense_box
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_accessories_updated_at
  BEFORE UPDATE ON accessories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();