import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import { Clock, ArrowLeft, ArrowRight, User, Calendar, Sparkles } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found - Builder Cambridge",
    };
  }

  return {
    title: `${post.title} | Builder Cambridge`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Builder Cambridge`,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#092457] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>

        {/* Title Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#092457] text-xs font-bold uppercase tracking-wider">
            <span>{post.category}</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black text-[#092457] tracking-tight font-sans leading-tight"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-amber-500" />
              <span className="font-bold text-slate-800">{post.author.name}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[360px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Author Box & Callout */}
        <div className="mt-12 bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-base text-[#092457]">
              Need Professional Advice on Your Cambridge Build?
            </h3>
            <p className="text-xs text-slate-600">
              Schedule a site inspection with our experienced project directors.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shrink-0 active:scale-95"
          >
            <span>BOOK FREE SITE VISIT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
