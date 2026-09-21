"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { BlogPost } from "@/data/blogData";
import {
  Share2,
  Copy,
  Check,
  ThumbsUp,
  MessageSquareText,
  Phone,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  Sparkles,
  Eye,
} from "lucide-react";

interface BlogArticleClientProps {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
  relatedPosts: BlogPost[];
}

export const BlogArticleClient: React.FC<BlogArticleClientProps> = ({
  post,
  prevPost,
  nextPost,
  relatedPosts,
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [copied, setCopied] = useState(false);
  const [helpful, setHelpful] = useState<boolean | null>(null);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(post.title);

  return (
    <>
      {/* 1. Scroll Reading Progress Bar at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#092457] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#092457] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-400">{post.category}</span>
          <span>/</span>
          <span className="text-slate-800 font-bold truncate max-w-[200px] sm:max-w-xs">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <div className="max-w-4xl space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#092457] text-xs font-bold uppercase tracking-wider border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{post.category}</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black text-[#092457] tracking-tight font-sans leading-tight"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2 border-b border-slate-200/80 pb-6">
            <div className="flex items-center gap-2 text-slate-800">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold text-xs">
                BC
              </div>
              <span className="font-bold">{post.author.name}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>{post.readTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#092457] text-white font-bold shadow-sm">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Cambridge Advice</span>
            </div>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="relative aspect-[16/9] max-h-[500px] w-full rounded-3xl overflow-hidden shadow-xl mb-12 border border-slate-200/80 bg-slate-100 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 z-10 px-3.5 py-2 rounded-2xl bg-[#092457]/90 backdrop-blur-md border border-white/20 text-white flex items-center gap-2 shadow-xl">
            <Eye className="w-4 h-4 text-amber-400" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-xs font-mono font-black">{post.views.toLocaleString()}</span>
              <span className="text-[9px] text-slate-300 uppercase tracking-wider font-semibold">Total Views</span>
            </div>
          </div>
        </div>

        {/* 2-Column Article Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Article Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Lead Intro Box */}
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-slate-800 text-base sm:text-lg font-medium leading-relaxed shadow-xs">
              <p>{post.excerpt}</p>
            </div>

            {/* Article Paragraphs */}
            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
              {post.content.map((para, idx) => {
                // If it looks like a heading (e.g. short and ends without period)
                const isHeading =
                  para.length < 80 &&
                  !para.endsWith(".") &&
                  !para.endsWith("?") &&
                  !para.endsWith("!");

                if (isHeading) {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl sm:text-3xl font-black text-[#092457] pt-6 font-sans tracking-tight"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      {para}
                    </h2>
                  );
                }

                return (
                  <p key={idx} className="text-slate-700">
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Key Takeaways Callout Card */}
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Cambridge Master Builder Advice</span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-black"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                Key Considerations for Your Cambridge Property
              </h3>
              <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Always verify local planning constraints and conservation area rules with Cambridge City Council or South Cambridgeshire District Council.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Ensure all structural modifications (such as removing load-bearing walls or inserting RSJ steel beams) have signed structural calculations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Obtain an itemized fixed-price proposal before commencing work to prevent unexpected cost variations.</span>
                </li>
              </ul>
            </div>

            {/* Helpfulness & Share Bar */}
            <div className="pt-8 pb-4 border-t border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              {/* Helpfulness */}
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                <span>Did you find this guide helpful?</span>
                {helpful !== null ? (
                  <span className="text-emerald-600 font-bold">
                    ✓ Thanks for your feedback!
                  </span>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setHelpful(true)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Yes</span>
                    </button>
                    <button
                      onClick={() => setHelpful(false)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors cursor-pointer"
                    >
                      <span>No</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="text-slate-500 mr-1">Share:</span>
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Link"}</span>
                </button>
                <a
                  href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquareText className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Author Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#092457] text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">
                BC
              </div>
              <div className="space-y-1 text-center sm:text-left flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Published By
                </div>
                <h4 className="font-bold text-base text-[#092457]">
                  {post.author.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  With over 20 years of bespoke residential building, extensions, and structural alterations in Cambridge, our team delivers master craftsmanship backed by a 10-year structural guarantee.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-[#092457] hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 active:scale-95"
              >
                Contact Team
              </Link>
            </div>

            {/* Previous & Next Article Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-md transition-all group space-y-1"
                >
                  <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wider">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    <span>Previous Article</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#092457] group-hover:text-amber-600 transition-colors line-clamp-2">
                    {prevPost.title}
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-md transition-all group space-y-1 text-right sm:col-start-2"
                >
                  <div className="text-[11px] font-bold text-slate-400 flex items-center justify-end gap-1 uppercase tracking-wider">
                    <span>Next Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#092457] group-hover:text-amber-600 transition-colors line-clamp-2">
                    {nextPost.title}
                  </div>
                </Link>
              )}
            </div>

          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              
              {/* Consultation Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#092457] text-white space-y-5 shadow-xl border border-blue-900/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                <div className="relative z-10 space-y-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 inline-block">
                    Free Consultation
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-black tracking-tight"
                    style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                  >
                    Planning a Project in Cambridge?
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Get an itemized feasibility assessment and fixed-price quotation from our structural engineers.
                  </p>
                </div>

                <div className="relative z-10 space-y-2.5 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Request Site Survey</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+441223782433"
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>01223 782433</span>
                  </a>
                </div>
              </div>

              {/* Related Articles in Same Category */}
              {relatedPosts.length > 0 && (
                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                  <h4
                    className="text-base font-black text-[#092457] font-sans border-b border-slate-100 pb-3"
                    style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                  >
                    More on {post.category}
                  </h4>
                  <div className="space-y-4">
                    {relatedPosts.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
                        className="flex items-start gap-3 group"
                      >
                        <div className="relative w-16 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={rel.image}
                            alt={rel.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <h5 className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                            {rel.title}
                          </h5>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            <span>{rel.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-slate-600 font-medium">
                              <Eye className="w-3 h-3 text-amber-500" />
                              {rel.views.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Links Back to Blog */}
              <div className="p-5 rounded-2xl bg-slate-100/80 border border-slate-200 text-center">
                <Link
                  href="/blog"
                  className="text-xs font-bold text-[#092457] hover:text-amber-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Browse All 30 Cambridge Guides</span>
                </Link>
              </div>

            </div>
          </aside>

        </div>

      </div>
    </>
  );
};
