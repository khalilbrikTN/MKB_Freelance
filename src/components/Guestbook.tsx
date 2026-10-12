"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CALENDLY_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/data/contact";

const DRAFT_KEY = "guestbook-draft";

type Status = "idle" | "sending" | "success" | "error";

export function Guestbook({
  heading,
  subtext,
  bookCallLabel,
  bookCallNote,
  nameLabel,
  emailLabel,
  messageLabel,
  sendLabel,
  sendingLabel,
  successMessage,
  errorMessage,
}: {
  heading: string;
  subtext: string;
  bookCallLabel: string;
  bookCallNote: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  sendLabel: string;
  sendingLabel: string;
  successMessage: string;
  errorMessage: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Restore an in-progress draft once on mount (a refresh or accidental
  // navigation shouldn't silently wipe what someone was writing). This is
  // the standard hydration-safe pattern for client-only storage: reading
  // localStorage during the initial render would mismatch the server-
  // rendered (empty) markup, so it has to happen in an effect instead.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const draft = JSON.parse(raw) as Partial<Record<"name" | "email" | "message", string>>;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (draft.name) setName(draft.name);
      if (draft.email) setEmail(draft.email);
      if (draft.message) setMessage(draft.message);
    } catch {
      // Corrupt or inaccessible storage — proceed with an empty form.
    }
  }, []);

  useEffect(() => {
    if (status === "success") return;
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify({ name, email, message }));
    } catch {
      // Storage unavailable (private browsing, quota) — draft safety is a
      // nicety, not a requirement, so fail silently.
    }
  }, [name, email, message, status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) throw new Error("send-failed");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      try {
        window.localStorage.removeItem(DRAFT_KEY);
      } catch {
        // Ignore — nothing to clean up if storage was never written.
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-ink px-6 py-28 text-wall sm:py-36"
      style={{ borderTop: "1px solid color-mix(in srgb, var(--wall) 15%, transparent)" }}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <div>
          <h2 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-bold tracking-[-0.01em]">
            {heading}
          </h2>
          <p className="mt-4 max-w-md text-wall/70">{subtext}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={CALENDLY_URL ?? "#"}
            aria-disabled={!CALENDLY_URL}
            target={CALENDLY_URL ? "_blank" : undefined}
            rel={CALENDLY_URL ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-105 aria-disabled:pointer-events-none aria-disabled:opacity-50"
            style={{ backgroundColor: "var(--accent-active)", color: "var(--wall)" }}
          >
            {bookCallLabel}
          </a>
          {!CALENDLY_URL && (
            <span className="font-label text-xs uppercase tracking-[0.15em] text-wall/50">
              {bookCallNote}
            </span>
          )}

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-label text-xs uppercase tracking-[0.15em] text-wall/60 underline underline-offset-4 transition-colors hover:text-wall"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs uppercase tracking-[0.15em] text-wall/60 underline underline-offset-4 transition-colors hover:text-wall"
          >
            LinkedIn
          </a>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm sm:col-span-1">
            <span className="font-label text-xs uppercase tracking-[0.15em] text-wall/60">
              {nameLabel}
            </span>
            <input
              required
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={status === "sending"}
              className="rounded-lg border border-wall/30 bg-wall/5 px-4 py-3 text-base text-wall outline-none transition-colors focus:border-wall/60 disabled:opacity-60"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm sm:col-span-1">
            <span className="font-label text-xs uppercase tracking-[0.15em] text-wall/60">
              {emailLabel}
            </span>
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={status === "sending"}
              className="rounded-lg border border-wall/30 bg-wall/5 px-4 py-3 text-base text-wall outline-none transition-colors focus:border-wall/60 disabled:opacity-60"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm sm:col-span-2">
            <span className="font-label text-xs uppercase tracking-[0.15em] text-wall/60">
              {messageLabel}
            </span>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              disabled={status === "sending"}
              className="rounded-lg border border-wall/30 bg-wall/5 px-4 py-3 text-base text-wall outline-none transition-colors focus:border-wall/60 disabled:opacity-60"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-wall/30 px-6 py-3 text-sm font-medium text-wall transition-colors hover:border-wall disabled:opacity-60 sm:col-span-2"
          >
            {status === "sending" ? sendingLabel : sendLabel}
          </button>

          <div role="status" aria-live="polite" className="sm:col-span-2">
            {status === "success" && (
              <p className="font-label text-xs uppercase tracking-[0.15em] text-wall/80">
                {successMessage}
              </p>
            )}
            {status === "error" && (
              <p className="font-label text-xs uppercase tracking-[0.15em] text-wall/80">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
