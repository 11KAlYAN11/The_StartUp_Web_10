"use client";

import { useEffect, useRef, useState } from "react";
import type { OrgConfig } from "@/types/config";

// Single looping video that persists across all slides — same pattern as Microland
const HERO_VIDEO = "https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4";

export function Hero({ config }: { config: OrgConfig }) {
  const slides = config.hero.rotating;
  const [index, setIndex] = useState(0);
  const [activeText, setActiveText] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  // Fade text out then swap, so headline never jumps
  useEffect(() => {
    const t = setTimeout(() => setActiveText(index), 300);
    return () => clearTimeout(t);
  }, [index]);

  const slide = slides[activeText];

  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-zinc-950">
      {/* Single persistent background video — never restarts between slides */}
      <video
        ref={videoRef}
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Deep gradient so text is always crisp over the video */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 py-24 md:py-32">
        {/* Text fades when slide changes — activeText lags index by 300ms */}
        <div
          key={activeText}
          style={{ animation: "heroFadeUp 0.6s ease both" }}
        >
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
