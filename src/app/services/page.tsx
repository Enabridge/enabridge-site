import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { getDictionary, getLocale } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.metadata.services.title,
    description: dict.metadata.services.description,
  };
}

export default async function ServicesPage() {
  const dict = getDictionary(await getLocale());
  const services = dict.services.items;

  return (
    <>
      <PageHero
        label={dict.services.listHero.label}
        title={dict.services.listHero.title}
        description={dict.services.listHero.description}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-border bg-bg-surface p-8 transition hover:border-accent/40 hover:bg-bg-elevated"
              >
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {s.tagline}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
