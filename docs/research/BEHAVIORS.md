# Stanley 1913 — Behaviors & Interaction Patterns

> Source: live observation via Playwright MCP (Chrome, 1440×900 and 390×844). Reference screenshots in `docs/design-references/`.

## Interaction model summary

| Element | Trigger | Behavior |
|---|---|---|
| Announcement carousel | **Time** (autoplay) | Swiper fade, auto-rotates ~4s, pause/play + prev/next buttons |
| Hero 1/2/3 | None (static) | Single image, no rotation (verified: image src unchanged over 5s) |
| Teaser carousels | **Click** (arrows) | Next/prev only; no autoplay, no drag observed on desktop |
| Mega menu (Shop/Trending) | **Click** on menu item | `display: none → flex`, absolute, top 76px, full-width panel; closes on re-click / outside click |
| Mobile menu | **Click** on hamburger | Slide-in drawer, class toggle |
| Footer columns (mobile) | **Click** on accordion title | Accordion expand/collapse, content `display: none` → block |
| Cookie dialog | Page load (first visit) | OneTrust modal; Accept/Decline/Manage |
| Geo banner | Region detection | JP visitors only; Yes/No + × close |
| Header | Scroll | **No sticky behavior** (position: relative — scrolls away) |
| Smooth scroll | — | **Absent** (no Lenis/GSAP smooth scroll, no scroll-snap) |

## Detailed notes per section

### Announcement bar
- Swiper with `fade` effect; active slide `opacity: 1`, others `opacity: 0` (absolute stacked).
- Autoplay confirmed (slide text cycles). Desktop 14px white text on `#101010` 44px bar; right-side utility links hidden on mobile (bar drops to 40px with only the carousel).
- "Pause slideshow" button stops rotation (a11y first-button pattern); prev/next also present.

### Hero modules (all 3)
- Static `<picture>`-style image + text block; text always overlaid on image (no scroll parallax, no hover effects, no CTA hover styles beyond default).
- Text layout: top-left aligned, `margin-left: 48px` desktop / 24px mobile. Hero 2 is the exception: light image with **black** text + ID.me logo, content block `justify-content: center`, h3 `max-width: 41%`.
- CTA buttons: rectangular (radius 4px), 14px vertical padding 32px horizontal, 1.6px border, bold 16px. On dark heroes: white bg / `#101010` text. On light hero 2: `#101010` bg / white text. No hover transform.

### Teaser carousels
- Click-driven only. Arrows 36×36px circles, vertically centered (`margin-top: -22px`), chevron icons, `opacity: 0.35` when disabled (prev at start), 1 when enabled. **Hidden on mobile** (`u-hideMobile` class → `display: none`) — mobile users swipe horizontally.
- Slides-per-view: desktop ≈2.9 (next card peeks), mobile ≈1.75. Cards: radius 8px, `overflow: hidden`, caption outside image (below, 20px/400, margin-top 8px).
- Title sits in its own column on desktop (vertical center) and above the carousel on mobile.

### Mega menu
- **Click-driven, not hover** (verified: hover alone never opens it; `.click()` on `.c-navigation__expand-category` toggles `display: flex`).
- Panel: absolute under header (`top: 76px` — desktop header is 80.4px), `left: 0`, full viewport width, height 522px, white bg, no shadow. Pushes down page content (it's in normal flow at top, absolute panel overlays content below).
- Columns: header label + list of 14px links, `li` spacing 20px; promo image card on the right for Shop ("Fill, toss, go").
- Trending opens a second mega-menu variant with image-tile promos (390×358 images at width=512/670).

### Mobile header
- Nav collapses: menu items hidden, hamburger "Open menu" button + search + cart shown right. Logo remains.
- Drawer: slides in from left/right (class toggle on the nav element), lists menu items + utility links; closing via × or backdrop. (Captured in mobile screenshot.)

### Footer (mobile)
- Company/Support/Legal columns become accordions (`.c-accordion`): title row 20px/400 with 16px chevron icon, `justify-content: space-between`; content `display: none` until clicked. All collapsed by default (observed).
- "Need Help?" block (3 white buttons) stays stacked above the accordions with `margin-bottom: 40px`.

### Cookie dialog
- Appears on first visit (OneTrust). Centered modal with title "We value your privacy", 14px body text, Privacy Policy link, three buttons. Standard: **Accept All Cookies** (primary, black bg), **Decline Non-Essential Cookies** (secondary), **Manage Cookies** (ghost/text). Close × in corner.

### Misc
- Skip-to-content link present (a11y). Search combobox in header (icon + input); cart button shows count badge.
- `Enter` key hint in skip link. Announcement/teaser regions have aria labels ("This is a carousel with auto-rotating slides…").
- No infinite scroll, no pagination, no intersection-based lazy reveal animations. Images lazy-load on scroll into view (verified: footer/teaser 2 images not loaded until scrolled to).

## Emulation decisions (for the clone)
1. Implement announcement autoplay with a lightweight interval + fade (no Swiper dependency needed; CSS transition on opacity).
2. Teaser carousels: translateX track + next/prev buttons; disable prev at index 0; hide arrows below `lg`; support touch drag on mobile via native scroll/overflow or a tiny drag handler.
3. Mega menu: React state toggle on click, absolute full-width panel with columns from data arrays.
4. Footer accordions: React state per column, collapsed by default on mobile; static columns on desktop.
5. Cookie dialog: local component gated by a `useState` (no OneTrust SDK) — shown on first load.
6. All links are mock/hash or real external URLs where sensible; no backend/auth.
