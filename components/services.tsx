"use client";

import { Bot, Shield, Cloud, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent automation solutions that transform operations, reduce costs, and unlock new capabilities through machine learning and robotic process automation.",
    items: [
      "Custom AI model development & deployment",
      "Intelligent document processing (IDP)",
      "Workflow automation & RPA",
      "AI-powered analytics & insights",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security services to protect your enterprise from evolving threats while ensuring compliance with regional and global standards.",
    items: [
      "Network security & penetration testing",
      "SOC 2, NIST & ISO 27001 compliance",
      "Identity & access management (IAM)",
      "Incident response & threat hunting",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "End-to-end cloud services from migration to management, enabling scalability, resilience, and cost efficiency for your infrastructure.",
    items: [
      "Cloud migration & modernization",
      "AWS, Azure & GCP architecture",
      "Hybrid & multi-cloud strategies",
      "Cloud cost optimization & governance",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="paper-card p-6 lg:p-8 relative flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FE7004]/10 flex items-center justify-center mb-5">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
