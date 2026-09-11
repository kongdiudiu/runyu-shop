# Stanley 1913 — Homepage Page Topology

> Target: `https://www.stanley1913.com/` (Shopify). Full-page screenshots: `docs/design-references/fullpage-desktop-1440.png`, `fullpage-mobile-390.png`. Section shots: `hero-desktop-1440.png`, `header-shop-megamenu.png`, `header-dropdown-shop.png`, `comparison.png`.

## Page anatomy (top → bottom)

| # | Section | Element/class | Desktop height | Mobile height |
|---|---------|---------------|----------------|---------------|
| 0 | Geo banner (JP redirect, conditional) | `geo-banner`-like top strip | ~auto | ~auto |
| 1 | Announcement bar (carousel + utility links) | `announcement-bar` | 44px | 40px |
| 2 | Header / nav | `c-navigation` | 80.4px | 84px |
| 3 | Hero 1 — "Show up like you" | `hero-module.c-hero` | 569.9px | 494.8px |
| 4 | Teaser 1 — "Leakproof legends" (4 cards) | `.c-teaser` | 522.2px | 461.6px |
| 5 | Hero 2 — ID.me "Extra credit: 25% off" | `hero-module` | 455.3px | 330.6px |
| 6 | Lifestyle tiles (2×2) | `.c-lifestyle` | 818px | (stacked) |
| 7 | Hero 3 — "Show up ready" | `hero-module` | 569.9px | 494.8px |
| 8 | Teaser 2 — "Shop summer essentials" (3 cards) | `.c-teaser` | ~522px | 487.2px |
| 9 | Footer | `footer.c-footer` | flex row, padding 48px | column, 985px, padding 32px 16px |
| 10 | Cookie dialog (OneTrust) | overlay dialog | fixed | fixed |

The page is ONE viewport-wide column (max 100% width, no side margins on sections; content padding is 48px desktop / 24px mobile). Header is **not sticky** (`position: relative`). No smooth-scroll library, no scroll-snap.

---

## Global foundation

### Typography
- Font: **StanleyFavorit** (custom, loaded as woff2 from `cdn/shop/t/843/assets/StanleyFavorit-*.woff2`). Weights in use: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold).
- Fallback stack: `StanleyFavorit, -apple-system, Inter, Roboto, Arial, sans-serif`.
- Base: `body { font-size: 14px; line-height: 19.6px; letter-spacing: -0.14px; color: #000; background: #fff }`.
- **Heading scale** (desktop): h2 64px/500/62.72px/letterSpacing -1.92px; h2-alt 36px/700/40px (footer); teaser title 36px/500/39.6px/-0.72px; footer col h3 23px/700/25.3px/-0.46px; hero h3 26px/400/28.6px/-0.52px; card subtitle 20px/400/22px/-0.4px; mobile h2 36px/500/35.28px/-1.08px; mobile h3 20px/400/22px/-0.4px.
- CTA buttons: 16px/700/16px, letterSpacing -0.16px, padding `14px 32px`, border-radius 4px, border 1.6px solid, display flex, gap 8px.

### Colors (computed, most-used first)
| Token | Value | Usage |
|---|---|---|
| `--black` | `#000` (rgb 0,0,0) | body text, borders |
| `--ink` | `#101010` (rgb 16,16,16) | nav text, announcement bg, footer bg, dark CTA bg, card captions |
| `--white` | `#fff` | hero text on dark images, CTA-on-dark text |
| `--gray-1` | `#3F3F3F` | muted text |
| `--pink-white` | `#FAF5F5` (rgb 250,245,245) | announcement text |
| `--gray-2` | `#696969` | muted |
| `--gray-3` | `#4D4D4D` | muted |
| `--green` | `#22725F` | accents (few, e.g. links hover) |
| `--red` | `#A30817` | error/sale accents |
| `--gray-4` | `#555` | footer muted |
| `--gray-5` | `#6A6A6A` | muted |
| `--bg-gray` | `#E9E9E9` | input bg / placeholders |

Radius: buttons 4px, product cards 8px, tiles 0. Shadows: none (flat design).

---

## 0. Geo banner (conditional — render with mock state "not shown")

