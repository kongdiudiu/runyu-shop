import Link from "next/link";
import type { LifestyleTile as LifestyleTileData } from "@/types";

const TILES: LifestyleTileData[] = [
  {
    image: {
      src: "/images/080426-HP-Lifestyle_Tile-Vitalize_Backpack.jpg",
      alt: "Vitalize Backpack lifestyle tile",
    },
    title: "Vitalize™ Backpack",
    subtitle: "Function first. Style included.",
    href: "/products/vitalize-macro-method-backpack-30-9-qt",
  },
  {
    image: {
      src: "/images/080426-HP-Lifestyle_Tile-Vitalize_Shaker.jpg",
      alt: "Vitalize Shaker Bottle lifestyle tile",
    },
    title: "Vitalize™ Shaker Bottle",
    subtitle: "From pour to power-through.",
    href: "/products/vitalize-shaker-bottle-20-oz",
  },
];

const CAPTION_TEXT =
  "text-[36px] font-medium leading-[39.6px] tracking-[-0.02em] text-[#101010]";

/** 2×2 grid (image + caption interleaved) on desktop, stacked on mobile. */
export function LifestyleTiles() {
  return (
    <section aria-label="Vitalize collection" className="bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {TILES.map((tile) => (
          <div key={tile.href} className="contents">
            <Link href={tile.href} aria-label={tile.title} className="block">
              <img
                src={tile.image.src}
                alt={tile.image.alt}
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href={tile.href}
              aria-label={`${tile.title} — ${tile.subtitle}`}
              className="flex flex-col justify-center p-4 md:p-0"
            >
              <span className={CAPTION_TEXT}>{tile.title}</span>
              <span className={CAPTION_TEXT}>{tile.subtitle}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
