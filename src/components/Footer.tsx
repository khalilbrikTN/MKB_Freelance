export function Footer({ rights }: { rights: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink px-6 py-6 text-center font-label text-xs uppercase tracking-[0.15em] text-wall/40">
      Mohamed Khalil Brik — {year}. {rights}
    </footer>
  );
}
