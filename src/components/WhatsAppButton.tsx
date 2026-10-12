import { WHATSAPP_URL } from "@/data/contact";

/**
 * Two deliberate, documented exceptions to the gallery system (see
 * DESIGN.md Do's and Don'ts): WhatsApp's own brand green, because a
 * recolored WhatsApp button stops being recognizable as one, and a
 * second, smaller shadow proportioned for a 56px floating control
 * instead of forcing the framed-screenshot shadow (built for a large
 * image) onto a button the existing rule says it shouldn't touch.
 */
export function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-[0_6px_20px_-4px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 4C9.373 4 4 9.373 4 16c0 2.223.606 4.303 1.657 6.088L4 28l6.1-1.626A11.93 11.93 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 4 16 4Z"
          fill="#fff"
        />
        <path
          d="M16 5.5C10.201 5.5 5.5 10.201 5.5 16c0 1.97.545 3.812 1.49 5.386L5.9 25.8l4.54-1.21A10.45 10.45 0 0 0 16 26.5c5.799 0 10.5-4.701 10.5-10.5S21.799 5.5 16 5.5Z"
          fill="#25D366"
        />
        <path
          d="M12.3 10.6c-.25-.56-.46-.57-.7-.58-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.39-.29.3-1.1 1.08-1.1 2.62 0 1.55 1.13 3.04 1.28 3.25.16.21 2.18 3.49 5.38 4.76 2.66 1.05 3.2.84 3.78.79.58-.05 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-.99 1.24-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.68-1.72-.96-2.36Z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}
