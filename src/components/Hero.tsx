import type { CSSProperties } from "react";
import Image from "next/image";
import { CALENDLY_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/data/contact";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";

type EntranceStyle = CSSProperties & {
  "--entrance-delay"?: string;
  "--glow-opacity"?: number;
};

export function Hero({
  wordmark,
  tagline,
  thesis,
  scrollCue,
  bookCallLabel,
  bookCallNote,
  viewWorkLabel,
  credential,
}: {
  wordmark: string;
  tagline: string;
  thesis: string;
  scrollCue: string;
  bookCallLabel: string;
  bookCallNote: string;
  viewWorkLabel: string;
  credential: string;
}) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 sm:px-12"
    >
      <HeroCursorGlow />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/3">
          <div
            className="entrance-glow hero-glow-parallax h-full w-full rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--track-light), transparent 70%)",
              "--glow-opacity": 0.32,
            } as EntranceStyle}
          />
        </div>
        <div className="absolute bottom-0 right-0 h-[40vmax] w-[40vmax] translate-x-1/4 translate-y-1/4">
          <div
            className="entrance-glow hero-glow-parallax h-full w-full rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--track-light), transparent 70%)",
              animationDelay: "150ms",
              "--glow-opacity": 0.2,
            } as EntranceStyle}
          />
        </div>
      </div>

      {/* Split division: intro + actions carry the left, the artist's
          placard carries the right — the gallery-opening equivalent of
          "who made this, and what do you do next." A hairline divider
          (the same device Services/Pricing already use) ties the two
          halves into one composition instead of two floating blocks. */}
      <div className="flex w-full max-w-6xl flex-col items-center gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
        <div className="order-2 flex max-w-xl flex-col items-center text-center sm:order-1 sm:max-w-md sm:items-start sm:text-left lg:max-w-lg">
          <p
            className="entrance-rise font-label text-xs uppercase tracking-[0.2em] text-ink-soft"
            style={{ "--entrance-delay": "300ms" } as EntranceStyle}
          >
            {tagline}
          </p>
          <h1
            className="entrance-rise mt-3 font-display text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95] tracking-[-0.02em] text-balance"
            style={{ "--entrance-delay": "350ms" } as EntranceStyle}
          >
            {wordmark}
          </h1>
          <p
            className="entrance-rise mt-5 text-lg text-ink-soft sm:text-xl"
            style={{ "--entrance-delay": "550ms" } as EntranceStyle}
          >
            {thesis}
          </p>

          <div
            className="entrance-rise mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
            style={{ "--entrance-delay": "700ms" } as EntranceStyle}
          >
            <a
              href={CALENDLY_URL ?? "#"}
              aria-disabled={!CALENDLY_URL}
              target={CALENDLY_URL ? "_blank" : undefined}
              rel={CALENDLY_URL ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-105 aria-disabled:pointer-events-none aria-disabled:opacity-50"
              style={{ backgroundColor: "var(--accent-active)", color: "var(--wall)" }}
            >
              {bookCallLabel}
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              {viewWorkLabel}
            </a>
          </div>
          {!CALENDLY_URL && (
            <span className="entrance-rise mt-3 font-label text-xs uppercase tracking-[0.15em] text-ink-soft" style={{ "--entrance-delay": "700ms" } as EntranceStyle}>
              {bookCallNote}
            </span>
          )}

          <div
            className="entrance-rise mt-6 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
            style={{ "--entrance-delay": "850ms" } as EntranceStyle}
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-label text-xs uppercase tracking-[0.15em] text-ink-soft underline underline-offset-4 transition-colors hover:text-ink"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs uppercase tracking-[0.15em] text-ink-soft underline underline-offset-4 transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div
          aria-hidden
          className="entrance-rise hidden self-stretch sm:order-2 sm:block"
          style={{ "--entrance-delay": "500ms" } as EntranceStyle}
        >
          <div className="h-full w-px bg-ink/10" />
        </div>

        {/* The artist's placard: an exhibition opening introduces who made
            the work before the work itself. On the wall's own near-white
            ground a white matte frame (the project-room treatment) would
            have no contrast, so this reuses the system's hairline-border
            language plus the one established drop shadow instead — still
            "lifted off the wall," not a new primitive. The credential line
            beneath is the plaque text a gallery placard actually carries. */}
        <div className="order-1 flex w-56 shrink-0 flex-col items-center gap-3 text-center sm:order-3 sm:w-72 lg:w-80">
          <div
            className="entrance-rise w-full overflow-hidden rounded-sm border border-ink/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)]"
            style={{ "--entrance-delay": "150ms" } as EntranceStyle}
          >
            <Image
              src="/portrait.jpeg"
              alt={wordmark}
              width={800}
              height={800}
              className="block h-auto w-full"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 14rem"
              priority
            />
          </div>
          <p
            className="entrance-rise font-label text-xs uppercase tracking-[0.15em] text-ink-soft"
            style={{ "--entrance-delay": "450ms" } as EntranceStyle}
          >
            {credential}
          </p>
        </div>
      </div>

      {/* Pinned near the true bottom edge on sm+, where content is short
          enough to leave real slack below it — otherwise a tall viewport
          splits into two dead gaps instead of one deliberate one. On
          mobile the stacked column already fills the viewport, so the cue
          stays in normal flow there instead of overlapping the content. */}
      <div
        className="entrance-rise relative mt-12 flex flex-col items-center gap-3 font-label text-xs uppercase tracking-[0.2em] text-ink-soft sm:absolute sm:bottom-14 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2"
        style={{ "--entrance-delay": "1000ms" } as EntranceStyle}
      >
        <span>{scrollCue}</span>
        <span
          aria-hidden
          className="h-10 w-px opacity-70 motion-safe:animate-[scrollcue_1.8s_ease-in-out_infinite]"
          style={{ backgroundColor: "var(--accent-active)" }}
        />
      </div>
    </section>
  );
}
