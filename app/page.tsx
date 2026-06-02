import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { HeroSection } from "@/components/HeroSection";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { JsonLd } from "@/components/JsonLd";
import { getPageMetadata } from "@/data/metadata";
import { softwareSchema } from "@/data/schema";

export const metadata: Metadata = getPageMetadata("/");

const simpleSteps = [
  ["1", "Name one task", "No sorting. No full plan. Just the thing in front of you."],
  ["2", "Get one entrance", "Gomentum turns it into a first move that feels small enough to begin."],
  ["3", "Start gently", "Try three minutes. Stop or continue. Either way, you started."]
];

export default function HomePage() {
  return (
    <>
      <HeroSection eyebrow="Task initiation support" title="Start tasks when starting feels" highlight="impossible.">
        <p>Type one task. Get one first move. No pressure to organize your whole life.</p>
      </HeroSection>

      <InteractiveDemo />

      <section className="bg-warm px-4 py-8 text-charcoal md:px-6 md:py-12" aria-labelledby="simple-flow-title">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-[#0A6F62]">A quieter way to begin</p>
          <h2 id="simple-flow-title" className="mt-2 text-balance text-3xl font-bold leading-tight md:text-4xl">
            One task. One first move. One short start.
          </h2>
          <div className="mt-7 divide-y divide-softgray rounded-card border border-softgray bg-white">
            {simpleSteps.map(([number, title, text]) => (
              <div key={title} className="flex gap-4 p-5">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-sm font-bold text-[#0A6F62]">{number}</span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-[#55576A] md:text-base">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[#55576A]">
            Unlike task managers, Gomentum helps before you are ready to plan, sort, or prioritize everything.
          </p>
        </div>
      </section>

      <section className="bg-warm px-4 py-8 text-charcoal md:px-6 md:py-12" aria-labelledby="quiet-trust-title">
        <div className="mx-auto max-w-3xl rounded-card bg-cream p-6">
          <h2 id="quiet-trust-title" className="text-2xl font-bold">You are not lazy.</h2>
          <p className="mt-3 text-[#55576A]">
            Starting is just harder some days. Gomentum keeps the first step small, private, and low-pressure.
          </p>
          <ul className="mt-5 grid gap-2 text-sm font-medium text-[#55576A] sm:grid-cols-2">
            <li>Private page demo</li>
            <li>No account needed to try it</li>
            <li>No medical or therapy claims</li>
            <li>Free during beta</li>
          </ul>
        </div>
      </section>

      <section className="bg-warm px-4 pb-14 pt-8 text-charcoal md:px-6 md:pb-20" aria-labelledby="soft-final-cta-title">
        <div className="mx-auto max-w-3xl rounded-card border border-softgray bg-white p-6 text-center md:p-8">
          <h2 id="soft-final-cta-title" className="text-balance text-3xl font-bold">Ready to try one small step?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[#55576A]">Start with one task. You can stop after the first move.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/#first-step-demo">Try one first move</ButtonLink>
            <Link href="/faq" className="inline-flex min-h-12 items-center font-semibold text-[#0A6F62] underline-offset-4 hover:underline">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={softwareSchema} />
    </>
  );
}
