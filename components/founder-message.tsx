"use client";

export default function FounderMessage() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
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
          <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed italic">
            &ldquo;At VELOCT, we believe technology should be a catalyst — not a complication. 
            Our mission is to bring enterprise-grade innovation to businesses across Saudi Arabia 
            and the Gulf, without the friction and overhead of traditional IT engagements.&rdquo;
          </blockquote>

          <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed italic">
            &ldquo;We founded VELOCT to bridge the gap between global tech standards and
            regional needs. Every solution we deliver is designed with local context,
            global best practices, and an unwavering commitment to quality.&rdquo;
          </blockquote>

          <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed italic">
            &ldquo;Whether you are a growing startup or an established enterprise, our team is
            ready to partner with you — from strategy through deployment and beyond.
            Let&rsquo;s build something impactful together.&rdquo;
          </blockquote>

          <div className="pt-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FE7004]/15 flex items-center justify-center text-[#FE7004] font-bold text-lg">
              F
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Founder &amp; CEO</p>
              <p className="text-white/50 text-xs">VELOCT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
