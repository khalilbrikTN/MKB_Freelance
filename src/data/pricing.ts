export type PricingTier = {
  id: "starter" | "pro" | "custom";
  // Starting suggestions for the European market — adjust freely, this is
  // a baseline to react to, not a final number from the client.
  price: number | null; // null renders as a custom-quote tier instead
  highlighted: boolean;
};

export const pricingTiers: PricingTier[] = [
  { id: "starter", price: 450, highlighted: false },
  { id: "pro", price: 950, highlighted: true },
  { id: "custom", price: null, highlighted: false },
];

// Optional recurring add-on, independent of the one-time tiers above —
// same starting-point caveat as the tier prices.
export const maintenancePrice = 40;
