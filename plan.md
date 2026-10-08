# React portfolio: current build plan

Updated 2026-10-08 against the supplied challenge screenshot and October build brief.
This replaces the September plan. Existing exercises stay untouched.

## Requirements

- React with reusable components, props, and state.
- Home and Projects, connected through navigation.
- Eight previous weekly challenges, in week order.
- A technology filter with All selected initially, selected states, and a result count.
- Responsive desktop and mobile layouts, keyboard navigation, and visible focus.
- Deploy to Render and provide a working live link, including direct route loading.

## Project content

1. Personal Portfolio (HTML, CSS)
2. Learning in Public (HTML, CSS, Flexbox)
3. Learning in Public: Bootstrap Migration (HTML, CSS, Bootstrap)
4. Interactive TODO List (HTML, CSS, JavaScript, DOM)
5. Style My Photo (group project; do not invent a personal contribution)
6. Python README Generator (terminal project; repository link, no web demo)
7. Full-Stack Notes App
8. RESPAWN: Game Review Blog

The supplied portfolio-projects.json is the source for descriptions and links.
Keep visible content in one local data file, excluding local paths and verification notes.
Use honest placeholders until real screenshots are captured. Do not invoke image generation,
modify live data, repair exercises, or rebuild their backends.

## Implementation

Vite, React, JavaScript, React Router declarative routing, plain CSS.
Header, Footer, and ProjectCard have separate responsibilities; pages compose them.
Projects owns filter state when the full set is approved. No runtime API is required.
Home introduces Martim and links to Projects and GitHub, using supplied facts only.
No About page, carousel, contact backend, or animation system is needed.

## Stages and review gates

1. Build Home, Projects, navigation, and one styled Week 1 card.
   Verify the production build and desktop/mobile browser layouts.
   Show a browser preview and stop for Martim's visual review.
2. After approval, add all eight records and the technology filter.
3. Capture project previews and verify links, filtering, focus, and responsive layouts.
4. Finish README with setup, features, screenshots, and submission links.
5. Deploy to Render within authorized scope and verify both routes directly.

Only stage 1 is currently authorized. Do not push or publish in this stage.

## Design direction

White background, charcoal text, one blue accent, calm sans-serif typography.
Prioritize readable project evidence, clear links, and generous spacing.
