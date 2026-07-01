import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("timestamp", { ascending: true });

  if (error) {
    console.error("[Submissions] GET error:", error)
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
    console.log("[Submissions] POST body:", body)
    const { email, action, context, company, companySize, budget, timeline } = body;

    if (!email || !action || !context) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("submissions")
      .insert({
        email,
        action,
        context,
        company,
        companySize,
        budget,
        timeline,
        timestamp: new Date().toISOString(),
      })
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
      { success: true, submission: data },
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
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (id) {
      const { error } = await supabase.from("submissions").delete().eq("id", id)
      if (error) {
        console.log("DETAILED DB ERROR:", JSON.stringify(error, null, 2));
        return NextResponse.json({ success: false, error }, { status: 500 })
      }
      return NextResponse.json({ success: true })
    }

    const { error } = await supabase.from("submissions").delete().neq("email", "");
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
