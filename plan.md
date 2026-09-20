# React Portfolio: plan

Written 2026-09-01, before any code. Nothing is built yet.

## 1. The thing to settle first

You said including eight past bootcamp projects is too ambitious, and that a
more flexible portfolio would be easier.

I disagree, and here is the evidence.

The rubric is not vague about this. The Excellent band for Technical
Functionality, which is worth 35 points, says "displays 8 projects". The
acceptance criteria say "Eight previous weekly challenges are displayed in the
portfolio, showcasing different technologies". A portfolio about something else
cannot score full marks on the largest band.

But your instinct is not wrong, it is aimed at the wrong thing. What you are
afraid of is **wrangling** the projects: fixing them, deploying them, making
them presentable. **You do not have to do any of that.**

"Displays 8 projects" means eight cards on a page. Each card is a title, a
description, some technology tags, and a link. That is data in a file. The
projects themselves stay exactly as they are, untouched, in the state you left
them.

So the plan takes both halves:

- **Content:** eight real bootcamp projects, which satisfies the rubric.
- **Architecture:** every project is one entry in a single `projects.js` file.
  Change the file, the site changes. Nothing is hard-coded into the page.

That gives you the flexibility you wanted without giving up 35 points. If you
later want the portfolio to be about something else, you edit one file.

## 2. You already have the eight

I looked. You have more than eight, and they cover genuinely different
technologies, which is what the criteria ask for.

| # | Project | Technologies | Links you already have |
|---|---|---|---|
| 1 | RESPAWN, game review blog | Node, Express, Sequelize, MySQL, JWT | Live on Render, public repo |
| 2 | The Rest Is Retro (group) | Node, client and server, 84 commits | Repo |
| 3 | Full-Stack Notes App | Node, Express, JSON storage | Live on Render, repo |
| 4 | Style My Photo (group) | Image generation API, Cloudflare worker | Live on GitHub Pages, repo |
| 5 | Interactive TODO List | HTML, CSS, JavaScript, DOM | Repo |
| 6 | Python README Generator | Python, file generation | Repo |
| 7 | First portfolio | HTML, CSS, responsive layout | Repo |
| 8 | JavaScript30 exercises | JavaScript, DOM, browser APIs | Repo |

Three of them already have live demos. That is a genuinely good spread: two
group projects, a full stack app with auth, a Python tool, and plain JavaScript
work. It tells a story of progress, which is what a portfolio is for.

Writing eight short descriptions is roughly one hour of your time. That is the
whole "wrangling" cost.

## 3. Where the marks actually are

| Band | Points | What it means here |
|---|---|---|
| Technical functionality | 35 | React, multiple pages, one interactive component, 8 projects, deployed on Render |
| Responsive design and UX | 25 | Works on phone and desktop, clean layout, obvious navigation |
| React architecture | 20 | Sensible components, props and state used properly, tidy folders |
| README | 10 | Description, features, **screenshots or a gif**, setup, tech stack, both links |
| Code quality | 5 | No dead code, no stray logs, clear names |
| Version control | 5 | Frequent clear commits, working links, clean final commit |

Look at the top two. Design and responsiveness are worth 25, more than the
whole React architecture band. This project is judged more on how it looks and
feels than on how clever the code is. That is the opposite of the blog project.

The README needs **screenshots or a gif**, which the blog README did not. I can
generate those automatically from the running site.

## 4. The stack

- **Vite + React.** Vite is the current standard and starts in seconds.
- **React Router** for the pages.
- **Plain CSS** with custom properties, the same approach that worked on
  RESPAWN. No Tailwind, no component library. The design band rewards real
  layout skill, and a library would hide it.
- **Render Static Site** for hosting. A React build is just files, so it needs
  the free static plan, not a web service. No database, no environment
  variables, no sleeping instance.

That last point matters. This deployment is far simpler than the blog. There is
nothing to connect to.

## 5. What gets built

**Pages** (the criteria need a homepage plus at least one more):

1. **Home.** Who you are, what you are learning, links to GitHub and LinkedIn,
   and three featured projects.
2. **Projects.** All eight, with the filter. This is the main event.
3. **About.** Short story, skills list, contact.

**The interactive component** is a filterable project list. Click "React",
"Node", "Python", and the grid narrows.

