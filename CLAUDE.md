# Reva Website — Project Conventions

## Tech Stack

- **Vite** — dev server and production build
- **PostHTML Components** (`posthtml-component`) — HTML component system with `x-` tag prefix, props, slots, and yield
- **PostCSS** with `postcss-nested` + `postcss-custom-media` — nested CSS syntax and build-time custom media queries
- **Prettier** — code formatter for CSS, HTML, JS, JSON, and Markdown
- **Package manager**: bun (fallback to pnpm if compatibility issues arise)

## File Structure

```
index.html              → Main page (Vite entry point, at project root)
src/
  components/*.html     → PostHTML components (referenced via x-tags)
  styles/
    main.css            → Entry CSS (imports globals, components, sections)
    tokens/
      colors.css        → Color design tokens
      typography.css    → Font family, size, weight, line-height, letter-spacing tokens
      spacing.css       → Spacing design tokens
      breakpoints.css   → @custom-media breakpoint definitions (--screen-sm through --screen-2xl)
      radius.css        → Border-radius design tokens (--radius-xs through --radius-4xl, --radius-full, --radius-square)
    globals/
      reset.css         → Andy Bell's "(more) Modern CSS Reset"
      base.css          → Token imports, focus, links, a11y utilities, reduced-motion
      typography.css    → Element-level text styles (h1-h6, p, small, body)
      layout.css        → Layout primitives (container, vstack, hstack)
    components/           → Reusable UI component styles (button, link, menu, etc.)
    sections/
      header.css        → Site header
      hero.css          → Hero section
      footer.css        → Site footer
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
- Use typography token variables (`--font-size-*`, `--font-weight-*`, `--line-height-*`, `--letter-spacing-*`) instead of raw values in all stylesheets.
- Define design tokens as CSS custom properties in `styles/tokens/` (colors, typography, spacing). Never declare `--*` variables in globals or section CSS files.
- Foundational element-level styles and layout primitives live in `styles/globals/`. Reusable UI component styles live in `styles/components/`. Page-level partials live in `styles/sections/`.
- Layout utilities (`.container`, `.vstack`, `.hstack`) use BEM modifiers for spacing (e.g. `.vstack--lg`) and alignment (e.g. `.hstack--center`).
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
bun run format       # Format all files with Prettier
bun run format:check # Check formatting without writing
```
