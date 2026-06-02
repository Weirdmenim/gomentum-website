import Link from "next/link";
import { Article, articles, featureMoments, PageData, useCases } from "@/data/site";
import { CTA, CTABox } from "@/components/CTA";
import { Demo } from "@/components/Demo";
import { ContactForm } from "@/components/ContactForm";

export function ProductMockups() {
  const screens = [
    ["Brain dump", "write report, reply to email, study chapter 4"],
    ["Mood check-in", "Low energy today"],
    ["First move", "Open the document and write only the title."],
    ["3-minute start", "03:00"],
    ["Reflection", "You started. That counts."]
  ];
  return (
    <div className="mockup-grid" aria-label="Gomentum mobile beta screen previews">
      {screens.map(([title, text]) => (
        <div className="phone" key={title}>
          <div className="phone-top"><span></span><span></span></div>
          <h3>{title}</h3>
          <p>{text}</p>
          <button>{title.includes("timer") ? "Pause" : "Continue"}</button>
        </div>
      ))}
    </div>
  );
}

function RenderSection({ section }: { section: PageData["sections"][number] }) {
  return (
    <section className="content-section">
      <h2>{section.heading}</h2>
      {section.body?.map((p) => <p key={p}>{p}</p>)}
      {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
      {section.steps && <div className="step-grid">{section.steps.map((step, index) => (
        <article className="card" key={step.title}>
          <span className="step-number">{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      ))}</div>}
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">A calm task initiation tool for people who struggle to start.</p>
          <h1>Start tasks when starting feels impossible.</h1>
          <p className="hero-copy">Some days, the task is not the hard part. Beginning is. Gomentum turns a messy task into one tiny first move, then gives you a short, low-pressure way to start.</p>
          <CTA />
        </div>
        <div className="hero-card">
          <h2>Start with the task as it feels right now.</h2>
          <p>It does not need to be organized.</p>
          <div className="mini-result">First move: Open the document and write only the title.</div>
        </div>
      </section>
      <Demo />
      <section className="soft-section">
        <h2>You are not lazy. Starting is just harder some days.</h2>
        <p>When a task feels too big, your brain may not need another list. It may need a smaller entrance.</p>
        <Link href="/task-paralysis-guide">Read the task paralysis guide</Link>
      </section>
      <section className="content-section">
        <h2>From stuck to started in three small moves.</h2>
        <div className="step-grid">
          <article className="card"><span className="step-number">1</span><h3>Write the messy task</h3><p>Start with the task as it feels right now.</p></article>
          <article className="card"><span className="step-number">2</span><h3>Get one first move</h3><p>Gomentum turns the task into one small action you can begin.</p></article>
          <article className="card"><span className="step-number">3</span><h3>Start for three minutes</h3><p>Use a short timer to enter the task without a big commitment.</p></article>
        </div>
      </section>
      <ProductMockups />
      <section className="content-section">
        <h2>Useful starting points</h2>
        <div className="link-grid">
          <Link href="/how-it-works">See How It Works</Link>
          <Link href="/adhd-task-initiation">Learn about ADHD task initiation</Link>
          <Link href="/pricing">View beta access</Link>
        </div>
      </section>
      <CTABox />
    </>
  );
}

export function GenericPage({ page }: { page: PageData }) {
  return (
    <>
      <section className="page-hero">
        {page.eyebrow && <p className="eyebrow">{page.eyebrow}</p>}
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>
        <CTA />
      </section>
      {page.path === "/product" && <ProductMockups />}
      {page.path === "/features" && <section className="content-section"><h2>Product moments</h2><div className="feature-grid">{featureMoments.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p><p className="small">{item.benefit}</p></article>)}</div></section>}
      {page.path === "/use-cases" && <section className="content-section"><h2>Use case examples</h2><div className="feature-grid">{useCases.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.situation}</p><p><strong>Example task:</strong> {item.example}</p><p><strong>First move:</strong> {item.move}</p></article>)}</div></section>}
      {page.path === "/resources" && <ResourcesHub />}
      {page.sections.map((section) => <RenderSection key={section.heading} section={section} />)}
      {page.path === "/contact" && <ContactForm />}
      <RelatedLinks current={page.path} />
      <CTABox />
    </>
  );
}

export function ResourcesHub() {
  return (
    <section className="content-section">
      <h2>Start with one guide</h2>
      <div className="article-grid">
        {articles.map((article) => (
          <article className="card article-card" key={article.slug}>
            <span className="tag">{article.category}</span>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p className="small">{article.readingTime}</p>
            <Link href={article.url}>Read the Guide</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ArticlePage({ article }: { article: Article }) {
  return (
    <article className="article">
      <p className="eyebrow">{article.category} · {article.readingTime}</p>
      <h1>{article.title}</h1>
      <p className="lead">{article.description}</p>
      {article.sections.map((section) => <RenderSection key={section.heading} section={section} />)}
      <section className="content-section">
        <h2>Related links</h2>
        <div className="link-grid">
          <Link href="/product">Product</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/task-paralysis-guide">Task Paralysis Guide</Link>
          <Link href="/adhd-task-initiation">ADHD Task Initiation</Link>
        </div>
      </section>
      <CTABox />
    </article>
  );
}

function RelatedLinks({ current }: { current: string }) {
  const links = current === "/faq" ? [
    ["/pricing", "View beta access"], ["/privacy", "Read privacy notes"], ["/contact", "Contact Gomentum"]
  ] : current === "/contact" ? [
    ["/faq", "Read common questions"], ["/accessibility", "Accessibility feedback"], ["/pricing", "View beta access"]
  ] : [
    ["/product", "See the product flow"], ["/how-it-works", "See How It Works"], ["/resources", "Read starting guides"]
  ];
  return <section className="content-section"><h2>Related next steps</h2><div className="link-grid">{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</div></section>;
}
