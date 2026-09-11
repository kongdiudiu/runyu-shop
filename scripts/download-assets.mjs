/**
 * Download all assets from the Stanley 1913 Shopify CDN into public/.
 * Usage: node scripts/download-assets.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const CDN_FILES = "https://www.stanley1913.com/cdn/shop/files/";
const CDN_ASSETS = "https://www.stanley1913.com/cdn/shop/t/843/assets/";

// [remote path, local dest]
const manifest = [
  // Fonts (woff2 only)
  [`${CDN_ASSETS}StanleyFavorit-Light.woff2?v=55642951773220483061777928209`, "public/fonts/StanleyFavorit-Light.woff2"],
  [`${CDN_ASSETS}StanleyFavorit-Regular.woff2?v=184370546885339399501777928211`, "public/fonts/StanleyFavorit-Regular.woff2"],
  [`${CDN_ASSETS}StanleyFavorit-Medium.woff2?v=138703090261021945971777928209`, "public/fonts/StanleyFavorit-Medium.woff2"],
  [`${CDN_ASSETS}StanleyFavorit-Bold.woff2?v=167259136676092786701777928207`, "public/fonts/StanleyFavorit-Bold.woff2"],

  // Heroes (desktop + mobile)
  [`${CDN_FILES}080426-HP-Hero-D.jpg?width=1920`, "public/images/080426-HP-Hero-D.jpg"],
  [`${CDN_FILES}080426-HP-Hero-M.jpg?width=1920`, "public/images/080426-HP-Hero-M.jpg"],
  [`${CDN_FILES}080426-HP-Hero_2-D_ea00e179-bbf0-4c1c-822c-2924d8597238.jpg?width=1920`, "public/images/080426-HP-Hero_2-D.jpg"],
  [`${CDN_FILES}080426-HP-Hero_2-M.jpg?width=1920`, "public/images/080426-HP-Hero_2-M.jpg"],
  [`${CDN_FILES}072826-HP-Hero-D.jpg?width=1920`, "public/images/072826-HP-Hero-D.jpg"],
  [`${CDN_FILES}072826-HP-Hero-M.jpg?width=1920`, "public/images/072826-HP-Hero-M.jpg"],

  // Teaser 1 cards
  [`${CDN_FILES}080426-HP-Discover-1.jpg?width=1920`, "public/images/080426-HP-Discover-1.jpg"],
  [`${CDN_FILES}080426-HP-Discover-2.jpg?width=1920`, "public/images/080426-HP-Discover-2.jpg"],
  [`${CDN_FILES}080426-HP-Discover-3.jpg?width=1920`, "public/images/080426-HP-Discover-3.jpg"],
  [`${CDN_FILES}080426-HP-Discover-2-CA.jpg?width=1920`, "public/images/080426-HP-Discover-2-CA.jpg"],

  // Teaser 2 cards
  [`${CDN_FILES}070726_HP_BTS_Carousel2-Prod1_DT.png?width=1920`, "public/images/070726_HP_BTS_Carousel2-Prod1_DT.png"],
  [`${CDN_FILES}070726_HP_BTS_Carousel2-Prod2_DT.png?width=1920`, "public/images/070726_HP_BTS_Carousel2-Prod2_DT.png"],
  [`${CDN_FILES}070726_HP_BTS_Carousel2-Prod3_DT.png?width=1920`, "public/images/070726_HP_BTS_Carousel2-Prod3_DT.png"],

  // Lifestyle tiles
  [`${CDN_FILES}080426-HP-Lifestyle_Tile-Vitalize_Backpack.jpg?width=1920`, "public/images/080426-HP-Lifestyle_Tile-Vitalize_Backpack.jpg"],
  [`${CDN_FILES}080426-HP-Lifestyle_Tile-Vitalize_Shaker.jpg?width=1920`, "public/images/080426-HP-Lifestyle_Tile-Vitalize_Shaker.jpg"],

  // Logos
  [`${CDN_FILES}IDme_Logo.png?width=1920`, "public/images/IDme_Logo.png"],
  [`${CDN_FILES}Group.svg?v=1761690009`, "public/images/buy-with-prime.svg"],
  [`${CDN_FILES}flag-usa.jpg?width=64`, "public/images/flag-usa.jpg"],

  // Mega menu promo tiles
  [`${CDN_FILES}071426_HP_ShopTile_Wildflower_8b3fe670-f143-447d-984c-d7fbedce1e51.jpg?width=1024`, "public/images/071426_HP_ShopTile_Wildflower.jpg"],
  [`${CDN_FILES}ID-me_Trending_Tile_1024x940_807d7133-f4e1-41fe-b69d-611f5f85123a.jpg?width=1024`, "public/images/ID-me_Trending_Tile.jpg"],
  [`${CDN_FILES}072826-SiteNav-Trending-2.jpg?width=1024`, "public/images/072826-SiteNav-Trending-2.jpg"],
  [`${CDN_FILES}080426-Site_Nav-Trending-Tempo.jpg?width=1024`, "public/images/080426-Site_Nav-Trending-Tempo.jpg"],
  [`${CDN_FILES}080426-Site_Nav-Trending-BTS_Hydration.jpg?width=1024`, "public/images/080426-Site_Nav-Trending-BTS_Hydration.jpg"],

  // Favicon
  [`${CDN_FILES}favicon.png?crop=center&height=64&width=64`, "public/seo/favicon.png"],
];

const results = { ok: 0, fail: [] };
for (const [url, dest] of manifest) {
  const out = join(root, dest);
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    results.ok++;
    console.log(`ok   ${dest} (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) {
    results.fail.push([url, e.message]);
    console.error(`FAIL ${url} — ${e.message}`);
  }
}
console.log(`\n${results.ok}/${manifest.length} downloaded. Failures:`);
for (const [url, msg] of results.fail) console.error(`  ${url} — ${msg}`);
process.exit(results.fail.length ? 1 : 0);
