"use client";

import React, { useState } from "react";
import { TranslationData } from "@/data/translations";
import { SITE_CONFIG } from "@/data/config";
import { MessageCircle, X } from "lucide-react";

interface WhatsAppModalProps {
  t: TranslationData;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions = [
    {
      label: t.waMenu.default || "General Enquiry",
      msgKey: "default" as const,
    },
    {
      label: t.waMenu.consulting || "Business Consulting",
      msgKey: "consulting" as const,
    },
    {
      label: t.waMenu.documentation || "Documentation Services",
      msgKey: "documentation" as const,
    },
    {
      label: t.waMenu.travel || "Travel Services",
      msgKey: "travel" as const,
    },
    {
      label: t.waMenu.corporate || "Corporate & VIP Assistance",
      msgKey: "corporate" as const,
    },
  ];

  const handleSelectOption = (msgKey: keyof typeof t.wa) => {
    const text = t.wa[msgKey] || t.wa.default;
    const url = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Popup Menu */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#101014] border border-[#d4af37]/40 shadow-2xl shadow-black/80 p-5 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#d4af37]/20">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} className="text-[#25d366]" />
              <span className="text-xs uppercase font-bold tracking-[0.16em] text-[#f4efe6]">
                {t.waMenu.title || "Start a WhatsApp Chat"}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#f4efe6]/50 hover:text-[#d4af37] p-1"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-1.5">
            {menuOptions.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(opt.msgKey)}
                className="w-full text-left px-3.5 py-2.5 text-xs text-[#f4efe6]/90 hover:text-[#0a0a0d] hover:bg-[#d4af37] transition-all flex items-center justify-between border border-transparent hover:border-[#d4af37] font-medium"
              >
                <span>{opt.label}</span>
                <span className="text-[10px] text-[#25d366] group-hover:text-[#0a0a0d]">
                  ➔
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#d4af37] hover:bg-[#f3e5ab] text-[#0a0a0d] shadow-xl shadow-black/60 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative group"
        aria-label="Open WhatsApp Chat Menu"
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <MessageCircle size={28} className="fill-[#0a0a0d] text-[#0a0a0d]" />
        )}
        <span className="sr-only">Contact on WhatsApp</span>
      </button>
    </div>
  );
};
