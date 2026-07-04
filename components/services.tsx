"use client"

import Link from "next/link"
import { Bot, Globe, Shield, ChevronRight, ArrowRight } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

const SERVICES = [
  {
    icon: Bot,
    title: "AI Automation & AI Agents",
    description: "Intelligent automation tailored for your workflows — from custom ChatGPT agents to AI voice assistants that transform how your business operates.",
    items: [
      "Custom ChatGPT bots & AI voice agents",
      "CRM, Sales & HR screening automation",
      "AI-powered call agents & virtual assistants",
      "Zapier / Make workflow alternatives",
    ],
  },
  {
    icon: Globe,
    title: "Web App & SaaS Development",
    description: "Scalable, high-performance web architecture built with modern stacks — from SaaS platforms to secure enterprise portals.",
    items: [
      "Custom web apps (React, Node, Python)",
      "Scalable SaaS platforms & company portals",
      "Secure enterprise admin dashboards",
      "Full-stack development & API integrations",
    ],
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Defense-in-depth security for your enterprise — protecting your infrastructure, data, and compliance posture against evolving threats.",
    items: [
      "Vulnerability assessments & security audits",
      "Penetration testing & firewall setup",
      "ISO 27001 & regional compliance audits",
      "Zero-trust architecture implementation",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-4">
            <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our Core Services
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              We deliver enterprise-grade technology solutions tailored to the needs of forward-thinking businesses worldwide.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon
            return (
              <AnimateOnScroll key={service.title} delay={idx * 120}>
                <div className="paper-card p-6 lg:p-8 relative flex flex-col card-hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-[#FE7004]/10 flex items-center justify-center mb-5 card-icon">
                    <Icon className="w-6 h-6 text-[#FE7004]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-base text-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mt-auto">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-base text-white/85">
                        <ChevronRight className="w-4 h-4 text-[#FE7004] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="flex justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-[#FE7004] border border-[#FE7004]/50 hover:bg-[#FE7004] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FE7004]/20"
            >
              Explore All Enterprise Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
