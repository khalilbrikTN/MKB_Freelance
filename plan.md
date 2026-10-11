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
Home page built and shipped (Impeccable "Gallery Opening" direction — see DESIGN.md). Live locally at `localhost:3000/en` (`/fr`, `/it`). 3/3 project slots filled with real content: Jin Restaurant, SAIN, Au Vieux Strasbourg. Bio written from resume. Contact room fully wired (Calendly, email, LinkedIn, form). Still not deployed.

## Open Items / Info Still Needed
- [x] Calendly booking URL — wired in `src/components/Guestbook.tsx`
- [x] Contact email (`mohamedkhalil.brik@aucegypt.edu`) + LinkedIn — wired in `src/components/Guestbook.tsx`
- [x] 3 real projects with live links + screenshots (Jin Restaurant, SAIN, Au Vieux Strasbourg) — room for 1-2 more if desired
- [x] Bio/About Me copy (from resume, all 3 locales)
- [ ] Project stack/year details (optional — currently only "role" is filled in per project)
- [ ] Services & pricing details (packages vs hourly, rough rates) — currently just lists the two service types, no pricing
- [ ] Testimonials — section intentionally omitted until real quotes exist
- [ ] Resume/CV file (PDF) to link
- [ ] Reaction to the "Gallery Opening" visual direction already shipped (see screenshots / live preview)

## Next Steps
1. Push to GitHub, connect to Vercel, deploy to a free subdomain
2. Add pricing to Services, and a resume download, when ready
3. Add testimonials once real ones exist
