import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Users,
  Hammer,
  Clock,
  ArrowRight,
  Sparkles,
  Phone,
  Star,
} from "lucide-react";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "About Us - House Builders in Cambridge Since 2007",
  description:
    "Learn about BuilderCambridge.com. Over 18 years of premier construction, luxury house extensions, loft conversions, and interior renovations across Cambridge.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#092457] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Master Craftsmen Since 2007</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            We Are BuilderCambridge.com
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cambridge’s trusted provider of high-end home extensions, bespoke loft conversions, and turnkey building works.
          </p>
        </div>
      </section>

      {/* Main Story & Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image with Circular Border Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto rounded-full overflow-hidden border-8 border-slate-100 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80"
                  alt="Builder Cambridge Team on Site"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-4 sm:right-12 bg-[#092457] text-white p-4 rounded-2xl shadow-xl border border-blue-900 flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-400" />
                <div>
                  <div className="text-xl font-black text-amber-400">18+ Years</div>
                  <div className="text-[11px] text-slate-300">Local Cambridge Legacy</div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission Content (Preserved from live site) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest">
                <span>Our Heritage & Standards</span>
              </div>
              <h2
                className="text-2xl sm:text-4xl font-black text-[#092457] tracking-tight font-sans"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                A Professional Renovation & Construction Service With Real Focus On Customer Satisfaction
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                BuilderCambridge.com has established itself as one of the greatest and prestigious providers of construction focused, interior renovation services and building works. We provide a professional renovation and installation service with a real focus on customer satisfaction.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our construction service is a multi-task company specializing in house extensions, dormer and Velux loft conversions, structural kitchen knock-throughs, luxury bathrooms, roofing, new builds, and commercial contracting.
              </p>

              {/* Core Services Quick Links */}
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#092457] uppercase tracking-wider mb-3">
                  Core Specialisms:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {servicesData.slice(0, 9).map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#092457] font-semibold border border-slate-100 transition-colors flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{s.title.replace(" Cambridge", "")}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl bg-[#092457] hover:bg-[#06183d] text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <span>GET IN TOUCH WITH US</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
                <Link
                  href="/recent-work"
                  className="px-6 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors"
                >
                  View Completed Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <WhyChooseUs />
    </div>
  );
}
