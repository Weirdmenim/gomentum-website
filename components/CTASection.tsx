import { ButtonLink } from "./Button";
import { Icon } from "./Icons";

export function CTASection({ title = "Ready to take one small step?", text = "You do not need motivation. You just need a first move.", href = "/#first-step-demo", label = "Start One Small Step" }: { title?: string; text?: string; href?: string; label?: string }) {
  return (
    <section className="mx-auto max-w-site px-4 py-12 md:px-6">
      <div className="card-border rounded-panel bg-gradient-to-r from-amber/18 via-carddark to-teal/10 p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
        <div>
          <h2 className="text-balance text-3xl font-bold text-warm md:text-4xl">{title}</h2>
          <p className="mt-3 text-textgray">{text}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-textgray">
            <span>Free during beta</span><span>No card required</span><span>Cancel anytime</span>
          </div>
        </div>
        <ButtonLink href={href} className="mt-6 w-full md:mt-0 md:w-auto">{label} <Icon name="arrow" className="h-4 w-4" /></ButtonLink>
      </div>
    </section>
  );
}
