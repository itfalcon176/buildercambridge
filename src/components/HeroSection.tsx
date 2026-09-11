"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
} from "lucide-react";

interface HeroSectionProps {
  onOpenCalculator?: () => void;
}

const heroSlides = [
  {
    image: "/hero slider/buildercambridge-com-house-builders-in-cambridge-building-contractors-uk.image.banner.Woblo.jpg",
    headline: "Expert House Renovations & Project Management",
    tagline: "Dedicated site management, full structural alterations, and turnkey home refurbishments delivered with precision in Cambridge.",
    align: "left" as const,
  },
  {
    image: "/hero slider/buildercambridge-com-house-builders-in-cambridge-building-contractors-uk.image.banner-1.Woblo.jpg",
    headline: "Bespoke New Builds & Groundwork Developments",
    tagline: "From architectural site planning and groundwork to complete new home construction, built to the highest British standards.",
    align: "right" as const,
  },
  {
    image: "/hero slider/buildercambridge-com-house-builders-in-cambridge-building-contractors-uk.image.banner-2.Woblo.jpg",
    headline: "Luxury Loft Conversions & Timber Roof Framing",
    tagline: "Unlock expansive living space and property value with bespoke dormer, mansard loft conversions, and master timber carpentry.",
    align: "left" as const,
  },
  {
    image: "/hero slider/buildercambridge-com-house-builders-in-cambridge-building-contractors-uk.image.banner-3.Woblo.jpg",
    headline: "Precision Masonry, Brickwork & Structural Alterations",
    tagline: "Specialist knock-throughs, steel beam RSJ installations, bricklaying, and meticulous interior structural renovations.",
    align: "right" as const,
  },
];

const SLIDE_DURATION = 6500; // 6.5s

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentSlide = heroSlides[activeSlide];
  const isRightAligned = currentSlide.align === "right";

  return (
    <section className="relative h-[calc(100svh-70px)] md:h-[calc(100vh-114px)] min-h-[560px] flex items-center overflow-hidden bg-slate-950 text-white select-none">
      {/* 100% Clear High-Definition Background Images */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.headline}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dynamic directional feather gradient: on left for left-aligned slides, on right for right-aligned slides */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none max-w-4xl transition-all duration-700 ${
          isRightAligned
            ? "bg-gradient-to-l from-black/85 via-black/45 to-transparent ml-auto right-0"
            : "bg-gradient-to-r from-black/85 via-black/45 to-transparent mr-auto left-0"
        }`}
      />
      <div className="absolute bottom-0 inset-x-0 h-28 z-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      {/* Main Content Container - Dynamically aligned Left or Right */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full flex">
        <div
          className={`max-w-2xl sm:max-w-3xl space-y-5 sm:space-y-6 ${
            isRightAligned ? "ml-auto text-left" : "mr-auto text-left"
          }`}
        >
          {/* Main Headline */}
          <motion.h1
            key={`h1-${activeSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            {currentSlide.headline}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            key={`p-${activeSlide}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
          >
            {currentSlide.tagline}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-[#092457] hover:bg-[#0e357d] text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all shadow-2xl shadow-black/50 border border-blue-400/30 hover:scale-[1.02] active:scale-95 group"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+441223782433"
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-blue-300 transition-colors bg-slate-950/60 hover:bg-slate-950/80 backdrop-blur-xl px-5 py-4 rounded-xl border border-white/20 shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+44 1223 782433</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