You have already built this. It is the genre filter on RESPAWN, in React
instead of plain JavaScript. Same idea: one piece of state decides what gets
drawn. Starting from something you understand is deliberate.

**Components** (this is the 20 point band, so the folder structure is graded):

```
src/
├── components/
│   ├── Header.jsx        navigation
│   ├── Footer.jsx        contact links
│   ├── ProjectCard.jsx   one project, reused eight times
│   ├── FilterBar.jsx     the technology buttons
│   └── SkillList.jsx     the skills on Home and About
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── About.jsx
├── data/
│   └── projects.js       the eight entries, the only file with content in it
└── styles/
```

`ProjectCard` is the reusable component the rubric asks for. It is written once
and used eight times, with props for the title, description, tags and links.

## 6. How we work

**Decided 2026-09-01: I type all the code.** You are the creative director. You
check each stage and redirect. You do not hand type anything.

The rules that follow from that:

- **Work happens in stages, and I stop after every one.** I never run several
  stages together. You see each one before the next starts.
- **Every stage ends with a short report:** what I did, what changed, what I
  tested, and what you should look at. Short. No walls of code.
- **Screenshots are how you review.** Design is worth 25 points here, so at any
  stage that changes what the site looks like, you get pictures, not
  descriptions.
- **I test in a real browser with Playwright** before I show you anything. No
  "this should work".
- **I flag rubric gaps as I find them**, not at the end.
- **You can redirect at any stage.** Sending a stage back costs one stage, never
  the whole project.
- Plain short sentences.

Two fixes carried over from the blog project:

1. **Check the live rubric before planning.** We spent effort on a demo video
   that was never required.
2. **Deploy first, not last.** Deployment was the scary unknown at the end. This
   time it is stage one.

## 7. The stages

Seven stages. I stop after each one and wait.

### Stage 1: get something live

Scaffold Vite and React, start git, create a public GitHub repo, deploy to
Render as a static site. The page will say almost nothing.

**You check:** the live Render link opens. That is all.
**Why first:** it banks the "deployed on Render" part of the 35 point band on
day one, and removes the only real unknown in the project.

### Stage 2: shell, navigation, and the look

Header, footer, routing between three pages, and a first design direction:
colours, fonts, spacing. The pages stay mostly empty.

**You check:** screenshots of the design direction. This is the important one.
Redirect hard here if it is wrong, because everything after is built on it.
**Why now:** deciding the look before the content exists is cheaper than
restyling a finished site.

### Stage 3: the eight projects

Write `projects.js` with the eight entries. Build `ProjectCard` and the grid on
the Projects page.

**You check:** the descriptions read like you, and the grid looks right.
**This is where 8 projects get displayed**, so it closes most of the 35 point
band.

### Stage 4: the filter

The interactive component. Click a technology, the grid narrows.

**You check:** it feels good to use.
**This completes** the last acceptance criterion in the Technical Functionality
band.

### Stage 5: Home and About

Fill in the content. Introduction, skills, featured projects, short story,
contact area.

**You check:** the words sound like you, not like a template.
**Note:** your GitHub and LinkedIn links go in as placeholders. You give me the
real ones whenever you like, it is a two minute change.

### Stage 6: design and responsive pass

Typography, spacing, colour, motion, then shrink it to a phone and fix what
breaks.

**You check:** screenshots at desktop, tablet and phone width.
**Why it matters:** this stage is most of the 25 point Responsive Design and UX
band.

### Stage 7: README, screenshots, and the final check

Write the README with description, features, screenshots, setup, tech stack and
both links. Then walk every rubric line and confirm it is met.

**You check:** the README on GitHub, and the final live site.
**Note:** this rubric wants **screenshots or a gif** in the README, which the
blog did not. I generate those from the running site.

## 8. Where the work happens

Project folder: `~/AIOS/bootcamp/react-portfolio`

**Start a fresh Claude Code session in this folder before stage 2.** This
conversation is long and full of the blog project. A new session that opens in
this folder, with this file as the first thing it reads, will be faster and
less likely to drift.

This file is the handoff. Anything decided here survives the session change.
Open chats do not.

## 9. Not doing

- No TypeScript. Not marked, and it slows you down.
- No CSS framework. The design band wants your layout, not Bootstrap's.
- No backend, no database, no contact form that sends mail. A static site
  scores full marks here.
- No touching the eight old projects. They are links and descriptions only.
