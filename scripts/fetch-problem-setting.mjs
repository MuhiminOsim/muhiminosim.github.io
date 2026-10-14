// Refresh the bundled snapshot of the problem-setting list from GitHub before each build.
// If the fetch fails (offline, rate limit), the committed snapshot is kept and the build continues.
import { readFileSync, writeFileSync } from "node:fs";

const URL =
  "https://raw.githubusercontent.com/MuhiminOsim/Competitive-Programming/master/Problem%20Setting/Problem-Setting-and-Judging.md";
const OUT = "src/data/problem-setting.md";

try {
  const res = await fetch(URL, { signal: AbortSignal.timeout(10_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  const old = (() => {
    try {
      return readFileSync(OUT, "utf8");
    } catch {
      return "";
    }
  })();
  if (text !== old) writeFileSync(OUT, text);
  console.log(`problem-setting: ${text === old ? "up to date" : "snapshot updated"}`);
} catch (err) {
  console.warn(`problem-setting: fetch failed (${err.message}); using committed snapshot`);
}
