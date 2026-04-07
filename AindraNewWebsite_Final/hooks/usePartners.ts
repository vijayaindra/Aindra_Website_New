import { CMS_COLLECTIONS } from '../services/cmsCollections';
import type { PartnerRecord } from '../types/cms';
import { useOptionalContent } from './useOptionalContent';

export const usePartners = (fallback: PartnerRecord[]) => {
  return useOptionalContent<PartnerRecord>({
    collectionName: CMS_COLLECTIONS.partners,
    fallback,
  });
};
