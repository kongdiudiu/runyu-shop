# Spec: Hero Module (3 instances)

> Screenshots: `docs/design-references/hero-desktop-1440.png`, `fullpage-desktop-1440.png`, `fullpage-mobile-390.png`.

## Component

`src/components/hero.tsx` — `Hero` (server component). One component, 3 data instances.

## Measured styles

### Desktop
- Container: width 100%, `position: relative`, image fills (bg image or `<img>` absolute cover).
  - Hero 1 & 3: height **569.9px** · Hero 2: height **455.3px**
- Text block: flex column, `justify-content: center` (hero 2) / starts top (hero 1 & 3 text is at top via margins; blocks: hero1/3 have no justify-content → margin-driven), text-align left.
- h2: 64px/500/62.72px, `letter-spacing: -0.03em`, margin `48px 0 0 48px`, maxWidth 100%
- h3: 26px/400/28.6px, `letter-spacing: -0.02em`, margin `8px 0 0 48px` (hero 1 uses `16px 0 0 48px`), maxWidth 100% (hero 2: **41%**)
- CTA: 16px/700, padding `14px 32px`, radius 4px, border `1.6px solid`, flex, gap 8px, margin `32px 0 0 48px` (hero 3 adds `margin-bottom: 48px`)
- Colors: heroes 1 & 3 = white text + CTA white bg / `#101010` text. Hero 2 = black text (`#000`) + CTA `#101010` bg / white text. Hero 2 h2 is weight **700** (not 500).

### Mobile (<768px)
- Hero heights: 1 & 3 = 494.8px, 2 = 330.6px.
- h2: 36px/500/35.28px, `letter-spacing: -0.03em`, margin `24px 0 0 24px`, maxWidth 74% (hero 1) — hero 2: margin `8px 0 0 24px`
- h3: 20px/400/22px, margin `8px 0 0 24px`
- CTA: margin `24px 0 0 24px` (hero 2: `16px 0 0 24px`)
- Hero 2 h3 wraps ~4 lines (88px tall).

## Data

| | Hero 1 | Hero 2 (ID.me) | Hero 3 |
|---|---|---|---|
| Image D | `/images/080426-HP-Hero-D.jpg` | `/images/080426-HP-Hero_2-D.jpg` | `/images/072826-HP-Hero-D.jpg` |
| Image M | `/images/080426-HP-Hero-M.jpg` | `/images/080426-HP-Hero_2-M.jpg` | `/images/072826-HP-Hero-M.jpg` |
| Logo | — | `/images/IDme_Logo.png` (h≈60px, top-left) | — |
| h2 | "Show up like you" | "Extra credit: 25% off" | "Show up ready" |
| h3 | "Leakproof. Drama proof. All day proof." | "Teachers and students do the work every day. This is our thanks. Verify with ID.me for 25% off at checkout, through 8/17." | "Pack what you need. Keep it fresh. Enjoy when you're ready." |
| CTA | Shop Now → `/collections/leakproof-water-bottles` | Shop Now → `/collections/id-me` | Shop Now → `/collections/lunch-boxes` |

## Implementation notes

- Use `<picture>`: `<source media="(max-width: 767px)" srcSet={imageM}/>` + `<img src={imageD}/>` with `className="absolute inset-0 h-full w-full object-cover"`.
- Text block `absolute inset-0 flex flex-col` (hero 2: `justify-center`; heroes 1/3: `justify-start` — margin-based spacing matches site).
- Hero 2 h2 weight 700. All h2 letter-spacing -0.03em, h3 -0.02em (from computed: -1.92px/64px = -0.03em; -0.52px/26px = -0.02em).
- CTA renders as `Link` styled as button; hover: no change (site has none).
