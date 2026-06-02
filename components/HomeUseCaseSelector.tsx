"use client";

import { useState } from "react";
import { useCases } from "@/data/useCases";
import { ButtonLink } from "./Button";
import { Icon } from "./Icons";

export function HomeUseCaseSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useCases[activeIndex];

  return (
    <section className="bg-warm px-4 py-12 text-charcoal md:px-6 md:py-16" aria-labelledby="use-case-selector-title">
      <div className="mx-auto max-w-site">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0A6F62]">For the task in front of you</p>
          <h2 id="use-case-selector-title" className="mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl">Choose one area. See one first move.</h2>
          <p className="mt-3 text-lg text-[#55576A]">No long grid of options. Pick the kind of task that feels stuck right now.</p>
        </div>

        <div className="mt-8 rounded-panel border border-softgray bg-white p-4 shadow-sm md:p-6">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Task type examples">
            {useCases.map((useCase, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={useCase.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="selected-use-case"
                  onClick={() => setActiveIndex(index)}
                  className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selected ? "bg-charcoal text-warm" : "bg-cream text-charcoal hover:bg-[#FFE8B5]"
                  }`}
                >
                  {useCase.title}
                </button>
              );
            })}
          </div>

          <div id="selected-use-case" role="tabpanel" className="mt-6 grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <h3 className="text-2xl font-bold">{active.problem}</h3>
              <p className="mt-3 text-[#55576A]">Gomentum keeps the entry small so you do not have to plan the whole task first.</p>
            </div>
            <div className="rounded-2xl bg-cream p-5">
              <p className="text-sm font-semibold text-[#55576A]">Task</p>
              <p className="mt-1 text-lg font-bold">{active.task}</p>
              <div className="mt-4 border-t border-softgray pt-4">
                <p className="text-sm font-semibold text-[#0A6F62]">First move</p>
                <p className="mt-1 text-xl font-bold">{active.firstMove}</p>
              </div>
              <ButtonLink href="/#first-step-demo" variant="secondaryLight" className="mt-5 w-full">
                Try this pattern <Icon name="arrow" className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
