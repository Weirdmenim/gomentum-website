const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE_URL = 'https://gomentum-website.vercel.app';
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORMSPREE_ID';

const nav = [
  ['Product', '/product/'],
  ['How it works', '/how-it-works/'],
  ['Use cases', '/use-cases/'],
  ['Resources', '/resources/'],
  ['Pricing', '/pricing/'],
  ['FAQ', '/faq/']
];

const footerLinks = [
  ['Home', '/'],
  ['Product', '/product/'],
  ['Features', '/features/'],
  ['How it works', '/how-it-works/'],
  ['Use cases', '/use-cases/'],
  ['Resources', '/resources/'],
  ['Task paralysis guide', '/task-paralysis-guide/'],
  ['ADHD task initiation', '/adhd-task-initiation/'],
  ['Pricing', '/pricing/'],
  ['FAQ', '/faq/'],
  ['Contact', '/contact/'],
  ['Privacy', '/privacy/'],
  ['Terms', '/terms/'],
  ['Accessibility', '/accessibility/'],
  ['Evidence & QA', '/evidence/']
];

const productScreens = [
  { title: 'Task input', eyebrow: 'Start here', body: 'Write the task in messy words. No organizing first.', rows: ['finish report', 'reply to one email', 'clean desk'], action: 'Show me the first move', progress: 'Step 1 of 4' },
  { title: 'Brain dump', eyebrow: 'Clear your head', body: 'Drop the messy list before it becomes pressure.', rows: ['client proposal', 'laundry', 'study notes'], action: 'Sort gently', progress: 'Step 2 of 4' },
  { title: 'Mood check-in', eyebrow: 'Before the task', body: 'Choose your energy so the start feels realistic.', rows: ['Low energy', 'Okay', 'Ready'], action: 'Use this energy', progress: 'Step 3 of 4' },
  { title: 'First move', eyebrow: 'One tiny action', body: 'Open the document and write only the title.', rows: ['First move ready', '3 minutes', 'Stop there if needed'], action: 'Start for 3 minutes', progress: 'Step 4 of 4' },
  { title: '3-minute timer', eyebrow: 'Start small', body: 'A short timer helps you begin without pressure.', rows: ['03:00', 'Keep going?', 'Take a break'], action: 'Begin', progress: 'Session' },
  { title: 'Gentle reflection', eyebrow: 'After starting', body: 'Mark what happened. The start counts.', rows: ['Started', 'Still moving', 'Done for now'], action: 'Save progress', progress: 'Reflection' }
];

const useCases = [
  ['Work tasks', 'You have a report, proposal, or email you keep avoiding.', 'Write my client proposal', 'Open the document and write only the title.'],
  ['Study tasks', 'The chapter feels too big, so the first action needs to feel tiny.', 'Study chapter 4', 'Open the chapter and read only the first heading.'],
  ['Life admin', 'Small tasks pile up until the list feels heavy.', 'Reply to three messages', 'Open one message and write the first sentence.'],
  ['Cleaning or home tasks', 'The room feels like too much to fix at once.', 'Clean my room', 'Pick up five visible items and put them in one place.'],
  ['Creative tasks', 'The blank page feels harder than the work.', 'Start my design idea', 'Write three rough words about the idea.'],
  ['Overwhelming tasks', 'The task is real, but your brain cannot find the entrance.', 'Sort everything I need to do', 'Write the task name at the top of a blank note.']
];

const faqs = {
  'About Gomentum': [
    ['What is Gomentum?', 'Gomentum helps you start a task by turning it into one tiny first move and a short start session. See the Product page for the flow.'],
    ['Is it a task manager?', 'No. Task managers help you organize work. Gomentum helps before that, when starting is the hard part.']
  ],
  'Using the product': [
    ['What should I type first?', 'Type one task in plain words, like “reply to emails” or “start my report.”'],
    ['What happens after the first move?', 'You can start a short timer, continue, pause, or try another task.'],
    ['Where can I see examples?', 'The Use Cases page shows work, study, life admin, home, creative, and overwhelming-task examples.']
  ],
  'Beta and pricing': [
    ['Is Gomentum free?', 'Gomentum is free during beta. No card is required. See the Pricing page for the current beta position.'],
    ['Will pricing change later?', 'Yes. If paid plans are introduced, users should be told clearly before anything changes.']
  ],
  'Privacy and safety': [
    ['Does the public demo save my task?', 'No. The public demo runs locally in the browser. Read the Privacy page for the plain-English policy.'],
    ['Is Gomentum medical advice?', 'No. It is not therapy, diagnosis, or medical treatment. It is a task initiation support tool.'],
    ['What if the site is hard to use?', 'Use the Contact page to report accessibility or usability issues. The Accessibility page explains current commitments.']
  ],
  'ADHD and task paralysis': [
    ['Can people with ADHD-style task paralysis use it?', 'Yes. The experience is designed to be calm, clear, and low-pressure. It does not claim to treat ADHD.'],
    ['Why does the first move matter?', 'Because the hardest part is often entering the task, not understanding the whole plan. Read the Task Paralysis Guide for more context.']
  ]
};

const resources = [
  { title: 'Task paralysis guide', category: 'Task paralysis', time: '7 min read', problem: 'You know the task matters, but your brain cannot find the entrance.', action: 'Write the task name and choose one visible part of it.', href: '/task-paralysis-guide/' },
  { title: 'ADHD-friendly task initiation', category: 'ADHD-friendly productivity', time: '6 min read', problem: 'Normal productivity advice can feel like another demand.', action: 'Start with a low-energy first move instead of a perfect routine.', href: '/adhd-task-initiation/' },
  { title: 'When to use a 3-minute start', category: 'Focus', time: '4 min read', problem: 'A long focus block can feel too big to begin.', action: 'Set a 3-minute timer and stop when it ends if needed.', href: '/how-it-works/' },
  { title: 'Why task managers can feel like more work', category: 'Procrastination', time: '5 min read', problem: 'Organizing the task can become a new task.', action: 'Skip the system and ask for the first physical action.', href: '/features/' },
  { title: 'Tiny habits for stuck days', category: 'Tiny habits', time: '5 min read', problem: 'Big routines collapse when energy is low.', action: 'Pick one repeatable start cue, like opening the note first.', href: '/resources/' },
  { title: 'Starting routines for study and work', category: 'Starting routines', time: '6 min read', problem: 'Work, study, and home tasks each need a different entrance.', action: 'Choose the example closest to your task and copy the first move.', href: '/use-cases/' }
];


const lighthouseRows = [
  ['Home', 'Pending', 'Pending', 'Pending', 'Pending', 'Mobile and desktop Lighthouse', 'To be captured'],
  ['Contact', 'Pending', 'Pending', 'Pending', 'Pending', 'Form and accessibility test', 'To be captured'],
  ['FAQ', 'Pending', 'Pending', 'Pending', 'Pending', 'Content and accordion test', 'To be captured'],
  ['Task Paralysis Guide', 'Pending', 'Pending', 'Pending', 'Pending', 'SEO article test', 'To be captured'],
  ['ADHD Task Initiation', 'Pending', 'Pending', 'Pending', 'Pending', 'SEO article test', 'To be captured']
];

const waveRows = [
  ['Home', 'Pending', 'Pending', 'Pending', 'Run WAVE and document fixes made', 'Awaiting test screenshot'],
  ['Contact', 'Pending', 'Pending', 'Pending', 'Check labels, errors, and success state', 'Awaiting test screenshot'],
  ['FAQ', 'Pending', 'Pending', 'Pending', 'Check accordion semantics and heading order', 'Awaiting test screenshot'],
  ['Task Paralysis Guide', 'Pending', 'Pending', 'Pending', 'Check headings, links, and contrast', 'Awaiting test screenshot'],
  ['Pricing', 'Pending', 'Pending', 'Pending', 'Check plan cards, CTAs, and contrast', 'Awaiting test screenshot']
];

