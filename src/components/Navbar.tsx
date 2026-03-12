"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, ctaLink } from "@/data/navigation";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-bg-primary/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <BrandLogo compact />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-text-muted transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href={ctaLink.href}
            className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-white/5 px-6 py-2.5 text-[13px] font-semibold text-accent shadow-lg shadow-primary/10 transition hover:border-accent/70 hover:bg-primary/15 hover:text-white"
          >
            {ctaLink.label}
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-text-muted lg:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-bg-primary/95 px-6 pb-6 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-text-muted transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaLink.href}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-accent/40 bg-white/5 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-primary/15 hover:text-white"
          >
            {ctaLink.label}
          </Link>
        </div>
      )}
    </nav>
  );
}
