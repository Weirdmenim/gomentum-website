import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, children, align = "left" }: { eyebrow?: string; title: string; children?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`mb-7 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0A6F62]">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold leading-tight text-charcoal md:text-4xl">{title}</h2>
      {children ? <div className="mt-4 text-base leading-8 text-[#55576A] md:text-lg">{children}</div> : null}
    </div>
  );
}
