"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  User,
  Mail,
  FileText,
  Phone,
  MessageSquare,
  RefreshCw,
  RotateCw,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export const QuoteModal: React.FC = () => {
  const { isOpen, defaultSubject, closeQuoteModal } = useQuoteModal();

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
    if (isOpen) {
      generateNewCaptcha();
    }
  }, [isOpen]);

  useEffect(() => {
    if (defaultSubject) {
      setFormData((prev) => ({ ...prev, subject: defaultSubject }));
    }
  }, [defaultSubject]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeQuoteModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

  const handleClose = () => {
    closeQuoteModal();
    // Reset submission state after close animation
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#06152d]/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 my-auto"
          >
            {/* Top Navy Accent Bar with Close Button */}
            <div className="bg-[#092457] text-white px-6 py-5 sm:px-8 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              
              <div className="space-y-1 relative z-10">
                <h2
                  className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase"
                  style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                >
                  Request a Free Site Survey
                </h2>
              </div>

              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer relative z-10 shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[calc(88vh-90px)] overflow-y-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* 1. Your Name */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
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
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* 2. Your Email */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
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
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* 3. Subject */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Subject *
                      </label>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="e.g. Rear Extension or Loft Conversion"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* 4. Contact Number */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
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
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 5. Your Message */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your property, approximate dimensions, timeline, or requirements..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50/50 resize-y min-h-[90px]"
                      />
                    </div>
                  </div>

                  {/* 6. Dynamic Math Captcha Security Verification */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div>
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span className="tracking-wide">What is {captchaProblem.num1} + {captchaProblem.num2}? *</span>
                        <button
                          type="button"
                          onClick={generateNewCaptcha}
                          title="Generate a new question"
                          className="text-slate-400 hover:text-blue-600 p-0.5 rounded transition-colors cursor-pointer"
                        >
                          <RotateCw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Security spam verification
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
                        placeholder="Answer"
                        className="w-24 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-600 bg-white"
                      />
                      {formData.captcha.trim() === captchaProblem.answer && (
                        <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>OK</span>
                        </span>
                      )}
                    </div>
                  </div>
                  {captchaError && (
                    <p className="text-xs text-rose-500 font-semibold">
                      Please enter {captchaProblem.answer} to continue.
                    </p>
                  )}

                  {/* 7. Deep Navy Submit Button (Zero Yellow) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#092457] hover:bg-[#06183d] text-white font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-blue-950/20 active:scale-95 transition-all cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-blue-300" />
                        <span>SUBMIT MY QUOTE REQUEST</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-[#092457]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have received your enquiry regarding &ldquo;{formData.subject}&rdquo;. One of our senior Cambridge building managers will review your details and contact you shortly.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={handleClose}
                      className="px-8 py-3 rounded-xl bg-[#092457] hover:bg-blue-900 text-xs font-bold text-white uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
