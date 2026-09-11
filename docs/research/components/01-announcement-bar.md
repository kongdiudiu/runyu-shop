# Spec: Announcement Bar + Utility Links

> Target section: `announcement-bar` (top dark strip). Screenshot: `docs/design-references/fullpage-desktop-1440.png` (top 60px).

## Component

`src/components/announcement-bar.tsx` — `AnnouncementBar` (server component).

## Measured styles

| Property | Desktop | Mobile (<768px) |
|---|---|---|
| Height | 44px | 40px |
| Padding | `2px 48px` | `2px 16px` |
| Background | `#101010` | same |
| Text | 14px/400/19.6px, `letter-spacing: -0.014em`, color `#FAF5F5` | same |
| Layout | flex row: carousel (flex-1) + utility links (right) | flex row: carousel only |

## Structure

```
<div class="announcement-bar">            bg-ink text-pink-white px-12 py-[2px] h-11
  <div class="flex-1 flex justify-center">  ← carousel (Swiper fade)
    [slide 1] [slide 2] [slide 3]           ← stacked absolutely, opacity fade
  </div>
  <div class="hidden md:flex items-center gap-3">
    <a>Join the Club</a>                    → /pages/rewards
    <button>Sign In</button> | <button>Sign Up</button>
    <a>Support</a>                          → /pages/contact-help-support
    <button><Icon location /> USA</button>  ← "Select Location and Language"
  </div>
</div>
```

## Carousel behavior (client component)

- 3 slides, autoplay every ~4s, fade transition (`opacity` 0→1, 300ms), loop.
- Slides (data):
  1. "Shop New Arrivals" → `/collections/new-arrivals`
  2. "Free Shipping Over $75" → `/collections/new-arrivals`
  3. "Welcome to Stanley 1913 | A Brand of PMI" (no link)
- A11y: `region` + live text; small prev/next + pause/play controls (36px chevrons, only meaningful on focus; site shows them as buttons — render them, styled transparent).
- Hover pauses autoplay (site pauses on hover — confirm against target if possible).

## Client state

One `useState` index + `setInterval` in `useEffect` (clear on unmount). Fade: render all 3 slides absolutely, active gets `opacity-100`, others `opacity-0`.

## Notes
- Utility links hidden below `md`. Chevron-down next to location label.
- The bar sits directly above the header; no border.
