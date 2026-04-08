import type {
  ContactEnquiryPayload,
  ContactEnquirySubmissionResult,
  ProductSupportEnquiryPayload,
} from '../types/contactEnquiry';

const CONTACT_ENQUIRIES_COLLECTION = 'contactEnquiries';
const PRODUCT_SUPPORT_COLLECTION = 'productSupportEnquiries';
const CONTACT_FALLBACK_STORAGE_KEY = 'aindra:contactEnquiries';
const PRODUCT_SUPPORT_FALLBACK_STORAGE_KEY = 'aindra:productSupportEnquiries';

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

const storeFallbackEnquiry = (
  payload: Record<string, unknown>,
  storageKey: string,
  collectionName: string
): void => {
  const record = {
    ...payload,
    createdAt: new Date().toISOString(),
    status: 'new',
    sourcePage: 'contact',
  };

  try {
    const previousRaw = window.localStorage.getItem(storageKey);
    const previous = previousRaw ? JSON.parse(previousRaw) : [];
    const next = Array.isArray(previous) ? [...previous, record] : [record];
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  } catch (error) {
    console.warn('[ContactEnquiry] Failed to persist fallback locally.', error);
  }

  console.info(`[ContactEnquiryFallback:${collectionName}] Stored enquiry locally:`, record);
};

const submitEnquiry = async (
  payload: Record<string, unknown>,
  collectionName: string,
  fallbackStorageKey: string
): Promise<ContactEnquirySubmissionResult> => {
  if (!shouldUseFirebaseSubmissions()) {
    storeFallbackEnquiry(payload, fallbackStorageKey, collectionName);
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

    const docRef = await firestoreModule.addDoc(firestoreModule.collection(db, collectionName), {
      ...payload,
      createdAt: firestoreModule.serverTimestamp(),
      status: 'new',
      sourcePage: 'contact',
    });

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

export const submitContactEnquiry = async (
  payload: ContactEnquiryPayload
): Promise<ContactEnquirySubmissionResult> => {
  return submitEnquiry(payload, CONTACT_ENQUIRIES_COLLECTION, CONTACT_FALLBACK_STORAGE_KEY);
};

export const submitProductSupportEnquiry = async (
  payload: ProductSupportEnquiryPayload
): Promise<ContactEnquirySubmissionResult> => {
  return submitEnquiry(payload, PRODUCT_SUPPORT_COLLECTION, PRODUCT_SUPPORT_FALLBACK_STORAGE_KEY);
};
