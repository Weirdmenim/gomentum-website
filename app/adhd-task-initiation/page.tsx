import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { Icon } from "@/components/Icons";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustCard } from "@/components/TrustCard";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/adhd-task-initiation");

export default function AdhdTaskInitiationPage() {
  return (
    <>
      <HeroSection eyebrow="ADHD-style overwhelm" title="Support for task initiation, without" highlight="pressure.">
        <p>Some people can see the task clearly and still feel unable to begin. Gomentum is designed to make the first move smaller and safer.</p>
      </HeroSection>
      <section className="mx-auto max-w-site px-4 py-16 md:px-6">
        <div className="rounded-panel bg-cream p-6 text-charcoal md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0A6F62]">Important note</p>
          <h2 className="mt-3 text-3xl font-bold">Gomentum is not a medical or therapy tool.</h2>
          <p className="mt-3 max-w-3xl text-lg">It is a productivity support product for task initiation. It does not diagnose, treat, or replace professional care.</p>
        </div>
      </section>
      <section id="micro-steps" className="mx-auto max-w-site px-4 py-12 md:px-6">
        <SectionHeader eyebrow="Why first moves help" title="Starting gets easier when the entrance is clear." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Reduce the task size", "A task like write report becomes open the document and write the title."],
            ["Match your energy", "Low-energy days need a gentler start than high-focus days."],
            ["Reward beginning", "Progress should count when you start, not only when you finish." ]
          ].map(([title, text]) => (
            <article key={title} className="card-border rounded-card bg-white/[0.04] p-6">
              <Icon name="check" className="h-7 w-7 text-teal" />
              <h2 className="mt-4 text-xl font-bold text-warm">{title}</h2>
              <p className="mt-2 text-textgray">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <SectionHeader eyebrow="Trust" title="Careful language, clear support." />
        <div className="grid gap-5 md:grid-cols-3">
          <TrustCard icon="heart" title="Non-shaming tone" text="The site avoids aggressive productivity language and pressure-based motivation." />
          <TrustCard icon="shield" title="Clear limits" text="ADHD-related copy is framed as support, not treatment or diagnosis." />
          <TrustCard icon="lock" title="Privacy near inputs" text="Task input areas include privacy reminders close to the action." />
        </div>
        <p className="mt-6 text-textgray">For a broader educational page, read the <Link className="text-teal hover:text-amber" href="/task-paralysis-guide">Task Paralysis Guide</Link>.</p>
      </section>
      <CTASection title="Start with one small, clear action." label="Try a 3-Minute Start" />
    </>
  );
}
