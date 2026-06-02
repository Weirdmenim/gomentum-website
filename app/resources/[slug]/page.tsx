import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/PageRenderer";
import { articles, getArticleBySlug, SITE_NAME, SITE_URL } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const url = `${SITE_URL}${article.url}`;
  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, url, type: "article" }
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: "Gomentum Team" },
    publisher: { "@type": "Organization", name: "Gomentum" },
    mainEntityOfPage: `${SITE_URL}${article.url}`,
    keywords: article.keyword
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticlePage article={article} />
    </>
  );
}
