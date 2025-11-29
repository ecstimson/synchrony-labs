# Synchrony Labs Website Rebuild - Product Requirements Document

## Executive Summary

Rebuilding Synchrony Labs' website from Framer to Astro, hosted on Vercel, with a focus on performance, maintainability, and a content-driven architecture that leverages existing CSV data and design assets.

---

## Project Overview

### Goals
1. **Performance-first architecture** - Fast loading times for study directors researching testing services
2. **Content-driven design** - CSV files drive all page content, easy to update
3. **Simple deployment** - GitHub → Vercel pipeline with automatic deployments
4. **Minimal dependencies** - Static site with single dynamic feature (contact form)
5. **SEO-optimized structure** - 3-level hierarchy for topic authority

### Tech Stack
- **Framework:** Astro 4.x (static site generation)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Contact Form:** Vercel Edge Functions → Resend (email API)
- **Version Control:** GitHub

### Repository
```
https://github.com/ecstimson/synchrony-labs.git
```

---

## Design Assets Location

### AI Studio Design Files (Local)
```
/Users/ericstimson/Documents/synchronylabs.com/AI Studio/
├── synchrony-labs (1)/          # PRIMARY - Homepage design (USE THIS)
│   ├── App.tsx
│   ├── components/
│   ├── index.html
│   ├── index.tsx
│   └── ...
│
├── synchrony-labs-services (1)/ # Services, Facility & Contact pages
│   └── ...
│
└── service-page-hubs/           # Lower level page templates (hub/parent/child)
    └── ...
```

### Content & Assets (Local)
```
/Users/ericstimson/Documents/synchronylabs.com/
├── Content - CSV/               # All page content CSVs
├── Featured Services Photos/
│   └── Resized/                 # Optimized service images
└── [Brand Guide PDF]
```

