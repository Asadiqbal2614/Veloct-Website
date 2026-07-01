import Link from 'next/link'
import { ArrowLeft, Cookie, Shield, Settings, BarChart3, AlertTriangle, Mail } from 'lucide-react'

export default function CookiesPage() {
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
            Cookie Policy
          </h1>
          <p className="text-white/60 text-base max-w-2xl">
            Last updated: July 1, 2026
          </p>
        </div>

        <div className="space-y-8">
          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Cookie className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">What Are Cookies</h2>
                <p className="text-white/70 leading-relaxed">
                  Cookies are small text files stored on your device by your web browser when you
                  visit a website. They help the website remember your preferences, understand how
                  you interact with the site, and improve your overall experience. Cookies cannot
                  access your personal files or harm your device.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Settings className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">How We Use Cookies</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  VELOCT uses cookies solely for the following purposes:
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span><strong className="text-white/90">Essential/Functional Cookies:</strong> Required for the website to function properly, such as maintaining your session state during navigation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span><strong className="text-white/90">Performance &amp; Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymized usage data. This allows us to improve site performance and user experience.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Third-Party Cookies</h2>
                <p className="text-white/70 leading-relaxed">
                  We may use third-party services such as Google Analytics to collect standard
                  internet log information and details about visitor behavior patterns. These
                  services use their own cookies and are governed by their respective privacy
                  policies. We do not use cookies for advertising or tracking across other websites.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Managing Cookies</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Adjust your browser settings to block or delete cookies (see your browser&rsquo;s help section for instructions)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Use your browser&rsquo;s incognito/private mode to automatically clear cookies after each session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Install browser extensions that give you granular cookie control</span>
                  </li>
                </ul>
                <p className="text-white/60 text-sm mt-4">
                  Please note that disabling certain cookies may affect the functionality and
                  performance of our website.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Policy Updates</h2>
                <p className="text-white/70 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in
                  technology, regulation, or our practices. Any changes will be posted on this
                  page with an updated revision date. We encourage you to review this policy
                  periodically.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have any questions about our use of cookies, please reach out to us:
                </p>
                <div className="mt-4 p-4 glass-panel rounded-lg">
                  <p className="text-white/90 font-medium">VELOCT</p>
                  <p className="text-white/60 text-sm mt-1">contact@veloct.tech</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-white/40 text-sm pt-4">
            <p>By continuing to use our website, you consent to our use of cookies as described in this policy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
