"use client";

import React, { useState } from "react";
import { Language, translations } from "@/data/translations";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { LocationMarquee } from "@/components/LocationMarquee";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { NetworkSection } from "@/components/NetworkSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppModal } from "@/components/WhatsAppModal";

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [selectedService, setSelectedService] = useState<string>(
    "Business Consulting & Growth"
  );

  const t = translations[currentLang] || translations.en;

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0d] text-[#f4efe6] selection:bg-[#d4af37] selection:text-[#0a0a0d]">
      {/* Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        t={t}
      />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero t={t} />

        {/* Stats Bar */}
        <StatsBar t={t} />

        {/* Location Marquee Ticker */}
        <LocationMarquee t={t} />

        {/* About Me Section */}
        <AboutSection t={t} />

        {/* Services Section */}
        <ServicesSection t={t} onSelectService={handleSelectService} />

        {/* My Business Network (3 Dedicated Brands) */}
        <NetworkSection t={t} onSelectService={handleSelectService} />

        {/* Experience & Google Reviews */}
        <ReviewsSection t={t} />

        {/* Contact & Structured Enquiry Form */}
        <ContactSection t={t} selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer t={t} />

      {/* Floating Interactive WhatsApp Chat Launcher */}
      <WhatsAppModal t={t} />
    </div>
  );
}
