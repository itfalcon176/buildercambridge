"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Clock,
  Banknote,
  CheckCircle2,
  Layers,
  Home,
  ShieldCheck,
  Building2,
  Hammer,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";

interface ServicesGridProps {
  showAll?: boolean;
  limit?: number;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ showAll = false, limit = 15 }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { name: "All", icon: Layers },
    { name: "Residential", icon: Home },
    { name: "Structural", icon: ShieldCheck },
    { name: "Commercial", icon: Building2 },
    { name: "Groundworks", icon: Hammer },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === "All") return true;
    return service.category === activeCategory;
  });

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, limit);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#092457] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Full-Scope Construction Expertise</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              Our Master Building Services
            </h2>
            <p className="text-slate-600 text-base">
              From architectural home extensions to full ground-up structural works, we deliver superior craftsmanship across Cambridge.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-[#092457] text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-blue-300" : "text-slate-400"}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#092457]/80 backdrop-blur-md text-blue-200 text-[11px] font-bold tracking-wide border border-blue-900/50">
                        {service.category}
                      </span>
                    </div>

                    {service.badge && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-black tracking-wide shadow-md">
                          {service.badge}
                        </span>
                      </div>
                    )}

                    {/* Timeline Pill */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5 text-blue-300" />
                      <span>{service.typicalTimeline}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#092457] group-hover:text-blue-700 transition-colors font-sans">
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Top 3 Features */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-3 px-4 rounded-xl bg-blue-50 hover:bg-[#092457] text-[#092457] hover:text-white text-xs font-bold flex items-center justify-between transition-all group/btn"
                  >
                    <span>View Service Specifications</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTAs */}
        {!showAll && (
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#092457] hover:bg-[#06183d] text-white font-bold text-sm transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <span>EXPLORE ALL 15 BUILDING SERVICES</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
