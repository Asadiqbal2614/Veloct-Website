import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl?: string;
  tags?: string;
  readingTime?: number;
}

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error("[Blogs] GET error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[Blogs] POST body:", body)
    const { title, slug, excerpt, content, date, imageUrl, tags, readingTime } = body;

    if (!title || !slug || !excerpt || !content || !date) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data: existing } = await supabase
      .from("blogs")
      .select("slug")
      .eq("slug", slug)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "A blog with this slug already exists" },
        { status: 409 }
      );
    }

    const { data, error } = await supabase
      .from("blogs")
      .insert({ title, slug, excerpt, content, date, imageUrl, tags, readingTime })
      .select()
      .single();

    if (error) {
      console.log("DETAILED DB ERROR:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { success: false, error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, blog: data },
      { status: 201 }
    );
  } catch (error) {
    console.log("DETAILED DB ERROR:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}
