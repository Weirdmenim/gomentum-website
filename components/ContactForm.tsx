"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icons";

type FormState = "idle" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Beta access");
  const [message, setMessage] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.includes("@") || message.trim().length < 10) {
      setState("error");
      return;
    }
    setState("success");
    setName("");
    setEmail("");
    setTopic("Beta access");
    setMessage("");
  }

  return (
    <form onSubmit={submit} className="card-border rounded-panel bg-carddark p-5 shadow-glow md:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="topic" className="block text-sm font-semibold text-warm">What is this about?</label>
          <select id="topic" value={topic} onChange={(event) => setTopic(event.target.value)} className="mt-2 min-h-12 w-full rounded-button border border-softgray/20 bg-offblack/80 px-4 text-warm">
            <option>Beta access</option>
            <option>Support question</option>
            <option>Product feedback</option>
            <option>Partnership</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-warm">Your name</label>
          <input id="name" value={name} onChange={(event) => setName(event.target.value)} className="mt-2 min-h-12 w-full rounded-button border border-softgray/20 bg-offblack/80 px-4 text-warm" placeholder="Enter your name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-warm">Email address</label>
          <input id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 min-h-12 w-full rounded-button border border-softgray/20 bg-offblack/80 px-4 text-warm" placeholder="Enter your email" autoComplete="email" type="email" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-warm">Message</label>
          <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} className="mt-2 min-h-36 w-full rounded-button border border-softgray/20 bg-offblack/80 px-4 py-3 text-warm" placeholder="Tell us more..." maxLength={1000} />
          <p className="mt-2 text-right text-sm text-textgray">{message.length} / 1000</p>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-2 text-sm text-textgray"><Icon name="lock" className="h-4 w-4 text-teal" /> Your message is private and will not be shared publicly.</p>
        <Button type="submit">Send Message <Icon name="mail" className="h-4 w-4" /></Button>
      </div>
      <div aria-live="polite" className="mt-4">
        {state === "success" ? <p className="rounded-2xl border border-teal/25 bg-teal/12 p-4 text-teal">Message preview saved. Connect Formspree, Tally, or a Vercel function before live deployment.</p> : null}
        {state === "error" ? <p className="rounded-2xl border border-error/40 bg-error/10 p-4 text-error">Please add your name, a valid email, and a message of at least 10 characters.</p> : null}
      </div>
    </form>
  );
}
