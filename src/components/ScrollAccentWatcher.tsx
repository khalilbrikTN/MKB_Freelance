"use client";

import { useEffect } from "react";

/**
 * The gallery's one signature interaction: as a visitor scrolls past each
 * project room, the ambient chrome (selection, focus rings, scrollbar) picks
 * up that room's accent, so the whole page feels like it is walking past lit
 * frames rather than a static palette switch.
 */
export function ScrollAccentWatcher() {
  useEffect(() => {
    const rooms = Array.from(
      document.querySelectorAll<HTMLElement>("[data-accent-room]")
    );
    if (rooms.length === 0) return;

    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const varName = mostVisible?.target.getAttribute("data-accent-room");
        if (varName) {
          root.style.setProperty("--accent-active", `var(${varName})`);
        }
      },
      { threshold: [0.5], rootMargin: "-20% 0px -20% 0px" }
    );

    rooms.forEach((room) => observer.observe(room));
    return () => observer.disconnect();
  }, []);

  return null;
}
