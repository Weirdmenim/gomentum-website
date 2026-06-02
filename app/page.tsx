import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroSection } from "@/components/HeroSection";
import { Icon } from "@/components/Icons";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { JsonLd } from "@/components/JsonLd";
import { ProductMockup } from "@/components/ProductMockup";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustCard } from "@/components/TrustCard";
import { UseCaseCard } from "@/components/UseCaseCard";
import { features } from "@/data/features";
import { getPageMetadata } from "@/data/metadata";
import { softwareSchema } from "@/data/schema";
import { useCases } from "@/data/useCases";

export const metadata: Metadata = getPageMetadata("/");

export default function HomePage() {
  return (
    <>
      <HeroSection eyebrow="AI-powered task initiation engine" title="Start tasks when starting feels" highlight="impossible." visual={<ProductMockup />}>
        <p>Some days, the task is not the hard part. Starting is. Gomentum helps turn what is on your mind into one clear first move.</p>
      </HeroSection>
      <InteractiveDemo />
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="rounded-panel bg-cream p-6 text-charcoal md:p-10">
          <div className="grid gap-6 md:grid-cols-[0.8fr_2fr] md:items-center">
            <div>
              <h2 className="text-3xl font-bold">You are not lazy.</h2>
              <p className="mt-2 text-lg">Starting is just harder some days.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Overwhelmed", "Everything you need to do feels connected."],
                ["Low energy", "Your brain has less room to begin."],
                ["Task paralysis", "You know the task but not the first move."]
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-white p-4 shadow-sm">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-[#55576A]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-site gap-6 px-4 py-12 md:grid-cols-2 md:px-6">
        <div className="card-border rounded-card bg-carddark p-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-amber">Before</p>
          <h2 className="text-2xl font-bold text-warm">“I should work on my report.”</h2>
          <ul className="mt-4 space-y-2 text-textgray">
            <li>Feels overwhelming</li>
            <li>Does not show where to start</li>
            <li>Keeps getting avoided</li>
          </ul>
        </div>
        <div className="card-border rounded-card bg-teal/8 p-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-teal">After Gomentum</p>
          <h2 className="text-2xl font-bold text-warm">“Open the document and write the title.”</h2>
          <ul className="mt-4 space-y-2 text-textgray">
            <li>One clear first move</li>
            <li>Short 3-minute start</li>
            <li>Momentum without a full task system</li>
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <SectionHeader eyebrow="How it works" title="Three simple steps to get moving.">
          <p>Gomentum is designed to make the first action feel small, safe, and specific.</p>
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Tell us the task", "Type what you have been avoiding. It can be messy."],
            ["Get one first move", "Gomentum turns the task into a tiny, concrete entrance."],
            ["Start for 3 minutes", "Begin a short session without committing to a huge outcome."]
          ].map(([title, text], index) => (
            <article key={title} className="card-border rounded-card bg-white/[0.04] p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-amber text-charcoal font-bold">{index + 1}</span>
              <h3 className="mt-5 text-xl font-bold text-warm">{title}</h3>
              <p className="mt-2 text-textgray">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="not-task-manager" className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="card-border rounded-panel bg-carddark p-6 md:p-10">
          <SectionHeader eyebrow="Different by design" title="Why Gomentum is not a task manager.">
            <p>Traditional tools help after you can already start. Gomentum supports the moment before action.</p>
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-4">
            {["No complex schedules", "No endless to-do lists", "No pressure to be perfect", "No productivity scorecard"].map((item) => (
              <div key={item} className="rounded-2xl bg-offblack/70 p-4 text-center text-textgray">
                <span className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-amber/12 text-amber"><Icon name="check" className="h-5 w-5" /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <SectionHeader eyebrow="Features" title="Built around starting, not sorting.">
          <p>Feature labels are honest because Gomentum is still in beta.</p>
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.slice(0, 4).map((feature) => <FeatureCard key={feature.title} feature={feature} />)}
        </div>
        <ButtonLink href="/features" variant="secondary" className="mt-8">Explore all features <Icon name="arrow" className="h-4 w-4" /></ButtonLink>
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <SectionHeader eyebrow="For you" title="Use it for the task you keep avoiding." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => <UseCaseCard key={useCase.title} {...useCase} />)}
        </div>
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="grid gap-6 rounded-panel bg-cream p-6 text-charcoal md:grid-cols-[1fr_1.4fr] md:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0A6F62]">Founder note</p>
            <h2 className="mt-3 text-3xl font-bold">Built for the days when starting feels impossible.</h2>
          </div>
          <div>
            <p className="text-lg">Gomentum should feel like support, not pressure. The public website avoids fake proof, medical claims, and loud motivation language until real user feedback can be added.</p>
            <p className="mt-4 text-sm text-[#55576A]">Real early-user testimonials can be added after permission and review.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <SectionHeader eyebrow="Trust" title="Low pressure, privacy-first, and clear." />
        <div className="grid gap-5 md:grid-cols-3">
          <TrustCard icon="lock" title="Private by design" text="Place privacy notes close to task inputs so users do not have to search for reassurance." />
          <TrustCard icon="shield" title="No medical claims" text="Gomentum supports task initiation. It does not diagnose, treat, or replace professional support." />
          <TrustCard icon="heart" title="Built with care" text="The tone stays calm, specific, and non-shaming for overwhelmed users." />
        </div>
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="FAQ" title="Real questions. Honest answers.">
            <p>Handle privacy, beta, ADHD-related wording, and pricing concerns before asking users to sign up.</p>
            <Link href="/faq" className="mt-4 inline-flex font-semibold text-teal hover:text-amber">View all FAQs</Link>
          </SectionHeader>
          <FAQAccordion limit={4} />
        </div>
      </section>
      <CTASection />
      <JsonLd data={softwareSchema} />
    </>
  );
}
