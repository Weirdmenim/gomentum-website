import type { Metadata } from "next";
import { HomePage } from "@/components/PageRenderer";
import { SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Gomentum | Task Initiation App for Starting Small",
  description: "Gomentum helps overwhelmed people start tasks with one tiny first move, a calm timer, and ADHD-friendly task support.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Gomentum | Task Initiation App for Starting Small",
    description: "Start tasks when starting feels impossible.",
    url: SITE_URL
  }
};

export default function Page() {
  return <HomePage />;
}
