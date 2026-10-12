"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const LABELS: Record<string, string> = {
  en: "EN",
  fr: "FR",
  it: "IT",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 font-label text-xs uppercase tracking-[0.15em]">
      {routing.locales.map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && <span className="opacity-40">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            aria-current={code === locale}
            className={
              "rounded px-1.5 py-1 transition-colors hover:text-ink " +
              (code === locale ? "text-ink" : "text-ink-soft")
            }
          >
            {LABELS[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
