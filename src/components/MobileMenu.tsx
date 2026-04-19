"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import type { Locale } from "@/i18n/types";

type MobileMenuProps = {
  links: { label: string; href: string }[];
  contactLabel: string;
  toggleLabel: string;
  toggleAria: string;
  locale: Locale;
};

export default function MobileMenu({
  links,
  contactLabel,
  toggleLabel,
  toggleAria,
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
        <div className="absolute inset-x-0 top-full border-t border-border bg-bg-primary/95 px-6 pb-6 pt-2 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-text-muted transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3">
            <LanguageToggle
              locale={locale}
              switchToLabel={toggleLabel}
              ariaLabel={toggleAria}
            />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-accent/40 bg-white/5 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-primary/15 hover:text-white"
            >
              {contactLabel}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
