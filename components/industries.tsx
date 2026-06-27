"use client";

import {
  Heart,
  GraduationCap,
  Store,
  Truck,
  Building,
  Hotel,
  HardHat,
  MapPin,
} from "lucide-react";

const INDUSTRIES = [
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: GraduationCap },
  { name: "Retail", icon: Store },
  { name: "Logistics", icon: Truck },
  { name: "Manufacturing", icon: Building },
  { name: "SMB", icon: MapPin },
  { name: "Hospitality", icon: Hotel },
  { name: "Construction", icon: HardHat },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18 space-y-4">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            Versatility
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Our solutions are built to adapt across sectors — from healthcare to logistics, we deliver results.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="paper-card p-6 sm:p-8 flex flex-col items-center text-center gap-4 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FE7004]/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#FE7004]/20">
                  <Icon className="w-7 h-7 text-[#FE7004] transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
