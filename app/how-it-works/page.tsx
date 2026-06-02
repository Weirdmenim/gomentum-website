import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/how-it-works");

const steps = [
  ["1", "Name what is on your mind", "Write one task or a messy brain dump. It does not need to be organized."],
  ["2", "Get a smaller entrance", "Gomentum turns the task into one clear first move that feels easier to begin."],
  ["3", "Start for three minutes", "The goal is not to finish everything. The goal is to begin without pressure."]
];

export default function HowItWorksPage() {
  return (
    <>
      <HeroSection eyebrow="How Gomentum works" title="A calmer way to" highlight="start.">
        <p>Gomentum reduces the moment before action into one small, visible step.</p>
      </HeroSection>

      <section id="brain-dump" className="bg-warm px-4 py-10 text-charcoal md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">The flow is intentionally simple.</h2>
          <div className="mt-7 divide-y divide-softgray rounded-card border border-softgray bg-white">
            {steps.map(([number, title, text]) => (
              <div key={title} className="flex gap-4 p-5">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-sm font-bold text-[#0A6F62]">{number}</span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-[#55576A]">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[#55576A]">
            That is the difference: Gomentum does not ask you to create a perfect system first. It helps you enter the task.
          </p>
          <Link href="/features" className="mt-5 inline-flex font-semibold text-[#0A6F62] underline-offset-4 hover:underline">
            See the simple features
          </Link>
        </div>
      </section>

      <CTASection title="Try the flow with one task." text="No account needed for the page demo." />
    </>
  );
}