Desktop-only strip shown for JP visitors: "It seems you're in Japan. Visit [Stanley 1913 Japan](https://jp.stanley1913.com/) instead?" + buttons "Yes, please" / "No, thanks" + × close. **Emulate with hidden-by-default state; no visual impact at default view.** (OneTrust cookie dialog below covers the "first-visit dialog" behavior instead.)

## 1. Announcement bar (`announcement-bar`)

- Container: bg `#101010`, color `#FAF5F5`, height 44px (mobile 40px), padding `2px 48px` (mobile `2px 16px`), flex row.
- **Left**: Swiper fade carousel, autoplay (time-driven), 3 slides, each 14px/400 text, slides link to `/collections/new-arrivals`:
  1. "Shop New Arrivals"
  2. "Free Shipping Over $75"
  3. "Welcome to Stanley 1913 | A Brand of PMI"
- **Right** (hidden on mobile): "Join the Club" → `/pages/rewards`, "Sign In | Sign Up", "Support" → `/pages/contact-help-support`, location button "Select Location and Language USA" (icon + label). All 14px, white.
- Controls: pause/play, prev/next (a11y). Slide switch interval ≈ 4s with fade.

## 2. Header (`c-navigation`)

- Container: white bg, height 80.4px (mobile 84px), padding `0 48px` (mobile `0 20px`), flex row, `position: relative` (NOT sticky), color `#101010`.
- **Left**: logo "Stanley 1913 home" (SVG `logo-full` sprite symbol) → `/`.
- **Center/left (desktop only)**: menu list:
  - **Shop** → `/collections/shop-all` — click opens **mega menu** (see below). Chevron indicator.
  - **Trending** (button) — click opens mega menu (2nd variant).
  - **Customize** → `https://www.stanley1913.com/collections/stanley-create-custom`
  - **Sale** → `/collections/sale`
- **Right**: search combobox (input + submit icon), cart button (bag icon + count).
- **Mobile**: logo left, search + cart + "Open menu" (hamburger) right; menu items hidden; a slide-in drawer opens on click.

### Mega menu (Shop / Trending)
- `ul.c-navigation__expandable-menu`: absolute, `top: 76px`, `left: 0`, full width, bg white, height 522px, `display: none` → `flex` on open; closed by clicking the toggle again or any outside area. No hover-trigger.
- Padding `0 0 0 40px`; columns `.c-navigation__column` (padding `24px 0 48px 48px`, margin-right 36px, width ≈257px):
  - Column header: 14px/400 uppercase-ish label (e.g. "Featured", "Drinkware", "Shop by Color", "Accessories").
  - Link rows `li` margin-bottom 20px; links 14px/400/19.6px, color `#101010`.
- Shop columns: **Featured** (New Arrivals, Best Sellers, Quenchers, Leakproof, IceFlow Collection, Customize, Buy with Prime logo image) · **Drinkware** (Tumblers, Water Bottles, Coffee & Tea, Barware, Vacuum Bottles, Shop All Drinkware, Lunchboxes, Coolers & Jugs, Camp Cookware) · **Shop by Color** (Pink, Black, Blue, Grey, Green, White, Red, Purple, Yellow, Brown, then size rows 14/16/20/24/30/40 OZ) · **Accessories** (Bags/Backpacks & Totes, Water Bottle Holders, Straws & Toppers, Lids, Shop All Accessories, Soccer, Golf, Basketball, Camping & Hiking).
- Promo: right column with image card ("Fill, toss, go" → `/collections/leakproof-water-bottles`), image ≈390×358.
- Trending menu: promo images `071426_HP_ShopTile_Wildflower...jpg`, `ID-me_Trending_Tile...jpg`, `072826-SiteNav-Trending-2.jpg`, `080426-Site_Nav-Trending-Tempo.jpg`, `080426-Site_Nav-Trending-BTS_Hydration.jpg` (two sizes each: width=512/670).

## 3. Hero 1 — "Show up like you"

- `hero-module.c-hero`: width 100%, height 569.9px (desktop) / 494.8px (mobile), `position: relative`, bg image.
- **Desktop image**: `080426-HP-Hero-D.jpg` (dark green water theme, text overlay top-left). **Mobile image**: `080426-HP-Hero-M.jpg` (375.2×494.8).
- Text (white, `text-align: left`):
  - h2 "Show up like you": 64px/500/62.72px/-1.92px, margin `48px 0 0 48px`, maxWidth 100%.
  - h3 "Leakproof. Drama proof. All day proof.": 26px/400/28.6px/-0.52px, margin `16px 0 0 48px`.
  - CTA "Shop Now" → `/collections/leakproof-water-bottles`: white bg, text `#101010`, margin `32px 0 0 48px` (mobile: `24px 0 0 24px`).
