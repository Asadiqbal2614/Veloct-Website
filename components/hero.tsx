"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { BrainCircuit, Cloud, Shield, ArrowRight, FileText } from "lucide-react"

const PILLARS = [
  {
    icon: BrainCircuit,
    title: "AI Automation & AI Agents",
    description: "Custom ChatGPT, AI voice agents, and intelligent workflow automation",
    features: [
      "Custom ChatGPT & AI voice agents",
      "CRM, Sales & HR screening bots",
      "Advanced workflow automation",
      "Custom API & LLM integrations",
      "Automated email & smart notification workflows",
      "Data extraction & quick report generation",
    ],
    accent: "#FE7004",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Services",
    description: "High-availability cloud hosting, VMs, storage, and disaster recovery",
    features: [
      "Cloud hosting & server migration",
      "High-performance virtual machines",
      "Secure object storage & backup",
      "Disaster recovery & global CDN",
      "Real-time system monitoring & uptime alerts",
      "Cloud cost optimization & resource management",
    ],
    accent: "#60A5FA",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Vulnerability assessments, pen testing, and ISO 27001 compliance",
    features: [
      "Vulnerability assessments & security audits",
      "Penetration testing & firewall setup",
      "ISO 27001 & regional compliance",
      "Zero-trust architecture & MFA setup",
      "Regular system patching & updates",
      "Continuous threat tracking & incident response",
    ],
    accent: "#34D399",
  },
]

export default function Hero() {
  const [activePillar, setActivePillar] = useState(0)

  const nextPillar = useCallback(() => {
    setActivePillar((prev) => (prev + 1) % PILLARS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextPillar, 4000)
    return () => clearInterval(timer)
  }, [nextPillar])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-24 md:py-32 bg-white dark:bg-[#00164A] transition-colors duration-300"
    >
      {/* Background - clipped separately so it can't cut content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 tech-grid-bg" />
        <div className="hero-glow top-1/4 -right-20 opacity-60" />
        <div className="hero-glow bottom-1/4 -left-20 opacity-40" />
        <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-transparent dark:via-transparent dark:to-[#00164A]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-5 lg:space-y-6">
            <div className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_forwards]">
              <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
                AI &amp; Cloud Transformation
              </span>
            </div>

            <h1 className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_0.1s_forwards] text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-slate-900 dark:text-white">
              We Build With{" "}
              <span className="bg-gradient-to-r from-[#FE7004] to-orange-300 bg-clip-text text-transparent">
                AI, Cloud
              </span>{" "}
              &amp; Purpose
            </h1>

            <p className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_0.2s_forwards] text-base sm:text-lg text-slate-600 dark:text-white/80 max-w-lg leading-relaxed">
              VELOCT delivers enterprise IT solutions to businesses worldwide — from
              AI-driven automation and cloud infrastructure to cybersecurity and custom
              software that scales.
            </p>

            <div className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_0.3s_forwards] flex flex-wrap gap-3 pt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="command-strip px-5 py-2.5 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-105"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 dark:text-white/80 border border-slate-300 dark:border-white/20 hover:border-[#FE7004]/50 hover:text-slate-900 dark:hover:text-white transition-all duration-300 flex items-center gap-2 bg-slate-100/50 dark:bg-white/5 backdrop-blur-sm"
              >
                <FileText className="w-4 h-4" />
                Request Proposal
              </a>
            </div>
          </div>

          {/* Right Content - Auto-playing Pillar Carousel */}
          <div className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_0.4s_forwards]">
            <div className="bg-slate-50/80 backdrop-blur-md border border-slate-200/60 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-2xl p-5 sm:p-6 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-[#FE7004]/10">
                <span className="text-xs lg:text-sm font-semibold text-slate-500 dark:text-white/50 tracking-widest uppercase">
                  Technology Pillars
                </span>
                <div className="flex items-center gap-1.5 ml-auto">
                  {PILLARS.map((p, i) => (
                    <button
                      key={p.title}
                      type="button"
                      onClick={() => setActivePillar(i)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i === activePillar ? "w-6" : "w-2"
                      }`}
                      style={{
                        backgroundColor: i === activePillar ? p.accent : "rgba(0,0,0,0.15)",
                      }}
                      aria-label={`View ${p.title}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative h-auto md:min-h-[300px]">
                {PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon
                  const isActive = idx === activePillar
                  return (
                    <div
                      key={pillar.title}
                      className={`transition-all duration-700 ease-in-out ${
                        isActive ? "" : "hidden"
                      } md:block md:absolute md:inset-0 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : idx < activePillar
                            ? "opacity-0 -translate-x-6"
                            : "opacity-0 translate-x-6"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div
                        className="bg-white border border-slate-100 shadow-lg shadow-slate-200/50 dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl p-5 lg:p-6 h-full flex flex-col transition-all duration-300 ease-in-out"
                        style={{ borderLeftColor: pillar.accent, borderLeftWidth: "3px" }}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div
                            className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${pillar.accent}15` }}
                          >
                            <Icon className="w-4 h-4 lg:w-[18px] lg:h-[18px]" style={{ color: pillar.accent }} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm lg:text-base font-bold text-slate-900 dark:text-slate-200 leading-snug">
                              {pillar.title}
                            </h4>
                            <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-1.5 lg:space-y-3 flex-1">
                          {pillar.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-[0.8125rem] lg:text-sm text-slate-700 dark:text-slate-400">
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: pillar.accent }}
                              />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link href="/services" className="mt-auto pt-2 lg:pt-3 text-xs lg:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2 w-fit transition-colors duration-200">
                          Explore Capabilities
                          <span className="transform transition-transform duration-200 hover:translate-x-1">&#10140;</span>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-2.5 pt-2.5 border-t border-[#FE7004]/10 flex items-center gap-2 text-xs lg:text-sm text-slate-500 dark:text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7004] animate-pulse-orange" />
                Integrated approach — AI, Cloud &amp; Security working as one
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
