"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#FE7004]/10 py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xl font-bold text-[#FE7004]">
            VELOCT
          </span>
          <p className="text-sm text-white/50 max-w-xl">
            AI &bull; Cloud &bull; Cybersecurity &bull; Managed IT &bull; Custom Software
          </p>
          <p className="text-xs text-white/30 mt-2">
            &copy; {new Date().getFullYear()} VELOCT. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
