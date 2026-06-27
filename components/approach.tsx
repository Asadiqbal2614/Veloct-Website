"use client";

import { Search, Layers, Rocket, RefreshCw } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, goals, and challenges — conducting stakeholder interviews, system audits, and market analysis to build a complete picture.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Strategy",
    description:
      "We craft a tailored roadmap with clear milestones, technology stack recommendations, timelines, and budget estimates aligned to your business objectives.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deployment",
    description:
      "Our teams execute with agility — building, testing, and deploying in iterative cycles with continuous feedback and full transparency throughout.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Optimization",
    description:
      "Post-launch, we monitor, maintain, and optimize your systems — ensuring peak performance, security, and scalability as your business evolves.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-4">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            A proven four-phase methodology that ensures clarity, quality, and continuous improvement from concept to scale.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="paper-card p-6 lg:p-8 relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FE7004]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#FE7004]" />
                </div>

                <span className="text-3xl sm:text-4xl font-bold text-[#FE7004]/20 absolute top-6 right-6 select-none">
                  {step.number}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 relative z-10">
                  {step.title}
                </h3>

                <p className="text-sm text-white/60 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
