import type { Feature } from "@/data/features";
import { Icon } from "./Icons";
import { StatusPill } from "./StatusPill";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="card-border rounded-card bg-white/[0.04] p-6 transition hover:bg-white/[0.06]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber/12 text-amber">
          <Icon name={feature.icon} className="h-6 w-6" />
        </div>
        <StatusPill status={feature.status} />
      </div>
      <h3 className="text-xl font-bold text-warm">{feature.title}</h3>
      <p className="mt-3 text-textgray">{feature.description}</p>
    </article>
  );
}
