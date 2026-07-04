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
            This Cookie Policy explains what Cookies are and how We use them. You should read this
            policy so You can understand what type of cookies We use, or the information We collect
            using Cookies and how that information is used.
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
                  Cookies are small text files that are stored on Your browser or device by websites,
                  apps, online media, and advertisements. They are used to remember your browser or
                  device during and across website visits to improve your experience.
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
                  At Veloct (https://veloct.tech), we use cookies to:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-100">
                      Ensure our Website operates securely and efficiently.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Enhance user experience by remembering your preferences
                    </span>{" "}
                    (such as language or login details for client portals).
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Analyze how visitors interact with our digital tech services
                    </span>{" "}
                    (Web Development, AI Automation, SaaS platforms, etc.) to improve site
                    performance.
                  </li>
                </ul>
              </div>
            </section>

            <section id="types-of-cookies-we-use">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Types of Cookies We Use
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-6">
                  We use both Session and Persistent Cookies for the purposes set out below:
                </p>

                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                    <h4 className="font-semibold text-gray-100 mb-1">
                      Strictly Necessary / Essential Cookies (Session Cookies)
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      <span className="text-gray-400 font-medium">Purpose:</span> These Cookies are
                      essential to provide You with services available through the Website and to
                      enable You to use some of its features, such as accessing secure client areas
                      or submitting service inquiry forms. Without these Cookies, the services You
                      have asked for cannot be provided.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                    <h4 className="font-semibold text-gray-100 mb-1">
                      Cookies Policy / Notice Acceptance Cookies (Persistent Cookies)
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      <span className="text-gray-400 font-medium">Purpose:</span> These Cookies
                      identify if users have accepted the use of cookies on the Website so that the
                      cookie notice does not repeatedly appear.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                    <h4 className="font-semibold text-gray-100 mb-1">
                      Functionality Cookies (Persistent Cookies)
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      <span className="text-gray-400 font-medium">Purpose:</span> These Cookies
                      allow Us to remember choices You make when You use the Website, such as
                      remembering your preferences or service category selections. This provides You
                      with a more personalized experience.
                    </p>
                  </div>
                </div>
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
                <p className="text-gray-300 leading-relaxed mb-4">
                  If You prefer to avoid the use of Cookies on the Website, first You must disable
                  the use of Cookies in Your browser and then delete the Cookies saved in Your
                  browser associated with this website. You may use this option for preventing the
                  use of Cookies at any time.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If You do not accept Our Cookies, You may experience some inconvenience in your
                  use of the Website and some features may not function properly.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-10 pl-14">
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FE7004] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    For any questions regarding our Cookie Policy, please contact us at{" "}
                    <span className="text-gray-100 font-medium">info@veloct.tech</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
