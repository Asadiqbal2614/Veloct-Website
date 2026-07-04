"use client";
import Image from 'next/image'

export default function FounderMessage() {
  return (
    <section id="about" className="relative py-16 lg:py-20">
    <div className="animate-fade-in-up">
      <div className="glass-panel rounded-2xl p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto">
        <div className="space-y-4 mb-8">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            Executive Message
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Message from the Founder
          </h3>
        </div>

        <div className="space-y-6">
          <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed">
            &ldquo;At VELOCT, we believe technology should be a catalyst — not a complication. 
            Our mission is to bring enterprise-grade innovation to businesses worldwide,
            ensuring seamless digital evolution without traditional IT overhead.&rdquo;
          </blockquote>

          <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed">
            &ldquo;We founded VELOCT to bridge the gap between global tech standards and
            regional needs. Every solution we deliver is designed with local context,
            global best practices, and an unwavering commitment to quality.&rdquo;
          </blockquote>

          <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed">
            &ldquo;Whether you are a growing startup or an established enterprise, our team is
            ready to partner with you — from strategy through deployment and beyond.
            Let&rsquo;s build something impactful together.&rdquo;
          </blockquote>

          <div className="pt-4 flex items-center gap-3">
            <Image
              src="/assets/founder.png"
              alt="Muhammad Habib"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-white font-semibold text-sm">Muhammad Habib</p>
              <p className="text-white/50 text-sm">Founder &amp; CEO, VELOCT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
