import type { CSSProperties } from "react";
import { CALENDLY_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/data/contact";

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
  portraitPlaceholder,
}: {
  wordmark: string;
  tagline: string;
  thesis: string;
  scrollCue: string;
  bookCallLabel: string;
  bookCallNote: string;
  viewWorkLabel: string;
  portraitPlaceholder: string;
}) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 sm:px-12"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="entrance-glow absolute left-1/2 top-0 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--track-light), transparent 70%)",
            "--glow-opacity": 0.25,
          } as EntranceStyle}
        />
        <div
          className="entrance-glow absolute bottom-0 right-0 h-[40vmax] w-[40vmax] translate-x-1/4 translate-y-1/4 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--track-light), transparent 70%)",
            animationDelay: "150ms",
            "--glow-opacity": 0.15,
          } as EntranceStyle}
        />
      </div>

      {/* Split division: intro + actions carry the left, the artist's
          placard carries the right — the gallery-opening equivalent of
          "who made this, and what do you do next." */}
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

        {/* The artist's placard: an exhibition opening introduces who made
            the work before the work itself. Reuses the system's one
            placeholder device (dashed empty frame) until a real portrait
            is supplied — once it is, it takes the same white-matte,
            soft-shadow "framed piece" treatment every project screenshot
            already uses, not a new primitive. */}
        <div
          className="order-1 entrance-rise flex aspect-[3/4] w-48 shrink-0 flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-ink/25 px-5 text-center sm:order-2 sm:w-64 lg:w-72"
          style={{ "--entrance-delay": "150ms" } as EntranceStyle}
        >
          <span className="font-label text-xs uppercase leading-snug tracking-[0.15em] text-ink-soft">
            {portraitPlaceholder}
          </span>
        </div>
      </div>

      <div
        className="entrance-rise mt-16 flex flex-col items-center gap-3 font-label text-xs uppercase tracking-[0.2em] text-ink-soft"
        style={{ "--entrance-delay": "1000ms" } as EntranceStyle}
      >
        <span>{scrollCue}</span>
        <span
          aria-hidden
          className="h-10 w-px bg-current opacity-60 motion-safe:animate-[scrollcue_1.8s_ease-in-out_infinite]"
        />
      </div>
    </section>
  );
}
