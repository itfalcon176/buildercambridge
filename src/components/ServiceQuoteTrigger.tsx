"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquareText, Sparkles, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface ServiceQuoteTriggerProps {
  serviceTitle: string;
  variant?: "primary" | "secondary" | "sidebar" | "banner";
  className?: string;
  label?: string;
}

export const ServiceQuoteTrigger: React.FC<ServiceQuoteTriggerProps> = ({
  serviceTitle,
  variant = "primary",
  className = "",
  label = "REQUEST FREE SITE SURVEY",
}) => {
  const { openQuoteModal } = useQuoteModal();

  if (variant === "sidebar") {
    return (
      <div className="bg-[#092457] text-white p-7 rounded-3xl shadow-xl border border-blue-900/60 space-y-6 sticky top-28">
        <div>
          <h3 className="text-xl font-black text-white font-sans">
            Get an Exact Quote for {serviceTitle.replace(" Cambridge", "")}
          </h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Book a complimentary on-site feasibility survey with our senior Cambridge project managers.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => openQuoteModal(serviceTitle)}
            className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>{label}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+441223782433"
            className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call: 01223 782433</span>
          </a>

          <a
            href="https://wa.me/441223782433"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquareText className="w-4 h-4" />
            <span>WhatsApp Project Team</span>
          </a>
        </div>

        <div className="pt-4 border-t border-blue-900/80 space-y-2.5 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Fixed-Price Itemized Quotation</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>10-Year Structural Guarantee</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Cambridge City Council Approved Standards</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => openQuoteModal(serviceTitle)}
          className={`px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer ${className}`}
        >
          <span>{label}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <a
          href="tel:+441223782433"
          className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>01223 782433</span>
        </a>
      </div>
    );
  }

  return (
    <button
      onClick={() => openQuoteModal(serviceTitle)}
      className={`px-6 sm:px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
};
