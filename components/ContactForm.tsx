"use client";

import { FormEvent, useState } from "react";

const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORMSPREE_ID";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!data.get("email") || !data.get("message")) {
      setError("Please add your email and a short message.");
      return;
    }
    if (endpoint.includes("YOUR_FORMSPREE_ID")) {
      setError("");
      setSent(true);
      form.reset();
      return;
    }
    const response = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (response.ok) {
      setError("");
      setSent(true);
      form.reset();
    } else {
      setError("That did not send. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-describedby="form-note">
      <label>Reason for contacting
        <select name="reason" defaultValue="Beta feedback">
          <option>Beta feedback</option>
          <option>Support question</option>
          <option>Product feedback</option>
          <option>Accessibility issue</option>
          <option>Partnership</option>
          <option>Other</option>
        </select>
      </label>
      <label>Name <input name="name" autoComplete="name" /></label>
      <label>Email <input name="email" type="email" autoComplete="email" required /></label>
      <label>Message <textarea name="message" rows={5} required /></label>
      <p id="form-note" className="small">Your message will be used only to respond to your request or improve the beta experience.</p>
      {error && <p className="error" role="alert">{error}</p>}
      {sent && <p className="success" role="status">Message state confirmed. Replace the Formspree placeholder with a real endpoint before final collection.</p>}
      <button className="button primary" type="submit">Send Message</button>
    </form>
  );
}
