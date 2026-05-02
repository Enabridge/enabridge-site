import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contactInfo } from "@/data/content";
import { getDictionary, getLocale } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
  };
}

export default async function ContactPage() {
  const dict = getDictionary(await getLocale());

  return (
    <>
      <PageHero
        label={dict.contact.hero.label}
        title={dict.contact.hero.title}
        description={dict.contact.hero.description}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href={contactInfo.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-bg-surface p-10 text-center transition hover:border-accent/40 hover:bg-bg-elevated"
            >
              <p className="eyebrow text-xs text-premium">
                {dict.contact.lineLabel}
              </p>
              <p className="mt-4 text-2xl font-semibold text-primary group-hover:text-cta-hover transition">
                {contactInfo.line.id}
              </p>
              <p className="mt-3 text-sm text-text-muted">
                {dict.contact.linePrimary}
              </p>
            </a>

            <a
              href={contactInfo.phone.href}
              className="group rounded-xl border border-border bg-bg-surface p-10 text-center transition hover:border-accent/40 hover:bg-bg-elevated"
            >
              <p className="eyebrow text-xs text-premium">
                {dict.contact.phoneLabel}
              </p>
              <p className="mt-4 text-2xl font-semibold text-primary group-hover:text-cta-hover transition">
                {contactInfo.phone.display}
              </p>
              <p className="mt-3 text-sm text-text-muted">
                {dict.contact.phonePrimary}
              </p>
            </a>

            <a
              href={contactInfo.email.href}
              className="group rounded-xl border border-border bg-bg-surface p-10 text-center transition hover:border-accent/40 hover:bg-bg-elevated"
            >
              <p className="eyebrow text-xs text-premium">
                {dict.contact.emailLabel}
              </p>
              <p className="mt-4 text-2xl font-semibold text-primary group-hover:text-cta-hover transition">
                {contactInfo.email.display}
              </p>
              <p className="mt-3 text-sm text-text-muted">
                {dict.contact.emailPrimary}
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
