import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GenericPage } from "@/components/PageRenderer";
import { getPageBySlug, pages, SITE_URL } from "@/data/site";

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};
  const url = `${SITE_URL}${page.path}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url
    }
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();
  return <GenericPage page={page} />;
}
