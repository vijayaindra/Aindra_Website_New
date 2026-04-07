# Migration Plan (Ready Later, Not Forced Now)

## Current State
- UI is fully static and local-first.
- Firebase scaffolding exists but is not wired into page components.
- Fallback behavior is the default path.

## Step-by-step Migration (when you decide)
1. Create Firebase project and enable Firestore + Storage.
2. Fill `.env` using `.env.example`.
3. Set `VITE_USE_FIREBASE_CONTENT=true`.
4. Seed Firestore collections (`testimonials`, `partners`, `spotlightArticles`, `products`, `solutions`).
5. Upload media to Storage under the planned folder structure.
6. Start connecting one section at a time:
   - testimonials first
   - partners next
   - spotlight next
7. Keep fallback arrays in place until each section is validated.
8. Add admin-only write workflows after read-only content is stable.

## Admin Panel Architecture (future, not implemented)
- Frontend: React admin app (separate route/app).
- Auth: Firebase Auth (email/password + optional SSO).
- Roles: custom claims (`admin`, `editor`).
- Data flow:
  - Firestore for records
  - Storage for media uploads
  - Cloud Functions (optional) for moderation/workflows.

## Rollout strategy
- Feature-flag each migrated section independently.
- Keep rollback simple: set `VITE_USE_FIREBASE_CONTENT=false`.
- Deploy with Hosting preview channels first before production release.
