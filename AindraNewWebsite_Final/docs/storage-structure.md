# Firebase Storage Structure (Proposed)

Base path (configurable):
- `public/` (default from `VITE_FIREBASE_STORAGE_BASE_PATH`)

Folders:
- `public/products/`
- `public/solutions/`
- `public/testimonials/`
- `public/partners/`
- `public/spotlight/`
- `public/pages/about/`
- `public/pages/shared/`

Naming rules:
- lowercase kebab-case filenames where possible
- include version suffixes for manual cache busting if needed (`name-v2.png`)
- avoid spaces in newly uploaded files

Recommended metadata:
- `contentType`
- `cacheControl: public,max-age=31536000,immutable` for immutable assets
- optional custom metadata: `alt`, `entityType`, `entityId`
