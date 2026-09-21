"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Star,
  MessageCircle,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { servicesData } from "@/data/servicesData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export const Footer: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="bg-[#051329] text-white pt-16 pb-12 border-t border-blue-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-blue-900/60">
          <div className="flex items-center gap-4 bg-blue-950/60 p-4 rounded-2xl border border-blue-900/40">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Since 2007</h4>
              <p className="text-xs text-slate-400">18+ Years of Cambridge excellence</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-950/60 p-4 rounded-2xl border border-blue-900/40">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">10-Year Guarantee</h4>
              <p className="text-xs text-slate-400">Fully insured & guaranteed</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-950/60 p-4 rounded-2xl border border-blue-900/40">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Fixed-Price Quotes</h4>
              <p className="text-xs text-slate-400">Zero hidden costs or surprises</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-950/60 p-4 rounded-2xl border border-blue-900/40">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Star className="w-6 h-6 fill-blue-400 text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">4.9/5 Rating</h4>
              <p className="text-xs text-slate-400">33+ Verified Google Reviews</p>
            </div>
          </div>
        </div>

        {/* 4 Columns Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Col 1: About & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              BuilderCambridge.com has established itself as one of the greatest and prestigious providers of construction focused interior renovation services and building works across Cambridge and surrounding Cambridgeshire villages.
            </p>
            <div className="pt-2 space-y-2 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span>Cambridge, Cambridgeshire, United Kingdom (CB1 - CB25)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+441223782433" className="hover:text-blue-300 transition-colors font-medium">
                  +44 1223 782433
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://api.whatsapp.com/send?phone=+447542012258&text=Hi%20Builder%20Cambridge,%20I%20would%20like%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-medium"
                >
                  WhatsApp: +44 7542 012258
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@buildercambridge.com" className="hover:text-blue-300 transition-colors">
                  info@buildercambridge.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Residential Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-blue-900 pb-2 flex items-center justify-between">
              <span>Popular Services</span>
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {servicesData.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialist & Groundworks */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-blue-900 pb-2 flex items-center justify-between">
              <span>Specialist Trades</span>
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {servicesData.slice(7, 14).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-blue-300 hover:translate-x-1 inline-block transition-all"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Areas */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-blue-900 pb-2 flex items-center justify-between">
              <span>Quick Links</span>
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/about" className="hover:text-blue-300 transition-colors">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/recent-work" className="hover:text-blue-300 transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors">
                  Free Site Survey & Quote
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-300 transition-colors">
                  Cambridge Building Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors">
                  Request a Free Site Survey
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-blue-900/60">
              <button
                type="button"
                onClick={() => openQuoteModal("General Enquiry / Quote")}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-900/40 cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Note (Preserved accurately from the live site) */}
        <div className="bg-blue-950/80 rounded-2xl p-5 border border-blue-900/60 text-xs text-slate-400 leading-relaxed text-center my-6">
          <p className="font-semibold text-slate-300 mb-1">Disclaimer:</p>
          <p>
            BuilderCambridge.com. acts solely as a booking agent, referring highly recommended contractors to our clients based on their specific project needs. We carefully select and connect our clients with trusted builders within the Cambridge area; however, we do not directly manage or control the work performed by these contractors. All contractual agreements, timelines, and project details are established directly between the client and the contractor. BuilderCambridge.com. is not liable for any actions, performance, or outcomes of the contractors referred. We encourage clients to conduct their own due diligence and engage in thorough discussions with contractors to ensure alignment on expectations.
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 border-t border-blue-950 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© Copyright {new Date().getFullYear()} All Rights Reserved by BuilderCambridge.com</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/buildercambridge.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/buildercambridge/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              Instagram
            </a>
            <Link href="/privacy-policy" className="hover:text-blue-300 transition-colors">
              Privacy & Cookies
            </Link>
            <Link href="/terms" className="hover:text-blue-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
