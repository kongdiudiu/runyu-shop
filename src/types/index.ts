export interface LinkItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface Hero {
  /** "light" = dark text on light image (e.g. ID.me), "dark" = white text on dark image */
  variant: "dark" | "light";
  eyebrow?: string;
  logo?: { src: string; alt: string };
  title: string;
  subtitle: string;
  cta?: Cta;
  image: HeroImage;
}

export interface TeaserCard {
  image: { src: string; alt: string };
  caption: string;
  href: string;
}

export interface Teaser {
  id: string;
  title: string;
  cards: TeaserCard[];
  /** Product-page variants are out of scope; cards link to the teaser's target */
  href: string;
}

export interface LifestyleTile {
  image: { src: string; alt: string };
  title: string;
  subtitle: string;
  href: string;
}

export interface NavMenuItem {
  label: string;
  href: string;
  /** Renders a click-to-open mega menu with these columns */
  megaMenu?: MegaMenuColumn[];
}

export interface MegaMenuColumn {
  title: string;
  links: LinkItem[];
  promoImage?: { src: string; alt: string; href: string };
}

export interface AnnouncementSlide {
  text: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: LinkItem[];
}

export interface FooterSection {
  helpButtons: LinkItem[];
  columns: FooterColumn[];
}
