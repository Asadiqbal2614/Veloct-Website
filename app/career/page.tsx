import { createPublicClient } from "@/lib/supabase/public";
import CareerForm from "@/components/CareerForm";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Career | VELOCT",
  description:
    "Take the next step in your career with VELOCT. Explore open positions and apply today.",
};

export default async function CareerPage() {
  const supabase = createPublicClient();

  const { data } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  const jobs = ((data ?? []) as Array<{
    id: string;
    title: string;
    description: string;
    experience: string;
    location: string;
    last_date: string;
    is_active: boolean;
    created_at: string;
  }>).filter((j) => j.is_active);

  return <CareerForm initialJobs={jobs} />;
}
