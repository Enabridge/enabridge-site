"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import type { Locale } from "@/i18n/types";

type MobileMenuProps = {
  links: { label: string; href: string }[];
  contactLabel: string;
  toggleLabel: string;
  toggleAria: string;
  themeLightAria: string;
  themeDarkAria: string;
  locale: Locale;
};

export default function MobileMenu({
  links,
  contactLabel,
  toggleLabel,
  toggleAria,
  themeLightAria,
  themeDarkAria,
  locale,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-text-muted lg:hidden"
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-border bg-bg-primary px-6 pb-6 pt-2 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-text-muted transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-2">
            <ThemeToggle
              lightAria={themeLightAria}
              darkAria={themeDarkAria}
            />
            <LanguageToggle
              locale={locale}
              switchToLabel={toggleLabel}
              ariaLabel={toggleAria}
            />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-cta-fg"
            >
              {contactLabel}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
