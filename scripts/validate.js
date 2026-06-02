const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const required = [
  'index.html',
  'product/index.html',
  'features/index.html',
  'how-it-works/index.html',
  'use-cases/index.html',
  'resources/index.html',
  'pricing/index.html',
  'faq/index.html',
  'contact/index.html',
  'privacy/index.html',
  'terms/index.html',
  'accessibility/index.html',
  'evidence/index.html',
  'adhd-task-initiation/index.html',
  'task-paralysis-guide/index.html',
  'sitemap.xml',
  'robots.txt',
  'assets/styles.css',
  'assets/app.js',
  'evidence/screenshots/mobile-home-placeholder.svg',
  'evidence/lighthouse/lighthouse-home-placeholder.svg',
  'evidence/wave/wave-home-placeholder.svg',
  'evidence/form-test/form-success-placeholder.svg'
];
const missing = required.filter(file => !fs.existsSync(path.join(dist, file)));
if (missing.length) {
  console.error('Missing build files:');
  missing.forEach(file => console.error('- ' + file));
  process.exit(1);
}
const htmlFiles = required.filter(file => file.endsWith('.html'));
for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(dist, file), 'utf8');
  const checks = [
    ['title tag', /<title>.+<\/title>/],
    ['meta description', /<meta name="description" content="[^"]+"/],
    ['canonical', /rel="canonical"/],
    ['h1', /<h1>/],
    ['skip link', /Skip to content/],
    ['stylesheet', /assets\/styles\.css/]
  ];
  for (const [name, pattern] of checks) {
    if (!pattern.test(html)) {
      console.error(`${file} failed ${name} check`);
      process.exit(1);
    }
  }
}
const privacy = fs.readFileSync(path.join(dist, 'privacy/index.html'), 'utf8').toLowerCase();
if (privacy.includes('placeholder')) {
  console.error('Privacy page still contains placeholder language.');
  process.exit(1);
}

const evidence = fs.readFileSync(path.join(dist, 'evidence/index.html'), 'utf8').toLowerCase();
for (const term of ['lighthouse results table', 'wave results table', 'pending']) {
  if (!evidence.includes(term)) {
    console.error('Evidence page missing required term: ' + term);
    process.exit(1);
  }
}
const contact = fs.readFileSync(path.join(dist, 'contact/index.html'), 'utf8');
if (!contact.includes('formspree.io/f/YOUR_FORMSPREE_ID')) {
  console.error('Contact page is missing the Formspree endpoint placeholder.');
  process.exit(1);
}

console.log(`Validation passed: ${htmlFiles.length} HTML pages plus sitemap, robots, CSS, JS, and evidence assets.`);
