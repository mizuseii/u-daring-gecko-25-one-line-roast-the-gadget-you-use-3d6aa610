// One-Line Roast: The Gadget You Use Every Day
// Roast target: the smart speaker I use every day.
// Angle: the speaker apologises for not catching what was said — "Sorry, I
// didn't catch that" — with the total confidence of someone who was never
// listening in the first place. The joke lands because the apology sounds
// polite and attentive while admitting the exact opposite: it heard nothing.
// Fresh vs the field: most entries in this bounty roast the robot vacuum,
// the smartwatch, or the charging cable — the smart speaker's fake-polite
// deafness is a different, everyday target.
import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My smart speaker says 'Sorry, I didn't catch that' with the confidence of someone who was never listening in the first place.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
console.log(`Wrote ${roast.length} characters to /output/entry.txt`);