const evidenceAssets = [
  ['screenshots', 'mobile-home-placeholder.svg', 'Placeholder slot for the real mobile homepage screenshot.'],
  ['screenshots', 'mobile-demo-placeholder.svg', 'Placeholder slot for the real mobile first-move demo screenshot.'],
  ['lighthouse', 'lighthouse-home-placeholder.svg', 'Placeholder slot for the Lighthouse homepage report screenshot.'],
  ['lighthouse', 'lighthouse-contact-placeholder.svg', 'Placeholder slot for the Lighthouse contact page report screenshot.'],
  ['wave', 'wave-home-placeholder.svg', 'Placeholder slot for the WAVE homepage result screenshot.'],
  ['wave', 'wave-contact-placeholder.svg', 'Placeholder slot for the WAVE contact page result screenshot.'],
  ['form-test', 'form-success-placeholder.svg', 'Placeholder slot for the contact form success state screenshot.']
];

const pages = [
  {
    slug: '/',
    title: 'Gomentum | Task Initiation App for Starting Small',
    description: 'Gomentum helps overwhelmed people start tasks with one tiny first move, a calm timer, and ADHD-friendly task support.',
    h1: 'Start the task without fighting yourself.',
    body: homePage()
  },
  {
    slug: '/product/',
    title: 'Product | Gomentum Task Initiation Flow',
    description: 'See how Gomentum supports brain dumps, mood check-ins, first moves, short timers, and gentle reflection.',
    h1: 'A product built around the first move.',
    body: productPage()
  },
  {
    slug: '/features/',
    title: 'Features | Gomentum First-Move Support',
    description: 'Explore Gomentum features for task input, mood-aware starts, first moves, short timers, and progress reflection.',
    h1: 'Simple features for getting unstuck.',
    body: featuresPage()
  },
  {
    slug: '/how-it-works/',
    title: 'How Gomentum Helps You Start Tasks',
    description: 'See the simple 3-step Gomentum flow: type what feels stuck, get one tiny first move, and start with a short timer.',
    h1: 'Three small steps. No big system.',
    body: howPage()
  },
  {
    slug: '/use-cases/',
    title: 'Use Gomentum for Work, Study, Life Admin, and Home Tasks',
    description: 'See simple first-move examples for work tasks, study tasks, life admin, cleaning, creative work, and overwhelming tasks.',
    h1: 'Use it wherever starting is the hard part.',
    body: useCasesPage()
  },
  {
    slug: '/resources/',
    title: 'Task Initiation and Procrastination Resources | Gomentum',
    description: 'Calm resources for task paralysis, ADHD-friendly productivity, procrastination, focus, tiny habits, and starting routines.',
    h1: 'Resources for stuck days.',
    body: resourcesPage()
  },
  {
    slug: '/pricing/',
    title: 'Gomentum Pricing and Beta Access',
    description: 'Gomentum is free during beta with no card required. See the simple beta access plan and future pricing direction.',
    h1: 'Free during beta. No card needed.',
    body: pricingPage()
  },
  {
    slug: '/faq/',
    title: 'Gomentum FAQ | Product, Privacy, Pricing, and ADHD Support',
    description: 'Answers about Gomentum, beta access, privacy, task inputs, ADHD-related use, and how the first-move flow works.',
    h1: 'Real questions. Short answers.',
    body: faqPage()
  },
  {
    slug: '/contact/',
    title: 'Contact Gomentum',
    description: 'Contact Gomentum for beta feedback, support questions, accessibility issues, partnerships, or product questions.',
    h1: 'Tell us what you need.',
    body: contactPage()
  },
  {
    slug: '/privacy/',
    title: 'Gomentum Privacy Policy',
    description: 'Plain-English privacy policy for Gomentum, including task inputs, form data, cookies, analytics, sharing, and deletion requests.',
    h1: 'Privacy in plain English.',
    body: privacyPage()
  },
  {
    slug: '/terms/',
    title: 'Gomentum Terms of Use',
    description: 'Simple beta terms for using Gomentum, including product status, acceptable use, privacy, and contact guidance.',
    h1: 'Simple terms for beta use.',
    body: termsPage()
  },
  {
    slug: '/accessibility/',
    title: 'Gomentum Accessibility Statement',
    description: 'Gomentum accessibility commitments for keyboard navigation, contrast, readable fonts, reduced motion, forms, and feedback.',
    h1: 'Built for clarity, calm, and access.',
    body: accessibilityPage()
  },
  {
    slug: '/evidence/',
    title: 'Evidence and QA | Gomentum Website Proof',
    description: 'Evidence and QA page for Gomentum website screenshots, Lighthouse results, WAVE checks, form tests, and submission proof.',
    h1: 'Evidence and QA proof.',
    body: evidencePage()
  },
  {
    slug: '/adhd-task-initiation/',
    title: 'ADHD Task Initiation Support | Gomentum',
    description: 'A calm SEO guide for ADHD-style task initiation, task paralysis, first moves, short starts, and safe product support from Gomentum.',
    h1: 'ADHD-friendly support for the moment before starting.',
    body: adhdPage()
  },
  {
    slug: '/task-paralysis-guide/',
    title: 'Task Paralysis Guide | Why Starting Feels Hard',
    description: 'A supportive SEO guide to task paralysis, common signs, what does not help, simple first-move methods, and Gomentum task support.',
    h1: 'Task paralysis is a starting problem.',
    body: taskGuidePage()
  }
];

