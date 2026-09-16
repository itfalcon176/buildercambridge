import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ServicesGrid } from "@/components/ServicesGrid";
import {
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  FileCheck2,
  CalendarCheck,
  MessageSquareText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Building Services Cambridge | Extensions, Lofts, Refurbishments & Commercial",
  description:
    "Explore 15 master building & architectural services across Cambridge. From bespoke house extensions and loft conversions to period restorations and commercial builds.",
};

export default function ServicesPage() {
  const trustPillars = [
    {
      title: "Fixed-Price Guarantee",
      desc: "Transparent, itemized contracts with locked-in stage payments. Zero surprise extra fees.",
      icon: ShieldCheck,
    },
    {
      title: "10-Year Structural Warranty",
      desc: "Comprehensive insurance-backed warranty across all structural, roofing, and foundational work.",
      icon: Award,
    },
    {
      title: "Planning & Building Control",
      desc: "Full liaison with Cambridge City Council & South Cambridgeshire for approvals and sign-offs.",
      icon: FileCheck2,
    },
    {
      title: "Dedicated Site Management",
      desc: "A single experienced project manager overseeing daily trades, cleanliness, and scheduled milestones.",
      icon: CalendarCheck,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Feasibility",
      desc: "Complimentary site visit, laser measurements, architectural feasibility check, and ballpark estimate.",
    },
    {
      step: "02",
      title: "Design & Approvals",
      desc: "Detailed CAD drawings, structural steel calculations, and submission for planning or permitted development.",
    },
    {
      step: "03",
      title: "Master Construction",
      desc: "Scheduled build program delivered by certified tradesmen with regular updates and strict safety compliance.",
    },
    {
      step: "04",
      title: "Sign-Off & Warranty",
      desc: "Final Building Control inspection, completion certificate issuance, and 10-year warranty handover.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Sleek Modern Hero */}
      <section className="bg-[#092457] text-white py-16 sm:py-24 relative overflow-hidden">
        {/* Ambient Subtle Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>15 Specialized Building Services</span>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Architectural Building & Construction Services
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering bespoke domestic extensions, loft conversions, structural remodelling, and commercial projects across Cambridge and South Cambridgeshire.
          </p>

          {/* Trust Highlights Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>18+ Years Cambridge Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>10-Year Structural Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Fixed-Price Quotations</span>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg active:scale-95"
            >
              <span>REQUEST A FREE SURVEY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+441223782433"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>01223 782433</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Interactive Services Grid with Integrated Search & Category Pills */}
      <ServicesGrid showAll={true} hideHeader={true} />

      {/* 3. Streamlined 4-Step Process Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Seamless Project Delivery
            </span>
            <h2
              className="text-2xl sm:text-4xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              How We Deliver Your Build
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              A structured, transparent roadmap from feasibility survey to final Building Control sign-off.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-block text-2xl font-black text-blue-600/80 font-sans">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-[#092457] font-sans">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Assurance Pillars */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Why Builder Cambridge
            </span>
            <h2
              className="text-2xl sm:text-4xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              Built On Integrity & Precision
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We eliminate the stress of residential construction through clear guarantees and master craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#092457]">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Free Consultation & Fixed-Price Quote Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092457] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 text-center lg:text-left relative z-10 max-w-xl">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 inline-block">
                Complimentary Site Feasibility
              </span>
              <h3
                className="text-2xl sm:text-3xl font-black font-sans tracking-tight"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                Ready to Discuss Your Building Project?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Book a free on-site feasibility consultation with our senior project managers. We provide straightforward advice, planning insight, and an itemized fixed-price quotation.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 relative z-10">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+441223782433"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>01223 782433</span>
              </a>
              <a
                href="https://wa.me/441223782433"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
