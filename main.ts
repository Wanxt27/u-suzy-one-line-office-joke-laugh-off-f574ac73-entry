// One-Line Office Joke Laugh-Off — u-suzy-one-line-office-joke-laugh-off-f574ac73
// Writes a single original one-line office joke to /output/entry.txt.
// Node 22, stdlib only. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "HR said my burnout is a personality trait now, so I put 'flammable' under strengths on my resume.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// The gate only accepts 1-200 characters, so refuse to write anything out of range.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-200 gate`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${outFile}`);
