import { useEffect, useState } from 'react';
import type { ContentFetchResult } from '../types/cms';
import { fetchCollectionFromFirestore } from '../services/firestoreContentService';
import { resolveContentWithFallback } from '../services/contentResolver';

interface UseOptionalContentParams<T> {
  collectionName: string;
  fallback: T[];
}

interface UseOptionalContentState<T> extends ContentFetchResult<T> {
  loading: boolean;
}

export const useOptionalContent = <T>({
  collectionName,
  fallback,
}: UseOptionalContentParams<T>): UseOptionalContentState<T> => {
  const [state, setState] = useState<UseOptionalContentState<T>>({
    items: fallback,
    source: 'fallback',
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      const result = await resolveContentWithFallback<T>({
        fetchRemote: () => fetchCollectionFromFirestore<T>(collectionName),
        fallback,
      });

      if (!isMounted) return;
      setState({ ...result, loading: false });
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [collectionName, fallback]);

  return state;
};
