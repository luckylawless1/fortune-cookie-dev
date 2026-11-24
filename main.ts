import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original fortune-cookie wisdom line for a software developer.
const LINE =
  "The code you wrote at 2 a.m. will return, and it will remember you.";

// Gate: the entry must be one non-blank line of 1-120 characters.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`line must be 1-120 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
console.log(`wrote ${LINE.length} chars to entry.txt`);
