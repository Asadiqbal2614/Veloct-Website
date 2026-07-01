import Link from 'next/link'
import { ArrowLeft, Scale, FileText, Shield, AlertTriangle, Ban, Globe, Mail } from 'lucide-react'

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-white/60 text-base max-w-2xl">
            Last updated: July 1, 2026
          </p>
        </div>

        <div className="space-y-8">
          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Scale className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Acceptance of Terms</h2>
                <p className="text-white/70 leading-relaxed">
                  By accessing or using the VELOCT website and services, you agree to be bound by
                  these Terms & Conditions. If you do not agree with any part of these terms, you
                  must not use our website or services.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Services Description</h2>
                <p className="text-white/70 leading-relaxed">
                  VELOCT provides technology consulting services including but not limited to
                  artificial intelligence, cloud computing, cybersecurity, managed IT, and custom
                  software development. The specific scope, deliverables, and timelines for any
                  engagement shall be defined in a separate service agreement between VELOCT and
                  the client.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Use of Website</h2>
                <p className="text-white/70 leading-relaxed mb-4">You agree to use our website only for lawful purposes and in a manner that does not:</p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Infringe upon the rights of others</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Violate any applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Transmit harmful code, viruses, or malware</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Interfere with the proper functioning of the website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FE7004] mt-1.5">•</span>
                    <span>Attempt to gain unauthorized access to our systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Ban className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Intellectual Property</h2>
                <p className="text-white/70 leading-relaxed">
                  All content on this website — including text, graphics, logos, images, software,
                  and design — is the property of VELOCT and is protected by applicable intellectual
                  property laws. You may not reproduce, distribute, modify, or create derivative
                  works without our prior written consent.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Limitation of Liability</h2>
                <p className="text-white/70 leading-relaxed">
                  VELOCT shall not be liable for any indirect, incidental, special, consequential,
                  or punitive damages arising out of or relating to your use of our website or
                  services. Our total liability for any claim shall not exceed the amount paid by
                  you, if any, for accessing our website or services.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Disclaimer</h2>
                <p className="text-white/70 leading-relaxed">
                  Our website and services are provided on an &ldquo;as is&rdquo; and
                  &ldquo;as available&rdquo; basis without any warranties, express or implied.
                  VELOCT does not guarantee that the website will be uninterrupted, secure, or
                  error-free. Any reliance on the information provided on this website is at your
                  own risk.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Governing Law</h2>
                <p className="text-white/70 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the
                  Kingdom of Saudi Arabia. Any disputes arising under these terms shall be subject
                  to the exclusive jurisdiction of the courts in the Kingdom of Saudi Arabia.
                </p>
              </div>
            </div>
          </div>

          <div className="paper-card p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#FE7004] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Contact Information</h2>
                <p className="text-white/70 leading-relaxed">
                  For questions about these Terms & Conditions, please contact us at:
                </p>
                <div className="mt-4 p-4 glass-panel rounded-lg">
                  <p className="text-white/90 font-medium">VELOCT Legal</p>
                  <p className="text-white/60 text-sm mt-1">contact@veloct.tech</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-white/40 text-sm pt-4">
            <p>We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
