import React from "react";
import { Metadata } from "next";
import { AboutHeroSection } from "@/components/AboutHeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us - House Builders in Cambridge Since 2007",
  description:
    "Learn about BuilderCambridge.com. Over 18 years of premier construction, luxury house extensions, loft conversions, and interior renovations across Cambridge.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-[#051329] text-white py-12 lg:py-16 border-b border-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans uppercase"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            About Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Cambridge’s trusted provider of high-end home extensions, bespoke loft conversions, and turnkey building works.
          </p>
        </div>
      </section>

      {/* Main Modern Story & Interactive Core Section */}
      <AboutHeroSection />

      {/* 4 Pillars Section */}
      <WhyChooseUs />
    </div>
  );
}
