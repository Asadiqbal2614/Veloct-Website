"use client"

import Link from "next/link"
import { ArrowLeft, Bot, Globe, Shield, BarChart3, Smartphone, Monitor, ShoppingCart, Palette, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

const HIGH_VALUE_SERVICES = [
  {
    icon: Bot,
    title: "AI Automation & AI Agents",
    description: "Intelligent automation tailored for your workflows — from custom ChatGPT agents to AI voice assistants that transform how your business operates.",
    features: [
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
    features: [
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
    features: [
      "Vulnerability assessments & security audits",
      "Penetration testing & firewall setup",
      "ISO 27001 & regional compliance audits",
      "Zero-trust architecture implementation",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description: "Transform raw data into strategic insights with powerful dashboards, data pipelines, and predictive analytics that drive decisions.",
    features: [
      "Power BI & Tableau dashboards",
      "Data warehousing & ETL pipelines",
      "Predictive analytics & business insights",
      "Real-time reporting & visualization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform enterprise mobility solutions built for performance, reliability, and exceptional user experiences.",
    features: [
      "Native iOS (Swift) & Android (Kotlin)",
      "Cross-platform Flutter & React Native",
      "Seamless API & backend integrations",
      "End-to-end mobile strategy & deployment",
    ],
  },
  {
    icon: Monitor,
    title: "Custom Desktop Software",
    description: "Robust offline-first and legacy modernization solutions built with enterprise-grade stability and security.",
    features: [
      ".NET, Java, and Python applications",
      "Offline-capable inventory & accounting systems",
      "Legacy system modernization & migration",
      "Secure enterprise desktop solutions",
    ],
  },
]

const GROWTH_SERVICES = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    features: [
      "Shopify, WooCommerce & Magento setups",
      "Secure payment gateway integrations",
      "Automated inventory synchronization",
      "Custom shopping experiences",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX & Graphic Design",
    features: [
      "Figma wireframing & interactive prototyping",
      "Corporate branding & logo design",
      "Marketing materials & social media assets",
      "User research & usability testing",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    features: [
      "Google Ads & Social Media Management",
      "On-page, Off-page, and Local SEO",
      "Data-driven growth campaigns",
      "Content strategy & conversion optimization",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen planner-bg">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <AnimateOnScroll>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#FE7004] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </AnimateOnScroll>

        {/* Hero Section */}
        <AnimateOnScroll delay={80}>
          <div className="space-y-4 mb-16">
            <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
              What We Deliver
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Enterprise IT &amp; Digital Solutions
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-3xl leading-relaxed">
              End-to-end technology services designed to scale your business, optimize
              operations, and secure your digital assets.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category 1: High-Value Tech Services */}
        <div className="mb-16">
          <AnimateOnScroll delay={120}>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-[#FE7004]/30 to-transparent" />
              <span className="micro-label text-[#FE7004] tracking-wider">Core Offerings</span>
              <div className="h-px flex-1 bg-gradient-to-l from-[#FE7004]/30 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
              High-Value Tech Services
            </h2>
            <p className="text-white/60 text-sm sm:text-base text-center max-w-2xl mx-auto mb-10">
              Our primary focus — delivering enterprise-grade technology that drives measurable business outcomes.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGH_VALUE_SERVICES.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <AnimateOnScroll key={svc.title} delay={idx * 80}>
                  <div className="paper-card p-6 lg:p-8 flex flex-col h-full card-hover-lift">
                    <div className="w-12 h-12 rounded-xl bg-[#FE7004]/10 flex items-center justify-center mb-5 card-icon">
                      <Icon className="w-6 h-6 text-[#FE7004]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{svc.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-5">{svc.description}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                          <CheckCircle2 className="w-4 h-4 text-[#FE7004] flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>

        {/* Category 2: Digital Growth Services */}
        <div className="mb-16">
          <AnimateOnScroll delay={100}>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-[#FE7004]/30 to-transparent" />
              <span className="micro-label text-[#FE7004] tracking-wider">Growth Layer</span>
              <div className="h-px flex-1 bg-gradient-to-l from-[#FE7004]/30 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
              Digital Growth Services
            </h2>
            <p className="text-white/60 text-sm sm:text-base text-center max-w-2xl mx-auto mb-10">
              Supporting services that amplify your brand, engage your audience, and accelerate revenue.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GROWTH_SERVICES.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <AnimateOnScroll key={svc.title} delay={idx * 80}>
                  <div className="paper-card p-6 lg:p-8 flex flex-col h-full card-hover-lift">
                    <div className="w-11 h-11 rounded-xl bg-[#FE7004]/10 flex items-center justify-center mb-4 card-icon">
                      <Icon className="w-5.5 h-5.5 text-[#FE7004]" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-3">{svc.title}</h3>
                    <ul className="space-y-2 mt-auto">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                          <CheckCircle2 className="w-4 h-4 text-[#FE7004] flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <AnimateOnScroll delay={120}>
          <div className="glass-panel rounded-2xl p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FE7004]/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Let&rsquo;s build something exceptional together. Get in touch for a free
                consultation and discover how VELOCT.TECH can power your next chapter.
              </p>
              <Link
                href="/#contact"
                className="command-strip inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
