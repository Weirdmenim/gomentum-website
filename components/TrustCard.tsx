import { Icon } from "./Icons";

export function TrustCard({ icon = "shield", title, text }: { icon?: "shield" | "lock" | "heart" | "check" | "spark" | "timer" | "users"; title: string; text: string }) {
  return (
    <div className="card-border rounded-card bg-white/[0.04] p-5">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-teal/12 text-teal">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-warm">{title}</h3>
      <p className="mt-2 text-sm text-textgray">{text}</p>
    </div>
  );
}
