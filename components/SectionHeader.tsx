import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, children, align = "left" }: { eyebrow?: string; title: string; children?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`mb-8 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold leading-tight text-warm md:text-5xl">{title}</h2>
      {children ? <div className="mt-4 text-lg text-textgray">{children}</div> : null}
    </div>
  );
}
