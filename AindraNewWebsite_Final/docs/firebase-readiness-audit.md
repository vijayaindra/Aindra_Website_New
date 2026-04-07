# Firebase Readiness Audit (Safe Mode)

## Current Static Content Inventory

### Home page sections
- `components/ProductsShowcaseSection.tsx`: hardcoded product cards, descriptions, CTA labels, product media references.
- `components/SolutionsShowcase.tsx`: hardcoded solution names, descriptions, order, and images.
- `components/TestimonialsSection.tsx`: hardcoded testimonial entries + imported local assets.
- `components/TrustedInstitutionsSection.tsx`: hardcoded partner logo list + imported local assets.
- `components/SpotlightSection.tsx`: hardcoded article cards + imported blog images.
- `components/TrustAndMarketingSection.tsx`: hardcoded media logo list.

### Internal page sections
- `pages/*/components/BenefitsSection.tsx`: product-specific benefit and feature arrays (some currently Unsplash-based).
- `pages/*/components/FAQSection.tsx`: static FAQ arrays.
- `pages/about/components/*`: static credibility timeline/team/impact style arrays.
- `pages/*/components/FeaturesCarousel.tsx`: static feature arrays.

### Assets currently local
- `assets/ProductImages/*`
- `assets/TrustedByLogo/*`
- `assets/testimonials/*`
- `assets/spotlight/*`
- `assets/media/*`

## What Can Move to Firestore Later
- Testimonials (text + role + ordering + image URL/path).
- Partners/Institution logos (name + logo + sort order).
- Spotlight articles (title, excerpt, link, image).
- Products + solutions copy blocks (title, summary, CTA, image).
- FAQs and feature carousel content.

## What Can Stay Static
- Pure layout components and visual shells.
- SVG/icon micro UI that is design-only.
- Navigation route maps and static fallback defaults.
- Non-content utility constants (spacing, animation timings, layout helpers).

## Migration Safety Rule
- Existing static arrays remain source-of-truth until feature flags and Firebase content are explicitly enabled.
- No current component behavior should depend on Firebase availability.
