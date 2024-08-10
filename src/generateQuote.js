import { phrases, actions, outcomes } from "./data";

// Function to generate a random inspirational quote
export function generateQuote() {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

  return `${phrase}, ${action}, ${outcome}`;
}
