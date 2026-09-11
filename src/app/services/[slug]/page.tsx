import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData, ServiceItem } from "@/data/servicesData";
import {
  CheckCircle2,
  Clock,
  Banknote,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Phone,
  HelpCircle,
  Award,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found - Builder Cambridge",
    };
  }

  return {
    title: `${service.title} | Builder Cambridge`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Builder Cambridge`,
      description: service.shortDesc,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Service Hero Banner */}
      <section className="bg-[#092457] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{service.category} Building Specialist</span>
            </div>
            <h1
              className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              {service.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {service.shortDesc}
            </p>

            {/* Quick Specs Pill Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-semibold">
              <div className="bg-blue-950/80 px-4 py-2 rounded-xl border border-blue-800/60 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Typical Duration: {service.typicalTimeline}</span>
              </div>
              <div className="bg-blue-950/80 px-4 py-2 rounded-xl border border-blue-800/60 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>10-Year Guarantee Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Featured Showcase Image */}
              <div className="relative h-[340px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Service Description */}
              <div className="space-y-4">
                <h2
                  className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                >
                  Expert {service.title} in Cambridge
                </h2>
                {service.fullDescription.map((p, i) => (
                  <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Features Bullet List */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-[#092457]">
                  What Our {service.title} Service Includes:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step by Step Process */}
              <div className="space-y-6">
                <h3
                  className="text-2xl font-black text-[#092457] tracking-tight font-sans"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                >
                  Our Proven Step-by-Step Approach
                </h3>
                <div className="space-y-4">
                  {service.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-400 transition-all flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#092457] text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#092457]">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs for this Service */}
              {service.faqs.length > 0 && (
                <div className="space-y-6">
                  <h3
                    className="text-2xl font-black text-[#092457] tracking-tight font-sans"
                    style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                      >
                        <h4 className="font-bold text-sm text-[#092457] flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Sticky Quote Card & Other Services */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Inquiry Sticky Card */}
              <div className="bg-[#092457] text-white p-7 rounded-3xl shadow-2xl border border-blue-900 space-y-6 sticky top-28">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Free Consultation
                  </span>
                  <h3 className="text-xl font-black text-white font-sans mt-1">
                    Get an Exact Quote for {service.title.replace(" Cambridge", "")}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Book a site survey with our master builders across Cambridge & South Cambridgeshire.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                  >
                    <span>REQUEST FREE SITE SURVEY</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+441223782433"
                    className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call: +44 1223 782433</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-blue-900/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Fixed-price itemized proposal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>10-Year Structural Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Full Building Control compliance</span>
                  </div>
                </div>
              </div>

              {/* Other Related Services */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                <h4 className="font-bold text-sm text-[#092457] uppercase tracking-wider">
                  Other Building Services
                </h4>
                <div className="space-y-1.5">
                  {servicesData
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 6)
                    .map((item) => (
                      <Link
                        key={item.id}
                        href={`/services/${item.slug}`}
                        className="block p-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#092457] hover:bg-white transition-colors"
                      >
                        → {item.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