- Mobile: h2 36px/500/35.28px/-1.08px margin `24px 0 0 24px` maxWidth 74%; h3 20px/400 margin `8px 0 0 24px`; CTA margin `24px 0 0 24px`.

## 4. Teaser 1 — "Leakproof legends" (carousel)

- `.c-teaser`: bg white, padding `24px 0 24px 48px` (mobile: `24px 0 24px 24px`, flex column), height 522.2px (mobile 461.6px).
- **Desktop layout**: flex row — title column (vertical text) + carousel. Title 36px/500/39.6px/-0.72px, color #000.
- **Mobile**: title above carousel, 26px/500/28.6px/-0.52px.
- Carousel: 4 slides, each card: 321×442px (desktop) / 210.4×289.8px (mobile), border-radius 8px, overflow hidden, color `#101010`.
  - Card image (portrait 1440×1983, ratio 1:1.377): `080426-HP-Discover-1.jpg` (Quencher ProTour), `080426-HP-Discover-2.jpg` (Flowstate™ Spring Bottle), `080426-HP-Discover-3.jpg` (Vitalize™ Tempo Bottle), `080426-HP-Discover-2-CA.jpg` (Wellspring Bottle).
  - Caption below image: 20px/400/22px/-0.4px, margin-top 8px.
  - Card links: product pages (variant URLs).
- Nav arrows (desktop only, hidden on mobile): 36×36px absolute circles, opacity 0.35 disabled / 1 enabled, chevron icons, vertically centered, prev `margin-top: -22px`.
- Click-driven (no autoplay). Slides-per-view ≈ 2.9 desktop (partial peek), 1.75 mobile.

## 5. Hero 2 — ID.me "Extra credit: 25% off"

- Light image bg (`080426-HP-Hero_2-D_ea00e179-bbf0-4c1c-822c-2924d8597238.jpg` desktop 1280×409, `080426-HP-Hero_2-M.jpg` mobile), height 455.3px desktop / 330.6px mobile.
- Text block **black** on light bg, flex column `justify-content: center`, content max-width 41% (h3):
  - ID.me logo (left-aligned, `c-logo`), `IDme_Logo.png`.
  - h2 "Extra credit: 25% off": 64px/700/62.72px/-1.92px, #000, margin `24px 0 0 48px` (mobile: 36px/700, margin `8px 0 0 24px`).
  - h3 "Teachers and students do the work every day. This is our thanks. Verify with ID.me for 25% off at checkout, through 8/17.": 26px/400/28.6px, maxWidth 41%, margin `8px 0 0 48px` (mobile: 20px/400, 4 lines, margin `8px 0 0 24px`).
  - CTA "Shop Now" → `/collections/id-me`: bg `#101010`, white text, margin `32px 0 0 48px` (mobile `16px 0 0 24px`).

## 6. Lifestyle tiles (2×2)

- `.c-lifestyle`: padding 24px, width 100%. 4 tiles in 2×2 grid (676.4×676.4px image tiles + 676.4×93.6px caption tiles interleaved: img, caption, img, caption).
- Images (1320×1320): `080426-HP-Lifestyle_Tile-Vitalize_Backpack.jpg`, `080426-HP-Lifestyle_Tile-Vitalize_Shaker.jpg`.
- Captions: 36px/500/39.6px/-0.72px, color `#101010`: "Vitalize™ Backpack — Function first. Style included." / "Vitalize™ Shaker Bottle — From pour to power-through." (title 36px/500 + subtitle; whole tile links to product pages).
- Mobile: stacked single column.

## 7. Hero 3 — "Show up ready"

- Dark image bg (`072826-HP-Hero-D.jpg` desktop 1280×512 / `072826-HP-Hero-M.jpg` mobile), height 569.9px desktop / 494.8px mobile. Same structure as Hero 1 (white text, 48px/24px paddings, CTA white bg + `#101010` text, margin-bottom 48px on desktop CTA).
- h2 "Show up ready" 64px/500; h3 "Pack what you need. Keep it fresh. Enjoy when you're ready." 26px/400; CTA → `/collections/lunch-boxes`.

