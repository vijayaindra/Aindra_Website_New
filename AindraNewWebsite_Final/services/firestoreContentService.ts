import { collection, getDocs, orderBy, query, type DocumentData } from 'firebase/firestore';
import { getFirebaseServices } from '../config/firebase';

const toTypedRecord = <T>(id: string, data: DocumentData): T => {
  return { id, ...data } as T;
};

export const fetchCollectionFromFirestore = async <T>(collectionName: string): Promise<T[] | null> => {
  const firebase = getFirebaseServices();
  if (!firebase) {
    return null;
  }

  const ref = collection(firebase.db, collectionName);
  const q = query(ref, orderBy('order', 'asc'));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return [];
  }

  return snapshot.docs.map((doc) => toTypedRecord<T>(doc.id, doc.data()));
};
