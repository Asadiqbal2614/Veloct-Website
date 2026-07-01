"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight, ChevronRight, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["hero", "services", "industries", "why-us", "solutions", "approach", "contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 40);
      setShowScrollTop(currentY > 300);

      if (currentY > 80 && currentY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    elements.forEach((el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(el.id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/")) return;
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <><header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "bg-[#00164A]/90 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex-shrink-0"
          >
            <img
              src="/assets/logo.png"
              alt="VELOCT"
              width={105}
              className="h-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
                  activeSection === link.href.replace("#", "")
                    ? "text-[#FE7004]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#FE7004] rounded-full transition-all duration-300",
                    activeSection === link.href.replace("#", "")
                      ? "w-4/5"
                      : "w-0 group-hover:w-4/5"
                  )}
                />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="command-strip px-5 py-2.5 rounded-full text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-105"
            >
              Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-400 overflow-hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="glass-panel mx-4 mb-4 rounded-2xl p-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-300",
                activeSection === link.href.replace("#", "")
                  ? "text-[#FE7004] bg-[#FE7004]/10"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              )}
            >
              {link.label}
              <ChevronRight className="w-4 h-4 text-white/40" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="command-strip mt-2 px-5 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-[#FE7004]/20"
          >
            Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
          showScrollTop
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-2",
          "bg-[#FE7004] hover:bg-[#e06504] text-white"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </>
  );
}
