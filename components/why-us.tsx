"use client"

import { Globe, Shield, Server, Lightbulb, HeadphonesIcon, Briefcase } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

const REASONS = [
  {
    icon: Globe,
    title: "Globally-Ready Solutions",
    description:
      "Deep cross-border expertise spanning regulatory compliance and international best practices — we build what works everywhere.",
  },
  {
    icon: Shield,
    title: "Security-First Mindset",
    description:
      "Every solution is engineered with security at its core, ensuring your data and operations remain protected at all times.",
  },
  {
    icon: Server,
    title: "Scalable Infrastructure",
    description:
      "Cloud-native architectures designed to grow with you — from startup to enterprise, your systems scale effortlessly.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description:
      "We stay ahead of the technology curve so you can too — AI, automation, and modern stacks are our default, not an upgrade.",
  },
  {
    icon: HeadphonesIcon,
    title: "Remote Service Delivery",
    description:
      "Full project delivery and support remotely across the globe — fast response, minimal downtime, maximum uptime.",
  },
  {
    icon: Briefcase,
    title: "Business-Centric Approach",
    description:
      "Technology serves your business goals, not the other way around. We align every solution with your strategic objectives.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-4">
            <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
              The Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Why Choose VELOCT
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              We combine deep technical expertise with global perspective to deliver IT solutions that make a difference.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <AnimateOnScroll key={reason.title} delay={idx * 80}>
                <div className="paper-card p-6 lg:p-8 card-hover-lift h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#FE7004]/10 flex items-center justify-center mb-4 card-icon">
                    <Icon className="w-5.5 h-5.5 text-[#FE7004]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
