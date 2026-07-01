"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Loader2, Tag } from "lucide-react";
import type { BlogPost } from "@/app/api/blogs/route";

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data: BlogPost[] = await res.json();
          const found = data.find((b) => b.slug === slug);
          setBlog(found ?? null);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen planner-bg flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#FE7004] animate-spin" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen planner-bg flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <p className="text-6xl font-bold text-white/20">404</p>
          <h1 className="text-2xl font-bold text-white">Blog not found</h1>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-[#FE7004] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen planner-bg">
      <article className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#FE7004] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        <div className="space-y-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-white/40">
            <Calendar className="w-4 h-4" />
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {blog.readingTime && (
              <>
                <span className="text-white/20">&bull;</span>
                <Clock className="w-4 h-4" />
                <span>{blog.readingTime} min read</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>

          <p className="text-lg text-white/60 leading-relaxed">
            {blog.excerpt}
          </p>

          {blog.tags && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.split(",").map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/60"
                >
                  <Tag className="w-3 h-3" />
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </div>

        {blog.imageUrl && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-[#FE7004]/10">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="border-t border-[#FE7004]/10 pt-10">
          <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>
        </div>
      </article>
    </div>
  );
}
