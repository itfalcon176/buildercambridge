"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Search,
  X,
  Sparkles,
  Layers,
  Home,
  ShieldCheck,
  Building2,
  Hammer,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface ServicesGridProps {
  showAll?: boolean;
  limit?: number;
  hideHeader?: boolean;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  showAll = true,
  limit = 15,
  hideHeader = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { openQuoteModal } = useQuoteModal();

  const categories = [
    { name: "All", icon: Layers },
    { name: "Residential", icon: Home },
    { name: "Structural", icon: ShieldCheck },
    { name: "Commercial", icon: Building2 },
    { name: "Groundworks", icon: Hammer },
  ];

  // Dynamic counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: servicesData.length };
    servicesData.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered by Category + Search Query
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        activeCategory === "All" || service.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = service.title.toLowerCase().includes(q);
      const inDesc = service.shortDesc.toLowerCase().includes(q);
      const inCategory = service.category.toLowerCase().includes(q);
      const inFeatures = (service.features || []).some((f) =>
        f.toLowerCase().includes(q)
      );

      return inTitle || inDesc || inCategory || inFeatures;
    });
  }, [activeCategory, searchQuery]);

  const displayedServices = showAll
    ? filteredServices
    : filteredServices.slice(0, limit);

  return (
    <section className="py-12 lg:py-20 bg-slate-50/50" id="services-directory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#092457] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Full-Scope Construction Expertise</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              Explore Our Building Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Find the exact building, renovation, or structural service tailored for your Cambridge property.
            </p>
          </div>
        )}

        {/* Modern Filter & Search Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-sm mb-10">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.name;
                const count = categoryCounts[cat.name] || 0;

                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 ${
                      isSelected
                        ? "bg-[#092457] text-white shadow-md shadow-[#092457]/20"
                        : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-blue-300" : "text-slate-400"}`} />
                    <span>{cat.name}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                        isSelected ? "bg-white/20 text-white" : "bg-white text-slate-500 shadow-xs"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. loft, kitchen)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#092457]/15 focus:border-[#092457] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Results Counter Status */}
          <div className="mt-3.5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div>
              Showing <span className="font-bold text-slate-800">{displayedServices.length}</span> of{" "}
              <span className="font-bold text-slate-800">{servicesData.length}</span> services
              {searchQuery && (
                <span> for &ldquo;<span className="text-blue-600 font-semibold">{searchQuery}</span>&rdquo;</span>
              )}
            </div>
            {(searchQuery || activeCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {displayedServices.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              No matching building services found
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
              We couldn&apos;t find any service matching &ldquo;{searchQuery}&rdquo;. Try searching for general terms like &ldquo;extension&rdquo;, &ldquo;renovation&rdquo;, or &ldquo;roofing&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-5 py-2.5 rounded-xl bg-[#092457] text-white text-xs font-bold hover:bg-blue-900 transition-colors shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Clean, Modern Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3) }}
                className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Container with Crisp Modern Aspect Ratio */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#092457] text-[11px] font-bold tracking-wide shadow-xs border border-white/40">
                        {service.category}
                      </span>

                      {service.badge && (
                        <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold tracking-wide shadow-xs">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Bottom Floating Timeline Badge */}
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/60 backdrop-blur-md text-white text-[11px] font-medium border border-white/10">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{service.typicalTimeline}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3.5">
                    <h3
                      className="text-lg sm:text-xl font-bold text-[#092457] group-hover:text-blue-700 transition-colors font-sans leading-snug"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      <Link href={`/services/${service.slug}`} className="hover:underline">
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* 3 Key Highlights */}
                    {service.features && service.features.length > 0 && (
                      <div className="pt-3 border-t border-slate-100 space-y-1.5">
                        {service.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#092457] text-[#092457] hover:text-white text-xs font-bold flex items-center justify-between transition-all duration-200 group/btn border border-slate-200/70 hover:border-[#092457]"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => openQuoteModal(service.title)}
                    title={`Request quote for ${service.title}`}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-amber-500 text-slate-600 hover:text-slate-950 border border-slate-200/70 hover:border-amber-500 transition-all duration-200 shrink-0"
                    aria-label={`Get quote for ${service.title}`}
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTAs when limit is active */}
        {!showAll && (
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#092457] hover:bg-[#06183d] text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:scale-105 active:scale-95"
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
