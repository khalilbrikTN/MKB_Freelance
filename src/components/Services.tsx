export function Services({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; description: string }[];
}) {
  return (
    <section
      id="services"
      className="mx-auto max-w-4xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16"
    >
      <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.01em]">
        {heading}
      </h2>

      <ul className="mt-12 divide-y divide-ink/10 border-t border-ink/10">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
          >
            <h3 className="font-display text-xl font-bold sm:w-64 sm:shrink-0">
              {item.title}
            </h3>
            <p className="max-w-md text-ink-soft">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
