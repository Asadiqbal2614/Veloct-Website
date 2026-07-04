"use client"

import {
  MessageSquare,
  Globe,
  ShieldCheck,
  BarChart3,
  Smartphone,
  Monitor,
  ShoppingCart,
  Palette,
  TrendingUp,
} from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

const SOLUTIONS = [
  { icon: MessageSquare, title: "AI Chatbots & Agents" },
  { icon: Globe, title: "Web & SaaS Platforms" },
  { icon: ShieldCheck, title: "Cyber Security" },
  { icon: BarChart3, title: "Data Analytics & BI" },
  { icon: Smartphone, title: "Mobile Apps" },
  { icon: Monitor, title: "Custom Desktop Software" },
  { icon: ShoppingCart, title: "E-Commerce Solutions" },
  { icon: Palette, title: "UI/UX & Branding" },
  { icon: TrendingUp, title: "SEO & Digital Marketing" },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
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
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SOLUTIONS.map((solution, idx) => {
            const Icon = solution.icon
            return (
              <AnimateOnScroll key={solution.title} delay={idx * 50}>
                <div className="paper-card p-5 sm:p-6 flex items-center gap-4 group cursor-pointer card-hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-[#FE7004]/10 flex items-center justify-center flex-shrink-0 card-icon">
                    <Icon className="w-5.5 h-5.5 text-[#FE7004]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#FE7004] transition-colors duration-300">
                    {solution.title}
                  </h3>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
