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
          src: "/imgs/0bc467ae4fc4e9883bdfe989b3a27515.jpg",
          alt: "Quencher ProTour bottle",
        },
        caption: "Quencher ProTour™ 40oz",
        href: "/products/quencher-protour",
      },
      {
        image: {
          src: "/imgs/337b2f7419f73d0db415e5e32e354c6d.jpg",
          alt: "Flowstate Spring Bottle",
        },
        caption: "Flowstate™ Spring Bottle",
        href: "/products/flowstate-spring-bottle",
      },
      {
        image: {
          src: "/imgs/512d40ccba2a3495038821f14105a041.jpg",
          alt: "Vitalize Tempo Bottle",
        },
        caption: "Vitalize™ Tempo Bottle",
        href: "/products/vitalize-tempo-bottle",
      },
      {
        image: {
          src: "/imgs/5875554f6f7bac7daeae036404c35236.jpg",
          alt: "Wellspring Bottle",
        },
        caption: "Wellspring™ Bottle",
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
          src: "/imgs/6c4f192f6723f143ea6b0e83445b4401.jpg",
          alt: "Lifted Spirits Steel Cooler",
        },
        caption: "Lifted Spirits™ Steel Cooler",
        href: "/products/lifted-spirits-steel-cooler",
      },
      {
        image: {
          src: "/imgs/8427414631f5a476769738c66cf0f9ef.jpg",
          alt: "Adventure Fast Flow Water Jug",
        },
        caption: "Adventure Fast Flow Water Jug",
        href: "/products/adventure-fast-flow-water-jug",
      },
      {
        image: {
          src: "/imgs/86dc9a1610905b5b21e31eb057cd1d46.jpg",
          alt: "Flowstate Spring Bottle",
        },
        caption: "Flowstate™ All-Day Slim Bottle",
        href: "/products/flowstate-spring-bottle",
      },
      {
        image: {
          src: "/imgs/9e9865ebcc42bff588c2c4845188b058.jpg",
          alt: "Stanley IceFlow Tumbler",
        },
        caption: "IceFlow™ Flip Straw Tumbler",
        href: "/products/iceflow-flip-straw",
      },
    ],
  },
  {
    id: "hydration-pro-series",
    title: "Hydration Pro Series",
    href: "/collections/pro-series",
    cards: [
      {
        image: {
          src: "/imgs/ab33c9a1ff6049e436c7f4f5d8fd7f1f.jpg",
          alt: "Pro Series Quencher Matte",
        },
        caption: "Quencher H2.O Matte Edition",
        href: "/products/quencher-matte-edition",
      },
      {
        image: {
          src: "/imgs/b56649e18c332ed3c756526776c018d3.jpg",
          alt: "Pro Series Straw Flask",
        },
        caption: "Master Unbreakable Flask 8oz",
        href: "/products/master-unbreakable-flask",
      },
      {
        image: {
          src: "/imgs/e0f8aceef373bb743fdf648e0977e443.jpg",
          alt: "Stay Chill Beer Pint",
        },
        caption: "Classic Stay-Chill Beer Pint",
        href: "/products/classic-beer-pint",
      },
      {
        image: {
          src: "/imgs/f9b594e4a45a117078dbfb8e1487fd0b.jpg",
          alt: "Master Vacuum Water Bottle",
        },
        caption: "Master Vacuum Water Bottle 25oz",
        href: "/products/master-vacuum-bottle",
      },
    ],
  },
];

