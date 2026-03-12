export const navLinks = [
  { label: "Agentic AI", href: "/agentic-ai" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Customer Operations", href: "/solutions/customer-operations" },
      { label: "Finance Reconciliation", href: "/solutions/finance-reconciliation" },
      { label: "Compliance & Risk", href: "/solutions/compliance-risk" },
      { label: "Internal Execution", href: "/solutions/internal-execution" },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: [
      { label: "E-Coupon / POS", href: "/case-studies/e-coupon-pos" },
      { label: "Travel Rule", href: "/case-studies/travel-rule" },
      { label: "E-Wallet", href: "/case-studies/e-wallet" },
    ],
  },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Trust", href: "/trust-governance" },
  { label: "Company", href: "/company" },
] as const;

export const ctaLink = {
  label: "Book a 30-min Fit Call",
  href: "/contact",
};
