"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Hammer,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: "EXPERIENCED",
      subtitle: "Established Since 2007",
      desc: "We’ve been serving Cambridge and surrounding villages for over 18 years, building an enduring reputation for excellence and reliability.",
      highlight: "18+ Years Serving Cambridge",
    },
    {
      icon: Users,
      title: "FRIENDLY & RELIABLE",
      subtitle: "Customer-First Approach",
      desc: "A friendly and approachable business. We communicate transparently every day of the build and gladly go the extra mile for our clients.",
      highlight: "Direct Project Contact",
    },
    {
      icon: Hammer,
      title: "HIGHLY SKILLED",
      subtitle: "All Trades In-House",
      desc: "From chartered structural engineering and brickwork to certified electrical, plumbing, and bespoke joinery, our multi-trade team handles every detail.",
      highlight: "Turnkey Project Delivery",
    },
    {
      icon: ShieldCheck,
      title: "TRUSTED REPUTATION",
      subtitle: "Word-of-Mouth Recommendations",
      desc: "The majority of our projects come from direct personal recommendations and repeat clients across Cambridge who trust us implicitly.",
      highlight: "4.9/5 Verified Rating",
    },
  ];

  const whatWeDoList = [
    "Quality Workmanship and Superior Engineering Knowledge",
    "Every Job Completed on Time and to Fixed Budget",
    "Proven Results Setting Exceptional Cambridge Standards",
    "Full Compliance with UK Building Control & Planning",
    "Professional Service for Both Private Homes and Commercial Estates",
    "10-Year Insurance-Backed Structural Guarantee",
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-40 bg-grid-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#092457] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Why Choose BuilderCambridge.com</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Why Homeowners in Cambridge Trust Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            With nearly two decades of proven building experience across Cambridge, we eliminate contractor stress with transparent communication, fixed price quotes, and master craftsmanship.
          </p>
        </div>

        {/* 4 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1.5 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-[#092457] text-[#092457] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-black text-[#092457] tracking-tight"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#092457]">
                  <span>{pillar.highlight}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dual Split: What We Do & Feature Showcase Image */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Description & Bullet Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
              <span>Comprehensive Building Solutions</span>
            </div>

            <h3
              className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              Delivering Seamless Project Management From Inception to Handover
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With a team of highly experienced and fully qualified trade professionals, we are confident and competitive working on almost any building, extension, structural alteration, or high-end decorating project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {whatWeDoList.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-xl bg-[#092457] hover:bg-[#06183d] text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="/recent-work"
                className="px-6 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors"
              >
                View Cambridge Case Studies
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Image & Floating Stat */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                alt="Builder Cambridge Master Craftsmen at Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Quality Without Compromise
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  Trumpington Open-Plan Kitchen & Extension Build
                </div>
              </div>
            </div>

            {/* Floating Mini Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#092457] text-white p-5 rounded-2xl shadow-xl border border-blue-900 hidden sm:flex items-center gap-4">
              <div className="text-3xl font-black text-amber-400">100%</div>
              <div className="text-xs font-semibold leading-tight text-slate-200">
                Building Regulations<br />Pass Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
