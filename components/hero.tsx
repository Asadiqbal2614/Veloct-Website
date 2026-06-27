"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Check, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    label: "Digital Transformation",
    title: "End-to-End Digital Transformation",
    description: "From legacy migration to full digital ecosystems — we architect, build and deploy at scale across the Gulf region.",
    items: ["Strategic IT roadmaps", "Legacy system migration", "Cloud-native architecture"],
  },
  {
    label: "Cybersecurity",
    title: "Enterprise-Grade Cybersecurity",
    description: "Protect your business with defense-in-depth security tailored to regional compliance and global best practices.",
    items: ["Vulnerability assessments", "SOC 2 & NIST alignment", "24/7 threat monitoring"],
  },
  {
    label: "Intelligent Apps",
    title: "AI-Powered Intelligent Applications",
    description: "Leverage machine learning, NLP, and computer vision to build apps that learn, adapt, and drive decisions.",
    items: ["Custom AI model development", "Conversational AI & chatbots", "Predictive analytics dashboards"],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="animate-fade-in-up">
              <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
                Saudi Arabia &amp; Gulf Region
              </span>
            </div>

            <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" style={{ animationDelay: "0.1s" }}>
              We Build With{" "}
              <span className="bg-gradient-to-r from-[#FE7004] to-orange-300 bg-clip-text text-transparent">
                AI, Cloud
              </span>
              {" "}&amp; Purpose
            </h1>

            <p
              className="animate-fade-in-up text-base sm:text-lg text-white/60 max-w-xl leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              VELOCT delivers enterprise IT solutions across Saudi Arabia and the Gulf — from AI-driven
              automation and cloud infrastructure to cybersecurity and custom software that scales.
            </p>

            <div
              className="animate-fade-in-up flex flex-wrap gap-4 pt-2"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="command-strip px-6 py-3 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-105"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white/80 border border-white/20 hover:border-[#FE7004]/50 hover:text-white transition-all duration-300 flex items-center gap-2 glass-panel"
              >
                <FileText className="w-4 h-4" />
                Request Proposal
              </a>
            </div>
          </div>

          {/* Right Content - Slider */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-[360px]">
              {/* Slide Content */}
              <div className="space-y-5">
                <span className="micro-label text-[#FE7004]">
                  {SLIDES[currentSlide].label}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {SLIDES[currentSlide].title}
                </h3>

                <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                  {SLIDES[currentSlide].description}
                </p>

                <ul className="space-y-2.5">
                  {SLIDES[currentSlide].items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FE7004]/15 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-[#FE7004]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dot Navigation */}
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-[#FE7004]/10">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      idx === currentSlide
                        ? "w-8 bg-[#FE7004]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
