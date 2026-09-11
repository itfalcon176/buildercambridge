"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Star,
  Home,
  ShieldCheck,
  Building2,
  Hammer,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { useQuoteModal } from "@/context/QuoteModalContext";

export const Navbar: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const exactServicesList = [
    { name: "EXTENSIONS", href: "/services/extensions-cambridge" },
    { name: "LOFT CONVERSIONS", href: "/services/loft-conversions-cambridge" },
    { name: "REFURBISHMENTS", href: "/services/refurbishments-cambridge" },
    { name: "INTERIOR RENOVATION", href: "/services/interior-renovation" },

    { name: "DESIGN AND BUILD", href: "/services/design-and-build" },
    { name: "NEW BUILDS", href: "/services/new-builds-cambridge" },
    { name: "COMMERCIAL", href: "/services/commercial-builders-cambridge" },
    { name: "BIFOLDING DOORS", href: "/services/bifolding-doors" },

    { name: "ROOFING", href: "/services/roofing" },
    { name: "BUILDING REGULATIONS", href: "/services/building-regulations" },
    { name: "DEMOLITION", href: "/services/demolition" },
    { name: "DRAINAGE", href: "/services/drainage" },

    { name: "UNDERPINNING", href: "/services/underpinning" },
    { name: "DRIVEWAYS", href: "/services/driveways" },
    { name: "KERBS AND DROP KERBS", href: "/services/kerb-and-kerb-dropping" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasMegaMenu: true },
    { name: "Recent Work", href: "/recent-work" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Micro-Bar (Modern Slate/Navy with Trust Badges) */}
      <div className="bg-[#051329] text-slate-300 text-[11px] border-b border-blue-950/60 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <span className="text-white ml-1">4.9/5 Rating</span>
              <span className="text-slate-400 font-normal">(33+ Google Reviews)</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:info@buildercambridge.com"
              className="hover:text-blue-300 transition-colors flex items-center gap-1.5 text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>info@buildercambridge.com</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/buildercambridge.co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/buildercambridge/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/80 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="shrink-0">
            <Logo variant="dark" size="md" />
          </div>

          {/* Desktop Navigation Links (Pill Style) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href="/services"
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        pathname.startsWith("/services") || servicesDropdownOpen
                          ? "bg-[#092457] text-white shadow-sm"
                          : "text-slate-700 hover:text-[#092457] hover:bg-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-blue-300" : "opacity-60"
                        }`}
                      />
                    </Link>

                    {/* Floating Clean 4-Column Services Grid Dropdown */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.99 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.99 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[860px] bg-white rounded-2xl shadow-2xl shadow-blue-950/20 border border-slate-200 p-3 z-50"
                        >
                          <div className="grid grid-cols-4 gap-2">
                            {exactServicesList.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center p-3.5 rounded-xl text-[11px] font-extrabold tracking-wider uppercase text-slate-700 hover:text-[#092457] hover:bg-blue-50/80 border border-slate-100 hover:border-blue-200 transition-all text-center"
                                style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#092457] text-white shadow-sm"
                      : "text-slate-700 hover:text-[#092457] hover:bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone Pill */}
            <a
              href="tel:+441223782433"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-100/80 hover:bg-blue-50 border border-slate-200/80 text-xs font-bold text-[#092457] transition-all group"
            >
              <div className="w-6 h-6 rounded-lg bg-[#092457] text-white flex items-center justify-center">
                <Phone className="w-3 h-3 text-blue-400" />
              </div>
              <span>+44 1223 782433</span>
            </a>

            {/* Luxury Quote CTA */}
            <button
              onClick={() => openQuoteModal()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#092457] hover:bg-[#0e357d] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span className="relative z-10">GET A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 text-white relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+441223782433"
              className="p-2.5 rounded-xl bg-blue-50 text-[#092457]"
              aria-label="Call Builder Cambridge"
            >
              <Phone className="w-4 h-4 text-blue-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden bg-white px-4 pt-3 pb-6 space-y-2 border-t border-slate-100 max-h-[85vh] overflow-y-auto"
            >
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-xl text-xs font-bold uppercase transition-colors ${
                      pathname === link.href
                        ? "bg-[#092457] text-white"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {link.name}
                  </Link>

                  {link.hasMegaMenu && (
                    <div className="ml-2 mt-2 grid grid-cols-2 gap-1.5 py-1">
                      {exactServicesList.map((s) => (
                        <Link
                          key={s.name}
                          href={s.href}
                          className="block p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-[10px] font-bold text-slate-700 hover:text-[#092457] text-center tracking-wide uppercase border border-slate-100"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <a
                  href="tel:+441223782433"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-100 text-[#092457] font-bold text-xs"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Us</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#092457] text-white font-bold text-xs uppercase cursor-pointer"
                >
                  <span>Get Quote</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
