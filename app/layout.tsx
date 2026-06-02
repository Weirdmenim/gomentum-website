import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_NAME, SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gomentum | Task Initiation App for Starting Small",
    template: `%s | ${SITE_NAME}`
  },
  description: "Gomentum helps overwhelmed people start tasks with one tiny first move, a calm timer, and ADHD-friendly task support.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Gomentum | Start One Small Step",
    description: "A calm task initiation tool for people who struggle to start tasks.",
    url: SITE_URL
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
