# Martim portfolio

A portfolio of projects from a 13-week web development bootcamp.
Includes selected projects, a filterable project collection, and contact links.

**Stack:** React, React Router, Vite, JavaScript, plain CSS.

## Run locally

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Build: `npm run build`. Preview the build: `npm run preview`.

## Add work

Add a record to `src/data/projects.json`. Set `featured` to show it in the Home highlights.
Use labelled links for a live project, source code, Figma design, or gallery.

## Preview

![Portfolio preview](docs/preview.png)

## Links

- [GitHub repository](https://github.com/MartimLou42/bootcamp/tree/react-portfolio-preview/react-portfolio)
- [Commit history](https://github.com/MartimLou42/bootcamp/commits/react-portfolio-preview)
- [Live portfolio](https://martim-portfolio.onrender.com/)

## Deployment

Render settings are in the repository-root `render.yaml`: static site, root `react-portfolio`,
build `npm ci && npm run build`, publish `dist`, and rewrite `/*` to `/index.html`.
Render deploys updates pushed to `react-portfolio-preview`. Both `/` and `/projects`
are verified publicly. The bootcamp repository is private; the portfolio website is public.

Retro uses supplied design screenshots; no live demo is confirmed. The Python project is a command-line tool.
Some linked Render apps may take a moment to wake up.
