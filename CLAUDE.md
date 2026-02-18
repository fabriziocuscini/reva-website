# Reva Website — Project Conventions

## Tech Stack

- **Vite** — dev server and production build
- **PostHTML Components** (`posthtml-component`) — HTML component system with `x-` tag prefix, props, slots, and yield
- **PostCSS** with `postcss-nested` — nested CSS syntax
- **Biome** — linter and formatter for JS and CSS
- **Package manager**: bun (fallback to pnpm if compatibility issues arise)

## File Structure

```
index.html              → Main page (Vite entry point, at project root)
src/
  components/*.html     → PostHTML components (referenced via x-tags)
  styles/
    main.css            → Entry CSS (imports partials)
    base.css            → Reset, custom properties, typography
    *.css               → Per-component styles
public/                 → Static assets (favicon, images)
```

## PostHTML Component Conventions

- Components live in `src/components/` and are referenced via the `x-` prefix tag.
  Example: `src/components/hero.html` → `<x-hero />` or `<x-hero title="Hello">content</x-hero>`.
- Subfolder components use dot notation: `src/components/ui/button.html` → `<x-ui.button />`.
- Props are defined in a `<script props>` block inside the component file.
- Default content injection uses `<yield />`. Named slots use `<slot:name>` / `<fill:name>`.
- Self-closing tags are supported (`<x-header />`).

## CSS Conventions

- Use `postcss-nested` for nesting. Prefix nested selectors with `&`.
- Use `rem`/`em` for font sizes, never `px` for body text.
- Define design tokens as CSS custom properties in `base.css`.
- Always provide `:focus-visible` styles for interactive elements.
- Include `prefers-reduced-motion: reduce` to disable animations for users who prefer it.

## Accessibility Standard: WCAG 2.1 Level AA

- Semantic HTML first — use `<nav>`, `<main>`, `<footer>`, `<section>`, `<button>`, `<a>` for their intended purposes.
- Do not add redundant ARIA roles on native landmarks.
- One `<h1>` per page, no skipped heading levels.
- All images need `alt` attributes (empty `alt=""` for decorative images).
- Text contrast: 4.5:1 minimum (3:1 for large text).
- All interactive elements keyboard-accessible. No `tabindex > 0`.
- Skip navigation link as first focusable element.
- Form inputs must have associated `<label>` elements.

## Commands

```sh
bun run dev        # Start Vite dev server
bun run build      # Production build to dist/
bun run preview    # Preview production build
bun run biome:check  # Lint and format check
bun run biome:fix    # Auto-fix lint and format issues
```
