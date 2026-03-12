"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, ctaLink } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-border/80 bg-bg-primary/85 backdrop-blur-lg sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          Enabridge
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
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
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-[13px] font-semibold text-accent transition hover:bg-cta-hover"
          >
            {ctaLink.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-text-muted"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-bg-primary px-6 pb-6 pt-2">
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
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-accent transition hover:bg-cta-hover"
          >
            {ctaLink.label}
          </Link>
        </div>
      )}
    </nav>
  );
}