### Design Characteristics (from AI Studio)
- **Theme:** Light/dark mode toggle supported
- **Hero:** ECG heartbeat line pattern background
- **Primary Color:** Navy/dark blue (#1e3a5f or similar)
- **Accent Color:** Light blue (#5b9bd5 or similar)  
- **Typography:** Clean sans-serif (Inter or similar)
- **Buttons:** Primary (blue fill), Secondary (outline/ghost)
- **Logo:** Shield with heart/EKG element, "SYNCHRONY LABS" wordmark

---

## Site Architecture

### URL Structure (39 Pages Total)

```
/                                    # Homepage
├── /preclinical-services/           # Hub landing page
│   │
│   ├── /cardiovascular-disease-testing/          # Hub (5 child categories)
│   │   ├── /heart-failure-testing/               # Parent (2 children)
│   │   │   ├── /heart-pump-testing/              # Child
│   │   │   └── /lvad-testing/                    # Child
│   │   │
│   │   ├── /heart-valve-testing/                 # Parent (8 children)
│   │   │   ├── /tavr-testing/
│   │   │   ├── /mitraclip-testing/
│   │   │   ├── /sapien-valve-testing/
│   │   │   ├── /evolut-testing/
│   │   │   ├── /pascal-testing/
│   │   │   ├── /tendyne-testing/
│   │   │   ├── /triclip-testing/
│   │   │   └── /corevalve-testing/
│   │   │
│   │   ├── /structural-heart-testing/            # Parent (3 children)
│   │   │   ├── /laa-closure-testing/
│   │   │   ├── /watchman-device-testing/
│   │   │   └── /renal-denervation-testing/
│   │   │
│   │   ├── /arrhythmia-testing/                  # Parent (2 children)
│   │   │   ├── /pacemaker-testing/
│   │   │   └── /icd-testing/
│   │   │
│   │   └── /coronary-stent-testing/              # Parent (1 child)
│   │       └── /des-testing/
│   │
│   ├── /dcb-testing/                             # Hub (no children)
│   │
│   ├── /neurovascular-testing/                   # Hub (3 children)
│   │   ├── /liquid-embolic-testing/
│   │   ├── /thrombectomy-testing/
│   │   └── /aspiration-thrombectomy/
│   │
│   ├── /peripheral-vascular-testing/             # Hub (4 children)
│   │   ├── /carotid-stent/
│   │   ├── /aaa-device-testing/
│   │   ├── /ivc-filter-testing/
│   │   └── /embolic-protection/
│   │
│   ├── /surgical-robotics-testing/               # Hub (2 children)
│   │   ├── /endoscopic-device-testing/
│   │   └── /laparoscopic-testing/
│   │
│   └── /medical-device-testing/                  # Hub (3 children)
│       ├── /glp-testing/
│       ├── /biocompatibility/
│       └── /fda-regulatory-testing/
│
├── /preclinical-facility/                        # Static page
└── /contact/                                     # Contact form page
```

---

## Page Templates (4 Types)

### Template 1: Hub Pages (6 pages)
**Used for:** cardiovascular-disease-testing, neurovascular-testing, peripheral-vascular-testing, surgical-robotics-testing, medical-device-testing, dcb-testing

**Sections:**
1. Hero (headline, description)
2. Subpages Cards Grid (links to child pages)
3. Why Choose Section (3 cards)
4. Featured Services (detailed descriptions)
5. Related Services (cross-links to other hubs)
6. CTA Section

**Data Source:** `preclinical-services.csv` (hub pages)

---

### Template 2: Cardiovascular Parent Pages (5 pages)
**Used for:** heart-failure-testing, heart-valve-testing, structural-heart-testing, arrhythmia-testing, coronary-stent-testing

**Sections:**
1. Hero with Breadcrumb
2. Sub Services Cards Grid (links to children)
3. Primary Content (What We Test + Key Capabilities)
4. Why Choose Section (3 cards)
5. CTA Section

**Data Source:** `cardiovascular-parent-pages-final.csv`

---

### Template 3: Service Detail Pages (28 pages)
**Used for:** All individual testing service pages

**Sections:**
1. Hero with Breadcrumb
2. Primary Content (What We Test + Key Capabilities list)
3. Why Choose Section (3 cards)
4. CTA Section

**Data Sources:** Multiple CSVs by category:
- `heart-valve-testing.csv`
- `heart-failure-child-pages.csv`
- `structural-heart.csv`
- `arrhythmia-child-pages.csv`
- `coronary-stent-testing.csv`
- `neurovascular-services.csv`
- `peripheral-vascular.csv`
- `surgical-robotics.csv`
- `medical-device-testing.csv`

---

### Template 4: Static Pages
**Used for:** Homepage, Preclinical Facility, Contact

**Custom layouts per page**

---

## Project Structure

```
synchrony-labs/
├── public/
│   ├── images/
│   │   └── services/              # Featured service photos
│   ├── logos/
│   │   ├── logo.svg
│   │   └── logo-white.svg
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── brand/                 # Brand guide reference
│   │
│   ├── components/
│   │   ├── global/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   ├── MobileMenu.astro
│   │   │   └── Breadcrumb.astro
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── HeroWithBreadcrumb.astro
│   │   │   ├── SubServicesGrid.astro
│   │   │   ├── PrimaryContent.astro
│   │   │   ├── WhyChoose.astro
│   │   │   ├── FeaturedServices.astro
│   │   │   ├── RelatedServices.astro
│   │   │   └── CTASection.astro
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── ServiceCard.astro
│   │   │   └── CapabilityItem.astro
│   │   │
│   │   └── forms/
│   │       └── ContactForm.astro
│   │
│   ├── content/
│   │   └── services/              # CSV files converted to collections
│   │
│   ├── data/
│   │   ├── hub-pages.json         # Processed from CSV
│   │   ├── parent-pages.json
│   │   └── service-pages.json
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro       # HTML wrapper, head, scripts
│   │   ├── HubPageLayout.astro
│   │   ├── ParentPageLayout.astro
│   │   └── ServicePageLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── contact.astro
│   │   ├── preclinical-facility.astro
│   │   │
│   │   └── preclinical-services/
│   │       ├── index.astro        # Services landing
│   │       └── [...slug].astro    # Dynamic routing for all service pages
│   │
│   ├── styles/
│   │   └── global.css             # Tailwind imports + custom styles
│   │
│   └── utils/
│       ├── csvParser.ts           # CSV to JSON converter
│       ├── navigation.ts          # Breadcrumb generation
│       └── seo.ts                 # Meta tag helpers
│
├── scripts/
│   └── build-content.js           # Pre-build CSV processing
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── vercel.json
```

---

## Implementation Phases

### Phase 1: Foundation
**Goal:** Project setup, base infrastructure

**Tasks:**
- [ ] Initialize Astro project with Tailwind
- [ ] Set up GitHub repository structure
- [ ] Connect to Vercel
- [ ] Create BaseLayout with Header/Footer
- [ ] Implement design tokens from Brand Guide (colors, typography, spacing)
- [ ] Build reusable UI components (Button, Card)

**Deliverables:**
- Astro project initialized
- Vercel deployment working
- Header/Footer components
- Tailwind config with brand styles

---

### Phase 2: Content Pipeline
**Goal:** CSV data → Astro content collections

**Tasks:**
- [ ] Copy all CSV files to `src/data/raw/`
- [ ] Create build script to parse CSVs into JSON
- [ ] Define TypeScript types for each page template
- [ ] Set up Astro content collections
- [ ] Create data loading utilities

**Data Processing Example:**
```typescript
interface ServicePage {
  slug: string;
  title: string;
  parentHub: string;
  parentUrl: string;
  heroHeadline: string;
  heroDescription: string;
  primaryContentTitle: string;
  primaryContentDescription: string;
  keyCapabilities: Capability[];
  whyChooseCards: WhyChooseCard[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}
```

**Important:** The `image` and `icon` fields in CSV/JSON data should be **ignored**. Images are automatically mapped based on service headings (e.g., "Heart Valve Testing" → `/images/services/Heart Valve Testing.jpg`). Icons are handled programmatically by the component system.

**Deliverables:**
- CSV → JSON build script
- TypeScript types defined
- Content collections configured
- Data loading tested

---

### Phase 3: Templates & Layouts
**Goal:** Build all 4 page templates

**Tasks:**

**3a. Section Components:**
- [ ] Hero.astro (basic)
- [ ] HeroWithBreadcrumb.astro
- [ ] SubServicesGrid.astro
- [ ] PrimaryContent.astro (with capabilities list)
- [ ] WhyChoose.astro (3-card grid)
- [ ] FeaturedServices.astro
- [ ] RelatedServices.astro
- [ ] CTASection.astro

**3b. Page Layouts:**
- [ ] HubPageLayout.astro
- [ ] ParentPageLayout.astro
- [ ] ServicePageLayout.astro

**3c. Routing:**
- [ ] Dynamic routes for all service pages
- [ ] Breadcrumb navigation logic
- [ ] Internal linking verification

**Deliverables:**
- All section components complete
- All layouts rendering correctly
- Sample pages displaying content

---

### Phase 4: Content Integration
**Goal:** All 39 pages rendering from data

**Tasks:**
- [ ] Generate all hub pages (6)
- [ ] Generate all cardiovascular parent pages (5)
- [ ] Generate all service detail pages (28)
- [ ] Create static pages (Homepage, Facility, Contact)
- [ ] Add images to appropriate pages
- [ ] Verify all internal links work

**Deliverables:**
- All 39 pages rendering
- Images displaying
- Navigation functional
- No broken links

---

### Phase 5: Contact Form
**Goal:** Working contact form with email delivery

**Architecture:**
```
User submits form 
  → Vercel Edge Function 
  → Resend API 
  → Client's email inbox
```

**Tasks:**
- [ ] Build ContactForm.astro component
- [ ] Create `/api/contact.ts` edge function
- [ ] Set up Resend account
- [ ] Configure environment variables
- [ ] Add form validation (client + server)
- [ ] Success/error state handling
- [ ] Spam protection (honeypot field)

**Form Fields:**
- Name (required)
- Email (required)
- Company
- Phone
- Device Type / Service Interest (dropdown)
- Message (required)

**Deliverables:**
- Form renders correctly
- Submissions reach client email
- Error handling works
- Spam protection active

---

### Phase 6: Polish & SEO
**Goal:** Production-ready quality

**Tasks:**

**SEO:**
- [ ] Meta titles/descriptions on all pages
- [ ] Open Graph tags
- [ ] Sitemap generation
- [ ] robots.txt
- [ ] Schema markup (LocalBusiness, Service)

**Performance:**
- [ ] Image optimization
- [ ] Lighthouse audit (target 95+)
- [ ] Font loading optimization

**Accessibility:**
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Color contrast verification

**Final QA:**
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] All links verified
- [ ] Form tested end-to-end

**Deliverables:**
- Lighthouse scores 95+
- SEO audit passed
- Accessibility audit passed
- Client sign-off

---

### Phase 7: Launch
**Goal:** Live site

**Tasks:**
- [ ] Final content review with client
- [ ] DNS configuration (if custom domain)
- [ ] SSL verification
- [ ] Analytics setup (if needed)
- [ ] Deploy to production
- [ ] Smoke test all critical paths
- [ ] Monitor for issues

**Deliverables:**
- Site live at production URL
- All pages accessible
- Contact form working
- No console errors

---

## Technical Specifications

### Contact Form API

**Endpoint:** `/api/contact`

**Request:**
```typescript
POST /api/contact
Content-Type: application/json

{
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
  honeypot?: string; // Should be empty
}
```

**Response:**
```typescript
// Success
{ success: true, message: "Thank you for your inquiry." }

// Error
{ success: false, error: "Invalid email address." }
```

**Email Template:**
```
Subject: New Inquiry from Synchrony Labs Website

From: {name}
Email: {email}
Company: {company}
Phone: {phone}
Service Interest: {serviceInterest}

Message:
{message}

---
Submitted at: {timestamp}
```

---

### Environment Variables

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=info@synchronylabs.com
SITE_URL=https://synchronylabs.com
```

---

### Vercel Configuration

```json
// vercel.json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "functions": {
    "api/**/*.ts": {
      "runtime": "edge"
    }
  }
}
```

---

## Design System Reference

### Colors (from Brand Guide)
```css
:root {
  /* Primary - extract from Brand Guide PDF */
  --color-primary: #[TBD];
  --color-primary-dark: #[TBD];
  
  /* Secondary */
  --color-secondary: #[TBD];
  
  /* Neutrals */
  --color-gray-900: #111827;
  --color-gray-700: #374151;
  --color-gray-500: #6B7280;
  --color-gray-300: #D1D5DB;
  --color-gray-100: #F3F4F6;
  --color-white: #FFFFFF;
}
```

### Typography
```css
/* Headings */
--font-heading: 'Inter', system-ui, sans-serif;
--size-h1: 3rem;      /* 48px */
--size-h2: 2.25rem;   /* 36px */
--size-h3: 1.5rem;    /* 24px */
--size-h4: 1.25rem;   /* 20px */

