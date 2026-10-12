---
name: Mohamed Khalil Brik — Freelance Portfolio
description: A gallery-opening portfolio where each project is a full-bleed saturated room, framed like exhibited artwork.
colors:
  gallery-wall: "#f5f4f1"
  gallery-wall-dim: "#ebe9e4"
  exhibition-ink: "#17140f"
  exhibition-ink-soft: "#4a453d"
  track-light-amber: "#e8a33d"
  catalog-vermillion: "#c23a14"
  cobalt-frame: "#1e4fd8"
  deep-emerald: "#136b43"
  magenta-placard: "#b81f5c"
  bronze-ochre: "#8c5f10"
  deep-teal: "#0f6b66"
  indigo-velvet: "#4d1782"
typography:
  display:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 10vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.15em"
rounded:
  pill: "9999px"
  sm: "2px"
  md: "8px"
  lg: "16px"
spacing:
  room-py: "6rem"
  section-py: "5rem"
  stack-gap: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.gallery-wall}"
    textColor: "{colors.exhibition-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gallery-wall}"
    textColor: "{colors.exhibition-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.gallery-wall}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  input:
    backgroundColor: "{colors.gallery-wall}"
    textColor: "{colors.gallery-wall}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: Mohamed Khalil Brik — Freelance Portfolio

## Overview

**Creative North Star: "The Gallery Opening"**

The site is an exhibition walk, not a sales funnel. One framed project commands the full viewport at a time, each committed to its own saturated accent color at section scale — color does real work here, never trim. The visitor "walks" from an opening-night title wall through a sequence of lit rooms into a dark closing guestbook, the way a gallery opening actually moves a guest through space.

This world was chosen explicitly against three anti-references: the generic SaaS hero-plus-card-grid template, purple-gradient agency sites, and the dark-mode developer-portfolio default. None of those patterns appear anywhere in the build — no card grids, no gradient hero fills, no code-editor aesthetic. The voice throughout is confident, curated, credible: declarative display type, hairline dividers instead of boxed containers, dashed-border "empty frame" placeholders instead of skeleton loaders.

**Key Characteristics:**
- One saturated accent color per project room, filling the full section background — never used as a small trim or badge.
- Near-white gallery walls with warm amber track-light glow as the only ambient (non-flat) color move.
- Syne for display/wordmark type (idiosyncratic geometric forms, not a generic sans), Inter for body/UI, IBM Plex Mono small-and-tracked for placard metadata.
- Flat by default; the one deliberate shadow is the framed-piece lift under each project screenshot.
- The active accent is a live CSS custom property (`--accent-active`) driven by scroll position, propagating to selection, focus rings, the scrollbar thumb, and the closing CTA.

## Colors

Near-white gallery neutrals carry the frame; seven darkened saturated hues each commit to one full project room; warm amber is reserved for ambient glow only.

