"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  RefreshCw,
  User,
  FileText,
  MessageSquare,
  ArrowRight,
  Check,
  Shield,
  Award,
  RotateCw,
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
  const [captchaProblem, setCaptchaProblem] = useState({ num1: 2, num2: 3, answer: "5" });
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateNewCaptcha = () => {
    const n1 = Math.floor(Math.random() * 7) + 2; // 2 - 8
    const n2 = Math.floor(Math.random() * 7) + 1; // 1 - 7
    setCaptchaProblem({
      num1: n1,
      num2: n2,
      answer: String(n1 + n2),
    });
    setFormData((prev) => ({ ...prev, captcha: "" }));
    setCaptchaError(false);
  };

  useEffect(() => {
    generateNewCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captcha.trim() !== captchaProblem.answer) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      generateNewCaptcha();
    }, 500);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 sm:py-14 lg:py-16 relative overflow-hidden flex items-center justify-center">
      {/* Subtle Ambient Blueprint Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SINGLE UNIFIED BOX CONTAINER */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] lg:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(9,36,87,0.08)] border border-slate-200/90 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[680px] items-stretch">
            
            {/* ========================================================================= */}
            {/* LEFT COLUMN: Deep Cambridge Navy Consultation Panel (5 Cols) */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5 bg-[#092457] text-white p-7 sm:p-9 lg:p-11 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle Ambient Layer */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

              {/* Header Info */}
              <div className="relative z-10 space-y-3.5">
                <h1
                  className="text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight text-white uppercase leading-[1.15]"
                  style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                >
                  We Are Ready To Help Build Your Vision
                </h1>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                  Call our Cambridge office directly or submit the quotation form. We typically respond within a few hours on business days.
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="relative z-10 space-y-3 my-6 sm:my-8 flex-1 flex flex-col justify-center">
                
                {/* 1. Phone Card */}
                <a
                  href="tel:+441223782433"
                  className="group p-3.5 sm:p-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-blue-400/40 backdrop-blur-md transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white text-[#092457] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5 text-[#092457]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-blue-200/80 font-bold uppercase tracking-wider">
                        Call Our Office
                      </div>
                      <div className="text-sm sm:text-base font-black text-white group-hover:text-blue-200 transition-colors">
                        +44 1223 782433
                      </div>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>

                {/* 2. WhatsApp Card */}
                <a
                  href="https://api.whatsapp.com/send?phone=+447542012258&text=Hi%20Builder%20Cambridge,%20I%20would%20like%20to%20request%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3.5 sm:p-4 rounded-2xl bg-emerald-500/[0.15] hover:bg-emerald-500/[0.22] border border-emerald-400/30 hover:border-emerald-400/60 backdrop-blur-md transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span>Direct WhatsApp Chat</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-sm sm:text-base font-black text-white">
                        +44 7542 012258
                      </div>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 text-emerald-300 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>

                {/* 3. Email Card */}
                <a
                  href="mailto:info@buildercambridge.com"
                  className="group p-3.5 sm:p-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-blue-400/40 backdrop-blur-md transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-200 border border-blue-400/30 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-blue-200/80 font-bold uppercase tracking-wider">
                        Email Enquiries
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-200 transition-colors">
                        info@buildercambridge.com
                      </div>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>

                {/* 4. Cambridge Location & Hours */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-[10px] text-blue-200/80 font-bold uppercase tracking-wider">
                      Working Hours & Location
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                      Monday – Saturday: 08:00 – 18:00
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      33a Priory Rd, Cambridge CB5 8HT
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Guarantees */}
              <div className="relative z-10 pt-4 border-t border-white/10 space-y-2">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-blue-200">
                  OUR PROMISE TO YOU
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Fixed-Price Quote</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>10-Yr Guarantee</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Council Approved</span>
                  </span>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: Studio Form Panel (7 Cols) */}
            {/* ========================================================================= */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-9 lg:p-11 flex flex-col justify-between">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between space-y-4 sm:space-y-5">
                  
                  {/* Form Header */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h2
                        className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight uppercase"
                        style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                      >
                        REQUEST A FREE SITE SURVEY
                      </h2>
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-extrabold text-[#092457] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/70">
                        <Award className="w-3.5 h-3.5 text-blue-600" />
                        <span>Fixed Price</span>
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the details below and we will contact you to arrange a site visit or provide a quote.
                    </p>
                  </div>

                  {/* 2x2 Form Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* 1. Your Name */}
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block mb-1">
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
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 hover:bg-white hover:border-slate-300"
                        />
                      </div>
                    </div>

                    {/* 2. Your Email */}
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block mb-1">
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
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 hover:bg-white hover:border-slate-300"
                        />
                      </div>
                    </div>

                    {/* 3. Subject */}
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block mb-1">
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
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 hover:bg-white hover:border-slate-300"
                        />
                      </div>
                    </div>

                    {/* 4. Contact Number */}
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block mb-1">
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
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 hover:bg-white hover:border-slate-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 5. Your Message */}
                  <div className="flex-1 flex flex-col">
                    <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block mb-1">
                      Your Message *
                    </label>
                    <div className="relative flex-1">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your property type, timeline, architectural drawings status, or any specific requirements..."
                        className="w-full h-full min-h-[100px] pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 hover:bg-white hover:border-slate-300 resize-y"
                      />
                    </div>
                  </div>

                  {/* 6. Dynamic Security Verification (Math Captcha) */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="tracking-wide">
                            WHAT IS {captchaProblem.num1} + {captchaProblem.num2}? *
                          </span>
                          <button
                            type="button"
                            onClick={generateNewCaptcha}
                            title="Generate a new question"
                            className="text-slate-400 hover:text-blue-600 p-0.5 rounded transition-colors cursor-pointer"
                          >
                            <RotateCw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="block text-[10px] font-medium text-slate-400">Anti-spam dynamic math verification</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        required
                        value={formData.captcha}
                        onChange={(e) => {
                          setFormData({ ...formData, captcha: e.target.value });
                          if (captchaError) setCaptchaError(false);
                        }}
                        placeholder="Type answer"
                        className="w-32 px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono font-bold focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                      />
                      {formData.captcha.trim() === captchaProblem.answer && (
                        <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-extrabold px-2 py-1 rounded-lg bg-emerald-50 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>
                  </div>
                  {captchaError && (
                    <p className="text-xs text-rose-500 font-bold -mt-2">
                      Incorrect answer. Please solve {captchaProblem.num1} + {captchaProblem.num2} to continue.
                    </p>
                  )}

                  {/* 7. Deep Navy Action Submit Button (Zero Yellow) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#092457] hover:bg-[#06183d] text-white font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-xl shadow-blue-950/20 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        <span>SUBMITTING QUOTE REQUEST...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-blue-300" />
                        <span>SUBMIT MY QUOTE REQUEST</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>

                </form>
              ) : (
                <div className="py-12 my-auto text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#092457]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have received your enquiry regarding &ldquo;{formData.subject}&rdquo;. One of our senior Cambridge building managers will review your details and contact you within 2 hours.
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
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#092457] hover:text-blue-600 px-4 py-2.5"
                    >
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>Call 01223 782433</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}


