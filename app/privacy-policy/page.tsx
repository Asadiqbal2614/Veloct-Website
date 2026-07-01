import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Database, FileText, Mail, Eye } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen planner-bg">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#FE7004] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-4 mb-12">
          <span className="micro-label inline-block px-3 py-1.5 rounded-full border border-[#FE7004]/30 text-[#FE7004] bg-[#FE7004]/5">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-base max-w-2xl">
            Last updated: July 1, 2026
          </p>
        </div>

        <div className="space-y-8">
          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Introduction</h2>
                <p className="text-white/70 leading-relaxed">
                  VELOCT (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
                  protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website or interact with our services.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Database className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Information We Collect</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We collect information you voluntarily provide when you use our website:
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span><strong className="text-white/90">Contact Forms:</strong> When you submit a consultation request or proposal inquiry, we collect your name, email address, company name, and project details.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span><strong className="text-white/90">Career Applications:</strong> When you apply for a position, we collect your name, contact information, education, work experience, and resume/CV files.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span><strong className="text-white/90">Automated Data:</strong> We may collect non-personal information such as browser type, device type, and pages visited for analytics purposes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">How We Use Your Information</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>To respond to your inquiries and provide consultation services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>To process and evaluate career applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>To improve our website and service offerings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>To communicate with you regarding our services and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>To comply with legal obligations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Eye className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Data Sharing & Disclosure</h2>
                <p className="text-white/70 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third
                  parties without your consent, except as required by law. We may share data with
                  trusted service providers who assist us in operating our website and conducting our
                  business, provided they agree to keep your information confidential.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Data Security</h2>
                <p className="text-white/70 leading-relaxed">
                  We implement industry-standard security measures including encryption, secure
                  server infrastructure, and access controls to protect your personal information.
                  However, no method of electronic storage or transmission is 100% secure. We strive
                  to use commercially acceptable means to protect your data but cannot guarantee
                  absolute security.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Database className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Data Retention</h2>
                <p className="text-white/70 leading-relaxed">
                  We retain your personal information only as long as necessary to fulfill the
                  purposes outlined in this policy, or as required by law. Career application data
                  is retained for the duration of the recruitment process and a reasonable period
                  thereafter. You may request deletion of your data at any time by contacting us.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Your Rights</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Access the personal data we hold about you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Request deletion of your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Withdraw consent at any time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Lodge a complaint with a data protection authority</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have any questions about this Privacy Policy or wish to exercise your data
                  rights, please contact us at:
                </p>
                <div className="mt-4 p-4 glass-panel rounded-lg">
                  <p className="text-white/90 font-medium">VELOCT</p>
                  <p className="text-white/60 text-sm mt-1">contact@veloct.tech</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-white/40 text-sm pt-4">
            <p>This Privacy Policy may be updated periodically. Changes will be posted on this page with an updated revision date.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
