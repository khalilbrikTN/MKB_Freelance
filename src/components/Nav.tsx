import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { MobileMenu } from "@/components/MobileMenu";

export function Nav({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm sm:px-10">
      <a
        href="#top"
        className="font-label text-xs uppercase tracking-[0.2em] text-ink"
      >
        MKB
      </a>
      <nav className="hidden items-center gap-8 font-label text-xs uppercase tracking-[0.15em] text-ink-soft sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-5">
        <LocaleSwitcher />
        <MobileMenu links={links} />
      </div>
    </header>
  );
}
