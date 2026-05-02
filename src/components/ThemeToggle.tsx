"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  lightAria: string;
  darkAria: string;
};

function subscribeThemeAttr(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function readThemeAttr(): Theme {
  const value = document.documentElement.getAttribute("data-theme");
  return value === "dark" ? "dark" : "light";
}

function readServerTheme(): Theme {
  // Server always renders the "light" default; the inline init script in
  // layout.tsx flips the <html> attribute before hydration if needed.
  return "light";
}

export default function ThemeToggle({ lightAria, darkAria }: ThemeToggleProps) {
  const theme = useSyncExternalStore(
    subscribeThemeAttr,
    readThemeAttr,
    readServerTheme,
  );

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore if storage is blocked
    }
  };

  const nextIsLight = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={nextIsLight ? lightAria : darkAria}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-muted transition hover:border-border-strong hover:text-text-primary"
      suppressHydrationWarning
    >
      {nextIsLight ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.93 19.07 1.41-1.41" />
      <path d="m17.66 6.34 1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
