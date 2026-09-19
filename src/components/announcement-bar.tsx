"use client";

import { useEffect, useState } from "react";

import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { AnnouncementSlide } from "@/types";

const SLIDES: AnnouncementSlide[] = [
  { text: "Shop New Arrivals", href: "/collections/new-arrivals" },
  { text: "Free Shipping Over $75", href: "/collections/new-arrivals" },
  { text: "Welcome to Stanley 1913 | A Brand of PMI", href: "" },
];

const AUTOPLAY_MS = 4000;

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((current) => (current + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (target: number) => setIndex((target + SLIDES.length) % SLIDES.length);

  return (
    <div
      role="region"
      aria-label="Announcements"
      className="group relative flex h-10 items-center bg-ink px-4 py-0.5 text-[14px] leading-[19.6px] tracking-[-0.014em] text-pink-white md:h-11 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-live="polite"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="relative h-[19.6px] w-full max-w-[480px]">
          {SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={slide.text}
                aria-hidden={!active}
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                  active ? "pointer-events-auto opacity-100" : "opacity-0"
                )}
              >
                {slide.href ? (
                  <a href={slide.href} className="whitespace-nowrap hover:underline">
                    {slide.text}
                  </a>
                ) : (
                  <span className="whitespace-nowrap">{slide.text}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute left-4 z-10 flex items-center gap-1 md:left-12">
        <button
          type="button"
          aria-label="Previous announcement"
          onClick={() => goTo(index - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 group-hover:opacity-70"
        >
          <Icon name="chevron-left" size={16} className="fill-pink-white" />
        </button>
        <button
          type="button"
          aria-label="Next announcement"
          onClick={() => goTo(index + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 group-hover:opacity-70"
        >
          <Icon name="chevron-right" size={16} className="fill-pink-white" />
        </button>
        <button
          type="button"
          aria-label={paused ? "Play announcements" : "Pause announcements"}
          onClick={() => setPaused((current) => !current)}
          className="flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 group-hover:opacity-70"
        >
          <Icon name={paused ? "play" : "pause"} size={16} className="fill-pink-white" />
        </button>
      </div>


    </div>
  );
}
