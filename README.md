# Reva Website

Marketing website for Reva.

## Tech Stack

- **Vite** — dev server and production build
- **PostHTML Components** — HTML component system (`x-` tag prefix, props, slots)
- **PostCSS** with `postcss-nested` — nested CSS syntax
- **Biome** — linter and formatter (JS + CSS)
- **bun** — package manager and script runner

## Getting Started

```sh
bun install
bun run dev
```

## Scripts

| Command               | Description                         |
| --------------------- | ----------------------------------- |
| `bun run dev`         | Start Vite dev server               |
| `bun run build`       | Production build to `dist/`         |
| `bun run preview`     | Preview production build locally    |
| `bun run biome:check` | Run linter and format checks        |
| `bun run biome:fix`   | Auto-fix lint and formatting issues |

## Project Structure

```
index.html                  Main page (Vite entry point)
src/
  components/*.html         PostHTML components (x-tags)
  styles/
    main.css                Entry CSS (imports partials)
    base.css                Reset, custom properties, typography
    *.css                   Per-component styles
public/                     Static assets
vite.config.js              Vite + PostHTML plugin config
postcss.config.js           PostCSS plugins
biome.json                  Biome linter/formatter config
```

## Accessibility

This project follows WCAG 2.1 Level AA. The approach is semantic HTML first, with ARIA attributes only where native semantics are insufficient. See `.cursor/rules/accessibility.mdc` and `CLAUDE.md` for the full set of conventions.
