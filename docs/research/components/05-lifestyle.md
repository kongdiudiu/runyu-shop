# Spec: Lifestyle Tiles (2×2)

> Screenshots: `docs/design-references/fullpage-desktop-1440.png` (section between ID.me hero and "Show up ready"), `fullpage-mobile-390.png`.

## Component

`src/components/lifestyle.tsx` — `LifestyleTiles` (server component).

## Measured styles

### Desktop
- Section: `padding: 24px`, width 100%, height ≈818px, bg white.
- Grid: 2×2 (image tile, caption tile, image tile, caption tile):
  - Image tile: 676.4×676.4px, `border-radius: 0`, image fills (1320×1320 natural, `object-fit: cover`).
  - Caption tile: 676.4×93.6px, flex column centered-start, 36px/500/39.6px, `letter-spacing: -0.02em`, color `#101010`:
    - Line 1 (title): "Vitalize™ Backpack" / "Vitalize™ Shaker Bottle" — bold-ish 500
    - Line 2 (subtitle): "Function first. Style included." / "From pour to power-through." — same size (site shows both lines at 36px/500; subtitle is part of the same text block, 36px — see screenshot: both lines same size)
  - Whole tile links to product page.

### Mobile
- Stacked single column: image tile full-width (aspect 1:1), caption below at same 36px/500 style (site keeps 36px on mobile — verify in screenshot; caption block gets `padding` 16px+).

## Data

| Tile | Image | Title | Subtitle | Href |
|---|---|---|---|---|
| 1 | `/images/080426-HP-Lifestyle_Tile-Vitalize_Backpack.jpg` | Vitalize™ Backpack | Function first. Style included. | `/products/vitalize-macro-method-backpack-30-9-qt` |
| 2 | `/images/080426-HP-Lifestyle_Tile-Vitalize_Shaker.jpg` | Vitalize™ Shaker Bottle | From pour to power-through. | `/products/vitalize-shaker-bottle-20-oz` |

## Implementation notes
- Grid: `grid grid-cols-2 gap-0` desktop; `grid-cols-1` mobile.
- Each image/caption pair: caption sits adjacent (right of image on desktop), not overlaid.
- No hover effects (site: none), no border-radius.
