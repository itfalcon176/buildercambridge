import React from "react";
import { Metadata } from "next";
import { RecentWorksGallery } from "@/components/RecentWorksGallery";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Sparkles, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recent Work & Portfolio - House Extensions & Renovations Cambridge",
  description:
    "Explore our complete photo gallery of real building work across Cambridge: structural pillar removals, house extensions, luxury kitchens, groundworks, drainage, and landscaping.",
};

export default function RecentWorkPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#092457] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Cambridge Projects</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Our Recent Work
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive gallery showcasing our on-site craftsmanship across Cambridge: from structural steel knock-throughs and extensions to luxury kitchens and groundworks.
          </p>
        </div>
      </section>

      {/* Featured Interactive Transformation Slider */}
      <BeforeAfterSlider />

      {/* Real Photos Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              On-Site Project Photography
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click any photo to view in full resolution lightbox. Filter by trade category below.
            </p>
          </div>

          {/* Interactive Gallery Component */}
          <RecentWorksGallery />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#092457] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-black font-sans">
            Inspired by Our Cambridge Projects?
          </h3>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Book a free site consultation with our project managers to discuss your ideas and get an itemized quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs tracking-wider uppercase transition-all shadow-xl active:scale-95"
            >
              REQUEST A FREE QUOTE
            </Link>
            <a
              href="tel:+441223782433"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wider uppercase transition-all"
            >
              CALL +44 1223 782433
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
