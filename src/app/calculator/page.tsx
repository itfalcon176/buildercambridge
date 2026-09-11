import React from "react";
import { Metadata } from "next";
import { CostCalculator } from "@/components/CostCalculatorModal";
import { Sparkles, HelpCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cambridge Building Cost Calculator - Instant Extension & Loft Estimator",
  description:
    "Calculate the approximate cost of house extensions, loft conversions, and home renovations in Cambridge with our instant, interactive building cost estimator.",
};

export default function CalculatorPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-[#092457] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>2025/2026 Cambridge Pricing Guide</span>
          </div>
          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            Cambridge Building Cost Calculator
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get an instant ballpark estimate for your house extension, loft conversion, or renovation based on real Cambridge construction metrics.
          </p>
        </div>
      </section>

      {/* Main Estimator Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator isModal={false} />

          {/* Pricing Factors Explainer */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#092457]">
              Understanding What Affects Cambridge Building Costs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600">
              <div className="space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Ground Conditions & Cambridge Clay</span>
                </div>
                <p>
                  Foundations in Cambridge often encounter shrinkable clay, sometimes requiring deeper trench fills (1.5m) or engineered raft foundations.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Structural Steel & Open-Plan Openings</span>
                </div>
                <p>
                  Knocking through internal load-bearing walls requires certified structural engineer calculations and RSJ steel beam installations.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Conservation Area Guidelines</span>
                </div>
                <p>
                  Properties within Cambridge conservation zones may require traditional timber sash windows, reclaimed brickwork, or Welsh slate roofs.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Glazing & Architectural Specification</span>
                </div>
                <p>
                  Large multi-pane aluminium bifolding systems and thermally-broken glass lanterns will affect final material budgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
