"use client";

import React from "react";
import { TranslationData } from "@/data/translations";

interface AboutSectionProps {
  t: TranslationData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#0a0a0d] border-b border-[#d4af37]/15 scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow and Heading */}
        <div className="mb-14">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#d4af37] font-bold block mb-3">
            {t.about.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#f4efe6] leading-tight">
            {t.about.headingA}{" "}
            <span className="italic text-[#d4af37]">{t.about.headingB}</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: PF Emblem Monogram Box */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="w-64 h-64 sm:w-72 sm:h-72 border-2 border-[#d4af37]/40 p-4 relative group">
              {/* Inner frame */}
              <div className="w-full h-full border border-[#d4af37]/80 bg-[#101014] flex items-center justify-center relative shadow-xl shadow-black/60 group-hover:border-[#f3e5ab] transition-colors">
                <span className="font-display font-bold text-7xl sm:text-8xl text-[#d4af37] tracking-wider select-none group-hover:scale-105 transition-transform duration-500">
                  PF
                </span>
                {/* Corner decorative accents */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#d4af37]" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#d4af37]" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#d4af37]" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#d4af37]" />
              </div>
            </div>
          </div>

          {/* Right Column: Bio Paragraphs & Approach */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-sm sm:text-base text-[#f4efe6]/80 font-light leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-sm sm:text-base text-[#f4efe6]/80 font-light leading-relaxed">
              {t.about.p2}
            </p>

            <p className="text-sm sm:text-base text-[#f4efe6]/80 font-light leading-relaxed">
              {t.about.p3}
            </p>

            {/* Vision Quote */}
            <div className="pt-2 pb-4">
              <p className="font-display italic text-lg sm:text-xl text-[#d4af37] border-l-2 border-[#d4af37] pl-4 py-1">
                &ldquo;{t.about.p4}&rdquo;
              </p>
            </div>

            {/* My Approach */}
            <div className="pt-6 border-t border-[#d4af37]/20">
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#d4af37] font-bold block mb-4">
                {t.about.approachTitle || "MY APPROACH"}
              </span>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {t.about.approach.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-[#f4efe6]/80 font-light"
                  >
                    <span className="w-4 h-[1px] bg-[#d4af37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
