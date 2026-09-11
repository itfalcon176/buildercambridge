"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { reviewsData } from "@/data/reviewsData";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Trustindex Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#092457] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Real Customer Feedback</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              What Our Cambridge Clients Say
            </h2>
            <p className="text-slate-600 text-base">
              Verified 5-star Google reviews from homeowners and commercial property clients across Cambridge.
            </p>
          </div>

          {/* Google Verified Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 self-start md:self-auto">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 font-black text-xl">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="font-bold text-slate-900 text-xs ml-1">4.9 / 5.0</span>
              </div>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                33+ Verified Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Carousel Card */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200/80 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Author Info & Rating */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-amber-400/40">
                  <Image
                    src={reviewsData[currentIndex].avatar}
                    alt={reviewsData[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#092457]">
                    {reviewsData[currentIndex].author}
                  </h4>
                  <div className="text-xs text-slate-500">{reviewsData[currentIndex].location}</div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{reviewsData[currentIndex].date}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Project Executed
                </div>
                <div className="text-xs font-bold text-[#092457] mt-0.5">
                  {reviewsData[currentIndex].projectType}
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Right Column: Review Text Quote */}
            <div className="lg:col-span-8 lg:pl-4 space-y-6 relative">
              <Quote className="w-12 h-12 text-slate-100 absolute -top-4 -left-2 pointer-events-none -z-0" />
              <div className="relative z-10 text-slate-700 text-sm sm:text-base leading-relaxed italic">
                &ldquo;{reviewsData[currentIndex].content}&rdquo;
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-400">
                  Review {currentIndex + 1} of {reviewsData.length}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#092457] text-slate-700 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#092457] text-slate-700 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Summary Mini-Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {reviewsData.slice(1, 4).map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">Google Review</span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-3 italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#092457]">
                <span>{rev.author}</span>
                <span className="text-[11px] font-normal text-slate-400">{rev.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
