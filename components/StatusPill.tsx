import type { FeatureStatus } from "@/data/features";

const statusStyles: Record<FeatureStatus, string> = {
  "Live Now": "border-teal/35 bg-teal/12 text-teal",
  "Improving in Beta": "border-amber/35 bg-amber/12 text-amber",
  "Coming Soon": "border-softgray/25 bg-white/5 text-textgray"
};

export function StatusPill({ status }: { status: FeatureStatus }) {
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>{status}</span>;
}
