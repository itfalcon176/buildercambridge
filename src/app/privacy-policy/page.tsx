import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Cookie,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Cookies Policy | Builder Cambridge",
  description:
    "Learn how BuilderCambridge.com protects your personal data, adheres to UK GDPR regulations, and manages cookie preferences for Cambridge residential construction clients.",
  openGraph: {
    title: "Privacy & Cookies Policy | Builder Cambridge",
    description:
      "Comprehensive Privacy and Cookies Policy for Builder Cambridge. UK GDPR and DPA 2018 compliant.",
    url: "https://buildercambridge.com/privacy-policy",
    siteName: "Builder Cambridge",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Header */}
      <section className="bg-[#092457] text-white py-14 lg:py-18 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Privacy &amp; Cookies Policy
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At Builder Cambridge, we value your trust. This policy outlines how we collect, use, protect, and handle your personal data and cookie preferences across BuilderCambridge.com.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Effective: January 2025
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              256-Bit SSL Encrypted
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <Cookie className="w-3.5 h-3.5 text-blue-400" />
              Cookie Choice Control
            </span>
          </div>
        </div>
      </section>

      {/* 2. Key Trust Pillars Strip */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092457]">Data Protection</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Strictly aligned with UK Data Protection Act 2018 and ICO guidelines.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092457]">Never Sold</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  We never sell, rent, or monetise your contact details to third-party advertisers.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092457]">Full Transparency</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Clear insight into what information is requested and why we require it.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092457]">Cookie Control</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  You can modify or disable non-essential analytical cookies at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Policy Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Sticky Table of Contents (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 order-2 lg:order-1">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="font-black text-sm text-[#092457] uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" />
                <span>Table of Contents</span>
              </h3>
              <nav className="space-y-1.5 text-xs font-semibold text-slate-600">
                <a href="#who-we-are" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  1. Who We Are &amp; Data Controller
                </a>
                <a href="#data-we-collect" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  2. Personal Data We Collect
                </a>
                <a href="#how-we-use-data" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  3. How We Use Your Information
                </a>
                <a href="#legal-basis" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  4. Legal Basis for Processing
                </a>
                <a href="#contractor-disclosure" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  5. Contractor Referral Disclosure
                </a>
                <a href="#cookies-policy" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  6. Cookies &amp; Tracking Technologies
                </a>
                <a href="#data-retention" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  7. Data Retention &amp; Storage
                </a>
                <a href="#your-rights" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  8. Your Rights Under UK GDPR
                </a>
                <a href="#security" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  9. Data Security Measures
                </a>
                <a href="#contact-data" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  10. Contacting Our Privacy Officer
                </a>
              </nav>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl bg-[#092457] text-white space-y-4 shadow-md">
              <div className="space-y-1">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Need Assistance?</span>
                <h4 className="font-bold text-base">Privacy or Project Queries</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have questions regarding your data or need to exercise your right to access or erasure?
                </p>
              </div>

              <div className="space-y-2 pt-1 text-xs">
                <a
                  href="mailto:info@buildercambridge.com"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span className="truncate">info@buildercambridge.com</span>
                </a>
                <a
                  href="tel:+441223782433"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>+44 1223 782433</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Text (8 cols) */}
          <main className="lg:col-span-8 space-y-10 order-1 lg:order-2 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* Section 1 */}
            <section id="who-we-are" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 01</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                1. Who We Are &amp; Data Controller
              </h2>
              <p>
                BuilderCambridge.com (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a leading Cambridge-focused construction and building network operating across Cambridge and surrounding Cambridgeshire postal codes (CB1 through CB25).
              </p>
              <p>
                For the purposes of the UK Data Protection Act 2018 and the UK General Data Protection Regulation (UK GDPR), BuilderCambridge.com acts as the Data Controller in respect of personal information gathered directly through our website, contact forms, quotation calculators, telephone inquiries, and WhatsApp messaging.
              </p>
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-xs sm:text-sm text-slate-800 space-y-1">
                <span className="font-bold text-[#092457]">Official Website:</span> https://buildercambridge.com<br />
                <span className="font-bold text-[#092457]">Registered Location:</span> Cambridge, Cambridgeshire, United Kingdom<br />
                <span className="font-bold text-[#092457]">Direct Email:</span> info@buildercambridge.com
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Section 2 */}
            <section id="data-we-collect" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 02</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                2. Personal Data We Collect
              </h2>
              <p>
                We only collect personal information that is reasonably necessary to provide you with architectural advice, construction feasibility assessments, bespoke price estimates, and site survey appointments.
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-bold text-sm text-[#092457] mb-1">A. Contact &amp; Identity Details</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Your full name, email address, telephone numbers, and property address/postcode within Cambridge provided when submitting an enquiry or requesting a site survey.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-bold text-sm text-[#092457] mb-1">B. Project Specifications &amp; Architectural Information</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Details regarding your home project (e.g., single or double-storey extension dimensions, loft conversion type, structural wall removal, kitchen renovation requirements, planning permission status, and target budget).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-bold text-sm text-[#092457] mb-1">C. Technical &amp; Device Information</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    IP addresses, browser user-agent strings, approximate geographic location, device type, referring URL, pages viewed, and visit duration collected via secure analytics cookies to prevent spam and optimize website performance.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Section 3 */}
            <section id="how-we-use-data" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 03</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                3. How We Use Your Information
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Preparing Accurate Quotes:</strong> Evaluating architectural drawings, project scopes, and issuing itemized, transparent estimates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Site Surveys &amp; Consultations:</strong> Coordinating with you to arrange in-person property surveys across Cambridge.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Contractor Matching:</strong> Introducing your project requirements to vetted, insured master contractors qualified for your specific build.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Communication &amp; Customer Support:</strong> Responding promptly via phone, email, or WhatsApp to client enquiries and updates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Spam Prevention &amp; Security:</strong> Monitoring form submissions against malicious bot traffic and automated attacks.</span>
                </li>
              </ul>
            </section>

            <hr className="border-slate-200" />

            {/* Section 4 */}
            <section id="legal-basis" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 04</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                4. Legal Basis for Processing Under UK GDPR
              </h2>
              <p>Under Article 6 of the UK GDPR, we rely on the following lawful grounds:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="font-bold text-[#092457] mb-1">Contractual Necessity</h4>
                  <p className="text-slate-600">Processing necessary to take steps at your request prior to entering into a building quotation or service agreement.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="font-bold text-[#092457] mb-1">Explicit Consent</h4>
                  <p className="text-slate-600">Where you provide clear affirmative consent by ticking quotation submission checkboxes or cookie consent prompts.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="font-bold text-[#092457] mb-1">Legitimate Interests</h4>
                  <p className="text-slate-600">Processing necessary to maintain website security, prevent fraud, and enhance our services for Cambridge homeowners.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="font-bold text-[#092457] mb-1">Legal Obligation</h4>
                  <p className="text-slate-600">Where required to retain building and financial transaction records to comply with UK tax and statutory regulations.</p>
                </div>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Section 5 */}
            <section id="contractor-disclosure" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 05</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                5. Contractor Referral Disclosure
              </h2>
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-800 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#092457]">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Booking Agent &amp; Referral Disclosure Notice</span>
                </div>
                <p>
                  BuilderCambridge.com acts solely as a booking and referral agent connecting clients with vetted, independent building contractors and tradespeople in the Cambridge area.
                </p>
                <p>
                  To fulfill your request for an on-site survey and formal quote, we share your submitted project specifications and contact details with the selected contractor assigned to your enquiry. All contractors are required by agreement to maintain strict confidentiality and utilize your details solely for the execution of your quotation and construction project.
                </p>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Section 6: Cookies Policy */}
            <section id="cookies-policy" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 06</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                6. Cookies &amp; Tracking Technologies Policy
              </h2>
              <p>
                Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, enhance navigation, and provide reporting information.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-2xl overflow-hidden">
                  <thead className="bg-[#092457] text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Cookie Category</th>
                      <th className="p-3.5 font-bold">Purpose</th>
                      <th className="p-3.5 font-bold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-800">Essential / Necessary</td>
                      <td className="p-3.5 text-slate-600">Required for website navigation, CSRF protection, and quote form security.</td>
                      <td className="p-3.5 text-slate-500">Session / 1 Year</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-800">Performance &amp; Analytics</td>
                      <td className="p-3.5 text-slate-600">Google Analytics (anonymized IP) measuring article reads, page visits, and site loading speeds.</td>
                      <td className="p-3.5 text-slate-500">Up to 2 Years</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-800">Functional &amp; UI</td>
                      <td className="p-3.5 text-slate-600">Remembers user interface preferences, quote calculator choices, and recent work filters.</td>
                      <td className="p-3.5 text-slate-500">6 Months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
                <h4 className="font-bold text-[#092457]">Managing &amp; Disabling Cookies</h4>
                <p className="text-slate-600">
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. Please note that if you disable or refuse essential cookies, some parts of our quote calculators and booking tools may become inaccessible.
                </p>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Section 7 */}
            <section id="data-retention" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 07</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                7. Data Retention &amp; Storage
              </h2>
              <p>
                We only retain your personal data for as long as necessary to fulfil the purposes we collected it for:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li><strong>General Enquiries without Booking:</strong> Retained for 12 months from your last communication, then securely destroyed.</li>
                <li><strong>Completed Project Contracts:</strong> Retained for up to 10 years to support our 10-Year structural guarantee commitments, building control certifications, and legal compliance.</li>
              </ul>
            </section>

            <hr className="border-slate-200" />

            {/* Section 8 */}
            <section id="your-rights" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 08</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                8. Your Rights Under UK GDPR
              </h2>
              <p>
                Under UK data protection law, you have specific rights in relation to your personal data:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-[#092457] block mb-0.5">Right of Access (SAR)</span>
                  <span className="text-slate-600">Request a copy of the personal data we hold about you at no charge.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-[#092457] block mb-0.5">Right to Rectification</span>
                  <span className="text-slate-600">Request correction of incomplete or inaccurate information.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-[#092457] block mb-0.5">Right to Erasure</span>
                  <span className="text-slate-600">Request deletion of your data when there is no lawful reason for retention.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-[#092457] block mb-0.5">Right to Object</span>
                  <span className="text-slate-600">Object to data processing based on legitimate interests or direct marketing.</span>
                </div>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Section 9 */}
            <section id="security" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 09</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                9. Data Security Measures
              </h2>
              <p>
                We have put in place robust security measures to prevent your personal information from being accidentally lost, used, or accessed in an unauthorized way. All web traffic to BuilderCambridge.com is encrypted using modern 256-bit Transport Layer Security (TLS/SSL).
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Section 10 */}
            <section id="contact-data" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 10</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                10. Contact Our Privacy Officer
              </h2>
              <p>
                If you have any questions about this Privacy &amp; Cookies Policy, or wish to exercise any of your statutory data rights, please contact our team:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5">
                <div><strong>Email:</strong> <a href="mailto:info@buildercambridge.com" className="text-blue-600 hover:underline">info@buildercambridge.com</a></div>
                <div><strong>Telephone:</strong> <a href="tel:+441223782433" className="text-blue-600 hover:underline">+44 1223 782433</a></div>
                <div><strong>WhatsApp:</strong> +44 7542 012258</div>
                <div><strong>Location:</strong> Cambridge, Cambridgeshire, United Kingdom</div>
                <div className="pt-2 text-slate-500">
                  You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#092457]">ico.org.uk</a> if you believe your data has been handled improperly.
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* 4. Bottom CTA Strip */}
      <section className="bg-slate-50 border-t border-slate-200/80 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3
            className="text-2xl font-black text-[#092457] font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Ready to Discuss Your Cambridge Building Project?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Book a complimentary site survey and fixed-price quotation with our experienced structural builders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#092457] hover:bg-amber-500 hover:text-slate-950 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <span>Request Free Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/terms"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#092457] font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors"
            >
              <span>View Terms of Service</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
