"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Social from "./Social";

export default function Hero({ dict, lang = "vi" }) {
  const stats = dict?.hero?.stats || [
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "On-time Delivery" },
    { value: "< 2h", label: "Fast Response Time" },
    { value: "95+", label: "Lighthouse Speed Score" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Value Proposition & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{dict?.hero?.status || "Available for Freelance Projects"}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 font-outfit">
            <span className="text-slate-400 text-2xl sm:text-3xl font-normal block mb-2">
              {dict?.hero?.greeting || "Hello, I am"} <strong className="text-white font-bold">{dict?.hero?.name || "Nguyen Dinh Phu"}</strong>
            </span>
            <span className="text-gradient block">
              {dict?.hero?.role || "Frontend Developer"}
            </span>
            <span className="text-slate-200 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 block">
              {dict?.hero?.sub_role || "& UI/UX Specialist"}
            </span>
          </h1>

          {/* Tagline / Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
            {dict?.hero?.tagline ||
              "Turning ideas & Figma designs into high-performance, SEO-optimized, and conversion-focused web experiences."}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              href={`/${lang}#contact`}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-base font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300 hover:opacity-95 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{dict?.hero?.cta_primary || "Discuss a Project"}</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href={`/${lang}#projects`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-sky-500/50 hover:text-white transition-all duration-200"
            >
              <span>{dict?.hero?.cta_secondary || "Explore Projects"}</span>
              <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
              {dict?.contact?.social_label || "Connect:"}
            </span>
            <Social />
          </div>
        </motion.div>

        {/* Right Column: High-tech Code/Card Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          {/* Glowing aura background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 -z-10" />

          {/* Code IDE Card */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Window header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-emerald-400 font-mono text-[11px] font-semibold flex items-center gap-1.5 pl-2.5 border-l border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-slate-400 font-mono text-[11px]">
                <svg className="w-3.5 h-3.5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>developer.config.ts</span>
              </div>
            </div>

            {/* Top Badge: Inside card, below top horizontal divider line on the right */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-4 sm:right-6 bg-slate-900/90 border border-indigo-500/30 px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5 backdrop-blur-md z-10"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm shrink-0">
                🎨
              </div>
              <div className="whitespace-nowrap">
                <div className="text-xs font-bold text-white">{dict?.hero?.badge_figma_title || "Pixel-Perfect UI"}</div>
                <div className="text-[10px] text-slate-400">{dict?.hero?.badge_figma_desc || "1:1 Figma Translation"}</div>
              </div>
            </motion.div>

            {/* Code lines */}
            <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-slate-300">
              <p>
                <span className="text-purple-400 font-semibold">const</span>{" "}
                <span className="text-sky-300 font-semibold">freelancer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-slate-400">name:</span>{" "}
                <span className="text-emerald-300">&quot;{dict?.hero?.name || "Nguyen Dinh Phu"}&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">role:</span>{" "}
                <span className="text-emerald-300">&quot;{dict?.hero?.role || "Frontend Developer"}&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">status:</span>{" "}
                <span className="text-sky-300">&apos;AVAILABLE_FOR_HIRE&apos;</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">coreTech:</span> [
              </p>
              <div className="pl-8 flex flex-wrap gap-1.5 my-1">
                {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[11px]"
                  >
                    &quot;{t}&quot;
                  </span>
                ))}
              </div>
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-slate-400">commitments:</span> &#123;
              </p>
              <p className="pl-8">
                <span className="text-slate-400">delivery:</span>{" "}
                <span className="text-amber-300">&quot;{dict?.hero?.delivery_commitment || "Strictly on schedule"}&quot;</span>,
              </p>
              <p className="pl-8">
                <span className="text-slate-400">quality:</span>{" "}
                <span className="text-amber-300">&quot;{dict?.hero?.quality_commitment || "Pixel-perfect & clean code"}&quot;</span>,
              </p>
              <p className="pl-8">
                <span className="text-slate-400">performance:</span>{" "}
                <span className="text-amber-300">&quot;{dict?.hero?.performance_commitment || "95+ Lighthouse Score"}&quot;</span>
              </p>
              <p className="pl-4">&#125;</p>
              <p>&#125;;</p>
            </div>

            {/* Quick action bar: After bottom horizontal divider line */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              {/* Bottom Badge: Inside card, below horizontal divider line on the left */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-slate-900/90 border border-sky-500/30 px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2.5 backdrop-blur-md w-fit"
              >
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm shrink-0">
                  ⚡
                </div>
                <div className="whitespace-nowrap">
                  <div className="text-xs font-bold text-white">{dict?.hero?.badge_speed_title || "Sub-second Speed"}</div>
                  <div className="text-[10px] text-slate-400">{dict?.hero?.badge_speed_desc || "Core Web Vitals Optimized"}</div>
                </div>
              </motion.div>

              {/* Action links on the right */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span> {dict?.hero?.verified_freelancer || "Verified Freelancer"}
                </span>
                <span className="text-white/20 hidden sm:inline">•</span>
                <Link
                  href={`/${lang}#contact`}
                  className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 group"
                >
                  <span>{dict?.hero?.request_quote || "Request Quotation"}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 font-outfit">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
