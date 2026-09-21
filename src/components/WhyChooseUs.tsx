"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Building2,
      title: "EXPERIENCED",
      desc: "We've been in the industry since 2007 and we're proud of the reputation we've built.",
      badge: "Since 2007",
    },
    {
      icon: Users,
      title: "FRIENDLY",
      desc: "A friendly and reliable business, we are very approachable and will go the extra mile for our customers.",
      badge: "Customer-First",
    },
    {
      icon: Wrench,
      title: "SKILLED",
      desc: "We have the experience in complete home renovations and cover all trades, our team can complete any job from start to finish.",
      badge: "All Trades Covered",
    },
    {
      icon: ShieldCheck,
      title: "TRUSTED",
      desc: "The majority of our work comes through word of mouth, we're trusted to get the job done and done well.",
      badge: "Word of Mouth",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#092457] text-white overflow-hidden">
      {/* Background Image with Deep Blue Overlay & Subtle Parallax Feel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero slider/buildercambridge-com-house-builders-in-cambridge-building-contractors-uk.image.banner-3.Woblo.jpg"
          alt="Builder Cambridge Workmanship"
          fill
          className="object-cover object-center opacity-20 mix-blend-luminosity"
          sizes="100vw"
        />
        {/* Modern Gradients & Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06183d] via-[#092457]/95 to-[#06183d]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Heading & Branding (Guaranteed no overflow) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 min-w-0 space-y-5 sm:space-y-6"
          >
            <div className="space-y-1.5">
              <span className="block text-sm sm:text-base font-extrabold text-blue-300 tracking-wider uppercase">
                WHY CHOOSE
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-[1.85rem] xl:text-[2.2rem] font-black text-white tracking-tight leading-snug break-words"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                BUILDERCAMBRIDGE<span className="text-blue-400">.COM</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mt-2" />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
              We provide premier residential and commercial construction services across Cambridge. Delivering unmatched craftsmanship, seamless project management, and complete peace of mind.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg shadow-blue-900/40 hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <a
                href="tel:+441223782433"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all active:scale-[0.98] backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+44 1223 782433</span>
              </a>
            </div>

            {/* Micro Trust Stats */}
            <div className="pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Fixed Price Quotes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Full UK Building Control</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Modern Glass Cards (min-w-0 for perfect responsiveness) */}
          <div className="lg:col-span-7 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative bg-white/[0.06] hover:bg-white/[0.1] backdrop-blur-md border border-white/10 hover:border-blue-400/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-1 flex flex-col justify-between min-w-0"
                >
                  {/* Subtle Card Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="space-y-3.5 relative z-10 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 p-2.5 rounded-xl bg-blue-500/15 border border-blue-400/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-sm flex items-center justify-center shrink-0">
                        <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-blue-300/80 uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 border border-white/10 shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="text-base sm:text-lg font-black text-white tracking-wider uppercase group-hover:text-blue-300 transition-colors"
                        style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 font-normal break-words">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
