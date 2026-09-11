import type { Teaser as TeaserData } from "@/types";

/**
 * Teaser carousel data. `mobileTitleClassName` carries the measured
 * per-slide override (teaser 2 renders its 26px mobile title at 400).
 * Lives in a server-safe module so the page can read it directly.
 */
export interface TeaserSlide extends TeaserData {
  mobileTitleClassName?: string;
}

export const TEASERS: TeaserSlide[] = [
  {
    id: "leakproof-legends",
    title: "Leakproof legends",
    href: "/collections/leakproof-water-bottles",
    cards: [
      {
        image: {
          src: "/images/080426-HP-Discover-1.jpg",
          alt: "Quencher ProTour bottle",
        },
        caption: "Quencher ProTour",
        href: "/products/quencher-protour",
      },
      {
        image: {
          src: "/images/080426-HP-Discover-2.jpg",
          alt: "Flowstate Spring Bottle",
        },
        caption: "Flowstate™ Spring Bottle",
        href: "/products/flowstate-spring-bottle",
      },
      {
        image: {
          src: "/images/080426-HP-Discover-3.jpg",
          alt: "Vitalize Tempo Bottle",
        },
        caption: "Vitalize™ Tempo Bottle",
        href: "/products/vitalize-tempo-bottle",
      },
      {
        image: {
          src: "/images/080426-HP-Discover-2-CA.jpg",
          alt: "Wellspring Bottle",
        },
        caption: "Wellspring Bottle",
        href: "/products/wellspring-bottle",
      },
    ],
  },
  {
    id: "shop-summer-essentials",
    title: "Shop summer essentials",
    href: "/collections/shop-all",
    mobileTitleClassName: "font-normal",
    cards: [
      {
        image: {
          src: "/images/070726_HP_BTS_Carousel2-Prod1_DT.png",
          alt: "Lifted Spirits Steel Cooler",
        },
        caption: "Lifted Spirits™ Steel Cooler",
        href: "/products/lifted-spirits-steel-cooler",
      },
      {
        image: {
          src: "/images/070726_HP_BTS_Carousel2-Prod2_DT.png",
          alt: "Adventure Fast Flow Water Jug",
        },
        caption: "Adventure Fast Flow Water Jug",
        href: "/products/adventure-fast-flow-water-jug",
      },
      {
        image: {
          src: "/images/070726_HP_BTS_Carousel2-Prod3_DT.png",
          alt: "Flowstate Spring Bottle",
        },
        caption: "Flowstate™ Spring Bottle",
        href: "/products/flowstate-spring-bottle",
      },
    ],
  },
];
