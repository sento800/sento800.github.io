"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Header({ dict, lang = "vi" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let wasScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== wasScrolled) {
        wasScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `#services`, label: dict?.nav?.services || "Services" },
    { href: `#projects`, label: dict?.nav?.projects || "Projects" },
    { href: `#process`, label: dict?.nav?.process || "Process" },
    { href: `#skills`, label: dict?.nav?.skills || "Skills" },
    { href: `#about`, label: dict?.nav?.about || "About" },
    { href: `#contact`, label: dict?.nav?.contact || "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c14]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Logo lang={lang} />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Availability Badge, Lang Toggle & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Availability Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{dict?.hero?.status || "Available for Freelance"}</span>
          </div>

          {/* Lang Switcher */}
          <div className="flex items-center bg-slate-900/80 border border-white/10 p-1 rounded-full text-xs font-semibold">
            <Link
              href="/en"
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "en"
                  ? "bg-sky-500 text-slate-950 shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </Link>
            <Link
              href="/vi"
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "vi"
                  ? "bg-sky-500 text-slate-950 shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              VI
            </Link>
          </div>

          {/* Primary CTA */}
          <Link
            href={`/${lang}#contact`}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-indigo-400 hover:from-sky-300 hover:to-indigo-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>{dict?.nav?.hire_me || "Hire Me"}</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Lang Switcher Mobile */}
          <div className="flex items-center bg-slate-900/80 border border-white/10 p-0.5 rounded-full text-xs font-semibold mr-1">
            <Link
              href="/en"
              className={`px-2 py-1 rounded-full ${
                lang === "en" ? "bg-sky-500 text-slate-950 font-bold" : "text-slate-400"
              }`}
            >
              EN
            </Link>
            <Link
              href="/vi"
              className={`px-2 py-1 rounded-full ${
                lang === "vi" ? "bg-sky-500 text-slate-950 font-bold" : "text-slate-400"
              }`}
            >
              VI
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-3 px-4 pb-6 pt-2 bg-[#080c14]/95 border-b border-white/10 backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${lang}${link.href}`}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5 hover:text-sky-400 font-medium transition"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{dict?.hero?.status || "Available for Freelance Projects"}</span>
              </div>
              <Link
                href={`/${lang}#contact`}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-indigo-400 shadow-lg shadow-sky-500/20"
              >
                {dict?.nav?.hire_me || "Hire Me"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
