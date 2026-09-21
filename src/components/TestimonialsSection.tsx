"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { reviewsData } from "@/data/reviewsData";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Builder+Cambridge/@52.2104504,0.1362347,17z/data=!4m16!1m9!3m8!1s0x47d871828c55c051:0xf34b99b6b1550cac!2sBuilder+Cambridge!8m2!3d52.2104504!4d0.1388096!9m1!1b1!16s%2Fg%2F11gsn46x9s!3m5!1s0x47d871828c55c051:0xf34b99b6b1550cac!8m2!3d52.2104504!4d0.1388096!16s%2Fg%2F11gsn46x9s";

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const itemsPerPage = 3;
  const totalReviews = reviewsData.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  }, [totalReviews]);

  // Infinite circular slice of 3 reviews
  const visibleReviews = Array.from({ length: itemsPerPage }).map(
    (_, i) => reviewsData[(startIndex + i) % totalReviews]
  );

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-slate-50 relative overflow-hidden" id="testimonials">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Top Header & Live Google Rating Card */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                {startIndex + 1} / {totalReviews} Reviews
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#092457] tracking-tight uppercase"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              What Cambridge Clients Say
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Real 5-star feedback from local homeowners and property developers across Cambridge.
            </p>
          </div>

          {/* Official Google Live Card with Builder Cambridge Logo & Navigation Controls */}
          <div className="flex items-center gap-3 sm:gap-4 self-start md:self-auto flex-wrap sm:flex-nowrap">
            {/* Google Rating Badge with Builder Cambridge Logo */}
            <div className="bg-white p-3 sm:px-4 sm:py-3.5 rounded-2xl border border-slate-200/90 shadow-md flex items-center gap-3 sm:gap-3.5">
              {/* Builder Cambridge Logo */}
              <div className="pr-3 sm:pr-3.5 border-r border-slate-200 flex items-center shrink-0">
                <Image
                  src="/logo/logo side  blue.png"
                  alt="Builder Cambridge"
                  width={110}
                  height={30}
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </div>

              {/* Google G Icon */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 p-1.5 rounded-xl bg-slate-50 border border-slate-100 shadow-xs flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm sm:text-base font-black text-slate-950">4.7</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-700">
                  32+ Google Reviews
                </div>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white hover:bg-[#092457] text-slate-700 hover:text-white border border-slate-200 shadow-sm flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
                aria-label="Previous 5-star Review"
                title="Previous 5-star Review"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white hover:bg-[#092457] text-slate-700 hover:text-white border border-slate-200 shadow-sm flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
                aria-label="Next 5-star Review"
                title="Next 5-star Review"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 1 Single Row of 3 Sleek Compact Cards (Fits on 1 Screen!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout" custom={direction}>
            {visibleReviews.map((review, index) => (
              <motion.div
                key={`${review.id}-${startIndex}-${index}`}
                initial={{ opacity: 0, x: direction * 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 25 }}
                transition={{ duration: 0.28, delay: index * 0.04 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  {/* Reviewer Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xs sm:text-sm font-black text-[#092457]"
                          style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                        >
                          {review.author}
                        </h3>
                        <div className="text-[10px] text-slate-500 font-medium">
                          {review.location}
                        </div>
                      </div>
                    </div>

                    {/* Google Icon Badge */}
                    <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* 5-Star Gold Rating & Project Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[10px] font-bold text-blue-900 border border-blue-100/80 truncate max-w-[170px]">
                      {review.projectType}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                {/* Verified Badge Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified 5★ Review</span>
                  </span>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#092457] hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-7 flex items-center justify-center gap-1.5">
          {Array.from({ length: totalReviews }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => {
                setDirection(dotIndex > startIndex ? 1 : -1);
                setStartIndex(dotIndex);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIndex === startIndex
                  ? "w-7 bg-[#092457]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to review ${dotIndex + 1}`}
            />
          ))}
        </div>

        {/* Compact Footer Action Link */}
        <div className="mt-5 text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#092457] hover:text-blue-600 uppercase tracking-wider transition-colors py-2 px-4 rounded-xl hover:bg-slate-100"
          >
            <span>Read All 32+ Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
          </a>
        </div>

      </div>
    </section>
  );
};
