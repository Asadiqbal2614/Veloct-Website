import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { BlogPost } from "../route";

const DATA_FILE = path.join(process.cwd(), "data", "blogs.json");

async function readBlogs(): Promise<BlogPost[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeBlogs(data: BlogPost[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { title, slug: newSlug, excerpt, content, imageUrl } = body;

    if (!title || !newSlug || !excerpt || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const blogs = await readBlogs();
    const index = blogs.findIndex((b) => b.slug === slug);

    if (index === -1) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    if (newSlug !== slug && blogs.some((b) => b.slug === newSlug)) {
      return NextResponse.json(
        { error: "A blog with this slug already exists" },
        { status: 409 }
      );
    }

    blogs[index] = {
      ...blogs[index],
      title,
      slug: newSlug,
      excerpt,
      content,
      imageUrl: imageUrl || undefined,
    };

    await writeBlogs(blogs);

    return NextResponse.json({ success: true, blog: blogs[index] });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
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
    const blogs = await readBlogs();
    const index = blogs.findIndex((b) => b.slug === slug);

    if (index === -1) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    blogs.splice(index, 1);
    await writeBlogs(blogs);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
