import { getDownloadURL, ref } from 'firebase/storage';
import { getFirebaseServices } from '../config/firebase';

export const resolveStoragePathToUrl = async (storagePath: string): Promise<string | null> => {
  const firebase = getFirebaseServices();
  if (!firebase) {
    return null;
  }

  const fileRef = ref(firebase.storage, storagePath);
  return getDownloadURL(fileRef);
};

export const buildStoragePath = (folder: string, fileName: string): string => {
  const base = import.meta.env.VITE_FIREBASE_STORAGE_BASE_PATH ?? 'public';
  return `${base}/${folder}/${fileName}`;
};
