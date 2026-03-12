import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30-minute Agentic Fit Call with Enabridge. We will assess where AI agents can deliver the most impact for your business.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Book a 30-minute Agentic Fit Call."
        description="Tell us about your workflows and we will assess where Agentic AI can deliver the most impact — with the least risk."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Calendly placeholder */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                Schedule a call
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                Pick a time that works for you. We will discuss your current workflows, identify
                quick wins for Agentic AI, and outline a practical path forward.
              </p>
              <div className="mt-8 rounded-xl border border-border bg-bg-surface p-12 text-center min-h-[320px] flex flex-col items-center justify-center">
                <p className="text-sm text-text-muted">Calendly booking widget</p>
                <p className="mt-2 text-xs text-text-muted/60">Integration placeholder</p>
              </div>
            </div>

            {/* Other contact methods */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                Other ways to reach us
              </h2>
              <div className="mt-8 space-y-6">
                <div className="rounded-xl border border-border bg-bg-surface p-6">
                  <h3 className="text-base font-semibold text-accent">Email</h3>
                  <a
                    href="mailto:hello@enabridge.ai"
                    className="mt-2 block text-sm text-text-muted hover:text-accent transition"
                  >
                    hello@enabridge.ai
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-bg-surface p-6">
                  <h3 className="text-base font-semibold text-accent">LINE Official Account</h3>
                  <p className="mt-2 text-sm text-text-muted">
                    Search for <span className="text-text-primary font-medium">@enabridge</span> on LINE
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-bg-surface p-6">
                  <h3 className="text-base font-semibold text-accent">Send us a message</h3>
                  <form className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-1.5">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-accent focus:outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1.5">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-accent focus:outline-none transition"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-1.5">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-accent focus:outline-none resize-none transition"
                        placeholder="Tell us about your workflows..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-accent shadow-lg shadow-primary/20 transition hover:bg-cta-hover hover:shadow-cta-hover/25"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-16 border-t border-border pt-12">
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { label: "Response time", value: "Within 24 hours" },
                { label: "Fit Call duration", value: "30 minutes" },
                { label: "Commitment", value: "None required" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-lg font-semibold text-accent">{item.value}</p>
                  <p className="mt-1 text-xs tracking-wide text-text-muted uppercase">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
