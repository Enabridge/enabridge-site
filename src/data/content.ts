export const trustChips = [
  "Business-first delivery",
  "Human-in-the-loop controls",
  "Audit logs & rollback paths",
  "Production-grade engineering",
];

export const agenticMaturity = [
  {
    stage: "Assist",
    description: "AI provides analysis, recommendations, and summaries — humans make all decisions.",
  },
  {
    stage: "Operate with approval",
    description: "Agents propose actions and execute only after human approval on each step.",
  },
  {
    stage: "Operate with guardrails",
    description: "Agents act autonomously within scoped permissions, with monitoring and fallback.",
  },
];

export const deliveryPhases = [
  {
    title: "Agentic Opportunity Scan",
    timeline: "1–2 weeks",
    items: ["Workflow mapping", "ROI estimate", "Risk classification", "Pilot plan"],
  },
  {
    title: "Pilot to Production",
    timeline: "4–8 weeks",
    items: ["Agent workflow build", "System integrations", "Audit logs & controls", "Rollout plan"],
  },
  {
    title: "Scale & Optimize",
    timeline: "Ongoing",
    items: ["Workflow expansion", "Quality monitoring", "Governance review"],
  },
];

export const whyEnabridge = [
  { title: "Start with business outcomes", description: "Every engagement begins with your KPIs, not a technology pitch." },
  { title: "Deploy incrementally", description: "Ship working agents in weeks, expand scope as trust is established." },
  { title: "Maintain operational safety", description: "Audit logs, scoped permissions, and fallback modes are built in from day one." },
  { title: "Keep humans in control", description: "Approval workflows and monitoring ensure your team stays in the loop." },
];

export const caseStudies = [
  {
    slug: "e-coupon-pos",
    title: "E-Coupon / POS Ecosystem",
    tagline: "Full-stack coupon and point-of-sale platform deployed in one month.",
    stats: [
      { label: "POS mobile app", value: "1" },
      { label: "Web apps", value: "2" },
      { label: "Daily active users", value: "1,000+" },
      { label: "Delivery", value: "1 month" },
    ],
    details: [
      "Built a complete POS mobile application for merchants to issue and redeem digital coupons.",
      "Developed two web applications — one for campaign management and one for analytics dashboards.",
      "Implemented a backend API layer with Nginx gateway handling authentication, rate limiting, and routing.",
      "Achieved 1,000+ daily active users within the first month of launch.",
    ],
  },
  {
    slug: "travel-rule",
    title: "Blockchain Compliance (Travel Rule)",
    tagline: "Regulatory compliance engine for crypto transactions with KYC integration.",
    stats: [
      { label: "Compliance logic", value: "Travel Rule" },
      { label: "KYC provider", value: "Sumsub" },
      { label: "Delivery", value: "2 months" },
    ],
    details: [
      "Designed and built compliance logic implementing FATF Travel Rule requirements for virtual asset transfers.",
      "Integrated Sumsub for KYC verification, automating identity checks as part of the transaction flow.",
      "Built a rules engine that evaluates transaction risk in real time and routes flagged transfers for review.",
      "Delivered production-ready compliance infrastructure in two months.",
    ],
  },
  {
    slug: "e-wallet",
    title: "E-Wallet System",
    tagline: "Digital wallet platform with partner onboarding and bank payouts.",
    stats: [
      { label: "Partner onboarding", value: "Automated" },
      { label: "Bank payout gateway", value: "Integrated" },
      { label: "Delivery", value: "4 months" },
    ],
    details: [
      "Built an end-to-end e-wallet system supporting consumer top-ups, peer-to-peer transfers, and merchant payments.",
      "Developed automated partner onboarding workflows including KYB verification and contract management.",
      "Integrated bank payout gateways for real-time fund disbursement to partner bank accounts.",
      "Delivered the complete platform in four months with full audit trail and transaction monitoring.",
    ],
  },
];

export const trustGovernance = [
  { title: "Human approval for high-impact actions", description: "Agents escalate to designated approvers before executing sensitive operations." },
  { title: "Audit logs", description: "Every agent action is logged with timestamps, inputs, outputs, and decision rationale." },
  { title: "Scoped permissions", description: "Agents only access the systems and data they need — nothing more." },
  { title: "Fallback mode", description: "If an agent encounters uncertainty, it pauses and routes to a human operator." },
  { title: "Monitoring", description: "Real-time dashboards track agent performance, error rates, and anomalies." },
  { title: "Data boundaries", description: "Strict controls on what data agents can read, write, and transmit." },
];

export const solutions = [
  {
    slug: "customer-operations",
    title: "Customer Operations",
    tagline: "Automate support triage, ticket routing, and response drafting with agents that follow your playbook.",
    useCases: [
      "Intelligent ticket classification and priority assignment",
      "Draft responses using your knowledge base and past resolutions",
      "Escalation routing based on sentiment, complexity, and SLA",
      "Customer follow-up scheduling and tracking",
    ],
  },
  {
    slug: "finance-reconciliation",
    title: "Finance Reconciliation",
    tagline: "Reduce manual reconciliation effort with agents that match, flag, and report discrepancies.",
    useCases: [
      "Automated transaction matching across systems",
      "Exception detection and anomaly flagging",
      "Reconciliation report generation",
      "Audit-ready documentation of every match decision",
    ],
  },
  {
    slug: "compliance-risk",
    title: "Compliance & Risk",
    tagline: "Keep up with regulatory requirements using agents that monitor, flag, and document compliance actions.",
    useCases: [
      "Continuous regulatory monitoring and change detection",
      "Automated compliance checks on transactions and processes",
      "Risk scoring and escalation workflows",
      "Audit trail generation for regulatory reporting",
    ],
  },
  {
    slug: "internal-execution",
    title: "Internal Execution",
    tagline: "Streamline internal workflows — from procurement approvals to data entry — with scoped AI agents.",
    useCases: [
      "Automated data entry and cross-system synchronization",
      "Procurement and approval workflow acceleration",
      "Meeting summary generation and action item tracking",
      "Internal reporting and dashboard updates",
    ],
  },
];
