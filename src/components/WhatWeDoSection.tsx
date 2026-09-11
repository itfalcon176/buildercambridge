"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Award,
  Clock,
  Building,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export const WhatWeDoSection: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const highlights = [
    {
      title: "Quality Workmanship and Superior Knowledge",
      desc: "Chartered expertise and meticulous attention to every building detail.",
      icon: Award,
    },
    {
      title: "A Job is Done on Time and on Budget",
      desc: "Transparent scheduling and fixed-price contracts without hidden surprises.",
      icon: Clock,
    },
    {
      title: "Proven Results for Setting Exceptional Standards",
      desc: "Delivering award-winning residential transformations across Cambridge.",
      icon: Sparkles,
    },
    {
      title: "Professional Service for Private and Commercial",
      desc: "Tailored construction solutions for homeowners, landlords, and estates.",
      icon: Building,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="what-we-do">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Content & Exact Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Full-Spectrum Building & Renovations</span>
            </div>

            {/* Title with Modern Architectural Underline */}
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092457] tracking-tight uppercase"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                WHAT WE DO
              </h2>
              <div className="w-24 h-1.5 bg-[#092457] rounded-full mt-3.5" />
            </div>

            {/* Paragraph 1 */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              With a team of highly experienced and fully qualified employees we are confident and competitive working on almost any building and decorating work.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              As a professional home improvements company, we at <strong className="text-[#092457] font-bold">BuilderCambridge.com</strong> take great pride in our work and our aim is to deliver seamless project management and an exceptional final result, regardless of the project size and complexity.
            </p>

            {/* 4 Feature Cards / Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {highlights.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 group flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 group-hover:bg-[#092457] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <h3
                        className="text-sm sm:text-base font-bold text-[#092457] leading-snug group-hover:text-blue-900 transition-colors"
                        style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-xl bg-[#092457] hover:bg-[#06183d] text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2.5 transition-all shadow-md shadow-blue-950/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>VIEW ALL SERVICES</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <button
                onClick={() => openQuoteModal("Free Site Survey")}
                className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#092457] font-bold text-xs tracking-wider uppercase flex items-center gap-2.5 transition-all hover:border-blue-400 active:scale-[0.98] cursor-pointer"
              >
                <span>GET A FREE SURVEY</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/what-we-do.jpg"
                alt="BuilderCambridge.com Construction and Project Management Team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Subtle Dark Gradient Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06183d]/85 via-black/20 to-transparent" />

              {/* Floating Bottom Info Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl text-[#092457]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                      Cambridge Building Contractors
                    </div>
                    <div className="text-base font-black text-slate-950 mt-0.5">
                      Turnkey Project Management
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#092457] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-blue-300" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>100% Insured & Guaranteed</span>
                  <span className="font-bold text-[#092457]">Fixed-Price Quotes</span>
                </div>
              </div>
            </div>

            {/* Floating Top-Right Mini Badge */}
            <div className="absolute -top-4 -right-4 bg-[#092457] text-white py-3 px-4.5 rounded-2xl shadow-xl border border-blue-900 hidden sm:flex items-center gap-3">
              <div className="text-2xl font-black text-blue-300">18+</div>
              <div className="text-[11px] font-semibold leading-tight text-slate-200">
                Years of Excellence<br />In Cambridge
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
