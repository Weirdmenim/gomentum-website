import type { SVGProps } from "react";

export type IconName =
  | "spark"
  | "shield"
  | "bolt"
  | "heart"
  | "timer"
  | "check"
  | "chat"
  | "layout"
  | "mic"
  | "arrow"
  | "document"
  | "users"
  | "lock"
  | "book"
  | "mail"
  | "menu"
  | "close";

export function Icon({ name, className, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const common = {
    className,
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props
  };

  switch (name) {
    case "spark":
      return <svg {...common}><path d="M12 2l1.6 6.1L20 10l-6.4 1.9L12 18l-1.6-6.1L4 10l6.4-1.9L12 2z"/><path d="M19 16l.8 2.4 2.2.6-2.2.6L19 22l-.8-2.4-2.2-.6 2.2-.6L19 16z"/></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-5"/></svg>;
    case "bolt":
      return <svg {...common}><path d="M13 2L4 14h7l-1 8 10-13h-7l0-7z"/></svg>;
    case "heart":
      return <svg {...common}><path d="M20.8 5.6c-1.7-2-4.8-1.8-6.4.3L12 8.7 9.6 5.9C8 3.8 4.9 3.6 3.2 5.6 1.3 7.8 2 11 4.1 12.8L12 20l7.9-7.2c2.1-1.8 2.8-5 .9-7.2z"/></svg>;
    case "timer":
      return <svg {...common}><path d="M12 7v5l3 2"/><path d="M9 2h6"/><path d="M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>;
    case "check":
      return <svg {...common}><path d="M20 6L9 17l-5-5"/></svg>;
    case "chat":
      return <svg {...common}><path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4A8 8 0 1 1 21 12z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>;
    case "layout":
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10"/></svg>;
    case "mic":
      return <svg {...common}><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z"/><path d="M19 11a7 7 0 0 1-14 0M12 18v4"/></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>;
    case "document":
      return <svg {...common}><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>;
    case "users":
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "lock":
      return <svg {...common}><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>;
    case "book":
      return <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H21"/><path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 17H21V4z"/></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case "menu":
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case "close":
      return <svg {...common}><path d="M6 6l12 12M18 6L6 18"/></svg>;
  }
}
