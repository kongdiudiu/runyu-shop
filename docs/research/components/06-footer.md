# Spec: Footer + Cookie Dialog

> Screenshots: `docs/design-references/fullpage-desktop-1440.png` (bottom), `fullpage-mobile-390.png` (bottom). Full link list: `docs/research/PAGE_TOPOLOGY.md` §9 + a11y snapshot.

## Components

- `src/components/footer.tsx` — `Footer` (client component: mobile accordions).
- `src/components/cookie-dialog.tsx` — `CookieDialog` (client; mounted once in page).

## Measured styles

### Desktop
- Footer: bg `#101010`, color white, `padding: 48px`, flex **row**, `justify-content: space-between`, `gap: 90px`.
- Left block (width 517px, flex column, space-between):
  - h2 "Be the first to know": 36px/700/40px, `letter-spacing: -0.02em`
  - p "Hear about new arrivals, sales, and other news." (14px/400)
  - SMS line: "To receive SMS updates, text **STANLEY1913** to **22936**" — 20px/400/22px (`<strong>` for the numbers)
  - Fine print: 12px/300/16.8px, links (Privacy Policy → `/policies/privacy-policy`, Terms → `/pages/mobile-messaging-terms`) padding 4px
  - Socials: 4 round icon links, 24px (`social-facebook`, `social-instagram`, `social-youtube`, `social-tiktok` sprite icons) → tiktok.com/@stanley1913, instagram.com/stanley1913_brand, facebook.com/Stanley1913, youtube.com/@Stanley1913
- Right block "Need Help?": h2 36px/700/39.6px + 3 buttons (stacked, gap 24px): Track My Order → `/pages/order-tracking`, Start A Return → `/apps/returns`, Contact Us → `/pages/contact` — white bg, `#101010` text, 16px/700, padding `14px 32px`, radius 4px, border `1.6px solid #fff`, flex center.
- Columns (Company / Support / Legal): h3 23px/700/25.3px, `letter-spacing: -0.02em`, `margin-bottom: 24px`; links 14px/400 white, padding 4px, `li` spacing ≈10px.
  - **Company**: About Stanley 1913, Careers, Newsroom, Stanley 1913 Creators Fund, Sustainability, Take Back Program, Blogs, Affiliate Program, Stanley 1913 Club Loyalty Program, Site Map
  - **Support**: FAQ, Contact Us, Returns, Stainless-Steel Warranty Policy, Product Recalls, Soft Goods Warranty Policy, Find a Retail Store, Order Tracking
  - **Legal**: Terms of Sale [Updated], Terms of Service [Updated], Privacy Policy [Updated], Your Privacy Choices, Responsible Supply Chain Statement, Patent Information, "Do Not Sell/Share - Cookie Preferences" (button, opens cookie dialog)
- Bottom row: "©PMI WW Brands, LLC, All Rights Reserved" + location button "Select Location and Language USA" (with location icon).

### Mobile (<768px)
- Footer: flex **column**, `padding: 32px 16px`, h2 26px/700/28.6px.
- Columns become **accordions** (`.c-accordion`): title row 20px/400, `justify-content: space-between`, chevron-down icon 16px; content `display: none` until opened (all collapsed by default); open rotates chevron.
- "Need Help?" block stacked above accordions (margin-bottom 40px).

## Cookie dialog

- Overlay (fixed inset-0, bg `rgba(16,16,16,0.6)`), centered white card, radius 8px, max-w-md, padding 24-32px:
  - h2 "We value your privacy" (24px/700)
  - Body 14px: "PMI WW Brands, LLC and/or our affiliates, as well as certain third parties (including our social media, advertising, and analytics partners), use cookies, pixels, tags, and other tracking technologies to enable site functionality and for business purposes, including to enhance user experience, provide personalized content, analyze performance and traffic on our website, and/or assist in our marketing efforts, such as to display personalized content and ads. Learn more in our Privacy Policy."
  - Buttons: **Accept All Cookies** (primary `#101010` bg, white text), **Decline Non-Essential Cookies** (outline `#101010`), **Manage Cookies** (ghost link-style). Stacked column on mobile, row on desktop.
- State: `useState(true)` in `CookieDialog`; any button closes it. No persistence needed (page reload shows it again — acceptable for mock).
- A11y: `role="dialog" aria-modal`, close × button.

## Notes
- All footer links mock/real external URLs from data arrays.
- "Do Not Sell/Share" button triggers the dialog (lift state via context or simple window event; simplest: `onClick` dispatches custom event `open-cookie-dialog`, dialog listens).
