# Gomentum Website Phase 6 Implementation

This is a production-ready Next.js App Router marketing website for the Gomentum Website Growth, SEO & Conversion Optimization task.

## What is included

- Next.js App Router
- TypeScript
- Tailwind CSS
- Inter-first system font stack
- 13 public routes
- Mobile-first layouts
- Static first-step demo
- Contact form with client-side validation states
- Newsletter form with client-side validation state
- Accessible FAQ accordion using native details and summary
- Build-safe font implementation with Inter fallback
- Unique metadata per page
- Open Graph and Twitter metadata
- Sitemap and robots routes
- Organization, SoftwareApplication, FAQPage, and Article JSON-LD schema
- Privacy, Terms, and Accessibility pages
- Honest beta language and no fake testimonials or medical claims

## Routes

- `/`
- `/how-it-works`
- `/features`
- `/adhd-task-initiation`
- `/use-cases`
- `/pricing`
- `/resources`
- `/task-paralysis-guide`
- `/faq`
- `/contact`
- `/privacy`
- `/terms`
- `/accessibility`

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Deployment to Vercel

1. Push this project to a GitHub repository.
2. Go to Vercel and import the repository.
3. Set framework preset to Next.js.
4. Add environment variable if needed:
   - `NEXT_PUBLIC_SITE_URL=https://your-live-domain.vercel.app`
5. Deploy.
6. After deployment, test:
   - `/sitemap.xml`
   - `/robots.txt`
   - all 13 routes
   - mobile layout at 390px width
   - interactive demo states
   - FAQ keyboard behavior
   - form validation states
   - Lighthouse Performance, Accessibility, Best Practices, and SEO

## Known limitations before live launch

- The public demo is static/local-rule-based, not live AI.
- The contact and newsletter forms show client-side success states. Connect Formspree, Tally, or a Vercel Serverless Function before real lead capture.
- Pricing is beta-first and marks future Starter/Plus pricing as subject to confirmation.
- Privacy and Terms pages are practical placeholders and should be reviewed before public launch.
- No real testimonials were invented. Add only permission-based testimonials later.
# gomentum-website
