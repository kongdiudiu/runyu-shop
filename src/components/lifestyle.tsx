import Link from "next/link";
import type { LifestyleTile as LifestyleTileData } from "@/types";

const TILES: LifestyleTileData[] = [
  {
    image: {
      src: "/imgs/1615094ddfd77b2f3f0d79ed3cf0c340.jpg",
      alt: "Vitalize Backpack lifestyle tile",
    },
    title: "Vitalize™ Backpack",
    subtitle: "Function first. Style included.",
    href: "/products/vitalize-macro-method-backpack-30-9-qt",
  },
  {
    image: {
      src: "/imgs/61eb5efbcd107b74747c42c27f856bc2.jpg",
      alt: "Vitalize Shaker Bottle lifestyle tile",
    },
    title: "Vitalize™ Shaker Bottle",
    subtitle: "From pour to power-through.",
    href: "/products/vitalize-shaker-bottle-20-oz",
  },
  {
    image: {
      src: "/imgs/2f8e64800abe217769dd79335d273017.jpg",
      alt: "Stanley All-Day Slim Bottle lifestyle",
    },
    title: "All-Day Slim Bottle",
    subtitle: "Fits everywhere. Hydrates endlessly.",
    href: "/products/all-day-slim-bottle-20-oz",
  },
  {
    image: {
      src: "/imgs/7edce3aa3766de30e64f1d2ef6d9c547.jpg",
      alt: "Stanley Outdoor Chill lifestyle",
    },
    title: "Adventure Outdoor Series",
    subtitle: "Cold drinks till the sun goes down.",
    href: "/products/adventure-series-cooler",
  },
];

const CAPTION_TEXT =
  "text-[36px] font-medium leading-[39.6px] tracking-[-0.02em] text-[#101010]";

/** 4-column compact grid layout with refined card styling */
export function LifestyleTiles() {
  return (
    <section aria-label="Vitalize collection" className="bg-white py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <span className="text-[14px] font-bold uppercase tracking-widest text-[#101010]/60">
            LIFESTYLE & STORIES
          </span>
          <h2 className="text-[28px] md:text-[36px] font-medium tracking-tight text-[#101010]">
            Everyday Hydration Stories
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TILES.map((tile) => (
            <div
              key={tile.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-xs transition-all duration-300 hover:shadow-md"
            >
              <Link href={tile.href} aria-label={tile.title} className="block aspect-[4/3] w-full overflow-hidden">
                <img
                  src={tile.image.src}
                  alt={tile.image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <Link
                href={tile.href}
                aria-label={`${tile.title} — ${tile.subtitle}`}
                className="flex flex-col justify-between p-4 flex-1 bg-zinc-50/50"
              >
                <div>
                  <h3 className="text-[18px] font-bold tracking-tight text-[#101010]">{tile.title}</h3>
                  <p className="mt-1 text-[14px] text-zinc-500 line-clamp-2">{tile.subtitle}</p>
                </div>
                <span className="mt-3 text-[13px] font-medium text-[#101010] underline underline-offset-4 group-hover:text-zinc-600">
                  Shop Collection →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
