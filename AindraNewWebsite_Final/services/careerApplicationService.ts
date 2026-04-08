import type {
  CareerApplicationPayload,
  CareerApplicationSubmissionResult,
} from '../types/careerApplication';

const CAREER_APPLICATIONS_COLLECTION = 'careerApplications';
const CAREER_APPLICATIONS_FALLBACK_STORAGE_KEY = 'aindra:careerApplications';

const shouldUseFirebaseSubmissions = (): boolean => {
  const env = import.meta.env;

  const isConfigured = Boolean(
    env.VITE_FIREBASE_API_KEY &&
      env.VITE_FIREBASE_AUTH_DOMAIN &&
      env.VITE_FIREBASE_PROJECT_ID &&
      env.VITE_FIREBASE_STORAGE_BUCKET &&
      env.VITE_FIREBASE_APP_ID
  );

  return isConfigured && env.VITE_USE_FIREBASE_CONTENT === 'true';
};

const dynamicImport = async <T>(moduleName: string): Promise<T> => {
  const importer = new Function('moduleName', 'return import(moduleName);') as (
    name: string
  ) => Promise<T>;

  return importer(moduleName);
};

const storeFallbackApplication = (payload: CareerApplicationPayload): void => {
  const record = {
    ...payload,
    createdAt: new Date().toISOString(),
    status: 'new',
    sourcePage: 'careers',
  };

  try {
    const previousRaw = window.localStorage.getItem(CAREER_APPLICATIONS_FALLBACK_STORAGE_KEY);
    const previous = previousRaw ? JSON.parse(previousRaw) : [];
    const next = Array.isArray(previous) ? [...previous, record] : [record];
    window.localStorage.setItem(CAREER_APPLICATIONS_FALLBACK_STORAGE_KEY, JSON.stringify(next));
  } catch (error) {
    console.warn('[CareerApplication] Failed to persist fallback locally.', error);
  }

  console.info('[CareerApplicationFallback] Stored application locally:', record);
};

export const submitCareerApplication = async (
  payload: CareerApplicationPayload
): Promise<CareerApplicationSubmissionResult> => {
  if (!shouldUseFirebaseSubmissions()) {
    storeFallbackApplication(payload);
    return { success: true, mode: 'fallback' };
  }

  try {
    const appModule = await dynamicImport<{
      getApp: () => unknown;
      getApps: () => unknown[];
      initializeApp: (config: Record<string, string | undefined>) => unknown;
    }>('firebase/app');

    const firestoreModule = await dynamicImport<{
      addDoc: (ref: unknown, data: Record<string, unknown>) => Promise<{ id: string }>;
      collection: (db: unknown, collectionName: string) => unknown;
      getFirestore: (app: unknown) => unknown;
      serverTimestamp: () => unknown;
    }>('firebase/firestore');

    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    };

    const app = appModule.getApps().length ? appModule.getApp() : appModule.initializeApp(firebaseConfig);
    const db = firestoreModule.getFirestore(app);

    const docRef = await firestoreModule.addDoc(
      firestoreModule.collection(db, CAREER_APPLICATIONS_COLLECTION),
      {
        ...payload,
        createdAt: firestoreModule.serverTimestamp(),
        status: 'new',
        sourcePage: 'careers',
      }
    );

    return {
      success: true,
      mode: 'firebase',
      id: docRef.id,
    };
  } catch (error) {
    return {
      success: false,
      mode: 'firebase',
      error: error instanceof Error ? error.message : 'Unknown submission error',
    };
  }
};
