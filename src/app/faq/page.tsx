"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Planning & Regulations",
    "Costs & Payments",
    "Build Process",
    "Guarantees & Safety",
  ];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#092457] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Cambridge Building Knowledgebase</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Clear answers to all your questions on Cambridge planning permission, building regulations, payment schedules, and construction timelines.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto pt-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., planning, party wall, warranty)..."
              className="w-full py-3.5 pl-11 pr-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs focus:outline-none focus:bg-white/20 transition-colors"
            />
            <Search className="w-4 h-4 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2 mt-2" />
          </div>
        </div>
      </section>

      {/* Main Accordion Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#092457] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-amber-400 bg-amber-50/20 shadow-md"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#092457]"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-amber-500" : "text-slate-400"}`} />
                        <span>{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-amber-500" : "text-slate-400"
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed pl-12"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-slate-500 text-sm">
                No matching questions found. Contact us directly below!
              </div>
            )}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-16 bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center space-y-4">
            <h3 className="text-xl font-bold text-[#092457]">
              Have a specific question about your property?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
              Our Cambridge building consultants are always here to provide straightforward, expert guidance.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-[#092457] hover:bg-[#06183d] text-white font-bold text-xs flex items-center gap-2"
              >
                <span>Ask Our Builders</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
              <a
                href="tel:+441223782433"
                className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs flex items-center gap-2 hover:bg-white"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call 01223 782433</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
