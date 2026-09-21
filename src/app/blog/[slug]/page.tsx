import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import { BlogArticleClient } from "@/components/BlogArticleClient";

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
  const currentIndex = blogData.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const post = blogData[currentIndex];
  const prevPost = currentIndex > 0 ? blogData[currentIndex - 1] : null;
  const nextPost = currentIndex < blogData.length - 1 ? blogData[currentIndex + 1] : null;

  // Find up to 4 related articles in the same category (or other categories)
  const relatedPosts = blogData
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 4);

  // If less than 4, pad with other recent posts
  if (relatedPosts.length < 4) {
    const others = blogData.filter(
      (p) => p.slug !== post.slug && !relatedPosts.some((r) => r.slug === p.slug)
    );
    relatedPosts.push(...others.slice(0, 4 - relatedPosts.length));
  }

  return (
    <div className="bg-white min-h-screen">
      <BlogArticleClient
        post={post}
        prevPost={prevPost}
        nextPost={nextPost}
        relatedPosts={relatedPosts}
      />
    </div>
  );
}
