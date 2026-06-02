# Eurofabbro Original Site — Design Tokens

> Source: minified production CSS from https://eurofabbro-v1.base44.app
> The site is a **Tailwind 3** build with custom design tokens declared as CSS variables in `:root` and exposed as Tailwind utilities under the `ef-*` prefix. There are **no hand-written component classes** (no `.btn`, `.card`, etc.) — every component is composed of utility classes against these tokens.
> A parallel **shadcn/ui** HSL token set (`--primary`, `--background`, `--card`, `--border`, …) is layered on top and drives the Radix-based primitives (sidebar, toast, command, accordion, sheet, etc.).

---

## 1. Color Palette

### 1a. Brand tokens (`--color-*`, used via `ef-*` Tailwind utilities)

| Token | Value | Semantic role | Used in |
|---|---|---|---|
| `--color-bg` | `#F5F0E8` | Page background (warm cream) | `body`, `.bg-ef-bg`, scrollbar track |
| `--color-bg-secondary` | `#EDE8DE` | Alt section background (slightly darker cream) | `.bg-ef-bg-secondary` |
| `--color-surface` | `#FFFFFF` | Card / panel surface | `.bg-ef-surface` |
| `--color-surface-elevated` | `#FFFFFF` | Elevated panels (modals, popovers) | — (alias of surface) |
| `--color-surface-dark` | `#2C2419` | Dark surface (footer, dark sections) | `.bg-ef-surface-dark`, `.text-ef-surface-dark` |
| `--color-text-primary` | `#1C1712` | Primary body text (near-black warm) | `body`, `.text-ef-text` |
| `--color-text-secondary` | `#5C5044` | Secondary text | `.text-ef-text-secondary` |
| `--color-text-muted` | `#9C8E80` | Muted/caption text | `.text-ef-text-muted` |
| `--color-text-on-dark` | `#F5F0E8` | Text on dark surface | `.text-ef-text-on-dark` |
| `--color-text-on-accent` | `#FFFFFF` | Text on accent fill (buttons) | inferred |
| `--color-accent` | `#B8956A` | **Primary brand accent** (warm tan/bronze) | buttons, links, focus ring, scrollbar hover, selection |
| `--color-accent-hover` | `#A07D52` | Accent hover state (darker tan) | `.hover:bg-ef-accent-hover` |
| `--color-accent-subtle` | `#EDE0CC` | Soft accent fill (chips, hover bg) | `.bg-ef-accent-subtle`, `.hover:bg-ef-accent-subtle`, `file:bg-ef-accent-subtle` |
| `--color-border` | `#D8CFC0` | Default border (warm gray) | `.border-ef-border`, scrollbar thumb |
| `--color-border-subtle` | `#EDE8DE` | Subtle hairline border | `.border-ef-border-subtle` |
| `--color-focus-ring` | `#B8956A` | Focus ring (same as accent) | inputs, focus-visible states |
| `--color-overlay` | `rgba(28, 23, 18, 0.55)` | Modal / dialog backdrop | overlays |
| `--color-glass` | `rgba(255, 255, 255, 0.72)` | Glassy header background (paired w/ `backdrop-blur-md`) | sticky navbar |

### 1b. shadcn/ui HSL tokens (used by Radix primitives)

These mirror the brand palette in HSL form so shadcn components inherit the brown/cream theme.

