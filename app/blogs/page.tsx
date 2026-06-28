"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight, Loader2, FileText } from "lucide-react";
import type { BlogPost } from "@/app/api/blogs/route";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen planner-bg">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#FE7004] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-4 mb-12">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            Our Blog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Insights & Updates
          </h1>
          <p className="text-white/60 text-base max-w-2xl">
            Explore the latest in technology, innovation, and digital transformation
            across the Gulf region.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-[#FE7004] animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-24 text-white/40">
            <p className="text-lg">No blog posts published yet.</p>
            <p className="text-sm mt-1">Check back soon for updates.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...blogs]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="paper-card group cursor-pointer overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-white/5 overflow-hidden">
                    {blog.imageUrl ? (
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/10">
                        <FileText className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FE7004] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-[#FE7004] font-medium">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
