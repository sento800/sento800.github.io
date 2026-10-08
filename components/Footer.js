"use client";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer({ dict, lang = "vi" }) {
  const navLinks = [
    { href: `#services`, label: dict?.nav?.services || "Services" },
    { href: `#projects`, label: dict?.nav?.projects || "Projects" },
    { href: `#process`, label: dict?.nav?.process || "Process" },
    { href: `#skills`, label: dict?.nav?.skills || "Skills" },
    { href: `#about`, label: dict?.nav?.about || "About" },
    { href: `#contact`, label: dict?.nav?.contact || "Contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#080c14] pt-16 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Call to Action Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-16 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit mb-3">
              {dict?.footer?.ready_cta || "Ready to bring your digital vision to life?"}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              {dict?.footer?.ready_desc || "Available for new freelance contracts and high-impact web development projects."}
            </p>
          </div>

          <Link
            href={`/${lang}#contact`}
            className="px-7 py-3.5 rounded-full text-slate-950 font-bold text-sm sm:text-base bg-gradient-to-r from-sky-400 to-indigo-300 hover:opacity-95 shadow-xl shadow-sky-500/25 transition-all duration-200 shrink-0"
          >
            {dict?.footer?.contact_btn || "Get In Touch Today"}
          </Link>
        </div>

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <Logo lang={lang} />

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${lang}${link.href}`}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Local Status */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{dict?.footer?.timezone || "Vietnam Standard Time (GMT+7)"}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            {dict?.footer?.copyright || "© 2026 Nguyen Dinh Phu (Sento). All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://github.com/sento800" target="_blank" className="hover:text-slate-300 transition">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/ph%C3%BA-nguy%E1%BB%85n-%C4%91%C3%ACnh-807749351/" target="_blank" className="hover:text-slate-300 transition">
              LinkedIn
            </Link>
            <Link href="https://www.facebook.com/phuhhhh5/" target="_blank" className="hover:text-slate-300 transition">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
