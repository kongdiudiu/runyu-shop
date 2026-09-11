import Link from "next/link";
import type { TeaserCard as TeaserCardData } from "@/types";

/**
 * One product card inside a teaser carousel. Width is driven by the
 * parent (fixed 321px desktop / 210.4px mobile), so this fills 100%.
 */
export function TeaserCard({ card }: { card: TeaserCardData }) {
  return (
    <Link href={card.href} className="flex w-full flex-col">
      <div className="w-full overflow-hidden rounded-[8px]">
        <img
          src={card.image.src}
          alt={card.image.alt}
          className="aspect-[1440/1983] w-full object-cover"
        />
      </div>
      <p className="mt-2 text-[20px] font-normal leading-[22px] tracking-[-0.02em] text-black">
        {card.caption}
      </p>
    </Link>
  );
}
