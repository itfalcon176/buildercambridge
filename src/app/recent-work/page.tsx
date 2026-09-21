import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { RecentWorksTabbedGallery } from "@/components/RecentWorksGallery";
import {
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  MessageSquareText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Removing Supporting Piller, Extensions & Kitchen Projects - Builder Cambridge",
  description:
    "Explore our complete photo portfolio of real building work across Cambridge: load-bearing supporting pillar removals, RSJ steel installations, house extensions, kitchen renovations, brick restorations, and garden landscaping.",
};

export default function RecentWorkPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header */}
      <section className="bg-[#092457] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Cambridge Projects &amp; Case Studies</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-black text-white tracking-tight font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Recent Works
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            A photographic showcase of our master building work across Cambridge. From complex structural load-bearing pillar removals and RSJ steel beam installations to bespoke house extensions, luxury kitchen renovations, and exterior landscaping.
          </p>

          {/* Quick Specs Pill Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-slate-200">
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>10-Year Structural Guarantee</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Building Regulations Sign-Off</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Fast &amp; Clean On-Site Execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive 3-Tab Gallery Section */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RecentWorksTabbedGallery />
        </div>
      </section>

      {/* 5. Bottom Direct Call to Action */}
      <section className="py-16 bg-[#092457] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3
            className="text-2xl sm:text-4xl font-black font-sans tracking-tight"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Planning a Structural Alteration or Extension in Cambridge?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you need a load-bearing wall removed, an RSJ steel calculation, or a bespoke rear extension, our senior building engineers provide free site consultations and fixed-price quotations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl active:scale-95 flex items-center gap-2"
            >
              <span>REQUEST FREE SITE SURVEY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+441223782433"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>01223 782433</span>
            </a>
            <a
              href="https://wa.me/441223782433"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
