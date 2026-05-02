import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { contactInfo } from "@/data/content";
import { getDictionary, getLocale } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.metadata.howWeWork.title,
    description: dict.metadata.howWeWork.description,
  };
}

export default async function HowWeWorkPage() {
  const dict = getDictionary(await getLocale());

  return (
    <>
      <PageHero
        label={dict.howWeWork.hero.label}
        title={dict.howWeWork.hero.title}
        description={dict.howWeWork.hero.description}
      />

      {/* Delivery phases */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="space-y-0">
            {dict.deliveryPhases.map((phase, i) => (
              <div
                key={phase.title}
                className="grid gap-8 md:grid-cols-[240px_1fr] items-start border-b border-border py-12 first:pt-0 last:border-0 last:pb-0"
              >
                <div>
                  <span className="text-xs font-medium tracking-wide text-premium">
                    {dict.howWeWork.phasePrefix} {i + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-text-primary">
                    {phase.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-accent">
                    {phase.timeline}
                  </p>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Training credentials */}
      <section className="border-b border-border bg-bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="eyebrow text-xs text-premium">
            {dict.howWeWork.training.label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.howWeWork.training.title}
          </h2>
          <p className="mt-5 max-w-2xl text-text-muted leading-relaxed">
            {dict.howWeWork.training.description}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.trainingCredentials.map((cred) => (
              <div
                key={cred.name}
                className="rounded-xl border border-border bg-bg-primary p-7"
              >
                <h3 className="text-lg font-semibold text-accent">{cred.name}</h3>
                <p className="mt-2 text-sm text-text-muted">{cred.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education philosophy */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <p className="eyebrow text-xs text-premium">
            {dict.howWeWork.approach.label}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {dict.howWeWork.approach.title}
          </h2>
          <p className="mt-6 max-w-2xl text-text-muted leading-relaxed">
            {dict.howWeWork.approach.body1}
          </p>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            {dict.howWeWork.approach.body2}
          </p>
          <p className="mt-4 max-w-2xl text-text-muted leading-relaxed">
            {dict.howWeWork.approach.body3Prefix}
            <a
              href={contactInfo.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              {contactInfo.youtube.handle}
            </a>
            {dict.howWeWork.approach.body3Suffix}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dict.howWeWork.deliverables.map((col) => (
              <div
                key={col.title}
                className="rounded-xl border border-border bg-bg-surface p-8"
              >
                <h3 className="text-lg font-semibold text-accent">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={dict.howWeWork.ctaHeadline} />
    </>
  );
}
