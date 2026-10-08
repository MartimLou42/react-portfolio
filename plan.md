# Martim portfolio: current plan

Updated 2026-10-08 after Martim's review of the first preview.

## Purpose

A portfolio Martim can send to prospective employers and grow beyond the bootcamp.
Prioritize visitors understanding and exploring the work over a week-by-week assignment narrative.
The screenshot's React/components, two pages, interaction, responsive design, eight projects,
and eventual Render deployment remain the coursework baseline. Chronology is not verified:
Martim corrected Personal Portfolio to around Week 10, so remove all inferred week labels.

## Visitor flow

- Home: short introduction and Selected work heading, direct link to the work section.
- A closer look: three selected projects, with previews, descriptions, stack, and working links.
- More work: the other projects in a compact grid, with no artificial chronology.
- Contact: email and GitHub, no contact backend.
- Projects: complete collection with a keyboard-accessible technology selector and live count.

## Content and boundaries

The October inventory provides eight projects. Add The Rest Is Retro from inspected source.
Label group projects without claiming a personal role; verified contribution details can be added later.
No live demo is confirmed for Retro. Python is a terminal tool; neither requires an invented demo.
Existing exercises remain standalone and untouched. Screenshots are read-only captures;
no image generation, authenticated flows, or live-data writes for previews.

## Adding future work

Each project is a record in src/data/projects.json. Array order controls presentation;
featured controls the Home selection. Title, description, type, technologies, optional image,
imageAlt, groupProject, and label/URL links are the complete current contract.
New technologies appear in the filter automatically. No maximum of eight projects.
Future Figma work can link to the design instead of code. A colour-grading collection can
link to a gallery and use a representative image. Build that gallery only when real content
and its presentation requirements exist, rather than adding an empty section now.

## Current delivery

Build the employer-facing scrolling flow and full collection, remove week labels,
add filtering, capture available previews, verify desktop/mobile and navigation, commit locally.
Show the updated preview for review. Render publishing and external pushes are not authorized yet.

## Remaining before sending to employers

Confirm personal contributions for group work, complete missing preview imagery,
review final copy, deploy to Render, verify both routes, and add public submission links to README.