/* Body */
--font-body: 'Inter', system-ui, sans-serif;
--size-body: 1rem;    /* 16px */
--size-small: 0.875rem; /* 14px */

/* Line heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Spacing
```css
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-20: 5rem;
--space-24: 6rem;

/* Section padding */
--section-padding-y: 5rem; /* 80px */

/* Max widths */
--max-width-content: 80rem; /* 1280px */
--max-width-text: 65ch;
```

---

## Content Files Checklist

### Images (from Featured Services Photos/Resized/)
- [ ] AAA Device Testing.jpg
- [ ] Biocompatibility Testing.jpg
- [ ] Carotid Stent Testing.jpg
- [ ] Coronary Stent Testing.jpg
- [ ] Direct Aspiration Thrombectomy Testing.jpg
- [ ] Endoscopic Device Testing.jpg
- [ ] FDA Regulatory Testing.jpg
- [ ] GLP Testing.jpg
- [ ] Heart Valve Testing.jpg
- [ ] IVC Filter Testing.jpg
- [ ] Laparoscopic Testing.jpg
- [ ] Liquid Embolic Testing.jpg

### Logos
- [ ] Primary logo (SVG)
- [ ] White/reversed logo (SVG)
- [ ] Favicon

### Content CSVs (from Content - CSV/)
- [ ] arrhythmia-child-pages.csv
- [ ] cardiovascular-disease-testing.csv
- [ ] coronary-stent-testing.csv
- [ ] heart-failure-child-pages.csv
- [ ] heart-valve-testing.csv
- [ ] medical-device-testing.csv
- [ ] neurovascular-services.csv
- [ ] peripheral-vascular.csv
- [ ] preclinical-services.csv
- [ ] structural-heart.csv
- [ ] surgical-robotics.csv

### Design Reference
- [ ] Brand Guide PDF
- [ ] AI Studio page designs

---

## Success Criteria

### Performance
- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

### SEO
- All pages indexed within 30 days
- Proper sitemap submitted
- No broken links (0 404s)

### Functionality
- Contact form delivers 100% of submissions
- All 39 pages accessible
- Mobile responsive at all breakpoints

### Business
- Consultation requests increase
- Organic traffic growth within 60 days

---

## Content Guidelines

### Data Field Handling
- **Image and Icon Fields:** The `image` and `icon` fields in CSV/JSON data should be **ignored**. 
  - Images are automatically mapped based on service headings (e.g., "Heart Valve Testing" → `/images/services/Heart Valve Testing.jpg`)
  - Icons are handled programmatically by the component system based on service type
  - This ensures consistency and prevents broken image references from spreadsheet data transfers

### Writing Standards
- No word "animal" anywhere
- No guaranteed outcomes language
- Specific methodologies over generic claims
- ~70 word paragraphs
- Factual capabilities only
- No unsubstantiated superlatives
- Proper standard citations (ISO, FDA)
- No comparative claims without data

---

## Quick Reference

### Page Count by Template
| Template | Count | Pages |
|----------|-------|-------|
| Hub Pages | 6 | cardiovascular, neurovascular, peripheral, surgical-robotics, medical-device, dcb |
| CV Parent Pages | 5 | heart-failure, heart-valve, structural-heart, arrhythmia, coronary-stent |
| Service Detail | 28 | All individual testing pages |
| Static | 3+ | Homepage, Facility, Contact |
| **Total** | **39+** | |

### Data Flow
```
CSV Files (Google Sheets export)
    ↓
Build Script (scripts/build-content.js)
    ↓
JSON Data (src/data/*.json)
    ↓
Astro Content Collections
    ↓
Page Templates
    ↓
Static HTML (dist/)
    ↓
Vercel CDN
```
