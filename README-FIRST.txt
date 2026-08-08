READY COAST PREP — MAX POSITION RELEASE

THIS PACKAGE SUPERSEDES ALL EARLIER AUDIT/SEO/UX ZIP FILES FROM THIS WORK SESSION.
DO NOT STACK THE OLDER PACKAGES ON TOP OF IT.

WHAT IS INCLUDED

A. FOUR-PASS HOMEPAGE / SITE UPDATE
- Human click-path hierarchy
- Visual cleanup to reduce generic AI/SaaS presentation
- Editorial cleanup
- Search Console-driven SEO improvements
- www -> non-www consolidation
- Canonicals, metadata, sitemap and internal-link improvements
- /guides hub

B. NEW DIFFERENTIATING TOOLS
- /emergency-water-calculator
- /emergency-food-planner
- /preparedness-pack
These are intentionally practical, indexable, shareable assets rather than more generic
articles. The water tool distinguishes the official people-only baseline from optional
planning allowances instead of presenting an invented number as official guidance. The
food tool plans meal coverage rather than pretending a simple website form can prescribe
individual nutritional requirements.

C. BEHAVIOR MEASUREMENT
- app/components/SiteAnalytics.tsx
- Adds GA4-compatible events if the existing site already exposes gtag:
  readiness_start, plan_open, guide_open, print_action, install_app_click,
  official_resource_click
- No new Analytics ID is invented or embedded.

D. LAUNCH / AUTHORITY MATERIALS
- BRAND-LAUNCH-KIT.txt
- POST-DEPLOY-ACTIONS.txt

INSTALL

1. Extract this ZIP OUTSIDE:
   C:\Users\conno\OneDrive\Documents\readycoastprep--next-LIVE

2. Copy everything inside COPY-INTO-APP into:
   C:\Users\conno\OneDrive\Documents\readycoastprep--next-LIVE\app
   Choose Replace when Windows asks.

3. Copy everything inside COPY-INTO-PROJECT-ROOT into:
   C:\Users\conno\OneDrive\Documents\readycoastprep--next-LIVE
   Choose Replace when asked.

4. From PowerShell in the LIVE project root:

   powershell -ExecutionPolicy Bypass -File .\apply-human-update.ps1

5. Validate the production build:

   powershell -ExecutionPolicy Bypass -File .\verify-release.ps1

6. If the build passes:

   npm run dev

VISUAL CHECK BEFORE COMMITTING
- Homepage hierarchy is clear on desktop and phone.
- Existing readiness setup still opens and works.
- Existing inventory and personalized plan still work.
- /guides works.
- /emergency-water-calculator works.
- /emergency-food-planner works.
- /preparedness-pack prints cleanly.
- Existing hurricane, water, power, renter and communication pages work.
- Logo/favicon remain correct.

ROLLBACK HOMEPAGE ONLY
Copy-Item .\app\page.tsx.before-four-pass-audit.bak .\app\page.tsx -Force

DO NOT COMMIT UNTIL THE PRODUCTION BUILD PASSES AND YOU HAVE LOOKED AT THE LOCAL VERSION.
