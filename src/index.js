import chalk from "chalk";
import { generateQuote } from "./generateQuote.js";

// Generate and display a random quote to the user
const randomQuote = generateQuote();

// Apply chalk styling with additional formatting
console.log(chalk.bgCyan.black.bold("=== Inspirational Quote ==="));
console.log(chalk.green.bold(randomQuote));
console.log(chalk.bgCyan.black("================================="));
