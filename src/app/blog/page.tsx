"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData, BlogPost } from "@/data/blogData";
import {
  Sparkles,
  Clock,
  ArrowRight,
  User,
  Calendar,
  Search,
  X,
  Building2,
  BadgePoundSterling,
  Hammer,
  Cpu,
  UtensilsCrossed,
  Home,
  ShieldCheck,
  Phone,
  MessageSquareText,
} from "lucide-react";

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  // Category counts
  const categories = useMemo(() => {
    const list = [
      { name: "All", icon: Sparkles },
      { name: "Extensions", icon: Building2 },
      { name: "Costs & Value", icon: BadgePoundSterling },
      { name: "Renovations & Building", icon: Hammer },
      { name: "Trends & Tech", icon: Cpu },
      { name: "Kitchens", icon: UtensilsCrossed },
      { name: "Roofing", icon: Home },
    ];
    return list.map((cat) => ({
      ...cat,
      count:
        cat.name === "All"
          ? blogData.length
          : blogData.filter((b) => b.category === cat.name).length,
    }));
  }, []);

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post: first post when on 'All' and no search
  const isDefaultView = selectedCategory === "All" && !searchQuery.trim();
  const featuredPost = isDefaultView ? filteredPosts[0] : null;
  const gridPosts = isDefaultView
    ? filteredPosts.slice(1, visibleCount)
    : filteredPosts.slice(0, visibleCount);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-[#092457] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Cambridge Construction &amp; Architecture Journal</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Building Guides &amp; Insights
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Authentic guidance, project case studies, cost breakdowns, and expert design ideas from Cambridge&apos;s leading master builders.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-slate-200">
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>30 Expert Articles</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Cambridge Case Studies</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated for 2025/2026</span>
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
                  setVisibleCount(12);
                }}
                placeholder="Search all 30 articles (e.g. extension, loft, budget, kitchen)..."
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
                Found {filteredPosts.length} matching articles
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main Content & Category Filter Dock */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="mb-10 flex justify-center">
            <div className="p-1.5 rounded-2xl sm:rounded-full bg-slate-200/60 backdrop-blur-md border border-slate-200/90 shadow-xs flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-full">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.name;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setVisibleCount(12);
                    }}
                    className={`relative px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95 ${
                      isActive
                        ? "bg-[#092457] text-white shadow-md shadow-[#092457]/20 border border-[#092457]"
                        : "bg-white text-slate-700 hover:text-slate-950 hover:bg-white/80 border border-slate-200/80"
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 transition-colors ${
                        isActive ? "text-amber-400" : "text-slate-400"
                      }`}
                    />
                    <span>{cat.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold transition-all ${
                        isActive
                          ? "bg-amber-400 text-slate-950"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Featured Hero Post (When on All and no search) */}
          {featuredPost && (
            <div className="mb-14">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] overflow-hidden bg-slate-100">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                        FEATURED GUIDE
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#092457]/85 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber-500" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-500" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <h2
                        className="text-2xl sm:text-3xl font-black text-[#092457] group-hover:text-amber-600 transition-colors leading-tight font-sans"
                        style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                      >
                        <Link href={`/blog/${featuredPost.slug}`}>
                          {featuredPost.title}
                        </Link>
                      </h2>

                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center font-black">
                          BC
                        </div>
                        <div>
                          <div>{featuredPost.author.name}</div>
                          <div className="text-[11px] text-slate-400 font-normal">{featuredPost.author.role}</div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="px-5 py-2.5 rounded-xl bg-[#092457] hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Heading with Counter */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h3
                className="text-xl sm:text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                {selectedCategory === "All" ? "Latest Articles & Guides" : `${selectedCategory} Articles`}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing {isDefaultView ? gridPosts.length + 1 : gridPosts.length} of {filteredPosts.length} total articles
              </p>
            </div>
          </div>

          {/* 4. Responsive 3-Column Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#092457]/85 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-white/15 shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-500" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-500" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2
                      className="text-lg font-bold text-[#092457] group-hover:text-amber-600 transition-colors font-sans leading-snug line-clamp-2"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Article Footer Card */}
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#092457]">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    <span className="truncate max-w-[130px]">{post.author.name}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-amber-600 hover:text-[#092457] transition-colors uppercase tracking-wider text-[11px] font-black group-hover:translate-x-0.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Fallback */}
          {gridPosts.length === 0 && !featuredPost && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="text-xl font-bold text-slate-800">
                No articles found matching &ldquo;{searchQuery}&rdquo;
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
                Try a different keyword like &ldquo;extension&rdquo;, &ldquo;loft&rdquo;, &ldquo;kitchen&rdquo;, or reset filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-5 py-2.5 rounded-xl bg-[#092457] text-white font-bold text-xs cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* 5. Load More Button */}
          {!searchQuery && (isDefaultView ? gridPosts.length + 1 : gridPosts.length) < filteredPosts.length && (
            <div className="text-center pt-14">
              <button
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border-2 border-[#092457] text-[#092457] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Load More Articles</span>
                <span className="px-2 py-0.5 rounded-full bg-[#092457] text-white text-[11px] font-mono font-bold">
                  +{Math.min(9, filteredPosts.length - (isDefaultView ? gridPosts.length + 1 : gridPosts.length))} more
                </span>
              </button>
              <div className="mt-2 text-xs text-slate-500">
                Showing {isDefaultView ? gridPosts.length + 1 : gridPosts.length} of {filteredPosts.length} articles
              </div>
            </div>
          )}

          {/* 6. Consultation CTA Callout */}
          <div className="mt-16 bg-gradient-to-br from-[#092457] to-[#0d367d] text-white p-8 sm:p-12 rounded-3xl border border-blue-900/40 text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 inline-block">
                Free Site Feasibility Study
              </span>
              <h3
                className="text-2xl sm:text-4xl font-black tracking-tight"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                Planning a House Extension or Renovation in Cambridge?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
                Turn your architectural vision into reality. Our senior project directors provide comprehensive structural site visits and itemized fixed-price quotations across Cambridge.
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>Request Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+441223782433"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>01223 782433</span>
              </a>
              <a
                href="https://wa.me/441223782433"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
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
