import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { TrustCard } from "@/components/TrustCard";
import { getPageMetadata } from "@/data/metadata";

export const metadata: Metadata = getPageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <HeroSection eyebrow="We are here for you" title="Questions, feedback, or just want to" highlight="say hi?">
        <p>Send support questions, product feedback, partnership notes, or beta access requests. Keep personal task details minimal in public website forms.</p>
      </HeroSection>
      <section className="mx-auto grid max-w-site gap-8 px-4 py-16 lg:grid-cols-[0.8fr_1.2fr] md:px-6">
        <div className="space-y-5">
          <TrustCard icon="shield" title="Private and secure" text="Your message should only be used to respond to your request." />
          <TrustCard icon="timer" title="Quick responses" text="The public site sets an expectation of timely, human support." />
          <TrustCard icon="heart" title="Human support" text="No shame, no pressure, and no productivity-bro language." />
        </div>
        <ContactForm />
      </section>
      <section className="mx-auto max-w-site px-4 py-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["Email us", "For general inquiries and support requests."],
            ["Live chat", "Connect later when chat support is available."],
            ["Partnerships", "For schools, creators, and support communities."],
            ["Social", "Follow for updates and practical tips."]
          ].map(([title, text]) => (
            <div key={title} className="card-border rounded-card bg-white/[0.04] p-5">
              <h2 className="text-xl font-bold text-warm">{title}</h2>
              <p className="mt-2 text-textgray">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Ready to take one small step?" />
    </>
  );
}
