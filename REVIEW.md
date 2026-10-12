# Site Review & Improvement Plan

Based on two isolated assessments of the live site: Assessment A (design/UX review — Nielsen heuristics, cognitive load, persona walkthroughs) and Assessment B (deterministic detector + keyboard/accessibility evidence, run independently so it couldn't just agree with A). Both are complete; this is the combined picture.

**Heuristic score: 21/32 (66%) — Acceptable.** Good foundation, with one P0 that caps everything else.

**Also verified clean by Assessment B:** zero detector findings, zero console errors/warnings on any of the three locales, all form fields correctly labeled and typed, all 5 images have proper alt text, heading hierarchy is otherwise correct, and focus rings are visible and consistent everywhere on desktop. The site is mechanically solid — the issues below are real but specific, not systemic.

## The headline finding

The single biggest risk to this site isn't a design problem — it's that **the one action that actually converts a visitor into a lead is unreliable.** The contact form doesn't submit anywhere; it fires a `mailto:` redirect with no success state, no error state, and no draft recovery if the page refreshes. Everything upstream of that (the gallery, the portfolio, the pricing) is working to build trust toward a moment that then silently fails for an unknown fraction of visitors (anyone without a desktop mail client configured, which is most Gmail/Outlook-in-browser users). Fix this before anything else — it's not a polish item, it's the floor.

## Priority issues, in order

### P0 — ✅ Fixed

**Contact form has no real backend, no confirmation, no recovery**
- Fixed: `src/components/Guestbook.tsx` now POSTs to a real API route (`src/app/api/contact/route.ts`) backed by Resend, with in-page sending/success/error states and localStorage draft-safety (verified: refreshing mid-fill restores the draft). The `mailto:` link stays visible as a fallback.
- **Action needed from you:** this can't send real email until it has a Resend API key. Sign up free at resend.com (no card required) using `mohamedkhalil.brik@aucegypt.edu` as your account email — Resend's sandbox sender only delivers to the address on the account. Then add `RESEND_API_KEY` to `.env.local` (see `.env.example`) for local dev, and to the project's Environment Variables in Vercel for production. Until then the form fails gracefully with the in-page error message rather than pretending to work.

### P1 — Fix soon / ✅ Fixed

**Real clients are under-sold as proof** *(still open)*
- All 4 projects (Jin Restaurant, SAIN, Au Vieux Strasbourg, Liberating Knowledge) only ever show "Role" on their placard — `stack` and `year` are `null` in `src/data/projects.ts` for every one of them. These are real, known facts, not fabrication — backfill them.
- Add one outcome line per project where possible ("replaced a static menu PDF with online reservations," etc.) — a factual description of what changed, not an invented metric.

**Mobile menu has no focus trap — keyboard users get lost inside it** ✅ Fixed
- `MobileMenu.tsx` now focuses the first link on open, traps Tab/Shift+Tab inside the panel, and returns focus to the toggle button on close — verified by scripted keyboard-navigation test (Tab cycles Work→Services→Pricing→About→Contact→wraps; Escape closes and refocuses the toggle).

**Inactive locale-switcher buttons fail contrast (confirmed ~3.4:1, below AA 4.5:1)** ✅ Fixed
- `LocaleSwitcher.tsx` now uses `text-ink-soft` instead of `opacity-50` for inactive locales — the same token already proven elsewhere on the site at ~8.8:1 contrast, well above AA.

### P2 — Next pass

**Pricing tier names and the maintenance add-on use inconsistent heading markup**
- The three tier names (Starter/Pro/Custom) render as plain `<span>`; the add-on directly below renders its name as `<h3>`. Two structurally identical pieces of content (a priced offering with a name) are marked up differently.
- Fix: make the tier names `<h3>` too, matching the add-on.

**~~"Liberating Knowledge" project room screenshot appeared blank in testing~~ — resolved, not a bug**
- Confirmed via live testing: the image loads correctly (`naturalWidth: 895`, `naturalHeight: 430`) once scrolled into view. It's a non-priority `next/image` (only the first project gets `priority`), so it lazy-loads — the earlier full-page screenshot just captured mid-decode. No fix needed.

**Services list dilutes the proven specialty**
- The 6-item list (web dev, e-commerce, accounting software, AI automations, CRM, HR) gives all 6 equal visual weight, but only the first two have any visible proof (4 live projects). To a skeptical buyer this can read as overreach rather than range.
- Either visually subordinate the 4 unproven categories under the 2 proven ones, or compress them into a single "also available on request" line.

**Mobile friction: no persistent CTA, undersized touch targets, iOS zoom-on-focus**
- No sticky CTA exists once the Hero scrolls out of view, on a page that runs roughly 9,000px tall on mobile.
- The hamburger button and locale switcher both sit under the 44×44pt minimum touch target, right next to each other.
- Contact-form inputs inherit 14px text, below the 16px threshold that prevents iOS Safari's auto-zoom-on-focus.

## Minor / worth a look

- "LinkedIn" is hardcoded in English in `Hero.tsx` and `Guestbook.tsx` instead of pulled from `messages/*.json` — a small inconsistency on a site whose own principle is "multilingual from the start."
- The public contact email is a `.edu` address — a mismatch with "design quality is the differentiator" positioning for paid client work. Worth considering a dedicated professional address.
- "Most booked" on the Pro pricing tier is an unverifiable claim with no backing — mild tension with the site's own "never fabricate proof" principle.
- No skip-to-content link; keyboard users tab through all 5 nav items + locale switcher + hamburger before reaching the Hero's own CTAs every time.
- The dashed-border "empty frame" placeholder — a named, intentional device in `DESIGN.md` — has zero live occurrences right now, since all 4 project slots are filled. Untested in production; worth a quick visual check next time a slot is actually empty.

---

## Three features to add to increase sales

Ranked by expected impact on conversion, assuming the P0 fix above ships first — a feature added on top of a broken contact form just raises more traffic into the same leak.

### 1. A visible "how we work together" process section

Right now a first-time buyer who clicks "Book a call" has no idea what happens next — is it a sales pitch? A scoping call? Do they get a quote on the spot? For someone who's never hired a freelancer before, that uncertainty is a real reason to hesitate before clicking. A short, concrete sequence — e.g. *Call → Fixed-scope quote → Build → Launch & handoff* — removes that ambiguity and directly counters the "final cost confirmed after a call" line in Pricing, which otherwise reads as a hedge rather than a process.

### 2. Real proof, surfaced harder: outcomes + (once available) testimonials

The site already has the strongest trust asset a freelance portfolio can have — four real, operating, named businesses — and currently spends it on a one-line caption each. Backfilling stack/year (P1 above) is the free first step; the bigger lever is a short quote or outcome line per project once you can get one from a client (even "went from no online presence to a live reservations site in under a month" counts). Proof is what turns "this looks nice" into "I trust this person with my money."

### 3. A persistent way to act, especially on mobile

On a single continuous scroll this long, a visitor who gets convinced halfway through (say, partway through About) currently has to scroll a long way back down, or hunt for the hamburger menu, to actually do anything about it. A slim sticky CTA bar that appears once the Hero scrolls out of view (desktop: a small fixed corner button; mobile: a bottom bar) catches intent at the moment it happens instead of hoping it survives a few thousand more pixels of scrolling.

---

## Suggested order of operations

1. ~~Contact form backend + success/error state (P0)~~ — done, needs a Resend API key to go live (see above)
2. ~~Mobile menu focus trap + locale-switcher contrast fix (P1)~~ — done
3. Backfill project stack/year (P1) — still open
4. Add the "how we work" process section + persistent CTA (features #1 and #3)
5. Compress/regroup the Services list, fix pricing heading markup (P2)
6. Mobile touch-target and input-size fixes (P2)
7. Testimonials once real ones exist (feature #2, ongoing)
