export type Resource = {
  title: string;
  category: string;
  description: string;
  href: string;
  readTime: string;
  type: "Guide" | "Article" | "Template";
};

export const resources: Resource[] = [
  {
    title: "The First Move Framework",
    category: "Getting Started",
    description: "A simple framework to help you turn one overwhelming task into one clear first move.",
    href: "/task-paralysis-guide",
    readTime: "6 min read",
    type: "Guide"
  },
  {
    title: "Stop Overthinking, Start Doing",
    category: "Focus & Productivity",
    description: "Practical ways to reduce the mental noise before a task begins.",
    href: "/resources#overthinking",
    readTime: "5 min read",
    type: "Article"
  },
  {
    title: "Brain Dump Productivity",
    category: "Getting Started",
    description: "How to clear your head without turning your thoughts into a complicated project plan.",
    href: "/how-it-works#brain-dump",
    readTime: "4 min read",
    type: "Guide"
  },
  {
    title: "ADHD Focus Timer vs Micro-Steps",
    category: "AI & Tools",
    description: "Why a timer helps more when the first move is already small enough to begin.",
    href: "/adhd-task-initiation#micro-steps",
    readTime: "6 min read",
    type: "Article"
  },
  {
    title: "10 Questions to Find Your First Move",
    category: "Templates",
    description: "A gentle prompt list for moments when you cannot see where to start.",
    href: "/resources#questions",
    readTime: "3 min read",
    type: "Template"
  },
  {
    title: "Why Todo Lists Do Not Always Help",
    category: "Mindset & Motivation",
    description: "The gap between knowing what to do and being able to start doing it.",
    href: "/features#not-task-manager",
    readTime: "5 min read",
    type: "Article"
  }
];
