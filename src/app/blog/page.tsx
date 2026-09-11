import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import { Sparkles, Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Cambridge Building Guides & Construction Insights",
  description:
    "Expert articles, cost guides, and planning permission advice for homeowners planning house extensions and loft conversions in Cambridge.",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#092457] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Cambridge Construction Insights</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Building Guides & Advice
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            In-depth guides on Cambridge planning rules, extension costs, architectural trends, and property value maximization.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#092457]/80 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-blue-900/50">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-lg font-bold text-[#092457] group-hover:text-amber-600 transition-colors font-sans leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#092457]">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    <span>{post.author.name}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-amber-600 hover:text-[#092457] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
