"use client";

import { BrainCircuit, Cloud, Shield, ArrowRight, FileText } from "lucide-react";

const PILLARS = [
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "Custom models, intelligent automation, and predictive analytics",
    features: [
      "Machine Learning & NLP",
      "Process Automation & RPA",
      "Predictive Analytics",
    ],
    accent: "#FE7004",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and cost-optimized cloud architectures",
    features: [
      "AWS, Azure & GCP",
      "Cloud Migration & Modernization",
      "Hybrid Multi-Cloud",
    ],
    accent: "#60A5FA",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Defense-in-depth security for regional & global compliance",
    features: [
      "Threat Monitoring & Response",
      "SOC 2, NIST & ISO 27001",
      "Vulnerability Assessments",
    ],
    accent: "#34D399",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="animate-fade-in-up">
              <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
                Saudi Arabia &amp; Gulf Region
              </span>
            </div>

            <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" style={{ animationDelay: "0.1s" }}>
              We Build With{" "}
              <span className="bg-gradient-to-r from-[#FE7004] to-orange-300 bg-clip-text text-transparent">
                AI, Cloud
              </span>
              {" "}&amp; Purpose
            </h1>

            <p
              className="animate-fade-in-up text-base sm:text-lg text-white/80 max-w-xl leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              VELOCT delivers enterprise IT solutions across Saudi Arabia and the Gulf — from AI-driven
              automation and cloud infrastructure to cybersecurity and custom software that scales.
            </p>

            <div
              className="animate-fade-in-up flex flex-wrap gap-4 pt-2"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="command-strip px-6 py-3 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-105"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white/80 border border-white/20 hover:border-[#FE7004]/50 hover:text-white transition-all duration-300 flex items-center gap-2 glass-panel"
              >
                <FileText className="w-4 h-4" />
                Request Proposal
              </a>
            </div>
          </div>

          {/* Right Content - Three Pillars */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#FE7004]/10">
                <span className="text-xs font-semibold text-white/50 tracking-widest uppercase">Technology Pillars</span>
                <div className="flex items-center gap-1.5 ml-auto">
                  {PILLARS.map((p) => (
                    <span
                      key={p.title}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: p.accent }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="paper-card p-4 sm:p-5 group cursor-default"
                      style={{ borderLeftColor: pillar.accent, borderLeftWidth: "3px" }}
                    >
                      <div className="flex items-start gap-3 mb-2.5">
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
                          <p className="text-xs text-white/70 mt-0.5 line-clamp-1">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                      <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {pillar.features.map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-xs text-white/60">
                            <span
                              className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{ backgroundColor: pillar.accent }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Bottom summary bar */}
              <div className="mt-4 pt-4 border-t border-[#FE7004]/10 flex items-center gap-2 text-xs text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7004]" />
                Integrated approach — AI, Cloud &amp; Security working as one
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
