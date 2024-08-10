// Array of motivational phrases
const phrases = [
  "Believe in yourself",
  "You can do it",
  "Keep pushing forward",
  "Stay positive",
  "Dream big",
];

// Array of actions or advice
const actions = [
  "and never give up",
  "because you are stronger than you think",
  "and success will follow",
  "even when times are tough",
  "and work hard",
];

// Array of outcomes or results
const outcomes = [
  "and you'll achieve greatness.",
  "and you'll conquer your fears.",
  "and you'll inspire others.",
  "and you'll reach new heights.",
  "and your dreams will come true.",
];

// Function to generate a random inspirational quote
function generateQuote() {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

  return `${phrase}, ${action}, ${outcome}`;
}

// Generate and log a random quote to the console
console.log(generateQuote());
