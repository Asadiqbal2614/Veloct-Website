import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsConditions() {
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
            Terms and Conditions for Veloct
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            Last updated: July 04, 2026
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Please read these Terms and Conditions (&ldquo;Terms&rdquo;, &ldquo;Terms and
            Conditions&rdquo;) carefully before using the https://veloct.tech website (the
            &ldquo;Service&rdquo;) operated by Veloct (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or
            &ldquo;our&rdquo;).
          </p>
          <p className="text-gray-300 leading-relaxed mb-10">
            Your access to and use of the Service is conditioned on your acceptance of and compliance
            with these Terms. These Terms apply to all visitors, users, clients, and others who access
            or use the Service.
          </p>

          <div className="space-y-10">
            <section id="services-provided">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-6.36 2.97a.75.75 0 01-1.028-.956l1.7-5.1m9.688-2.946c.672.672 1.768.786 2.574.6a1.5 1.5 0 00.964-2.423l-5.1-5.1a1.5 1.5 0 00-2.424.964c-.186.806-.072 1.902.6 2.574m0 0l2.486 2.486m0 0l3.93 3.93m-3.93-3.93l-3.93-3.93m3.93 3.93l-2.486 2.486m-4.5 4.5l-2.486 2.486m0 0l-3.93-3.93m3.93 3.93l3.93 3.93" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  1. Services Provided
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  Veloct provides digital technology solutions, including but not limited to Web
                  Development, Application Development, SaaS (Software as a Service) Solutions,
                  Desktop Applications, SEO, Marketing, Data Automation, and AI/Agentic Solutions.
                  The specific deliverables, timelines, and costs for customized project work will be
                  detailed in separate proposals or service contracts agreed upon by both parties.
                </p>
              </div>
            </section>

            <section id="intellectual-property">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  2. Intellectual Property
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Unless otherwise stated in a custom service agreement:
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All materials, content, designs, logos, and software infrastructure displayed on
                  Veloct are the intellectual property of Veloct and are protected by applicable
                  copyright, trademark, and intellectual property laws.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Upon full payment for customized client projects (e.g., custom web development or
                  software), intellectual property rights of the specific deliverables are transferred
                  to the client as outlined in their specific project contract.
                </p>
              </div>
            </section>

            <section id="user-responsibilities">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  3. User Responsibilities
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  By using our Website or engaging our services, you agree not to:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-100">
                      Use the Service for any illegal or unauthorized purpose.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Attempt to gain unauthorized access to our servers, infrastructure, or client
                      portals.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Copy, resell, or duplicate any part of our proprietary software, SaaS
                      platforms, or AI workflows without express written permission.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="payments-and-billing">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  4. Payments and Billing
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  For commercial clients utilizing our development or consulting services:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-100">
                      Payment terms, milestones, and billing methods
                    </span>{" "}
                    are governed by the specific project contract or invoice agreed upon prior to
                    project initiation.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Failure to meet agreed-upon payment milestones
                    </span>{" "}
                    may result in the temporary suspension of development work or SaaS service
                    access.
                  </li>
                </ul>
              </div>
            </section>

            <section id="limitation-of-liability">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  5. Limitation of Liability
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  In no event shall Veloct, nor its directors, employees, partners, agents,
                  suppliers, or affiliates, be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including without limitation, loss of profits,
                  data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-100">
                      Your access to or use of or inability to access or use the Service.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Any conduct or content of any third party on the Service.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Any unauthorized access, use, or alteration of your transmissions or content.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="third-party-links">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  6. Third-Party Links
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  Our Service may contain links to third-party web sites or services that are not
                  owned or controlled by Veloct. We have no control over, and assume no
                  responsibility for, the content, privacy policies, or practices of any third-party
                  websites or services.
                </p>
              </div>
            </section>

            <section id="termination">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  7. Termination
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  We may terminate or suspend your access immediately, without prior notice or
                  liability, for any reason whatsoever, including without limitation if you breach
                  the Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
              </div>
            </section>

            <section id="governing-law">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  8. Governing Law and Dispute Resolution
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of
                  Pakistan, without regard to its conflict of law provisions. For international
                  clients, any disputes arising from these Terms or our services shall first be
                  attempted to be resolved through mutual negotiation, failing which international
                  arbitration principles or local legal jurisdictions may apply as defined in
                  individual service contracts.
                </p>
              </div>
            </section>

            <section id="changes-to-terms">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  9. Changes to Terms
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at
                  any time. By continuing to access or use our Service after those revisions become
                  effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </section>

            <section id="contact-us">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  10. Contact Us
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <span className="font-medium text-gray-100">By email:</span> info@veloct.tech
                  </li>
                  <li>
                    <span className="font-medium text-gray-100">
                      By visiting our website:
                    </span>{" "}
                    https://veloct.tech
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
