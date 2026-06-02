export type PageInfo = {
  title: string;
  description: string;
  path: string;
  keyword: string;
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gomentum.vercel.app";

export const pages: PageInfo[] = [
  {
    title: "Gomentum | Task Initiation App for Starting Small",
    description: "Gomentum helps you turn overwhelming tasks into one clear first move, short focus sessions, and gentle momentum.",
    path: "/",
    keyword: "task initiation app"
  },
  {
    title: "How Gomentum Helps You Start Tasks",
    description: "See how Gomentum turns your brain dump into small steps, starts a short focus session, and helps you keep moving.",
    path: "/how-it-works",
    keyword: "how to start tasks"
  },
  {
    title: "AI Task Breakdown and Focus Features | Gomentum",
    description: "Explore micro-steps, mood check-ins, short timers, rewards, and honest beta status for Gomentum features.",
    path: "/features",
    keyword: "AI task breakdown app"
  },
  {
    title: "ADHD Task Initiation Support | Gomentum",
    description: "Gentle support for ADHD-style overwhelm and starting tasks without medical or diagnostic claims.",
    path: "/adhd-task-initiation",
    keyword: "task initiation ADHD"
  },
  {
    title: "Use Gomentum for Work, Study, and Life Admin",
    description: "See realistic examples for work tasks, study sessions, life admin, and procrastination support.",
    path: "/use-cases",
    keyword: "procrastination support app"
  },
  {
    title: "Gomentum Pricing and Beta Access",
    description: "Try Gomentum free during beta. No card required. Future pricing will be announced clearly before any charge.",
    path: "/pricing",
    keyword: "Gomentum pricing"
  },
  {
    title: "Task Initiation and Procrastination Resources | Gomentum",
    description: "Calm guides for task paralysis, procrastination, brain dumps, focus, and starting with one small step.",
    path: "/resources",
    keyword: "task initiation resources"
  },
  {
    title: "Task Paralysis Guide | Why Starting Feels Hard",
    description: "Learn why starting can feel difficult and how one clear first move can help you begin without pressure.",
    path: "/task-paralysis-guide",
    keyword: "task paralysis"
  },
  {
    title: "Gomentum FAQ",
    description: "Answers about Gomentum, beta access, pricing, privacy, ADHD-related use, and AI task breakdown.",
    path: "/faq",
    keyword: "Gomentum FAQ"
  },
  {
    title: "Contact Gomentum",
    description: "Send feedback, support questions, partnership notes, or beta access questions to the Gomentum team.",
    path: "/contact",
    keyword: "contact Gomentum"
  },
  {
    title: "Gomentum Privacy",
    description: "Plain-English privacy notes for Gomentum, including task input, beta forms, and data handling principles.",
    path: "/privacy",
    keyword: "Gomentum privacy"
  },
  {
    title: "Gomentum Terms",
    description: "Basic terms for using the Gomentum beta website and public product information.",
    path: "/terms",
    keyword: "Gomentum terms"
  },
  {
    title: "Gomentum Accessibility Statement",
    description: "Gomentum accessibility commitments for readable, keyboard-friendly, mobile-first, low-pressure experiences.",
    path: "/accessibility",
    keyword: "Gomentum accessibility"
  }
];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const guideNav = [
  { label: "ADHD & Task Initiation", href: "/adhd-task-initiation" },
  { label: "Task Paralysis Guide", href: "/task-paralysis-guide" }
];

export const trustNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" }
];
