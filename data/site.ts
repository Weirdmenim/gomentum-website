export const SITE_URL = "https://gomentum-website.vercel.app";
export const SITE_NAME = "Gomentum";

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
  steps?: { title: string; body: string }[];
};

export type Article = {
  slug: string;
  url: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  keyword: string;
  sections: Section[];
};

export type PageData = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow?: string;
  intro: string;
  sections: Section[];
  primaryCta?: string;
  secondaryCta?: string;
};

export const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export const featureMoments = [
  {
    title: "Brain dump",
    body: "Get messy thoughts out of your head before they become pressure.",
    benefit: "Benefit: it clears the noise before action."
  },
  {
    title: "Mood check-in",
    body: "Start from your current energy level, not from an ideal version of your day.",
    benefit: "Benefit: the task meets your current capacity."
  },
  {
    title: "First move",
    body: "Turn a vague task into one action you can do now.",
    benefit: "Benefit: you see a doorway into the task."
  },
  {
    title: "3-minute timer",
    body: "Begin with a short, low-pressure session.",
    benefit: "Benefit: starting becomes smaller than finishing."
  },
  {
    title: "Gentle reflection",
    body: "Notice progress without turning the session into a performance test.",
    benefit: "Benefit: progress stays visible without pressure."
  }
];

export const useCases = [
  {
    title: "Work tasks",
    situation: "You have a work task open in your mind, but the first step feels unclear.",
    example: "Prepare the weekly report.",
    move: "Open the report file and write only the section headings."
  },
  {
    title: "Study tasks",
    situation: "You need to study, but the material feels too large to enter.",
    example: "Revise cardiovascular pharmacology.",
    move: "Open the notes and highlight only one heading you recognize."
  },
  {
    title: "Life admin",
    situation: "Small personal tasks have piled up and now feel heavier than they are.",
    example: "Reply to an important email.",
    move: "Open the email and write only the greeting."
  },
  {
    title: "Cleaning tasks",
    situation: "The room feels overwhelming because everything looks like one big task.",
    example: "Clean my room.",
    move: "Put only the clothes from the chair into one basket."
  },
  {
    title: "Creative tasks",
    situation: "You want to create something, but the blank page makes starting feel hard.",
    example: "Write a new article.",
    move: "Write three rough bullet points without editing them."
  },
  {
    title: "Overwhelming tasks",
    situation: "The task has too many parts, so your brain avoids the whole thing.",
    example: "Plan next week.",
    move: "Write down only three things that must happen first."
  }
];

