"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Loader2, Upload, FileText, AlertCircle, Briefcase, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import AnimateOnScroll from "@/components/animate-on-scroll";

interface JobPosting {
  id: string
  title: string
  description: string
  experience: string
  location: string
  last_date: string
  is_active: boolean
  created_at: string
}

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
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

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
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (submitted) {
      resetTimerRef.current = setTimeout(() => {
        setSubmitted(false);
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
        setUploadError("");
        setShowForm(true);
      }, 4000);
    }
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [submitted]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/jobs");
        if (res.ok) {
          const data: JobPosting[] = await res.json();
          const active = data.filter((j) => j.is_active);
          setJobs(active);
          if (active.length === 0) {
            setShowForm(true);
          }
        }
      } catch {
        // best-effort
      } finally {
        setLoadingJobs(false);
      }
    })();
  }, []);

  const handleJobClick = (job: JobPosting) => {
    if (expandedJobId === job.id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(job.id);
    }
  };

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

      const supabase = createClient();

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
      job_id: selectedJobId,
    };

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // best-effort
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#00164A] transition-colors duration-300 flex items-center justify-center p-4">
        <div className="bg-slate-100/70 backdrop-blur-sm border border-slate-200/80 dark:bg-white/5 dark:border-white/10 rounded-2xl p-10 max-w-md w-full text-center space-y-4 animate-scale-in">
          <div className="w-16 h-16 rounded-full bg-[#FE7004]/15 flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-[#FE7004]" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Application Submitted</h2>
          <p className="text-sm text-slate-600 dark:text-white/70">We&apos;ll review your application and get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#00164A] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-white/60 hover:text-[#FE7004] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-4 mb-10">
          <span className="micro-label inline-flex px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            Join Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Career Application
          </h1>
          <p className="text-slate-600 dark:text-gray-300 text-base">
            Take the next step in your career with VELOCT. Fill out the form below and our
            talent team will review your application.
          </p>
        </div>

        {/* Active Job Listings */}
        {loadingJobs ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 text-[#FE7004] animate-spin" />
          </div>
        ) : jobs.length > 0 ? (
          <div className="mb-10 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Open Positions</h2>
            {jobs.map((job) => (
              <AnimateOnScroll key={job.id}>
                <div
                  className={`bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl p-5 sm:p-6 cursor-pointer transition-all duration-300 ${
                    expandedJobId === job.id ? "ring-1 ring-[#FE7004]/40" : ""
                  }`}
                  onClick={() => handleJobClick(job)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-white/70">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={14} className="text-[#FE7004]" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-[#FE7004]" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} className="text-[#FE7004]" />
                          Apply by {new Date(job.last_date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      {expandedJobId === job.id ? (
                        <ChevronUp size={20} className="text-[#FE7004]" />
                      ) : (
                        <ChevronDown size={20} className="text-white/40" />
                      )}
                    </div>
                  </div>

                  {expandedJobId === job.id && (
                    <div className="mt-5 pt-5 border-t border-[#FE7004]/15 animate-fade-in-up">
                      <p className="text-slate-700 dark:text-white/85 text-sm leading-relaxed whitespace-pre-line mb-5">
                        {job.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedJobId(job.id);
                          setShowForm(true);
                          setTimeout(() => {
                            document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="command-strip inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-105"
                      >
                        Apply for this Position
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <div className="bg-slate-100/70 backdrop-blur-sm border border-slate-200/80 dark:bg-white/5 dark:border-white/10 rounded-2xl p-8 sm:p-10 text-center mb-10">
            <Briefcase size={48} className="mx-auto mb-4 text-slate-300 dark:text-white/20" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Currently, we have no open vacancies.</h2>
            <p className="text-slate-600 dark:text-white/70 text-sm">
              However, we are always looking for great talent. Drop your details and CV below,
              and our team will contact you if a suitable position opens up.
            </p>
          </div>
        )}

        {/* Application Form */}
        {showForm && (
        <div id="application-form">
          {(() => {
            const job = jobs.find((j) => j.id === selectedJobId);
            return job ? (
              <div className="mb-6 p-4 rounded-xl bg-[#FE7004]/10 border border-[#FE7004]/20">
                <p className="text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase size={14} className="text-[#FE7004]" />
                  Applying for: <span className="text-[#FE7004] font-semibold">{job.title}</span>
                </p>
              </div>
            ) : null;
          })()}

          <form onSubmit={handleSubmit} className="bg-slate-100/70 backdrop-blur-sm border border-slate-200/80 dark:bg-white/5 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                  <label htmlFor="fullName" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Full Name <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
              </div>

              <div>
                  <label htmlFor="email" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Email <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
              </div>

              <div>
                  <label htmlFor="contact" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Contact Number <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    id="contact"
                    type="tel"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+1 234 567 890"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
              </div>

              <div>
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Date of Birth <span className="text-[#FE7004]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      required
                      className="w-full px-3 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">Day</option>
                    {DAYS.map((d) => (
                      <option key={d} value={d} className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">{d}</option>
                    ))}
                  </select>
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    required
                      className="w-full px-3 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all appearance-none"
                    >
                      <option value="" disabled className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">Month</option>
                      {MONTHS.map((m) => (
                        <option key={m} value={m} className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">{m}</option>
                      ))}
                    </select>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      required
                      className="w-full px-3 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">Year</option>
                    {YEARS.map((y) => (
                      <option key={y} value={y} className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">{y}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="education" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                  Education <span className="text-[#FE7004]">*</span>
                </label>
                <select
                  id="education"
                  required
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all appearance-none"
                >
                  <option value="" disabled className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">Select education</option>
                  {EDUCATION_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">{opt}</option>
                  ))}
                </select>
              </div>

              {education && (
                <div className="animate-fade-in-up">
                  <label htmlFor="specialization" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Specialization <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    id="specialization"
                    type="text"
                    required
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    placeholder="e.g. Computer Science"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
                </div>
              )}

              <div>
                <label htmlFor="experience" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                  Experience <span className="text-[#FE7004]">*</span>
                </label>
                <input
                  id="experience"
                  type="text"
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="e.g. 3 years"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="city" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                  City <span className="text-[#FE7004]">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Riyadh"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="country" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                  Country <span className="text-[#FE7004]">*</span>
                </label>
                <input
                  id="country"
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="e.g. United Arab Emirates"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                />
              </div>
            </div>

            <div>
                <label htmlFor="resume" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-[#FE7004]/10 file:text-[#FE7004] hover:file:bg-[#FE7004]/20 transition-all cursor-pointer file:cursor-pointer"
                  />
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <AlertCircle size={11} className="text-slate-400 dark:text-white/30" />
                    <span className="text-xs text-slate-400 dark:text-white/30">Max file size: 5MB &middot; .pdf, .doc, .docx</span>
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
        )}
      </div>
    </div>
  );
}
