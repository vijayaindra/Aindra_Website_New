import { CMS_COLLECTIONS } from '../services/cmsCollections';
import type { TestimonialRecord } from '../types/cms';
import { useOptionalContent } from './useOptionalContent';

export const useTestimonials = (fallback: TestimonialRecord[]) => {
  return useOptionalContent<TestimonialRecord>({
    collectionName: CMS_COLLECTIONS.testimonials,
    fallback,
  });
};
