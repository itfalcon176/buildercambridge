"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hi Builder Cambridge, I would like to enquire about a project in Cambridge.");

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=+447542012258&text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="fixed bottom-24 right-4 sm:right-8 z-50 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#092457] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Builder Cambridge</div>
                  <div className="text-[11px] text-emerald-300 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>Online | Typically replies in minutes</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-50 space-y-3">
              <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 text-xs text-slate-800 leading-relaxed max-w-[85%]">
                Hello! 👋 Looking to extend, convert your loft, or renovate your property in Cambridge? Send us a quick WhatsApp message for instant advice or a free ballpark estimate!
              </div>

              <div className="pt-2">
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your project enquiry..."
                  className="w-full p-3 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:border-emerald-500 bg-white"
                />
              </div>

              <button
                onClick={handleSend}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp (+44 7542 012258)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <div className="fixed bottom-20 md:bottom-8 right-4 sm:right-8 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Open WhatsApp Chat"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-300 rounded-full border-2 border-white animate-pulse" />
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>
      </div>
    </>
  );
};
