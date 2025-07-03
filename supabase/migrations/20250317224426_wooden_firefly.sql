/*
  # Mise à jour de la structure des produits

  1. Modifications
    - Ajout de la colonne gender pour les produits corporels
    - Mise à jour des prix en FCFA
    - Ajout des nouvelles descriptions
    - Réorganisation des catégories

  2. Changements
    - Mise à jour des tables body_oils et room_fragrances
    - Ajout des descriptions détaillées
    - Conversion des prix en FCFA
*/

-- Ajout de la colonne gender aux tables existantes
ALTER TABLE body_oils ADD COLUMN IF NOT EXISTS gender text DEFAULT 'unisex';
ALTER TABLE room_fragrances ADD COLUMN IF NOT EXISTS gender text DEFAULT 'unisex';

-- Mise à jour des encens
TRUNCATE TABLE incense_products;
INSERT INTO incense_products (name, description, price) VALUES 
('Éclat Rouge', 'Une évasion sensorielle, intense et sophistiquée. Plongez dans un univers de mystère et de passion avec Éclat Rouge. L''accord profond du Naak Jeedah et du Bakhour dévoile une senteur envoûtante et luxueuse.', 5000),
('Douceur de Menthe', 'Une brise fraîche et apaisante. Laissez-vous séduire par la légèreté rafraîchissante de la menthe alliée au Naak Jeedah. Une senteur pure et vivifiante qui purifie l''air et apporte une sensation de sérénité absolue.', 5000),
('Rêve Tropical', 'Un voyage sensoriel au cœur des îles exotiques. L''Encens Liban, le Nassem et le Naak Jeedah se marient harmonieusement aux notes sucrées d''ananas, de coco et de fruits exotiques.', 5000),
('Symphonie Florale', 'Un bouquet envoûtant, délicat et enivrant. Une composition où les pétales de rose, le bakhour et la lavande se mêlent dans une danse florale exquise.', 5000),
('Harmonie Sauvage', 'Un souffle boisé, brut et authentique. L''intensité du Soufou Médine s''unit à la profondeur du Nak Goudron et du Coco, offrant un parfum puissant et charismatique.', 5000),
('Feu Doré', 'Une fragrance ardente, vibrante et solaire. L''éclat des agrumes allié à la profondeur du Soufou Médine crée un encens à la fois dynamique et sophistiqué.', 5000),
('Frénésie', 'Un tourbillon de senteurs audacieuses et puissantes. Le Diguidié et le Sarkhatan fusionnent dans une fragrance enivrante et sensuelle.', 5000),
('Mystère des Bois', 'Un parfum boisé, noble et envoûtant. Une alchimie subtile entre le Bois de Santal et le Bois d''Oud.', 5000),
('Gowé', 'Une essence précieuse, riche de tradition. Un encens puissant et authentique, apprécié pour son héritage olfactif intemporel.', 5000),
('Cocktail', 'Une composition audacieuse, un équilibre parfait. Un mélange sophistiqué où chaque note s''unit harmonieusement.', 5000),
('Gardena', 'Une ode à la nature, florale et fruitée. Une alliance subtile entre les copeaux du Tchad, les pétales de rose et les agrumes.', 5000);

-- Mise à jour des huiles pour le corps
TRUNCATE TABLE body_oils;
INSERT INTO body_oils (name, description, price, volume_ml, gender) VALUES 
('Nayla', 'Une essence éclatante aux agrumes frais et vivifiants.', 7500, 50, 'femme'),
('Selma', 'Un parfum délicat et séduisant aux fruits rouges et musc.', 7500, 50, 'femme'),
('Mayssane', 'Une senteur opulente et envoûtante entre Médine, oud et douceur orientale.', 7500, 50, 'femme'),
('Saphira', 'Un voyage sensoriel aux fruits tropicaux, coco et ananas.', 7500, 50, 'femme'),
('Liyana', 'Une fragrance florale élégante mêlant rose, lavande et orange.', 7500, 50, 'femme'),
('Huile Luxe Homme', 'Une fusion envoûtante entre fraîcheur, sensualité et intensité boisée.', 7500, 50, 'homme');

-- Mise à jour des brumes corporelles
CREATE TABLE IF NOT EXISTS body_mists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  volume_ml integer NOT NULL,
  gender text DEFAULT 'unisex',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

INSERT INTO body_mists (name, description, price, volume_ml, gender) VALUES 
('Nayla', 'Une essence éclatante aux agrumes frais et vivifiants.', 8000, 100, 'femme'),
('Selma', 'Un parfum délicat et séduisant aux fruits rouges et musc.', 8000, 100, 'femme'),
('Mayssane', 'Une senteur opulente et envoûtante entre Médine, oud et douceur orientale.', 8000, 100, 'femme'),
('Saphira', 'Un voyage sensoriel aux fruits tropicaux, coco et ananas.', 8000, 100, 'femme'),
('Liyana', 'Une fragrance florale élégante mêlant rose, lavande et orange.', 8000, 100, 'femme'),
('Brume Luxe Homme', 'Une fragrance masculine affirmée, puissante et raffinée.', 9000, 100, 'homme');

-- Activer RLS sur la nouvelle table
ALTER TABLE body_mists ENABLE ROW LEVEL SECURITY;

-- Créer les politiques pour body_mists
CREATE POLICY "Allow public read access to body_mists"
  ON body_mists
  FOR SELECT
  TO public
  USING (true);

-- Créer le trigger pour updated_at
CREATE TRIGGER update_body_mists_updated_at
  BEFORE UPDATE ON body_mists
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();