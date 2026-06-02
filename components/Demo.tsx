"use client";

import { useState } from "react";

const examples = ["Write my report", "Reply to emails", "Study chapter 4", "Clean my room"];

function getMove(input: string) {
  const value = input.toLowerCase();
  if (value.includes("email") || value.includes("reply")) return "Open one email and write only the greeting.";
  if (value.includes("clean") || value.includes("room")) return "Put only the clothes from the chair into one basket.";
  if (value.includes("study") || value.includes("exam") || value.includes("chapter")) return "Open your notes and read only one heading.";
  if (value.includes("report") || value.includes("write") || value.includes("proposal")) return "Open the document and write only the title.";
  return "Write the task name at the top of a blank note.";
}

export function Demo() {
  const [task, setTask] = useState("");
  const [move, setMove] = useState("");
  const [error, setError] = useState("");

  function submit() {
    if (!task.trim()) {
      setError("One avoided task is enough.");
      setMove("");
      return;
    }
    setError("");
    setMove(getMove(task));
  }

  return (
    <section className="demo" id="demo" aria-labelledby="demo-title">
      <div className="section-heading compact">
        <p className="eyebrow">No-account demo</p>
        <h2 id="demo-title">Try one first move before you sign up.</h2>
        <p>Type one task you have been avoiding. Gomentum shows what the first doable action could look like.</p>
      </div>
      <div className="chips" aria-label="Example tasks">
        {examples.map((example) => (
          <button key={example} type="button" onClick={() => { setTask(example); setMove(getMove(example)); setError(""); }}>
            {example}
          </button>
        ))}
      </div>
      <label className="field" htmlFor="task-input">
        Write the messy task
        <input id="task-input" value={task} onChange={(event) => setTask(event.target.value)} placeholder="Example: write my report" aria-describedby="task-help task-error" />
      </label>
      <p id="task-help" className="small">Private page demo: no account, no saved task, and no live AI in this preview.</p>
      {error && <p id="task-error" className="error">{error}</p>}
      <button className="button primary" type="button" onClick={submit}>Show Me the First Move</button>
      <div className="result" aria-live="polite">
        <span>First move</span>
        <p>{move || "Your first move will appear here."}</p>
      </div>
    </section>
  );
}
