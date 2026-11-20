"use client";

import React from "react";
import { TranslationData } from "@/data/translations";
import { SITE_CONFIG } from "@/data/config";

interface StatsBarProps {
  t: TranslationData;
}

export const StatsBar: React.FC<StatsBarProps> = ({ t }) => {
  const statsList = [
    {
      value: SITE_CONFIG.stats.clients,
      label: t.stats.clients,
    },
    {
      value: SITE_CONFIG.stats.ventures,
      label: t.stats.ventures,
    },
    {
      value: SITE_CONFIG.stats.locations,
      label: t.stats.locations,
    },
  ];

  return (
    <section className="border-y border-[#d4af37]/20 bg-[#0e0e12]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/20">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${
                idx > 0 ? "pt-6 md:pt-0" : ""
              }`}
            >
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#f4efe6] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#d4af37]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
