import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { createPublicClient } from "@/lib/supabase/public";
import BlogContent from "@/components/BlogContent";
import type { BlogPost } from "@/lib/types";
import type { Metadata } from "next";

export const revalidate = 60;
export const dynamicParams = true;

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const supabase = createPublicClient();
  const { data: blogs } = await supabase.from("blogs").select("slug");
  return (blogs ?? []).map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createPublicClient();
  const { data } = await supabase
    .from("blogs")
    .select("title, excerpt")
    .eq("slug", slug)
    .single();

  if (!data) return { title: "Blog Not Found" };

  return {
    title: `${data.title} | VELOCT`,
    description: data.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: blog } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!blog) {
    notFound();
  }

  const post = blog as BlogPost;

  return (
    <div className="min-h-screen bg-white dark:bg-[#00164A] transition-colors duration-300">
      <article className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-white/60 hover:text-[#FE7004] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        <div className="space-y-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-white/40">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {post.readingTime && (
              <>
                <span className="text-slate-300 dark:text-white/20">
                  &bull;
                </span>
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-500 dark:text-white/60 leading-relaxed">
            {post.excerpt}
          </p>

          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.split(",").map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60"
                >
                  <Tag className="w-3 h-3" />
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.imageUrl && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-[#FE7004]/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="border-t border-slate-200 dark:border-[#FE7004]/10 pt-10">
          <BlogContent content={post.content} />
        </div>
      </article>
    </div>
  );
}
