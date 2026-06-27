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
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20 space-y-4">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            A proven four-phase methodology that ensures clarity, quality, and continuous improvement from concept to scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical spine line */}
          <div className="absolute left-5 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FE7004]/40 via-[#FE7004]/20 to-transparent" />

          <div className="space-y-10 lg:space-y-0">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;

              const cardContent = (
                <>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FE7004]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FE7004]" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </>
              );

              return (
                <div key={step.number} className="relative lg:pb-24 last:pb-0">
                  {/* Mobile layout */}
                  <div className="flex lg:hidden items-start gap-4">
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#FE7004] to-orange-500 flex items-center justify-center shadow-lg shadow-[#FE7004]/30">
                      <span className="text-sm font-bold text-white">{step.number}</span>
                    </div>
                    <div className="flex-1 paper-card p-5 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                      {cardContent}
                    </div>
                  </div>

                  {/* Desktop alternating layout */}
                  <div className="hidden lg:flex items-start">
                    {isLeft ? (
                      <>
                        <div className="w-[calc(50%-2rem)] paper-card p-7 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                          {cardContent}
                        </div>
                        <div className="w-16 flex-shrink-0 flex justify-center relative">
                          <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#FE7004] to-orange-500 flex items-center justify-center shadow-lg shadow-[#FE7004]/30">
                            <span className="text-base font-bold text-white">{step.number}</span>
                          </div>
                        </div>
                        <div className="w-[calc(50%-2rem)]" />
                      </>
                    ) : (
                      <>
                        <div className="w-[calc(50%-2rem)]" />
                        <div className="w-16 flex-shrink-0 flex justify-center relative">
                          <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#FE7004] to-orange-500 flex items-center justify-center shadow-lg shadow-[#FE7004]/30">
                            <span className="text-base font-bold text-white">{step.number}</span>
                          </div>
                        </div>
                        <div className="w-[calc(50%-2rem)] paper-card p-7 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                          {cardContent}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