## 8. Teaser 2 — "Shop summer essentials" (carousel)

- Same component as Teaser 1. Title 36px/500 desktop / 26px/400 mobile ("Shop summer essentials" — note **400 weight on mobile**, per computed styles).
- 3 cards: `070726_HP_BTS_Carousel2-Prod1_DT.png` (Lifted Spirits™ Steel Cooler), `Prod2` (Adventure Fast Flow Water Jug), `Prod3` (Flowstate™ Spring Bottle). Natural 1439×1983.

## 9. Footer (`footer.c-footer`)

- bg `#101010`, white text, **desktop**: flex row, `justify-content: space-between`, gap 90px, padding 48px, width 100%.
- **Left block** (`c-footer__main`, width 517px, flex column space-between):
  - h2 "Be the first to know" 36px/700/40px/-0.72px + "Hear about new arrivals, sales, and other news."
  - SMS line: "To receive SMS updates, text **STANLEY1913** to **22936**" 20px/400; fine print 12px/300/16.8px "Msg & data rates may apply…" + Privacy Policy / Terms links (12px/300, padding 4px).
  - Social icons: TikTok, Instagram, Facebook, YouTube (24px, white SVGs).
- **Right**: "Need Help?" (36px/700) + 3 buttons: "Track My Order" / "Start A Return" / "Contact Us" — white bg, `#101010` text, 16px/700, padding 14px 32px, radius 4px, border 1.6px white, gap 24px vertical.
- **Columns** (Company / Support / Legal): h3 23px/700/25.3px, margin-bottom 24px; link rows 14px/400 white with 4px padding. Link lists per the a11y snapshot (full URL list in `docs/research/PAGE_TOPOLOGY.md` sibling — see snapshot yml `page-2026-08-08T07-02-00-738Z.yml`).
- **Bottom**: "©PMI WW Brands, LLC, All Rights Reserved" + location button "Select Location and Language USA".
- **Mobile**: flex column, padding 32px 16px, h2 26px/700; the three columns become **accordions** (`.c-accordion`): title 20px/400, chevron icon 16px, content hidden by default (`display: none`), opens on tap.

## 10. Cookie dialog (OneTrust)

- Overlay `dialog` "We value your privacy": body text + Privacy Policy link, buttons **Accept All Cookies** / **Decline Non-Essential Cookies** / **Manage Cookies**. Modal overlay on white, centered card. (OneTrust styling: 14px text, rounded 8px buttons, close ×.)

---

## Assets to download (Shopify CDN)

`https://www.stanley1913.com/cdn/shop/files/<name>?v=<v>&width=<w>` — desktop + mobile variants (M suffix = mobile):

| File | Use |
|---|---|
| `080426-HP-Hero-D.jpg` / `-M.jpg` | Hero 1 |
| `080426-HP-Hero_2-D_ea00e179-bbf0-4c1c-822c-2924d8597238.jpg` / `-M.jpg` | Hero 2 |
| `072826-HP-Hero-D.jpg` / `-M.jpg` | Hero 3 |
| `080426-HP-Discover-1/2/3.jpg`, `080426-HP-Discover-2-CA.jpg` | Teaser 1 cards |
| `070726_HP_BTS_Carousel2-Prod1/2/3_DT.png` | Teaser 2 cards |
| `080426-HP-Lifestyle_Tile-Vitalize_Backpack.jpg`, `-Vitalize_Shaker.jpg` | Lifestyle tiles |
| `IDme_Logo.png` | Hero 2 logo |
| `Group.svg` | Buy with Prime logo (mega menu) |
| `071426_HP_ShopTile_Wildflower_*.jpg`, `ID-me_Trending_Tile_*.jpg`, `072826-SiteNav-Trending-2.jpg`, `080426-Site_Nav-Trending-*.jpg` | Mega menu promos |
| `StanleyFavorit-*.woff2` (300/400/500/700) | Font |
| favicon + logo SVGs (sprite) | Header/brand |

Icons: single sprite with 107 `<symbol>`s already extracted to `docs/research/sprite.html` (chevron-down/up/left/right, close ×, check, search, account, hamburger, bag, social-facebook/instagram/youtube/tiktok, play, pause, crown, logo-full, logo-bear, logo-stanley-club, shop-account, etc.).
