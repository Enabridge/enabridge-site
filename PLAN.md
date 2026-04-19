# Enabridge Site Restructuring Plan

## Problem
The site currently positions Enabridge as an enterprise Agentic AI consultancy — which is dishonest. The real story: Enabridge builds software fast with AI coding agents, teaches organizations AI, and is building an Agentic AI product (OpenBridge).

## Summary of Decisions
- **Home hero**: Build + Teach + Consult positioning
- **/solutions → /services**: Real services (Custom Dev, AI Training, AI Consulting)
- **/trust-governance → merged into /company**: Delete standalone page
- **NEW /openbridge**: Dedicated product teaser page
- **/agentic-ai**: Honest tone, connects to OpenBridge + consulting
- **/case-studies**: Enhance with AI coding agent speed+quality story
- **/how-we-work**: Assessment-first, education emphasis, training credentials
- **/company**: Keep + add founder info + absorb trust section
- **/contact**: Simplify to LINE @enabridge / Phone 065-6688686 / Email team@enabridge.ai
- **Language**: English only
- **LINE URL**: https://line.me/R/ti/p/@enabridge

---

## Phase 1: Data Layer

### 1a. `src/data/content.ts`
- Remove `solutions` array
- Add `services` array (3 items: custom-development, ai-training, ai-consulting)
- Add `trainingCredentials` array (CIB, Immigration Bureau ตม., MAKE, TopCooling, YouTube)
- Add `openBridgeFeatures` array (3 teaser items)
- Add `aiStory` field to each case study (highlight AI coding agent usage)
- Update `trustChips` to honest chips: "AI-powered development", "3 production systems shipped", "Corporate AI training", "Building OpenBridge"
- Update `whyEnabridge` to real differentiators
- Update `deliveryPhases` to assessment-first model
- Add `founderInfo` object (Ekkachai, 20yr experience, banks, crypto, global tech)
- Add `contactInfo` constant: LINE @enabridge, phone 065-6688686, email team@enabridge.ai

### 1b. `src/data/navigation.ts`
New nav structure:
```
Services (children: Custom Dev, AI Training, AI Consulting)
Case Studies (children: E-Coupon/POS, Travel Rule, E-Wallet)
How We Work
OpenBridge
Company
[Contact Us] (CTA button)
```
- Remove "Agentic AI" from nav (page still exists, just not in nav)
- Remove "Trust" from nav

---

## Phase 2: Shared Components

### 2a. `src/components/BrandLogo.tsx`
- Change subtitle from "Agentic AI, trust-first" → "Build · Teach · Consult"

### 2b. `src/components/CTABanner.tsx`
- New defaults: headline "Let's talk about what you need"
- Replace Link buttons with direct contact: LINE, Phone, Email
- Keep `headline` prop for per-page customization

### 2c. `src/components/Footer.tsx`
- Column 2: "Services" with 3 new service links
- Column 3: Case Studies, How We Work, OpenBridge, Company
- Column 4: LINE @enabridge, 065-6688686, team@enabridge.ai
- Update tagline text

---

## Phase 3: Delete Old Routes

### 3a. Delete `src/app/trust-governance/` directory
### 3b. Delete `src/app/solutions/` directory (both page.tsx and [slug])

---

## Phase 4: Create New Routes

### 4a. `src/app/services/page.tsx` — Services listing
- Hero: "We build, we teach, we consult."
- 3 service cards from data, linking to /services/[slug]

### 4b. `src/app/services/[slug]/page.tsx` — Service detail
- Same pattern as old solutions/[slug] but with services data
- generateStaticParams + generateMetadata

### 4c. `src/app/openbridge/page.tsx` — Product teaser
- Hero: "OpenBridge — Agentic AI, built from delivery experience."
- Features section from openBridgeFeatures data
- "What makes it different" section (built from real experience, not theory)
- Direct contact CTA (not generic CTABanner — custom section with LINE/Phone/Email)

---

## Phase 5: Rewrite Existing Pages

### 5a. `src/app/contact/page.tsx` — Simplify drastically
- Remove: Calendly placeholder, contact form, trust stats
- Keep: PageHero + 3 large contact cards (LINE, Phone, Email)
- No CTABanner (this IS the contact page)

### 5b. `src/app/case-studies/page.tsx` — Enhanced framing
- Hero: "Real systems, built fast with AI coding agents."
- Add AI coding agent story angle to description
- Show aiStory badge on each case study card

### 5c. `src/app/case-studies/[slug]/page.tsx` — Add aiStory display
- Render aiStory string prominently near stats

### 5d. `src/app/company/page.tsx` — Expand
- Update hero and mission text (honest tone)
- Add founder section (Ekkachai, 20yr experience, industries)
- Add trust & governance section (absorbed from deleted page)
- Update principles list

### 5e. `src/app/agentic-ai/page.tsx` — Honest rewrite
- Hero: "What Agentic AI means — and where we are with it."
- Keep maturity model (accurate) but frame honestly
- Capabilities as educational (not "what we deploy")
- New section: OpenBridge connection
- New section: Custom workflow consulting offer

### 5f. `src/app/how-we-work/page.tsx` — Assessment-first
- Hero: "Assessment first. Then build, teach, or consult."
- Updated delivery phases (assessment-first model)
- New section: Training credentials (CIB, ตม., MAKE, TopCooling, YouTube)
- Education philosophy section
- Updated deliverables

### 5g. `src/app/page.tsx` — Home page rewrite
- New hero: Build + Teach + Consult positioning
- Section: What We Do (3 service cards)
- Section: Proven Delivery (case studies with AI coding story)
- Section: OpenBridge teaser
- Section: Why Enabridge (updated differentiators)
- CTA Banner

### 5h. `src/app/layout.tsx` — Metadata update
- Title: "Enabridge — Build, Teach, Consult with AI"
- Description updated

---

## Phase 6: Verify
- `npm run build` — all routes compile
- `npm run lint` — no errors
- Visual check all pages at localhost:3000

---

## What Stays Unchanged
- Visual design system (globals.css, dark theme, colors, fonts)
- Component patterns (card grids, borders, sections)
- Navbar.tsx structure (auto-reads from navigation.ts)
- PageHero.tsx (same interface)
- BrandLogo.tsx SVG (only subtitle text changes)
