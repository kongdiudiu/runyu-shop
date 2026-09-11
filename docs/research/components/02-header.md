# Spec: Header (Nav + Mega Menu + Mobile Drawer)

> Screenshots: `docs/design-references/header-dropdown-shop.png`, `header-shop-megamenu.png`, `fullpage-desktop-1440.png`.

## Component

- `src/components/header.tsx` — `Header` (client component: mega menu + drawer state).
- Data colocated in `src/components/header-data.ts` (menu items + mega columns).

## Measured styles (desktop)

| Element | Value |
|---|---|
| Container | white bg, height 80.4px, `padding: 0 48px`, flex row, `align-items: center`, `justify-content: space-between`, `position: relative` (NOT sticky) |
| Nav links | 14px/400/19.6px, color `#101010`, gap between items ~24px (visual) |
| Logo | left, height ~40px (`logo-full` sprite icon) |
| Search | right: input (placeholder "What are you looking for?", `#E9E9E9` bg when focused — site shows subtle focus) + submit button w/ search icon |
| Cart | bag icon + count badge, right of search |
| Mobile | height 84px, padding `0 20px`; menu hidden; right: search icon, cart, hamburger |

## Desktop structure

```
<header>
  <div class="flex h-20 items-center justify-between px-12">
    <a href="/"><Icon logo-full height={40}/></a>
    <nav>
      <ul class="flex items-center gap-6">
        <li><button class="...">Shop <Icon chevron-down/></button></li>   ← opens mega menu
        <li><button class="...">Trending <Icon chevron-down/></button></li> ← opens mega menu (variant 2)
        <li><a href="/collections/stanley-create-custom">Customize</a></li>
        <li><a href="/collections/sale">Sale</a></li>
      </ul>
    </nav>
    <div class="flex items-center gap-4">
      <form> <input placeholder="What are you looking for?"/> <button><Icon search/></button> </form>
      <button aria-label="Cart"><Icon bag size={24}/></button>
    </div>
  </div>
  {open && <MegaMenu variant="shop" />}   ← absolute, top 76px, left 0, w-full
</header>
```

## Mega menu (Shop)

- `position: absolute; top: 76px; left: 0; width: 100%`, bg white, `height: 522px`, no shadow/border.
- **Click to open/close** (never hover). Click outside closes (overlay or document listener).
- Layout: `padding: 0 0 0 40px`, flex row, columns `.c-navigation__column`:
  - column: `padding: 24px 0 48px 48px; margin-right: 36px; width: 257px`
  - column title: 14px/400 uppercase label (site renders "Featured" etc. — render as given text)
  - links: `li { margin-bottom: 20px }`, link 14px/400/19.6px color `#101010`
- Columns data:
  - **Featured**: New Arrivals, Best Sellers, Quenchers, Leakproof, IceFlow Collection, Customize + Buy with Prime logo image (`/images/buy-with-prime.svg`)
  - **Drinkware**: Tumblers, Water Bottles, Coffee & Tea, Barware, Vacuum Bottles, Shop All Drinkware, Lunchboxes, Coolers & Jugs, Camp Cookware
  - **Shop by Color**: Pink, Black, Blue, Grey, Green, White, Red, Purple, Yellow, Brown (then size links: 14/16/20/24/30/40 OZ)
  - **Accessories**: Bags, Backpacks, & Totes; Water Bottle Holders; Straws & Toppers; Lids; Shop All Accessories; Soccer; Golf; Basketball; Camping & Hiking
- Promo column (right, for Shop): image card 390×358 (`/images/071426_HP_ShopTile_Wildflower.jpg`) linking to `/collections/leakproof-water-bottles` with caption "Fill, toss, go".
- Trending variant: same panel, but promo images (image tiles): `/images/ID-me_Trending_Tile.jpg`, `/images/072826-SiteNav-Trending-2.jpg`, `/images/080426-Site_Nav-Trending-Tempo.jpg`, `/images/080426-Site_Nav-Trending-BTS_Hydration.jpg` (each ~390×358, use in a right-side column).

## Mobile (<768px)

- Nav items hidden. Right side: search (icon button), cart, hamburger button.
- Drawer: click hamburger → full-height panel slides in from right (white, width 100%), `aria-expanded` on button:
  - Menu list: Shop (expandable submenu with same column links), Trending (expandable), Customize, Sale
  - Utility links at bottom: Join the Club, Sign In | Sign Up, Support, location selector
  - Close × button at top right. Backdrop (rgba #101010/40) closes on click.
- Accordion submenus: chevron rotates, panel expands (client state).

## Notes
- Keep `aria-label`s: nav "Menu", buttons "Open menu", "Cart".
- The mega menu pushes content down (it's in flow at top; absolute overlay is fine).
- Search + cart: non-functional (mock); search submit prevents default.
