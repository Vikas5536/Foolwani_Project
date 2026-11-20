"use client";

import React from "react";
import Image from "next/image";
import { TranslationData } from "@/data/translations";
import { SITE_CONFIG } from "@/data/config";
import { PhoneCall } from "lucide-react";

interface HeroProps {
  t: TranslationData;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0a0a0d]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#d4af37]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
                {t.hero.role}
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#f4efe6] leading-[1.05]">
              {t.hero.name1}{" "}
              <span className="font-display italic font-normal text-[#d4af37] block mt-1">
                {t.hero.name2}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-display italic text-[#f4efe6]/90 tracking-wide">
              {t.hero.tagline1} {t.hero.tagline2}
            </p>

            {/* Intro paragraph */}
            <p className="text-sm sm:text-base text-[#f4efe6]/75 font-light leading-relaxed max-w-2xl">
              {t.hero.intro}
            </p>

            {/* Service paths tag */}
            <div className="pt-1">
              <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] bg-[#16161c] px-4 py-2 border border-[#d4af37]/30">
                {t.hero.paths}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#contact"
                className="px-8 py-4 bg-[#d4af37] text-[#0a0a0d] hover:bg-[#f3e5ab] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-[#d4af37]/20 text-center"
              >
                {t.hero.letsConnect}
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="px-7 py-4 border border-[#d4af37]/40 hover:border-[#d4af37] text-[#f4efe6] hover:text-[#d4af37] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2.5 bg-[#101014]"
              >
                <PhoneCall size={16} className="text-[#d4af37]" />
                {t.hero.callNow}
              </a>
            </div>

            {/* Locations Footer in Hero */}
            <div className="pt-4 border-t border-[#d4af37]/15">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-[#f4efe6]/60 uppercase">
                {SITE_CONFIG.locations.join(" • ")}
              </p>
            </div>
          </div>

          {/* Right Column: Founder Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-md w-full">
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-2 border border-[#d4af37]/30 pointer-events-none transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              
              {/* Inner Image Container */}
              <div className="relative border border-[#d4af37]/60 bg-[#101014] overflow-hidden shadow-2xl shadow-black/80">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={SITE_CONFIG.portrait}
                    alt="Pankaj Foolwani — Founder & Business Consultant"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-transparent opacity-80" />
                </div>

                {/* Founder Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0d]/90 backdrop-blur-md border border-[#d4af37]/40 p-3 sm:p-4">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.25em] text-[#d4af37] block">
                    FOUNDER & PRINCIPAL
                  </span>
                  <span className="font-display text-base sm:text-lg text-[#f4efe6] font-semibold tracking-wide">
                    Pankaj Foolwani
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
