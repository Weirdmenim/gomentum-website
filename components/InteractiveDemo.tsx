"use client";

import { useState } from "react";
import { getFirstMove, isVagueInput, looksLikeGibberish } from "@/lib/demoRules";
import { trackEvent } from "@/lib/analytics";
import { Button, ButtonLink } from "./Button";
import { Icon } from "./Icons";

type DemoState = "idle" | "empty" | "vague" | "loading" | "success" | "error";

export function InteractiveDemo() {
  const [task, setTask] = useState("");
  const [state, setState] = useState<DemoState>("idle");
  const [result, setResult] = useState<{ category: string; firstMove: string } | null>(null);

  function submit() {
    const trimmed = task.trim();
    if (!trimmed) {
      setState("empty");
      setResult(null);
      return;
    }
    if (looksLikeGibberish(trimmed)) {
      setState("error");
      setResult(null);
      return;
    }
    if (isVagueInput(trimmed)) {
      setState("vague");
      setResult(null);
      return;
    }

    setState("loading");
    setResult(null);
    window.setTimeout(() => {
      const next = getFirstMove(trimmed);
      setResult(next);
      setState("success");
      trackEvent("demo_success", { category: next.category });
    }, 450);
  }

  function reset() {
    setTask("");
    setResult(null);
    setState("idle");
  }

  const message = {
    idle: "Your first move will appear here.",
    empty: "Add one task first. It can be messy.",
    vague: "That task may be too broad. Try writing one thing you are avoiding, like write my report or reply to emails.",
    loading: "Finding the smallest useful entrance...",
    success: "One clear first move is ready.",
    error: "We could not understand that. Try writing a real task."
  }[state];

  return (
    <section id="first-step-demo" aria-labelledby="first-step-demo-title" className="mx-auto max-w-site px-4 py-14 md:px-6">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal">Try the promise</p>
          <h2 id="first-step-demo-title" className="text-balance text-3xl font-bold leading-tight text-warm md:text-5xl">Try one first move.</h2>
          <p className="mt-4 text-lg text-textgray">Write one task you have been avoiding. This static website demo shows the kind of tiny first move Gomentum is designed to create.</p>
          <div className="mt-6 rounded-2xl border border-teal/25 bg-teal/8 p-4 text-sm text-textgray">
            <span className="font-semibold text-teal">Privacy note:</span> This public demo runs locally in the page. No account. No live AI. No pressure.
          </div>
        </div>
        <div className="card-border rounded-panel bg-carddark p-5 shadow-glow md:p-7">
          <label htmlFor="demo-task" className="block text-sm font-semibold text-warm">Task</label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="demo-task"
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
                if (state !== "success") setState("idle");
              }}
              placeholder="Example: write my report"
              className="min-h-12 flex-1 rounded-button border border-softgray/20 bg-offblack/80 px-4 text-warm placeholder:text-textgray"
              aria-describedby="demo-helper demo-message"
            />
            <Button onClick={submit} disabled={state === "loading"} className="sm:min-w-56">
              {state === "loading" ? "Finding..." : "Show Me the First Move"} <Icon name="spark" className="h-4 w-4" />
            </Button>
          </div>
          <p id="demo-helper" className="mt-3 text-sm text-textgray">Keep it simple. Something like “write my report” is enough.</p>
          <div
            id="demo-message"
            aria-live="polite"
            className={`mt-5 rounded-2xl border p-5 ${state === "error" || state === "empty" || state === "vague" ? "border-error/40 bg-error/10 text-error" : "border-softgray/15 bg-offblack/80 text-textgray"}`}
          >
            <p className="text-sm font-semibold">{message}</p>
            {state === "loading" ? <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-teal" /></div> : null}
            {result && state === "success" ? (
              <div className="mt-4 rounded-2xl border border-teal/25 bg-teal/8 p-4">
                <p className="text-sm font-semibold text-teal">{result.category}</p>
                <p className="mt-2 text-xl font-bold text-warm">{result.firstMove}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/pricing#beta-access" variant="teal">Start a 3-Minute Session <Icon name="timer" className="h-4 w-4" /></ButtonLink>
                  <Button onClick={reset} variant="secondary">Try another task</Button>
                </div>
              </div>
            ) : null}
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-textgray"><Icon name="lock" className="h-4 w-4 text-teal" /> Your input stays private in this page demo.</p>
        </div>
      </div>
    </section>
  );
}
