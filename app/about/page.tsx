import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Target, Eye, Heart, Shield, Zap, Users, TrendingUp } from 'lucide-react'

const values = [
  { icon: Shield, title: 'Security First', description: 'Every solution is built with enterprise-grade security at its core, protecting your data and operations.' },
  { icon: Zap, title: 'Innovation Driven', description: 'We leverage cutting-edge AI, cloud, and cybersecurity technologies to deliver future-ready solutions.' },
  { icon: Users, title: 'Global Perspective', description: 'Deep understanding of diverse markets, regulatory landscapes, and business cultures — delivering solutions that work across borders.' },
  { icon: Heart, title: 'Client Partnership', description: 'We don\'t just deliver projects — we build lasting partnerships with transparent communication and shared goals.' },
  { icon: TrendingUp, title: 'Scalable Solutions', description: 'From startups to enterprises, our solutions grow with your business, ensuring long-term value.' },
  { icon: Target, title: 'Quality Excellence', description: 'Unwavering commitment to quality through rigorous testing, best practices, and continuous improvement.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen planner-bg">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#FE7004] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="space-y-4 mb-14">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Accelerating Innovation Across the Globe
          </h1>
          <p className="text-white/60 text-base max-w-3xl leading-relaxed">
            VELOCT is a global technology consulting firm specializing in AI, cloud
            infrastructure, and cybersecurity. We help businesses worldwide
            modernize, scale, and secure their digital operations.
          </p>
        </div>

        {/* Company Overview */}
        <div className="paper-card p-6 sm:p-8 lg:p-10 mb-8">
          <div className="flex items-start gap-4">
            <Eye className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Company Overview</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Founded with a vision to bridge the gap between global technology standards and
                regional business needs, VELOCT delivers enterprise-grade solutions without the
                traditional overhead. Our team combines deep technical expertise with practical
                business acumen to drive measurable outcomes for our clients.
              </p>
              <p className="text-white/70 leading-relaxed">
                From strategy consulting to full-scale deployment, we partner with organizations
                at every stage of their digital journey — ensuring technology serves as a
                catalyst for growth, not a complication.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="paper-card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Target className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Our Mission</h2>
                <p className="text-white/70 leading-relaxed text-sm">
                  To democratize access to enterprise-grade AI, cloud, and cybersecurity
                  solutions for businesses everywhere — making
                  advanced technology practical, accessible, and impactful.
                </p>
              </div>
            </div>
          </div>
          <div className="paper-card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Eye className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Our Vision</h2>
                <p className="text-white/70 leading-relaxed text-sm">
                  To be the most trusted technology partner worldwide — recognized for
                  delivering innovative, secure, and scalable solutions that empower businesses
                  to lead in the digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Message */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 mb-8">
          <div className="space-y-4 mb-8">
            <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
              Executive Message
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Message from the Founder
            </h2>
          </div>

          <div className="space-y-6">
            <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed">
              &ldquo;At VELOCT, we believe technology should be a catalyst — not a complication.
              Our mission is to bring enterprise-grade innovation to businesses worldwide,
              ensuring seamless digital evolution without traditional IT overhead.&rdquo;
            </blockquote>

            <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed">
              &ldquo;We founded VELOCT to bridge the gap between cutting-edge technology and
              real-world business needs. Every solution we deliver is designed with
              global best practices and an unwavering commitment to quality.&rdquo;
            </blockquote>

            <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed">
              &ldquo;Whether you are a growing startup or an established enterprise, our team is
              ready to partner with you — from strategy through deployment and beyond, no matter where you are.
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

        {/* Core Values */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="paper-card p-5">
                  <Icon className="w-6 h-6 text-[#FE7004] mb-3" />
                  <h3 className="text-white font-semibold mb-1">{v.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
