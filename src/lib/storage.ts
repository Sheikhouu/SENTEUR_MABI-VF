import { supabase } from './supabase';

export async function uploadImage(file: File, path: string): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('media')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

export async function deleteImage(path: string): Promise<boolean> {
  try {
    const { error } = await supabase.storage
      .from('media')
      .remove([path]);

    if (error) {
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
}

export function getPublicUrl(path: string): string {
  const { data: { publicUrl } } = supabase.storage
    .from('media')
    .getPublicUrl(path);
  
  return publicUrl;
}