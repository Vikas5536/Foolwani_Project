"use client";

import React, { useState, useEffect } from "react";
import { Language, TranslationData } from "@/data/translations";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  t: TranslationData;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  t,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.network, href: "#network" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0d]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-lg shadow-black/50"
          : "bg-[#0a0a0d]/80 backdrop-blur-sm border-b border-[#d4af37]/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center bg-[#0a0a0d] group-hover:border-[#f3e5ab] transition-colors">
            <span className="font-display font-bold text-lg text-[#d4af37] tracking-wider group-hover:text-[#f3e5ab]">
              PF
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-[0.18em] text-[#f4efe6] uppercase">
              Pankaj Foolwani
            </span>
            <span className="text-[10px] tracking-[0.24em] text-[#d4af37] uppercase font-medium">
              {t.nav.brandSub || "Business Consultant"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-[0.2em] text-[#f4efe6]/80 hover:text-[#d4af37] uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switcher & Connect Button */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language Toggle Pill */}
          <div className="flex items-center bg-[#16161c] border border-[#d4af37]/30 p-1">
            <button
              onClick={() => onSelectLang("en")}
              className={`px-3 py-1 text-[11px] font-bold tracking-wider transition-all ${
                currentLang === "en"
                  ? "bg-[#d4af37] text-[#0a0a0d]"
                  : "text-[#f4efe6]/70 hover:text-[#f4efe6]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onSelectLang("hi")}
              className={`px-3 py-1 text-[11px] font-bold tracking-wider transition-all ${
                currentLang === "hi"
                  ? "bg-[#d4af37] text-[#0a0a0d]"
                  : "text-[#f4efe6]/70 hover:text-[#f4efe6]"
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => onSelectLang("pa")}
              className={`px-3 py-1 text-[11px] font-bold tracking-wider transition-all ${
                currentLang === "pa"
                  ? "bg-[#d4af37] text-[#0a0a0d]"
                  : "text-[#f4efe6]/70 hover:text-[#f4efe6]"
              }`}
            >
              ਪੰਜਾਬੀ
            </button>
          </div>

          {/* Connect Button */}
          <a
            href="#contact"
            className="px-6 py-2.5 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0d] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300"
          >
            {t.nav.connect}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Quick Lang Switcher on Mobile */}
          <div className="flex items-center bg-[#16161c] border border-[#d4af37]/30 p-0.5">
            <button
              onClick={() => onSelectLang("en")}
              className={`px-2 py-0.5 text-[10px] font-bold ${
                currentLang === "en"
                  ? "bg-[#d4af37] text-[#0a0a0d]"
                  : "text-[#f4efe6]/70"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onSelectLang("hi")}
              className={`px-2 py-0.5 text-[10px] font-bold ${
                currentLang === "hi"
                  ? "bg-[#d4af37] text-[#0a0a0d]"
                  : "text-[#f4efe6]/70"
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => onSelectLang("pa")}
              className={`px-2 py-0.5 text-[10px] font-bold ${
                currentLang === "pa"
                  ? "bg-[#d4af37] text-[#0a0a0d]"
                  : "text-[#f4efe6]/70"
              }`}
            >
              ਪੰ
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#d4af37] hover:text-[#f3e5ab] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e12] border-b border-[#d4af37]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-[0.2em] text-[#f4efe6] hover:text-[#d4af37] uppercase py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#f4efe6]/60 tracking-wider uppercase">
                Language:
              </span>
              <div className="flex items-center bg-[#16161c] border border-[#d4af37]/30 p-1">
                <button
                  onClick={() => onSelectLang("en")}
                  className={`px-3 py-1 text-xs font-bold ${
                    currentLang === "en"
                      ? "bg-[#d4af37] text-[#0a0a0d]"
                      : "text-[#f4efe6]/70"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => onSelectLang("hi")}
                  className={`px-3 py-1 text-xs font-bold ${
                    currentLang === "hi"
                      ? "bg-[#d4af37] text-[#0a0a0d]"
                      : "text-[#f4efe6]/70"
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => onSelectLang("pa")}
                  className={`px-3 py-1 text-xs font-bold ${
                    currentLang === "pa"
                      ? "bg-[#d4af37] text-[#0a0a0d]"
                      : "text-[#f4efe6]/70"
                  }`}
                >
                  ਪੰਜਾਬੀ
                </button>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 border border-[#d4af37] bg-[#d4af37] text-[#0a0a0d] text-xs font-bold uppercase tracking-[0.2em]"
            >
              {t.nav.connect}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