function esc(str) {
  return String(str).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function rel(slug) {
  if (slug === '/') return 'index.html';
  return path.join(slug.replace(/^\//, ''), 'index.html');
}

function cta(label = 'Try one small step', href = '/#demo', kind = 'primary') {
  return `<a class="btn ${kind === 'secondary' ? 'btn-secondary' : 'btn-primary'}" href="${href}">${label}</a>`;
}

function pageShell(page) {
  const canonical = SITE_URL + (page.slug === '/' ? '/' : page.slug.replace(/\/$/, ''));
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${esc(page.title)}" />
  <meta property="og:description" content="${esc(page.description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${SITE_URL}/assets/og-gomentum.svg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="theme-color" content="#FFF8EC" />
  <link rel="icon" href="/assets/favicon.svg" />
  <link rel="stylesheet" href="/assets/styles.css" />
  <script type="application/ld+json">${JSON.stringify(schemaFor(page))}</script>
</head>
<body data-page="${page.slug}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${header()}
  <main id="main" tabindex="-1">
    ${page.body}
  </main>
  ${footer()}
  <a class="sticky-cta" href="/#demo" aria-label="Try one small step">Try one small step</a>
  <script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function header() {
  const navItems = nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
  return `<header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/" aria-label="Gomentum home">
        <span class="brand-mark" aria-hidden="true">G</span><span>Gomentum</span>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
      <nav class="desktop-nav" aria-label="Primary navigation">${navItems}<a class="nav-cta" href="/#demo">Try one small step</a></nav>
    </div>
    <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>
      ${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      <a href="/contact/">Contact</a>
      <a href="/evidence/">Evidence & QA</a>
      <a href="/#demo" class="nav-cta">Try one small step</a>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="/"><span class="brand-mark" aria-hidden="true">G</span><span>Gomentum</span></a>
        <p>One tiny first move for the task you have been avoiding.</p>
        <p class="small">Gomentum is not therapy, diagnosis, or medical treatment.</p>
      </div>
      <div class="footer-links" aria-label="Footer links">
        ${footerLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </div>
    </div>
  </footer>`;
}

function hero({eyebrow, h1, intro, primary = 'Try one small step', secondary = 'See how it works', secondaryHref = '/how-it-works/'}) {
  return `<section class="hero section-tight">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${h1}</h1>
        <p class="hero-intro">${intro}</p>
        <div class="hero-actions">${cta(primary, '/#demo')}${cta(secondary, secondaryHref, 'secondary')}</div>
      </div>
      ${phoneMockup(productScreens[2], 'hero-phone')}
    </div>
  </section>`;
}

function homePage() {
  return `${hero({
    eyebrow: 'Task initiation, not another task manager',
    h1: 'Start the task without fighting yourself.',
    intro: 'Gomentum turns a messy task into one tiny first move, so you can begin without pressure.'
  })}
  ${demoSection()}
  <section class="section soft-section">
    <div class="container split calm-split">
      <div>
        <p class="eyebrow">For stuck moments</p>
        <h2>Starting is just harder some days.</h2>
        <p>Gomentum gives you a small entrance instead of asking you to build a full productivity system.</p>
      </div>
      ${editorialVisual('A calm person sitting beside a phone with a simple first-move card on screen.')}
    </div>
  </section>
  ${stepsSection()}
  <section class="section">
    <div class="container">
      <div class="section-head narrow"><p class="eyebrow">Product preview</p><h2>Small screens, small steps.</h2><p>Gomentum keeps the experience focused: one input, one first move, one short start.</p></div>
      <div class="mockup-row three">${phoneMockup(productScreens[0])}${phoneMockup(productScreens[1])}${phoneMockup(productScreens[3])}</div>
    </div>
  </section>
  <section class="section soft-section">
    <div class="container">
      <div class="section-head narrow"><p class="eyebrow">Useful for</p><h2>Work, study, life admin, and home tasks.</h2><p>Use it when the task is clear, but the start still feels too heavy.</p></div>
      <div class="light-card-grid three">${useCases.slice(0,3).map(useCaseCard).join('')}</div>
    </div>
  </section>
  ${trustStrip()}
  ${trustProof()}
  ${faqPreview()}
  ${finalCta('Ready to try one small step?', 'Type one task. Get one small first move. Stop there if that is enough.')}`;
}

function demoSection() {
  return `<section class="section demo-section" id="demo" aria-labelledby="demo-heading">
    <div class="container demo-wrap">
      <div class="section-head narrow"><p class="eyebrow">Try it now</p><h2 id="demo-heading">Write one task. Get one first move.</h2><p>Use a starter chip or type your own task. This public demo runs in your browser.</p></div>
      <div class="demo-card" data-demo>
        <div class="chip-row" aria-label="Starter task examples">
          ${['Write my report', 'Reply to emails', 'Study chapter 4', 'Clean my room'].map(t => `<button class="chip" type="button" data-task="${esc(t)}">${esc(t)}</button>`).join('')}
        </div>
        <label for="task-input">One task you are avoiding</label>
        <div class="input-row">
          <input id="task-input" type="text" autocomplete="off" placeholder="e.g. write my report" aria-describedby="demo-help" />
          <button class="btn btn-primary" type="button" data-demo-submit>Show me the first move</button>
        </div>
        <p id="demo-help" class="helper">Keep it messy. One task is enough.</p>
        <div class="demo-result" role="status" aria-live="polite" data-demo-result>
          <p class="eyebrow">First move preview</p>
          <p>Choose a starter task above, or type your own.</p>
        </div>
      </div>
    </div>
  </section>`;
}

function stepsSection() {
  return `<section class="section">
    <div class="container">
      <div class="section-head narrow"><p class="eyebrow">How it works</p><h2>Three steps. No big setup.</h2></div>
      <ol class="step-list">
        <li><span>1</span><div><h3>Type what feels stuck</h3><p>No categories. No project board. Just the task.</p></div></li>
        <li><span>2</span><div><h3>Get one tiny first move</h3><p>Gomentum finds the smallest useful entrance.</p></div></li>
        <li><span>3</span><div><h3>Start with a short timer</h3><p>Three minutes is enough to break the freeze.</p></div></li>
      </ol>
    </div>
  </section>`;
}

function productPage() {
  const benefits = {
    'Task input': 'Benefit: it lets the task be messy before it becomes a plan.',
    'Brain dump': 'Benefit: it gets loose thoughts out of your head before they become pressure.',
    'Mood check-in': 'Benefit: it adjusts the start to your current energy instead of forcing a perfect routine.',
    'First move': 'Benefit: it turns a vague task into one action you can do now.',
    '3-minute timer': 'Benefit: it gives you a short start line, not a long commitment.',
    'Gentle reflection': 'Benefit: it helps you notice progress without turning it into another task.'
  };
  return `${innerHero('Product', 'A calm flow for the first move.', 'See the core Gomentum moments without a heavy dashboard.')}
  <section class="section"><div class="container product-grid">
    ${productScreens.map((screen) => `<article class="product-feature"><div>${phoneMockup(screen)}</div><div><p class="eyebrow">${screen.eyebrow}</p><h2>${screen.title}</h2><p>${screen.body}</p><p class="benefit">${benefits[screen.title] || 'Benefit: it makes starting feel smaller.'}</p></div></article>`).join('')}
  </div></section>
  ${finalCta('Try the flow with one task.', 'No account needed for the public first-move preview.')}`;
}

function featuresPage() {
  const features = [
    ['Brain dump support', 'Put the messy thought somewhere safe before it becomes a plan.'],
    ['Mood check-in', 'Start with your current energy, not an ideal version of yourself.'],
    ['First move generator', 'Turn a large task into one clear physical action.'],
    ['3-minute start', 'Begin with a short timer that does not feel threatening.'],
    ['Gentle reflection', 'Notice that you started. That counts.'],
    ['Beta honesty', 'The product clearly separates what is live from what is still improving.']
  ];
  return `${innerHero('Features', 'Everything supports one job: starting.', 'The feature set is intentionally small so the product does not become another task.')}
  <section class="section"><div class="container light-card-grid three">${features.map(([h,p]) => `<article class="light-card"><h2>${h}</h2><p>${p}</p></article>`).join('')}</div></section>
  <section class="section soft-section"><div class="container split"><div><h2>Not a full productivity system.</h2><p>Gomentum is for the moment before calendars, Kanban boards, and task managers become useful.</p></div>${phoneMockup(productScreens[2])}</div></section>`;
}

function howPage() {
  return `${innerHero('How it works', 'A clean path from stuck to started.', 'The flow is short because the user may already be tired.')}
  ${stepsSection()}
  <section class="section soft-section"><div class="container"><div class="journey"><div>Messy task</div><span aria-hidden="true">→</span><div>One first move</div><span aria-hidden="true">→</span><div>3-minute start</div><span aria-hidden="true">→</span><div>Gentle reflection</div></div></div></section>
  ${finalCta('Start with the first move only.', 'That is enough for now.')}`;
}

function useCasesPage() {
  return `${innerHero('Use cases', 'Different tasks. Same gentle entrance.', 'Gomentum helps when the task is important but the start feels blocked.')}
  <section class="section"><div class="container light-card-grid two">${useCases.map(useCaseCard).join('')}</div></section>
  <section class="section soft-section"><div class="container split">${editorialVisual('A calm editorial visual showing a desk, notebook, and phone with a tiny first step.')}
  <div><h2>Use it before the pressure builds.</h2><p>The best moment to use Gomentum is when you notice yourself avoiding the first step.</p>${cta()}</div></div></section>`;
}

function resourcesPage() {
  return `${innerHero('Resources', 'Short guides for starting again.', 'Each resource points back to one practical action, not a long productivity theory.')}
  <section class="section"><div class="container resource-grid">${resources.map((item) => `<a class="resource-card" href="${item.href}"><span>${item.category}</span><h2>${item.title}</h2><p><strong>Problem:</strong> ${item.problem}</p><p class="try-line"><strong>Try this now:</strong> ${item.action}</p><small>${item.time}</small></a>`).join('')}</div></section>
  <section class="section soft-section"><div class="container split"><div><h2>Choose the guide that matches today.</h2><p>If you are frozen, start with the task paralysis guide. If you need to understand the product, see how it works. If you want examples, scan the use cases.</p><p class="link-row"><a href="/product/">Product</a><a href="/how-it-works/">How it works</a><a href="/use-cases/">Use cases</a></p></div>${editorialVisual('A warm editorial visual of a phone beside a calm reading card.')}</div></section>`;
}

function pricingPage() {
  return `${innerHero('Pricing', 'Free during beta. No card needed.', 'Use Gomentum while the product improves with early users. Pricing should feel safe, simple, and honest.')}
  <section class="section"><div class="container pricing-layout">
    <article class="pricing-card featured"><p class="eyebrow">Beta access</p><h2>Free during beta</h2><p class="price">$0</p><p>Best for overwhelmed users who want to try first-move support before committing to another tool.</p><ul><li>No card required</li><li>Public first-move demo</li><li>Beta feedback welcome</li><li>Clear notice before any paid plan</li></ul>${cta('Join beta', '/contact/')}</article>
    <article class="pricing-card"><p class="eyebrow">May become paid later</p><h2>Starter</h2><p class="price">Planned</p><p>For daily task initiation, short focus sessions, and simple progress history after beta.</p></article>
    <article class="pricing-card"><p class="eyebrow">Later</p><h2>Plus</h2><p class="price">Planned</p><p>For more AI sessions, personalization, reflection history, and deeper first-move support.</p></article>
  </div></section>
  <section class="section soft-section"><div class="container faq-lite"><h2>Pricing FAQ</h2>${simpleFaq([['Do I need a card?', 'No. Beta access does not require a card.'], ['Who is the beta best for?', 'People who want help starting work, study, life admin, home, or creative tasks.'], ['What might become paid later?', 'More AI sessions, personalization, history, and advanced support may become part of paid plans.'], ['Will I be charged suddenly?', 'No. Users should be told clearly before paid plans are introduced.']])}</div></section>`;
}

function faqPage() {
  return `${innerHero('FAQ', 'Short answers for common worries.', 'Grouped so users can find the answer without reading everything.')}
  <section class="section"><div class="container faq-page">${Object.entries(faqs).map(([group, qs]) => `<section class="faq-group"><h2>${group}</h2>${simpleFaq(qs)}</section>`).join('')}</div></section>`;
}

function contactPage() {
  const configured = !FORMSPREE_ENDPOINT.includes('YOUR_FORMSPREE_ID');
  return `${innerHero('Contact', 'Questions, feedback, or accessibility needs?', 'Send a short message. The form is set up for Formspree, with a clear success state for testing and live use.')}
  <section class="section"><div class="container contact-grid"><form class="contact-form" data-contact-form action="${FORMSPREE_ENDPOINT}" method="POST" data-formspree-configured="${configured ? 'true' : 'false'}">
    <p class="contact-direct">For beta feedback, partnerships, support, or accessibility issues, use the form below or email <a href="mailto:hello@gomentum.app">hello@gomentum.app</a>.</p>
    <input type="hidden" name="_subject" value="New Gomentum website contact message" />
    <label for="reason">What is this about?</label><select id="reason" name="reason" required><option>Beta feedback</option><option>Support question</option><option>Partnership</option><option>Accessibility issue</option><option>Other</option></select>
    <label for="name">Your name</label><input id="name" name="name" autocomplete="name" required aria-describedby="name-help" /><p id="name-help" class="sr-only">Enter your name.</p>
    <label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required aria-describedby="email-help" /><p id="email-help" class="sr-only">Enter the email address we should reply to.</p>
    <label for="message">Message</label><textarea id="message" name="message" rows="6" required aria-describedby="contact-help"></textarea>
    <p id="contact-help" class="helper">This form uses a Formspree endpoint. Set the FORMSPREE_ENDPOINT environment variable before collecting live submissions.</p>
    <button class="btn btn-primary" type="submit">Send message</button>
    <p class="form-status" role="status" aria-live="polite"></p>
  </form><aside class="contact-note"><h2>Helpful things to send</h2><ul><li>What page or feature you used.</li><li>What felt confusing or heavy.</li><li>What would make starting easier.</li></ul><p class="small">For accessibility feedback, tell us what was hard to read, navigate, or use.</p></aside></div></section>`;
}

function privacyPage() {
  return `${innerHero('Privacy', 'Your task data should feel safe.', 'This plain-English policy explains what may be collected and what is not collected.')}
  <section class="section"><div class="container prose-card">
    <h2>What we may collect</h2><p>We may collect your name, email address, contact messages, beta feedback, and basic website usage information if analytics is enabled.</p>
    <h2>What we do not collect in the public demo</h2><p>The public first-move demo runs locally in your browser. It does not need an account and should not send your task text to a server.</p>
    <h2>How task inputs may be used in the product</h2><p>If you use a logged-in product version, task inputs may be used to create first moves, short steps, and session support. The product should avoid sharing personal task data with unrelated third parties.</p>
    <h2>Cookies and analytics</h2><p>The website may use basic analytics to understand page visits, CTA clicks, and form usage. Analytics should not include private task text, names, messages, or sensitive personal content.</p>
    <h2>Sharing</h2><p>We do not sell personal information. We may use trusted tools for hosting, forms, analytics, and email if needed to operate the website.</p>
    <h2>Deletion requests</h2><p>You can request deletion of contact messages or beta data by using the Contact page. Use the subject “Data deletion request.”</p>
  </div></section>`;
}

function termsPage() {
  return `${innerHero('Terms', 'Simple beta terms.', 'These terms explain the basic expectations for using the Gomentum website and beta experience.')}
  <section class="section"><div class="container prose-card">
    <h2>Beta status</h2><p>Gomentum is an early product. Some features may change, improve, or be removed as the product is tested.</p>
    <h2>Use the website responsibly</h2><p>Do not use the website to submit harmful, illegal, abusive, or private information that should not be shared online.</p>
    <h2>No medical promise</h2><p>Gomentum is not medical advice, therapy, diagnosis, or treatment. It is a task initiation support tool.</p>
    <h2>Availability</h2><p>The website may be updated or temporarily unavailable while improvements are made.</p>
    <h2>Contact</h2><p>Questions about these terms can be sent through the Contact page.</p>
  </div></section>`;
}

function accessibilityPage() {
  return `${innerHero('Accessibility', 'Designed to reduce friction.', 'Accessibility is part of the product experience because overwhelmed users need clarity, not extra work.')}
  <section class="section"><div class="container prose-card"><p><strong>If something on the site is hard to read, navigate, or use, we want to know.</strong> Send accessibility feedback through the Contact page or email hello@gomentum.app.</p><p>This page explains the current accessibility commitments. The separate <a href="/evidence/">Evidence & QA page</a> is where final screenshots, Lighthouse checks, WAVE checks, and form test proof should be added.</p></div></section>
  <section class="section soft-section"><div class="container light-card-grid two">
    ${[
      ['Readable typography', 'The site uses a large, calm font stack with comfortable line height and short paragraphs.'],
      ['Keyboard navigation', 'Navigation, links, buttons, forms, and FAQ controls are designed to work by keyboard.'],
      ['Color contrast', 'Text and button colors are chosen for readable contrast against warm and dark backgrounds.'],
      ['Reduced motion', 'The site avoids flashing and heavy motion, and respects reduced-motion preferences.'],
      ['Form labels', 'Forms use visible labels, helper text, required fields, and clear success feedback.'],
      ['Focus states', 'Buttons, links, form fields, and FAQ controls use visible keyboard focus styles.']
    ].map(([h,p]) => `<article class="light-card"><h2>${h}</h2><p>${p}</p></article>`).join('')}
  </div></section>`;
}

function adhdPage() {
  return `${innerHero('ADHD task initiation', 'Support for the moment before starting.', 'Gomentum uses ADHD-friendly design patterns without making medical claims.')}
  <section class="section"><div class="container prose-card article-prose">
    <h2>What this page is about</h2><p>ADHD-style task initiation difficulty can feel like knowing exactly what to do while still being unable to begin. Gomentum focuses on the entry point: one task, one tiny first move, and a short start.</p>
    <h2>Who this is for</h2><p>This is for people who feel blocked at the first step, especially on low-energy, overwhelmed, scattered, or deadline-heavy days.</p>
    <h2>Common signs</h2><ul><li>You reread the same task but do not begin.</li><li>You open several apps and still avoid the work.</li><li>You wait for pressure before starting.</li><li>You feel shame even when the task is small.</li></ul>
    <h2>What usually does not help</h2><p>More dashboards, bigger plans, harsh reminders, and shame-based motivation often add pressure. For many users, the missing piece is not another list. It is a smaller entrance.</p>
    <h2>A simple 3-step method</h2><ol><li>Name the task in plain words.</li><li>Reduce it to one visible action.</li><li>Try that action for three minutes.</li></ol>
    <h2>Example task breakdowns</h2>${exampleList([['Write my report', 'Open the document and write only the title.'], ['Study chapter 4', 'Open the chapter and read the first heading.'], ['Reply to emails', 'Open one message and write the first sentence.'], ['Clean my desk', 'Move five visible items into one pile.']])}
    <h2>How Gomentum helps</h2><p>The product flow uses a task input, mood check-in, first-move result, 3-minute timer, and gentle reflection. See the <a href="/product/">Product page</a> for the screen flow or <a href="/how-it-works/">How It Works</a> for the short explanation.</p>
    <h2>Important note</h2><p>Gomentum is not a medical or therapy tool. It is a task support tool that helps you take a smaller first step.</p>
    <div class="article-cta"><h2>Try it with one task</h2><p>Type one task you have been avoiding and see one small first move.</p>${cta('Try one small step', '/#demo')}</div>
    <p class="link-row"><a href="/resources/">View related resources</a><a href="/task-paralysis-guide/">Read task paralysis guide</a><a href="/accessibility/">Accessibility commitments</a></p>
  </div></section>`;
}

function taskGuidePage() {
  return `${innerHero('Task paralysis guide', 'Task paralysis is a starting problem.', 'This guide explains the stuck moment in plain language and gives one practical way forward.')}
  <section class="section"><div class="container prose-card article-prose">
    <h2>Clear opening explanation</h2><p>Task paralysis is the moment when a task is known but the first action feels unreachable. It can happen with work, study, cleaning, messages, or personal admin.</p>
    <h2>Who this is for</h2><p>This guide is for people who delay, freeze, scroll, over-plan, or wait for panic before beginning.</p>
    <h2>Common signs</h2><ul><li>You keep thinking about the task without entering it.</li><li>The task feels bigger every time you look at it.</li><li>You try to plan everything before doing anything.</li><li>You feel relief only after the first tiny action is done.</li></ul>
    <h2>What usually does not help</h2><p>Long task lists, harsh countdowns, and perfect productivity systems can make the task feel heavier. A smaller first move often works better because it removes the need to solve the entire task upfront.</p>
    <h2>A simple 3-step method</h2><ol><li>Write the task in messy words.</li><li>Ask, “What is the smallest visible action?”</li><li>Do only that action for three minutes.</li></ol>
    <h2>Example task breakdowns</h2>${exampleList([['Clean my room', 'Pick up five visible items and put them in one place.'], ['Start proposal', 'Open the proposal file and write the client name.'], ['Sort bills', 'Place all bills in one pile.'], ['Reply to messages', 'Open one message and write the first sentence.']])}
    <h2>How to use this today</h2><p>Pick one task that has been sitting in your head. Do not organize the whole list. Write the task in plain words, choose the first visible action, and stop after three minutes if that is enough.</p>
    <h2>Try Gomentum</h2><p>Gomentum turns a messy task into one tiny first move and a short start. It is not a medical or therapy tool. It is task support for the moment before starting.</p>
    <div class="article-cta"><h2>Start with the smallest entrance</h2><p>The goal is not to finish everything. The goal is to begin without making the task heavier.</p>${cta('Try one small step', '/#demo')}</div>
    <p class="link-row"><a href="/adhd-task-initiation/">Read ADHD task initiation support</a><a href="/resources/">View resources</a><a href="/product/">See the product flow</a></p>
  </div></section>`;
}



function exampleList(items) {
  return `<div class="example-list">${items.map(([task, move]) => `<div class="mini-example"><span>${task}</span><strong>${move}</strong></div>`).join('')}</div>`;
}

function innerHero(eyebrow, h1, intro) {
  return `<section class="page-hero"><div class="container narrow"><p class="eyebrow">${eyebrow}</p><h1>${h1}</h1><p>${intro}</p></div></section>`;
}

function useCaseCard([title, situation, task, move]) {
  return `<article class="light-card use-case"><h2>${title}</h2><p>${situation}</p><div class="mini-example"><span>Task</span><strong>${task}</strong></div><div class="mini-example"><span>First move</span><strong>${move}</strong></div><a href="/#demo">Try this kind of task</a></article>`;
}

function simpleFaq(items) {
  return `<div class="faq-list">${items.map(([q,a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
}

function faqPreview() {
  return `<section class="section"><div class="container narrow faq-lite"><h2>Questions before you try it?</h2>${simpleFaq([['Is this therapy?', 'No. Gomentum is not medical advice or treatment.'], ['Do I need an account for the demo?', 'No. The public demo runs in your browser.'], ['Is it free during beta?', 'Yes. No card is needed during beta.']])}<p><a href="/faq/">Read the full FAQ</a></p></div></section>`;
}

function trustStrip() {
  return `<section class="trust-strip"><div class="container trust-row"><span>No-account demo</span><span>Runs in your browser</span><span>No medical claims</span><span>Free during beta</span></div></section>`;
}

function trustProof() {
  return `<section class="section soft-section"><div class="container"><div class="section-head narrow"><p class="eyebrow">Trust proof</p><h2>Honest proof, not fake hype.</h2><p>The site is transparent about beta status, proof gaps, and what should be tested before submission.</p></div><div class="light-card-grid two">
    <article class="light-card"><h2>Beta note</h2><p>Gomentum is in beta. The website is honest about what is live, what is improving, and what should be verified before wider launch.</p></article>
    <article class="light-card"><h2>Founder and builder note</h2><p>This website is built as a growth asset for the Gomentum task-initiation product. It avoids medical promises and keeps the first action small.</p></article>
    <article class="light-card"><h2>No fake testimonials</h2><p>No testimonials or review numbers are shown unless real, permission-based proof is available.</p></article>
    <article class="light-card"><h2>No invented waitlist count</h2><p>No waitlist number is displayed because no verified number has been provided yet.</p></article>
  </div></div></section>`;
}

function evidenceImage(folder, file, alt) {
  return `<figure class="evidence-slot"><img src="/evidence/${folder}/${file}" alt="${esc(alt)}" loading="lazy" /><figcaption>${esc(alt)}</figcaption></figure>`;
}

function table(headers, rows, className = '') {
  return `<div class="table-wrap ${className}"><table><thead><tr>${headers.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function evidencePage() {
  return `${innerHero('Evidence & QA', 'Proof slots for final submission.', 'This page keeps accessibility, SEO, form, and performance evidence visible without inventing scores or proof.')}
  <section class="section"><div class="container prose-card"><h2>Evidence status</h2><p>This page does not fake Lighthouse scores, WAVE results, testimonials, or user numbers. Add real screenshots and scores after testing the live deployment.</p><p>Evidence folders are included at <code>/public/evidence/</code> for source files and published under <code>/evidence/</code> in the built site.</p></div></section>
  <section class="section soft-section"><div class="container"><div class="section-head narrow"><p class="eyebrow">Screenshot slots</p><h2>Replace these with real test evidence.</h2></div><div class="evidence-grid">${evidenceAssets.map(([folder, file, alt]) => evidenceImage(folder, file, alt)).join('')}</div></div></section>
  <section class="section"><div class="container"><div class="section-head narrow"><p class="eyebrow">Lighthouse</p><h2>Lighthouse results table</h2><p>Fill this after running Lighthouse on the live website. Pending means not yet tested.</p></div>${table(['Page','Performance','Accessibility','Best Practices','SEO','Test Type','Date Tested'], lighthouseRows)}</div></section>
  <section class="section soft-section"><div class="container"><div class="section-head narrow"><p class="eyebrow">WAVE</p><h2>WAVE results table</h2><p>Fill this after testing the live pages with WAVE. Alerts should be reviewed manually.</p></div>${table(['Page','Errors','Contrast Errors','Alerts','Fix Summary','Status'], waveRows)}</div></section>
  <section class="section"><div class="container light-card-grid two"><article class="light-card"><h2>Form test plan</h2><p>Test the Contact form with empty fields, valid input, configured Formspree endpoint, and the visible success state.</p><a href="/contact/">Open contact form</a></article><article class="light-card"><h2>Accessibility evidence</h2><p>Capture keyboard focus, mobile layout, form labels, FAQ controls, and Lighthouse/WAVE screenshots.</p><a href="/accessibility/">View accessibility statement</a></article></div></section>`;
}

function finalCta(title, copy) {
  return `<section class="section final-cta"><div class="container narrow"><h2>${title}</h2><p>${copy}</p>${cta()}</div></section>`;
}

function phoneMockup(screen, extra = '') {
  return `<div class="phone ${extra}" role="img" aria-label="Gomentum mobile beta app mockup showing ${esc(screen.title)} screen">
    <div class="phone-shell-top"><span class="speaker"></span><span class="camera"></span></div>
    <div class="phone-screen">
      <div class="phone-status"><small>9:41</small><span>Beta</span></div>
      <div class="phone-appbar"><strong>Gomentum</strong><small>${esc(screen.progress || 'Preview')}</small></div>
      <div class="phone-progress"><span>${esc(screen.progress || 'Preview')}</span><i></i></div>
      <div class="phone-card-main">
        <p class="phone-eyebrow">${screen.eyebrow}</p>
        <h3>${screen.title}</h3>
        <p>${screen.body}</p>
      </div>
      <div class="phone-lines">${screen.rows.map((r, i) => `<span class="${i === 0 ? 'active' : ''}">${r}</span>`).join('')}</div>
      <button class="phone-button" type="button" tabindex="-1">${esc(screen.action || 'Continue')}</button>
      <div class="phone-tabs" aria-hidden="true"><span class="active"></span><span></span><span></span></div>
    </div>
  </div>`;
}

function editorialVisual(label) {
  return `<figure class="editorial-visual" role="img" aria-label="${esc(label)}">
    <div class="visual-sun"></div><div class="visual-person"><span></span></div><div class="visual-card"><strong>First move</strong><small>Open the note.</small></div>
  </figure>`;
}

function schemaFor(page) {
  const base = { '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url: SITE_URL + (page.slug === '/' ? '/' : page.slug.replace(/\/$/, '')) };
  if (page.slug === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Gomentum',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Web',
      description: page.description,
      url: SITE_URL,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free during beta' }
    };
  }
  if (page.slug === '/faq/') {
    return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: Object.values(faqs).flat().map(([q,a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  }
  if (page.slug.includes('guide') || page.slug.includes('resources') || page.slug.includes('adhd')) {
    return { ...base, '@type': 'Article', headline: page.title };
  }
  return base;
}

function writeFile(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function placeholderSvg(title, subtitle) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760" role="img" aria-label="${esc(title)}"><rect width="1200" height="760" rx="36" fill="#FFF8EC"/><rect x="70" y="70" width="1060" height="620" rx="34" fill="#FFFFFF" stroke="#E8DCC8" stroke-width="4"/><circle cx="1040" cy="150" r="58" fill="#F5A623" opacity=".35"/><text x="120" y="190" fill="#1C1C2E" font-family="Arial, sans-serif" font-size="52" font-weight="700">${esc(title)}</text><text x="120" y="260" fill="#5F6174" font-family="Arial, sans-serif" font-size="30">${esc(subtitle)}</text><rect x="120" y="350" width="420" height="210" rx="28" fill="#FFF3D8" stroke="#E8DCC8"/><text x="155" y="455" fill="#1C1C2E" font-family="Arial, sans-serif" font-size="32" font-weight="700">Replace with real evidence</text><text x="155" y="505" fill="#5F6174" font-family="Arial, sans-serif" font-size="24">Do not invent scores or screenshots.</text></svg>`;
}

function writeEvidenceAssets() {
  const publicRoot = path.join(ROOT, 'public', 'evidence');
  evidenceAssets.forEach(([folder, file, alt]) => {
    const svg = placeholderSvg(alt.replace(/\.$/, ''), 'Gomentum Evidence & QA placeholder');
    writeFile(path.join(publicRoot, folder, file), svg);
    writeFile(path.join(publicRoot, folder, '.gitkeep'), '');
    writeFile(path.join(DIST, 'evidence', folder, file), svg);
  });
}

function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });
  pages.forEach(page => writeFile(path.join(DIST, rel(page.slug)), pageShell(page)));
  writeFile(path.join(DIST, 'assets', 'styles.css'), css());
  writeFile(path.join(DIST, 'assets', 'app.js'), js());
  writeFile(path.join(DIST, 'assets', 'favicon.svg'), favicon());
  writeFile(path.join(DIST, 'assets', 'og-gomentum.svg'), ogImage());
  writeEvidenceAssets();
  writeFile(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  writeFile(path.join(DIST, 'sitemap.xml'), sitemap());
  console.log(`Built ${pages.length} pages into dist/`);
}

function sitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p => `  <url><loc>${SITE_URL}${p.slug === '/' ? '/' : p.slug}</loc></url>`).join('\n')}\n</urlset>`;
}

function css() { return `@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Nunito+Sans:wght@400;600;700;800&display=swap');
:root{--bg:#fff8ec;--soft:#fff3d8;--card:#ffffff;--ink:#1c1c2e;--muted:#5f6174;--amber:#f5a623;--teal:#00a987;--border:#e8dcc8;--shadow:0 18px 45px rgba(28,28,46,.08);--radius:28px;--max:1120px;}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--ink);font-family:'Atkinson Hyperlegible','Nunito Sans',Inter,system-ui,sans-serif;font-size:16px;line-height:1.65}a{color:inherit;text-underline-offset:4px}img,svg{max-width:100%}h1,h2,h3{font-family:'Nunito Sans','Atkinson Hyperlegible',system-ui,sans-serif;line-height:1.08;margin:0 0 16px}h1{font-size:clamp(2.35rem,7vw,4.9rem);letter-spacing:-.05em}h2{font-size:clamp(1.7rem,4vw,2.8rem);letter-spacing:-.035em}h3{font-size:1.2rem}p{margin:0 0 16px}.container{width:min(var(--max),calc(100% - 32px));margin-inline:auto}.narrow{max-width:760px}.section{padding:72px 0}.section-tight{padding:48px 0 28px}.soft-section{background:linear-gradient(180deg,#fff3d8,#fff8ec)}.skip-link{position:absolute;left:16px;top:10px;transform:translateY(-160%);background:var(--ink);color:#fff8ec;padding:10px 14px;border-radius:12px;z-index:99}.skip-link:focus{transform:none}.site-header{position:sticky;top:0;z-index:50;background:rgba(255,248,236,.92);backdrop-filter:blur(14px);border-bottom:1px solid rgba(232,220,200,.8)}.header-inner{display:flex;align-items:center;justify-content:space-between;min-height:74px}.brand{display:inline-flex;align-items:center;gap:10px;font-weight:800;text-decoration:none}.brand-mark{display:grid;place-items:center;width:38px;height:38px;border-radius:14px;background:var(--ink);color:#fff8ec}.desktop-nav{display:flex;align-items:center;gap:22px;font-size:.96rem}.desktop-nav a{text-decoration:none}.nav-cta{padding:10px 14px;border-radius:999px;background:var(--amber);color:var(--ink);font-weight:700}.menu-button{display:none;background:var(--card);border:1px solid var(--border);border-radius:999px;padding:10px 14px;color:var(--ink)}.mobile-nav{padding:12px 16px 18px;border-top:1px solid var(--border);background:var(--bg)}.mobile-nav a{display:block;padding:12px;border-radius:14px;text-decoration:none}.hero{background:radial-gradient(circle at 80% 10%,rgba(245,166,35,.18),transparent 32%),var(--bg)}.hero-grid,.split{display:grid;grid-template-columns:1.05fr .85fr;gap:48px;align-items:center}.hero-intro{font-size:clamp(1.06rem,2.5vw,1.28rem);max-width:650px;color:var(--muted)}.eyebrow{text-transform:uppercase;letter-spacing:.13em;font-size:.78rem;font-weight:800;color:#806021;margin-bottom:12px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:13px 18px;border-radius:16px;font-weight:800;text-decoration:none;border:2px solid transparent;cursor:pointer;font-family:inherit;font-size:1rem}.btn-primary{background:var(--amber);color:var(--ink)}.btn-secondary{background:#fff;color:var(--ink);border-color:var(--border)}button:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible,select:focus-visible,summary:focus-visible{outline:3px solid var(--teal);outline-offset:3px}.demo-section{padding-top:36px}.demo-wrap{max-width:820px}.section-head{text-align:center;margin:0 auto 28px}.section-head p{color:var(--muted)}.demo-card,.prose-card,.light-card,.pricing-card,.contact-form,.contact-note,.phone,.resource-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow)}.demo-card{padding:24px}.chip-row{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:18px}.chip{border:1px solid var(--border);background:var(--soft);border-radius:999px;padding:9px 12px;font:inherit;cursor:pointer}.demo-card label,.contact-form label{display:block;font-weight:800;margin:14px 0 8px}.input-row{display:grid;grid-template-columns:1fr auto;gap:12px}.input-row input,.contact-form input,.contact-form textarea,.contact-form select{width:100%;min-height:50px;border:1px solid #d8cdb8;border-radius:16px;background:#fffdf8;color:var(--ink);padding:12px 14px;font:inherit}.helper,.small{color:var(--muted);font-size:.94rem}.demo-result{margin-top:18px;background:var(--soft);border-radius:22px;padding:18px;border:1px solid #ead9b9}.step-list{display:grid;gap:14px;max-width:780px;margin:0 auto;padding:0;list-style:none}.step-list li{display:grid;grid-template-columns:54px 1fr;gap:16px;align-items:start;background:#fff;border:1px solid var(--border);border-radius:22px;padding:18px}.step-list span{display:grid;place-items:center;width:44px;height:44px;border-radius:16px;background:var(--ink);color:#fff8ec;font-weight:800}.mockup-row{display:grid;gap:20px}.mockup-row.three,.light-card-grid.three{grid-template-columns:repeat(3,1fr)}.light-card-grid.two{grid-template-columns:repeat(2,1fr)}.light-card-grid{display:grid;gap:18px}.light-card{padding:22px}.phone{max-width:320px;margin-inline:auto;padding:18px;background:#1c1c2e;color:#fff8ec;border-radius:34px}.phone-top{display:flex;justify-content:space-between;margin-bottom:18px}.phone-top span:first-child{width:64px;height:7px;background:#3a3a52;border-radius:99px}.phone-top span:last-child{width:22px;height:22px;background:var(--amber);border-radius:50%}.phone-eyebrow{color:#f7c977;font-size:.78rem;text-transform:uppercase;letter-spacing:.12em;font-weight:800}.phone p{color:#dad9e4}.phone-lines{display:grid;gap:9px;margin-top:16px}.phone-lines span{display:block;padding:10px 12px;border-radius:14px;background:#2a2a40;color:#fff8ec}.editorial-visual{position:relative;min-height:280px;margin:0;border-radius:var(--radius);background:linear-gradient(145deg,#fff,#fff0c9);border:1px solid var(--border);box-shadow:var(--shadow);overflow:hidden}.visual-sun{position:absolute;width:110px;height:110px;border-radius:50%;background:rgba(245,166,35,.32);right:28px;top:28px}.visual-person{position:absolute;left:52px;bottom:38px;width:100px;height:150px;border-radius:60px 60px 20px 20px;background:#1c1c2e}.visual-person span{position:absolute;left:26px;top:-46px;width:58px;height:58px;border-radius:50%;background:#d98a54}.visual-card{position:absolute;right:32px;bottom:42px;background:#fff;border:1px solid var(--border);border-radius:20px;padding:18px;box-shadow:var(--shadow)}.visual-card strong,.visual-card small{display:block}.trust-strip{padding:18px 0;background:#1c1c2e;color:#fff8ec}.trust-row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}.trust-row span{padding:8px 12px;border:1px solid rgba(255,248,236,.18);border-radius:999px;color:#f8ebd0}.final-cta{text-align:center;background:#fff}.page-hero{padding:70px 0 42px;background:linear-gradient(180deg,#fff3d8,#fff8ec)}.page-hero p{font-size:1.1rem;color:var(--muted)}.product-grid{display:grid;gap:30px}.product-feature{display:grid;grid-template-columns:.8fr 1fr;gap:28px;align-items:center;padding:20px;border-bottom:1px solid var(--border)}.benefit{font-weight:800;color:#664d1d}.resource-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.resource-card{display:block;text-decoration:none;padding:22px}.resource-card span{display:inline-block;font-size:.78rem;font-weight:800;text-transform:uppercase;color:#806021}.resource-card small{color:var(--muted)}.pricing-layout{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:18px}.pricing-card{padding:26px}.pricing-card.featured{background:#1c1c2e;color:#fff8ec}.pricing-card.featured p{color:#e9e2d8}.price{font-size:2.4rem;font-weight:800;color:inherit}.faq-list{display:grid;gap:10px}.faq-list details{background:#fff;border:1px solid var(--border);border-radius:18px;padding:14px 16px}.faq-list summary{font-weight:800;cursor:pointer}.faq-list p{margin-top:10px;color:var(--muted)}.faq-page,.faq-lite{display:grid;gap:24px}.contact-grid{display:grid;grid-template-columns:1.1fr .8fr;gap:22px;align-items:start}.contact-form,.contact-note,.prose-card{padding:26px}.prose-card{max-width:850px}.prose-card h2{font-size:1.45rem;margin-top:28px}.prose-card h2:first-child{margin-top:0}.prose-card p,.prose-card li{color:var(--muted)}.mini-example{background:var(--soft);border-radius:16px;padding:12px;margin:12px 0}.mini-example span,.mini-example strong{display:block}.mini-example span{font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;color:#806021;font-weight:800}.site-footer{background:#14141f;color:#fff8ec;padding:54px 0}.footer-grid{display:grid;grid-template-columns:1fr 2fr;gap:32px}.footer-brand{color:#fff8ec}.footer-links{display:grid;grid-template-columns:repeat(3,1fr);gap:8px 18px}.footer-links a{color:#e7dfd1;text-decoration:none}.sticky-cta{position:fixed;left:16px;right:16px;bottom:14px;z-index:60;display:none;text-align:center;background:var(--amber);color:var(--ink);font-weight:800;text-decoration:none;padding:13px;border-radius:16px;box-shadow:var(--shadow)}.sticky-cta.is-visible{display:none}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.contact-direct{background:var(--soft);border:1px solid #ead9b9;border-radius:18px;padding:14px;margin:0 0 12px}.link-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}.link-row a{background:#fff;border:1px solid var(--border);border-radius:999px;padding:8px 12px;text-decoration:none;font-weight:800}.try-line{background:var(--soft);border-radius:14px;padding:10px}.phone{position:relative;border:7px solid #10101a;box-shadow:0 20px 50px rgba(20,20,31,.18);background:linear-gradient(180deg,#1c1c2e,#222238)}.phone-top{align-items:center}.phone-top small{color:#fff8ec;font-size:.78rem;font-weight:800}.phone-progress{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px}.phone-progress span{font-size:.76rem;color:#f7c977;font-weight:800}.phone-progress i{flex:1;height:7px;border-radius:999px;background:linear-gradient(90deg,var(--amber) 55%,#3a3a52 55%)}.phone-card-main{background:#2a2a40;border:1px solid #3a3a52;border-radius:22px;padding:14px;margin-bottom:12px}.phone-lines span.active{background:#fff8ec;color:#1c1c2e;font-weight:800}.phone-button{width:100%;margin-top:14px;border:0;border-radius:16px;background:var(--amber);color:var(--ink);font:inherit;font-weight:800;padding:11px}.pricing-card ul{padding-left:20px;color:inherit}.pricing-card li{margin:7px 0}.faq-group h2{margin-bottom:12px}
.article-prose h2{scroll-margin-top:92px}.article-cta{background:#fff3d8;border:1px solid #ead9b9;border-radius:24px;padding:22px;margin:28px 0}.evidence-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.evidence-slot{margin:0;background:#fff;border:1px solid var(--border);border-radius:24px;box-shadow:var(--shadow);padding:14px}.evidence-slot img{display:block;width:100%;border-radius:18px;border:1px solid #eee0c9}.evidence-slot figcaption{font-size:.9rem;color:var(--muted);margin-top:10px}.table-wrap{overflow-x:auto;background:#fff;border:1px solid var(--border);border-radius:24px;box-shadow:var(--shadow)}table{width:100%;border-collapse:collapse;min-width:760px}th,td{text-align:left;padding:14px 16px;border-bottom:1px solid var(--border);vertical-align:top}th{background:#fff3d8;font-size:.88rem;text-transform:uppercase;letter-spacing:.08em}td{color:var(--muted)}code{background:#fff3d8;border:1px solid #ead9b9;border-radius:8px;padding:2px 6px}.form-status.success{background:#e4fbf5;border:1px solid #91e6d2;color:#124137;border-radius:14px;padding:12px;margin-top:14px}.form-status.error{background:#fff0ed;border:1px solid #ffc4bb;color:#7f1d16;border-radius:14px;padding:12px;margin-top:14px}.phone-shell-top{display:flex;justify-content:center;gap:7px;padding:2px 0 10px}.speaker{width:70px;height:7px;background:#10101a;border-radius:99px}.camera{width:8px;height:8px;border-radius:50%;background:#10101a}.phone-screen{background:linear-gradient(180deg,#232338,#1c1c2e);border-radius:27px;padding:14px;border:1px solid #34344c}.phone-status,.phone-appbar{display:flex;align-items:center;justify-content:space-between}.phone-status span{font-size:.72rem;background:rgba(0,200,160,.16);color:#b4fff0;border:1px solid rgba(0,200,160,.28);border-radius:999px;padding:3px 8px}.phone-appbar{margin:12px 0;color:#fff8ec}.phone-appbar small{color:#f7c977}.phone-tabs{display:flex;justify-content:center;gap:8px;margin-top:12px}.phone-tabs span{width:7px;height:7px;border-radius:50%;background:#555570}.phone-tabs span.active{width:20px;border-radius:999px;background:var(--amber)}
@media (max-width:860px){body{font-size:16.5px}.desktop-nav{display:none}.menu-button{display:inline-flex}.hero-grid,.split,.product-feature,.contact-grid,.footer-grid{grid-template-columns:1fr}.section{padding:54px 0}.hero-copy{text-align:left}.hero-actions{display:grid}.input-row{grid-template-columns:1fr}.mockup-row.three,.light-card-grid.three,.light-card-grid.two,.resource-grid,.pricing-layout,.evidence-grid{grid-template-columns:1fr}.phone{max-width:100%}.product-feature{padding:0 0 24px}.footer-links{grid-template-columns:1fr 1fr}.sticky-cta.is-visible{display:block}.hero-phone{display:none}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
`; }

function js() { return `(() => {
  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      mobileNav.hidden = open;
    });
  }
  const sticky = document.querySelector('.sticky-cta');
  const toggleSticky = () => {
    if (!sticky) return;
    sticky.classList.toggle('is-visible', window.scrollY > 420);
  };
  toggleSticky();
  window.addEventListener('scroll', toggleSticky, { passive: true });
  const demo = document.querySelector('[data-demo]');
  if (demo) {
    const input = demo.querySelector('#task-input');
    const result = demo.querySelector('[data-demo-result]');
    const getMove = (text) => {
      const value = text.toLowerCase();
      if (!text.trim()) return 'Add one task first. It can be messy.';
      if (/report|proposal|write|essay|document/.test(value)) return 'Open the document and write only the title.';
      if (/email|inbox|reply|message/.test(value)) return 'Open one message and write the first sentence.';
      if (/study|read|exam|chapter/.test(value)) return 'Open the material and read only the first heading.';
      if (/clean|room|tidy|desk|wash/.test(value)) return 'Pick up five visible items and put them in one place.';
      return 'Write the task name at the top of a blank note. That is the first move.';
    };
    demo.querySelectorAll('[data-task]').forEach((btn) => btn.addEventListener('click', () => { input.value = btn.dataset.task || ''; result.innerHTML = '<p class="eyebrow">First move</p><p><strong>' + getMove(input.value) + '</strong></p><p class="helper">Try this for three minutes. Stop there if that is enough.</p>'; input.focus(); }));
    demo.querySelector('[data-demo-submit]')?.addEventListener('click', () => { result.innerHTML = '<p class="eyebrow">First move</p><p><strong>' + getMove(input.value) + '</strong></p><p class="helper">Try this for three minutes. Stop there if that is enough.</p>'; });
  }
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      const submit = form.querySelector('button[type="submit"]');
      if (status) { status.className = 'form-status'; status.textContent = ''; }
      if (!form.reportValidity()) return;
      const configured = form.dataset.formspreeConfigured === 'true';
      if (submit) { submit.disabled = true; submit.textContent = 'Sending...'; }
      try {
        if (configured) {
          const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
          if (!response.ok) throw new Error('Formspree submission failed');
        }
        form.reset();
        if (status) { status.className = 'form-status success'; status.textContent = configured ? 'Thanks. Your message has been sent.' : 'Success state shown. Add a real FORMSPREE_ENDPOINT value before collecting live messages.'; }
      } catch (error) {
        if (status) { status.className = 'form-status error'; status.textContent = 'That did not send. Please email hello@gomentum.app instead.'; }
      } finally {
        if (submit) { submit.disabled = false; submit.textContent = 'Send message'; }
      }
    });
  }
})();` }

function favicon() { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="28" fill="#1C1C2E"/><circle cx="84" cy="34" r="12" fill="#F5A623"/><path d="M32 66c0-18 14-32 32-32 9 0 17 4 23 10l-15 14c-2-2-5-4-9-4-7 0-12 5-12 12s5 12 12 12c5 0 9-2 11-6H63V55h33v11c0 20-13 34-33 34-18 0-31-14-31-34Z" fill="#FFF8EC"/></svg>`; }
function ogImage() { return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#FFF8EC"/><circle cx="985" cy="135" r="110" fill="#F5A623" opacity=".35"/><rect x="90" y="90" width="470" height="450" rx="44" fill="#1C1C2E"/><text x="140" y="190" fill="#FFF8EC" font-family="Arial" font-size="58" font-weight="700">Gomentum</text><text x="140" y="280" fill="#FFF8EC" font-family="Arial" font-size="40">Start the task without</text><text x="140" y="330" fill="#FFF8EC" font-family="Arial" font-size="40">fighting yourself.</text><rect x="140" y="395" width="250" height="70" rx="20" fill="#F5A623"/><text x="175" y="440" fill="#1C1C2E" font-family="Arial" font-size="28" font-weight="700">One small step</text><text x="640" y="250" fill="#1C1C2E" font-family="Arial" font-size="48" font-weight="700">Task initiation, not</text><text x="640" y="310" fill="#1C1C2E" font-family="Arial" font-size="48" font-weight="700">another task manager.</text></svg>`; }

build();
