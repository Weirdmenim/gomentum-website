import { Icon } from "./Icons";
import { ButtonLink } from "./Button";

export function PricingCard() {
  const items = ["Brain dump support", "AI task breakdown preview", "3-minute starts", "Mood check-ins", "Focus support", "Early feedback access"];
  return (
    <section id="beta-access" className="card-border rounded-panel bg-carddark p-6 shadow-glow md:p-8">
      <p className="mb-4 inline-flex rounded-full border border-amber/35 bg-amber/12 px-3 py-1 text-sm font-bold uppercase tracking-[0.16em] text-amber">Beta access</p>
      <h2 className="text-3xl font-bold text-warm md:text-5xl">Free during beta. No card required.</h2>
      <p className="mt-4 max-w-2xl text-lg text-textgray">Gomentum is in private beta while the product improves with early users. Future pricing will be announced clearly before any charge.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-4 text-warm">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-teal/15 text-teal"><Icon name="check" className="h-4 w-4" /></span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 rounded-2xl border border-softgray/15 bg-offblack/60 p-5 md:grid-cols-2">
        <div>
          <p className="font-semibold text-teal">Starter after beta</p>
          <p className="mt-2 text-3xl font-bold text-warm">Around $6<span className="text-base font-normal text-textgray">/month</span></p>
          <p className="mt-2 text-sm text-textgray">For calm task initiation and short focus support. Subject to final confirmation.</p>
        </div>
        <div>
          <p className="font-semibold text-teal">Plus after beta</p>
          <p className="mt-2 text-3xl font-bold text-warm">Around $10<span className="text-base font-normal text-textgray">/month</span></p>
          <p className="mt-2 text-sm text-textgray">For more AI sessions, history, rewards, and personalization. Subject to final confirmation.</p>
        </div>
      </div>
      <ButtonLink href="/contact" className="mt-8 w-full md:w-auto">Join the beta <Icon name="arrow" className="h-4 w-4" /></ButtonLink>
    </section>
  );
}
