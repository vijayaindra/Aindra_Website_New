export type ContentStatus = 'draft' | 'published' | 'archived';

export interface BaseContentRecord {
  id: string;
  slug: string;
  title: string;
  status: ContentStatus;
  order: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface MediaAsset {
  url: string;
  storagePath?: string;
  alt?: string;
  mimeType?: string;
  width?: number;
  height?: number;
}

export interface TestimonialRecord extends BaseContentRecord {
  quote: string;
  personName: string;
  personRole: string;
  personImage?: MediaAsset;
}

export interface PartnerRecord extends BaseContentRecord {
  logo: MediaAsset;
  websiteUrl?: string;
}

export interface SpotlightArticleRecord extends BaseContentRecord {
  excerpt: string;
  image?: MediaAsset;
  articleUrl: string;
  category?: string;
  publishedOn?: string;
}

export interface ProductRecord extends BaseContentRecord {
  productKey: 'intellistain' | 'visionx' | 'astra' | 'clustr';
  summary: string;
  heroImage?: MediaAsset;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface SolutionRecord extends BaseContentRecord {
  solutionKey: 'cervastra' | 'lungastra' | 'prosastra' | 'thyroastra';
  description: string;
  image?: MediaAsset;
}

export interface ContentFetchResult<T> {
  items: T[];
  source: 'firebase' | 'fallback';
  error?: string;
}
