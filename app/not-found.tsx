import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-site px-4 py-24 text-center md:px-6">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">404</p>
      <h1 className="mt-4 text-4xl font-bold text-warm md:text-6xl">This page is not here.</h1>
      <p className="mx-auto mt-4 max-w-xl text-textgray">No pressure. You can return to the homepage and take one small step from there.</p>
      <ButtonLink href="/" className="mt-8">Go home</ButtonLink>
    </section>
  );
}
