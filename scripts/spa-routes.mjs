// GitHub Pages only serves real files, so /research etc. would return 404 (then redirect via
// 404.html). Copying index.html into each route folder makes every page return 200 for crawlers.
import { copyFileSync, mkdirSync } from "node:fs";

const routes = ["research", "publications", "experience", "projects", "education", "competitive", "contact"];

for (const r of routes) {
  mkdirSync(`dist/${r}`, { recursive: true });
  copyFileSync("dist/index.html", `dist/${r}/index.html`);
}
console.log(`spa-routes: wrote ${routes.length} route pages`);
