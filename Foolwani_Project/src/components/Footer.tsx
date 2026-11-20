"use client";

import React from "react";
import { TranslationData } from "@/data/translations";
import { SITE_CONFIG } from "@/data/config";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

interface FooterProps {
  t: TranslationData;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-[#08080a] border-t border-[#d4af37]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#d4af37]/15">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center bg-[#0a0a0d]">
                <span className="font-display font-bold text-lg text-[#d4af37]">
                  PF
                </span>
              </div>
              <div>
                <span className="text-base font-bold tracking-[0.18em] text-[#f4efe6] uppercase block">
                  Pankaj Foolwani
                </span>
                <span className="text-[9px] tracking-[0.24em] text-[#d4af37] uppercase font-semibold block">
                  Empowering Businesses. Enabling Dreams.
                </span>
              </div>
            </div>

            <p className="font-display italic text-base text-[#d4af37]">
              &ldquo;{t.hero.tagline1} {t.hero.tagline2}&rdquo;
            </p>

            <p className="text-[10px] tracking-[0.2em] uppercase text-[#f4efe6]/50 font-semibold leading-relaxed">
              {SITE_CONFIG.locations.join(" • ")}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#d4af37] block">
              {t.footer.quickLinks || "QUICK LINKS"}
            </span>

            <ul className="space-y-2.5">
              <li>
                <a
                  href="#about"
                  className="text-xs tracking-[0.16em] uppercase text-[#f4efe6]/70 hover:text-[#d4af37] transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-xs tracking-[0.16em] uppercase text-[#f4efe6]/70 hover:text-[#d4af37] transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#network"
                  className="text-xs tracking-[0.16em] uppercase text-[#f4efe6]/70 hover:text-[#d4af37] transition-colors"
                >
                  {t.nav.network}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xs tracking-[0.16em] uppercase text-[#f4efe6]/70 hover:text-[#d4af37] transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase font-bold tracking-[0.24em] text-[#d4af37] block">
              {t.footer.connectLabel || "CONNECT"}
            </span>

            <div className="space-y-2 text-xs text-[#f4efe6]/70 font-light">
              <p>
                <span className="text-[#d4af37] font-medium">Phone: </span>
                <a
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p>
                <span className="text-[#d4af37] font-medium">Email: </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[#d4af37] transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0d] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>

              <a
                href={SITE_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0d] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>

              <a
                href={SITE_CONFIG.socials.justdial}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0d] transition-colors text-[10px] font-bold"
                aria-label="JustDial"
              >
                Jd
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-[11px] text-[#f4efe6]/50 tracking-[0.16em] uppercase gap-4">
          <p>© 2026 PANKAJ FOOLWANI. ALL RIGHTS RESERVED.</p>
          <p className="text-center md:text-right">
            ENTREPRENEUR | BUSINESS CONSULTANT | BUSINESS DEVELOPMENT STRATEGIST
          </p>
        </div>
      </div>
    </footer>
  );
};
