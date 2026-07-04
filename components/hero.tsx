"use client"

import { useEffect, useState, useCallback } from "react"
import { BrainCircuit, Globe, Shield, ArrowRight, FileText } from "lucide-react"

const PILLARS = [
  {
    icon: BrainCircuit,
    title: "AI Automation & AI Agents",
    description: "Custom ChatGPT, AI voice agents, and intelligent workflow automation",
    features: [
      "Custom ChatGPT & AI voice agents",
      "CRM, Sales & HR screening bots",
      "Advanced workflow automation",
    ],
    tag: "🤖 Agentic Workflows Optimized",
    accent: "#FE7004",
  },
  {
    icon: Globe,
    title: "Web App & SaaS Development",
    description: "Custom web apps, scalable SaaS platforms, and enterprise portals",
    features: [
      "Custom web apps (React, Node, Python)",
      "Scalable SaaS platforms & company portals",
      "Secure enterprise admin dashboards",
    ],
    tag: "⚡ Full-Stack Delivery",
    accent: "#60A5FA",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Vulnerability assessments, pen testing, and ISO 27001 compliance",
    features: [
      "Vulnerability assessments & security audits",
      "Penetration testing & firewall setup",
      "ISO 27001 & regional compliance",
    ],
    tag: "🔒 End-to-End Protection",
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
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid-bg" />
      <div className="hero-glow top-1/4 -right-20 opacity-60" />
      <div className="hero-glow bottom-1/4 -left-20 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00164A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_forwards]">
              <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
                AI &amp; Cloud Transformation
              </span>
            </div>

            <h1
              className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_0.1s_forwards] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              We Build With{" "}
              <span className="bg-gradient-to-r from-[#FE7004] to-orange-300 bg-clip-text text-transparent">
                AI, Cloud
              </span>
              {" "}&amp; Purpose
            </h1>

            <p
              className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_0.2s_forwards] text-base sm:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              VELOCT delivers enterprise IT solutions to businesses worldwide — from AI-driven
              automation and cloud infrastructure to cybersecurity and custom software that scales.
            </p>

            <div
              className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_0.3s_forwards] flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="command-strip px-6 py-3 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-105"
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
                className="px-6 py-3 rounded-full text-sm font-semibold text-white/80 border border-white/20 hover:border-[#FE7004]/50 hover:text-white transition-all duration-300 flex items-center gap-2 glass-panel"
              >
                <FileText className="w-4 h-4" />
                Request Proposal
              </a>
            </div>
          </div>

          {/* Right Content - Auto-playing Pillar Carousel */}
          <div className="opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease_0.4s_forwards]">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#FE7004]/10">
                <span className="text-xs font-semibold text-white/50 tracking-widest uppercase">
                  Technology Pillars
                </span>
                <div className="flex items-center gap-1.5 ml-auto">
                  {PILLARS.map((p, i) => (
                    <button
                      key={p.title}
                      type="button"
                      onClick={() => setActivePillar(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        i === activePillar ? "w-6" : ""
                      }`}
                      style={{
                        backgroundColor: i === activePillar ? p.accent : "rgba(255,255,255,0.15)",
                      }}
                      aria-label={`View ${p.title}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative min-h-[340px]">
                {PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon
                  const isActive = idx === activePillar
                  return (
                    <div
                      key={pillar.title}
                      className={`transition-all duration-700 ease-in-out absolute inset-0 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : idx < activePillar
                            ? "opacity-0 -translate-x-6"
                            : "opacity-0 translate-x-6"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div
                        className="paper-card p-5 sm:p-7"
                        style={{ borderLeftColor: pillar.accent, borderLeftWidth: "3px" }}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${pillar.accent}15` }}
                          >
                            <Icon className="w-4.5 h-4.5" style={{ color: pillar.accent }} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-white">
                              {pillar.title}
                            </h4>
                            <p className="text-sm text-white/70 mt-0.5 line-clamp-1">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {pillar.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: pillar.accent }}
                              />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{
                            backgroundColor: `${pillar.accent}12`,
                            color: pillar.accent,
                          }}
                        >
                          {pillar.tag}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-[#FE7004]/10 flex items-center gap-2 text-sm text-white/40">
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
