import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { Icon } from "@/components/Icons";
import { ProductMockup } from "@/components/ProductMockup";
import { SectionHeader } from "@/components/SectionHeader";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/how-it-works");

export default function HowItWorksPage() {
  const steps = [
    ["Mood check-in", "Start from your real energy level, not an imaginary perfect day."],
    ["Brain dump", "Write what is on your mind without sorting it first."],
    ["First move", "Get one small physical action that makes the task easier to enter."],
    ["3-minute start", "Begin with a short, low-pressure timer."],
    ["Momentum", "Mark the first move as done and keep going only if it helps."]
  ];
  return (
    <>
      <HeroSection eyebrow="How Gomentum works" title="A calmer way to" highlight="start." visual={<ProductMockup />}>
        <p>Gomentum turns the messy moment before action into one clear first move, then helps you begin with a short focus session.</p>
      </HeroSection>
      <section id="brain-dump" className="mx-auto max-w-site px-4 py-16 md:px-6">
        <SectionHeader eyebrow="The flow" title="From scattered thoughts to one useful entrance." />
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map(([title, text], index) => (
            <article key={title} className="card-border rounded-card bg-white/[0.04] p-5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-amber text-charcoal font-bold">{index + 1}</span>
              <h2 className="mt-5 text-xl font-bold text-warm">{title}</h2>
              <p className="mt-2 text-sm text-textgray">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-site gap-6 px-4 py-12 md:grid-cols-2 md:px-6">
        <div className="card-border rounded-card bg-carddark p-6">
          <Icon name="chat" className="h-8 w-8 text-teal" />
          <h2 className="mt-4 text-2xl font-bold text-warm">You do not need a perfect task list.</h2>
          <p className="mt-3 text-textgray">A brain dump is allowed to be messy. The product exists to help make one entrance clear, not to judge how organized your thoughts are.</p>
        </div>
        <div className="card-border rounded-card bg-carddark p-6">
          <Icon name="timer" className="h-8 w-8 text-amber" />
          <h2 className="mt-4 text-2xl font-bold text-warm">The first timer is only three minutes.</h2>
          <p className="mt-3 text-textgray">Three minutes is small enough to feel possible. The goal is not to finish everything. The goal is to start.</p>
        </div>
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Questions" title="Common questions about the flow." />
          <FAQAccordion limit={5} />
        </div>
      </section>
      <CTASection title="Ready to see your first move?" href="/#first-step-demo" />
    </>
  );
}
