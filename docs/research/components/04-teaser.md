# Spec: Teaser Carousel (2 instances)

> Screenshots: `docs/design-references/fullpage-desktop-1440.png` (sections "Leakproof legends" / "Shop summer essentials"), `fullpage-mobile-390.png`.

## Component

- `src/components/teaser.tsx` — `Teaser` (client component: carousel state).
- `src/components/teaser-card.tsx` — `TeaserCard` (server).

## Measured styles

### Desktop
- Section: white bg, `padding: 24px 0 24px 48px`, flex **row**; height ≈522px.
- Title: sits in a left column, `font-size: 36px; font-weight: 500; line-height: 39.6px; letter-spacing: -0.02em; color: #000`, vertically centered.
- Card: width 321px, height 442px, `border-radius: 8px`, `overflow: hidden`, color `#101010`.
  - Image: portrait 1:1.377 ratio (1440×1983), `object-fit: cover`, fills card top.
  - Caption: outside/below image: `margin-top: 8px`, 20px/400/22px, `letter-spacing: -0.02em`, color #000. Card link wraps image+caption.
- Carousel: horizontal track; visible ≈2.9 cards (next card peeks ~0.1). Gap between cards ≈16px (visual).
- Arrows: 36×36px circles, chevron icons, absolutely positioned vertically centered (`margin-top: -22px`), **hidden below lg** (`u-hideMobile`). Prev at index 0: `opacity: 0.35` (still clickable no-op → disable). Active: opacity 1.
- No autoplay, no dots.

### Mobile (<768px)
- Section: `padding: 24px 0 24px 24px`, flex **column**.
- Title above carousel: 26px/500/28.6px (teaser 1) — teaser 2 title is **26px/400**.
- Card: width 210.4px, height 289.8px. Visible ≈1.75 cards. Arrows hidden; horizontal swipe (native scroll with `overflow-x-auto` + `scroll-snap` or drag).

## Data

### Teaser 1 — "Leakproof legends" (`/collections/leakproof-water-bottles`)
1. `/images/080426-HP-Discover-1.jpg` — Quencher ProTour
2. `/images/080426-HP-Discover-2.jpg` — Flowstate™ Spring Bottle
3. `/images/080426-HP-Discover-3.jpg` — Vitalize™ Tempo Bottle
4. `/images/080426-HP-Discover-2-CA.jpg` — Wellspring Bottle

### Teaser 2 — "Shop summer essentials" (`/collections/shop-all`)
1. `/images/070726_HP_BTS_Carousel2-Prod1_DT.png` — Lifted Spirits™ Steel Cooler
2. `/images/070726_HP_BTS_Carousel2-Prod2_DT.png` — Adventure Fast Flow Water Jug
3. `/images/070726_HP_BTS_Carousel2-Prod3_DT.png` — Flowstate™ Spring Bottle

Card links: product mock URLs (e.g. `#` or `/products/<slug>`) — use `href` from data; non-functional pages OK.

## Carousel implementation

- Track: `flex gap-4` inside `overflow-hidden` container, `transform: translateX(-index * cardWidth)` with `transition-transform duration-300` — card width measured via ref (or fixed: desktop 321+16px step, mobile 210+16px).
- Prev/next buttons: `<Icon name="chevron-left|chevron-right" size={16}/>` centered in 36px circles, absolute left/right near card area, `hidden lg:flex`.
- Clamp index 0..cards-visible-count (site stops at last visible card).
- Scroll snap mobile: `overflow-x-auto snap-x snap-mandatory` + `snap-start` cards (native swipe).
- A11y: `region` label "Carousel {title}", buttons aria-labels.
