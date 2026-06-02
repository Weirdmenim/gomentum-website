const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE_URL = 'https://gomentum-website.vercel.app';
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORMSPREE_ID';

const nav = [
  ['Product', '/product/'],
  ['How It Works', '/how-it-works/'],
  ['Use Cases', '/use-cases/'],
  ['Resources', '/resources/'],
  ['Pricing', '/pricing/'],
  ['FAQ', '/faq/']
];

const footerLinks = [
  ['Home', '/'],
  ['Product', '/product/'],
  ['Features', '/features/'],
  ['How It Works', '/how-it-works/'],
  ['Use Cases', '/use-cases/'],
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
  ['Work tasks', 'You have a work task open in your mind, but the first step feels unclear.', 'Prepare the weekly report', 'Open the report file and write only the section headings.'],
  ['Study tasks', 'You need to study, but the material feels too large to enter.', 'Revise cardiovascular pharmacology', 'Open the notes and highlight only one heading you recognize.'],
  ['Life admin', 'Small personal tasks have piled up and now feel heavier than they are.', 'Reply to an important email', 'Open the email and write only the greeting.'],
  ['Cleaning tasks', 'The room feels overwhelming because everything looks like one big task.', 'Clean my room', 'Put only the clothes from the chair into one basket.'],
  ['Creative tasks', 'You want to create something, but the blank page makes starting feel hard.', 'Write a new article', 'Write three rough bullet points without editing them.'],
  ['Overwhelming tasks', 'The task has too many parts, so your brain avoids the whole thing.', 'Plan next week', 'Write down only three things that must happen first.']
];

const faqs = {
  'About Gomentum': [
    ['What is Gomentum?', 'Gomentum is a calm task initiation tool that helps you turn an overwhelming task into one tiny first move. <a href="/product/">See the product flow</a>.'],
    ['How is this different from a task manager?', 'Task managers help you organize tasks. Gomentum focuses on the moment before action, when starting feels hard.']
  ],
  'Using the product': [
    ['What should I type first?', 'Type one task in plain words, like “reply to emails” or “start my report.”'],
    ['How does Gomentum suggest the first move?', 'Gomentum is designed to look at the task, use case, and mood check-in, then suggest a small action that feels easier to start. In beta, this logic is still being improved.'],
    ['Do I need an account to try it?', 'You can try the public first-step demo on the website without an account. Full beta access may require signup if saved progress is needed.']
  ],
  'Beta and pricing': [
    ['What happens after the beta?', 'Pricing may change as the product improves. Users should be told clearly before any paid plan affects access. <a href="/pricing/">Read pricing details</a>.'],
    ['Will there be a mobile app?', 'The website is designed mobile-first. A dedicated mobile app can come later, but the current public build focuses on a responsive web experience.']
  ],
  'Privacy and safety': [
    ['Is my data private and secure?', 'The public website demo does not save the task you type. Product task data should be handled with clear user control and no unnecessary sharing. <a href="/privacy/">Read the privacy page</a>.'],
    ['Is Gomentum a medical or therapy tool?', 'No. Gomentum is not a medical, diagnostic, or therapy tool. It can support ADHD-style task initiation challenges, but it does not treat or diagnose any condition.'],
    ['What if the site is hard to use?', 'If something is hard to read, navigate, or use, send a note through the <a href="/contact/">Contact page</a> or read the <a href="/accessibility/">Accessibility page</a>.']
  ],
  'ADHD and task paralysis': [
    ['Who is Gomentum for?', 'Gomentum is for people who struggle to begin tasks, feel overwhelmed by starting, or need a smaller way to enter the work. It is not a medical or diagnostic tool.'],
    ['Why does the first move matter?', 'Because the hardest part is often entering the task, not understanding the whole plan. <a href="/task-paralysis-guide/">Read the Task Paralysis Guide</a>.'],
    ['Anything else I should know?', 'The site uses honest beta language. Some features are available now, some are improving, and some may be planned for later versions.']
  ]
};

const resources = [
  { title: 'What Is Task Paralysis and Why Starting Feels Hard?', category: 'Task paralysis', time: '8 min read', problem: 'Beginning can feel impossible even when you know what needs to be done.', action: 'Write the task exactly as it feels, then make the first move smaller than expected.', href: '/resources/task-paralysis/' },
  { title: 'ADHD Task Initiation: How to Start Without Pressure', category: 'ADHD task initiation', time: '8 min read', problem: 'Normal productivity advice can feel like another demand when starting is the hard part.', action: 'Use your current energy level to choose a smaller starting point.', href: '/resources/adhd-task-initiation/' },
  { title: 'How to Start a Task When You Feel Overwhelmed', category: 'Starting routines', time: '6 min read', problem: 'A large task can feel impossible when the entry point is unclear.', action: 'Name one visible part of the task and start there for three minutes.', href: '/resources/how-to-start-when-overwhelmed/' },
  { title: 'How to Break a Big Task Into Small Steps', category: 'Task breakdown', time: '7 min read', problem: 'A vague task can stay stuck because it is not yet physical enough to begin.', action: 'Turn the task into one action you can see, touch, open, write, or move.', href: '/resources/break-big-tasks-into-small-steps/' },
  { title: 'Why To-Do Lists Do Not Help When You Cannot Start', category: 'Procrastination support', time: '7 min read', problem: 'To-do lists can show the work, but they do not always help you enter it.', action: 'Add a first-move layer under the task name.', href: '/resources/why-to-do-lists-do-not-help-starting/' },
  { title: 'Brain Dump Productivity: How to Clear Your Head and Begin', category: 'Brain dump productivity', time: '6 min read', problem: 'Scattered thoughts can make every task feel equally urgent.', action: 'Write everything down, then choose only one first move.', href: '/resources/brain-dump-productivity/' }
];

