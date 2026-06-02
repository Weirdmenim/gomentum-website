export type DemoResult = {
  firstMove: string;
  category: string;
};

const rules: Array<{ keywords: string[]; firstMove: string; category: string }> = [
  {
    keywords: ["report", "proposal", "write", "draft", "document"],
    firstMove: "Open the document and write only the title.",
    category: "Writing"
  },
  {
    keywords: ["email", "inbox", "reply", "message"],
    firstMove: "Open your inbox and reply to just one message.",
    category: "Email"
  },
  {
    keywords: ["clean", "room", "tidy", "laundry"],
    firstMove: "Pick up three things from the floor.",
    category: "Life admin"
  },
  {
    keywords: ["study", "read", "exam", "chapter", "assignment"],
    firstMove: "Open your notes and read the first heading.",
    category: "Study"
  }
];

export function getFirstMove(input: string): DemoResult {
  const normalized = input.toLowerCase();
  const match = rules.find((rule) => rule.keywords.some((keyword) => normalized.includes(keyword)));
  if (match) {
    return { firstMove: match.firstMove, category: match.category };
  }

  return {
    firstMove: "Write the task name at the top of a blank note. That is the first move.",
    category: "First move"
  };
}

export function isVagueInput(input: string) {
  const vaguePhrases = ["do better", "be better", "fix life", "everything", "stuff", "work on myself"];
  const normalized = input.trim().toLowerCase();
  return vaguePhrases.includes(normalized) || normalized.split(/\s+/).length < 2;
}

export function looksLikeGibberish(input: string) {
  const normalized = input.trim().toLowerCase();
  return normalized.length > 6 && !/[aeiou]/.test(normalized);
}
