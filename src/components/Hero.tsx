"use client";

import { useEffect, useState } from "react";
import type { OrgConfig } from "@/types/config";

export function Hero({ config }: { config: OrgConfig }) {
  const slides = config.hero.rotating;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-start px-6 py-24 md:py-32">
        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          {slide.eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-6xl">
          {slide.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          {slide.subhead}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {slide.ctaPrimary}
          </a>
          <a
            href="#services"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
          >
            {slide.ctaSecondary}
          </a>
        </div>

        <div className="mt-12 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-primary"
                  : "w-3 bg-zinc-300 dark:bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
