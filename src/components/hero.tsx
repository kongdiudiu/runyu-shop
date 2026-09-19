import Link from "next/link";
import type { Hero, HeroImage } from "@/types";
import { cn } from "@/lib/utils";

/**
 * One hero slide = one data instance of the shared `Hero` markup.
 * Per-slide measured differences (margins, weights, max-widths) ride
 * along on the data via the optional className overrides below.
 */
export interface HeroSlide extends Hero {
  imageMobile: HeroImage;
  /** section-level: fixed hero heights per breakpoint */
  className?: string;
  /** h2 overrides (weight, margins, max-width) */
  titleClassName?: string;
  /** h3 overrides (margins, max-width) */
  subtitleClassName?: string;
  /** CTA overrides (margins) */
  ctaClassName?: string;
  /** text block alignment (hero 2 is centered) */
  contentClassName?: string;
}

export const HEROES: HeroSlide[] = [
  {
    variant: "dark",
    title: "Show up like you",
    subtitle: "Leakproof. Drama proof. All day proof.",
    cta: { label: "Shop Now", href: "/collections/leakproof-water-bottles" },
    image: {
      src: "/imgs/0.PNG",
      alt: "Stanley Quencher bottle held up against a dark backdrop",
    },
    imageMobile: {
      src: "/imgs/17d2b0919a0104a0a5a179b49f343524.jpg",
      alt: "Stanley Quencher bottle held up against a dark backdrop",
    },
    className: "h-[494.8px] md:h-[569.9px]",
    titleClassName: "max-w-[74%] md:max-w-full",
    subtitleClassName: "md:mt-4",
  },
  {
    variant: "light",
    title: "Extra credit: 25% off",
    subtitle:
      "Teachers and students do the work every day. This is our thanks. Verify with ID.me for 25% off at checkout, through 8/17.",
    cta: { label: "Shop Now", href: "/collections/id-me" },
    logo: { src: "/images/IDme_Logo.png", alt: "ID.me" },
    image: {
      src: "/imgs/5.PNG",
      alt: "Stanley bottle with ID.me student and teacher discount",
    },
    imageMobile: {
      src: "/imgs/3.jpg",
      alt: "Stanley bottle with ID.me student and teacher discount",
    },
    className: "h-[330.6px] md:h-[455.3px]",
    contentClassName: "justify-center",
    titleClassName: "mt-2 font-bold md:mt-6",
    subtitleClassName: "md:max-w-[41%]",
    ctaClassName: "mt-4 md:mt-8",
  },
  {
    variant: "dark",
    title: "Show up ready",
    subtitle: "Pack what you need. Keep it fresh. Enjoy when you're ready.",
    cta: { label: "Shop Now", href: "/collections/lunch-boxes" },
    image: {
      src: "/imgs/2.PNG",
      alt: "Stanley lunch box and bottle packed and ready",
    },
    imageMobile: {
      src: "/imgs/46bc72bc3060d1e87680b69f54b11c74.jpg",
      alt: "Stanley lunch box and bottle packed and ready",
    },
    className: "h-[494.8px] md:h-[569.9px]",
    ctaClassName: "md:mb-12",
  },
  {
    variant: "dark",
    title: "Built for life™ outdoors",
    subtitle: "Rugged durability meets timeless design for your next adventure.",
    cta: { label: "Explore Collection", href: "/collections/outdoor-adventure" },
    image: {
      src: "/imgs/6.PNG",
      alt: "Stanley outdoor adventure gear",
    },
    imageMobile: {
      src: "/imgs/ba639ca0d340bf9e9b4334465ef2683e.jpg",
      alt: "Stanley outdoor adventure gear mobile",
    },
    className: "h-[494.8px] md:h-[569.9px]",
    titleClassName: "max-w-[80%] md:max-w-full",
    subtitleClassName: "md:mt-4",
  },
];

const TITLE_BASE =
  "ml-6 mt-6 max-w-full text-[36px] font-medium leading-[35.28px] tracking-[-0.03em] text-white md:ml-12 md:mt-12 md:text-[64px] md:leading-[62.72px]";
const SUBTITLE_BASE =
  "ml-6 mt-2 text-[20px] font-normal leading-[22px] tracking-[-0.02em] text-white md:ml-12 md:text-[26px] md:leading-[28.6px]";
const CTA_BASE =
  "ml-6 mt-6 inline-flex items-center justify-center gap-2 rounded-[4px] border-[1.6px] px-8 py-[14px] text-[16px] font-bold leading-[16px] tracking-[-0.01em] md:ml-12 md:mt-8";

export function Hero({
  variant,
  logo,
  title,
  subtitle,
  cta,
  image,
  imageMobile,
  className,
  titleClassName,
  subtitleClassName,
  ctaClassName,
  contentClassName,
}: HeroSlide) {
  const dark = variant === "dark";

  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <picture className="absolute inset-0">
        <source media="(max-width: 767px)" srcSet={imageMobile.src} />
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      {logo ? (
        <img
          src={logo.src}
          alt={logo.alt}
          className="absolute left-6 top-6 h-[60px] w-auto md:left-12 md:top-12"
        />
      ) : null}

      <div
        className={cn(
          "absolute inset-0 flex flex-col text-left",
          dark ? "text-white" : "text-black",
          contentClassName
        )}
      >
        <h2 className={cn(TITLE_BASE, dark ? "text-white" : "text-black", titleClassName)}>
          {title}
        </h2>
        <h3 className={cn(SUBTITLE_BASE, dark ? "text-white" : "text-black", subtitleClassName)}>
          {subtitle}
        </h3>
        {cta ? (
          <Link
            href={cta.href}
            className={cn(
              CTA_BASE,
              dark
                ? "border-white bg-white text-[#101010]"
                : "border-[#101010] bg-[#101010] text-white",
              ctaClassName
            )}
          >
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
