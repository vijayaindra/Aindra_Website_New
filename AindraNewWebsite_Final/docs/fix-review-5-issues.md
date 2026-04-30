# Website Fix Review - 5 Issue Resolution

Date: 2026-04-30
Project: `AindraNewWebsite_Final`

## Summary
All 5 reported issues were fixed in code and verified with a successful production build.

## 1) Non-functional CTA Buttons
### Fix
Converted CTA `button` elements with no handlers into actionable navigation links.

### Updated files
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/components/TrustAndMarketingSection.tsx`
  - `View Validation Data` -> `#/about#credibility`
  - `Clinical Publications` -> `#/about#credibility`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/clustr/components/BenefitsSection.tsx`
  - `Explore Clustr Platform` -> `#/contact`

## 2) Product Tab Fallback Showing "content coming soon..."
### Fix
Removed production placeholder fallback and safely defaulted to `BenefitsSection` when tab state is unexpected.

### Updated files
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/visionx/App.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/intellistain/App.tsx`

## 3) External Image URL Dependency (Flagged Areas)
### Fix
Replaced flagged external URLs with local bundled assets in the specified components.

### Updated files
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/components/TrustAndMarketingSection.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/components/WorkflowSection.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/visionx/components/BenefitsSection.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/intellistain/components/BenefitsSection.tsx`

## 4) Performance Risk from Heavy Images
### Fix
Reduced payload of high-impact visuals using optimized replacements and lighter variants.

### Updated files/assets
- Astra hero switched to lighter thumbnail:
  - `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/astra/components/Hero.tsx`
- Clustr hero switched to optimized WebP:
  - `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/clustr/components/Hero.tsx`
  - New asset: `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/assets/ProductImages/Clustr-optimized.webp`
- About Team heavy image optimized + async/lazy decode:
  - `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/about/components/TeamSection.tsx`
  - New asset: `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/assets/Aindra_team/Harshitha-optimized.webp`

## 5) Footer LinkedIn Link Pointing to Generic Root
### Fix
Updated all footer LinkedIn links to the company page:
`https://www.linkedin.com/company/aindra-systems/`

### Updated files
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/components/Footer.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/about/components/Footer.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/astra/components/Footer.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/careers/components/Footer.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/clustr/components/Footer.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/contact/components/Footer.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/intellistain/components/Footer.tsx`
- `/home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final/pages/visionx/components/Footer.tsx`

## Verification
- Build command run:
  - `npm -C /home/aindra/Documents/Aindra_Website/AindraNewWebsite_Final run build`
- Result:
  - Success (no compile/type errors)

## Notes
- This pass addresses the 5 explicitly reported issues fully.
- A future hardening pass can remove remaining non-flagged external image URLs across other sections for complete self-hosted visual assets.
