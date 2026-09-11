import React from "react";
import { Metadata } from "next";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Sparkles, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building Services Cambridge - House Extensions, Lofts & Renovations",
  description:
    "Comprehensive construction and renovation services across Cambridge. Specialising in house extensions, loft conversions, design & build, roofing, and commercial builds.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Services Header */}
      <section className="bg-[#092457] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>15 Specialized Building Services</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Our Building & Construction Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From luxury domestic house extensions and period restorations to ground-up new builds and commercial fit-outs across Cambridge and South Cambridgeshire.
          </p>
        </div>
      </section>

      {/* Services Grid with all 15 services */}
      <ServicesGrid showAll={true} />

      {/* Free Site Consultation Callout */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#092457] text-white p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black font-sans">
              Need a Custom Specification or Advice?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md">
              Speak with our senior project managers for free feasibility advice, building regulations planning, and an itemized fixed-price quote.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+441223782433"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>01223 782433</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
