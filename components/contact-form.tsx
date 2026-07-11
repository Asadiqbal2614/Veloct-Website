"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Globe, Mail, Linkedin, MapPin, Check, Loader2 } from "lucide-react";

const CONTACT_DETAILS = [
  { label: "Website", value: "veloct.tech", icon: Globe, href: "https://veloct.tech" },
  { label: "Email", value: "info@veloct.tech", icon: Mail, href: "mailto:info@veloct.tech" },
  {
    label: "LinkedIn",
    value: "linkedin.com/company/veloct-tech",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/veloct-tech",
  },
  { label: "Region", value: "Serving Clients Worldwide", icon: MapPin },
];

const ACTIONS = ["Book Consultation", "Request a Proposal"];
const COMPANY_SIZES = ["1-10", "11-50", "51-200", "200+"];
const BUDGETS = ["Less than $5k", "$5k-$20k", "$20k+"];
const TIMELINES = ["Immediately", "Within 1 Month", "Just Exploring"];

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [action, setAction] = useState(ACTIONS[0]);
  const [context, setContext] = useState("");
  const [company, setCompany] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const isProposal = action === "Request a Proposal";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const entry: Record<string, string> = {
      email,
      action,
      context,
      company,
      timeline,
      timestamp: new Date().toISOString(),
    };
    if (isProposal) {
      entry.companySize = companySize;
      entry.budget = budget;
    }

    const existing = JSON.parse(localStorage.getItem("veloct_contact_submissions") || "[]");
    existing.push(entry);
    localStorage.setItem("veloct_contact_submissions", JSON.stringify(existing));

    try {
      await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
    } catch {
      // Server save is best-effort; data is already in localStorage
    }

    setLoading(false);
    setSubmitted(true);
    setToast(true);
    setEmail("");
    setAction(ACTIONS[0]);
    setContext("");
    setCompany("");
    setCompanySize("");
    setBudget("");
    setTimeline("");
    setTimeout(() => setToast(false), 4000);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-16 lg:py-20 bg-white dark:bg-[#00164A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Info */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                Ready to Accelerate Your Business?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                Let&apos;s discuss how VELOCT can help you achieve your technology goals.
                Reach out and we&apos;ll get back to you typically within one business day.
              </p>
            </div>

            <div className="space-y-4">
              {CONTACT_DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FE7004]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4.5 h-4.5 text-[#FE7004]" />
                    </div>
                    <div>
                      <p className="micro-label text-[#FE7004] text-[0.65rem]">
                        {detail.label}
                      </p>
                      {"href" in detail && detail.href ? (
                        <a
                          href={detail.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-600 dark:text-white/70">{detail.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl p-6 sm:p-8 lg:p-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FE7004]/15 flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#FE7004]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Thank You!</h3>
                <p className="text-sm text-slate-600 dark:text-white/70">
                  Your message has been received. We&apos;ll be in touch typically within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Corporate Email <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="action" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Action <span className="text-[#FE7004]">*</span>
                  </label>
                  <select
                    id="action"
                    required
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all duration-300 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FE7004' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 12px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "20px",
                    }}
                  >
                    {ACTIONS.map((a) => (
                      <option key={a} value={a} className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Company Name - always visible */}
                <div>
                  <label htmlFor="company" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Company Name <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all duration-300"
                  />
                </div>

                {/* Company Size & Budget - only for proposals */}
                {isProposal && (
                  <>
                    <div>
                      <label htmlFor="companySize" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                        Company Size <span className="text-[#FE7004]">*</span>
                      </label>
                      <select
                        id="companySize"
                        required
                        value={companySize}
                        onChange={(e) => setCompanySize(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all duration-300 appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FE7004' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: "right 12px center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "20px",
                        }}
                      >
                        <option value="" disabled className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">Select size</option>
                        {COMPANY_SIZES.map((s) => (
                          <option key={s} value={s} className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">{s} employees</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                        Estimated Budget <span className="text-[#FE7004]">*</span>
                      </label>
                      <select
                        id="budget"
                        required
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all duration-300 appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FE7004' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: "right 12px center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "20px",
                        }}
                      >
                        <option value="" disabled className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">Select budget</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b} className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">{b}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                {/* Timeline - always visible */}
                <div>
                  <label htmlFor="timeline" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Project Timeline <span className="text-[#FE7004]">*</span>
                  </label>
                  <select
                    id="timeline"
                    required
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all duration-300 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FE7004' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 12px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "20px",
                    }}
                  >
                    <option value="" disabled className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">Select timeline</option>
                    {TIMELINES.map((t) => (
                      <option key={t} value={t} className="bg-slate-50 dark:bg-[#00164A] text-slate-900 dark:text-white">{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="context" className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Context <span className="text-[#FE7004]">*</span>
                  </label>
                  <textarea
                    id="context"
                    required
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    placeholder="Tell us about your project or requirements..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="command-strip w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-slate-100/70 backdrop-blur-sm border border-slate-200/80 dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl px-5 py-3.5 flex items-center gap-3 shadow-xl shadow-black/30">
            <div className="w-7 h-7 rounded-full bg-[#FE7004]/15 flex items-center justify-center">
              <Check className="w-4 h-4 text-[#FE7004]" />
            </div>
            <p className="text-sm text-slate-900 dark:text-white font-medium">
              Message sent successfully!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
