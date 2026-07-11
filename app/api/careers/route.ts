import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/supabase/require-auth";

export async function GET() {
  const authError = await requireAuth();
  if (authError) return authError;

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("careers")
    .select("*")
    .order("timestamp", { ascending: true });

  if (error) {
    console.error("[Careers] GET error:", error)
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
    console.log("[Careers] POST body:", body)
    const { fullName, email, contact, day, month, year, education, specialization, experience, city, country, resume_url, job_id } = body;

    if (!fullName || !email || !contact || !education || !experience || !city || !country) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from("careers")
      .insert({
        fullName,
        email,
        contact,
        day,
        month,
        year,
        education,
        specialization,
        experience,
        city,
        country,
        resume_url: resume_url || null,
        job_id: job_id || null,
        timestamp: new Date().toISOString(),
      });

    if (error) {
      console.log("DETAILED DB ERROR:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { success: false, error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
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

export async function DELETE(request: Request) {
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const supabase = await createClient();
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (id) {
      const { data: existing, error: fetchErr } = await supabase
        .from("careers")
        .select("resume_url")
        .eq("id", id)
        .single()

      if (fetchErr) {
        console.log("DETAILED DB ERROR:", JSON.stringify(fetchErr, null, 2));
        return NextResponse.json({ success: false, error: fetchErr }, { status: 500 })
      }

      if (existing?.resume_url) {
        const filePath = existing.resume_url.split("/resumes/")[1]
        if (filePath) {
          await supabase.storage.from("resumes").remove([filePath])
        }
      }

      const { error } = await supabase.from("careers").delete().eq("id", id)
      if (error) {
        console.log("DETAILED DB ERROR:", JSON.stringify(error, null, 2));
        return NextResponse.json({ success: false, error }, { status: 500 })
      }
      return NextResponse.json({ success: true })
    }

    const { error } = await supabase.from("careers").delete().neq("email", "");
    if (error) {
      console.log("DETAILED DB ERROR:", JSON.stringify(error, null, 2));
      return NextResponse.json({ success: false, error }, { status: 500 })
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("DETAILED DB ERROR:", JSON.stringify(error, null, 2));
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
