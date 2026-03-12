import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Agentic AI that accelerates business execution — with human oversight and production-grade reliability.
            </p>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.15em] text-text-secondary uppercase">Solutions</p>
            <div className="flex flex-col gap-3">
              <Link href="/solutions/customer-operations" className="text-sm text-text-muted transition hover:text-accent">Customer Operations</Link>
              <Link href="/solutions/finance-reconciliation" className="text-sm text-text-muted transition hover:text-accent">Finance Reconciliation</Link>
              <Link href="/solutions/compliance-risk" className="text-sm text-text-muted transition hover:text-accent">Compliance & Risk</Link>
              <Link href="/solutions/internal-execution" className="text-sm text-text-muted transition hover:text-accent">Internal Execution</Link>
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.15em] text-text-secondary uppercase">Company</p>
            <div className="flex flex-col gap-3">
              <Link href="/agentic-ai" className="text-sm text-text-muted transition hover:text-accent">Agentic AI</Link>
              <Link href="/case-studies" className="text-sm text-text-muted transition hover:text-accent">Case Studies</Link>
              <Link href="/how-we-work" className="text-sm text-text-muted transition hover:text-accent">How We Work</Link>
              <Link href="/trust-governance" className="text-sm text-text-muted transition hover:text-accent">Trust & Governance</Link>
              <Link href="/company" className="text-sm text-text-muted transition hover:text-accent">About</Link>
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.15em] text-text-secondary uppercase">Contact</p>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="text-sm text-text-muted transition hover:text-accent">Book a Fit Call</Link>
              <a href="mailto:hello@enabridge.ai" className="text-sm text-text-muted transition hover:text-accent">hello@enabridge.ai</a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} Enabridge. All rights reserved.</p>
          <p className="text-xs text-text-muted/70">Bangkok, Thailand</p>
        </div>
      </div>
    </footer>
  );
}
