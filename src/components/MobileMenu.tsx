"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function MobileMenu({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
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

  return (
    <div className="sm:hidden">
      <button
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
          <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-wall">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
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
