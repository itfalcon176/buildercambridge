"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Phone,
  Calculator,
  Award,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface HeroSectionProps {
  onOpenCalculator?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      headline: "Premier House Builders & Renovations in Cambridge",
      tagline: "Bespoke extensions, luxury loft conversions, and turnkey property transformations crafted with architectural precision.",
      badge: "Rated #1 Builders in Cambridge",
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
      headline: "Transforming Cambridge Homes Since 2007",
      tagline: "Over 18 years of exceptional craftsmanship across CB1 to CB25 postcodes. Fixed prices and 10-year structural guarantees.",
      badge: "10-Year Insurance Backed Guarantee",
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
      headline: "Architectural Extensions & Loft Conversions",
      tagline: "From full planning permissions and structural steelwork to turnkey bespoke finishes with zero stress.",
      badge: "Full Building Control Sign-Off",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-[620px] lg:min-h-[750px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image Carousel with Ken Burns subtle motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroSlides[activeSlide].image}
            alt="Builder Cambridge Luxury Construction"
            fill
            priority
            className="object-cover object-center brightness-[0.42] contrast-[1.12]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#051329]/95 via-[#092457]/70 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#051329] via-transparent to-black/30" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-10 opacity-10 bg-grid-pattern pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Trust Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 backdrop-blur-md text-amber-300 text-xs font-bold tracking-wide shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{heroSlides[activeSlide].badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              key={`h1-${activeSlide}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] font-sans"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              {heroSlides[activeSlide].headline.split("&").map((part, i) => (
                <span key={i}>
                  {i > 0 && <span className="text-amber-400"> &</span>}
                  {part}
                </span>
              ))}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              key={`p-${activeSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed"
            >
              {heroSlides[activeSlide].tagline}
            </motion.p>

            {/* Key Value Checks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-200"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On Time & On Budget</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>All Trades In-House</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Full Building Control</span>
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="px-7 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm tracking-wide flex items-center gap-3 transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.03] active:scale-95 group"
              >
                <span>REQUEST A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/calculator"
                className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold text-sm flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Instant Cost Calculator</span>
              </Link>

              <a
                href="tel:+441223782433"
                className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors px-2 py-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+44 1223 782433</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Floating Trust Badge & Quick Estimator Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl space-y-6 text-slate-100 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Quick Consultation
                  </span>
                  <h3 className="text-lg font-bold text-white">Start Your Project</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-3.5 rounded-2xl border border-white/10 text-center">
                  <div className="text-2xl font-black text-amber-400">18+</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Years Local Experience</div>
                </div>
                <div className="bg-black/30 p-3.5 rounded-2xl border border-white/10 text-center">
                  <div className="text-2xl font-black text-amber-400">350+</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Projects Delivered</div>
                </div>
              </div>

              {/* Google Verified Banner */}
              <div className="bg-gradient-to-r from-blue-900/60 to-slate-900/60 p-4 rounded-2xl border border-blue-600/30 flex items-center gap-3">
                <div className="flex -space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">4.9 Star Verified Rating</div>
                  <div className="text-[10px] text-slate-300">Based on 33+ Google Reviews</div>
                </div>
              </div>

              {/* Direct Action Link */}
              <Link
                href="/services"
                className="w-full py-3 px-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-xs flex items-center justify-between transition-colors group"
              >
                <span>Explore All 15 Building Services</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 pt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index ? "w-8 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
