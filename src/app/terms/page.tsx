import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Award,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Building2,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Builder Cambridge",
  description:
    "Read the Terms of Service, booking conditions, and contractor referral provisions governing the use of BuilderCambridge.com for residential building projects in Cambridge.",
  openGraph: {
    title: "Terms of Service | Builder Cambridge",
    description:
      "Terms of Service and contractor engagement conditions for Builder Cambridge clients.",
    url: "https://buildercambridge.com/terms",
    siteName: "Builder Cambridge",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Header */}
      <section className="bg-[#092457] text-white py-14 lg:py-18 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Contractual &amp; User Agreement</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Terms of Service
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Please read these Terms of Service carefully before utilizing BuilderCambridge.com, requesting building quotations, or engaging contractor services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Effective Date: January 2025
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              10-Year Structural Guarantees
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Vetted Cambridge Trades
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
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092457]">Free Consultations</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complimentary initial property visits and feasibility assessments across Cambridge.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092457]">Insured Contractors</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  All introduced builders carry minimum £2M-£5M Public &amp; Employers Liability insurance.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092457]">Direct Contracts</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Transparent agreements, milestone payment stages, and fixed quotes with the contractor.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#092457]">Cambridge Local</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  18+ years of proven residential excellence across Cambridgeshire villages and city center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Terms Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Sticky Table of Contents (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 order-2 lg:order-1">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="font-black text-sm text-[#092457] uppercase tracking-wider flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-500" />
                <span>Agreement Sections</span>
              </h3>
              <nav className="space-y-1.5 text-xs font-semibold text-slate-600">
                <a href="#acceptance" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  1. Acceptance of Terms
                </a>
                <a href="#nature-of-service" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  2. Nature of Service &amp; Referral Role
                </a>
                <a href="#quotes-estimates" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  3. Quotations, Estimates &amp; Surveys
                </a>
                <a href="#client-responsibilities" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  4. Client Responsibilities &amp; Permissions
                </a>
                <a href="#contractor-agreements" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  5. Contractor Contracts &amp; Payments
                </a>
                <a href="#guarantee-insurance" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  6. 10-Year Guarantee &amp; Insurance
                </a>
                <a href="#limitation-liability" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  7. Disclaimer &amp; Limitation of Liability
                </a>
                <a href="#intellectual-property" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  8. Intellectual Property &amp; Photography
                </a>
                <a href="#governing-law" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  9. Governing Law &amp; Jurisdiction
                </a>
                <a href="#contact-support" className="block py-1.5 px-3 rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
                  10. Contact &amp; Dispute Resolution
                </a>
              </nav>
            </div>

            {/* Support Box */}
            <div className="p-6 rounded-3xl bg-[#092457] text-white space-y-4 shadow-md">
              <div className="space-y-1">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Direct Enquiries</span>
                <h4 className="font-bold text-base">Project Consultation</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have questions about contracts, quotes, or our vetted contractor network?
                </p>
              </div>

              <div className="space-y-2 pt-1 text-xs">
                <a
                  href="tel:+441223782433"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>01223 782433</span>
                </a>
                <a
                  href="mailto:info@buildercambridge.com"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span className="truncate">info@buildercambridge.com</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Terms Text (8 cols) */}
          <main className="lg:col-span-8 space-y-10 order-1 lg:order-2 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 01</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using BuilderCambridge.com (&quot;the Website&quot;), submitting an enquiry form, using our online cost calculator, or requesting an on-site survey, you confirm your unconditional acceptance of these Terms of Service. If you do not agree to these terms, you must refrain from using the Website or our referral services.
              </p>
              <p>
                We reserve the right to revise these Terms at any time. Changes will be posted to this page with an updated effective date. Your continued use of the Website constitutes acceptance of the modified Terms.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Section 2 */}
            <section id="nature-of-service" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 02</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                2. Nature of Service &amp; Referral Role
              </h2>
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-800 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#092457]">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Important Referral Agency Disclaimer</span>
                </div>
                <p className="font-semibold text-slate-900">
                  BuilderCambridge.com acts solely as a booking and introductory agent, referring highly recommended, independent contractors to our clients based on their specific project requirements.
                </p>
                <p>
                  We carefully select and connect clients with trusted builders within the Cambridge area; however, we do not directly manage, supervise, or control the day-to-day physical construction work performed by these contractors on site. All contractual agreements, timelines, milestones, and project specifications are established directly between the client and the contractor.
                </p>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Section 3 */}
            <section id="quotes-estimates" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 03</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                3. Quotations, Estimates &amp; Site Surveys
              </h2>
              <p>
                Initial cost figures generated via our online calculator or preliminary telephone consultations are good-faith indicative estimates intended for early budgetary guidance only.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
                <li><strong>Free Site Surveys:</strong> A formal, legally binding fixed-price quote is provided only after an in-person site survey and review of architectural drawings, structural engineer calculations, and site drainage conditions.</li>
                <li><strong>Validity Period:</strong> Written quotations are typically valid for thirty (30) calendar days from the date of issue, subject to supplier material price volatility (e.g., structural steel RSJs, timber, and insulation).</li>
                <li><strong>Variations &amp; Extra Works:</strong> Any alterations, structural discoveries (e.g. uncharted drains, foundation sub-base anomalies), or additional works requested by the client during construction must be agreed in writing via a formal Variation Order before commencement.</li>
              </ul>
            </section>

            <hr className="border-slate-200" />

            {/* Section 4 */}
            <section id="client-responsibilities" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 04</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                4. Client Responsibilities &amp; Statutory Permissions
              </h2>
              <p>When commissioning a building project in Cambridge, the client is responsible for:</p>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Statutory Approvals:</strong> Securing all necessary Planning Permissions, Permitted Development certificates, and Party Wall Agreements prior to the commencement of structural works.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Site Access &amp; Utilities:</strong> Providing clear, safe site access and continuous supply of water and electricity required for construction machinery during working hours.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Accurate Information:</strong> Disclosing known property boundary disputes, conservation area restrictions, protected trees (TPOs), and existing structural defects.</span>
                </div>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Section 5 */}
            <section id="contractor-agreements" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 05</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                5. Contractor Contracts &amp; Milestone Payments
              </h2>
              <p>
                All construction contracts are entered into directly between you and the designated contractor. Standard best practice includes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li><strong>No Full Upfront Payments:</strong> Standard building works proceed on a milestone schedule (e.g., Foundations complete, Wall plate / Roof watertight, First Fix plumbing/electrics, Plastering, Final Snagging).</li>
                <li><strong>Written Terms:</strong> We encourage all clients to insist upon a formal written agreement (such as FMB or JCT Homeowner Contract) detailing exact specifications, start dates, and retention percentages.</li>
              </ul>
            </section>

            <hr className="border-slate-200" />

            {/* Section 6 */}
            <section id="guarantee-insurance" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 06</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                6. 10-Year Structural Guarantee &amp; Insurance
              </h2>
              <p>
                Contractors referred through BuilderCambridge.com provide structural warranties of up to ten (10) years covering major load-bearing elements, foundations, structural steelwork, and roof structures, subject to terms specified in their individual project contracts.
              </p>
              <p>
                All contractors maintain comprehensive Public Liability Insurance (minimum £2,000,000) and Employers Liability Insurance. Proof of valid insurance cover is inspected before contractor onboarding.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Section 7 */}
            <section id="limitation-liability" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 07</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                7. Disclaimer &amp; Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by English law, BuilderCambridge.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
              <p>
                BuilderCambridge.com is not liable for any actions, delays, performance, or contractual defaults of the contractors referred. Clients are encouraged to conduct their own independent due diligence and discuss expectations thoroughly with their assigned builder.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Section 8 */}
            <section id="intellectual-property" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 08</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                8. Intellectual Property &amp; Photography
              </h2>
              <p>
                All content, trademarks, logos, visual layouts, text, guide articles, and case study photography hosted on BuilderCambridge.com are the proprietary intellectual property of BuilderCambridge.com or licensed for our use. No content may be reproduced, distributed, or republished without prior written permission.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Section 9 */}
            <section id="governing-law" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 09</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                9. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms of Service and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with the laws of England and Wales. Both parties agree that the courts of England and Wales shall have exclusive jurisdiction.
              </p>
            </section>

            <hr className="border-slate-200" />

            {/* Section 10 */}
            <section id="contact-support" className="scroll-mt-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span>Section 10</span>
              </div>
              <h2
                className="text-2xl font-black text-[#092457] font-sans"
                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
              >
                10. Contact &amp; Dispute Resolution
              </h2>
              <p>
                If you have any questions or require assistance regarding our Terms of Service or contractor introductions, please reach out to our team:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5">
                <div><strong>Email:</strong> <a href="mailto:info@buildercambridge.com" className="text-blue-600 hover:underline">info@buildercambridge.com</a></div>
                <div><strong>Telephone:</strong> <a href="tel:+441223782433" className="text-blue-600 hover:underline">+44 1223 782433</a></div>
                <div><strong>Office:</strong> Cambridge, Cambridgeshire, United Kingdom</div>
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
            Ready to Start Your Cambridge Project?
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
              href="/privacy-policy"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#092457] font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors"
            >
              <span>View Privacy &amp; Cookies</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