const lighthouseRows = [
  ['Home', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Mobile and desktop Lighthouse', 'Pending real test result.'],
  ['Contact', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Form and accessibility test', 'Pending real test result.'],
  ['FAQ', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Content and accordion test', 'Pending real test result.'],
  ['Task Paralysis Guide', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'SEO article test', 'Pending real test result.'],
  ['ADHD Task Initiation', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'SEO article test', 'Pending real test result.']
];

const waveRows = [
  ['Home', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Run WAVE and document fixes made', 'Pending real test result.'],
  ['Contact', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Check labels, errors, and success state', 'Pending real test result.'],
  ['FAQ', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Check accordion semantics and heading order', 'Pending real test result.'],
  ['Task Paralysis Guide', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Check headings, links, and contrast', 'Pending real test result.'],
  ['Pricing', 'Pending real test result.', 'Pending real test result.', 'Pending real test result.', 'Check plan cards, CTAs, and contrast', 'Pending real test result.']
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

const blogArticles = [
  {
    "slug": "/resources/task-paralysis/",
    "title": "What Is Task Paralysis and Why Starting Feels Hard?",
    "description": "Learn why beginning can feel impossible even when you know what needs to be done.",
    "category": "Task paralysis",
    "time": "8 min read",
    "keyword": "task paralysis",
    "secondary": "why can’t I start tasks, how to start a task when overwhelmed, break tasks into small steps, task initiation app",
    "ctaSecondary": "See How It Works",
    "ctaSecondaryHref": "/how-it-works/",
    "html": "<p>You know the task. The file is there. The message is waiting. The room is in front of you. The deadline may even be close.</p>\n<p>But still, you do not start.</p>\n<p>That stuck feeling is often called <strong>task paralysis</strong>. It can feel like your brain knows what needs to happen, but cannot move from thinking into doing. And honestly, that is the part most productivity advice misses.</p>\n<p>A to-do list can show you the task. A reminder can tell you it is late. A calendar can show the time. But none of that always answers the real question:</p>\n<p><strong>How do I start this right now?</strong></p>\n<h2>What task paralysis feels like</h2>\n<p>Task paralysis is not always laziness. Many times, you care about the task and you may even feel guilty for avoiding it.</p>\n<p>But the first step still feels heavy.</p>\n<p>You open and close the same document or stare at the task but do nothing. Sometimes, you walk into the room, feel overwhelmed, and leave. You choose easier tasks rather than important ones. There is this urge to wait until you feel ready.</p>\n<p>You feel guilty, but the guilt does not help.</p>\n<p>So the issue is not always the whole task. Sometimes, the real issue is the starting line.</p>\n<p>For example, “write the report” may secretly feel like:</p>\n<p>Where do I start? What should the first sentence be? Do I need to research first? What if it is bad?</p>\n<p>So, instead of seeing one task, your brain sees a pile of tasks.</p>\n<h2>Why “just do it” does not work</h2>\n<p>“Just do it” sounds simple but only when someone is already moving. When you are stuck, pressure can make the task feel even heavier. Yes, a stricter plan may help later, but at the beginning, it can create more noise.</p>\n<p>So the better question is not “How do I finish this?”</p>\n<p>A better question is \"<strong>What is the smallest action that helps me enter this task?\"</strong></p>\n<p>That small action is the doorway.</p>\n<h2>The problem with many to-do lists</h2>\n<p>To-do lists often name the final task, not the first move.</p>\n<p>For example:</p>\n<ul>\n<li>Clean my room</li>\n<li>Study pharmacology</li>\n<li>Write the report</li>\n<li>Reply to emails</li>\n<li>Plan next week</li>\n</ul>\n<p>These are real tasks, but they are not always easy starting points.</p>\n<p>A better first move sounds like:</p>\n<ul>\n<li>Put the clothes from the chair into one basket</li>\n<li>Open the notes and read one heading</li>\n<li>Open the report file and write only the title</li>\n<li>Open one email and write the greeting</li>\n<li>Write down three things that must happen next week</li>\n</ul>\n<p>The first version tells you what needs to be finished. The second version tells you how to begin. That difference matters.</p>\n<h2>How to start when you feel overwhelmed</h2>\n<p>Try this simple method.</p>\n<h3>1. Write the task the messy way</h3>\n<p>Do not make it sound perfect.</p>\n<p>Write the real version in your head:</p>\n<p>“I need to clean this room and it feels too much.”</p>\n<p>“I need to study, but I do not know where to start.”</p>\n<p>“I have to reply to this email and I keep avoiding it.”</p>\n<p>This helps because the messy version often shows the real blocker.</p>\n<h3>2. Break the task into one first move</h3>\n<p>Do not build a full plan yet.</p>\n<p>Just find the first visible action.</p>\n<p>Instead of “finish the assignment,” try:</p>\n<p>“Open the assignment brief.”</p>\n<p>Instead of “clean the kitchen,” try:</p>\n<p>“Put five plates in the sink.”</p>\n<p>Instead of “start working,” try:</p>\n<p>“Open the tab I need.”</p>\n<p>The goal is not to become perfectly productive. The goal is to make action possible.</p>\n<h3>3. Start for three minutes</h3>\n<p>Three minutes is small enough to feel less scary. You are not promising to finish. You are only giving yourself a small start. After three minutes, you can continue, pause, or stop. Either way, the task is no longer untouched.</p>\n<h2>A few first-move examples</h2>\n<p>If the task is <strong>clean my room</strong>, the first move could be to put only the clothes from the chair into one basket. If the task is <strong>write my report</strong>, the first move could be: to open the document and write only the title. If the task is <strong>study for my exam</strong>, the first move could be to open the notes and read one heading. If the task is <strong>reply to the email</strong>, the first move could be to open the email and write “Hi [Name],”.</p>\n<p>Small steps may feel too small to count. But they do count, because they change the task from untouched to started.</p>\n<h2>How Gomentum helps</h2>\n<p>Gomentum is a <strong>task initiation app</strong> for the moment before action.</p>\n<p>It is not another place to store a long list of tasks. Instead, it helps you take one overwhelming task and turn it into one small first move.</p>\n<p>With Gomentum, you can write the messy task, break it into smaller steps, choose one first move, and start with a short timer.</p>\n<p>You can see the full flow on the <a href=\"/how-it-works/\">How It Works</a> page, or explore the product on the <a href=\"/product/\">Product</a> page.</p>\n<p>Gomentum is not a medical, diagnostic, or therapy tool. It is a task support tool for people who need a smaller way to begin.</p>\n<h2>Start with one small step</h2>\n<p>Do not start with the whole task.</p>\n<p>Start with the doorway.</p>\n<p>Open the file. Write the title. Read one heading. Pick up three things. Type the greeting.</p>\n<p>That is enough to begin.</p>\n<h2>Related starting guides</h2>\n<p>If this topic matches how starting feels for you, you may also find the <a href=\"/resources/\">Resources hub</a>, <a href=\"/use-cases/\">Use Cases page</a>, and <a href=\"/pricing/\">beta access page</a> useful.</p>"
  },
  {
    "slug": "/resources/adhd-task-initiation/",
    "title": "ADHD Task Initiation: How to Start Without Pressure",
    "description": "A plain-English guide to reducing the pressure around beginning a task.",
    "category": "ADHD task initiation",
    "time": "8 min read",
    "keyword": "ADHD task initiation",
    "secondary": "task initiation ADHD, ADHD task paralysis, start tasks with ADHD, task initiation app",
    "ctaSecondary": "See How It Works",
    "ctaSecondaryHref": "/how-it-works/",
    "html": "<p>Starting a task can feel harder than doing the task.</p>\n<p>You may know what needs to happen. You may even care about it. But when it is time to begin, your brain does not move with you.</p>\n<p>This is often called <strong>task initiation difficulty</strong>. For people who experience ADHD-style overwhelm, it can show up as staring, delaying, switching tasks, or waiting until the pressure becomes extreme.</p>\n<p>And the frustrating part is this: you are not always avoiding the task because you do not care. Sometimes, the first step is just too unclear or too heavy.</p>\n<h2>Why ADHD task initiation feels hard</h2>\n<p>A task can look simple from the outside, but inside it may contain many hidden steps.</p>\n<p>For example, “study for the exam” may actually mean:</p>\n<p>Where are my notes? Which topic should I start with? How long should I study? What if I do not understand it? What if I am already behind?</p>\n<p>So, instead of seeing one task, your brain sees a stack of decisions.</p>\n<p>That is why “just start” does not always work. The starting point is not visible enough.</p>\n<h2>What usually makes it worse</h2>\n<p>When you are stuck, it is tempting to add more pressure.</p>\n<p>You may tell yourself:</p>\n<p>“I should be able to do this.” “I am wasting time.” “I need to finish everything today.” “I will start when I feel ready.”</p>\n<p>But pressure does not always create motion. Sometimes, it makes the task feel even bigger.</p>\n<p>A long to-do list can also make things worse. It may show everything that needs to be done, but it does not always show the first move.</p>\n<h2>What helps instead</h2>\n<p>The goal is to make the beginning smaller.</p>\n<h3>1. Start with the task as it feels</h3>\n<p>Do not clean it up first.</p>\n<p>Write:</p>\n<p>“I need to study but I do not know where to start.”</p>\n<p>“I need to reply to this email but I keep avoiding it.”</p>\n<p>“I need to clean my room but it feels too much.”</p>\n<p>This helps because the messy version shows the actual blocker.</p>\n<h3>2. Pick one visible action</h3>\n<p>A visible action is something you can actually picture doing.</p>\n<p>Instead of “study,” try:</p>\n<p>“Open the notes and read one heading.”</p>\n<p>Instead of “reply to email,” try:</p>\n<p>“Open the email and write the greeting.”</p>\n<p>Instead of “clean room,” try:</p>\n<p>“Put the clothes on the chair into one basket.”</p>\n<p>Small is not weak. Small is useful.</p>\n<h3>3. Use a short start</h3>\n<p>A three-minute start can reduce pressure.</p>\n<p>You are not promising to finish the task. You are only giving yourself a way to enter it.</p>\n<p>After three minutes, you can stop, continue, or choose the next small move.</p>\n<h2>How Gomentum helps</h2>\n<p>Gomentum is built for task initiation, not full life organization.</p>\n<p>It helps you write the messy task, turn it into one smaller first move, and start with a short timer. You can see the flow on the <a href=\"/how-it-works/\">How It Works</a> page, or explore the product on the <a href=\"/product/\">Product</a> page.</p>\n<p>Gomentum is not a medical, diagnostic, or therapy tool. It is a task support tool for people who need a smaller way to begin.</p>\n<h2>Try a smaller start</h2>\n<p>If the task feels too heavy, do not start with the whole thing.</p>\n<p>Start with the doorway.</p>\n<p>---</p>\n<h2>Related starting guides</h2>\n<p>If this topic matches how starting feels for you, you may also find the <a href=\"/resources/\">Resources hub</a>, <a href=\"/use-cases/\">Use Cases page</a>, and <a href=\"/pricing/\">beta access page</a> useful.</p>"
  },
  {
    "slug": "/resources/how-to-start-when-overwhelmed/",
    "title": "How to Start a Task When You Feel Overwhelmed",
    "description": "Use one small first move to make a large task easier to enter.",
    "category": "Starting routines",
    "time": "6 min read",
    "keyword": "how to start a task when overwhelmed",
    "secondary": "overwhelmed by tasks, task paralysis, break tasks into small steps, task initiation app",
    "ctaSecondary": "See Use Cases",
    "ctaSecondaryHref": "/use-cases/",
    "html": "<p>You know what you need to do.</p>\n<p>Maybe it is a report. Maybe it is a room you need to clean. Maybe it is an email, an assignment, a form, or a project you have avoided for days.</p>\n<p>But the moment you think about starting, the task feels bigger than it should.</p>\n<p>So you pause. Then you delay. Then the task gets heavier.</p>\n<p>If you have ever wondered <strong>how to start a task when overwhelmed</strong>, the answer is usually not to force the whole task at once. Most times, the better answer is to make the starting point smaller.</p>\n<h2>Why overwhelmed tasks feel so hard to start</h2>\n<p>Overwhelm makes a task look like one big block.</p>\n<p>“Clean my room” sounds like one task, but it may include picking clothes, clearing trash, arranging the bed, sorting books, sweeping, and deciding where everything should go.</p>\n<p>“Write the report” may include opening the file, checking the brief, finding notes, choosing a structure, writing the title, and starting the first paragraph.</p>\n<p>So, when your brain sees the task, it does not always see one action.</p>\n<p>It sees too many things at once.</p>\n<p>That is why you may avoid the task even when you care about it. You are not only avoiding the work. You may be avoiding the pressure of not knowing where to begin.</p>\n<h2>Do not start with the whole task</h2>\n<p>When you feel overwhelmed, it is tempting to make a full plan first.</p>\n<p>Sometimes that helps.</p>\n<p>But other times, planning becomes another task. You spend your energy arranging the work instead of entering it.</p>\n<p>So instead of asking:</p>\n<p>“How do I finish this?”</p>\n<p>Ask:</p>\n<p>“What is one small action that gets me inside the task?”</p>\n<p>That question is easier to answer.</p>\n<p>And more importantly, it gives you something to do now.</p>\n<h2>The one-small-step method</h2>\n<p>Use this when the task feels too large to enter.</p>\n<h3>1. Name the task plainly</h3>\n<p>Do not make it sound perfect.</p>\n<p>Write the task the way it appears in your head.</p>\n<p>“I need to clean my room.”</p>\n<p>“I need to start the assignment.”</p>\n<p>“I need to reply to that email.”</p>\n<p>“I need to plan tomorrow.”</p>\n<p>This step matters because a vague task is harder to start. Once you name it, you can shrink it.</p>\n<h3>2. Find the first visible action</h3>\n<p>A good first move is something you can picture yourself doing.</p>\n<p>Not “be productive.”</p>\n<p>Not “get serious.”</p>\n<p>Not “finish everything.”</p>\n<p>Those are too broad.</p>\n<p>A better first move sounds like:</p>\n<p>“Open the document.”</p>\n<p>“Put five plates in the sink.”</p>\n<p>“Read one heading.”</p>\n<p>“Write the greeting.”</p>\n<p>“Open the assignment brief.”</p>\n<p>The action should be so clear that you do not need to think too much before doing it.</p>\n<h3>3. Make it smaller than feels necessary</h3>\n<p>This is where many people go wrong. They choose a first step that is still too big.</p>\n<p>If the first move makes you pause, shrink it again.</p>\n<p>“Write the introduction” can become “write one rough sentence.”</p>\n<p>“Clean the room” can become “put clothes in one basket.”</p>\n<p>“Study the topic” can become “open the first page.”</p>\n<p>“Reply to the email” can become “write ‘Hi [Name],’.”</p>\n<p>Small steps may feel silly, but they work because they reduce resistance.</p>\n<p>You are not trying to win the whole task. You are trying to begin.</p>\n<h2>A few examples</h2>\n<p>If the task is <strong>prepare the weekly report</strong>, the first move could be to open the report file and write only the section headings.</p>\n<p>If the task is <strong>clean my room</strong>, the first move could be to put the clothes from one chair into one basket.</p>\n<p>If the task is <strong>study for an exam</strong>, the first move could be to open the notes and read one heading.</p>\n<p>If the task is <strong>reply to an important email</strong>, the first move could be to open the email and write only the greeting.</p>\n<p>If the task is <strong>plan next week</strong>, the first move could be to write down three things that must happen first.</p>\n<p>These are not full tasks. They are entrances.</p>\n<p>That is the point.</p>\n<h2>How Gomentum helps</h2>\n<p>Gomentum is a <strong>task initiation app</strong> built for the moment before action.</p>\n<p>It helps you take one overwhelming task and turn it into one small first move. You do not need to organize your whole life first. You only need a doorway into the task.</p>\n<p>You can see more examples on the <a href=\"/use-cases/\">Use Cases</a> page, or follow the full process on the <a href=\"/how-it-works/\">How It Works</a> page. You can also explore the product flow on the <a href=\"/product/\">Product</a> page.</p>\n<p>Gomentum is not a medical, diagnostic, or therapy tool. It is a task support tool for people who need a smaller way to begin.</p>\n<h2>Start smaller than the task</h2>\n<p>When you feel overwhelmed, do not begin with the whole task.</p>\n<p>Begin with one action.</p>\n<p>Open the file. Read one heading. Write one sentence. Pick up three things. Type the greeting.</p>\n<p>That is enough to make the task less untouched.</p>\n<p>And once it is no longer untouched, it becomes easier to continue.</p>\n<h2>Related starting guides</h2>\n<p>If this topic matches how starting feels for you, you may also find the <a href=\"/resources/\">Resources hub</a>, <a href=\"/use-cases/\">Use Cases page</a>, and <a href=\"/pricing/\">beta access page</a> useful.</p>"
  },
  {
    "slug": "/resources/break-big-tasks-into-small-steps/",
    "title": "How to Break a Big Task Into Small Steps",
    "description": "Turn a vague task into smaller actions without building a full productivity system.",
    "category": "Task breakdown",
    "time": "7 min read",
    "keyword": "break tasks into small steps",
    "secondary": "task breakdown app, AI task breakdown, small steps productivity, task initiation app",
    "ctaSecondary": "See How It Works",
    "ctaSecondaryHref": "/how-it-works/",
    "html": "<p>Big tasks are hard to start because they hide the first move.</p>\n<p>“Write the report” sounds like one task, but it may include opening the file, finding the brief, checking notes, choosing a structure, writing the title, and drafting the first paragraph.</p>\n<p>That is a lot to carry in your head.</p>\n<p>So when a task feels too big, the answer is not always to work harder. Sometimes, the answer is to break the task into smaller steps.</p>\n<p>But not too many.</p>\n<p>A long breakdown can become another task. What you really need first is one small step that gets you moving.</p>\n<h2>Start with the messy version</h2>\n<p>Before you break the task down, write it the way it feels.</p>\n<p>For example:</p>\n<p>“This report is too much.”</p>\n<p>“I need to clean the kitchen but I do not know where to start.”</p>\n<p>“I have to study and I am already behind.”</p>\n<p>This is useful because the messy version shows the pressure around the task.</p>\n<p>Once you see the pressure, it is easier to choose a small entry point.</p>\n<h2>Do not break everything down at once</h2>\n<p>You do not need twenty steps.</p>\n<p>You do not need the perfect plan.</p>\n<p>You only need the first few actions.</p>\n<p>For example, instead of breaking “write report” into a full project plan, start with:</p>\n<p>1. Open the report file. 2. Write the title. 3. Add three section headings.</p>\n<p>That is enough to begin.</p>\n<h2>Make the first step physical</h2>\n<p>A useful first step should be something you can do, not just think about.</p>\n<p>Weak first step:</p>\n<p>“Get serious.”</p>\n<p>Better first step:</p>\n<p>“Open the document.”</p>\n<p>Weak first step:</p>\n<p>“Study properly.”</p>\n<p>Better first step:</p>\n<p>“Read one heading.”</p>\n<p>Weak first step:</p>\n<p>“Clean the kitchen.”</p>\n<p>Better first step:</p>\n<p>“Put five plates in the sink.”</p>\n<p>A physical action gives your brain something clear to follow.</p>\n<h2>Use the “too small to reject” rule</h2>\n<p>If the first step still feels hard, make it smaller.</p>\n<p>“Write one paragraph” can become “write one rough sentence.”</p>\n<p>“Clean the desk” can become “throw away one piece of trash.”</p>\n<p>“Study for 30 minutes” can become “open the notes.”</p>\n<p>This may feel too small, but that is the point. The first step is not supposed to prove discipline. It is supposed to create movement.</p>\n<h2>Examples of task breakdowns</h2>\n<p>Task: Write a report Small steps:</p>\n<p>1. Open the document. 2. Write the title. 3. Add three headings. 4. Write one rough sentence under the first heading.</p>\n<p>Task: Clean my room Small steps:</p>\n<p>1. Put clothes in one basket. 2. Throw away visible trash. 3. Clear one surface. 4. Stop or continue after three minutes.</p>\n<p>Task: Study a topic Small steps:</p>\n<p>1. Open the notes. 2. Read one heading. 3. Highlight one sentence. 4. Write one question you need to understand.</p>\n<h2>How Gomentum helps</h2>\n<p>Gomentum works like a task breakdown app for the starting point.</p>\n<p>It helps you take a messy task and turn it into one smaller first move. The goal is not to create a perfect productivity system. The goal is to help you start.</p>\n<p>You can see the full product flow on the <a href=\"/product/\">Product</a> page or learn the process on the <a href=\"/how-it-works/\">How It Works</a> page.</p>\n<h2>Start smaller than you think</h2>\n<p>If a task feels too big, do not argue with it.</p>\n<p>Shrink the first move.</p>\n<p>Then begin.</p>\n<p>---</p>\n<h2>Related starting guides</h2>\n<p>If this topic matches how starting feels for you, you may also find the <a href=\"/resources/\">Resources hub</a>, <a href=\"/use-cases/\">Use Cases page</a>, and <a href=\"/pricing/\">beta access page</a> useful.</p>"
  },
  {
    "slug": "/resources/why-to-do-lists-do-not-help-starting/",
    "title": "Why To-Do Lists Do Not Help When You Cannot Start",
    "description": "To-do lists can show the work, but they do not always help you enter it.",
    "category": "Procrastination support",
    "time": "7 min read",
    "keyword": "todo list not working ADHD",
    "secondary": "to-do list not working, task paralysis, task initiation ADHD, procrastination support",
    "ctaSecondary": "See Use Cases",
    "ctaSecondaryHref": "/use-cases/",
    "html": "<p>To-do lists are useful.</p>\n<p>They help you remember what needs to be done. They can hold tasks, deadlines, errands, and ideas in one place.</p>\n<p>But when you cannot start, a to-do list may not be enough.</p>\n<p>In fact, it can sometimes make things feel worse.</p>\n<p>You look at the list. You see everything waiting. You feel the pressure. Then you still do not know where to begin.</p>\n<p>That does not mean the list is useless. It means the list is solving a different problem.</p>\n<h2>A to-do list shows the work</h2>\n<p>A to-do list usually answers this question:</p>\n<p>“What needs to be done?”</p>\n<p>That is helpful.</p>\n<p>But when you are stuck, the harder question is often:</p>\n<p>“How do I enter this task right now?”</p>\n<p>Those are not the same.</p>\n<p>For example, your list may say:</p>\n<ul>\n<li>Finish assignment</li>\n<li>Clean room</li>\n<li>Reply to emails</li>\n<li>Study pharmacology</li>\n<li>Plan next week</li>\n</ul>\n<p>Each item is real. But each item is still too big to start from.</p>\n<h2>Why the list can feel overwhelming</h2>\n<p>A long list can create pressure because it shows everything at once.</p>\n<p>Instead of helping you begin, it may remind you of every unfinished thing.</p>\n<p>This can be especially hard if you already struggle with task initiation, procrastination, or ADHD-style overwhelm.</p>\n<p>The list says, “Here is everything.”</p>\n<p>But your brain may need, “Here is the next tiny action.”</p>\n<h2>The missing piece is the first move</h2>\n<p>A task and a first move are different.</p>\n<p>Task:</p>\n<p>“Clean my room.”</p>\n<p>First move:</p>\n<p>“Put the clothes from the chair into one basket.”</p>\n<p>Task:</p>\n<p>“Write the report.”</p>\n<p>First move:</p>\n<p>“Open the document and write the title.”</p>\n<p>Task:</p>\n<p>“Reply to emails.”</p>\n<p>First move:</p>\n<p>“Open one email and write the greeting.”</p>\n<p>The first move is smaller, clearer, and easier to picture. That is what makes it easier to start.</p>\n<h2>How to fix a to-do list that is not working</h2>\n<p>You do not have to throw your list away.</p>\n<p>Just add a first-move layer.</p>\n<p>For each task, ask:</p>\n<p>“What is the smallest visible action I can take?”</p>\n<p>Then write that under the task.</p>\n<p>Example:</p>\n<p>Task: Study pharmacology First move: Open the notes and read one heading.</p>\n<p>Task: Pay bill First move: Open the payment app.</p>\n<p>Task: Plan the week First move: Write down three things that must happen.</p>\n<p>Task: Clean kitchen First move: Put five plates in the sink.</p>\n<p>Now the list is not only showing what is unfinished. It is showing how to begin.</p>\n<h2>When to use a task initiation tool</h2>\n<p>If you keep looking at your list but cannot move, you may need help with task initiation, not task storage.</p>\n<p>That is where Gomentum fits.</p>\n<p>Gomentum is not trying to replace every planner or task manager. It focuses on the moment before action. You type one task, and it helps turn that task into one smaller first move.</p>\n<p>You can compare the product approach on the <a href=\"/features/\">Features</a> page or see examples on the <a href=\"/use-cases/\">Use Cases</a> page.</p>\n<p>Gomentum is not a medical, diagnostic, or therapy tool. It is a task support tool.</p>\n<h2>Keep the list, but add the doorway</h2>\n<p>Your to-do list can still be useful.</p>\n<p>But when starting feels hard, do not stop at the task name.</p>\n<p>Add the doorway.</p>\n<p>---</p>\n<h2>Related starting guides</h2>\n<p>If this topic matches how starting feels for you, you may also find the <a href=\"/resources/\">Resources hub</a>, <a href=\"/use-cases/\">Use Cases page</a>, and <a href=\"/pricing/\">beta access page</a> useful.</p>"
  },
  {
    "slug": "/resources/brain-dump-productivity/",
    "title": "Brain Dump Productivity: How to Clear Your Head and Begin",
    "description": "Use a brain dump to reduce mental clutter before choosing one first move.",
    "category": "Brain dump productivity",
    "time": "6 min read",
    "keyword": "brain dump productivity",
    "secondary": "brain dump tasks, clear your head, task initiation app, start tasks",
    "ctaSecondary": "See How It Works",
    "ctaSecondaryHref": "/how-it-works/",
    "html": "<p>Sometimes the task is not the only problem.</p>\n<p>The problem is everything around the task.</p>\n<p>The reminders. The guilt. The random thoughts. The half-finished ideas. The other things you suddenly remember. The pressure to do it properly.</p>\n<p>That is why a brain dump can help.</p>\n<p>A brain dump is a simple way to get thoughts out of your head and onto a page. It does not have to be neat. It does not have to be organized. At first, it only needs to exist.</p>\n<h2>Why your head feels full</h2>\n<p>When your brain is holding too many things, every task can feel heavier.</p>\n<p>You may sit down to work, but your mind keeps jumping:</p>\n<p>I need to reply to that message. I forgot the laundry. I should check the deadline. I need to clean the desk first. Where did I save that file?</p>\n<p>Now the original task is mixed with five other thoughts.</p>\n<p>So before you start, it may help to empty the noise.</p>\n<h2>What a brain dump is</h2>\n<p>A brain dump is not a plan.</p>\n<p>It is not a perfect list.</p>\n<p>It is not a productivity performance.</p>\n<p>It is just a place to put the thoughts so they stop floating around your head.</p>\n<p>You can write:</p>\n<p>“Need to study.”</p>\n<p>“Room is a mess.”</p>\n<p>“Email from client.”</p>\n<p>“Report deadline.”</p>\n<p>“I feel behind.”</p>\n<p>“Do not know where to start.”</p>\n<p>That is enough.</p>\n<h2>How to turn a brain dump into action</h2>\n<p>The mistake is trying to organize everything immediately.</p>\n<p>Instead, do this.</p>\n<h3>1. Write everything down</h3>\n<p>Set a short timer for two or three minutes.</p>\n<p>Write whatever is in your head.</p>\n<p>Do not sort it yet.</p>\n<h3>2. Pick one task</h3>\n<p>Choose one item from the dump.</p>\n<p>Not the biggest one. Not the most impressive one. Just one that matters.</p>\n<h3>3. Make the first move smaller</h3>\n<p>Turn that task into one visible action.</p>\n<p>Brain dump item:</p>\n<p>“Report deadline.”</p>\n<p>First move:</p>\n<p>“Open the report file and write the title.”</p>\n<p>Brain dump item:</p>\n<p>“Room is a mess.”</p>\n<p>First move:</p>\n<p>“Put clothes from the chair into one basket.”</p>\n<p>Brain dump item:</p>\n<p>“Need to study.”</p>\n<p>First move:</p>\n<p>“Open the notes and read one heading.”</p>\n<p>Now the brain dump has turned into a starting point.</p>\n<h2>Why this helps task initiation</h2>\n<p>A brain dump helps because it separates the noise from the next action.</p>\n<p>Instead of holding everything in your head, you can see the thoughts clearly. Then you can choose one small move instead of trying to solve everything at once.</p>\n<p>This is useful when you feel overwhelmed, distracted, or stuck before starting.</p>\n<p>It also works well with a short timer, because the goal is not to finish the entire task. The goal is to begin.</p>\n<h2>How Gomentum uses this idea</h2>\n<p>Gomentum helps you move from a messy task to one first move.</p>\n<p>You can use it when your thoughts are scattered, when your to-do list feels too big, or when you know what you need to do but cannot begin.</p>\n<p>See the full process on the <a href=\"/how-it-works/\">How It Works</a> page, or explore the product on the <a href=\"/product/\">Product</a> page.</p>\n<p>Gomentum is not a medical or therapy tool. It is a task support tool for starting smaller.</p>\n<h2>Start with the mess</h2>\n<p>You do not need a perfect plan.</p>\n<p>Start by getting the task out of your head.</p>\n<p>Then choose one small move.</p>\n<h2>Related starting guides</h2>\n<p>If this topic matches how starting feels for you, you may also find the <a href=\"/resources/\">Resources hub</a>, <a href=\"/use-cases/\">Use Cases page</a>, and <a href=\"/pricing/\">beta access page</a> useful.</p>"
  }
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
    description: 'See the simple Gomentum flow: brain dump the task, check your energy, get one first move, and start with a short timer.',
    h1: 'Four small moves. No big system.',
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
    description: 'Gomentum is currently in beta. See the simple beta access path and future pricing direction without sales pressure.',
    h1: 'Pricing',
    body: pricingPage()
  },
  {
    slug: '/faq/',
    title: 'Gomentum FAQ | Product, Privacy, Pricing, and ADHD Support',
    description: 'Short answers about the product, beta access, privacy, and ADHD-style task initiation support.',
    h1: 'FAQ',
    body: faqPage()
  },
  {
    slug: '/contact/',
    title: 'Contact Gomentum',
    description: 'Send Gomentum beta feedback, support questions, accessibility issues, partnership notes, or product questions.',
    h1: 'Contact',
    body: contactPage()
  },
  {
    slug: '/privacy/',
    title: 'Gomentum Privacy Policy',
    description: 'Privacy at Gomentum, including task inputs, form data, cookies, analytics, sharing, and deletion requests.',
    h1: 'Privacy',
    body: privacyPage()
  },
  {
    slug: '/terms/',
    title: 'Gomentum Terms of Use',
    description: 'Basic terms for using Gomentum, including product status, acceptable use, privacy, and contact guidance.',
    h1: 'Terms',
    body: termsPage()
  },
  {
    slug: '/accessibility/',
    title: 'Gomentum Accessibility Statement',
    description: 'Accessibility at Gomentum, including keyboard navigation, contrast, readable fonts, reduced motion, forms, and feedback.',
    h1: 'Accessibility',
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
    description: 'ADHD task initiation support for starting small, with safe product language, first moves, short starts, and no medical claims.',
    h1: 'ADHD task initiation',
    body: adhdPage()
  },
  {
    slug: '/task-paralysis-guide/',
    title: 'Task Paralysis Guide | Why Starting Feels Hard',
    description: 'Task paralysis guide explaining why starting feels hard, common signs, what does not help, and simple first-move examples.',
    h1: 'Task paralysis guide',
    body: taskGuidePage()
  }
];

pages.push(...blogArticles.map((article) => ({
  slug: article.slug,
  title: `${article.title} | Gomentum Resources`,
  description: article.description,
  h1: article.title,
  article: true,
  body: blogArticlePage(article)
})));

function esc(str) {
  return String(str).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function rel(slug) {
  if (slug === '/') return 'index.html';
  return path.join(slug.replace(/^\//, ''), 'index.html');
}

function cta(label = 'Start One Small Step', href = '/#demo', kind = 'primary') {
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
  <a class="sticky-cta" href="/#demo" aria-label="Start One Small Step">Start One Small Step</a>
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
      <nav class="desktop-nav" aria-label="Primary navigation">${navItems}<a class="nav-cta" href="/#demo">Start One Small Step</a></nav>
    </div>
    <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>
      ${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      <a href="/contact/">Contact</a>
      <a href="/evidence/">Evidence & QA</a>
      <a href="/#demo" class="nav-cta">Start One Small Step</a>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="/"><span class="brand-mark" aria-hidden="true">G</span><span>Gomentum</span></a>
        <p>Start tasks when starting feels impossible. One small step. Real momentum.</p>
        <p class="small">Gomentum is a productivity support tool, not medical or therapy advice.</p>
      </div>
      <div class="footer-links" aria-label="Footer links">
        ${footerLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </div>
    </div>
  </footer>`;
}

function hero({eyebrow, h1, intro, primary = 'Start One Small Step', secondary = 'See How It Works', secondaryHref = '/how-it-works/'}) {
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
    eyebrow: 'A calm task initiation tool for people who struggle to start.',
    h1: 'Start tasks when starting feels impossible.',
    intro: 'Some days, the task is not the hard part. Beginning is. Gomentum turns a messy task into one tiny first move, then gives you a short, low-pressure way to start.'
  })}
  ${demoSection()}
  <section class="section soft-section">
    <div class="container split calm-split">
      <div>
        <p class="eyebrow">A smaller way to begin</p>
        <h2>You are not lazy. Starting is just harder some days.</h2>
        <p>When a task feels too big, your brain may not need another list. It may need a smaller entrance. Gomentum helps you begin with one clear action instead of asking you to organize everything first.</p>
      </div>
      ${editorialVisual('A calm person sitting beside a phone with a simple first-move card on screen.')}
    </div>
  </section>
  ${stepsSection()}
  <section class="section">
    <div class="container">
      <div class="section-head narrow"><p class="eyebrow">Product preview</p><h2>One task. One first move. One short start.</h2><p>This is not another place to store your tasks. To-do lists show you everything. Gomentum shows you the next doable thing.</p></div>
      <div class="mockup-row three">${phoneMockup(productScreens[0])}${phoneMockup(productScreens[1])}${phoneMockup(productScreens[3])}</div>
    </div>
  </section>
  <section class="section soft-section">
    <div class="container">
      <div class="section-head narrow"><p class="eyebrow">Useful for</p><h2>Work, study, life admin, and everyday tasks.</h2><p>Gomentum can support moments where you know what to do but cannot begin.</p></div>
      <div class="light-card-grid three">${useCases.slice(0,3).map(useCaseCard).join('')}</div>
    </div>
  </section>
  ${trustStrip()}
  ${trustProof()}
  ${faqPreview()}
  ${finalCta('Start with one small step today.', 'You do not need to plan your whole day. Type one task, get one first move, and begin gently.')}`;
}

function demoSection() {
  return `<section class="section demo-section" id="demo" aria-labelledby="demo-heading">
    <div class="container demo-wrap">
      <div class="section-head narrow"><p class="eyebrow">Try it now</p><h2 id="demo-heading">Try one first move before you sign up.</h2><p>Type one task you have been avoiding. Gomentum shows what the first doable action could look like.</p></div>
      <div class="demo-card" data-demo>
        <p class="eyebrow">Start with an example</p><div class="chip-row" aria-label="Starter task examples">
          ${['Write my report', 'Reply to emails', 'Study chapter 4', 'Clean my room'].map(t => `<button class="chip" type="button" data-task="${esc(t)}">${esc(t)}</button>`).join('')}
        </div>
        <label for="task-input">One task you are avoiding</label>
        <div class="input-row">
          <input id="task-input" type="text" autocomplete="off" placeholder="e.g. write my report" aria-describedby="demo-help" />
          <button class="btn btn-primary" type="button" data-demo-submit>Show me the first move</button>
        </div>
        <p id="demo-help" class="helper">One avoided task is enough.</p>
        <div class="demo-result" role="status" aria-live="polite" data-demo-result>
          <p class="eyebrow">First move preview</p>
          <p>Your first move will appear here.</p><p class="helper">Your input stays private in this page demo.</p>
        </div>
      </div>
    </div>
  </section>`;
}

function stepsSection(detailed = false) {
  if (detailed) {
    return `<section class="section">
      <div class="container">
        <div class="section-head narrow"><p class="eyebrow">How it works</p><h2>Four small moves. No full system required.</h2></div>
        <ol class="step-list">
          <li><span>1</span><div><h3>Brain dump the task</h3><p>Write the task as it feels, even if it is messy or incomplete.</p><p class="benefit">You do not need to organize the task before starting.</p></div></li>
          <li><span>2</span><div><h3>Check your energy</h3><p>Choose how heavy the task feels today so the starting point can stay realistic.</p><p class="benefit">The task meets your current capacity.</p></div></li>
          <li><span>3</span><div><h3>Get one first move</h3><p>Gomentum suggests a small action that can begin the task without requiring a full plan.</p><p class="benefit">You see a doorway into the task.</p></div></li>
          <li><span>4</span><div><h3>Start for three minutes</h3><p>Use a short timer to enter the task gently, then decide whether to continue.</p><p class="benefit">Starting becomes smaller than finishing.</p></div></li>
        </ol>
      </div>
    </section>`;
  }
  return `<section class="section">
    <div class="container">
      <div class="section-head narrow"><p class="eyebrow">How it works</p><h2>From stuck to started in three small moves.</h2></div>
      <ol class="step-list">
        <li><span>1</span><div><h3>Write the messy task</h3><p>Start with the task as it feels right now. It does not need to be organized.</p></div></li>
        <li><span>2</span><div><h3>Get one first move</h3><p>Gomentum turns the task into one small action you can begin.</p></div></li>
        <li><span>3</span><div><h3>Start for three minutes</h3><p>Use a short timer to enter the task without making a big commitment.</p></div></li>
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
  return `${innerHero('Product', 'A calmer way to move from stuck to started.', 'Gomentum is built around the moment before action. It helps you empty the messy task from your head, choose one starting point, and begin with less pressure.')}
  <section class="section"><div class="container product-grid">
    ${productScreens.map((screen) => `<article class="product-feature"><div>${phoneMockup(screen)}</div><div><p class="eyebrow">${screen.eyebrow}</p><h2>${screen.title}</h2><p>${screen.body}</p><p class="benefit">${benefits[screen.title] || 'Benefit: it makes starting feel smaller.'}</p></div></article>`).join('')}
  </div></section>
  <section class="section soft-section"><div class="container narrow"><h2>Explore the product path.</h2><p class="link-row"><a href="/features/">Explore the features</a><a href="/how-it-works/">See the full flow</a><a href="/use-cases/">See use cases</a></p></div></section>${finalCta('Try the flow with one task.', 'No account needed for the public first-move preview.')}`;
}

function featuresPage() {
  const features = [
    ['Brain dump', 'Clear the mental clutter before trying to act.'],
    ['Mood check-in', 'Start from your current energy level, not from an ideal version of your day.'],
    ['Task breakdown', 'Turn a large, unclear task into smaller actions that feel easier to enter.'],
    ['3-minute start timer', 'Begin with a short, low-pressure session.'],
    ['Gentle reflection', 'Notice progress without turning the session into a performance test.'],
    ['Beta honesty', 'The product is still improving, so feature labels stay honest and simple.']
  ];
  return `${innerHero('Features', 'Features for starting, not just organizing.', 'Gomentum is not trying to become another full task manager. Its core features are designed to reduce the pressure of beginning.')}
  <section class="section"><div class="container light-card-grid three">${features.map(([h,p]) => `<article class="light-card"><h2>${h}</h2><p>${p}</p></article>`).join('')}</div></section>
  <section class="section soft-section"><div class="container split"><div><h2>Not a full productivity system.</h2><p>Gomentum is for the moment before calendars, Kanban boards, and task managers become useful.</p><p class="link-row"><a href="/how-it-works/">See How It Works</a><a href="/task-paralysis-guide/">Learn why starting feels hard</a><a href="/pricing/">View beta access</a></p></div>${phoneMockup(productScreens[2])}</div></section>`;
}

function howPage() {
  return `${innerHero('How Gomentum works', 'From stuck to started in a few clear moves.', 'Brain dump what is on your mind. Check in with your energy. Let Gomentum suggest one starting point. Begin with three minutes, then continue, pause, or stop without turning the session into a test of willpower.')}
  ${stepsSection(true)}
  <section class="section soft-section"><div class="container"><div class="journey"><div>Brain dump the task</div><span aria-hidden="true">→</span><div>Check your energy</div><span aria-hidden="true">→</span><div>Get one first move</div><span aria-hidden="true">→</span><div>Start for three minutes</div></div></div></section>
  <section class="section"><div class="container narrow"><p class="link-row"><a href="/product/">See the product flow</a><a href="/use-cases/">See use cases</a><a href="/resources/">Read starting guides</a></p></div></section>${finalCta('You do not need a perfect plan to begin.', 'Start with one messy task and one small first move.')}`;
}

function useCasesPage() {
  return `${innerHero('Use cases', 'Use Gomentum when the task feels too big to enter.', 'Gomentum can support work, study, life admin, cleaning, creative tasks, and other moments where you know what to do but cannot begin.')}
  <section class="section"><div class="container light-card-grid two">${useCases.map(useCaseCard).join('')}</div></section>
  <section class="section soft-section"><div class="container split">${editorialVisual('A calm editorial visual showing a desk, notebook, and phone with a tiny first step.')}
  <div><h2>Use it before the pressure builds.</h2><p>The best moment to use Gomentum is when you notice yourself avoiding the first step.</p><p class="link-row"><a href="/product/">Try the product flow</a><a href="/resources/">Read starting guides</a><a href="/pricing/">View beta access</a></p>${cta()}</div></div></section>`;
}

function resourcesPage() {
  return `${innerHero('Resources', 'Task initiation resources for getting unstuck.', 'Guides for understanding task paralysis, ADHD-style overwhelm, procrastination, brain dumps, and tiny first steps.')}
  <section class="section"><div class="container resource-grid">${resources.map((item) => `<a class="resource-card" href="${item.href}"><span>${item.category}</span><h2>${item.title}</h2><p><strong>Problem:</strong> ${item.problem}</p><p class="try-line"><strong>Try this now:</strong> ${item.action}</p><small>${item.time}</small><em>Read the Guide</em></a>`).join('')}</div></section>
  <section class="section soft-section"><div class="container split"><div><h2>Choose the guide that matches today.</h2><p>If you are frozen, start with the task paralysis guide. If you need to understand the product, see how Gomentum works. If you want examples, scan the use cases.</p><p class="link-row"><a href="/task-paralysis-guide/">Read the task paralysis guide</a><a href="/adhd-task-initiation/">Read the ADHD task initiation guide</a><a href="/how-it-works/">See How Gomentum Works</a><a href="/product/">Product</a><a href="/use-cases/">Use cases</a></p></div>${editorialVisual('A warm editorial visual of a phone beside a calm reading card.')}</div></section>`;
}

function pricingPage() {
  return `${innerHero('Pricing', 'Simple beta access while Gomentum is still improving.', 'Gomentum is currently in beta. Early users can try the core task-starting flow while the product is being improved.')}
  <section class="section"><div class="container pricing-layout">
    <article class="pricing-card featured"><p class="eyebrow">Beta access</p><h2>Beta access available</h2><p class="price">Available</p><p>Best for people who want to try the product while the team improves task breakdown, product polish, and the full starting experience.</p><ul><li>Core first-move demo</li><li>Beta feedback welcome</li><li>Clear notice before any paid plan</li><li>Early feedback helps shape the product</li></ul>${cta('Join the Beta', '/contact/')}</article>
    <article class="pricing-card"><p class="eyebrow">May become paid later</p><h2>Starter</h2><p class="price">Future packaging</p><p>Final pricing may change as the product improves. Any paid plan details should be treated as future packaging unless already confirmed.</p></article>
    <article class="pricing-card"><p class="eyebrow">Later</p><h2>Plus</h2><p class="price">Future packaging</p><p>More AI sessions, personalization, reflection history, and deeper first-move support may become part of later plans.</p></article>
  </div></section>
  <section class="section soft-section"><div class="container faq-lite"><h2>Pricing FAQ</h2>${simpleFaq([['Who is beta access best for?', 'People who want help starting work, study, life admin, home, or creative tasks.'], ['What may become paid later?', 'More AI sessions, personalization, history, and advanced support may become part of paid plans.'], ['Will pricing change?', 'Pricing may change as the product improves. Users should be told clearly before any paid plan affects access.'], ['Where do I join?', 'Use the contact page to ask about beta feedback or early access.']])}</div></section>`;
}

function faqPage() {
  return `${innerHero('FAQ', 'Questions about Gomentum, answered clearly.', 'Grouped so users can find the answer without reading everything.')}
  <section class="section"><div class="container faq-page">${Object.entries(faqs).map(([group, qs]) => `<section class="faq-group"><h2>${group}</h2>${simpleFaq(qs)}</section>`).join('')}</div></section>`;
}

function contactPage() {
  const configured = !FORMSPREE_ENDPOINT.includes('YOUR_FORMSPREE_ID');
  return `${innerHero('Contact', 'Contact Gomentum', 'Send feedback, beta questions, accessibility issues, or partnership notes. Short messages are welcome.')}
  <section class="section"><div class="container contact-grid"><form class="contact-form" data-contact-form action="${FORMSPREE_ENDPOINT}" method="POST" data-formspree-configured="${configured ? 'true' : 'false'}">
    <p class="contact-direct">For beta feedback, partnerships, support, or accessibility issues, use the form below or email <a href="mailto:hello@gomentum.app">hello@gomentum.app</a>.</p>
    <input type="hidden" name="_subject" value="New Gomentum website contact message" />
    <label for="reason">Reason for contacting</label><select id="reason" name="reason" required><option>Beta feedback</option><option>Support question</option><option>Product feedback</option><option>Accessibility issue</option><option>Partnership</option><option>Other</option></select>
    <label for="name">Name</label><input id="name" name="name" autocomplete="name" required aria-describedby="name-help" /><p id="name-help" class="sr-only">Enter your name.</p>
    <label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required aria-describedby="email-help" /><p id="email-help" class="sr-only">Enter the email address we should reply to.</p>
    <label for="message">Message</label><textarea id="message" name="message" rows="6" required aria-describedby="contact-help"></textarea>
    <p id="contact-help" class="helper">Your message will be used only to respond to your request or improve the beta experience.</p>
    <button class="btn btn-primary" type="submit">Send Message</button>
    <p class="form-status" role="status" aria-live="polite"></p>
  </form><aside class="contact-note"><h2>Helpful things to send</h2><ul><li>What page or feature you used.</li><li>What felt confusing or heavy.</li><li>What would make starting easier.</li></ul><p class="small">For accessibility feedback, tell us what was hard to read, navigate, or use.</p></aside></div></section>`;
}

function privacyPage() {
  return `${innerHero('Privacy', 'Privacy at Gomentum', 'Gomentum is designed to be calm and trustworthy. This page explains what information may be collected, how it may be used, and how users can ask questions about their data.')}
  <section class="section"><div class="container prose-card">
    <h2>Task inputs should stay private</h2><p>We only ask for information needed to provide the product, receive feedback, or respond to contact requests.</p>
    <h2>The public demo is limited</h2><p>The website demo is a page preview. It does not save the task you type into the public demo.</p>
    <h2>Users should stay in control</h2><p>Product data should be handled with clear consent and user control.</p>
    <h2>Cookies and analytics</h2><p>The website may use basic analytics to understand page visits, CTA clicks, and form usage. Analytics should not include private task text, names, messages, or sensitive personal content.</p>
    <h2>Sharing</h2><p>We do not sell personal information. We may use trusted tools for hosting, forms, analytics, and email if needed to operate the website.</p>
    <h2>Privacy questions and deletion requests</h2><p>For privacy questions or deletion requests, contact the Gomentum team through the Contact page.</p>
  </div></section>`;
}

function termsPage() {
  return `${innerHero('Terms', 'Basic terms for using Gomentum.', 'These terms explain how the public website and beta-stage product should be used.')}
  <section class="section"><div class="container prose-card">
    <h2>Beta product status</h2><p>Gomentum is a beta-stage product. Some features may be available now, improving, or planned for later versions.</p>
    <h2>Use the website responsibly</h2><p>Do not use the website to submit harmful, illegal, abusive, or private information that should not be shared online.</p>
    <h2>No medical claims</h2><p>Gomentum is not medical advice, therapy, diagnosis, or treatment. It is a task initiation support tool.</p>
    <h2>Availability</h2><p>The website may be updated or temporarily unavailable while improvements are made.</p>
    <h2>Contact</h2><p>Questions about these terms can be sent through the Contact page.</p>
  </div></section>`;
}

function accessibilityPage() {
  return `${innerHero('Accessibility', 'Accessibility at Gomentum', 'Gomentum is designed for people who may already feel overwhelmed. The website should be readable, keyboard-friendly, responsive, and clear on mobile.')}
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
  return `${innerHero('ADHD task initiation', 'ADHD task initiation support for starting small.', 'Task initiation can be difficult when the first step feels unclear, too large, or too heavy to enter. Gomentum gives you a smaller starting point without asking you to build a full productivity system.')}
  <section class="section"><div class="container prose-card article-prose">
    <h2>A clear note first</h2><p>Gomentum is not a medical, diagnostic, or therapy tool. It is a task support tool that helps you take a smaller first step.</p>
    <h2>Who this is for</h2><p>This page is for people who know what they need to do but still feel stuck at the starting line, especially on low-energy, scattered, or overwhelmed days.</p>
    <h2>Common signs</h2><ul><li>You reread the same task but do not begin.</li><li>You open several apps and still avoid the work.</li><li>You wait for pressure before starting.</li><li>The first step feels larger than the whole task should feel.</li></ul>
    <h2>What usually does not help</h2><p>More dashboards, bigger plans, harsh reminders, and shame-based motivation often add pressure. For many users, the missing piece is not another list. It is a smaller entrance.</p>
    <h2>What can make starting easier</h2><ul><li>Reduce the size of the first action.</li><li>Start with the task as it feels, not as it should look.</li><li>Use a short timer instead of a long commitment.</li><li>Avoid turning the session into a test of discipline.</li><li>Let one small action be enough to begin.</li></ul>
    <h2>A simple 3-step method</h2><ol><li>Write one task in plain words.</li><li>Ask for one first move that is small enough to begin.</li><li>Try a 3-minute start, then continue, pause, or stop.</li></ol>
    <h2>Example task breakdowns</h2>${exampleList([['Write my report', 'Open the document and write only the title.'], ['Study chapter 4', 'Open the notes and highlight only one heading you recognize.'], ['Reply to emails', 'Open one message and write only the greeting.'], ['Clean my room', 'Put only the clothes from the chair into one basket.']])}
    <h2>How Gomentum helps</h2><p>The product flow uses a task input, mood check-in, first-move result, 3-minute timer, and gentle reflection. See the <a href="/product/">Product page</a> or <a href="/how-it-works/">How It Works</a> to understand the flow.</p>
    <div class="article-cta"><h2>Try a 3-minute start.</h2><p>Write one task, get one first move, and begin without building a full plan.</p>${cta('Try a 3-Minute Start', '/#demo')}</div>
    <p class="link-row"><a href="/resources/">View related resources</a><a href="/task-paralysis-guide/">Read task paralysis guide</a><a href="/accessibility/">Accessibility commitments</a></p>
  </div></section>`;
}

function taskGuidePage() {
  return `${innerHero('Task paralysis guide', 'Task paralysis guide: why starting feels hard.', 'Task paralysis can feel like knowing what needs to be done but not being able to begin. The task may be important, simple, or urgent, but the first move still feels blocked.')}
  <section class="section"><div class="container prose-card article-prose">
    <h2>Who this guide is for</h2><p>This guide is for people who feel stuck before starting, avoid tasks that matter, or feel overwhelmed by tasks that look small from the outside.</p>
    <h2>Common signs</h2><ul><li>You know the task matters, but you keep delaying it.</li><li>The task feels too large to enter.</li><li>Opening the file, book, or app feels like the hardest part.</li><li>A normal to-do list makes the pressure worse.</li><li>You wait for the right mood, energy, or motivation before starting.</li></ul>
    <h2>What usually does not help</h2><p>More pressure usually does not make starting easier. A longer list, a stricter plan, or another reminder may show you the work, but it may not create a clear entrance into the task.</p>
    <h2>A simple 3-step method</h2><ol><li>Write the task exactly as it feels.</li><li>Make the first move smaller than you think it needs to be.</li><li>Start for three minutes, then choose whether to continue.</li></ol>
    <h2>Example first moves</h2>${exampleList([['Clean my room', 'Put only the clothes from the chair into one basket.'], ['Write my report', 'Open the document and write only the title.'], ['Study for my exam', 'Open the notes and read one heading.'], ['Reply to an important email', 'Open the email and write only the greeting.']])}
    <h2>How Gomentum uses this idea</h2><p>Gomentum turns the task into a small first move, then supports a short start so momentum has a chance to appear. It is not a medical or therapy tool. It is task support for the moment before starting.</p>
    <div class="article-cta"><h2>Start with one small step.</h2><p>Type one task into Gomentum and get a tiny first move you can begin in three minutes.</p>${cta('Start One Small Step', '/#demo')}</div>
    <p class="link-row"><a href="/adhd-task-initiation/">Read ADHD task initiation support</a><a href="/resources/">View resources</a><a href="/product/">See the product flow</a></p>
  </div></section>`;
}




function blogArticlePage(article) {
  return `${innerHero(article.category, article.title, article.description)}
  <section class="section"><article class="container prose-card article-prose blog-article">
    <p class="article-meta"><strong>Target keyword:</strong> ${esc(article.keyword)} · <strong>Reading time:</strong> ${esc(article.time)}</p>
    <p class="article-meta"><strong>Related terms:</strong> ${esc(article.secondary)}</p>
    ${article.html}
    <div class="article-cta">
      <h2>Start with one small step.</h2>
      <p>Type one task into Gomentum and get a tiny first move you can begin in three minutes.</p>
      <div class="hero-actions">${cta('Start One Small Step', '/#demo')}${cta(article.ctaSecondary || 'See How It Works', article.ctaSecondaryHref || '/how-it-works/', 'secondary')}</div>
    </div>
    <p class="link-row"><a href="/product/">Product</a><a href="/how-it-works/">How It Works</a><a href="/use-cases/">Use Cases</a><a href="/resources/">Resources</a><a href="/pricing/">Pricing</a><a href="/task-paralysis-guide/">Task Paralysis Guide</a><a href="/adhd-task-initiation/">ADHD Task Initiation</a></p>
  </article></section>`;
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
  return `<section class="section"><div class="container narrow faq-lite"><h2>Questions before you try it?</h2>${simpleFaq([['Is this therapy?', 'No. Gomentum is not medical advice or treatment.'], ['Do I need an account for the demo?', 'No. The public demo runs in your browser.'], ['Is it beta access available?', 'Yes. Clear notice before any paid plan is needed during beta.']])}<p><a href="/faq/">Read the full FAQ</a></p></div></section>`;
}

function trustStrip() {
  return `<section class="trust-strip"><div class="container trust-row"><span>No-account demo</span><span>Runs in your browser</span><span>No medical claims</span><span>Beta access available</span></div></section>`;
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
  return `${innerHero('Evidence & QA', 'Evidence & QA', 'This page records the checks used to support mobile readiness, SEO basics, accessibility, contact flow, and production quality.')}
  <section class="section"><div class="container prose-card"><h2>Evidence status</h2><p>This page does not fake Lighthouse scores, WAVE results, testimonials, or user numbers. Add real screenshots and scores after testing the live deployment.</p><p>Evidence folders are included at <code>/public/evidence/</code> for source files and published under <code>/evidence/</code> in the built site.</p><p>Scores and screenshots should be replaced with real test evidence after the final deployed version is tested.</p></div></section>
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
  const url = SITE_URL + (page.slug === '/' ? '/' : page.slug.replace(/\/$/, ''));
  const organization = { '@type': 'Organization', name: 'Gomentum', url: SITE_URL };
  const base = { '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url };
  if (page.slug === '/') {
    return { '@context': 'https://schema.org', '@graph': [organization, {
      '@type': 'SoftwareApplication',
      name: 'Gomentum',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Web',
      description: page.description,
      url: SITE_URL,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Beta access available' }
    }] };
  }
  if (page.slug === '/product/') {
    return { '@context': 'https://schema.org', '@graph': [organization, { '@type': 'SoftwareApplication', name: 'Gomentum', applicationCategory: 'ProductivityApplication', operatingSystem: 'Web', description: page.description, url }] };
  }
  if (page.slug === '/faq/') {
    return { '@context': 'https://schema.org', '@graph': [organization, { '@type': 'FAQPage', mainEntity: Object.values(faqs).flat().map(([q,a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]*>/g, '') } })) }] };
  }
  if (page.article || page.slug.includes('guide') || page.slug === '/adhd-task-initiation/') {
    return { '@context': 'https://schema.org', '@graph': [organization, { ...base, '@type': 'Article', headline: page.h1 || page.title, author: { '@type': 'Organization', name: 'Gomentum Team' }, publisher: organization }] };
  }
  return { '@context': 'https://schema.org', '@graph': [organization, base] };
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
.resource-card em{display:inline-block;margin-top:12px;font-style:normal;font-weight:800;text-decoration:underline;text-underline-offset:4px}.article-meta{font-size:.94rem;color:var(--muted);background:#fff3d8;border:1px solid #ead9b9;border-radius:16px;padding:10px 12px}.blog-article a{font-weight:800}.blog-article h3{margin-top:24px}.blog-article ul{padding-left:22px}.blog-article li{margin:8px 0}.article-prose p{max-width:72ch}
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
        if (status) { status.className = 'form-status success'; status.textContent = configured ? 'Thanks. Your message has been sent.' : 'Thanks. Your message is ready to send once the form endpoint is configured.'; }
      } catch (error) {
        if (status) { status.className = 'form-status error'; status.textContent = 'That did not send. Please email hello@gomentum.app instead.'; }
      } finally {
        if (submit) { submit.disabled = false; submit.textContent = 'Send Message'; }
      }
    });
  }
})();` }

function favicon() { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="28" fill="#1C1C2E"/><circle cx="84" cy="34" r="12" fill="#F5A623"/><path d="M32 66c0-18 14-32 32-32 9 0 17 4 23 10l-15 14c-2-2-5-4-9-4-7 0-12 5-12 12s5 12 12 12c5 0 9-2 11-6H63V55h33v11c0 20-13 34-33 34-18 0-31-14-31-34Z" fill="#FFF8EC"/></svg>`; }
function ogImage() { return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#FFF8EC"/><circle cx="985" cy="135" r="110" fill="#F5A623" opacity=".35"/><rect x="90" y="90" width="470" height="450" rx="44" fill="#1C1C2E"/><text x="140" y="190" fill="#FFF8EC" font-family="Arial" font-size="58" font-weight="700">Gomentum</text><text x="140" y="280" fill="#FFF8EC" font-family="Arial" font-size="40">Start the task without</text><text x="140" y="330" fill="#FFF8EC" font-family="Arial" font-size="40">fighting yourself.</text><rect x="140" y="395" width="250" height="70" rx="20" fill="#F5A623"/><text x="175" y="440" fill="#1C1C2E" font-family="Arial" font-size="28" font-weight="700">One small step</text><text x="640" y="250" fill="#1C1C2E" font-family="Arial" font-size="48" font-weight="700">Task initiation, not</text><text x="640" y="310" fill="#1C1C2E" font-family="Arial" font-size="48" font-weight="700">another task manager.</text></svg>`; }

build();
