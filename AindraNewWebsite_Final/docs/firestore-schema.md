# Firestore Schema (Proposed)

## Collections

### `testimonials`
Document shape:
```json
{
  "slug": "dr-vani-ravikumar",
  "title": "Dr.Vani Ravikumar",
  "personName": "Dr.Vani Ravikumar",
  "personRole": "Senior Consultant Pathologist",
  "quote": "....",
  "personImage": {
    "url": "https://...",
    "storagePath": "public/testimonials/dr-vani.jpg",
    "alt": "Dr. Vani portrait"
  },
  "status": "published",
  "order": 1,
  "createdAt": "ISO-8601",
  "updatedAt": "ISO-8601"
}
```

### `partners`
```json
{
  "slug": "dr-mufti",
  "title": "Dr Mufti",
  "logo": {
    "url": "https://...",
    "storagePath": "public/partners/dr-mufti.png",
    "alt": "Dr Mufti logo"
  },
  "websiteUrl": "https://...",
  "status": "published",
  "order": 8
}
```

### `spotlightArticles`
```json
{
  "slug": "ai-in-digital-pathology",
  "title": "AI in Digital Pathology",
  "excerpt": "....",
  "articleUrl": "https://...",
  "image": {
    "url": "https://...",
    "storagePath": "public/spotlight/blog-ai-digital-pathology.png"
  },
  "category": "Insights",
  "publishedOn": "2026-04-07",
  "status": "published",
  "order": 2
}
```

### `products`
```json
{
  "slug": "intellistain",
  "title": "Intellistain",
  "productKey": "intellistain",
  "summary": "....",
  "heroImage": {
    "url": "https://...",
    "storagePath": "public/products/intellistain.png"
  },
  "ctaLabel": "Explore Intellistain",
  "ctaHref": "#/intellistain",
  "status": "published",
  "order": 1
}
```

### `solutions`
```json
{
  "slug": "cervastra",
  "title": "CervAstra",
  "solutionKey": "cervastra",
  "description": "....",
  "image": {
    "url": "https://...",
    "storagePath": "public/solutions/cervastra.png"
  },
  "status": "published",
  "order": 1
}
```

## Recommended Security/Validation Concepts
- Only `status: published` records are read by public UI.
- Enforce `order` as number and required for all sortable collections.
- Keep image metadata co-located with content docs for easy hydration in UI.
