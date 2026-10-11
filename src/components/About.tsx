export function About({
  heading,
  bio,
  isPlaceholder,
}: {
  heading: string;
  bio: string;
  isPlaceholder: boolean;
}) {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 pt-12 pb-20 sm:pt-16 sm:pb-28">
      <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.01em]">
        {heading}
      </h2>
      <p
        className={
          "mt-8 text-lg leading-relaxed text-ink-soft" +
          (isPlaceholder
            ? " rounded-xl border border-dashed border-ink/25 px-6 py-5 italic"
            : "")
        }
      >
        {bio}
      </p>
    </section>
  );
}