export const articles: Article[] = [
  {
    slug: "task-paralysis",
    url: "/resources/task-paralysis",
    title: "What Is Task Paralysis and Why Starting Feels Hard?",
    description: "Learn why beginning can feel impossible even when you know what needs to be done.",
    category: "Task paralysis",
    readingTime: "8 min read",
    keyword: "task paralysis",
    sections: [
      { heading: "What task paralysis feels like", body: ["Task paralysis can feel like knowing what needs to happen, but not being able to move from thinking into doing. You may care about the task, feel the pressure, and still stay stuck at the starting line.", "A to-do list can show the task. A reminder can show that it is late. But neither one always answers the real question: how do I start this right now?"] },
      { heading: "Why just do it does not work", body: ["Pressure often makes the task feel heavier. A better question is not how do I finish this, but what is the smallest action that helps me enter this task?", "That small action is the doorway into the work."] },
      { heading: "The problem with many to-do lists", body: ["To-do lists often name the final task, not the first move. Clean my room is a task. Put the clothes from the chair into one basket is a first move.", "The first version tells you what needs to be finished. The second version tells you how to begin."] },
      { heading: "How to start when you feel overwhelmed", steps: [ { title: "Write the task the messy way", body: "Use the real version in your head, even if it is incomplete." }, { title: "Break it into one first move", body: "Find one visible action, like open the document or read one heading." }, { title: "Start for three minutes", body: "You are not promising to finish. You are only entering the task." } ] },
      { heading: "How Gomentum helps", body: ["Gomentum is a task initiation app for the moment before action. It helps you take one overwhelming task and turn it into one small first move.", "You can see the full flow on the How It Works page, or explore the product on the Product page. Gomentum is not a medical, diagnostic, or therapy tool."] }
    ]
  },
  {
    slug: "adhd-task-initiation",
    url: "/resources/adhd-task-initiation",
    title: "ADHD Task Initiation: How to Start Without Pressure",
    description: "A plain-English guide to reducing the pressure around beginning a task.",
    category: "ADHD task initiation",
    readingTime: "8 min read",
    keyword: "ADHD task initiation",
    sections: [
      { heading: "Why ADHD task initiation can feel hard", body: ["Starting a task can feel harder than doing the task. A task may look simple from the outside, but inside it may contain many hidden decisions.", "Study for the exam may mean finding notes, choosing a topic, deciding how long to study, and facing the feeling of being behind."] },
      { heading: "What usually makes it worse", body: ["More pressure does not always create motion. A longer to-do list may show everything that needs to be done, but it may not show the first move."] },
      { heading: "What helps instead", steps: [ { title: "Start with the task as it feels", body: "Write the messy version first." }, { title: "Pick one visible action", body: "Choose something you can picture doing now." }, { title: "Use a short start", body: "A three-minute start can reduce pressure." } ] },
      { heading: "How Gomentum helps", body: ["Gomentum helps you write the messy task, turn it into one smaller first move, and start with a short timer. It is task support, not medical advice, diagnosis, or therapy."] }
    ]
  },
  {
    slug: "how-to-start-when-overwhelmed",
    url: "/resources/how-to-start-when-overwhelmed",
    title: "How to Start a Task When You Feel Overwhelmed",
    description: "Use one small first move to make a large task easier to enter.",
    category: "Starting routines",
    readingTime: "6 min read",
    keyword: "how to start a task when overwhelmed",
    sections: [
      { heading: "Why overwhelmed tasks feel hard to start", body: ["Overwhelm makes a task look like one big block. Clean my room may include clothes, trash, books, the bed, the floor, and decisions about where everything goes.", "Your brain may not be refusing the task. It may be refusing the unclear size of the task."] },
      { heading: "Do not start with the whole task", body: ["When you feel overwhelmed, planning can become another task. Instead, ask what is one small action that gets me inside the task?"] },
      { heading: "The one-small-step method", steps: [ { title: "Name the task plainly", body: "Write it in simple words." }, { title: "Find the first visible action", body: "Choose something clear enough to do without solving the whole task first." }, { title: "Make it smaller than feels necessary", body: "If it still feels hard, shrink it again." } ] },
      { heading: "How Gomentum helps", body: ["Gomentum helps when a task feels too large to enter. You type one task, get one smaller first move, and begin gently."] }
    ]
  },
  {
    slug: "break-big-tasks-into-small-steps",
    url: "/resources/break-big-tasks-into-small-steps",
    title: "How to Break a Big Task Into Small Steps",
    description: "Turn a vague task into smaller actions without building a full productivity system.",
    category: "Task breakdown",
    readingTime: "7 min read",
    keyword: "break tasks into small steps",
    sections: [
      { heading: "Why big tasks feel bigger than they are", body: ["Big tasks hide the first move. Write the report sounds like one task, but it may include opening the file, checking the brief, finding notes, choosing a structure, and writing the title.", "That is a lot to carry in your head."] },
      { heading: "Start with the messy version", body: ["Before you break the task down, write it the way it feels. This report is too much. I need to clean the kitchen but I do not know where to start."] },
      { heading: "Do not break everything down at once", body: ["You do not need twenty steps. You only need enough to begin. Open the report file, write the title, and add three headings is enough for a start."] },
      { heading: "Make the first step physical", body: ["A useful first step should be something you can do, not just think about. Open the document works better than get serious."] },
      { heading: "How Gomentum helps", body: ["Gomentum works like a task breakdown app for the starting point. It helps you turn a messy task into one smaller first move."] }
    ]
  },
  {
    slug: "why-to-do-lists-do-not-help-starting",
    url: "/resources/why-to-do-lists-do-not-help-starting",
    title: "Why To-Do Lists Do Not Help When You Cannot Start",
    description: "To-do lists can show the work, but they do not always help you enter it.",
    category: "Procrastination support",
    readingTime: "7 min read",
    keyword: "todo list not working ADHD",
    sections: [
      { heading: "A to-do list shows the work", body: ["A to-do list usually answers what needs to be done. But when you are stuck, the harder question is how do I enter this task right now?"] },
      { heading: "Why the list can feel overwhelming", body: ["A long list can create pressure because it shows everything at once. Your brain may need the next tiny action, not the whole list."] },
      { heading: "The missing piece is the first move", body: ["Clean my room is a task. Put the clothes from the chair into one basket is a first move. That difference matters."] },
      { heading: "How to fix a to-do list that is not working", body: ["Keep the list, but add a first-move layer. For each task, ask: what is the smallest visible action I can take?"] },
      { heading: "When to use a task initiation tool", body: ["If you keep looking at your list but cannot move, you may need help with task initiation, not task storage. That is where Gomentum fits."] }
    ]
  },
  {
    slug: "brain-dump-productivity",
    url: "/resources/brain-dump-productivity",
    title: "Brain Dump Productivity: How to Clear Your Head and Begin",
    description: "Use a brain dump to reduce mental clutter before choosing one first move.",
    category: "Brain dump productivity",
    readingTime: "6 min read",
    keyword: "brain dump productivity",
    sections: [
      { heading: "Why your head feels full", body: ["Sometimes the task is not the only problem. The problem is everything around the task: reminders, guilt, random thoughts, half-finished ideas, and pressure to do it properly."] },
      { heading: "What a brain dump is", body: ["A brain dump is not a plan. It is not a perfect to-do list. It is just a place to put the thoughts so they stop circling in your head."] },
      { heading: "How to turn a brain dump into action", steps: [ { title: "Write everything down", body: "Set a short timer and write whatever is in your head." }, { title: "Pick one task", body: "Choose one item from the dump, not the biggest one." }, { title: "Make the first move smaller", body: "Turn that task into one visible action." } ] },
      { heading: "Why this helps task initiation", body: ["A brain dump separates the noise from the next action. Instead of holding everything in your head, you can choose one small move."] },
      { heading: "How Gomentum uses this idea", body: ["Gomentum helps you move from a messy task to one first move. You can use it when your thoughts are scattered, when your to-do list feels too big, or when you know what you need to do but cannot begin."] }
    ]
  }
];

