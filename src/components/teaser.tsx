"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons";
import { TeaserCard } from "@/components/teaser-card";
import type { TeaserSlide } from "@/components/teaser-data";

const ARROW_BASE =
  "absolute top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition-opacity duration-300 lg:flex";

export function Teaser({ teaser }: { teaser: TeaserSlide }) {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(337);
  const [maxIndex, setMaxIndex] = useState(0);
  const [isLg, setIsLg] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = track?.parentElement;
    if (!track || !viewport) return;

    const measure = () => {
      const first = track.firstElementChild as HTMLElement | null;
      if (!first) return;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 16;
      const size = first.offsetWidth + gap;
      const maxScroll = teaser.cards.length * size - gap - viewport.clientWidth;
      const max = Math.max(0, Math.floor(maxScroll / size));
      setStep(size);
      setMaxIndex(max);
      setIndex((current) => Math.min(current, max));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [teaser.cards.length]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      setIsLg(mq.matches);
      if (!mq.matches) setIndex(0);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      aria-label={`Carousel ${teaser.title}`}
      className="bg-white py-6 pl-6 pr-0 lg:flex lg:flex-row lg:items-center lg:pl-12"
    >
      <h2
        className={cn(
          "mb-6 text-[26px] font-medium leading-[28.6px] tracking-[-0.02em] text-black lg:hidden",
          teaser.mobileTitleClassName
        )}
      >
        {teaser.title}
      </h2>

      <div className="hidden w-[415px] shrink-0 items-center lg:flex">
        <h2 className="text-[36px] font-medium leading-[39.6px] tracking-[-0.02em] text-black">
          {teaser.title}
        </h2>
      </div>

      <div className="relative min-w-0 flex-1">
        <button
          type="button"
          aria-label={`Previous ${teaser.title} slide`}
          disabled={index === 0}
          onClick={() => setIndex((current) => Math.max(0, current - 1))}
          className={cn(ARROW_BASE, "left-0", index === 0 && "opacity-35")}
        >
          <Icon name="chevron-left" size={16} />
        </button>

        <div className="overflow-x-auto snap-x snap-mandatory lg:overflow-hidden lg:snap-none">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: isLg ? `translateX(-${index * step}px)` : undefined }}
          >
            {teaser.cards.map((card) => (
              <div
                key={card.href}
                className="w-[210.4px] shrink-0 snap-start lg:w-[321px]"
              >
                <TeaserCard card={card} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label={`Next ${teaser.title} slide`}
          disabled={index >= maxIndex}
          onClick={() => setIndex((current) => Math.min(maxIndex, current + 1))}
          className={cn(ARROW_BASE, "right-0", index >= maxIndex && "opacity-35")}
        >
          <Icon name="chevron-right" size={16} />
        </button>
      </div>
    </section>
  );
}
