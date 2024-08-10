import { phrases, actions, outcomes } from "./data.js";

// Function to generate a random inspirational quote
export function generateQuote() {
  if (phrases.length === 0 || actions.length === 0 || outcomes.length === 0) {
    throw new Error("One or more data arrays are empty.");
  }

  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

  return `${phrase}, ${action}, ${outcome}`;
}
