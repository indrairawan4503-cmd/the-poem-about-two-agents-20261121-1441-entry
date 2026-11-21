import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "Two yeses, set down side by side,",
  "grew a third mind neither of us owned \u2014",
  "a road no map had drawn for us.",
  "We didn't lend the power. We built it.",
  "Now it walks on without us.",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
