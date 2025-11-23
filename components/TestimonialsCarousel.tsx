"use client";

import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialsCarouselProps = {
  items: Testimonial[];
  interval?: number;
};

const TRANSITION_MS = 400;

export default function TestimonialsCarousel({
  items,
  interval = 6000,
}: TestimonialsCarouselProps) {
  const safeItems = useMemo(() => (items.length ? items : []), [items]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (safeItems.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % safeItems.length);
        setIsAnimating(false);
      }, TRANSITION_MS);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, safeItems.length]);

  if (!safeItems.length) return null;

  const handleSelect = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, TRANSITION_MS);
  };

  return (
    <div className="relative w-full">
      <figure
        className={`rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-brand-blue/10 transition-opacity duration-500 ease-out ${
          isAnimating ? "opacity-60" : "opacity-100"
        }`}
        aria-live="polite"
      >
        <blockquote className="text-lg leading-relaxed text-slate-700">
          “{safeItems[activeIndex].quote}”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 text-sm font-semibold text-brand-blue">
          <div className="h-10 w-10 rounded-full bg-brand-light text-brand-blue ring-2 ring-brand-blue/20" aria-hidden />
          <div>
            <div>{safeItems[activeIndex].name}</div>
            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {safeItems[activeIndex].role}
            </div>
          </div>
        </figcaption>
      </figure>
      <div className="mt-6 flex items-center justify-center gap-2">
        {safeItems.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                isActive ? "w-8 bg-brand-blue" : "w-2.5 bg-brand-blue/30 hover:bg-brand-blue/60"
              }`}
              aria-label={`Afficher le témoignage ${index + 1}`}
              aria-pressed={isActive}
            />
          );
        })}
      </div>
    </div>
  );
}
