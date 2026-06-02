"use client";

import { useState } from "react";
import { getFirstMove, isVagueInput, looksLikeGibberish } from "@/lib/demoRules";
import { trackEvent } from "@/lib/analytics";
import { Button, ButtonLink } from "./Button";
import { Icon } from "./Icons";

type DemoState = "idle" | "empty" | "vague" | "loading" | "success" | "error";

const starterTasks = ["Write my report", "Reply to emails", "Study chapter 4", "Clean my room"];

export function InteractiveDemo() {
  const [task, setTask] = useState("");
  const [state, setState] = useState<DemoState>("idle");
  const [result, setResult] = useState<{ category: string; firstMove: string } | null>(null);

  function submit(value = task) {
    const trimmed = value.trim();
    setTask(value);
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
    }, 350);
  }

  function reset() {
    setTask("");
    setResult(null);
    setState("idle");
  }

  const hasError = state === "error" || state === "empty" || state === "vague";
  const message = {
    idle: "Your first move will appear here.",
    empty: "Add one task first. It can be messy.",
    vague: "That task may be too broad. Try one thing you are avoiding, like write my report or reply to emails.",
    loading: "Finding the smallest useful entrance...",
    success: "One clear first move is ready.",
    error: "That did not look like a task. Try a simple phrase like write my report."
  }[state];

  return (
    <section id="first-step-demo" aria-labelledby="first-step-demo-title" className="bg-warm px-4 py-12 text-charcoal md:px-6 md:py-16">
      <div className="mx-auto grid max-w-site gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#0A6F62]">Try the promise</p>
          <h2 id="first-step-demo-title" className="text-balance text-3xl font-bold leading-tight md:text-5xl">Try one first move.</h2>
          <p className="mt-4 text-lg text-[#55576A]">Pick a starter or type one task. The goal is not to plan everything. It is only to find the smallest useful entrance.</p>
          <div className="mt-6 rounded-2xl border border-[#BFEDE4] bg-[#E8FBF7] p-4 text-sm text-[#284B48]">
            <span className="font-semibold text-[#0A6F62]">Private demo:</span> No account. No live AI. No task is saved.
          </div>
        </div>
        <div className="rounded-panel border border-softgray bg-white p-5 shadow-sm md:p-7">
          <div className="mb-5">
            <p className="text-sm font-semibold text-[#55576A]">Need an example?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {starterTasks.map((starterTask) => (
                <button
                  key={starterTask}
                  type="button"
                  onClick={() => submit(starterTask)}
                  className="min-h-10 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-charcoal transition hover:bg-[#FFE8B5]"
                >
                  {starterTask}
                </button>
              ))}
            </div>
          </div>

          <label htmlFor="demo-task" className="block text-sm font-semibold text-charcoal">Task</label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="demo-task"
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
                if (state !== "success") setState("idle");
              }}
              placeholder="Example: write my report"
              className="min-h-12 flex-1 rounded-button border border-softgray bg-white px-4 text-charcoal placeholder:text-[#6F7284]"
              aria-invalid={hasError}
              aria-describedby={hasError ? "demo-error" : "demo-helper"}
            />
            <Button onClick={() => submit()} disabled={state === "loading"} className="sm:min-w-52">
              {state === "loading" ? "Finding..." : "Show first move"} <Icon name="spark" className="h-4 w-4" />
            </Button>
          </div>
          <p id="demo-helper" className="mt-3 text-sm text-[#55576A]">Keep it simple. One avoided task is enough.</p>
          <div
            id={hasError ? "demo-error" : "demo-message"}
            aria-live="polite"
            className={`mt-5 rounded-2xl border p-5 ${hasError ? "border-[#B3261E]/40 bg-[#FFF0ED] text-[#B3261E]" : "border-softgray bg-cream text-charcoal"}`}
          >
            <p className="text-sm font-semibold">{message}</p>
            {state === "loading" ? <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white"><div className="h-full w-2/3 rounded-full bg-teal" /></div> : null}
            {result && state === "success" ? (
              <div className="mt-4 rounded-2xl border border-[#BFEDE4] bg-white p-4">
                <p className="text-sm font-semibold text-[#0A6F62]">{result.category}</p>
                <p className="mt-2 text-xl font-bold text-charcoal">{result.firstMove}</p>
                <p className="mt-3 text-sm text-[#55576A]">Before: “I should do the whole thing.” After: one small entrance.</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact" variant="primary">Join beta to continue <Icon name="arrow" className="h-4 w-4" /></ButtonLink>
                  <Button onClick={reset} variant="secondaryLight">Try another task</Button>
                </div>
              </div>
            ) : null}
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-[#55576A]"><Icon name="lock" className="h-4 w-4 text-[#0A6F62]" /> Your input stays private in this page demo.</p>
        </div>
      </div>
    </section>
  );
}
