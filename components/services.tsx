"use client"

import Link from "next/link"
import { Bot, Globe, Cloud, ChevronRight, ArrowRight } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

const SERVICES = [
  {
    icon: Bot,
    title: "AI Automation & AI Agents",
    description: "Custom ChatGPT bots, AI voice agents, and intelligent workflow automation tailored to your business.",
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
    description: "Custom web applications, SaaS platforms, and enterprise portals built with modern full-stack technologies.",
    items: [
      "Custom web apps (React, Node, Python)",
      "Scalable SaaS platforms & company portals",
      "Secure enterprise admin dashboards",
      "Full-stack development & API integrations",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Services",
    description: "Enterprise cloud hosting, server migration, and scalable infrastructure managed for performance and uptime.",
    items: [
      "Cloud hosting & server migration",
      "High-performance virtual machines (ECS)",
      "Secure object storage & backup",
      "Disaster recovery & global CDN",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-20 bg-white dark:bg-[#00164A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-4">
            <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Our Core Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              Enterprise-grade technology solutions designed to scale with your business — from startups to established organizations.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon
            return (
              <AnimateOnScroll key={service.title} delay={idx * 120}>
                <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl p-6 lg:p-8 relative flex flex-col card-hover-lift h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#FE7004]/10 flex items-center justify-center mb-5 card-icon">
                    <Icon className="w-6 h-6 text-[#FE7004]" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-base text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mt-auto">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-base text-slate-700 dark:text-white/85">
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
