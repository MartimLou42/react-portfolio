# Martim portfolio

A growing portfolio of web applications, websites, and creative work.
Home guides visitors through selected projects, more work, and contact.
Projects shows the full collection with a technology filter.

## Run locally

Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Build: `npm run build`. Preview: `npm run preview`.

## Add a project

Edit `src/data/projects.json` and add a record with a unique `id`, `title`, `description`,
`type`, `technologies`, `image` (or null), `imageAlt`, `groupProject`, `featured`, and `links`.
Each link is `{ "label": "View design", "url": "https://example.com" }`.
Order the records as you want them displayed. Set `featured` to true for a Home highlight.
Put preview images in `public/previews/` and use `/previews/filename.png` as the image path.
The technology filter updates automatically. Ordinary chat with the agent can add records;
no React component changes are needed for a new project.

The same record supports a Figma link or an existing colour-grading gallery without requiring
code or a live application. A built-in gallery is future work when content is available.
Group-project cards describe the project, not an unverified personal contribution.

## Structure

- `src/pages/`: scrolling Home and filterable Projects.
- `src/components/`: shared Header, Footer, and ProjectCard.
- `src/data/projects.json`: all project copy, previews, and links.
- `src/styles.css`: responsive layouts and keyboard focus.

Built with React, React Router, Vite, and plain CSS. Existing exercises remain untouched.
Missing screenshots are labelled. Render deployment and public portfolio/repository links
are pending; this local preview is not yet ready to email as a public website.
