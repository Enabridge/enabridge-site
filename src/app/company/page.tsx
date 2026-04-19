import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { contactInfo, siteUrl } from "@/data/content";
import { getDictionary, getLocale } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.metadata.company.title,
    description: dict.metadata.company.description,
  };
}

export default async function CompanyPage() {
  const dict = getDictionary(await getLocale());

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: dict.company.founder.name,
    jobTitle: dict.company.founder.role,
    image: `${siteUrl}/founder.jpeg`,
    worksFor: {
      "@type": "Organization",
      name: "Enabridge",
      url: siteUrl,
    },
    url: contactInfo.linkedin.founder,
    sameAs: [contactInfo.linkedin.founder],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <PageHero
        label={dict.company.hero.label}
        title={dict.company.hero.title}
        description={dict.company.hero.description}
      />

      {/* Mission + Principles */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
                {dict.company.mission.label}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                {dict.company.mission.title}
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed">
                {dict.company.mission.body1}
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                {dict.company.mission.body2}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
                {dict.company.principles.label}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                {dict.company.principles.title}
              </h2>
              <ul className="mt-8 space-y-5">
                {dict.company.principles.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-muted leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.company.founder.label}
          </p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
            <div>
              <div className="overflow-hidden rounded-2xl border border-border bg-bg-primary">
                <Image
                  src="/founder.jpeg"
                  alt={dict.company.founder.photoAlt}
                  width={640}
                  height={640}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-text-primary">
                {dict.company.founder.name}
              </h2>
              <p className="mt-1 text-sm text-text-muted">
                {dict.company.founder.role}
              </p>
              <a
                href={contactInfo.linkedin.founder}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-accent"
              >
                <span>{dict.company.founder.linkedinLabel}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-1 lg:gap-10">
              <div>
                <h3 className="text-lg font-semibold text-accent">
                  {dict.company.founder.experienceHeading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {dict.company.founder.experience.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">
                  {dict.company.founder.industryHeading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {dict.company.founder.industries.map((ind) => (
                    <li
                      key={ind}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.company.capabilities.label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.company.capabilities.title}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dict.company.capabilities.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-bg-surface p-8"
              >
                <h3 className="text-lg font-semibold text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Governance */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-medium tracking-[0.25em] text-premium uppercase">
            {dict.company.trust.label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.company.trust.title}
          </h2>
          <p className="mt-5 max-w-2xl text-text-muted leading-relaxed">
            {dict.company.trust.description}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.company.trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-bg-primary p-7"
              >
                <h3 className="text-base font-semibold text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={dict.company.ctaHeadline} />
    </>
  );
}
