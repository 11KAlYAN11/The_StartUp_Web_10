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
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-zinc-900">
      {slides.map((s, i) =>
        s.backgroundImage ? (
          <div
            key={i}
            aria-hidden
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${s.backgroundImage})`,
              opacity: i === index ? 1 : 0,
            }}
          />
        ) : null,
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 py-24 md:py-32">
        <span className="rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
          {slide.eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          {slide.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-300">{slide.subhead}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {slide.ctaPrimary}
          </a>
          <a
            href="#services"
            className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
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
                i === index ? "w-8 bg-primary" : "w-3 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
