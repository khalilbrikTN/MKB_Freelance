export type Project = {
  slug: string;
  accent: `--accent-${1 | 2 | 3 | 4 | 5}`;
  title: string | null;
  description: string | null;
  role: string | null;
  stack: string | null;
  year: string | null;
  href: string | null;
  image: { src: string; width: number; height: number } | null;
};

/**
 * Placeholder slots for the 3-5 project rooms. Replace title/description/
 * role/stack/year/href/image per project; a null field renders the
 * placeholder copy from messages instead of inventing content. Add or
 * remove entries as real projects come in — the gallery layout adapts to
 * any count.
 */
export const projects: Project[] = [
  {
    slug: "jin-restaurant",
    accent: "--accent-1",
    title: "Jin Restaurant",
    // Factual description of what's visible on the live site only —
    // replace with your own case-study copy, stack, and year.
    description:
      "Website for a gourmet Chinese restaurant in Italy — menu, news, and reservations, in Italian.",
    role: "Design & Development",
    stack: null,
    year: null,
    href: "https://www.jinrestaurant.it/",
    image: { src: "/projects/jin-restaurant.png", width: 1900, height: 912 },
  },
  {
    slug: "sain-nantes",
    accent: "--accent-2",
    title: "SAIN",
    description:
      "Website for a café, cantine, and grocery in Nantes, France — market-driven cuisine and local organic products, in French.",
    role: "Design & Development",
    stack: null,
    year: null,
    href: "https://sain-nantes.com/",
    image: { src: "/projects/sain-nantes.png", width: 1898, height: 913 },
  },
  {
    slug: "vieux-strasbourg",
    accent: "--accent-3",
    title: "Au Vieux Strasbourg",
    description:
      "Website for a traditional Alsatian restaurant in Strasbourg, France — menu, reservations, and contact, in French.",
    role: "Design & Development",
    stack: null,
    year: null,
    href: "https://vieuxstrasbourg.fr/",
    image: { src: "/projects/vieux-strasbourg.png", width: 1897, height: 907 },
  },
];
