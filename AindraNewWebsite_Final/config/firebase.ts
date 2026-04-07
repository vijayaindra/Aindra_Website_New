import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

export interface FirebaseServices {
  app: FirebaseApp;
  db: Firestore;
  storage: FirebaseStorage;
  auth: Auth;
}

export interface FirebasePublicConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebasePublicConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const isFirebaseConfigured = (): boolean => {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.authDomain &&
      firebaseConfig.projectId &&
      firebaseConfig.storageBucket &&
      firebaseConfig.appId
  );
};

export const shouldUseFirebaseContent = (): boolean => {
  return import.meta.env.VITE_USE_FIREBASE_CONTENT === 'true';
};

export const getFirebaseServices = (): FirebaseServices | null => {
  if (!isFirebaseConfigured() || !shouldUseFirebaseContent()) {
    return null;
  }

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  return {
    app,
    db: getFirestore(app),
    storage: getStorage(app),
    auth: getAuth(app),
  };
};

export { firebaseConfig };
