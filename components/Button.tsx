import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "teal";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const styles: Record<Variant, string> = {
  primary: "bg-amber text-charcoal hover:bg-amberHover active:bg-amberActive shadow-glow",
  secondary: "border border-softgray/25 bg-white/5 text-warm hover:bg-white/10",
  ghost: "text-warm hover:bg-white/10",
  teal: "bg-teal text-charcoal hover:brightness-110 shadow-teal"
};

const base = "inline-flex min-h-12 items-center justify-center gap-2 rounded-button px-5 py-3 text-center text-base font-semibold transition disabled:cursor-not-allowed disabled:opacity-60";

export function ButtonLink({ children, variant = "primary", className = "", ...props }: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Button({ children, variant = "primary", className = "", type = "button", ...props }: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
