# Gomentum Phase 6 Testing Checklist

## Build checks

- [ ] Run `npm install`
- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Run `npm run start`

## Route checks

- [ ] `/`
- [ ] `/how-it-works`
- [ ] `/features`
- [ ] `/adhd-task-initiation`
- [ ] `/use-cases`
- [ ] `/pricing`
- [ ] `/resources`
- [ ] `/task-paralysis-guide`
- [ ] `/faq`
- [ ] `/contact`
- [ ] `/privacy`
- [ ] `/terms`
- [ ] `/accessibility`
- [ ] `/sitemap.xml`
- [ ] `/robots.txt`

## Conversion checks

- [ ] Primary CTA appears above the fold on homepage
- [ ] Start One Small Step links to the demo
- [ ] Demo default state works
- [ ] Demo empty state works
- [ ] Demo vague state works
- [ ] Demo loading state appears
- [ ] Demo success state appears
- [ ] Demo error state appears for gibberish input
- [ ] Post-output CTA links to beta access
- [ ] Pricing clearly says free during beta and no card required
- [ ] Contact form validates empty or invalid fields
- [ ] Contact form shows a success state

## SEO checks

- [ ] Each page has one H1
- [ ] Each page has unique metadata
- [ ] Open Graph image is available at `/og/gomentum-og.svg`
- [ ] Sitemap includes all public routes
- [ ] Robots allows public indexing
- [ ] Internal links connect Home, How It Works, Features, ADHD page, Pricing, Resources, FAQ, and Contact
- [ ] JSON-LD appears for Organization, SoftwareApplication, FAQPage, and Article pages

## Accessibility checks

- [ ] Keyboard can reach all navigation links
- [ ] Mobile menu button has `aria-expanded`
- [ ] FAQ uses keyboard-accessible native disclosure behavior
- [ ] Form fields have visible labels
- [ ] Error and success messages use `aria-live` where needed
- [ ] Focus states are visible
- [ ] Body text is at least 16px
- [ ] CTA tap targets are at least 44px where practical
- [ ] No flashing or strobing motion
- [ ] Non-medical disclaimer is visible and readable

## Evidence to capture for final submission

- [ ] Live Vercel URL screenshot
- [ ] Homepage mobile screenshot
- [ ] Homepage desktop screenshot
- [ ] Demo success screenshot
- [ ] Pricing screenshot showing free beta and no card required
- [ ] FAQ screenshot
- [ ] Contact form screenshot
- [ ] `/sitemap.xml` screenshot
- [ ] `/robots.txt` screenshot
- [ ] Lighthouse report screenshots
- [ ] WAVE or accessibility checker screenshots
