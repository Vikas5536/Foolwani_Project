"use client";

import React, { useState } from "react";
import { TranslationData } from "@/data/translations";
import { REVIEWS_DATA, SITE_CONFIG } from "@/data/config";
import { Star, ExternalLink, MessageSquarePlus } from "lucide-react";

interface ReviewsSectionProps {
  t: TranslationData;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ t }) => {
  const [showReviewModal, setShowReviewModal] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0d] border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#d4af37] font-bold block mb-3">
            {t.trust.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#f4efe6] leading-tight mb-4">
            {t.trust.headingA}{" "}
            <span className="italic text-[#d4af37]">{t.trust.headingB}</span>
          </h2>
          <p className="text-sm md:text-base text-[#f4efe6]/70 font-light leading-relaxed">
            {t.trust.body}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Big Experience & Stats Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: 8+ Years */}
            <div className="border border-[#d4af37]/30 bg-[#101014] p-8 md:p-10">
              <span className="font-display text-5xl md:text-6xl text-[#d4af37] font-normal block mb-2">
                {SITE_CONFIG.stats.experienceYears}
              </span>
              <span className="text-xs uppercase tracking-[0.22em] text-[#f4efe6] font-bold block mb-2">
                {t.trust.yearsTitle}
              </span>
              <p className="text-xs text-[#f4efe6]/60 font-light leading-relaxed">
                {t.trust.yearsSub}
              </p>
            </div>

            {/* Card 2: 20,350+ Clients */}
            <div className="border border-[#d4af37]/30 bg-[#101014] p-8 md:p-10 flex flex-col justify-center">
              <span className="font-display text-4xl md:text-5xl text-[#f4efe6] font-normal block mb-2">
                {SITE_CONFIG.stats.clients}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold leading-relaxed">
                {t.trust.statLabelA} {t.trust.statLabelB}
              </span>
            </div>
          </div>

          {/* Right Column: Google Reviews Box */}
          <div className="lg:col-span-7 border border-[#d4af37]/30 bg-[#101014] p-7 md:p-10">
            {/* Google Header */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#d4af37]/20 gap-4 mb-8">
              <div className="flex items-center gap-3">
                {/* Google G Logo icon */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-[#0a0a0d] text-base select-none">
                  <span className="text-[#4285F4]">G</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4efe6] block">
                    {t.trust.reviewsTitle}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex text-[#d4af37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="#d4af37" color="#d4af37" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[#f4efe6]">
                      {REVIEWS_DATA.rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-[#f4efe6]/50">
                      ({REVIEWS_DATA.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials List */}
            <div className="space-y-6">
              {REVIEWS_DATA.reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="pb-6 border-b border-[#d4af37]/10 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#1c1c24] border border-[#d4af37]/30 flex items-center justify-center text-[11px] font-bold text-[#d4af37]">
                        {rev.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-xs font-semibold text-[#f4efe6]">
                        {rev.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex text-[#d4af37]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={11} fill="#d4af37" color="#d4af37" />
                        ))}
                      </div>
                      <span className="text-[11px] text-[#f4efe6]/40">
                        {rev.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-[#f4efe6]/75 font-light leading-relaxed pl-9">
                    {rev.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#d4af37]/20 flex flex-wrap gap-4">
              <a
                href={SITE_CONFIG.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#d4af37] text-[#0a0a0d] text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-[#f3e5ab] transition-colors flex items-center gap-2"
              >
                <Star size={14} fill="#0a0a0d" />
                {t.trust.shareExperience}
              </a>

              <a
                href={SITE_CONFIG.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#d4af37]/40 hover:border-[#d4af37] text-[#f4efe6] hover:text-[#d4af37] text-[11px] font-bold uppercase tracking-[0.16em] transition-colors flex items-center gap-2"
              >
                {t.trust.readAll}
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
