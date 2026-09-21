import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RecentWorksGallery } from "@/components/RecentWorksGallery";
import {
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Hammer,
  Clock,
  Award,
  MessageSquareText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Removing Supporting Piller & Recent Projects - Builder Cambridge",
  description:
    "Explore our complete photo portfolio of real building work across Cambridge: load-bearing supporting pillar removals, RSJ steel installations, house extensions, brick restorations, and garden landscaping.",
};

export default function RecentWorkPage() {
  const pillarSteps = [
    {
      step: "01",
      title: "Original Supporting Pillar",
      desc: "Central load-bearing brick pillar restricting space and light in the living room.",
      image: "/recent-work/removing-supporting-piller/80297626-CD17-4AB8-897D-93743F81D2A2.jpeg",
      badge: "Before Demolition",
    },
    {
      step: "02",
      title: "Propping & Demolition",
      desc: "Heavy-duty steel acrow props deployed to take the second floor structural load safely.",
      image: "/recent-work/removing-supporting-piller/5AA98740-F151-4D95-A063-6CFFB0F0054C.jpeg",
      badge: "RSJ Hoisting & Propping",
    },
    {
      step: "03",
      title: "Pillar Removed & Open Space",
      desc: "Load transferred to new RSJ steel beam and concrete padstones; central column removed.",
      image: "/recent-work/removing-supporting-piller/AB96450B-D648-4214-812E-811DACAC819D.jpeg",
      badge: "Structure Secured",
    },
    {
      step: "04",
      title: "Plaster & Wall Finishes",
      desc: "Drylining, ceiling joist boxing, skim plastering, and flooring underlay installation.",
      image: "/recent-work/removing-supporting-piller/9586EF43-F294-4876-92B8-83014407C645.jpeg",
      badge: "Finishing & Plaster",
    },
    {
      step: "05",
      title: "Completed Open-Plan Room",
      desc: "Spacious, bright open-plan living and dining area with seamless garden patio access.",
      image: "/recent-work/removing-supporting-piller/D2914ACD-CB2D-4026-AB99-E1D98DA690C8.jpeg",
      badge: "Completed Transformation",
    },
  ];

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
            A photographic showcase of our master building work across Cambridge. From complex structural load-bearing pillar removals and RSJ steel beam installations to bespoke house extensions, chimney restorations, and exterior landscaping.
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

      {/* 2. Featured Case Study: Removing Supporting Piller */}
      <section className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Requested Heading */}
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
              <Hammer className="w-3.5 h-3.5 text-amber-700" />
              <span>Featured Structural Project</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              Removing Supporting Piller
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
              In this Cambridge residential transformation, our structural engineering team carried out the removal of a central load-bearing brick supporting pillar. By installing heavy-duty temporary acrow propping and hoisting an engineered RSJ steel beam onto heavy masonry padstones, we eliminated the partition barrier and opened up a stunning open-plan living environment.
            </p>
          </div>

          {/* 5-Step Visual Transformation Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {pillarSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority={idx < 2}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#092457]/90 text-amber-400 text-[11px] font-black px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10">
                    {step.step}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="inline-block px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white text-[10px] font-bold">
                      {step.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-sm font-bold text-[#092457] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Complete On-Site Photo Gallery Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 pt-6 border-t border-slate-200">
            <h3
              className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              Complete On-Site Project Photography
            </h3>
            <p className="text-slate-600 text-sm">
              Click any photo to view in high resolution fullscreen lightbox. Filter by trade category below.
            </p>
          </div>

          {/* Interactive Full Gallery Component */}
          <RecentWorksGallery />

        </div>
      </section>

      {/* 3. Bottom Direct Call to Action */}
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