### Primary
- **Catalog Vermillion** (#c23a14): Room 1 accent — full-bleed section background behind the first framed project.
- **Cobalt Frame** (#1e4fd8): Room 2 accent — full-bleed section background.
- **Deep Emerald** (#136b43): Room 3 accent — full-bleed section background.
- **Magenta Placard** (#b81f5c): Room 4 accent — full-bleed section background.
- **Bronze Ochre** (#8c5f10): Room 5 accent — full-bleed section background.
- **Deep Teal** (#0f6b66): Room 6 accent — full-bleed section background.
- **Indigo Velvet** (#4d1782): Room 7 accent — full-bleed section background.

### Neutral
- **Gallery Wall** (#f5f4f1): Primary page background; also the framed-piece matte behind each project screenshot.
- **Gallery Wall Dim** (#ebe9e4): Scrollbar track; a slightly recessed wall tone.
- **Exhibition Ink** (#17140f): Primary text color on the gallery wall; nav wordmark; mobile-menu type.
- **Exhibition Ink Soft** (#4a453d): Secondary/body text on the gallery wall (thesis line, nav links, service descriptions, about bio).
- **Track-Light Amber** (#e8a33d): Ambient hero glow only — a blurred radial gradient at the hero's edges. Never used as a flat fill, text color, or UI element; it simulates gallery lighting, not a brand accent.

### Named Rules
**The Full-Room Commitment Rule.** An accent color is applied at full-section scale (the entire room background) or not at all. It never appears as a button fill, badge, link color, or small UI trim outside its own room — the one exception is `--accent-active`, which mirrors the current room's accent into global chrome (selection, focus ring, scrollbar, guestbook CTA) as the visitor scrolls past it.

**The Amber-Is-Ambient Rule.** Track-Light Amber (#e8a33d) only ever appears as a blurred, low-opacity radial glow. It is never a flat background, text color, or button fill — it reads as light, not as a swatch.

## Typography

**Display Font:** Syne (weights 600/700/800), with system-ui, sans-serif fallback
**Body Font:** Inter (variable), with system-ui, sans-serif fallback
**Label/Mono Font:** IBM Plex Mono (weight 500), with ui-monospace, monospace fallback

**Character:** Syne's idiosyncratic geometric letterforms carry exhibition-signage authority at display scale; Inter stays invisible and legible for body copy across English, French, and Italian; Plex Mono, small and letter-spaced, reads as placard/catalog-card labeling wherever metadata (not prose) is being shown.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 10vw, 6rem)`, line-height 0.95, tracking -0.02em): Hero wordmark only.
- **Headline** (700, `clamp(1.75rem, 5vw, 3rem)`/`clamp(2rem, 5vw, 3.5rem)` for project titles, tracking -0.01em): Section headings (Services, About, Guestbook) and per-project titles inside each room.
- **Title** (700, 1.25rem): Service item titles, mobile-menu links at `text-3xl`.
- **Body** (400, 1.125rem, line-height 1.6): Thesis line, project descriptions, service descriptions, about bio. Capped at `max-w-xl`/`max-w-md` (roughly 60–65ch).
- **Label** (500, 0.75rem, tracking 0.15–0.2em, uppercase): Nav wordmark and links, scroll cue, sequence badge ("01 / 03"), placard metadata (role/stack/year), form field labels, locale switcher.

### Named Rules
**The Placard Voice Rule.** Any metadata that is factual-and-brief (role, stack, year, piece number, locale code, form labels) is set in Plex Mono, uppercase, tracked — never in Inter or Syne. This is the one recurring typographic signal that something is a label, not prose.

## Layout

Full-bleed, single-column, vertically sequential. The page has no persistent sidebar or grid — each major section (hero, each project room, services, about, guestbook) is a full-viewport-height or full-width block stacked top to bottom, meant to be walked through via scroll rather than scanned as a grid.

- **Project rooms**: `min-h-screen`, full-width accent background, content centered and capped at `max-w-4xl` (screenshot) / `max-w-3xl` (text block), `px-6 py-24`.
- **Text sections** (Services, About): centered column, `max-w-4xl` / `max-w-3xl`, `px-6`, asymmetric vertical padding (`pt-20 pb-12` scaling to `pt-28 pb-16` at `sm`).
- **Guestbook**: full-width dark room, inner content capped at `max-w-3xl`, heavier padding (`py-28` to `py-36`).
- **Nav**: `fixed` full-width header, `px-6` to `px-10` at `sm`, backdrop-blur over whatever room is scrolled beneath it.
- **Responsive**: single breakpoint in practice (Tailwind `sm`, 640px) — desktop nav links and the inline services row collapse to the portaled full-screen mobile menu and a stacked services list below `sm`. Type sizes are fluid via `clamp()` rather than stepped per breakpoint.
- **Rhythm**: Plex Mono labels and a consistent `gap-6`/`gap-10` stack govern internal spacing inside each room; sections do not share a strict 8px grid, but padding steps (12, 24, 28, 36 in `py-` units) repeat across Services/About/Guestbook.

## Elevation & Depth

Flat by default — gallery walls are flat, and almost every surface in the build (nav, service rows, about, form inputs, buttons) has no shadow at all. The one deliberate shadow is structural: it marks the framed project screenshot as artwork lifted off the wall, not a decorative hover effect.

### Shadow Vocabulary
- **Framed-piece lift** (`box-shadow: 0 30px 60px -15px rgba(0,0,0,0.45)`): Applied only to the white-matte frame around a real project screenshot in `ProjectRoom`. Signals "this is raised off the wall." Never applied to buttons, cards, or any other surface.

### Named Rules
**The One Shadow Rule.** Exactly one shadow exists in the system, and it is reserved for the framed screenshot. If a future surface wants elevation, it borrows this exact value and this exact justification (artwork lifted off a flat wall) rather than introducing a second shadow vocabulary.

## Shapes

Mostly soft, restrained radii and hairline borders; no sharp rectangles, no heavy card borders.

- **Pills** (`rounded-full`): Primary actions — "View live site," "Book a call," the ghost "Send" button. The confident, uncluttered CTA shape throughout.
- **Soft radius** (`rounded-sm`–`rounded-2xl`, roughly 2px–16px): Framed screenshot matte (`rounded-sm` outer, `rounded-[1px]` on the image itself), form inputs (`rounded-lg`), dashed empty-frame placeholders (`rounded-2xl` in project rooms, `rounded-xl` in About).
- **Dashed border**: The sole treatment for unfilled content — `border-dashed border-white/40` (on accent rooms) or `border-dashed border-ink/25` (on the wall), used for placeholder project frames and placeholder bio text. This is the system's only "nothing here yet" device; it never appears on filled content.
- **Hairline dividers**: `divide-y divide-ink/10` / `border-t border-ink/10` in Services — the explicit alternative to a boxed-card list.

## Components

### Buttons
- **Shape:** Pill (`rounded-full`, 9999px).
- **Primary:** Wall-fill (`bg-wall`, `text-ink`), `px-6 py-3`, `text-sm font-medium`. Used for "View live site" inside a project room.
- **Accent-filled:** Same pill shape, filled with the live `var(--accent-active)` and `var(--wall)` text — the Guestbook "Book a call" CTA, the one place outside a room where an accent fills a UI element (because it mirrors whichever room the visitor last passed).
- **Ghost:** Transparent fill, `border border-wall/30` stroke, `text-wall`; hover strengthens the border to `border-wall`. Used for the guestbook form's "Send" submit button.
- **Hover / Focus:** Primary and accent-filled buttons scale to 105% on hover (`transition-transform`); no color shift. Ghost buttons shift border opacity instead of scaling. All buttons inherit the global `:focus-visible` treatment (2px solid outline in `--accent-active`, 3px offset).
- **Disabled:** `aria-disabled` pairs with `pointer-events-none opacity-50` (seen on the Calendly CTA while no URL is configured).

### Inputs / Fields
- **Style:** `rounded-lg` border (`border-wall/30`), translucent fill (`bg-wall/5`), on the dark Guestbook room only — no light-mode input exists yet in the shipped build.
- **Focus:** Border opacity increases to `border-wall/60`; no glow, no background change.
- **Label:** Every field is preceded by a Plex Mono uppercase label (`text-wall/60`), never a floating/inline placeholder-as-label pattern.

### Navigation
- **Style:** `fixed` header, `backdrop-blur-sm`, transparent background (shows whatever room/wall is beneath it). Wordmark ("MKB") and links set in Plex Mono, uppercase, tracked.
- **States:** Links are `text-ink-soft` at rest, `text-ink` on hover — a simple opacity/tone shift, no underline.
- **Mobile treatment:** Below `sm`, the inline link row is replaced by a three-line hamburger that animates into an X, opening a `createPortal`-rendered full-screen panel (`bg-wall`, centered, large Syne links). Portaled to `document.body` specifically because the blurred header creates a containing block that would otherwise clip a `position: fixed` panel.
- **Locale switcher:** Plain text EN/FR/IT labels separated by `/`, not a dropdown or flag icons; active locale at full opacity, inactive at 50%.

### Project Room (signature component)
The defining custom pattern: a `min-h-screen` section whose entire background is one saturated accent (`style={{ backgroundColor: var(--accent-N) }}`), carrying a sequence badge ("01 / 03" in Plex Mono), a white-matte framed screenshot with the one deliberate drop shadow when real project content exists, or a dashed-border empty frame plus placeholder copy when it doesn't, a placard `<dl>` of role/stack/year in Plex Mono, and a pill CTA to the live site. Each room sets `data-accent-room="--accent-N"`, which `ScrollAccentWatcher`'s `IntersectionObserver` reads to update `--accent-active` on `<html>` as the room crosses the viewport center — the single interaction that threads every room's color into the page's global chrome (selection, focus ring, scrollbar thumb, Guestbook CTA fill).

### Project Carousel
When a project has more than one screenshot, the framed-screenshot slot (`ProjectRoom.tsx`) swaps its single `<Image>` for `ProjectCarousel.tsx` instead of changing the frame itself — same white matte, same shadow, same position in the room. Inside: a fixed `aspect-[19/9]` stage with `object-cover` so slides of differing aspect ratios never shift the frame's height, two drawn chevron-arrow buttons (44px+ targets, never emoji/unicode), and a Plex Mono `N / total` counter — the same placard-counting language as the room sequence badge, one level down. Auto-advances every 5s, pauses on hover or keyboard focus, stops entirely off-screen or under `prefers-reduced-motion`; the arrows always work regardless of pause state.

## Do's and Don'ts

### Do:
- **Do** commit an accent color at full-room scale when introducing a new project or section that needs its own identity — never as a small swatch or trim.
- **Do** use the dashed-border empty-frame treatment for any unfilled/placeholder content block, matching the existing `border-dashed border-white/40` (on accent) or `border-ink/25` (on wall) pattern.
- **Do** set any metadata label (role, stack, count, locale, form field name) in Plex Mono, uppercase, tracked.
- **Do** keep buttons pill-shaped (`rounded-full`); it is the only button radius in the shipped system.
- **Do** reserve the drop-shadow (`0 30px 60px -15px rgba(0,0,0,0.45)`) for the framed-screenshot pattern specifically; don't introduce a second shadow for generic cards or buttons.

### Don't:
- **Don't** build a boxed card grid for projects or services — the system explicitly rejects cards in favor of full-bleed rooms (portfolio) and hairline-divided lists (services); this was a confirmed anti-reference, not an oversight.
- **Don't** use Track-Light Amber as a flat fill, text color, or button background — it is reserved for the ambient hero glow only.
- **Don't** add a skeleton loader for unfilled content; use the dashed empty-frame treatment instead.
- **Don't** introduce a purple-gradient or dark-mode-developer-portfolio treatment anywhere in the system — both are confirmed anti-references for this world.

### Named exceptions (not drift):
- **WhatsApp brand green** (`#25D366`, `WhatsAppButton.tsx`): outside the accent palette on purpose. A third-party contact affordance like this is only trustworthy/recognizable in its own brand color; recoloring it to fit the gallery world would work against the one job the button has.
- **WhatsApp button shadow** (`0 6px 20px -4px rgba(0,0,0,0.4)`, same file): a second shadow value, smaller and tighter than the framed-screenshot shadow. The existing shadow was sized for a large image and looks wrong scaled down onto a 56px floating control; this one is proportioned for it instead. Still exactly one shadow for images, one for this button — not an open shadow system.
