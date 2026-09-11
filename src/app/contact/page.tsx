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
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "House Extensions",
    budget: "£40,000 - £75,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#092457] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Free No-Obligation Consultation</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Get in Touch & Request a Quote
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Contact Builder Cambridge today for professional architectural feasibility advice, site surveys, and detailed fixed-price quotations.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Channels & Trust Stats */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                  Direct Contact Information
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans"
                  style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                >
                  We are Ready to Help Build Your Vision
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Call our Cambridge office directly or submit the quotation form. We typically respond within a few hours on business days.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3">
                <a
                  href="tel:+441223782433"
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#092457] text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Call Our Office</div>
                    <div className="text-base font-bold text-[#092457] group-hover:text-amber-600 transition-colors">
                      +44 1223 782433
                    </div>
                  </div>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=+447542012258&text=Hi%20Builder%20Cambridge,%20I%20would%20like%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-50/60 hover:bg-emerald-50 border border-emerald-200/80 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-700 font-semibold">Direct WhatsApp Chat</div>
                    <div className="text-base font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      +44 7542 012258
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@buildercambridge.com"
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#092457] text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Email Us</div>
                    <div className="text-sm font-bold text-[#092457] group-hover:text-amber-600 transition-colors">
                      info@buildercambridge.com
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#092457] text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">Working Hours</div>
                    <div className="text-xs font-bold text-slate-800">
                      Monday – Saturday: 08:00 – 18:00
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-[#092457] text-white p-6 rounded-3xl space-y-3">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Our Promise To You
                </div>
                <div className="space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fixed-price quote with zero hidden extras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>10-Year Insurance Backed Structural Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full Building Regulations & Council approvals</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Capture Quotation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3
                        className="text-2xl font-black text-[#092457] tracking-tight font-sans"
                        style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                      >
                        Request a Free Site Survey
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill out the details below and we will contact you to arrange a site visit or provide a ballpark estimate.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Miller"
                          className="w-full p-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. eleanor@example.com"
                          className="w-full p-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07123 456789"
                          className="w-full p-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Cambridge Postcode *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.postcode}
                          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                          placeholder="e.g. CB2 1TJ (Trumpington)"
                          className="w-full p-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full p-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500 bg-white"
                        >
                          <option>House Extensions</option>
                          <option>Loft Conversions</option>
                          <option>Interior Renovation / Bathrooms / Kitchens</option>
                          <option>Complete Refurbishment</option>
                          <option>New Builds</option>
                          <option>Design and Build</option>
                          <option>Roofing</option>
                          <option>Commercial Fit-out</option>
                          <option>Groundworks / Drainage / Driveways</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Approximate Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full p-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500 bg-white"
                        >
                          <option>£15,000 - £35,000</option>
                          <option>£35,000 - £65,000</option>
                          <option>£65,000 - £120,000</option>
                          <option>£120,000 - £250,000+</option>
                          <option>Undecided / Need Guidance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Tell Us About Your Project & Ideas
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your property type, timeline, architectural drawings status, or any specific requirements..."
                        className="w-full p-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-95 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT MY QUOTE REQUEST</span>
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
                      We have received your enquiry for {formData.service} in {formData.postcode}. One of our senior Cambridge building managers will review your details and be in touch within 24 hours.
                    </p>
                    <div className="pt-4">
                      <a
                        href="tel:+441223782433"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#092457] hover:text-amber-600"
                      >
                        <Phone className="w-4 h-4 text-amber-500" />
                        <span>Need immediate assistance? Call +44 1223 782433</span>
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
