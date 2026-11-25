// The Absurd Clause Contest — make.fun bounty
// https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1
// One original English sentence, up to 200 characters, phrased as an absurd
// clause buried deep in a terms-of-service agreement.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Section 8.3: the Company reserves the right to attend the user's wedding as a plus-one, and to invoice the user for its own gift.";

// The gate is strict: one sentence, 1-200 characters, not only whitespace.
// Anything outside that range scores 0, so validate before writing.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`ENTRY must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
