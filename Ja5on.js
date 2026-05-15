javascript
function greetUser(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

console.log(greetUser("Alex"));

/**
 * Practice script: appends a dated entry to JOURNAL.md
 * Run: node journal.js
 */
const fs = require("fs");

const today = new Date().toISOString().slice(0, 10);

const prompts = [
  "What did I learn today?",
  "What confused me today (and what will I try next)?",
  "One small win today was…",
  "What would I do differently if I repeated today?",
  "What do I want to practice tomorrow?"
];

const prompt = prompts[Math.floor(Math.random() * prompts.length)];

const entry = [
  "",
  `## ${today}`,
  "",
  `**Prompt:** ${prompt}`,
  "",
  "- ",
  ""
].join("\n");

fs.appendFileSync("JOURNAL.md", entry, "utf8");
console.log(`Added journal entry for ${today} to JOURNAL.md`);