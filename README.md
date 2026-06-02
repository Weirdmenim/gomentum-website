# Gomentum Website

This is the restored clean Gomentum website package. It keeps the full website output and the build scripts, while removing only non-required temporary notes and empty folders.

## What is included

- `scripts/` - source build, validation, and local server scripts
- `public/evidence/` - evidence placeholder assets
- `dist/` - generated static website pages and assets
- `package.json` - project commands
- `vercel.json` - deployment config

## Pages included

1. Home `/`
2. Product `/product/`
3. Features `/features/`
4. How It Works `/how-it-works/`
5. Use Cases `/use-cases/`
6. Resources `/resources/`
7. Pricing `/pricing/`
8. FAQ `/faq/`
9. Contact `/contact/`
10. Privacy `/privacy/`
11. Terms `/terms/`
12. Accessibility `/accessibility/`
13. Evidence & QA `/evidence/`
14. ADHD Task Initiation `/adhd-task-initiation/`
15. Task Paralysis Guide `/task-paralysis-guide/`

## Local commands

```bash
npm install
npm run build
npm run validate
npm start
```

Then open:

```txt
http://localhost:3000
```

## Vercel settings

```txt
Framework Preset: Other
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Root Directory: ./
```

## GitHub push note

This package keeps `dist/` visible and not ignored, so the generated page files will appear when you push to GitHub. `node_modules`, `.env`, and `.vercel` are ignored.
