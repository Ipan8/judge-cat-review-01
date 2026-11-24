import * as fs from "fs";
import * as path from "path";

// Make the AI Judge Laugh: Cat Reviews Its Human — make.fun entry.
// Writes the one-star cat review to /output/entry.txt.
// The judge compares entries two at a time on how funny and fresh the line is.
const ENTRY: string = "One star. Human opens the door, then closes it, then opens it again. I never asked for this. Would not recommend."; // 113 chars, limit 200

function main(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(path.join("/output", "entry.txt"), ENTRY + "\n", "utf-8");
  console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
}

main();
