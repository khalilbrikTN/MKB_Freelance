"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function MobileMenu({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  function close() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus management: a keyboard user opening this panel must land inside
  // it, not on content hidden behind the full-screen overlay. Move focus
  // to the first link on open, trap Tab/Shift+Tab within the panel while
  // it's open, and close() always returns focus to the toggle button.
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusables = panel.querySelectorAll<HTMLElement>("a[href]");
    focusables[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
      >
        <span
          aria-hidden
          className={
            "h-px w-5 bg-ink transition-transform duration-200 " +
            (open ? "translate-y-[6px] rotate-45" : "")
          }
        />
        <span
          aria-hidden
          className={
            "h-px w-5 bg-ink transition-opacity duration-200 " +
            (open ? "opacity-0" : "")
          }
        />
        <span
          aria-hidden
          className={
            "h-px w-5 bg-ink transition-transform duration-200 " +
            (open ? "-translate-y-[6px] -rotate-45" : "")
          }
        />
      </button>

      {/*
        Portalled to document.body: the header this button lives in uses
        backdrop-blur, which (like transform/filter) makes the header a
        containing block for `position: fixed` descendants. Left in place,
        this panel would be clamped to the header's own box instead of the
        viewport. The portal escapes that.
      */}
      {open &&
        createPortal(
          <nav
            ref={panelRef}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-wall"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="font-display text-3xl font-bold text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>,
          document.body
        )}
    </div>
  );
}
