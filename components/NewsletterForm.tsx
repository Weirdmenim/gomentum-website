"use client";

import { useState } from "react";
import { Button } from "./Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Thanks. Connect this form to your email tool before deployment.");
    setEmail("");
  }

  return (
    <form onSubmit={submit} className="card-border rounded-card bg-carddark p-6">
      <h2 className="text-2xl font-bold text-warm">Get helpful insights straight to your inbox.</h2>
      <p className="mt-3 text-textgray">Weekly tips, tools, and resources to help you start strong and keep going.</p>
      <label htmlFor="newsletter-email" className="mt-5 block text-sm font-semibold text-warm">Email address</label>
      <input id="newsletter-email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="mt-2 min-h-12 w-full rounded-button border border-softgray/20 bg-offblack/80 px-4 text-warm" placeholder="Enter your email" />
      <Button type="submit" className="mt-4 w-full">Subscribe</Button>
      {message ? <p aria-live="polite" className="mt-3 text-sm text-textgray">{message}</p> : null}
      <p className="mt-3 text-sm text-textgray">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
