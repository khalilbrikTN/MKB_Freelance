"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

const AUTO_ADVANCE_MS = 5000;

export function ProjectCarousel({
  images,
  alt,
  prevLabel,
  nextLabel,
}: {
  images: ProjectImage[];
  alt: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function go(delta: number) {
    setIndex((current) => (current + delta + images.length) % images.length);
  }

  // Auto-advance: paused on hover or keyboard focus, stopped entirely once
  // scrolled off-screen or under prefers-reduced-motion. The arrows always
  // work regardless of pause state, so there's never only one way to move.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.4 }
    );
    observer.observe(container);

    const timer = window.setInterval(() => {
      if (visible) setIndex((current) => (current + 1) % images.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [paused, images.length]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[19/9] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={`${alt} — ${i + 1}/${images.length}`}
          fill
          className={
            "object-cover object-top transition-opacity duration-500" +
            (i === index ? " opacity-100" : " pointer-events-none opacity-0")
          }
          sizes="(min-width: 896px) 56rem, 100vw"
          priority={i === 0}
        />
      ))}

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label={prevLabel}
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-wall/90 text-ink shadow-[0_8px_20px_-6px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label={nextLabel}
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-wall/90 text-ink shadow-[0_8px_20px_-6px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <span className="absolute bottom-3 right-3 rounded-full bg-wall/90 px-3 py-1 font-label text-xs uppercase tracking-[0.1em] text-ink">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
