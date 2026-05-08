# Agent Context

## Project Summary

- Static Mother's Day landing experience built with plain HTML, CSS and JavaScript.
- No package manager, build step, test runner or framework is currently used.
- Primary page: `index.html`.
- Main styles: `css/box.css`.
- Main behavior: `js/index.js`.
- Secondary experiences: `animate-1/` and `animate-2/`.
- Local browser URL in this workspace: `http://localhost/mothers-day/index.html`.

## Current UX Direction

- Visual language: warm romantic theme, soft gradients, glow, glassmorphism, playful particles and fluid transitions.
- The landing should feel polished and intentional, not generic.
- Preserve the existing emotional tone: gift reveal, heart/rose transitions and gentle surprise interactions.
- Prefer small, high-impact refinements over large rewrites.

## Important Files

- `index.html`: semantic structure for the main landing, action buttons and data attributes for navigation.
- `css/box.css`: background, card, greetings, action buttons, transitions, particles, image styling and logo lightbox styles.
- `js/index.js`: random gift image, button mouse tracking, ripple, particles, delayed navigation, transition image creation and logo lightbox behavior.
- `img/`: visual assets. Current relevant assets include `caja1.gif`, `caja2.gif`, `caja3.gif`, `corazon.svg`, `corazon.png`, `logo.png` and `logo-mother.png`.
- `REGLAS_DESARROLLO.md`: development rules and quality criteria. Read it before changing code.

## Recent Context

- `.action-button` received a smoother entrance animation in `css/box.css`.
- The entrance uses opacity, slight upward movement, scale and blur with staggered delays.
- A `prefers-reduced-motion: reduce` branch was added for the action button entrance.
- Existing working tree may contain related changes in `index.html`, `css/box.css`, `js/index.js` and `img/corazon.png`.

## Development Rules

- Keep HTML, CSS and JavaScript separated. Do not add inline CSS or inline event handlers.
- Use vanilla JavaScript unless the user explicitly asks for another dependency.
- Keep changes minimal and scoped to the requested behavior.
- Do not rewrite full sections when a targeted CSS or JS adjustment is enough.
- Avoid destructive git commands and do not revert unrelated user changes.
- Use ASCII in new text unless the file already requires non-ASCII content.

## Animation Guidelines

- Prefer explicit animated properties instead of `transition: all`.
- Avoid stacking conflicting `transform` animations without checking hover, active and clicked states.
- Favor smooth easing for entrances: `cubic-bezier(0.22, 1, 0.36, 1)` matches the current feel.
- For multiple related items, stagger delays subtly.
- Add `prefers-reduced-motion` handling for new continuous or entrance animations.
- Keep performance in mind: animate `opacity`, `transform` and lightweight filters only when needed.

## Manual Verification

- Open `http://localhost/mothers-day/index.html`.
- Check initial load animation and random gift image.
- Hover both action buttons and confirm glow, shimmer and tooltip still work.
- Click both action buttons and confirm ripple, particles, transition image and delayed navigation still work.
- Click the logo and confirm the lightbox opens and closes with click outside, close button and Escape.
- Resize to mobile width and confirm the button column layout still feels balanced.

## Notes For Future Agents

- If asked for visual changes, inspect `css/box.css` first, then `index.html`, then `js/index.js`.
- If asked for transition behavior, inspect `data-target`, `data-transition-image`, `data-transition-class` and `transitionDelay`.
- If a visual change appears not to work, check whether another rule later in `css/box.css` overrides it.
- The project is intentionally lightweight. Do not introduce tooling unless requested or clearly necessary.
