# muhiminosim.github.io

Personal website of **Md. Muhiminul Islam (Osim)**: ML researcher (event-based vision, spiking
neural networks, state-space models), R&D software engineer, and ICPC regional judge.

Live at <https://muhiminosim.github.io>.

## Stack

Vite · React 18 · TypeScript · Tailwind CSS · React Router · Framer Motion

## Editing content

All content (bio, research, publications, experience, projects, education, ratings, honors,
links) lives in a single typed file:

```
src/data/profile.ts
```

Edit it and every page updates. A few notes:

- **CV download:** put the PDF in `public/` (e.g. `public/Md_Muhiminul_Islam_CV.pdf`) and set
  `person.cvUrl` to `"/Md_Muhiminul_Islam_CV.pdf"`. While it is `null`, the button is hidden.
- **Publications:** your name is highlighted wherever it matches `selfAuthor`. Each entry carries
  its own BibTeX for the "Cite" button.
- **Images and logos:** these are in `src/assets/`. The social/OG image is
  `public/icons/muhiminul.png`.
- `docs/` (your source CV and resume) is git-ignored because it contains private contact details.

## Pages

`/` home · `/research` · `/publications` · `/experience` · `/projects` · `/education` ·
`/competitive` · `/contact`

Deep links work on GitHub Pages via the `public/404.html` redirect
([spa-github-pages](https://github.com/rafgraph/spa-github-pages)).

## Development

```bash
npm install
npm run dev       # local dev server
npm run lint
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it
with GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions**.

To deploy by hand instead, run `npm run deploy`. This pushes `dist/` to a `gh-pages` branch.

## License

MIT. This site was originally based on
[masterPortfolio](https://github.com/ashutosh1919/masterPortfolio) by Ashutosh Hathidara and
has since been fully rewritten.
