"use client";

import React from "react";
import { TranslationData } from "@/data/translations";
import { SITE_CONFIG } from "@/data/config";
import { ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  t: TranslationData;
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  t,
  onSelectService,
}) => {
  // Path 2 items: 4 from ventures[0] + 4 from ventures[1]
  const path2Items = [
    ...(t.ventures[0]?.services.slice(0, 4) || []),
    ...(t.ventures[1]?.services.slice(0, 4) || []),
  ];

  const handleEnquire = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#0a0a0d] border-b border-[#d4af37]/15 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#d4af37] font-bold block mb-3">
            {t.services.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#f4efe6] leading-tight">
            {t.services.headingA}{" "}
            <span className="italic text-[#d4af37]">{t.services.headingB}</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#f4efe6]/65 font-light leading-relaxed">
            {t.services.sub}
          </p>
        </div>

        {/* Two Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Path 01: Business Consulting */}
          <div className="border border-[#d4af37]/30 bg-[#101014] p-8 md:p-10 flex flex-col hover:border-[#d4af37] transition-colors relative group">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#d4af37] font-bold block mb-3">
              {t.services.path1Tag}
            </span>
            <h3 className="font-display text-2xl md:text-4xl text-[#f4efe6] mb-3">
              {t.services.path1Title}
            </h3>
            <p className="text-sm text-[#f4efe6]/70 font-light leading-relaxed mb-8">
              {t.services.path1Sub}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {t.services.consulting.map((item, idx) => (
                <li key={idx} className="border-l-2 border-[#d4af37]/50 pl-3">
                  <span className="text-[13px] font-semibold text-[#f4efe6] block uppercase tracking-wide">
                    {item.title}
                  </span>
                  <span className="text-xs text-[#f4efe6]/60 leading-relaxed block mt-1">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-3 pt-6 border-t border-[#d4af37]/15">
              <a
                href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  t.wa.consulting
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#d4af37] text-[#0a0a0d] text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-[#f3e5ab] transition-colors flex items-center gap-2"
              >
                {t.services.whatsappMe} <ArrowRight size={14} />
              </a>
              <button
                type="button"
                onClick={() => handleEnquire("Business Consulting & Growth")}
                className="px-6 py-3.5 border border-[#d4af37]/50 text-[#f4efe6] text-[11px] font-bold uppercase tracking-[0.16em] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                {t.services.enquireNow}
              </button>
            </div>
          </div>

          {/* Path 02: Documentation & Travel Services */}
          <div className="border border-[#d4af37]/30 bg-[#101014] p-8 md:p-10 flex flex-col hover:border-[#d4af37] transition-colors relative group">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#d4af37] font-bold block mb-3">
              {t.services.path2Tag}
            </span>
            <h3 className="font-display text-2xl md:text-4xl text-[#f4efe6] mb-3">
              {t.services.path2Title}
            </h3>
            <p className="text-sm text-[#f4efe6]/70 font-light leading-relaxed mb-8">
              {t.services.path2Sub}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {path2Items.map((item, idx) => (
                <li key={idx} className="border-l-2 border-[#d4af37]/50 pl-3">
                  <span className="text-[13px] font-semibold text-[#f4efe6] block uppercase tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-3 pt-6 border-t border-[#d4af37]/15">
              <a
                href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  t.wa.documentation
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#d4af37] text-[#0a0a0d] text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-[#f3e5ab] transition-colors flex items-center gap-2"
              >
                {t.services.whatsappMe} <ArrowRight size={14} />
              </a>
              <button
                type="button"
                onClick={() =>
                  handleEnquire("Perfect Documents (Passports / OCI / Visa)")
                }
                className="px-6 py-3.5 border border-[#d4af37]/50 text-[#f4efe6] text-[11px] font-bold uppercase tracking-[0.16em] hover:border-[#d4af37] hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                {t.services.enquireNow}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
