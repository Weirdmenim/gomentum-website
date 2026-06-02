import Link from "next/link";
import type { Resource } from "@/data/resources";
import { Icon } from "./Icons";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="card-border flex h-full flex-col rounded-card bg-white/[0.04] p-6 transition hover:bg-white/[0.06]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-amber/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-amber">{resource.type}</span>
        <span className="text-sm text-textgray">{resource.readTime}</span>
      </div>
      <h3 className="text-xl font-bold text-warm">{resource.title}</h3>
      <p className="mt-3 flex-1 text-textgray">{resource.description}</p>
      <Link href={resource.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-teal hover:text-amber">
        Read resource <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </article>
  );
}
