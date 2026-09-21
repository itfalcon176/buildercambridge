"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  location?: string;
  category?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = "/images/before and after/before.jpg.jpeg",
  afterImage = "/images/before and after/after.jpg.jpeg",
  title = "Victorian Ground Floor & Rear Extension Transformation",
  location = "Trumpington, Cambridge (CB2)",
  category = "House Extension & Structural Open-Plan",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <h2
              className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              See the Power of High-End Cambridge Craftsmanship
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Drag the slider to compare the dated, dark living spaces with our finished architectural open-plan kitchen extension. Complete with RSJ structural beams, flush threshold bifolding glazing, and zoned underfloor heating.
            </p>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Project Metrics
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400">Location:</span>
                  <div className="font-bold text-white mt-0.5">{location}</div>
                </div>
                <div>
                  <span className="text-slate-400">Duration:</span>
                  <div className="font-bold text-white mt-0.5">12 Weeks</div>
                </div>
                <div>
                  <span className="text-slate-400">Type:</span>
                  <div className="font-bold text-white mt-0.5">{category}</div>
                </div>
                <div>
                  <span className="text-slate-400">Guarantee:</span>
                  <div className="font-bold text-emerald-400 mt-0.5">10-Year Warranty</div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/recent-work"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg active:scale-95"
              >
                <span>EXPLORE ALL CASE STUDIES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Before/After Image Slider */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border-2 border-slate-700"
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={afterImage}
                  alt="Completed Modern House Extension Cambridge"
                  fill
                  className="object-cover pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-black px-3 py-1.5 rounded-full backdrop-blur-md shadow-md">
                  AFTER: Completed Build
                </div>
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={beforeImage}
                  alt="Pre-construction house Cambridge"
                  fill
                  className="object-cover pointer-events-none"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-black px-3 py-1.5 rounded-full backdrop-blur-md shadow-md">
                  BEFORE: Original State
                </div>
              </div>

              {/* Central Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl border-2 border-white">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span>Drag slider left and right to inspect the transformation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
