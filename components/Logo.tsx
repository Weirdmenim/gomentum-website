import Link from "next/link";
import { Icon } from "./Icons";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 font-bold tracking-tight text-warm" aria-label="Gomentum home">
      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-amber text-charcoal shadow-glow" aria-hidden="true">
        <Icon name="spark" className="h-5 w-5" />
      </span>
      <span className="text-xl md:text-2xl">Gomentum</span>
    </Link>
  );
}
