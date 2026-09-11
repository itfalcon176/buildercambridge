"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  RefreshCw,
  User,
  FileText,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [captchaAnswer] = useState("4");
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captcha.trim() !== captchaAnswer) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner Header with Deep Navy Architectural Gradient */}
      <section className="bg-[#092457] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Free No-Obligation Consultation</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Get in Touch & Request a Quote
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Contact Builder Cambridge today for professional architectural guidance, free site surveys, and detailed fixed-price quotations.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section on Crisp Clean White Background */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Direct Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-black text-[#092457] uppercase tracking-widest">
                  DIRECT CONTACT INFORMATION
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight leading-tight uppercase"
                  style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                >
                  We are Ready to Help Build Your Vision
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Call our Cambridge office directly or submit the quotation form. We typically respond within a few hours on business days.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3">
                {/* 1. Call Our Office */}
                <a
                  href="tel:+441223782433"
                  className="p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_6px_25px_rgb(0,0,0,0.06)] hover:border-blue-400/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#092457] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold">Call Our Office</div>
                    <div className="text-sm sm:text-base font-extrabold text-[#092457] group-hover:text-blue-700 transition-colors">
                      +44 1223 782433
                    </div>
                  </div>
                </a>

                {/* 2. Direct WhatsApp Chat */}
                <a
                  href="https://api.whatsapp.com/send?phone=+447542012258&text=Hi%20Builder%20Cambridge,%20I%20would%20like%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-50/50 hover:bg-emerald-100/60 border border-emerald-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_6px_25px_rgb(0,0,0,0.06)] transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-800 font-semibold">Direct WhatsApp Chat</div>
                    <div className="text-sm sm:text-base font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      +44 7542 012258
                    </div>
                  </div>
                </a>

                {/* 3. Email Us */}
                <a
                  href="mailto:info@buildercambridge.com"
                  className="p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_6px_25px_rgb(0,0,0,0.06)] hover:border-blue-400/40 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#092457] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold">Email Us</div>
                    <div className="text-sm sm:text-base font-extrabold text-[#092457] group-hover:text-blue-700 transition-colors">
                      info@buildercambridge.com
                    </div>
                  </div>
                </a>

                {/* 4. Working Hours & Address */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#092457] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] text-slate-500 font-semibold">Working Hours & Location</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      Monday – Saturday: 08:00 – 18:00
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium">
                      33a Priory Rd, Cambridge CB5 8HT
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Promise To You Card */}
              <div className="bg-[#092457] text-white p-6 rounded-3xl space-y-3.5 shadow-xl">
                <div className="text-xs font-black text-amber-400 uppercase tracking-wider">
                  OUR PROMISE TO YOU
                </div>
                <div className="space-y-2.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fixed-price quote with zero hidden extras</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>10-Year Insurance Backed Structural Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full Building Regulations & Council approvals</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Ultra-Modern White Form Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-[0_10px_40px_rgb(0,0,0,0.06)] relative">
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3
                        className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight uppercase"
                        style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                      >
                        Request a Free Site Survey
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill out the details below and we will contact you to arrange a site visit or provide a quote.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 1. Your Name */}
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Eleanor Miller"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/40"
                          />
                        </div>
                      </div>

                      {/* 2. Your Email */}
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Your Email *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. eleanor@example.com"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/40"
                          />
                        </div>
                      </div>

                      {/* 3. Subject */}
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Subject *
                        </label>
                        <div className="relative">
                          <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="e.g. House Extension or Loft Conversion"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/40"
                          />
                        </div>
                      </div>

                      {/* 4. Contact Number */}
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Contact Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 01223 782433 or 07123 456789"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/40"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 5. Your Message */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Your Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please describe your property type, timeline, architectural drawings status, or any specific requirements..."
                          className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/40 resize-y min-h-[100px]"
                        />
                      </div>
                    </div>

                    {/* 6. Security Captcha Verification */}
                    <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/90 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-blue-600" />
                          <span>What is 2 + 2? *</span>
                        </label>
                        <span className="text-[11px] text-slate-500 font-medium">
                          Spam protection
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          required
                          value={formData.captcha}
                          onChange={(e) => {
                            setFormData({ ...formData, captcha: e.target.value });
                            if (captchaError) setCaptchaError(false);
                          }}
                          placeholder="Type your answer"
                          className="w-48 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-600 bg-white"
                        />
                        {formData.captcha.trim() === captchaAnswer && (
                          <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Verified</span>
                          </span>
                        )}
                      </div>
                      {captchaError && (
                        <p className="text-xs text-rose-500 font-semibold">
                          Incorrect answer. Please type 4 to continue.
                        </p>
                      )}
                    </div>

                    {/* 7. Send / Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-95 transition-all cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-slate-950" />
                          <span>SUBMIT MY QUOTE REQUEST</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-[#092457]">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      We have received your enquiry regarding &ldquo;{formData.subject}&rdquo;. One of our senior Cambridge building managers will review your details and be in touch within 24 hours.
                    </p>
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            subject: "",
                            phone: "",
                            message: "",
                            captcha: "",
                          });
                        }}
                        className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Send Another Message
                      </button>
                      <a
                        href="tel:+441223782433"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#092457] hover:text-amber-600 px-4 py-2.5"
                      >
                        <Phone className="w-4 h-4 text-amber-500" />
                        <span>Call +44 1223 782433</span>
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