export const pages: PageData[] = [
  {
    path: "/product",
    title: "Product | Gomentum",
    description: "See the calm Gomentum product flow for brain dumps, mood check-ins, first moves, short timers, and gentle reflection.",
    eyebrow: "Product",
    h1: "A calmer way to move from stuck to started.",
    intro: "Gomentum is built around the moment before action. It helps you empty the messy task from your head, choose one starting point, and begin with less pressure.",
    sections: [
      { heading: "Core product moments", body: ["The product keeps attention on the next doable action, not a heavy dashboard."], list: featureMoments.map((item) => `${item.title}: ${item.body}`) },
      { heading: "Useful links", list: ["Explore the features", "See the full flow", "See use cases"] }
    ],
    primaryCta: "Start One Small Step",
    secondaryCta: "See How It Works"
  },
  {
    path: "/features",
    title: "Features for Starting Tasks | Gomentum",
    description: "Explore Gomentum features designed for starting, including brain dumps, first moves, mood check-ins, a short timer, and gentle reflection.",
    eyebrow: "Features",
    h1: "Features for starting, not just organizing.",
    intro: "Gomentum is not trying to become another full task manager. Its core features are designed to reduce the pressure of beginning.",
    sections: [
      { heading: "What helps you begin", list: featureMoments.map((item) => `${item.title}: ${item.benefit}`) },
      { heading: "Beta honesty", body: ["The product is still improving, so feature labels stay honest and simple."] }
    ],
    primaryCta: "Start One Small Step",
    secondaryCta: "See How It Works"
  },
  {
    path: "/how-it-works",
    title: "How Gomentum Works | Start One Small Step",
    description: "See how Gomentum helps you brain dump a task, check your energy, get one first move, and start with a short timer.",
    eyebrow: "How It Works",
    h1: "From stuck to started in a few clear moves.",
    intro: "Brain dump what is on your mind. Check in with your energy. Let Gomentum suggest one starting point. Begin with three minutes, then continue, pause, or stop without turning the session into a test of willpower.",
    sections: [
      { heading: "Four small moves. No full system required.", steps: [
        { title: "Brain dump the task", body: "Write the task as it feels, even if it is messy or incomplete. Benefit: you do not need to organize the task before starting." },
        { title: "Check your energy", body: "Choose how heavy the task feels today so the starting point can stay realistic. Benefit: the task meets your current capacity." },
        { title: "Get one first move", body: "Gomentum suggests a small action that can begin the task without requiring a full plan. Benefit: you see a doorway into the task." },
        { title: "Start for three minutes", body: "Use a short timer to enter the task gently, then decide whether to continue. Benefit: starting becomes smaller than finishing." }
      ] },
      { heading: "You do not need a perfect plan to begin.", body: ["Start with one messy task and one small first move."] }
    ],
    primaryCta: "Start One Small Step",
    secondaryCta: "See the product flow"
  },
  {
    path: "/use-cases",
    title: "Gomentum Use Cases | Work, Study, Life Admin, Cleaning",
    description: "See how Gomentum supports work tasks, study tasks, life admin, cleaning, creative tasks, and overwhelming tasks.",
    eyebrow: "Use cases",
    h1: "Use Gomentum when the task feels too big to enter.",
    intro: "Gomentum can support work, study, life admin, cleaning, creative tasks, and other moments where you know what to do but cannot begin.",
    sections: [
      { heading: "Examples, kept simple", list: useCases.map((item) => `${item.title}: ${item.example} First move: ${item.move}`) }
    ],
    primaryCta: "Start One Small Step",
    secondaryCta: "Read starting guides"
  },
  {
    path: "/resources",
    title: "Task Initiation Resources | Gomentum",
    description: "Read calm guides about task paralysis, ADHD task initiation, procrastination support, brain dumps, tiny first steps, and task breakdown.",
    eyebrow: "Resources",
    h1: "Task initiation resources for getting unstuck.",
    intro: "Guides for understanding task paralysis, ADHD-style overwhelm, procrastination, brain dumps, and tiny first steps.",
    sections: [
      { heading: "Start with one guide", body: ["Choose one article. You do not need to read everything first."], list: articles.map((article) => `${article.category}: ${article.title}`) },
      { heading: "Related starting points", list: ["Read the task paralysis guide", "Read the ADHD task initiation guide", "See How Gomentum Works"] }
    ],
    primaryCta: "Start One Small Step",
    secondaryCta: "See How It Works"
  },
  {
    path: "/pricing",
    title: "Gomentum Pricing and Beta Access",
    description: "See Gomentum beta access details, future pricing notes, and what early users can expect while the product improves.",
    eyebrow: "Pricing",
    h1: "Simple beta access while Gomentum is still improving.",
    intro: "Gomentum is currently in beta. Early users can try the core task-starting flow while the product is being improved.",
    sections: [
      { heading: "Beta access available", list: ["Try the core task-starting flow", "Clear notice before any paid plan", "Early feedback helps shape the product"] },
      { heading: "Future pricing note", body: ["Final pricing may change as the product improves. Any paid plan details should be treated as future packaging unless already confirmed."] }
    ],
    primaryCta: "Join the Beta",
    secondaryCta: "Read the FAQ"
  },
  {
    path: "/faq",
    title: "Gomentum FAQ | Product, Privacy, Beta, ADHD Support",
    description: "Clear answers about Gomentum, beta access, privacy, ADHD-style task initiation support, pricing, and how the product works.",
    eyebrow: "FAQ",
    h1: "Questions about Gomentum, answered clearly.",
    intro: "Short answers about the product, beta access, privacy, and ADHD-style task initiation support.",
    sections: [
      { heading: "About Gomentum", body: ["Gomentum is a calm task initiation tool that helps you turn an overwhelming task into one tiny first move.", "Task managers help you organize tasks. Gomentum focuses on the moment before action, when starting feels hard."] },
      { heading: "Privacy and safety", body: ["The public website demo does not save the task you type. Gomentum is a task support tool, not medical advice, diagnosis, or therapy."] },
      { heading: "Beta and pricing", body: ["Pricing may change as the product improves. Users should be told clearly before any paid plan affects access."] }
    ],
    primaryCta: "Start One Small Step",
    secondaryCta: "View beta access"
  },
  {
    path: "/contact",
    title: "Contact Gomentum | Feedback, Support, Accessibility",
    description: "Send feedback, beta questions, support questions, accessibility issues, or partnership notes to Gomentum.",
    eyebrow: "Contact",
    h1: "Contact Gomentum",
    intro: "Send feedback, beta questions, accessibility issues, or partnership notes. Short messages are welcome.",
    sections: [
      { heading: "Use this page for", list: ["Beta feedback", "Product feedback", "Support questions", "Accessibility issue", "Partnership notes"] }
    ],
    primaryCta: "Send Message",
    secondaryCta: "Read common questions"
  },
  {
    path: "/privacy",
    title: "Privacy at Gomentum",
    description: "Plain-English privacy notes for Gomentum, including task inputs, public demo behavior, contact requests, and user control.",
    eyebrow: "Privacy",
    h1: "Privacy at Gomentum",
    intro: "Gomentum is designed to be calm and trustworthy. This page explains what information may be collected, how it may be used, and how users can ask questions about their data.",
    sections: [
      { heading: "Task inputs should stay private", body: ["We only ask for information needed to provide the product, receive feedback, or respond to contact requests."] },
      { heading: "The public demo is limited", body: ["The website demo is a page preview. It does not save the task you type into the public demo."] },
      { heading: "Users should stay in control", body: ["Product data should be handled with clear consent and user control. For privacy questions or deletion requests, contact the Gomentum team through the contact page."] }
    ],
    primaryCta: "Contact Gomentum",
    secondaryCta: "Read accessibility notes"
  },
  {
    path: "/terms",
    title: "Terms | Gomentum",
    description: "Basic terms for using the public Gomentum website and beta-stage product.",
    eyebrow: "Terms",
    h1: "Basic terms for using Gomentum.",
    intro: "These terms explain how the public website and beta-stage product should be used.",
    sections: [
      { heading: "Use of the website", body: ["The website explains Gomentum and provides a first-step demo. It should not be treated as medical, legal, financial, or emergency advice."] },
      { heading: "Beta product status", body: ["Gomentum is a beta-stage product. Some features may be available now, improving, or planned for later versions."] },
      { heading: "No medical claims", body: ["Gomentum supports task initiation and productivity. It does not diagnose, treat, cure, or replace professional care."] }
    ],
    primaryCta: "Start One Small Step",
    secondaryCta: "Contact Gomentum"
  },
  {
    path: "/accessibility",
    title: "Accessibility at Gomentum",
    description: "Gomentum accessibility commitments for readable typography, keyboard navigation, contrast, reduced motion, form labels, and feedback.",
    eyebrow: "Accessibility",
    h1: "Accessibility at Gomentum",
    intro: "Gomentum is designed for people who may already feel overwhelmed. The website should be readable, keyboard-friendly, responsive, and clear on mobile.",
    sections: [
      { heading: "Current accessibility commitments", list: ["Readable typography and calm spacing", "Keyboard-visible focus styles", "Clear labels on forms and inputs", "Reduced motion and no flashing content", "Mobile-first layouts and large tap targets", "Plain language for errors, forms, and trust notes"] },
      { heading: "Feedback", body: ["If something on the site is hard to read, navigate, or use, we want to know. Accessibility evidence should include Lighthouse, WAVE, keyboard navigation checks, and mobile screenshots after the final deployed version is tested."] }
    ],
    primaryCta: "Contact Gomentum",
    secondaryCta: "View Evidence & QA"
  },
  {
    path: "/evidence",
    title: "Evidence & QA | Gomentum",
    description: "Evidence and QA placeholders for mobile readiness, SEO basics, accessibility, contact flow, and production quality checks.",
    eyebrow: "Evidence & QA",
    h1: "Evidence & QA",
    intro: "This page records the checks used to support mobile readiness, SEO basics, accessibility, contact flow, and production quality.",
    sections: [
      { heading: "Lighthouse results", list: ["Home: Pending real test result.", "Contact: Pending real test result.", "Resources: Pending real test result."] },
      { heading: "WAVE results", list: ["Home: Pending real test result.", "Contact: Pending real test result.", "FAQ: Pending real test result."] },
      { heading: "Evidence note", body: ["Scores and screenshots should be replaced with real test evidence after the final deployed version is tested."] }
    ],
    primaryCta: "Start One Small Step",
    secondaryCta: "Read accessibility notes"
  },
  {
    path: "/adhd-task-initiation",
    title: "ADHD Task Initiation Support | Gomentum",
    description: "ADHD task initiation support for starting small without medical claims, pressure, or a full productivity system.",
    eyebrow: "ADHD task initiation",
    h1: "ADHD task initiation support for starting small.",
    intro: "Task initiation can be difficult when the first step feels unclear, too large, or too heavy to enter. Gomentum gives you a smaller starting point without asking you to build a full productivity system.",
    sections: [
      { heading: "A clear note first", body: ["Gomentum is not a medical, diagnostic, or therapy tool. It is a task support tool that helps you take a smaller first step."] },
      { heading: "What can make starting easier", list: ["Reduce the size of the first action", "Start with the task as it feels", "Use a short timer instead of a long commitment", "Avoid turning the session into a test of discipline", "Let one small action be enough to begin"] }
    ],
    primaryCta: "Try a 3-Minute Start",
    secondaryCta: "See How It Works"
  },
  {
    path: "/task-paralysis-guide",
    title: "Task Paralysis Guide | Gomentum",
    description: "A calm guide for understanding task paralysis, common signs, what usually does not help, and how to start with one small first move.",
    eyebrow: "Task paralysis guide",
    h1: "Task paralysis guide: why starting feels hard.",
    intro: "Task paralysis can feel like knowing what needs to be done but not being able to begin. The task may be important, simple, or urgent, but the first move still feels blocked.",
    sections: [
      { heading: "Who this guide is for", body: ["This guide is for people who feel stuck before starting, avoid tasks that matter, or feel overwhelmed by tasks that look small from the outside."] },
      { heading: "Common signs", list: ["You know the task matters, but you keep delaying it", "The task feels too large to enter", "Opening the file, book, or app feels like the hardest part", "A normal to-do list makes the pressure worse"] },
      { heading: "A simple 3-step method", steps: [ { title: "Write the task exactly as it feels", body: "Do not make it neat first." }, { title: "Make the first move smaller than you think", body: "Shrink the action until it feels possible." }, { title: "Start for three minutes", body: "Then choose whether to continue." } ] },
      { heading: "Example first moves", list: ["Clean my room: Put only the clothes from the chair into one basket", "Write my report: Open the document and write only the title", "Study for my exam: Open the notes and read one heading"] }
    ],
    primaryCta: "Start One Small Step",
    secondaryCta: "See How It Works"
  }
];

export const allRoutes = [
  "/",
  ...pages.map((page) => page.path),
  ...articles.map((article) => article.url)
];

export function getPageBySlug(slug?: string[]) {
  const path = slug && slug.length ? `/${slug.join("/")}` : "/";
  return pages.find((page) => page.path === path);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
