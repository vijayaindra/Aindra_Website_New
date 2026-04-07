export const CMS_COLLECTIONS = {
  testimonials: 'testimonials',
  partners: 'partners',
  spotlightArticles: 'spotlightArticles',
  products: 'products',
  solutions: 'solutions',
} as const;

export type CmsCollectionName = (typeof CMS_COLLECTIONS)[keyof typeof CMS_COLLECTIONS];
