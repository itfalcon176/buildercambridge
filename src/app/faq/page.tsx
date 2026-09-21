"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { faqsData, FAQItem } from "@/data/faqsData";
import {
  ChevronDown,
  Sparkles,
  HelpCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Search,
  X,
  Building2,
  Leaf,
  Award,
  FileText,
  BadgePoundSterling,
  Hammer,
  ThumbsUp,
  MessageSquareText,
  ChevronsUpDown,
} from "lucide-react";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openFaqIds, setOpenFaqIds] = useState<Set<string>>(new Set(["faq-1"]));
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, boolean>>({});

  const categories = useMemo(() => {
    const list = [
      { name: "All", icon: Sparkles },
      { name: "Extensions & Renovations", icon: Building2 },
      { name: "Eco & Energy Efficiency", icon: Leaf },
      { name: "Quality & Guarantees", icon: Award },
      { name: "General & Process", icon: Hammer },
      { name: "Planning & Regulations", icon: FileText },
      { name: "Costs & Budget", icon: BadgePoundSterling },
    ];
    return list.map((cat) => ({
      ...cat,
      count:
        cat.name === "All"
          ? faqsData.length
          : faqsData.filter((f) => f.category === cat.name).length,
    }));
  }, []);

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // When searching, show all matches immediately. Otherwise paginate for performance and smooth scroll.
  const displayedFaqs = useMemo(() => {
    if (searchQuery.trim().length > 0) {
      return filteredFaqs;
    }
    return filteredFaqs.slice(0, visibleCount);
  }, [filteredFaqs, searchQuery, visibleCount]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleToggleAll = () => {
    if (openFaqIds.size > 0) {
      setOpenFaqIds(new Set());
    } else {
      setOpenFaqIds(new Set(displayedFaqs.map((f) => f.id)));
    }
  };

  const handleHelpful = (id: string, isHelpful: boolean) => {
    setHelpfulFeedback((prev) => ({ ...prev, [id]: isHelpful }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Banner */}
      <section className="bg-[#092457] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <h1
            className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Frequently Asked Questions
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about home extensions, period renovations, structural alterations, building regulations, costs, and sustainability across Cambridge.
          </p>

          {/* Key Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-slate-200">
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>146 Official Answers</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Cambridge Building Standards</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>Free Expert Advice</span>
            </div>
          </div>

          {/* Real-Time Search Bar */}
          <div className="max-w-xl mx-auto pt-4 relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-amber-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(20);
                }}
                placeholder="Search all 146 questions (e.g. extension, planning, budget, eco)..."
                className="w-full py-4 pl-12 pr-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white placeholder:text-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:bg-white/20 transition-all shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="text-xs text-amber-300 font-semibold pt-2 text-left px-2">
                Found {filteredFaqs.length} matching questions
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main Content & Category Filters */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills Dock */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.name;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setVisibleCount(20);
                    }}
                    className={`group relative px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs active:scale-95 ${
                      isActive
                        ? "bg-[#092457] text-white shadow-md shadow-[#092457]/20 border border-[#092457]"
                        : "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 border border-slate-200/80"
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 transition-colors ${
                        isActive ? "text-amber-400" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    />
                    <span>{cat.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold transition-all ${
                        isActive
                          ? "bg-amber-400 text-slate-950"
                          : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section Toolbar: Total questions & Expand/Collapse toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 px-1">
            <div className="text-xs sm:text-sm font-semibold text-slate-600">
              Showing{" "}
              <span className="font-black text-[#092457]">{displayedFaqs.length}</span>{" "}
              of <span className="font-black text-[#092457]">{filteredFaqs.length}</span>{" "}
              questions {selectedCategory !== "All" && `in ${selectedCategory}`}
            </div>

            <button
              onClick={handleToggleAll}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#092457] px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
            >
              <ChevronsUpDown className="w-3.5 h-3.5 text-amber-500" />
              <span>{openFaqIds.size > 0 ? "Collapse All" : "Expand All"}</span>
            </button>
          </div>

          {/* 3. Accordion List */}
          <div className="space-y-3.5">
            {displayedFaqs.length > 0 ? (
              displayedFaqs.map((faq, index) => {
                const isOpen = openFaqIds.has(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                      isOpen
                        ? "border-[#092457]/40 shadow-md ring-1 ring-[#092457]/10"
                        : "border-slate-200/90 hover:border-slate-300/90 shadow-xs"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer select-none group"
                    >
                      <div className="flex items-start gap-3.5 min-w-0">
                        <span
                          className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors ${
                            isOpen
                              ? "bg-amber-400 text-slate-950"
                              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                          }`}
                        >
                          {index + 1}
                        </span>

                        <div className="space-y-1 min-w-0">
                          <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                            {faq.category}
                          </div>
                          <h3
                            className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#092457] transition-colors leading-snug"
                            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                          >
                            {faq.question}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 mt-1 ${
                          isOpen
                            ? "bg-[#092457] text-white rotate-180 shadow-xs"
                            : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                            <p className="pl-9 text-slate-700">{faq.answer}</p>

                            {/* Helpfulness Micro-Bar */}
                            <div className="mt-4 pt-3 border-t border-slate-200/60 pl-9 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
                              <span>Was this answer helpful?</span>
                              {helpfulFeedback[faq.id] !== undefined ? (
                                <span className="text-emerald-600 font-bold flex items-center gap-1">
                                  ✓ Thank you for your feedback!
                                </span>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleHelpful(faq.id, true);
                                    }}
                                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                                  >
                                    <ThumbsUp className="w-3 h-3 text-emerald-500" />
                                    <span>Yes</span>
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleHelpful(faq.id, false);
                                    }}
                                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold transition-colors cursor-pointer"
                                  >
                                    <span>No</span>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
                <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="text-lg font-bold text-slate-800">
                  No questions found matching &ldquo;{searchQuery}&rdquo;
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
                  Try searching for another keyword like &ldquo;extension&rdquo;, &ldquo;loft&rdquo;, &ldquo;planning&rdquo;, or contact our team directly.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-2 px-4 py-2 rounded-xl bg-[#092457] text-white font-bold text-xs cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* 4. Load More Button (if more questions remain and not searching) */}
          {!searchQuery && displayedFaqs.length < filteredFaqs.length && (
            <div className="text-center pt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 25)}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border-2 border-[#092457] text-[#092457] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Load More Questions</span>
                <span className="px-2 py-0.5 rounded-full bg-[#092457] text-white text-[11px] font-mono font-bold">
                  +{Math.min(25, filteredFaqs.length - displayedFaqs.length)} more
                </span>
              </button>
              <div className="mt-2 text-xs text-slate-500">
                Showing {displayedFaqs.length} of {filteredFaqs.length} questions
              </div>
            </div>
          )}

          {/* 5. Still Have Questions Call-Out */}
          <div className="mt-16 bg-gradient-to-br from-[#092457] to-[#0c3175] text-white p-8 sm:p-10 rounded-3xl border border-blue-900/40 text-center space-y-5 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto space-y-3">
              <h3
                className="text-2xl sm:text-3xl font-black tracking-tight"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                Speak Directly with Our Cambridge Builders
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Every building project in Cambridge has its own unique considerations. Contact our senior structural engineers and surveyors today for free, obligation-free advice.
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+441223782433"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>01223 782433</span>
              </a>
              <a
                href="https://wa.me/441223782433"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
