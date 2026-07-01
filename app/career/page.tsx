"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Loader2, Upload, FileText, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

const EDUCATION_OPTIONS = [
  "Matriculation",
  "Intermediate",
  "Graduation (14 years)",
  "Graduation (16 years)",
  "Masters",
  "MPhil",
  "PhD",
];

const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1));
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const YEARS = Array.from({ length: 60 }, (_, i) => String(new Date().getFullYear() - i));

export default function CareerPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [education, setEducation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUploadError("");
    setLoading(true);

    let resume_url = "";

    if (resumeFile) {
      if (resumeFile.size > 5 * 1024 * 1024) {
        setUploadError("File size exceeds 5MB limit.");
        setLoading(false);
        return;
      }

      const fileExt = resumeFile.name.split(".").pop();
      const filePath = `resumes/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { error: uploadErr } = await supabase.storage
        .from("resumes")
        .upload(filePath, resumeFile, { cacheControl: "3600", upsert: false });

      if (uploadErr) {
        setUploadError(uploadErr.message || "Failed to upload resume.");
        setLoading(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      resume_url = publicUrlData.publicUrl;
    }

    const payload = {
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
      resume_url,
    };

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        setFullName("");
        setEmail("");
        setContact("");
        setDay("");
        setMonth("");
        setYear("");
        setEducation("");
        setSpecialization("");
        setExperience("");
        setCity("");
        setCountry("");
        setResumeFile(null);
      }
    } catch {
      // best-effort
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen planner-bg flex items-center justify-center p-4">
        <div className="glass-panel rounded-2xl p-10 max-w-md w-full text-center space-y-4 animate-scale-in">
          <div className="w-16 h-16 rounded-full bg-[#FE7004]/15 flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-[#FE7004]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Application Submitted</h2>
          <p className="text-sm text-white/60">We&apos;ll review your application and get back to you soon.</p>
          <Link
            href="/"
            className="command-strip inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white mt-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen planner-bg">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#FE7004] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-4 mb-10">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            Join Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Career Application
          </h1>
          <p className="text-white/60 text-base">
            Take the next step in your career with VELOCT. Fill out the form below and our
            talent team will review your application.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="micro-label text-white/60 block mb-1.5">
                Full Name <span className="text-[#FE7004]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="micro-label text-white/60 block mb-1.5">
                Email <span className="text-[#FE7004]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact" className="micro-label text-white/60 block mb-1.5">
                Contact Number <span className="text-[#FE7004]">*</span>
              </label>
              <input
                id="contact"
                type="tel"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="+1 234 567 890"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
              />
            </div>

            <div>
              <label className="micro-label text-white/60 block mb-1.5">
                Date of Birth <span className="text-[#FE7004]">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  required
                  className="w-full px-3 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all appearance-none"
                >
                  <option value="" disabled className="bg-[#00164A]">Day</option>
                  {DAYS.map((d) => (
                    <option key={d} value={d} className="bg-[#00164A]">{d}</option>
                  ))}
                </select>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                  className="w-full px-3 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all appearance-none"
                >
                  <option value="" disabled className="bg-[#00164A]">Month</option>
                  {MONTHS.map((m) => (
                    <option key={m} value={m} className="bg-[#00164A]">{m}</option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className="w-full px-3 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all appearance-none"
                >
                  <option value="" disabled className="bg-[#00164A]">Year</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y} className="bg-[#00164A]">{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="education" className="micro-label text-white/60 block mb-1.5">
                Education <span className="text-[#FE7004]">*</span>
              </label>
              <select
                id="education"
                required
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all appearance-none"
              >
                <option value="" disabled className="bg-[#00164A]">Select education</option>
                {EDUCATION_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#00164A]">{opt}</option>
                ))}
              </select>
            </div>

            {education && (
              <div className="animate-fade-in-up">
                <label htmlFor="specialization" className="micro-label text-white/60 block mb-1.5">
                  Specialization <span className="text-[#FE7004]">*</span>
                </label>
                <input
                  id="specialization"
                  type="text"
                  required
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder="e.g. Computer Science"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                />
              </div>
            )}

            <div>
              <label htmlFor="experience" className="micro-label text-white/60 block mb-1.5">
                Experience <span className="text-[#FE7004]">*</span>
              </label>
              <input
                id="experience"
                type="text"
                required
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="e.g. 3 years"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
              />
            </div>

            <div>
              <label htmlFor="city" className="micro-label text-white/60 block mb-1.5">
                City <span className="text-[#FE7004]">*</span>
              </label>
              <input
                id="city"
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Riyadh"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
              />
            </div>

            <div>
              <label htmlFor="country" className="micro-label text-white/60 block mb-1.5">
                Country <span className="text-[#FE7004]">*</span>
              </label>
              <input
                id="country"
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Saudi Arabia"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="resume" className="micro-label text-white/60 block mb-1.5">
              Upload Resume / CV
            </label>
            <div className="relative">
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  setUploadError("")
                  setResumeFile(e.target.files?.[0] || null)
                }}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-[#FE7004]/10 file:text-[#FE7004] hover:file:bg-[#FE7004]/20 transition-all cursor-pointer file:cursor-pointer"
              />
              <div className="flex items-center gap-1.5 mt-1.5">
                <AlertCircle size={11} className="text-white/30" />
                <span className="text-xs text-white/30">Max file size: 5MB &middot; .pdf, .doc, .docx</span>
              </div>
            </div>
            {uploadError && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                <AlertCircle size={11} />
                {uploadError}
              </p>
            )}
            {resumeFile && !uploadError && (
              <p className="text-xs text-green-400 mt-1.5 flex items-center gap-1">
                <FileText size={11} />
                {resumeFile.name}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="command-strip w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
