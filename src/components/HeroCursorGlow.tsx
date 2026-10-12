"use client";

import { useEffect } from "react";

/**
 * The hero's continuous (not one-time) motion: the ambient track-light glow
 * drifts a few pixels toward the cursor, like a spotlight subtly following
 * a visitor through the room. Skipped for touch devices (no cursor) and
 * prefers-reduced-motion. Sets CSS vars read by .hero-glow-parallax rather
 * than rendering anything itself — same pattern as ScrollAccentWatcher.
 */
export function HeroCursorGlow() {
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const maxShiftPx = 24;

    function onMouseMove(event: MouseEvent) {
      const rect = hero!.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      hero!.style.setProperty("--glow-shift-x", `${relX * maxShiftPx}px`);
      hero!.style.setProperty("--glow-shift-y", `${relY * maxShiftPx}px`);
    }

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return null;
}
