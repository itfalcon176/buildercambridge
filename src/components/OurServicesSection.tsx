"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const OurServicesSection: React.FC = () => {
  const featuredServices = [
    {
      number: "01",
      title: "INTERIOR RENOVATION",
      category: "Residential",
      badge: "Full Refurbishment",
      desc: "Complete interior remodelling, structural knock-throughs, designer kitchens, and luxury bathrooms.",
      features: [
        "Load-bearing wall removals & RSJ steels",
        "Bespoke kitchen & bathroom installations",
        "Turnkey electrical, plumbing & tiling",
      ],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      href: "/services/interior-renovation",
    },
    {
      number: "02",
      title: "LOFT CONVERSIONS",
      category: "Conversions",
      badge: "High Value ROI",
      desc: "Transform unused attic space into luxury master suites, home offices, and light-filled studio rooms.",
      features: [
        "Rear dormer, mansard & hip-to-gable",
        "Velux rooflights & architectural glazing",
        "Bespoke staircases & ensuite bathrooms",
      ],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      href: "/services/loft-conversions-cambridge",
    },
    {
      number: "03",
      title: "COMMERCIAL BUILDERS",
      category: "Commercial",
      badge: "Premises & Estates",
      desc: "High-spec commercial premises, office fit-outs, retail refurbishments, and structural alterations.",
      features: [
        "Office renovations & space planning",
        "Retail, hospitality & educational fit-outs",
        "Strict safety & UK Building Control compliance",
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      href: "/services/commercial-builders",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden" id="our-services">
      {/* Subtle Architectural Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#092457] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Master Building & Renovations</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092457] tracking-tight uppercase"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            OUR SERVICES
          </h2>
          <div className="w-20 h-1 bg-[#092457] rounded-full mx-auto" />

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-1">
            Delivering high-end architectural construction, extensions, conversions, and renovations across Cambridge.
          </p>
        </div>

        {/* 3 Modern Luxury Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-3.5 border border-slate-200/80 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Floating Badges */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Top Floating Number & Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-xl bg-[#092457]/90 backdrop-blur-md text-white text-xs font-black tracking-wider border border-white/20">
                      {service.number}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wide shadow-sm">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3
                      className="text-xl font-black text-[#092457] group-hover:text-blue-600 transition-colors uppercase tracking-tight"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                      {service.desc}
                    </p>
                  </div>

                  {/* Key Feature Checkmarks */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold">✓</span>
                        </div>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href={service.href}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-100 group-hover:bg-[#092457] text-[#092457] group-hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-all duration-300 shadow-xs"
                >
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-4.5 rounded-2xl bg-[#092457] hover:bg-[#06183d] text-white font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 group"
          >
            <span>VIEW ALL 15 BUILDING SERVICES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
