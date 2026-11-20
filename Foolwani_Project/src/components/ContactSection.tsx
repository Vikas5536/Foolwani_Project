"use client";

import React, { useState, useEffect } from "react";
import { TranslationData } from "@/data/translations";
import { SITE_CONFIG } from "@/data/config";
import {
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

interface ContactSectionProps {
  t: TranslationData;
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  t,
  selectedService,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    service: t.contact.serviceOptions[0] || "Business Consulting & Growth",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setStatusMessage(t.contact.success);
        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          service: t.contact.serviceOptions[0] || "Business Consulting & Growth",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(t.contact.error);
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
      // Fallback: If network issue, allow them to send via WhatsApp
      setSubmitStatus("error");
      setStatusMessage(t.contact.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendDirectWhatsApp = () => {
    const text = `Hello Pankaj,%0A%0AMy Name: ${encodeURIComponent(
      formData.fullName || "Client"
    )}%0APhone: ${encodeURIComponent(
      formData.mobile
    )}%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0AService: ${encodeURIComponent(
      formData.service
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`${SITE_CONFIG.whatsappUrl}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0a0a0d] border-b border-[#d4af37]/15 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#d4af37] font-bold block mb-3">
            {t.contact.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#f4efe6] leading-tight mb-4">
            {t.contact.headingA}{" "}
            <span className="italic text-[#d4af37]">{t.contact.headingB}</span>
          </h2>
          <p className="text-sm md:text-base text-[#f4efe6]/70 font-light leading-relaxed">
            {t.contact.body}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Presence Network */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <a
              href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                t.wa.default
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#101014] border border-[#25d366]/40 hover:border-[#25d366] transition-colors group"
            >
              <div className="w-12 h-12 bg-[#25d366]/10 border border-[#25d366]/30 flex items-center justify-center text-[#25d366]">
                <MessageCircle size={22} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#25d366] block">
                  {t.contact.waLabel}
                </span>
                <span className="text-base font-semibold text-[#f4efe6] group-hover:text-[#25d366] transition-colors">
                  {SITE_CONFIG.phone}
                </span>
              </div>
            </a>

            {/* Direct Call Card */}
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="flex items-center gap-4 p-5 bg-[#101014] border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors group"
            >
              <div className="w-12 h-12 bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#d4af37] block">
                  {t.contact.callLabel}
                </span>
                <span className="text-base font-semibold text-[#f4efe6] group-hover:text-[#d4af37] transition-colors">
                  {SITE_CONFIG.phone}
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-4 p-5 bg-[#101014] border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors group"
            >
              <div className="w-12 h-12 bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#d4af37] block">
                  {t.contact.emailLabel}
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#f4efe6] group-hover:text-[#d4af37] transition-colors break-all">
                  {SITE_CONFIG.email}
                </span>
              </div>
            </a>

            {/* Presence Network & Address */}
            <div className="pt-6 border-t border-[#d4af37]/20 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#d4af37] font-bold block">
                {t.contact.networkLabel}
              </span>

              <p className="text-xs font-semibold text-[#f4efe6]/90 tracking-wide uppercase">
                {SITE_CONFIG.locations.join(" • ")}
              </p>

              <p className="text-xs text-[#f4efe6]/65 font-light leading-relaxed">
                {SITE_CONFIG.address}
              </p>

              <p className="text-xs text-[#d4af37]/90 font-medium">
                {SITE_CONFIG.hours}
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0d] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>

                <a
                  href={SITE_CONFIG.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0d] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>

                <a
                  href={SITE_CONFIG.socials.justdial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0d] transition-colors text-[11px] font-bold"
                  aria-label="JustDial"
                >
                  Jd
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Enquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-7 md:p-9 bg-[#101014] border border-[#d4af37]/30 space-y-5"
            >
              {/* Feedback messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-[#25d366]/10 border border-[#25d366]/40 flex items-start gap-3 text-sm text-[#25d366]">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{statusMessage}</p>
                    <button
                      type="button"
                      onClick={sendDirectWhatsApp}
                      className="mt-2 text-xs underline font-bold tracking-wider uppercase text-[#f4efe6] hover:text-[#25d366]"
                    >
                      Also notify Pankaj directly on WhatsApp ↗
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-950/40 border border-red-500/40 flex items-start gap-3 text-sm text-red-200">
                  <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-400" />
                  <div>
                    <p className="font-medium">{statusMessage}</p>
                    <button
                      type="button"
                      onClick={sendDirectWhatsApp}
                      className="mt-2 text-xs underline font-bold tracking-wider uppercase text-[#d4af37]"
                    >
                      Click here to send enquiry via WhatsApp instead ↗
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.18em] text-[#d4af37] font-semibold block">
                    {t.contact.name} *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t.contact.namePh}
                    className="w-full bg-[#16161c] border border-[#d4af37]/30 px-4 py-3 text-sm text-[#f4efe6] placeholder-[#f4efe6]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.18em] text-[#d4af37] font-semibold block">
                    {t.contact.mobile} *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder={t.contact.mobilePh}
                    className="w-full bg-[#16161c] border border-[#d4af37]/30 px-4 py-3 text-sm text-[#f4efe6] placeholder-[#f4efe6]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.18em] text-[#d4af37] font-semibold block">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPh}
                    className="w-full bg-[#16161c] border border-[#d4af37]/30 px-4 py-3 text-sm text-[#f4efe6] placeholder-[#f4efe6]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                {/* Service Required */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.18em] text-[#d4af37] font-semibold block">
                    {t.contact.service} *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#16161c] border border-[#d4af37]/30 px-4 py-3 text-sm text-[#f4efe6] focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    {t.contact.serviceOptions.map((opt, idx) => (
                      <option
                        key={idx}
                        value={opt}
                        className="bg-[#101014] text-[#f4efe6]"
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.18em] text-[#d4af37] font-semibold block">
                  {t.contact.message} *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePh}
                  className="w-full bg-[#16161c] border border-[#d4af37]/30 px-4 py-3 text-sm text-[#f4efe6] placeholder-[#f4efe6]/30 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#d4af37] hover:bg-[#f3e5ab] text-[#0a0a0d] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t.contact.sending}</span>
                ) : (
                  <>
                    <span>{t.contact.send}</span>
                    <Send size={15} />
                  </>
                )}
              </button>

              {/* Privacy disclaimer */}
              <p className="text-[11px] text-[#f4efe6]/50 text-center font-light pt-2">
                {t.contact.privacy}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
