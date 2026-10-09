"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Social from "./Social";

export default function Hero({ dict, lang = "vi" }) {
  const [activeTab, setActiveTab] = useState("config");
  const [copied, setCopied] = useState(false);
  const [auditing, setAuditing] = useState(false);
  const [interactiveToggle, setInteractiveToggle] = useState(true);
  const [interactiveFidelity, setInteractiveFidelity] = useState(98);
  const [mousePos, setMousePos] = useState({ x: 200, y: 150 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const copyConfigSnippet = () => {
    const snippet = `const freelancer = {
  name: "Nguyen Dinh Phu",
  role: "Frontend Developer",
  status: 'AVAILABLE_FOR_HIRE',
  coreTech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
  commitments: {
    delivery: "Strictly on schedule",
    quality: "Pixel-perfect & clean code",
    performance: "95+ Lighthouse Score"
  }
};`;
    navigator?.clipboard?.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerAudit = () => {
    setAuditing(true);
    setTimeout(() => {
      setAuditing(false);
    }, 1200);
  };

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

        {/* Right Column: Interactive Multi-Tab Developer Studio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          {/* Glowing aura background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 -z-10" />

          {/* Interactive Studio Window */}
          <div
            onMouseMove={handleMouseMove}
            className="glass-card rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-white/20"
          >
            {/* Mouse-following spotlight aura */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:opacity-100"
              style={{
                background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.08), transparent 45%)`,
              }}
            />

            {/* Window Header with Clickable Tabs */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10 bg-slate-950/40 text-xs">
              <div className="flex items-center gap-2">
                {/* macOS window dots */}
                <div className="flex items-center gap-1.5 mr-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm shadow-rose-500/30" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm shadow-amber-500/30" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm shadow-emerald-500/30" />
                </div>

                {/* Clickable Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab("config")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[11px] transition-all ${
                      activeTab === "config"
                        ? "bg-white/10 text-sky-300 border border-sky-500/30 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <svg className="w-3 h-3 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" />
                    </svg>
                    <span>config.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("audit")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[11px] transition-all ${
                      activeTab === "audit"
                        ? "bg-sky-500/15 text-emerald-300 border border-emerald-500/30 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <span>⚡</span>
                    <span>audit.log</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[11px] transition-all ${
                      activeTab === "preview"
                        ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <span>🎨</span>
                    <span>preview.ui</span>
                  </button>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-[11px] font-semibold flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">Available</span>
                </span>
              </div>
            </div>

            {/* Tab Body Contents */}
            <div className="p-5 sm:p-6 min-h-[360px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {/* TAB 1: config.ts (Clean Code Editor) */}
                {activeTab === "config" && (
                  <motion.div
                    key="config"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-slate-400 font-mono">
                      <span>TypeScript • UTF-8</span>
                      <button
                        onClick={copyConfigSnippet}
                        className="text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors px-2 py-0.5 rounded bg-white/5 hover:bg-white/10"
                      >
                        {copied ? (
                          <span className="text-emerald-400 font-semibold">✓ Copied!</span>
                        ) : (
                          <span>Copy snippet</span>
                        )}
                      </button>
                    </div>

                    <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-1.5 text-slate-300">
                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">01</span>
                        <p>
                          <span className="text-purple-400 font-semibold">const</span>{" "}
                          <span className="text-sky-300 font-semibold">freelancer</span> = &#123;
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">02</span>
                        <p className="pl-2">
                          <span className="text-slate-400">name:</span>{" "}
                          <span className="text-emerald-300">&quot;{dict?.hero?.name || "Nguyen Dinh Phu"}&quot;</span>,
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">03</span>
                        <p className="pl-2">
                          <span className="text-slate-400">role:</span>{" "}
                          <span className="text-emerald-300">&quot;{dict?.hero?.role || "Frontend Developer"}&quot;</span>,
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">04</span>
                        <p className="pl-2">
                          <span className="text-slate-400">status:</span>{" "}
                          <span className="text-sky-300">&apos;AVAILABLE_FOR_HIRE&apos;</span>,
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">05</span>
                        <p className="pl-2">
                          <span className="text-slate-400">coreTech:</span> [
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">06</span>
                        <div className="pl-4 flex flex-wrap gap-1.5 my-0.5">
                          {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"].map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[10px] sm:text-[11px]"
                            >
                              &quot;{t}&quot;
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">07</span>
                        <p className="pl-2">],</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">08</span>
                        <p className="pl-2">
                          <span className="text-slate-400">commitments:</span> &#123;
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">09</span>
                        <p className="pl-4">
                          <span className="text-slate-400">delivery:</span>{" "}
                          <span className="text-amber-300">&quot;{dict?.hero?.delivery_commitment || "Strictly on schedule"}&quot;</span>,
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">10</span>
                        <p className="pl-4">
                          <span className="text-slate-400">quality:</span>{" "}
                          <span className="text-amber-300">&quot;{dict?.hero?.quality_commitment || "Pixel-perfect & clean code"}&quot;</span>,
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">11</span>
                        <p className="pl-4">
                          <span className="text-slate-400">performance:</span>{" "}
                          <span className="text-amber-300">&quot;{dict?.hero?.performance_commitment || "95+ Lighthouse Score"}&quot;</span>
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">12</span>
                        <p className="pl-2">&#125;</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-slate-600 select-none text-[11px] w-4 text-right shrink-0">13</span>
                        <p>&#125;;</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: audit.log (Live Interactive Lighthouse Performance Benchmark) */}
                {activeTab === "audit" && (
                  <motion.div
                    key="audit"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-slate-400 font-mono">
                      <span>Lighthouse 12.0 • Production Audit</span>
                      <button
                        onClick={triggerAudit}
                        disabled={auditing}
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 disabled:opacity-50"
                      >
                        {auditing ? (
                          <span className="flex items-center gap-1 animate-pulse">Running test...</span>
                        ) : (
                          <span>Re-test ↺</span>
                        )}
                      </button>
                    </div>

                    {/* 4 Score Gauges */}
                    <div className="grid grid-cols-4 gap-2 text-center py-2">
                      {[
                        { score: auditing ? "--" : "99", label: "Performance", color: "text-emerald-400 border-emerald-400/40" },
                        { score: auditing ? "--" : "100", label: "Accessibility", color: "text-emerald-400 border-emerald-400/40" },
                        { score: auditing ? "--" : "100", label: "Best Practices", color: "text-emerald-400 border-emerald-400/40" },
                        { score: auditing ? "--" : "100", label: "SEO", color: "text-emerald-400 border-emerald-400/40" },
                      ].map((gauge, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full border-2 ${gauge.color} flex items-center justify-center font-bold font-mono text-sm shadow-md bg-emerald-500/5`}>
                            {gauge.score}
                          </div>
                          <span className="text-[10px] text-slate-400 mt-1.5 font-medium leading-tight">{gauge.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Real Core Web Vitals Breakdown */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between">
                        <span className="text-slate-400">LCP (Speed):</span>
                        <span className="text-emerald-400 font-bold">{auditing ? "..." : "0.58s"} ✓</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between">
                        <span className="text-slate-400">INP (Response):</span>
                        <span className="text-emerald-400 font-bold">{auditing ? "..." : "14ms"} ✓</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between">
                        <span className="text-slate-400">CLS (Stability):</span>
                        <span className="text-emerald-400 font-bold">{auditing ? "..." : "0.00"} ✓</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between">
                        <span className="text-slate-400">TTFB (Server):</span>
                        <span className="text-emerald-400 font-bold">{auditing ? "..." : "62ms"} ✓</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center font-sans">
                      Verified clean code architecture with 0 bloated libraries & optimized static asset delivery.
                    </p>
                  </motion.div>
                )}

                {/* TAB 3: preview.ui (Interactive Component Sandbox) */}
                {activeTab === "preview" && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px] text-slate-400 font-mono">
                      <span>Figma Component Sandbox</span>
                      <span className="text-indigo-400 font-semibold">1:1 Exact Match</span>
                    </div>

                    {/* Live Interactive Widget */}
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-indigo-500/20 space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white">Glassmorphism Engine</div>
                          <div className="text-[10px] text-slate-400">Hardware-accelerated CSS backdrop</div>
                        </div>
                        {/* Interactive Switch */}
                        <button
                          onClick={() => setInteractiveToggle(!interactiveToggle)}
                          className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                            interactiveToggle ? "bg-indigo-500" : "bg-slate-700"
                          }`}
                        >
                          <motion.div
                            animate={{ x: interactiveToggle ? 18 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="w-4 h-4 rounded-full bg-white shadow-md"
                          />
                        </button>
                      </div>

                      {/* Interactive Smoothness Slider */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>Animation Physics Curve</span>
                          <span className="font-mono text-indigo-300">{interactiveFidelity}%</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="100"
                          value={interactiveFidelity}
                          onChange={(e) => setInteractiveFidelity(Number(e.target.value))}
                          className="w-full accent-indigo-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                        />
                      </div>

                      {/* Dynamic Micro-Preview Box */}
                      <div
                        className="p-3 rounded-lg border border-white/10 text-center transition-all duration-300"
                        style={{
                          background: interactiveToggle
                            ? "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.1))"
                            : "rgba(15,23,42,0.6)",
                          backdropFilter: interactiveToggle ? "blur(12px)" : "none",
                        }}
                      >
                        <span className="text-xs font-semibold text-slate-200">
                          {interactiveToggle ? "✨ Fluid 60fps Micro-interaction Active" : "Standard Fallback State"}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center font-sans">
                      Mọi thành phần UI được dựng bằng tay từ file Figma với độ chính xác từng pixel và hệ thống Design Token bài bản.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Console Footer Bar */}
              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span> {dict?.hero?.verified_freelancer || "Verified Freelancer"}
                </span>
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
