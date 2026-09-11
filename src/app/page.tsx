import React from "react";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { WorkflowSection } from "@/components/WorkflowSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CambridgeAreasSection } from "@/components/CambridgeAreasSection";
import { CostCalculator } from "@/components/CostCalculatorModal";
import {
  Phone,
  Mail,
  ShieldCheck,
  Star,
  Award,
  ArrowRight,
  Sparkles,
  Building,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section with dynamic slides & badges */}
      <HeroSection />

      {/* 2. Why Choose Us (Experienced, Friendly, Skilled, Trusted) */}
      <WhyChooseUs />

      {/* 3. What We Do (Exact Original Copy & Modern Architectural Showcase) */}
      <WhatWeDoSection />

      {/* 4. Master Services Grid (All 15 building services with interactive filtering) */}
      <ServicesGrid showAll={false} limit={6} />

      {/* 4. Interactive Before / After Slider */}
      <BeforeAfterSlider />

      {/* 5. 5-Stage Cambridge Project Workflow */}
      <WorkflowSection />

      {/* 6. Embedded Interactive Cost Estimator Teaser */}
      <section className="py-20 lg:py-28 bg-slate-100 relative overflow-hidden" id="calculator">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator isModal={false} />
        </div>
      </section>

      {/* 7. Real 5-Star Google Testimonials */}
      <TestimonialsSection />

      {/* 8. Local Cambridge Postcode Coverage & Guarantee */}
      <CambridgeAreasSection />

      {/* 9. Final High-Conversion Quote Banner */}
      <section className="py-16 bg-[#092457] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Ready to Start Your Build?</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Turn Your Cambridge Property Vision Into Reality
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Get in touch with our friendly Cambridge team today for expert architectural guidance, itemized fixed-price quotes, and a free site survey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs tracking-wider uppercase flex items-center gap-3 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <a
              href="tel:+441223782433"
              className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-3 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>CALL +44 1223 782433</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
