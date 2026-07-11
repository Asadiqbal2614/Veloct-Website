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
    <div className="min-h-screen bg-white dark:bg-[#00164A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-white/60 hover:text-[#FE7004] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="space-y-4 mb-14">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            About Us
          </span>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight whitespace-normal md:whitespace-nowrap">
            Digital Transformation, AI &amp; Cloud Services Worldwide
          </h1>
          <p className="text-slate-500 dark:text-white/60 text-base leading-relaxed">
            VELOCT is an international IT service provider specializing in digital
            transformation, AI, and cloud services for growing enterprises worldwide.
            We turn complex technology into real business outcomes.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl p-6 sm:p-8 lg:p-10 mb-8">
          <div className="flex items-start gap-4">
            <Eye className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Company Overview</h2>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
                VELOCT is led by a seasoned IT Specialist with deep roots in both hardware
                infrastructure and modern full-stack software development. We deliver secure,
                scalable solutions that combine enterprise-grade technology with seamless deployment.
              </p>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                From AI-driven automation and zero-trust cybersecurity to custom software and
                cloud architecture, we partner with organizations worldwide to turn complex
                technical challenges into measurable business outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Target className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Our Mission</h2>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm">
                  Every day, we help organizations automate workflows, harden their security
                  posture, and modernize their infrastructure — delivering measurable results
                  through AI, cloud, and custom software.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Eye className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Our Vision</h2>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm">
                  To be the technology partner that enterprises and high-growth companies
                  trust for AI, cybersecurity, and custom software — delivered with
                  global best practices and local understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Message */}
        <div className="bg-slate-100/70 backdrop-blur-sm border border-slate-200/80 dark:bg-white/5 dark:border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 mb-8">
          <div className="space-y-4 mb-8">
            <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
              Executive Message
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Message from the Founder
            </h2>
          </div>

          <div className="space-y-6">
            <blockquote className="pl-5 border-l-4 border-[#FE7004] text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              &ldquo;At VELOCT, our focus is high-value tech — AI, Cybersecurity, and Custom Software —
              combined with seamless deployment and zero-trust security architectures. We
              concentrate on what moves the needle for our clients.&rdquo;
            </blockquote>

            <blockquote className="pl-5 border-l-4 border-[#FE7004] text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              &ldquo;I founded VELOCT with a singular vision: to make enterprise-grade
              digital transformation accessible to companies everywhere. Every solution we
              deliver is built on global best practices, rigorous quality standards, and
              deep understanding of both hardware and software ecosystems.&rdquo;
            </blockquote>

            <blockquote className="pl-5 border-l-4 border-[#FE7004] text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
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
                <p className="text-slate-900 dark:text-white font-semibold text-sm">Muhammad Habib</p>
                <p className="text-slate-500 dark:text-white/50 text-sm">Founder &amp; CEO, VELOCT</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl p-5">
                  <Icon className="w-6 h-6 text-[#FE7004] mb-3" />
                  <h3 className="text-slate-900 dark:text-white font-semibold mb-1">{v.title}</h3>
                  <p className="text-slate-500 dark:text-white/60 text-sm leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
