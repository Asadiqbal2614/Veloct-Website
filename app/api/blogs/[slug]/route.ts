import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PUT(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await _request.json();
    const { title, slug: newSlug, excerpt, content, imageUrl, tags, readingTime } = body;

    if (!title || !newSlug || !excerpt || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data: existing } = await supabase
      .from("blogs")
      .select("slug")
      .eq("slug", slug)
      .single();

    if (!existing) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    if (newSlug !== slug) {
      const { data: slugConflict } = await supabase
        .from("blogs")
        .select("slug")
        .eq("slug", newSlug)
        .single();

      if (slugConflict) {
        return NextResponse.json(
          { error: "A blog with this slug already exists" },
          { status: 409 }
        );
      }
    }

    const { data, error } = await supabase
      .from("blogs")
      .update({ title, slug: newSlug, excerpt, content, imageUrl: imageUrl || null, tags, readingTime })
      .eq("slug", slug)
      .select()
      .single();

    if (error) {
      console.error("[Blogs] PUT error:", error)
      return NextResponse.json(
        { error: error.message || "Internal server error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, blog: data });
  } catch (error) {
    console.error("[Blogs] PUT unexpected error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const { data: existing } = await supabase
      .from("blogs")
      .select("slug")
      .eq("slug", slug)
      .single();

    if (!existing) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("slug", slug);

    if (error) {
      console.error("[Blogs] DELETE error:", error)
      return NextResponse.json(
        { error: error.message || "Internal server error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Blogs] DELETE unexpected error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
