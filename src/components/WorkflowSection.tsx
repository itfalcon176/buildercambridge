"use client";

import React from "react";
import Link from "next/link";
import {
  Search,
  Compass,
  FileCheck,
  Hammer,
  KeyRound,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Site Survey",
      desc: "Free comprehensive site visit in Cambridge to assess structural suitability, boundary constraints, and feasibility.",
    },
    {
      number: "02",
      icon: Compass,
      title: "Design & Structural Engineering",
      desc: "Architectural drawings, 3D visualizations, and structural steel calculations produced and finalized with you.",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Planning & Building Regs",
      desc: "We submit council planning applications, lawful development certificates, and full plans building notices.",
    },
    {
      number: "04",
      icon: Hammer,
      title: "Precision Construction",
      desc: "Site preparation, foundation pours, structural steelwork, brickwork, first & second fix with dedicated site management.",
    },
    {
      number: "05",
      icon: KeyRound,
      title: "Sign-Off & 10-Yr Warranty",
      desc: "Building control final inspection, issue of completion certificates, and handover with full 10-year structural warranty.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#092457] text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Structured & Stress-Free Process</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            How We Build Your Vision
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Our 5-stage project roadmap ensures total cost certainty, clear daily communication, and zero surprises from concept to completion.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-blue-950/60 p-6 rounded-3xl border border-blue-800/40 hover:border-amber-400/60 transition-all flex flex-col justify-between space-y-6 group hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-amber-400 font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-900/60 group-hover:bg-amber-500 group-hover:text-slate-950 text-amber-400 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-sans">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed mt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-blue-900/60 flex items-center gap-1.5 text-[11px] font-bold text-amber-400">
                  <span>Milestone Stage</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 lg:p-10 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight">
              Ready to Discuss Your Project in Cambridge?
            </h3>
            <p className="text-sm font-semibold text-slate-900 max-w-xl">
              Book a free, no-obligation site survey and itemized feasibility estimate with our master builders.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-2xl bg-[#092457] hover:bg-[#051329] text-white font-black text-xs tracking-wider uppercase flex items-center gap-3 transition-all shadow-xl hover:scale-105 active:scale-95 shrink-0"
          >
            <span>BOOK FREE SITE SURVEY</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
