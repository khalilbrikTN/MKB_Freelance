import { pricingTiers } from "@/data/pricing";

export function Pricing({
  heading,
  subtext,
  disclaimer,
  mostPopularLabel,
  priceSuffix,
  customLabel,
  tiers,
}: {
  heading: string;
  subtext: string;
  disclaimer: string;
  mostPopularLabel: string;
  priceSuffix: string;
  customLabel: string;
  tiers: Record<
    "starter" | "pro" | "custom",
    { name: string; description: string; features: string[]; cta: string }
  >;
}) {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 pt-12 pb-20 sm:pt-16 sm:pb-28">
      <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.01em]">
        {heading}
      </h2>
      <p className="mt-3 max-w-md text-ink-soft">{subtext}</p>

      <div className="mt-12 grid overflow-hidden rounded-sm border border-ink/10 sm:grid-cols-3">
        {pricingTiers.map((tier, index) => {
          const copy = tiers[tier.id];
          return (
            <div
              key={tier.id}
              className={
                "flex flex-col gap-6 p-8" +
                (index > 0 ? " border-t border-ink/10 sm:border-l sm:border-t-0" : "") +
                (tier.highlighted ? " bg-ink text-wall" : "")
              }
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-label text-xs uppercase tracking-[0.2em] opacity-70">
                  {copy.name}
                </span>
                {tier.highlighted && (
                  <span className="font-label text-xs uppercase tracking-[0.15em] opacity-70">
                    {mostPopularLabel}
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-2">
                {tier.price !== null ? (
                  <>
                    <span className="font-display text-4xl font-bold">
                      €{tier.price}
                    </span>
                    <span className="font-label text-xs uppercase tracking-[0.1em] opacity-60">
                      {priceSuffix}
                    </span>
                  </>
                ) : (
                  <span className="font-display text-2xl font-bold">
                    {customLabel}
                  </span>
                )}
              </div>

              <p className="text-sm opacity-80">{copy.description}</p>

              <ul className="flex flex-1 flex-col gap-2 text-sm">
                {copy.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span aria-hidden className="opacity-50">
                      —
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={
                  "mt-2 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors" +
                  (tier.highlighted
                    ? " bg-wall text-ink hover:bg-wall/90"
                    : " border border-ink/25 text-ink hover:border-ink")
                }
              >
                {copy.cta}
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-6 font-label text-xs uppercase tracking-[0.15em] text-ink-soft">
        {disclaimer}
      </p>
    </section>
  );
}
