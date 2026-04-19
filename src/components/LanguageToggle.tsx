"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LOCALES, LOCALE_COOKIE, type Locale } from "@/i18n/types";

type LanguageToggleProps = {
  locale: Locale;
  switchToLabel: string;
  ariaLabel: string;
};

export default function LanguageToggle({
  locale,
  switchToLabel,
  ariaLabel,
}: LanguageToggleProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const nextLocale: Locale = locale === "en" ? "th" : "en";
  if (!(LOCALES as readonly string[]).includes(nextLocale)) return null;

  const handleClick = () => {
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=${maxAge}; samesite=lax`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-text-muted transition hover:border-accent/60 hover:text-accent disabled:opacity-60"
    >
      {switchToLabel}
    </button>
  );
}
