import type { ContentFetchResult } from '../types/cms';

interface ResolveContentOptions<T> {
  fetchRemote: () => Promise<T[] | null>;
  fallback: T[];
}

export const resolveContentWithFallback = async <T>(
  options: ResolveContentOptions<T>
): Promise<ContentFetchResult<T>> => {
  const { fetchRemote, fallback } = options;

  try {
    const remoteItems = await fetchRemote();
    if (remoteItems && remoteItems.length > 0) {
      return { items: remoteItems, source: 'firebase' };
    }
    return { items: fallback, source: 'fallback' };
  } catch (error) {
    return {
      items: fallback,
      source: 'fallback',
      error: error instanceof Error ? error.message : 'Unknown Firebase content error',
    };
  }
};
