import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-8 sm:p-12 lg:p-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Cookie Policy for Veloct
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            Last updated: July 04, 2026
          </p>

          <p className="text-gray-300 leading-relaxed mb-10">
            This Cookie Policy explains what cookies are and how we use them on the
            VELOCT website (https://veloct.tech).
          </p>

          <div className="space-y-10">
            <section id="what-are-cookies">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  What Are Cookies?
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files stored on your browser or device by websites.
                  They are used to remember your browser during and across visits to improve
                  your experience.
                </p>
              </div>
            </section>

            <section id="how-we-use-cookies">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  How We Use Cookies
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies only for the purposes described below. We do not use
                  analytics, advertising, or tracking cookies:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-100">
                      Essential authentication cookies (session-based).
                    </span>{" "}
                    Required for the admin dashboard and secure client portal to function.
                    Set by Supabase, our authentication provider.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Theme preference cookie (persistent).
                    </span>{" "}
                    Remembers your light/dark mode selection so the site appears
                    consistently on return visits.
                  </li>
                </ul>
              </div>
            </section>

            <section id="no-analytics-or-advertising-cookies">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  No Analytics or Advertising Cookies
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  We currently do not use Google Analytics, Google Ads, Meta Pixel,
                  Microsoft Clarity, Hotjar, or any other analytics or advertising
                  services that set cookies. If this changes in the future, we will
                  update this policy and provide appropriate notice.
                </p>
              </div>
            </section>

            <section id="your-choices-regarding-cookies">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Your Choices Regarding Cookies
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  You can control cookies through your browser settings. Most browsers
                  let you view, block, or delete cookies. If you disable cookies, some
                  parts of the website (such as the admin dashboard) may not function
                  correctly.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-10 pl-14">
            <p className="text-gray-300 leading-relaxed">
              For questions regarding this Cookie Policy, please contact us at{' '}
              <span className="font-medium text-gray-100">info@veloct.tech</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
