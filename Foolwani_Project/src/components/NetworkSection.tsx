"use client";

import React from "react";
import Image from "next/image";
import { TranslationData } from "@/data/translations";
import { ArrowRight } from "lucide-react";

interface NetworkSectionProps {
  t: TranslationData;
  onSelectService?: (serviceName: string) => void;
}

export const NetworkSection: React.FC<NetworkSectionProps> = ({
  t,
  onSelectService,
}) => {
  const ventureImages: Record<string, string> = {
    "perfect-documents": "/assets/venture-docs.jpg",
    "perfect-trips": "/assets/venture-travel.jpg",
    "digital-seva-kendra": "/assets/venture-seva.jpg",
  };

  const serviceMapping: Record<string, string> = {
    "perfect-documents": "Perfect Documents (Passports / OCI / Visa)",
    "perfect-trips": "Mr & Miss Perfect Trips (Travel)",
    "digital-seva-kendra": "Digital Seva Kendra (Govt & Digital Services)",
  };

  const handleEnquire = (ventureId: string) => {
    const serviceName = serviceMapping[ventureId] || "Other Enquiry";
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
      id="network"
      className="py-20 md:py-28 bg-[#0e0e12] border-b border-[#d4af37]/15 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#d4af37] font-bold block mb-3">
              {t.network.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#f4efe6] leading-tight">
              {t.network.headingA}{" "}
              <span className="italic text-[#d4af37]">{t.network.headingB}</span>
            </h2>
          </div>
          <p className="text-xs tracking-[0.16em] uppercase text-[#f4efe6]/60 max-w-md font-semibold leading-relaxed">
            {t.network.note}
          </p>
        </div>

        {/* 3 Venture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.ventures.map((venture) => {
            const imgSrc =
              ventureImages[venture.id] || "/assets/venture-docs.jpg";

            return (
              <div
                key={venture.id}
                className="border border-[#d4af37]/30 bg-[#101014] flex flex-col group hover:border-[#d4af37] transition-all duration-300 shadow-xl shadow-black/40 overflow-hidden"
              >
                {/* Image Cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#18181f]">
                  <Image
                    src={imgSrc}
                    alt={venture.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Body */}
                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  {/* Category Index */}
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#d4af37] font-bold block mb-3">
                    {venture.index}
                  </span>

                  {/* Venture Name */}
                  <h3 className="font-display text-xl sm:text-2xl text-[#f4efe6] font-semibold mb-3">
                    {venture.name}
                  </h3>

                  {/* Blurb */}
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed font-light mb-6">
                    {venture.blurb}
                  </p>

                  {/* Services List */}
                  <ul className="space-y-2 mb-8 flex-1 border-t border-[#d4af37]/15 pt-5">
                    {venture.services.map((srv, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-[#f4efe6]/80 flex items-start gap-2.5 font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <button
                    type="button"
                    onClick={() => handleEnquire(venture.id)}
                    className="pt-4 border-t border-[#d4af37]/20 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37] group-hover:text-[#f3e5ab] transition-colors cursor-pointer text-left"
                  >
                    <span>{t.network.enquireNow}</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
