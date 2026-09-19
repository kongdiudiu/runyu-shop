import Link from "next/link";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  tag: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/imgs/7faf063307c629c2f5db3891df2bf032.jpg",
    alt: "Stanley Quencher Classic 40oz",
    title: "Classic Quencher 40oz",
    tag: "Best Seller",
  },
  {
    id: "g2",
    src: "/imgs/a148ac173bbeb471e41f0156886a56d5.jpg",
    alt: "Stanley IceFlow Tumbler",
    title: "IceFlow™ Flip Straw",
    tag: "Trending",
  },
  {
    id: "g3",
    src: "/imgs/335fe37f37ee2d8770f9db28dbbefd82.jpg",
    alt: "Stanley Straw & Lid Accessories",
    title: "Replacement Straw Sets",
    tag: "Accessories",
  },
  {
    id: "g4",
    src: "/imgs/63bde904cc9d194b489ea2b25f517a72.jpg",
    alt: "Stanley Carry Strap Accent",
    title: "All-Day Carry Strap",
    tag: "Gear",
  },
  {
    id: "g5",
    src: "/imgs/7e4470edb6d6075c2c84fbbfea421ef5.jpg",
    alt: "Stanley Tumbler Boot Sleeve",
    title: "Silicone Protective Boot",
    tag: "Accessories",
  },
  {
    id: "g6",
    src: "/imgs/b6516fb2e15b9c1283ffa48f1c8609f5.jpg",
    alt: "Stanley Travel Mug Lid",
    title: "NeverLeak™ Lid Assembly",
    tag: "Parts",
  },
  {
    id: "g7",
    src: "/imgs/d785e46d5f112b476d955f5c1bda9a02.jpg",
    alt: "Stanley Camp Mug",
    title: "Classic Camp Mug 12oz",
    tag: "Outdoor",
  },
  {
    id: "g8",
    src: "/imgs/ee94a41785bbedad651f9600b1c0abcc.jpg",
    alt: "Stanley Food Jar",
    title: "Stay-Chill Vacuum Jar",
    tag: "Cookware",
  },
  {
    id: "g9",
    src: "/imgs/ff0f1f85587d31df25d36d7462943153.jpg",
    alt: "Stanley Straw Cover Charm",
    title: "Quencher Straw Cover",
    tag: "New Arrival",
  },
  {
    id: "g10",
    src: "/imgs/64a4cdd8e4ac950bf1ea1909407d8f2a.jpg",
    alt: "Stanley Hydration Lifestyle",
    title: "Hydration On The Go",
    tag: "Lifestyle",
  },
  {
    id: "g11",
    src: "/imgs/fa452d934c35dcbcf8e40da5dd76ad19.jpg",
    alt: "Stanley Summer Outdoor Edition",
    title: "Summer Outdoor Vibes",
    tag: "Community",
  },
  {
    id: "g12",
    src: "/imgs/2f0287f72ff18cc33fd0fff9f2c071c1.jpg",
    alt: "Stanley Daily Hydration",
    title: "Daily Hydration Essential",
    tag: "Daily Use",
  },
  {
    id: "g13",
    src: "/imgs/839f982d61699194032325bd9c8671dc.jpg",
    alt: "Stanley Travel Companion",
    title: "Travel Companion 30oz",
    tag: "Travel",
  },
  {
    id: "g14",
    src: "/imgs/a415cfab6cc2c35e424faa614d08515c.jpg",
    alt: "Stanley Active Lifestyle",
    title: "Active Fitness Series",
    tag: "Fitness",
  },
  {
    id: "g15",
    src: "/imgs/324bcdb3258460fe98f9e13450152d7f.jpg",
    alt: "Stanley Minimalist Tumbler",
    title: "Pure Matte Edition",
    tag: "Limited",
  },
  {
    id: "g16",
    src: "/imgs/3e6d5a0409a4ff1f6db36a8265d6980d.jpg",
    alt: "Stanley Soft Matte Finish",
    title: "Soft Matte Finish 40oz",
    tag: "Popular",
  },
  {
    id: "g17",
    src: "/imgs/4bf07e941d8e225c1015138945c0b5df.jpg",
    alt: "Stanley Trail Series",
    title: "Titanium Trail Bottle",
    tag: "Ultralight",
  },
  {
    id: "g18",
    src: "/imgs/6449c5ede920ed89367978a04367de37.jpg",
    alt: "Stanley Coldflow Straw",
    title: "Coldflow Cap Assembly",
    tag: "Parts",
  },
  {
    id: "g19",
    src: "/imgs/b48b84ba720aff1f829bae89e891a42c.jpg",
    alt: "Stanley Special Edition",
    title: "Wildflower Special Edition",
    tag: "Exclusive",
  },
  {
    id: "g20",
    src: "/imgs/c4855c8f783f2049aa25f08e9b259093.jpg",
    alt: "Stanley Replacement Gasket",
    title: "Silicone Seal Gasket Pack",
    tag: "Parts",
  },
  {
    id: "g21",
    src: "/imgs/dfa10c6b67c40f21a173c8d699222667.jpg",
    alt: "Stanley Cold-To-Go Jug",
    title: "Adventure Water Jug 1G",
    tag: "Camp",
  },
  {
    id: "g22",
    src: "/imgs/f5337b82cba229579013b1e1edadf899.jpg",
    alt: "Stanley BTS Collection",
    title: "Back To Campus Hydration",
    tag: "Featured",
  },
  {
    id: "g23",
    src: "/imgs/59e2c858424ea0121756b6bab761062a.jpg",
    alt: "Stanley Daily Stories",
    title: "Built For Life™ Stories",
    tag: "Story",
  },
  {
    id: "g24",
    src: "/imgs/5cff78e7630e2200ae9e944d92f75a3f.jpg",
    alt: "Stanley Sunset Chill",
    title: "Golden Hour Hydration",
    tag: "Community",
  },
];

export function GalleryGrid() {
  return (
    <section aria-label="Built For Life Community Gallery" className="bg-[#f9f9f9] py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="text-[14px] font-bold uppercase tracking-widest text-[#101010]/60">
            #BUILTFORLIFE COMMUNITY
          </span>
          <h2 className="mt-2 text-[32px] md:text-[48px] font-medium tracking-tight text-[#101010]">
            Built For Life™ Gallery
          </h2>
          <p className="mt-2 text-[16px] text-zinc-600 max-w-xl mx-auto">
            Explore authentic moments, gear setups, and accessories shared by our global outdoor & hydration community.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg break-inside-avoid"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4 text-white">
                <span className="inline-block self-start rounded bg-white/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md">
                  {item.tag}
                </span>
                <h3 className="mt-1 text-[16px] font-bold leading-tight">{item.title}</h3>
                <Link
                  href="/collections/shop-all"
                  className="mt-2 text-[13px] font-medium underline underline-offset-4 hover:text-zinc-200"
                >
                  Shop This Look →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
