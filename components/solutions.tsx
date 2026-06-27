"use client";

import {
  MessageSquare,
  Cpu,
  Cloud,
  ShieldCheck,
  Package,
  Users,
  LineChart,
  BarChart3,
  Globe,
} from "lucide-react";

const SOLUTIONS = [
  { icon: MessageSquare, title: "AI Support Chatbots" },
  { icon: Cpu, title: "Process Automation" },
  { icon: Cloud, title: "Cloud Migration" },
  { icon: ShieldCheck, title: "Security Assessments" },
  { icon: Package, title: "Inventory Systems" },
  { icon: Users, title: "Attendance & HR Systems" },
  { icon: LineChart, title: "CRM Implementations" },
  { icon: BarChart3, title: "Business Intelligence" },
  { icon: Globe, title: "SaaS Web Platforms" },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-4">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            Deliverables
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Solutions We Deliver
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            From chatbots to full-platform SaaS — we deliver production-ready solutions that drive real business impact.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SOLUTIONS.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="paper-card p-5 sm:p-6 flex items-center gap-4 group cursor-pointer animate-fade-in-up hover:bg-[#FE7004]/[0.04] hover:shadow-lg hover:shadow-[#FE7004]/10 hover:border-[#FE7004]/40"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#FE7004]/10 flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:bg-[#FE7004]/20 group-hover:scale-110">
                  <Icon className="w-5.5 h-5.5 text-[#FE7004]" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#FE7004] transition-colors duration-300">
                  {solution.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