| Token | Light value | Dark value | Notes |
|---|---|---|---|
| `--background` | `0 0% 100%` | `20 15% 8%` | shadcn page bg |
| `--foreground` | `0 0% 3.9%` | `30 15% 95%` | shadcn text |
| `--card` / `--card-foreground` | `0 0% 100%` / `0 0% 3.9%` | `20 15% 8%` / `30 15% 95%` | |
| `--popover` / `--popover-foreground` | `0 0% 100%` / `0 0% 3.9%` | same as card | |
| `--primary` | `30 28% 57%` | `30 28% 57%` | **= `#B8956A` accent in HSL** |
| `--primary-foreground` | `0 0% 100%` | `0 0% 100%` | white on accent |
| `--secondary` | `30 20% 92%` | `20 10% 15%` | |
| `--secondary-foreground` | `20 15% 10%` | `30 15% 95%` | |
| `--muted` | `30 15% 92%` | `20 10% 15%` | |
| `--muted-foreground` | `20 12% 50%` | `20 12% 64%` | |
| `--accent` | `30 20% 92%` | `20 10% 15%` | shadcn-accent ≠ brand accent (it's the muted bg) |
| `--accent-foreground` | `20 15% 10%` | `30 15% 95%` | |
| `--destructive` | `0 84.2% 60.2%` | `0 62.8% 30.6%` | red, ~`#ef4444` |
| `--destructive-foreground` | `0 0% 98%` | `0 0% 98%` | |
| `--border` | `30 18% 80%` | `20 10% 15%` | |
| `--input` | `30 18% 80%` | `20 10% 15%` | |
| `--ring` | `30 28% 57%` | `30 28% 57%` | focus ring = accent |
| `--radius` | `0.75rem` | — | shadcn base radius (12px) |

### 1c. Other colors observed (Tailwind defaults pulled into the build)

Mostly from generic utility classes (validation states, slate palette for shadcn defaults). Not part of the brand system.

| Value | Where | Role |
|---|---|---|
| `#9CA3AF` | input placeholder | placeholder text |
| `#E5E7EB` | preflight | default border |
| `#DC2626` | destructive ring offset | error / red-600 |
| `#F8FAFC` / slate-50, slate-100, slate-200 | `.bg-slate-*` | shadcn defaults (rare) |
| `rgb(220 252 231)` / green-100, `rgb(34 197 94)` / green-500 | status badges | success |
| `rgb(255 237 213)` / orange-100, `rgb(251 146 60)` / orange-400, `rgb(234 88 12)` / orange-600 | status badges | warning |
| `rgb(250 204 21)` / yellow-400 | status icons | warning |
| `rgb(254 242 242)` / red-50, `rgb(252 165 165)` / red-300, `rgb(248 113 113)` / red-400, `rgb(239 68 68)` / red-500 | toaster destructive variant | error |
| `rgb(59 130 246 / .5)` | `--tw-ring-color` default | Tailwind default ring (overridden in practice) |

---

## 2. Typography

### Font family
- **Primary (display + body):** `"Inter", system-ui, sans-serif` — imported from Google Fonts with weights `300, 400, 500, 600, 700`.
- Both `--font-display` and `--font-body` point to Inter; the visual distinction between headings and body comes from **weight**, **size**, and **tracking**, not font family.
- Monospace fallback (preflight only): `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`.

### Type scale (custom, via CSS vars)

| Token | Desktop | Mobile (`max-width: 768px`) | Intended use |
|---|---|---|---|
| `--text-hero` | `72px` | `48px` | Hero headline |
| `--text-h1` | `52px` | `36px` | Page title |
| `--text-h2` | `40px` | `28px` | Section title |
| `--text-h3` | `28px` | `22px` | Subsection |
| `--text-h4` | `20px` | `20px` | Card title / eyebrow large |
| `--text-body-lg` | `18px` | `18px` | Lead paragraph |
| `--text-body` | `16px` | `16px` | Default body |
| `--text-body-sm` | `14px` | `14px` | Small body / meta |
| `--text-caption` | `12px` | `12px` | Caption |
| `--text-label` | `12px` | `12px` | Uppercase labels (use with `--tracking-label`) |

Tailwind's stock `.text-xs … .text-7xl` utilities are also compiled in (xs 12 / sm 14 / base 16 / lg 18 / xl 20 / 2xl 24 / 3xl 30 / 7xl 72), so the build matches the custom scale closely.

### Font weights

| Token | Value | Tailwind equivalent |
|---|---|---|
| `--weight-display` | `300` | `.font-light` |
| `--weight-heading` | `500` | `.font-medium` |
| `--weight-body` | `400` | `.font-normal` |

Also compiled: `.font-semibold` (600), `.font-bold` (700).

### Letter-spacing (tracking)

| Token | Value | Use |
|---|---|---|
| `--tracking-hero` | `-0.02em` | Hero headline |
| `--tracking-heading` | `-0.01em` | Headings |
| `--tracking-body` | `0em` | Body (default on `body`) |
| `--tracking-label` | `0.08em` | Uppercase eyebrow labels |

Tailwind utilities: `.tracking-tight` (-0.025em), `.tracking-wide` (0.025em), `.tracking-widest` (0.1em).

### Line-height (leading)

| Token | Value | Use |
|---|---|---|
| `--leading-hero` | `1.1` | Hero |
| `--leading-heading` | `1.2` | Headings |
| `--leading-body` | `1.7` | Body (default on `body`) |

Tailwind utilities: `.leading-none` 1 / `.leading-tight` 1.25 / `.leading-snug` 1.375 / `.leading-normal` 1.5 / `.leading-relaxed` 1.625.

### Body defaults
```css
body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-weight: var(--weight-body);
  line-height: var(--leading-body);
  letter-spacing: var(--tracking-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 3. Spacing

### Layout tokens
| Token | Desktop | Mobile | Notes |
|---|---|---|---|
| `--section-padding-y` | `120px` | `60px` | Vertical padding of major sections |
| `--section-padding-x` | `48px` | `20px` | Horizontal padding of sections |
| `--content-max-width` | `1200px` | — | Wide container max width |
| `--content-narrow` | `760px` | — | Narrow column (article / form) |
| `--component-padding` | `32px` | — | Default card / panel internal padding |
| `--grid-gutter` | `24px` | — | Gap between grid items |

### Common Tailwind spacing observed (from compiled utilities)

- **Gap utilities used:** `gap-1` (4px) · `gap-2` (8px) · `gap-3` (12px) · `gap-4` (16px) · `gap-6` (24px) · `gap-8` (32px) · `gap-12` (48px) · `gap-16` (64px).
- **Vertical padding utilities used:** `py-1 .25rem`, `py-2 .5rem`, `py-3 .75rem`, `py-4 1rem`, `py-6 1.5rem`, `py-8 2rem`, `py-12 3rem`, `py-20 5rem`, `py-24 6rem`.
- **Container max-widths used:** `max-w-md 28rem`, `max-w-lg 32rem`, `max-w-2xl 42rem`, `max-w-3xl 48rem`, `max-w-4xl 56rem`, `max-w-5xl 64rem`, `max-w-6xl 72rem`.
- The dominant rhythm is the 8-pt scale: **8 / 16 / 24 / 32 / 48 / 64 / 96 / 120 px**.

---

## 4. Border-radius

| Token | Value | Tailwind alias |
|---|---|---|
| `--radius-sm` | `8px` | `rounded-sm` (custom override exists for shadcn: `calc(var(--radius) - 4px) = 8px`) |
| `--radius-md` | `12px` | `rounded-md` ≈ `calc(0.75rem - 2px)` and base `--radius` (0.75rem = 12px) |
| `--radius-lg` | `16px` | `rounded-lg` = `var(--radius)` (driven by shadcn) |
| `--radius-xl` | `24px` | `rounded-2xl` (`1rem`), `rounded-3xl` (`1.5rem` = 24px) |
| `--radius-full` | `9999px` | `rounded-full` |
| `--radius` (shadcn) | `0.75rem` (12px) | base for `rounded-md/lg/sm` math |

Arbitrary values seen: `rounded-[2.5rem]` (40px — used for very large pills/hero cards), `rounded-[2px]` (fine corner).

---

## 5. Shadows

All custom shadows use the warm-black brand color `rgba(28, 23, 18, …)` instead of pure black — this is what gives shadows a "warm" quality matching the cream palette.

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 8px rgba(28, 23, 18, 0.06)` | Resting cards |
| `--shadow-md` | `0 2px 16px rgba(28, 23, 18, 0.08)` | Hovered / floating cards |
| `--shadow-lg` | `0 8px 40px rgba(28, 23, 18, 0.12)` | Elevated panels, modals |

Tailwind defaults are also available (`.shadow`, `.shadow-md`, `.shadow-lg`, `.shadow-xl`, `.shadow-2xl`) and use neutral black — prefer the custom warm shadows above for brand consistency.

---

## 6. Breakpoints

| Name | Min-width | Notes |
|---|---|---|
| `sm` | `640px` | Tailwind default |
| `md` | `768px` | Tailwind default |
| `lg` | `1024px` | Tailwind default |
| `xl` | `1280px` | Tailwind default |
| `2xl` | `1536px` | Tailwind default |
| **mobile override** | `max-width: 768px` | **Custom** — rewrites `--text-hero/h1/h2/h3` and `--section-padding-y/x` to the smaller mobile scale |

No other custom breakpoints. The single `max-width: 768px` block is the mobile-shrink rule for the type scale.

---

## 7. Animations & Transitions

### Easing
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Default exit/settle |
| `--ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Enter / appearing elements |

Tailwind built-ins also present: `cubic-bezier(0.4, 0, 0.2, 1)` (`ease-in-out`), `linear`.

### Duration
| Token | Value |
|---|---|
| `--duration-fast` | `0.15s` |
| `--duration-base` | `0.25s` |
| `--duration-slow` | `0.4s` |

Also observed in compiled utilities: `0.2s`, `0.3s`, `0.5s`, `1s`.

### Keyframes (compiled)
| Name | Definition | Used by |
|---|---|---|
| `pulse` | `50% { opacity: .5 }` | `.animate-pulse` (`pulse 2s cubic-bezier(.4,0,.6,1) infinite`) — skeleton loaders |
| `spin` | `to { transform: rotate(360deg) }` | `.animate-spin` (`spin 1s linear infinite`) — loaders |
| `enter` | opacity + translate3d + scale3d + rotate from `--tw-enter-*` vars | `.animate-in` (tailwindcss-animate, 0.15s) — Radix entrances |
| `exit` | reverse of `enter`, to `--tw-exit-*` vars | `.animate-out` — Radix exits |
| `accordion-up` | `0% { height: var(--radix-accordion-content-height) } → to { height: 0 }` | Radix accordion close, `0.2s ease-out` |
| `accordion-down` | `0% { height: 0 } → to { height: var(--radix-accordion-content-height) }` | Radix accordion open, `0.2s ease-out` |

### Transitions
Standard Tailwind transition utilities are emitted: `.transition`, `.transition-all`, `.transition-colors`, `.transition-opacity`, `.transition-shadow`, `.transition-transform`, plus arbitrary-property variants for Radix data-attr state changes (`transition-[left,right,width]`, `transition-[margin,opacity]`, etc.). Default duration `150ms`, default easing `cubic-bezier(0.4, 0, 0.2, 1)`.

---

## 8. Component Classes

> **There are no hand-written component classes in the production CSS.** No `.btn`, `.card`, `.section`, `.hero`, etc. exist as compound selectors. Everything is composed at the markup level from Tailwind utilities, with brand styling injected through the custom `ef-*` utility family below.

### Brand-prefixed utilities (`ef-*`)
These are how the design system surfaces inside JSX:

| Utility | Effect |
|---|---|
| `bg-ef-bg` | `background-color: #F5F0E8` (page bg) |
| `bg-ef-bg-secondary` | `background-color: #EDE8DE` |
| `bg-ef-surface` | `background-color: #FFFFFF` |
| `bg-ef-surface-dark` | `background-color: #2C2419` |
| `bg-ef-accent` | `background-color: #B8956A` (primary CTA fill) |
| `bg-ef-accent-subtle` | `background-color: #EDE0CC` (chip / soft fill) |
| `hover:bg-ef-accent-hover` | `:hover → #A07D52` |
| `hover:bg-ef-accent-subtle` | `:hover → #EDE0CC` |
| `text-ef-text` | `color: #1C1712` |
| `text-ef-text-secondary` | `color: #5C5044` |
| `text-ef-text-muted` | `color: #9C8E80` |
| `text-ef-text-on-dark` | `color: #F5F0E8` |
| `text-ef-accent` | `color: #B8956A` |
| `text-ef-surface-dark` | `color: #2C2419` |
| `hover:text-ef-accent` | `:hover → #B8956A` |
| `border-ef-accent` | `border-color: #B8956A` |
| `border-ef-border` | `border-color: #D8CFC0` (default hairline) |
| `border-ef-border-subtle` | `border-color: #EDE8DE` |
| `focus:border-ef-accent` | input focus border |
| `focus:ring-ef-accent` | `--tw-ring-color: #B8956A` |
| `selection:bg-ef-accent` | text-selection background |

### Inferred component recipes (composed from utilities)

These compositions show up repeatedly in the markup of a Tailwind+shadcn brand build like this; recreate them as React components rather than CSS classes.

- **Primary button** — `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ef-accent text-white font-medium tracking-tight hover:bg-ef-accent-hover transition-colors focus-visible:ring-2 focus-visible:ring-ef-accent focus-visible:ring-offset-2`.
- **Secondary / outline button** — `inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ef-border text-ef-text hover:bg-ef-accent-subtle transition-colors`.
- **Card / surface panel** — `bg-ef-surface border border-ef-border-subtle rounded-2xl p-8 shadow-[0_1px_8px_rgba(28,23,18,.06)]` (using `--shadow-sm`).
- **Section wrapper** — `py-[120px] px-[48px] max-w-[1200px] mx-auto` (matching the layout tokens; collapses to `py-[60px] px-[20px]` under 768px via the `:root` override).
- **Eyebrow label** — `text-xs uppercase tracking-[0.08em] text-ef-text-muted font-medium`.
- **Sticky glass header** — `sticky top-0 bg-[color:var(--color-glass)] backdrop-blur-md border-b border-ef-border-subtle`.

### Custom scrollbar (only non-utility custom CSS in the file)
```css
::-webkit-scrollbar           { width: 8px; }
::-webkit-scrollbar-track     { background: var(--color-bg); }
::-webkit-scrollbar-thumb     { background: var(--color-border); border-radius: var(--radius-full); }
::-webkit-scrollbar-thumb:hover { background: var(--color-accent); }
```

### Selection
```css
::selection { background-color: var(--color-accent); color: #fff; }
```
(emitted via `.selection:bg-ef-accent` and `.selection:text-white` utilities)

---

## 9. Quick-reference summary for the rebuild

- **Mood**: warm cream + tan/bronze accent + warm near-black text; never pure black, never pure cool gray.
- **Font**: Inter only, weight does the work (300 hero / 500 heading / 400 body).
- **Rhythm**: 8-pt grid, sections 120/60 (desktop/mobile) vertical with 48/20 horizontal padding.
- **Radii**: lean into `rounded-2xl` (16px) for cards and `rounded-full` for CTAs.
- **Shadows**: always tinted with `rgba(28,23,18,…)` — never neutral black.
- **Motion**: short (0.15–0.4s), `cubic-bezier(.25,.46,.45,.94)` for settle, `cubic-bezier(0,0,.2,1)` for entrances.
- **Implementation**: extend Tailwind's theme with the `ef-*` color tokens and the custom type/spacing/radius/shadow scales; compose components from utilities — do not create `.btn`/`.card` classes.
