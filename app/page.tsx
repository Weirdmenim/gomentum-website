import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { HomeUseCaseSelector } from "@/components/HomeUseCaseSelector";
import { Icon, type IconName } from "@/components/Icons";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { JsonLd } from "@/components/JsonLd";
import { getPageMetadata } from "@/data/metadata";
import { softwareSchema } from "@/data/schema";

export const metadata: Metadata = getPageMetadata("/");

export default function HomePage() {
  return (
    <>
      <HeroSection eyebrow="Task initiation support" title="Start tasks when starting feels" highlight="impossible.">
        <p>Type one task. Get one first move. Gomentum keeps the start small, calm, and specific.</p>
      </HeroSection>

      <InteractiveDemo />

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14" aria-labelledby="reassurance-title">
        <div className="mx-auto max-w-site rounded-panel bg-cream p-6 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0A6F62]">A calmer starting point</p>
          <h2 id="reassurance-title" className="mt-3 text-balance text-3xl font-bold md:text-4xl">You are not lazy. Starting is just harder some days.</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#55576A]">Gomentum helps you enter the task through one tiny action instead of asking you to organize your whole life first.</p>
        </div>
      </section>

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14" aria-labelledby="how-it-works-home-title">
        <div className="mx-auto max-w-site">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0A6F62]">How it works</p>
            <h2 id="how-it-works-home-title" className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">Three steps. No full productivity system.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["1", "Type one task", "It can be rough, unfinished, or messy."],
              ["2", "Get one first move", "Gomentum gives you a small physical action."],
              ["3", "Start for 3 minutes", "Do only the entrance. Continuing is optional."]
            ].map(([number, title, text]) => (
              <article key={title} className="rounded-2xl border border-softgray bg-white p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-amber text-base font-bold text-charcoal">{number}</span>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-[#55576A]">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-[#55576A]">Unlike task managers, Gomentum helps before you are ready to plan, sort, or prioritize everything.</p>
        </div>
      </section>

      <HomeUseCaseSelector />

      <section className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14" aria-labelledby="trust-strip-title">
        <div className="mx-auto max-w-site rounded-panel border border-softgray bg-white p-6 md:p-8">
          <h2 id="trust-strip-title" className="sr-only">Trust notes</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {([
              { icon: "lock" as IconName, title: "Private demo", text: "No task is saved in this page demo." },
              { icon: "shield" as IconName, title: "No medical claims", text: "Support for starting, not diagnosis or treatment." },
              { icon: "heart" as IconName, title: "No pressure", text: "One first move is enough." },
              { icon: "check" as IconName, title: "Free during beta", text: "No card required for early access." }
            ]).map(({ icon, title, text }) => (
              <div key={title} className="flex gap-3 rounded-2xl bg-cream p-4">
                <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0A6F62]">
                  <Icon name={icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-[#55576A]">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-softgray pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[#55576A]">Questions about privacy, beta access, or ADHD-related use?</p>
            <Link href="/faq" className="font-semibold text-[#0A6F62] underline-offset-4 hover:underline">Read the FAQ</Link>
          </div>
        </div>
      </section>

      <CTASection title="Ready to try one small step?" text="Start with one task. You do not have to plan the whole day." primaryLabel="Try one first move" primaryHref="/#first-step-demo" secondaryLabel="See pricing" secondaryHref="/pricing" />
      <JsonLd data={softwareSchema} />
    </>
  );
}
