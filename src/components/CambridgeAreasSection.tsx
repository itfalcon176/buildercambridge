"use client";

import React from "react";
import Link from "next/link";
import { MapPin, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export const CambridgeAreasSection: React.FC = () => {
  const areas = [
    { code: "CB1", name: "Cambridge City Centre, Mill Road, Petersfield, Romsey Town" },
    { code: "CB2", name: "Trumpington, Hills Road, Newnham, Queen Edith's, Addenbrooke's" },
    { code: "CB3", name: "Newnham, Castle, Girton, Madingley, Barton" },
    { code: "CB4", name: "Chesterton, Arbury, King's Hedges, Science Park, Milton" },
    { code: "CB5", name: "Abbey, Barnwell, East Cambridge, Fen Ditton, Horningsea" },
    { code: "CB21-25", name: "Great Shelford, Stapleford, Fulbourn, Sawston, Histon, Ely, Newmarket" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#092457] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Local Cambridge Coverage</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-black text-[#092457] tracking-tight font-sans"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Serving All Postcodes Across Cambridge & South Cambridgeshire
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We know Cambridge architecture inside and out. From Victorian solid brick terraces with party walls along Mill Road to 1930s suburban semi-detached homes in Chesterton and luxury contemporary plots in Trumpington.
            </p>

            <div className="space-y-3 pt-2">
              {areas.map((area) => (
                <div
                  key={area.code}
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-colors flex items-start gap-3.5"
                >
                  <div className="px-2.5 py-1 rounded-lg bg-[#092457] text-amber-400 font-bold text-xs font-mono shrink-0">
                    {area.code}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">
                    {area.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Coverage Map Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#092457] text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Local Council Expertise
                </span>
                <h3 className="text-2xl font-black text-white font-sans">
                  Cambridge Planning & Building Control Specialists
                </h3>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Navigating Cambridge City Council and South Cambridgeshire District Council planning regulations can be complex, especially in Conservation Areas. We take care of all planning drawings, conservation officer submissions, and Building Control inspections for complete peace of mind.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-blue-950/80 p-3 rounded-xl border border-blue-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Initial Site Visit</span>
                </div>
                <div className="bg-blue-950/80 p-3 rounded-xl border border-blue-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Conservation Approved</span>
                </div>
                <div className="bg-blue-950/80 p-3 rounded-xl border border-blue-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Party Wall Support</span>
                </div>
                <div className="bg-blue-950/80 p-3 rounded-xl border border-blue-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>10-Yr Guarantee</span>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-900">
                <Link
                  href="/contact"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <span>Check Availability in Your Postcode</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
