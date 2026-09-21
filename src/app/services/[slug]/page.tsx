import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceQuoteTrigger } from "@/components/ServiceQuoteTrigger";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Phone,
  HelpCircle,
  Award,
  ChevronRight,
  Building2,
  Layers,
  FileCheck2,
  Check,
  Mail,
  MessageSquareText,
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
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumb Navigation */}
      <div className="bg-slate-100/70 border-b border-slate-200/80 py-3 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#092457] transition-colors font-medium">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-[#092457] transition-colors font-medium">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#092457] font-bold truncate">{service.title}</span>
        </div>
      </div>

      {/* 2. Modern Architectural Hero Banner */}
      <section className="bg-[#092457] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{service.category} Building Specialist • Cambridge</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans leading-tight"
              style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
            >
              {service.contentHeading || service.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {service.shortDesc}
            </p>

            {/* Quick Specs Pill Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-slate-200">
              <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Typical Duration: {service.typicalTimeline}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>10-Year Structural Guarantee</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Fixed-Price Itemized Quotation</span>
              </div>
            </div>

            {/* Hero Direct CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <ServiceQuoteTrigger serviceTitle={service.title} label="REQUEST A FREE SITE SURVEY" />
              <a
                href="tel:+441223782433"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>01223 782433</span>
              </a>
              <a
                href="https://wa.me/441223782433"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content & Sidebar Grid */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Comprehensive Editorial Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Featured Showcase Photography */}
              <div className="space-y-4">
                <div className="relative h-[340px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 group">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="px-3 py-1 rounded-lg bg-slate-950/70 backdrop-blur-md font-medium border border-white/10">
                      Bespoke Master Construction • Cambridge & South Cambridgeshire
                    </span>
                    <span className="hidden sm:inline-block px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold">
                      100% Council Compliant
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Heading & Content Exactly Matching Screenshot */}
              <div className="space-y-4 pt-2">
                <h2
                  className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans"
                  style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                >
                  {service.contentHeading || service.title}
                </h2>
                <div className="w-16 h-1 bg-amber-500 rounded-full" />

                {service.fullDescription && service.fullDescription.length > 0 && (
                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    {service.fullDescription.map((paragraph, i) => (
                      <p key={i} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* If "Is My Roof Suitable?" exists, render it directly after the intro paragraphs (as in screenshot) */}
              {service.customSpecificationNote && service.customSpecificationNote.heading === "Is My Roof Suitable?" && (
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="space-y-2">
                    <h3
                      className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      {service.customSpecificationNote.heading}
                    </h3>
                    <div className="w-12 h-1 bg-amber-500 rounded-full" />
                  </div>

                  <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {service.customSpecificationNote.text}
                    </p>
                    {service.customSpecificationNote.secondaryText && (
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium pt-3 border-t border-slate-200/80">
                        {service.customSpecificationNote.secondaryText}
                      </p>
                    )}
                    {service.customSpecificationNote.points && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200">
                        {service.customSpecificationNote.points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-700 font-semibold">{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* "What does BuilderCambridge.com cover?" / "We cover" Section Exactly Matching Screenshot */}
              {service.weCoverItems && service.weCoverItems.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-slate-100">
                  <div className="space-y-2">
                    <h3
                      className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      {service.weCoverTitle || "We cover"}
                    </h3>
                    <div className="w-12 h-1 bg-amber-500 rounded-full" />
                    {service.weCoverIntro && (
                      <p className="text-slate-700 text-sm sm:text-base mt-2">
                        {service.weCoverIntro}
                      </p>
                    )}
                  </div>

                  {/* If exact bullet list from screenshot is provided */}
                  {service.weCoverBullets && service.weCoverBullets.length > 0 && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                      <ul className="space-y-2.5">
                        {service.weCoverBullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-slate-800 font-bold text-sm sm:text-base">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className={`grid grid-cols-1 ${service.weCoverItems.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-4`}>
                    {service.weCoverItems.map((item, index) => (
                      <div
                        key={item.name}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="w-6 h-6 rounded-lg bg-[#092457] text-white flex items-center justify-center font-bold text-xs">
                              0{index + 1}
                            </span>
                            {item.badge && (
                              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#092457] text-[10px] font-bold">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h4 className="text-base font-bold text-[#092457] font-sans">
                            {item.name}
                          </h4>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {item.features && item.features.length > 0 && (
                          <div className="pt-2 border-t border-slate-200/60 space-y-1">
                            {item.features.map((feat, fi) => (
                              <div key={fi} className="flex items-center gap-2 text-[11px] text-slate-600">
                                <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {service.weCoverOutro && (
                    <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-xs sm:text-sm text-[#092457] font-medium flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>{service.weCoverOutro}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Secondary editorial description paragraphs (matching screenshot follow-up text) */}
              {service.secondaryDescription && service.secondaryDescription.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-100 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {service.secondaryDescription.map((paragraph, i) => (
                    <p key={i} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Dual Sections (e.g. Commercial Construction & Facilities Management Matching Screenshot) */}
              {service.dualSections && service.dualSections.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                  {service.dualSections.map((sec, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="space-y-2">
                        <h3
                          className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans"
                          style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                        >
                          {sec.title}
                        </h3>
                        <div className="w-12 h-1 bg-amber-500 rounded-full" />
                      </div>

                      <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-3">
                        <ul className="space-y-3">
                          {sec.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3 text-slate-800 text-xs sm:text-sm font-bold">
                              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Competitive Advantage Box (when not already rendered inside customSpecificationNote) */}
              {service.competitiveAdvantage && service.customSpecificationNote?.heading !== "Is My Roof Suitable?" && (
                <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#092457] font-sans">
                      {service.competitiveAdvantage.heading}
                    </h3>
                    <div className="w-12 h-1 bg-amber-500 rounded-full" />
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium pt-1">
                      {service.competitiveAdvantage.text}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
                    {service.competitiveAdvantage.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-semibold">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Specification Note for Services other than Roof Suitability */}
              {service.customSpecificationNote && service.customSpecificationNote.heading !== "Is My Roof Suitable?" && (
                <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#092457] font-sans">
                      {service.customSpecificationNote.heading}
                    </h3>
                    <div className="w-12 h-1 bg-amber-500 rounded-full" />
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                      {service.customSpecificationNote.text}
                    </p>
                  </div>

                  {service.customSpecificationNote.points && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                      {service.customSpecificationNote.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#092457] shrink-0 mt-2" />
                          <span className="text-xs text-slate-700 font-semibold">{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Custom Editorial Sections Matching Exact Screenshot Structure */}
              {service.customSections && service.customSections.length > 0 && (
                <div className="space-y-8 pt-6 border-t border-slate-100">
                  {service.customSections.map((sec, idx) => (
                    sec.isCallout ? (
                      <div
                        key={idx}
                        className="p-7 sm:p-8 rounded-3xl bg-[#092457] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 my-6"
                      >
                        <div className="space-y-2 text-center sm:text-left">
                          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 inline-block">
                            Direct Contact &amp; Fast Response
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black font-sans">
                            {sec.heading}
                          </h3>
                          <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed">
                            {sec.text}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                          <ServiceQuoteTrigger
                            serviceTitle={service.title}
                            variant="primary"
                            label="ARRANGE QUOTATION"
                          />
                          <a
                            href={`tel:${(sec.calloutPhone || "01223 782433").replace(/\s+/g, "")}`}
                            className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all"
                          >
                            <Phone className="w-4 h-4 text-amber-400" />
                            <span>{sec.calloutPhone || "01223 782 433"}</span>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div key={idx} className="space-y-3">
                      {sec.heading && (
                        <div className="space-y-2">
                          <h3
                            className="text-xl sm:text-2xl font-black text-[#092457] tracking-tight font-sans"
                            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                          >
                            {sec.heading}
                          </h3>
                          <div className="w-12 h-1 bg-amber-500 rounded-full" />
                        </div>
                      )}

                      {sec.intro && (
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                          {sec.intro}
                        </p>
                      )}

                      {sec.text && (
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                          {sec.text}
                        </p>
                      )}

                      {sec.paragraphs && sec.paragraphs.length > 0 && (
                        <div className="space-y-3">
                          {sec.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      {sec.bullets && sec.bullets.length > 0 && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-2.5">
                          <ul className="space-y-2.5">
                            {sec.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                                <span className="leading-snug">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {sec.secondaryText && (
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
                          {sec.secondaryText}
                        </p>
                      )}
                    </div>
                    )
                  ))}
                </div>
              )}

              {/* Why Choose Us Section Exactly Matching Screenshot */}
              {(((service.whyChooseUs && service.whyChooseUs.length > 0)) || (service.whyChooseUsCards && service.whyChooseUsCards.length > 0)) && (
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="space-y-2">
                    <h3
                      className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      {service.whyChooseUsTitle || "WHY CHOOSE US"}
                    </h3>
                    <div className="w-12 h-1 bg-amber-500 rounded-full" />
                    {service.whyChooseUsIntro && (
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
                        {service.whyChooseUsIntro}
                      </p>
                    )}
                  </div>

                  {/* If structured cards exist (e.g. Flexibility, Experience, Peace of mind, Quality guaranteed) */}
                  {service.whyChooseUsCards && service.whyChooseUsCards.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {service.whyChooseUsCards.map((card, idx) => (
                        <div
                          key={idx}
                          className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all space-y-2 group"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-bold text-[#092457] font-sans group-hover:text-blue-700 transition-colors">
                              {card.title}
                            </h4>
                            {card.badge && (
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
                                {card.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {service.whyChooseUs && service.whyChooseUs.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {service.whyChooseUs.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all flex items-center gap-3.5 group"
                        >
                          <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-slate-800 font-sans group-hover:text-[#092457] transition-colors">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 7. Key Features Checklist */}
              {service.features && service.features.length > 0 && (
                <div className="bg-slate-50/70 p-7 rounded-3xl border border-slate-200/80 space-y-4">
                  <h3 className="text-lg font-bold text-[#092457] font-sans">
                    Included Within Our {service.title} Specifications:
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
              )}

              {/* 8. Step by Step Process Program */}
              {service.processSteps && service.processSteps.length > 0 && (
                <div className="space-y-6 pt-2">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Structured Build Roadmap
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans mt-1"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      Our 5-Stage Delivery Program
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      How we take your project smoothly from preliminary site survey to final handover.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {service.processSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#092457] text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-[#092457] font-sans">{step.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 9. Building Regulations Notice & Direct Quote Callout (Exact Copy from Screenshot) */}
              {service.regulationsNotice && (
                <div className="p-7 sm:p-8 rounded-3xl bg-[#092457] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 inline-block">
                      Building Regulations & Feasibility
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-sans">
                      {service.regulationsNotice.heading}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed">
                      {service.regulationsNotice.text}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                    <ServiceQuoteTrigger
                      serviceTitle={service.title}
                      variant="primary"
                      label="ARRANGE QUOTATION"
                    />
                    <a
                      href={`tel:${service.regulationsNotice.phone.replace(/\s+/g, "")}`}
                      className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>{service.regulationsNotice.phone}</span>
                    </a>
                  </div>
                </div>
              )}

              {/* 10. FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-6 pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Clear Guidance
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-black text-[#092457] tracking-tight font-sans mt-1"
                      style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                    >
                      Frequently Asked Questions
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {service.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
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

            {/* Right Column: Sticky Consultation Sidebar & Quick Links */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Interactive Sticky Sidebar Card */}
              <ServiceQuoteTrigger serviceTitle={service.title} variant="sidebar" />

              {/* Cambridge Area Trust Card */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-4">
                <h4 className="font-bold text-sm text-[#092457] uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Local Cambridge Coverage</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our dedicated site teams operate across all Cambridge districts and South Cambridgeshire villages:
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-slate-700">
                  {["CB1 City Centre", "CB2 Trumpington", "CB3 Newnham", "CB4 Chesterton", "CB5 Mill Road", "Girton", "Histon", "Grantchester", "Great Shelford"].map((area) => (
                    <span key={area} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other Specialized Services */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-4">
                <h4 className="font-bold text-sm text-[#092457] uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>Other Building Disciplines</span>
                </h4>
                <div className="space-y-1.5">
                  {servicesData
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 6)
                    .map((item) => (
                      <Link
                        key={item.id}
                        href={`/services/${item.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#092457] hover:bg-white hover:shadow-xs transition-all group"
                      >
                        <span className="truncate">{item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
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
