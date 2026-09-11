import type { LinkItem, MegaMenuColumn } from "@/types";

const link = (label: string, href: string): LinkItem => ({ label, href });

export interface ShopColumn extends MegaMenuColumn {
  logoImage?: { src: string; alt: string };
}

export const shopColumns: ShopColumn[] = [
  {
    title: "Featured",
    links: [
      link("New Arrivals", "/collections/new-arrivals"),
      link("Best Sellers", "/collections/best-sellers"),
      link("Quenchers", "/collections/quenchers"),
      link("Leakproof", "/collections/leakproof-water-bottles"),
      link("IceFlow Collection", "/collections/iceflow"),
      link("Customize", "/collections/stanley-create-custom"),
    ],
    logoImage: { src: "/images/buy-with-prime.svg", alt: "Buy with Prime" },
  },
  {
    title: "Drinkware",
    links: [
      link("Tumblers", "/collections/tumblers"),
      link("Water Bottles", "/collections/water-bottles"),
      link("Coffee & Tea", "/collections/coffee-tea"),
      link("Barware", "/collections/barware"),
      link("Vacuum Bottles", "/collections/vacuum-bottles"),
      link("Shop All Drinkware", "/collections/drinkware"),
      link("Lunchboxes", "/collections/lunchboxes"),
      link("Coolers & Jugs", "/collections/coolers-jugs"),
      link("Camp Cookware", "/collections/camp-cookware"),
    ],
  },
  {
    title: "Shop by Color",
    links: [
      link("Pink", "/collections/pink"),
      link("Black", "/collections/black"),
      link("Blue", "/collections/blue"),
      link("Grey", "/collections/grey"),
      link("Green", "/collections/green"),
      link("White", "/collections/white"),
      link("Red", "/collections/red"),
      link("Purple", "/collections/purple"),
      link("Yellow", "/collections/yellow"),
      link("Brown", "/collections/brown"),
      link("14 OZ", "/collections/14-oz"),
      link("16 OZ", "/collections/16-oz"),
      link("20 OZ", "/collections/20-oz"),
      link("24 OZ", "/collections/24-oz"),
      link("30 OZ", "/collections/30-oz"),
      link("40 OZ", "/collections/40-oz"),
    ],
  },
  {
    title: "Accessories",
    links: [
      link("Bags, Backpacks, & Totes", "/collections/bags-backpacks-totes"),
      link("Water Bottle Holders", "/collections/water-bottle-holders"),
      link("Straws & Toppers", "/collections/straws-toppers"),
      link("Lids", "/collections/lids"),
      link("Shop All Accessories", "/collections/accessories"),
      link("Soccer", "/collections/soccer"),
      link("Golf", "/collections/golf"),
      link("Basketball", "/collections/basketball"),
      link("Camping & Hiking", "/collections/camping-hiking"),
    ],
  },
];

export interface TrendingPromo {
  src: string;
  alt: string;
  href: string;
}

export const trendingPromos: TrendingPromo[] = [
  { src: "/images/ID-me_Trending_Tile.jpg", alt: "ID.me offer", href: "/pages/id-me" },
  { src: "/images/072826-SiteNav-Trending-2.jpg", alt: "Trending new arrivals", href: "/collections/new-arrivals" },
  { src: "/images/080426-Site_Nav-Trending-Tempo.jpg", alt: "Tempo collection", href: "/collections/tempo" },
  {
    src: "/images/080426-Site_Nav-Trending-BTS_Hydration.jpg",
    alt: "Back to school hydration",
    href: "/collections/quenchers",
  },
];

export const shopPromo = {
  src: "/images/071426_HP_ShopTile_Wildflower.jpg",
  alt: "Leakproof water bottles",
  caption: "Fill, toss, go",
  href: "/collections/leakproof-water-bottles",
};

export interface DrawerLink {
  label: string;
  href: string;
}

export interface DrawerGroup {
  label: string;
  links: DrawerLink[];
}

const flattenLinks = (columns: ShopColumn[]): DrawerLink[] =>
  columns.flatMap((column) => column.links);

export const drawerGroups: DrawerGroup[] = [
  { label: "Shop", links: flattenLinks(shopColumns) },
  { label: "Trending", links: trendingPromos.map(({ alt, href }) => ({ label: alt, href })) },
];

export const drawerUtilityLinks: DrawerLink[] = [
  link("Join the Club", "/pages/rewards"),
  link("Support", "/pages/contact-help-support"),
];
