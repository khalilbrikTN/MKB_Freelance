export type ProjectImage = { src: string; width: number; height: number };

export type Project = {
  slug: string;
  accent: `--accent-${1 | 2 | 3 | 4 | 5 | 6}`;
  title: string | null;
  description: string | null;
  role: string | null;
  stack: string | null;
  year: string | null;
  href: string | null;
  // Empty array renders the placeholder copy from messages instead of
  // inventing content. One entry renders a static framed screenshot.
  // More than one renders the carousel, arrows and all.
  images: ProjectImage[];
};

/**
 * Placeholder slots for the project rooms. Replace title/description/
 * role/stack/year/href/images per project — a null field (or empty
 * images array) renders the placeholder copy instead of inventing
 * content. Add or remove entries as real projects come in — the gallery
 * layout adapts to any count.
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
    images: [{ src: "/projects/jin-restaurant.png", width: 1900, height: 912 }],
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
    images: [{ src: "/projects/sain-nantes.png", width: 1898, height: 913 }],
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
    images: [{ src: "/projects/vieux-strasbourg.png", width: 1897, height: 907 }],
  },
  {
    slug: "liberating-knowledge",
    accent: "--accent-4",
    title: "Liberating Knowledge",
    description:
      "Website for a media literacy and capacity-building organization in the UAE — divisions, projects, and news.",
    role: "Design & Development",
    stack: null,
    year: null,
    href: "https://www.liberating-knowledge.com/",
    images: [{ src: "/projects/liberating-knowledge.png", width: 1897, height: 912 }],
  },
  {
    slug: "invoiceiq",
    accent: "--accent-5",
    title: "InvoiceIQ",
    description:
      "A finance operations dashboard — invoice processing, approval tracking, VAT reclaim, and team activity in one view.",
    role: "Design & Development",
    stack: null,
    year: null,
    // No live link for this one — an internal/product build, not a
    // public site.
    href: null,
    images: [{ src: "/projects/invoiceiq.png", width: 1904, height: 903 }],
  },
  {
    slug: "lms",
    accent: "--accent-6",
    title: "LMS — Teacher & Student Portal",
    description:
      "A learning management system with separate teacher and student portals — classes, attendance, materials, assignments, and grades.",
    role: "Design & Development",
    stack: null,
    year: null,
    href: null,
    images: [
      { src: "/projects/lms-1.png", width: 1918, height: 902 },
      { src: "/projects/lms-2.png", width: 1918, height: 910 },
      { src: "/projects/lms-3.png", width: 1873, height: 903 },
      { src: "/projects/lms-4.png", width: 1891, height: 880 },
      { src: "/projects/lms-5.png", width: 1903, height: 898 },
      { src: "/projects/lms-6.png", width: 1916, height: 896 },
    ],
  },
];
