import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "submissions.json");

interface Submission {
  email: string;
  action: string;
  context: string;
  timestamp: string;
}

async function readSubmissions(): Promise<Submission[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSubmissions(data: Submission[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  const submissions = await readSubmissions();
  return NextResponse.json(submissions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, action, context } = body;

    if (!email || !action || !context) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const submission: Submission = {
      email,
      action,
      context,
      timestamp: new Date().toISOString(),
    };

    const submissions = await readSubmissions();
    submissions.push(submission);
    await writeSubmissions(submissions);

    return NextResponse.json(
      { success: true, submission },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
