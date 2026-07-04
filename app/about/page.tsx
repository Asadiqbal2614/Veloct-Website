import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Target, Eye, Heart, Shield, Zap, Users, TrendingUp } from 'lucide-react'

const values = [
  { icon: Shield, title: 'Zero-Trust Security', description: 'Every solution is engineered with zero-trust architectures and defense-in-depth — protecting your data, operations, and compliance posture.' },
  { icon: Zap, title: 'Innovation Driven', description: 'We leverage cutting-edge AI, cloud, and cybersecurity technologies to deliver future-ready solutions that drive business growth.' },
  { icon: Users, title: 'Global Perspective', description: 'Deep cross-border expertise spanning regulatory compliance and international best practices — we build what works everywhere.' },
  { icon: Heart, title: 'Client Partnership', description: 'We don\'t just deliver projects — we build lasting partnerships with transparent communication, shared goals, and measurable outcomes.' },
  { icon: TrendingUp, title: 'Scalable Solutions', description: 'From startups to enterprises, our cloud-native architectures and modular systems grow seamlessly with your business.' },
  { icon: Target, title: 'Quality Excellence', description: 'Unwavering commitment to quality through rigorous testing, industry best practices, and continuous improvement across every delivery.' },
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
            Digital Transformation, AI &amp; Cloud Services — Worldwide
          </h1>
          <p className="text-white/60 text-base max-w-3xl leading-relaxed">
            VELOCT.TECH is an international IT service provider specializing in digital
            transformation, AI, and cloud services for forward-thinking businesses worldwide.
            We bridge the gap between complex technology and real business goals.
          </p>
        </div>

        {/* Company Overview */}
        <div className="paper-card p-6 sm:p-8 lg:p-10 mb-8">
          <div className="flex items-start gap-4">
            <Eye className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Company Overview</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                VELOCT.TECH is led by a seasoned IT Specialist with deep roots in both hardware
                infrastructure and modern full-stack software development. We deliver secure,
                scalable, and intelligent solutions that act as catalysts for business growth —
                combining enterprise-grade technology with seamless deployment.
              </p>
              <p className="text-white/70 leading-relaxed">
                From AI-driven automation and zero-trust cybersecurity to custom software and
                cloud architecture, we partner with organizations worldwide to turn complex
                technical challenges into measurable business outcomes.
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
                  To deliver secure, scalable, and intelligent solutions that act as catalysts
                  for business growth — combining high-value technology with seamless deployment
                  and zero-trust security architectures.
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
                  To be the preferred technology partner for forward-thinking businesses
                  worldwide — bridging the gap between complex technology and business goals
                  through AI, cybersecurity, and custom software excellence.
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
              &ldquo;At VELOCT.TECH, we bridge the gap between complex technology and business
              goals. Our focus is high-value tech — AI, Cybersecurity, and Custom Software —
              combined with seamless deployment and zero-trust security architectures.&rdquo;
            </blockquote>

            <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed">
              &ldquo;I founded VELOCT.TECH with a singular vision: to make enterprise-grade
              digital transformation accessible to forward-thinking businesses everywhere.
              Every solution we deliver is built on global best practices, rigorous quality
              standards, and a deep understanding of both hardware and software ecosystems.&rdquo;
            </blockquote>

            <blockquote className="pl-5 border-l-4 border-[#FE7004] text-white/80 text-base sm:text-lg leading-relaxed">
              &ldquo;Whether you are scaling your startup or modernizing an enterprise, our team
              is ready to partner with you — from strategy through deployment and beyond.
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
