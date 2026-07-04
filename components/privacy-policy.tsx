import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
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
            Privacy Policy for Veloct
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            Last updated: July 04, 2026
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            This Privacy Policy describes Our policies and procedures on the collection, use and
            disclosure of Your information when You use the Service and tells You about Your privacy
            rights and how the law protects You.
          </p>
          <p className="text-gray-300 leading-relaxed mb-10">
            We use Your Personal Data to provide and improve the Service. By using the Service, You
            agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <div className="space-y-10">
            <section id="interpretation-and-definitions">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Interpretation and Definitions
                </h2>
              </div>
              <div className="pl-14">
                <h3 className="text-lg font-semibold text-gray-100 mt-6 mb-2">Interpretation</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The words whose initial letters are capitalized have meanings defined under the
                  following conditions. The following definitions shall have the same meaning
                  regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="text-lg font-semibold text-gray-100 mt-6 mb-2">Definitions</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For the purposes of this Privacy Policy:
                </p>

                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-100">Account</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      means a unique account created for You to access our Service or parts of our
                      Service.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Company</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      (referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;,
                      &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Privacy Policy) refers to Veloct.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Cookies</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      are small files that are placed on Your computer, mobile device or any other
                      device by a website, containing the details of Your browsing history on that
                      website among its many uses.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Country</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      refers to: Pakistan (with Global Availability)
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Device</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      means any device that can access the Service such as a computer, a cell phone
                      or a digital tablet.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Personal Data</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      (or &ldquo;Personal Information&rdquo;) is any information that relates to an
                      identified or identifiable individual.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Service</dt>
                    <dd className="text-gray-300 leading-relaxed">refers to the Website.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Service Provider</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      means any natural or legal person who processes the data on behalf of the
                      Company. It refers to third-party companies or individuals employed by the
                      Company to facilitate the Service, to provide the Service on behalf of the
                      Company, to perform services related to the Service or to assist the Company in
                      analyzing how the Service is used.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Usage Data</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      refers to data collected automatically, either generated by the use of the
                      Service or from the Service infrastructure itself (for example, the duration of
                      a page visit).
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">Website</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      refers to Veloct, accessible from https://veloct.tech.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-100">You</dt>
                    <dd className="text-gray-300 leading-relaxed">
                      means the individual accessing or using the Service, or the company, or other
                      legal entity on behalf of which such individual is accessing or using the
                      Service, as applicable.
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <section id="collecting-and-using-your-personal-data">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Collecting and Using Your Personal Data
                </h2>
              </div>
              <div className="pl-14">
                <h3 className="text-lg font-semibold text-gray-100 mt-6 mb-2">
                  Types of Data Collected
                </h3>

                <h4 className="font-semibold text-gray-100 mt-4 mb-2">Personal Data</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  While using Our Service, specifically when inquiring about our digital and tech
                  services (such as Web Development, App Development, SaaS, Desktop Applications,
                  SEO, Marketing, Data Automation, and AI Agentic Solutions), We may ask You to
                  provide Us with certain personally identifiable information that can be used to
                  contact or identify You. Personally identifiable information may include, but is
                  not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-300 mb-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Company Name &amp; Business Details</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                </ul>

                <h4 className="font-semibold text-gray-100 mt-4 mb-2">Usage Data</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Usage Data may include information such as Your Device&rsquo;s Internet Protocol
                  address (e.g. IP address), browser type, browser version, the pages of our Service
                  that You visit, the time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When You access the Service by or through a mobile device, We may collect certain
                  information automatically, including, but not limited to, the type of mobile device
                  You use, Your mobile device&rsquo;s unique ID, the IP address of Your mobile
                  device, Your mobile operating system, the type of mobile Internet browser You use,
                  unique device identifiers and other diagnostic data.
                </p>

                <h4 className="font-semibold text-gray-100 mt-4 mb-2">
                  Tracking Technologies and Cookies
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use Cookies and similar tracking technologies to track the activity on Our
                  Service and store certain information. Tracking technologies We use include beacons,
                  tags, and scripts to collect and track information and to improve and analyze Our
                  Service.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You can instruct Your browser to refuse all Cookies or to indicate when a Cookie
                  is being sent. However, if You do not accept Cookies, You may not be able to use
                  some parts of our Service.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use both Session and Persistent Cookies for the purposes set out below:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-100">
                      Necessary / Essential Cookies (Session Cookies):
                    </span>{" "}
                    Administered by Us. These Cookies are essential to provide You with services
                    available through the Website and to enable You to use some of its features.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Cookies Policy / Notice Acceptance Cookies (Persistent Cookies):
                    </span>{" "}
                    Administered by Us. These Cookies identify if users have accepted the use of
                    cookies on the Website.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Functionality Cookies (Persistent Cookies):
                    </span>{" "}
                    Administered by Us. These Cookies allow Us to remember choices You make when You
                    use the Website, such as remembering your login details or service preferences.
                  </li>
                </ul>
              </div>
            </section>

            <section id="use-of-your-personal-data">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Use of Your Personal Data
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Company may use Personal Data for the following purposes:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-100">
                      To provide and maintain our Service:
                    </span>{" "}
                    Including to monitor the usage of our Service and manage project requirements.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      To manage Your Account/Project Portal:
                    </span>{" "}
                    To manage Your registration as a user or client of the Service.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      For the performance of a contract:
                    </span>{" "}
                    The development, compliance, and undertaking of service agreements, SaaS
                    licensing, or custom software delivery contracts for the services You have
                    purchased.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">To contact You:</span> To contact
                    You by email, telephone calls, SMS, or other equivalent forms of electronic
                    communication regarding updates or informative communications related to the
                    functionalities, products, or contracted tech services, including security and
                    development updates.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      To provide You with news and offers:
                    </span>{" "}
                    General information about other services, AI innovations, and automation tools
                    which We offer that are similar to those that you have already purchased or
                    inquired about unless You have opted not to receive such information.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">To manage Your requests:</span> To
                    attend and manage Your project quotes, inquiries, and support requests.
                  </li>
                </ul>
              </div>
            </section>

            <section id="data-retention-and-secure-deletion">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Data Retention and Secure Deletion
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Company will retain Your Personal Data only for as long as is necessary for
                  the purposes set out in this Privacy Policy (such as active project development and
                  client communication).
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Where possible, We apply shorter retention periods and/or reduce identifiability
                  by deleting, aggregating, or anonymizing data. Unless otherwise stated, the
                  retention periods below are maximum periods (&ldquo;up to&rdquo;):
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-100">
                      Account &amp; Project Information:
                    </span>{" "}
                    Retained for the duration of your active business relationship plus up to 24
                    months after contract termination or account closure to handle post-delivery
                    support, warranties, or legal disputes.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      Customer Support Data &amp; Chat Transcripts:
                    </span>{" "}
                    Support tickets and correspondence are retained for up to 24 months from the
                    date of ticket closure. Chat transcripts are held for up to 24 months for quality
                    assurance, after which they are securely deleted or fully anonymized (removing
                    all identifying information such as names and emails, while keeping raw text for
                    internal optimization).
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">Usage Data:</span> Website
                    analytics data and server logs are retained for up to 24 months for security
                    monitoring, troubleshooting, and platform performance evaluation.
                  </li>
                </ul>
              </div>
            </section>

            <section id="international-disclosures">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  International Disclosures &amp; Global Privacy Rights (GDPR &amp; CCPA Compliance)
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  As Veloct operates globally, providing services to international clients, we
                  respect your data privacy rights under global regulations, including the European
                  Union General Data Protection Regulation (GDPR) and the California Consumer Privacy
                  Act (CCPA).
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you are entitled to the following rights regarding your
                  Personal Data:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-100">The Right to Access:</span> You
                    have the right to request copies of your personal data held by us.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">The Right to Rectification:</span>{" "}
                    You have the right to request that we correct any information you believe is
                    inaccurate or incomplete.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      The Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):
                    </span>{" "}
                    You have the right to request that we erase your personal data, under certain
                    legal conditions.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      The Right to Restrict or Object to Processing:
                    </span>{" "}
                    You have the right to object to or restrict our processing of your personal data
                    under certain circumstances, including direct marketing.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-100">
                      The Right to Data Portability:
                    </span>{" "}
                    You have the right to request that we transfer the data we have collected to
                    another organization, or directly to you.
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  If you wish to exercise any of these rights, please contact us using the
                  information provided below. We will respond to your request within the legally
                  required timeframe (typically 30 days).
                </p>
              </div>
            </section>

            <section id="transfer-of-your-personal-data">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Transfer of Your Personal Data
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your information, including Personal Data, is processed at the Company&rsquo;s
                  operating offices and in any other places where the parties involved in the
                  processing are located. It means that this information may be transferred to — and
                  maintained on — computers located outside of Your state, province, country or other
                  governmental jurisdiction where the data protection laws may differ from those from
                  Your jurisdiction.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The Company will take all steps reasonably necessary to ensure that Your data is
                  treated securely and in accordance with this Privacy Policy and international data
                  transfer safeguards.
                </p>
              </div>
            </section>

            <section id="security-of-your-personal-data">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Security of Your Personal Data
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  The security of Your Personal Data is important to Us, but remember that no method
                  of transmission over the Internet, or method of electronic storage is 100% secure.
                  While We strive to use commercially acceptable means to protect Your Personal Data,
                  We cannot guarantee its absolute security.
                </p>
              </div>
            </section>

            <section id="childrens-privacy">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Children&rsquo;s Privacy
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  Our Service does not address anyone under the age of 16. We do not knowingly
                  collect personally identifiable information from anyone under the age of 16. If You
                  are a parent or guardian and You are aware that Your child has provided Us with
                  Personal Data, please contact Us immediately.
                </p>
              </div>
            </section>

            <section id="links-to-other-websites">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Links to Other Websites
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  Our Service may contain links to third-party websites or integrations that are not
                  operated by Us. We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third-party sites or services.
                </p>
              </div>
            </section>

            <section id="changes-to-this-privacy-policy">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">
                  Changes to this Privacy Policy
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed">
                  We may update Our Privacy Policy from time to time. We will notify You of any
                  changes by posting the new Privacy Policy on this page and updating the
                  &ldquo;Last updated&rdquo; date at the top of this Privacy Policy. You are advised
                  to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </section>

            <section id="contact-us">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FE7004]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white pt-1.5">Contact Us</h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your data
                  protection rights, You can contact us:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <span className="font-medium text-gray-100">By email:</span> info@veloct.tech
                  </li>
                  <li>
                    <span className="font-medium text-gray-100">
                      By visiting this page on our website:
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
