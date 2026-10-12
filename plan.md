# Freelance Portfolio Site — Plan

## Goal
Personal site to win new freelance clients by showcasing past web projects and making it easy to book a call or get in touch.

## Tech Stack
- **Framework:** Next.js (React)
- **Hosting:** Vercel (free tier, zero-config for Next.js)
- **Source control:** GitHub (account already exists)

## Brand
- **Name displayed:** Mohamed Khalil Brik (personal brand, not a business name)
- **Services offered:**
  - Web development (custom sites)
  - E-commerce sites
  - Accounting software
  - AI automations
  - CRM systems
  - HR systems
- **Visual style:** Bold & colorful
- **Palette/fonts:** To be proposed by Claude (no existing brand colors/logo yet)

## Site Structure
1. **Home / Hero** — pitch, intro, clear CTA (must-have)
2. **About Me** — background, skills, story
3. **Portfolio / Projects** — must-have, 3-5 projects at launch
4. **Services & Pricing** — web dev + e-commerce offerings, how pricing works
5. **Testimonials** — client quotes (if available, else placeholder/skip until ready)
6. **Contact** — must-have
   - Calendar booking link (Calendly — user already has a link, need the URL)
   - Form with email delivery (needs a form service, e.g. Resend or Formspree)
7. **Resume/CV download** — downloadable PDF link

## Portfolio Content
- 3-5 projects at launch
- Each project has: live link + screenshot(s) — assets are ready to pull from
- Content status: partially ready overall — descriptions/case-study copy may still need drafting per project

## Deployment Plan
1. Scaffold Next.js app locally
2. Push to GitHub (existing account)
3. Connect repo to Vercel, deploy to free subdomain (no custom domain yet)
4. Revisit custom domain later if desired

## Status
Home page built and shipped (Impeccable "Gallery Opening" direction — see DESIGN.md). Code pushed to GitHub: https://github.com/khalilbrikTN/MKB_Freelance (public). Vercel import in progress. 7/7 project slots filled with real content: Jin Restaurant, SAIN, Au Vieux Strasbourg, Liberating Knowledge, InvoiceIQ, LMS (Teacher & Student Portal — 6-screenshot carousel with arrows + auto-advance), Düm / From U Menighin (neighborhood bar, Genoa). Bio written from resume. Contact room fully wired (Calendly, email, LinkedIn, working form backend via Resend). Pricing section added (3 tiers, EUR, + optional €40/mo maintenance). Real portrait added to hero. Services expanded to 6 items (web dev, e-commerce, accounting software, AI automations, CRM, HR systems). Floating WhatsApp button (+39 352 228 2361) added site-wide. Palette extended to 7 accent colors (added Deep Teal, Indigo Velvet).

## Open Items / Info Still Needed
- [x] Calendly booking URL — wired in `src/components/Guestbook.tsx`
- [x] Contact email (`mohamedkhalil.brik@aucegypt.edu`) + LinkedIn — wired in `src/components/Guestbook.tsx`
- [x] 3 real projects with live links + screenshots (Jin Restaurant, SAIN, Au Vieux Strasbourg) — room for 1-2 more if desired
- [x] Bio/About Me copy (from resume, all 3 locales)
- [x] Pushed to GitHub (public repo)
- [x] Services & pricing — 3-tier pricing section added (`src/data/pricing.ts`): Starter €450, Pro €950, Custom/E-commerce quote-based. **These are Claude-suggested starting numbers for the European market, not numbers you gave — review and adjust in `src/data/pricing.ts` before treating them as final.**
- [x] Contact form actually sends email (Resend, verified working)
- [x] InvoiceIQ + LMS projects added (no live links — internal/product builds)
- [x] Düm / From U Menighin project added (live link: https://bar-da-u-menighin.vercel.app/)
- [x] WhatsApp floating button
- [ ] Project stack/year details (optional — currently only "role" is filled in per project)
- [ ] Testimonials — section intentionally omitted until real quotes exist
- [ ] Resume/CV file (PDF) to link
- [ ] Reaction to the "Gallery Opening" visual direction already shipped (see screenshots / live preview)

## Next Steps
1. Finish Vercel import (vercel.com/new → import MKB_Freelance → Deploy)
2. Review/adjust the suggested pricing numbers
3. Add testimonials once real ones exist
4. Add resume download when ready
