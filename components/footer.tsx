"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#FE7004]/10 py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="text-xl font-bold text-[#FE7004]">
            VELOCT
          </span>
          <p className="text-sm text-white/50 max-w-xl">
            AI &bull; Cloud &bull; Cybersecurity &bull; Managed IT &bull; Custom Software
          </p>

          <div className="flex items-center gap-5 pt-2 flex-wrap justify-center">
            <Link
              href="/about"
              className="text-xs text-white/40 hover:text-[#FE7004] transition-colors"
            >
              About Us
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <Link
              href="/privacy-policy"
              className="text-xs text-white/40 hover:text-[#FE7004] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <Link
              href="/cookies"
              className="text-xs text-white/40 hover:text-[#FE7004] transition-colors"
            >
              Cookie Policy
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-[#FE7004] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>

          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} VELOCT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
