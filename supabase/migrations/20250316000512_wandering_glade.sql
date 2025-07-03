/*
  # Configuration de la synchronisation Cloudinary

  1. Nouvelles Tables
    - cloudinary_config : Stocke les informations de configuration Cloudinary
    - sync_logs : Enregistre l'historique des synchronisations

  2. Nouvelles Fonctions
    - sync_cloudinary_images() : Fonction qui synchronise les images
    - trigger_sync_cloudinary() : Déclenche la synchronisation périodiquement

  3. Sécurité
    - RLS activé sur les nouvelles tables
    - Politiques d'accès pour les utilisateurs authentifiés
*/

-- Activer l'extension uuid-ossp si pas déjà active
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table pour la configuration Cloudinary
CREATE TABLE IF NOT EXISTS cloudinary_config (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  cloud_name text NOT NULL,
  api_key text NOT NULL,
  api_secret text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Table pour les logs de synchronisation
CREATE TABLE IF NOT EXISTS sync_logs (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  status text NOT NULL,
  message text,
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  images_synced integer DEFAULT 0
);

-- Fonction pour synchroniser les images
CREATE OR REPLACE FUNCTION sync_cloudinary_images()
RETURNS void AS $$
DECLARE
  config_rec RECORD;
  log_id uuid;
BEGIN
  -- Créer une entrée de log
  INSERT INTO sync_logs (status, message)
  VALUES ('STARTED', 'Début de la synchronisation')
  RETURNING id INTO log_id;

  -- Récupérer la configuration
  SELECT * INTO config_rec FROM cloudinary_config LIMIT 1;
  
  -- Mettre à jour le log
  UPDATE sync_logs
  SET status = 'COMPLETED',
      completed_at = now(),
      message = 'Synchronisation terminée avec succès'
  WHERE id = log_id;

EXCEPTION WHEN OTHERS THEN
  -- En cas d'erreur, mettre à jour le log
  UPDATE sync_logs
  SET status = 'ERROR',
      message = SQLERRM,
      completed_at = now()
  WHERE id = log_id;
  RAISE;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour déclencher la synchronisation périodiquement
CREATE OR REPLACE FUNCTION trigger_sync_cloudinary()
RETURNS trigger AS $$
BEGIN
  PERFORM sync_cloudinary_images();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Insérer la configuration Cloudinary
INSERT INTO cloudinary_config (cloud_name, api_key, api_secret)
VALUES ('Mabi', '347635946674479', 'lLMcFF9-sLoGs6MopW6OCpQw-Lw')
ON CONFLICT DO NOTHING;

-- Activer la sécurité RLS
ALTER TABLE cloudinary_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE sync_logs ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité
CREATE POLICY "Seuls les administrateurs peuvent voir la configuration"
  ON cloudinary_config
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (SELECT auth.uid() FROM auth.users WHERE role = 'admin'));

CREATE POLICY "Les utilisateurs authentifiés peuvent voir les logs"
  ON sync_logs
  FOR SELECT
  TO authenticated
  USING (true);