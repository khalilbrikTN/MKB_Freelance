"use client";

import { useState, type FormEvent } from "react";
import { CALENDLY_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/data/contact";

export function Guestbook({
  heading,
  subtext,
  bookCallLabel,
  bookCallNote,
  nameLabel,
  emailLabel,
  messageLabel,
  sendLabel,
}: {
  heading: string;
  subtext: string;
  bookCallLabel: string;
  bookCallNote: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  sendLabel: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
              className="rounded-lg border border-wall/30 bg-wall/5 px-4 py-3 text-wall outline-none transition-colors focus:border-wall/60"
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
              className="rounded-lg border border-wall/30 bg-wall/5 px-4 py-3 text-wall outline-none transition-colors focus:border-wall/60"
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
              className="rounded-lg border border-wall/30 bg-wall/5 px-4 py-3 text-wall outline-none transition-colors focus:border-wall/60"
            />
          </label>

          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-wall/30 px-6 py-3 text-sm font-medium text-wall transition-colors hover:border-wall sm:col-span-2"
          >
            {sendLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
