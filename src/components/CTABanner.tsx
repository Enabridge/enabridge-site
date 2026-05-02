import { contactInfo } from "@/data/content";
import { getDictionary, getLocale } from "@/i18n";

export default async function CTABanner({
  headline,
}: {
  headline?: string;
}) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
        <div className="rounded-2xl border border-border bg-bg-surface px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {headline ?? dict.cta.defaultHeadline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-muted">
            {dict.cta.defaultDescription}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contactInfo.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-cta-bg px-8 py-3.5 text-sm font-semibold text-cta-fg shadow-md transition hover:bg-cta-hover"
            >
              LINE {contactInfo.line.id}
            </a>
            <a
              href={contactInfo.phone.href}
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-medium text-text-muted transition hover:border-primary hover:text-primary"
            >
              {contactInfo.phone.display}
            </a>
            <a
              href={contactInfo.email.href}
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-medium text-text-muted transition hover:border-primary hover:text-primary"
            >
              {contactInfo.email.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
