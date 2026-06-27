import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "careers.json");

interface CareerSubmission {
  fullName: string;
  email: string;
  contact: string;
  day: string;
  month: string;
  year: string;
  education: string;
  specialization?: string;
  experience: string;
  city: string;
  country: string;
  timestamp: string;
}

async function readSubmissions(): Promise<CareerSubmission[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSubmissions(data: CareerSubmission[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  const submissions = await readSubmissions();
  return NextResponse.json(submissions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, contact, day, month, year, education, specialization, experience, city, country } = body;

    if (!fullName || !email || !contact || !education || !experience || !city || !country) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const submission: CareerSubmission = {
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
      timestamp: new Date().toISOString(),
    };

    const submissions = await readSubmissions();
    submissions.push(submission);
    await writeSubmissions(submissions);

    return NextResponse.json(
      { success: true, submission },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
