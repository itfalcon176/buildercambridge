"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Home,
  Building2,
  Hammer,
  Layers,
  ArrowUpRight,
  FileCheck,
  Bath,
  UtensilsCrossed,
  RefreshCw,
  Briefcase,
  Phone,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

const coreAreas = [
  { name: "Building Regulations", slug: "building-regulations-planning", icon: FileCheck },
  { name: "Extensions Cambridge", slug: "extensions-cambridge", icon: Home },
  { name: "Loft Conversions Cambridge", slug: "loft-conversions-cambridge", icon: Layers },
  { name: "Bathrooms Cambridge", slug: "interior-renovation", icon: Bath },
  { name: "Kitchens Cambridge", slug: "interior-renovation", icon: UtensilsCrossed },
  { name: "Refurbishments Cambridge", slug: "refurbishments-cambridge", icon: RefreshCw },
  { name: "New Builds Cambridge", slug: "new-builds-cambridge", icon: Building2 },
  { name: "Commercial Builders Cambridge", slug: "commercial-builders-fit-outs", icon: Briefcase },
];

export const AboutHeroSection: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-slate-100/80 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Modern Floating Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Shadow/Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-200/60 to-slate-200/60 rounded-3xl blur-xl opacity-70 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl group">
              <div className="relative h-[440px] sm:h-[500px] lg:h-[560px] w-full overflow-hidden">
                <Image
                  src="/images/about-us.jpg"
                  alt="BuilderCambridge.com Master Craftsmen at work"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092457]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-xs font-bold text-[#092457] shadow-lg">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Established 2007</span>
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#092457] text-[11px] font-extrabold text-white tracking-wide shadow-lg">
                  <span>CAMBRIDGE, UK</span>
                </div>
              </div>

              {/* Bottom Glass Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>100% Fully Guaranteed</span>
                    </div>
                    <div className="text-sm sm:text-base font-black text-[#092457]">
                      Cambridge's Trusted Builders
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-black text-amber-500">4.9/5</div>
                    <div className="text-[10px] text-slate-500 font-medium">Google Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Content, Typography & Interactive Specialisms Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Bespoke Residential & Commercial Contractors</span>
            </div>

            {/* Header */}
            <div className="space-y-2">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-black text-[#092457] tracking-tight leading-tight uppercase font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                WE ARE{" "}
                <span className="text-blue-600">
                  BUILDERCAMBRIDGE.COM
                </span>
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full mt-2.5" />
            </div>

            {/* Main Paragraph Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Builder london has established itself as one of the greatest and prestigious providers of construction focused, interior renovation services and building works. We provide a professional renovation and installation service with a real focus on customer satisfaction. Our construction service is a multi-task company specialising in the following core areas:
            </p>

            {/* Interactive Modern 2-Column Grid for Core Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {coreAreas.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={`/services/${item.slug}`}
                    className="group relative flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:translate-x-1 shadow-2xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-blue-100/80 group-hover:bg-[#092457] text-blue-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#092457] truncate transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full bg-[#092457] hover:bg-[#06183d] text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2.5 transition-all shadow-lg shadow-blue-950/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <button
                type="button"
                onClick={() => openQuoteModal("About Us - Consultation")}
                className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
