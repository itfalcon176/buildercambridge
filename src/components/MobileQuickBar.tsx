"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calculator, Send } from "lucide-react";

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 md:hidden shadow-2xl flex items-center justify-around gap-2">
      <a
        href="tel:+441223782433"
        className="flex-1 py-2 px-2 rounded-xl bg-blue-50 text-[#092457] text-[11px] font-bold flex flex-col items-center justify-center gap-1 active:scale-95"
      >
        <Phone className="w-4 h-4 text-amber-500" />
        <span>Call Now</span>
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=+447542012258&text=Hi%20Builder%20Cambridge,%20I%20would%20like%20a%20quote"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-2 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-bold flex flex-col items-center justify-center gap-1 active:scale-95"
      >
        <MessageCircle className="w-4 h-4 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

      <Link
        href="/calculator"
        className="flex-1 py-2 px-2 rounded-xl bg-amber-50 text-amber-900 text-[11px] font-bold flex flex-col items-center justify-center gap-1 active:scale-95"
      >
        <Calculator className="w-4 h-4 text-amber-600" />
        <span>Estimate</span>
      </Link>

      <Link
        href="/contact"
        className="flex-1 py-2 px-2 rounded-xl bg-[#092457] text-white text-[11px] font-bold flex flex-col items-center justify-center gap-1 active:scale-95 shadow-md"
      >
        <Send className="w-4 h-4 text-amber-400" />
        <span>Free Quote</span>
      </Link>
    </div>
  );
};
