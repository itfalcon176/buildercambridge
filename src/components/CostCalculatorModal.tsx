"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Layers,
  Home,
  Check,
  Phone,
  Mail,
  Calendar,
  Send,
  HelpCircle,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface CostCalculatorProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ isModal = false, onClose }) => {
  const [step, setStep] = useState(1);

  // Form State
  const [projectType, setProjectType] = useState<string>("single-extension");
  const [areaSqM, setAreaSqM] = useState<number>(25);
  const [finishQuality, setFinishQuality] = useState<"standard" | "luxury" | "premium">("luxury");
  const [addons, setAddons] = useState<string[]>(["bifolds", "ufh"]);
  
  // Lead info
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPostcode, setLeadPostcode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    {
      id: "single-extension",
      title: "Single Storey Extension",
      baseRate: 2200,
      desc: "Rear, side-return, or wrap-around ground floor extension",
      icon: "🏡",
    },
    {
      id: "double-extension",
      title: "Double Storey Extension",
      baseRate: 1850, // Per sq meter total across 2 floors
      desc: "Two floors of expanded living and bedroom space",
      icon: "🏢",
    },
    {
      id: "loft-dormer",
      title: "Loft Conversion (Dormer)",
      baseRate: 1950,
      desc: "Rear dormer box maximizing full standing headroom",
      icon: "🪜",
    },
    {
      id: "loft-velux",
      title: "Loft Conversion (Velux)",
      baseRate: 1450,
      desc: "Rooflight conversion utilizing existing roof pitch",
      icon: "🪟",
    },
    {
      id: "refurbishment",
      title: "Full Property Refurbishment",
      baseRate: 1200,
      desc: "Complete strip-out, rewire, replaster, and luxury finishes",
      icon: "🔨",
    },
    {
      id: "garage-conversion",
      title: "Garage Conversion",
      baseRate: 1350,
      desc: "Transforming empty garage into habitable room or office",
      icon: "🚗",
    },
  ];

  const finishMultipliers = {
    standard: 1.0,
    luxury: 1.25,
    premium: 1.55,
  };

  const availableAddons = [
    { id: "bifolds", title: "Slimline Aluminium Bifolds / Sliding Doors", cost: 4800 },
    { id: "roof-lantern", title: "Architectural Glass Roof Lantern", cost: 2800 },
    { id: "ufh", title: "Multi-Zone Wet Underfloor Heating", cost: 2200 },
    { id: "ensuite", title: "Luxury Ensuite Wetroom / Bathroom", cost: 6500 },
    { id: "patio", title: "Porcelain Outdoor Patio (25 sq/m)", cost: 4200 },
  ];

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((item) => item !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  // Calculate Estimates
  const selectedProject = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const basePrice = areaSqM * selectedProject.baseRate * finishMultipliers[finishQuality];
  const addonsTotal = addons.reduce((sum, currentId) => {
    const found = availableAddons.find((a) => a.id === currentId);
    return sum + (found ? found.cost : 0);
  }, 0);

  const estimatedMin = Math.round(basePrice + addonsTotal);
  const estimatedMax = Math.round(estimatedMin * 1.18);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`bg-white rounded-3xl ${isModal ? "p-6 sm:p-8" : "p-6 sm:p-12 shadow-2xl border border-slate-200"}`}>
      {/* Progress Steps Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              Cambridge Building Cost Estimator
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#092457] font-sans">
              Instant Project Estimate
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-slate-400">Step {step} of 4</span>
            <div className="w-24 h-2 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 1: Choose Project Type */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#092457]">Select Your Project Type</h4>
            <p className="text-xs text-slate-500">Choose the primary building service you require in Cambridge.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setProjectType(type.id)}
                className={`p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3.5 ${
                  projectType === type.id
                    ? "border-amber-500 bg-amber-50/40 shadow-md"
                    : "border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="text-2xl">{type.icon}</span>
                <div>
                  <div className="font-bold text-sm text-[#092457]">{type.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{type.desc}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="px-7 py-3.5 rounded-xl bg-[#092457] text-white font-bold text-xs flex items-center gap-2 hover:bg-[#06183d] transition-all"
            >
              <span>Continue to Size & Dimensions</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 2: Dimensions & Area */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#092457]">Approximate Floor Area</h4>
            <p className="text-xs text-slate-500">Estimate the internal floor area of your proposed build.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
            <div className="text-4xl font-black text-[#092457] font-sans">
              {areaSqM} <span className="text-lg font-bold text-slate-500">m²</span>
              <span className="text-xs font-normal text-slate-400 ml-2">
                (approx. {Math.round(areaSqM * 10.764)} sq ft)
              </span>
            </div>

            <input
              type="range"
              min={10}
              max={120}
              step={1}
              value={areaSqM}
              onChange={(e) => setAreaSqM(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />

            <div className="flex justify-between text-xs text-slate-400 font-semibold px-1">
              <span>10 m² (Small)</span>
              <span>30 m² (Standard 6x5m)</span>
              <span>60 m² (Large)</span>
              <span>120 m² (Full Ground Floor)</span>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs flex items-center gap-2 hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-7 py-3.5 rounded-xl bg-[#092457] text-white font-bold text-xs flex items-center gap-2 hover:bg-[#06183d] transition-all"
            >
              <span>Continue to Specification</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Finish & Addons */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#092457]">Specification Tier & Extras</h4>
            <p className="text-xs text-slate-500">Select desired finish level and popular architectural add-ons.</p>
          </div>

          {/* Finish Quality Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: "standard", title: "Standard Quality", desc: "Quality plastering, standard fittings, painted finish" },
              { id: "luxury", title: "Luxury Architectural", desc: "Premium joinery, smart heating, high-spec insulation" },
              { id: "premium", title: "Ultra-Bespoke", desc: "Custom architectural design, high-end stone, smart home" },
            ].map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setFinishQuality(tier.id as any)}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                  finishQuality === tier.id
                    ? "border-amber-500 bg-amber-50/40"
                    : "border-slate-100 hover:border-slate-200 bg-white"
                }`}
              >
                <div className="font-bold text-xs text-[#092457]">{tier.title}</div>
                <div className="text-[11px] text-slate-500 mt-1">{tier.desc}</div>
              </button>
            ))}
          </div>

          {/* Add-ons Checklist */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Optional Add-Ons
            </label>
            <div className="space-y-2">
              {availableAddons.map((addon) => {
                const isSelected = addons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-full p-3 rounded-xl border flex items-center justify-between text-xs font-semibold transition-all ${
                      isSelected
                        ? "border-amber-500 bg-amber-50/30 text-[#092457]"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                          isSelected ? "bg-amber-500 border-amber-500 text-slate-950" : "border-slate-300 bg-white"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{addon.title}</span>
                    </div>
                    <span className="text-slate-400 font-normal">+{formatCurrency(addon.cost)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setStep(2)}
              className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs flex items-center gap-2 hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={() => setStep(4)}
              className="px-7 py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-amber-400 transition-all shadow-md"
            >
              <span>View Instant Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 4: Final Summary & Lead Booking */}
      {step === 4 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          {/* Estimated Ballpark Display */}
          <div className="bg-[#092457] text-white p-6 sm:p-8 rounded-3xl text-center space-y-3 relative overflow-hidden">
            <div className="text-3xl sm:text-5xl font-black text-amber-400 font-sans tracking-tight">
              {formatCurrency(estimatedMin)} - {formatCurrency(estimatedMax)}
            </div>

            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Estimated for a {areaSqM}m² {selectedProject.title} with {finishQuality} specification and selected architectural add-ons.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="text-center space-y-1">
                <h4 className="font-bold text-sm text-[#092457]">
                  Lock In Your Fixed-Price Quote & Free Site Survey
                </h4>
                <p className="text-xs text-slate-500">
                  Enter your contact details to receive a detailed breakdown and schedule a free no-obligation consultation with our Cambridge team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="e.g. John Smith"
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="e.g. 07123 456789"
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Cambridge Postcode *</label>
                  <input
                    type="text"
                    required
                    value={leadPostcode}
                    onChange={(e) => setLeadPostcode(e.target.value)}
                    placeholder="e.g. CB2 1TJ"
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs flex items-center gap-2 hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Adjust Specs</span>
                </button>

                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send My Detailed Quote</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-emerald-900">Thank You, {leadName}!</h4>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                We have received your specification details for {leadPostcode}. A Senior Project Manager will review your requirements and contact you within 24 hours.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
