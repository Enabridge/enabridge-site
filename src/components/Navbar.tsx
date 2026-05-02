import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import { getDictionary, getLocale } from "@/i18n";

export default async function Navbar() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  const navLinks = [
    { label: dict.nav.services, href: "/services" },
    { label: dict.nav.caseStudies, href: "/case-studies" },
    { label: dict.nav.howWeWork, href: "/how-we-work" },
    { label: dict.nav.openbridge, href: "/openbridge" },
    { label: dict.nav.company, href: "/company" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border-subtle bg-bg-primary/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">
        <BrandLogo compact />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-text-muted transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle
            lightAria={dict.theme.toLight}
            darkAria={dict.theme.toDark}
          />
          <LanguageToggle
            locale={locale}
            switchToLabel={dict.toggle.switchTo}
            ariaLabel={dict.toggle.aria}
          />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-primary/40 bg-primary/5 px-5 py-2 text-[13px] font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-cta-fg"
          >
            {dict.nav.contactUs}
          </Link>
        </div>

        <MobileMenu
          links={navLinks}
          contactLabel={dict.nav.contactUs}
          toggleLabel={dict.toggle.switchTo}
          toggleAria={dict.toggle.aria}
          themeLightAria={dict.theme.toLight}
          themeDarkAria={dict.theme.toDark}
          locale={locale}
        />
      </div>
    </nav>
  );
}
