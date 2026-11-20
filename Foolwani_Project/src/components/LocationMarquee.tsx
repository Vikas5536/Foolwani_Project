"use client";

import React from "react";
import { TranslationData } from "@/data/translations";
import { SITE_CONFIG } from "@/data/config";

interface LocationMarqueeProps {
  t: TranslationData;
}

export const LocationMarquee: React.FC<LocationMarqueeProps> = ({ t }) => {
  const items = [
    ...SITE_CONFIG.locations,
    t.marqueeExtra || "INTERNATIONAL DESK",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#09090b] border-b border-[#d4af37]/20 py-3.5 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        <div className="flex items-center space-x-8 px-4">
          {items.map((item, idx) => (
            <React.Fragment key={`first-${idx}`}>
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.26em] text-[#f4efe6]/70 uppercase hover:text-[#d4af37] transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate set for seamless infinite loop */}
        <div className="flex items-center space-x-8 px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`second-${idx}`}>
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.26em] text-[#f4efe6]/70 uppercase hover:text-[#d4af37] transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
