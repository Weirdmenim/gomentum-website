# Gomentum Website

Push-ready Gomentum website for the Website Growth, SEO & Conversion Optimization task.

This package keeps the website source files and uses a lightweight static build into `dist/`. It also includes `next`, `react`, and `react-dom` in dependencies so a Vercel project that is still set to the Next.js preset will not show "No Next.js version detected".

## Local test

```bash
npm install
npm run build
npm run validate
npm start
```

## Vercel settings

Use these exact settings:

- Framework Preset: `Other` preferred. If your existing project is stuck on `Next.js`, the package still includes Next dependencies.
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Root Directory: `./`

## Important Git note

Do not push generated folders. `.gitignore` already excludes:

- `node_modules/`
- `.next/`
- `dist/`
- `.vercel/`

## Pages included

The build generates 21 pages, including Home, Product, Features, How It Works, Use Cases, Resources, Pricing, FAQ, Contact, Privacy, Terms, Accessibility, Evidence & QA, ADHD Task Initiation, Task Paralysis Guide, and 6 Resources blog pages.
