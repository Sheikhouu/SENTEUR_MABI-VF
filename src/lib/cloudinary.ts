import { supabase } from './supabase';

export async function fetchAndStoreCloudinaryImages() {
  try {
    // Faire une requête à notre backend Supabase pour synchroniser les images
    const { data, error } = await supabase
      .rpc('sync_cloudinary_images');

    if (error) throw error;

    return { success: true, message: 'Images synchronisées avec succès' };
  } catch (error) {
    console.error('Erreur lors de la synchronisation des images:', error);
    return { success: false, message: 'Erreur lors de la synchronisation des images' };
  }
}