"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About({ dict, lang = "vi" }) {
  const quickFacts = dict?.about?.quick_facts || [
    { label: "Location", val: "Vietnam (Available for Global Remote)" },
    { label: "Specialization", val: "React.js, Next.js, UI/UX" },
    { label: "Languages", val: "Vietnamese, English" },
    { label: "Status", val: "Open for New Projects" },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Visual Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden p-2 bg-gradient-to-br from-sky-400/30 via-indigo-500/20 to-purple-500/30 border border-white/10 shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src="/img/about.jpg"
                alt="Nguyen Dinh Phu (Sento) - Frontend Developer"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Info Pill */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-medium">Nguyen Dinh Phu</div>
                <div className="text-sm font-bold text-white">Frontend Specialist</div>
              </div>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Remote
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: Story & Details */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
            {dict?.about?.badge || "About Me"}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit mb-6">
            {dict?.about?.title_part1 || "My"}{" "}
            <span className="text-gradient">{dict?.about?.title_part2 || "Background"}</span>
          </h2>

          <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-8">
            <p>
              {dict?.about?.p1 ||
                "I'm Nguyen Dinh Phu, a Frontend Developer dedicated to engineering web experiences that marry visual elegance with blazingly fast technical performance."}
            </p>
            <p>
              {dict?.about?.p2 ||
                "I continuously integrate the latest modern web standards, keeping user satisfaction and business conversion at the heart of every project I touch."}
            </p>
            <p>
              {dict?.about?.p3 ||
                "I am currently accepting remote freelance contracts, collaborating with forward-thinking startups, agencies, and businesses looking for top-tier frontend execution."}
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            {quickFacts.map((fact, fIdx) => (
              <div
                key={fIdx}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col"
              >
                <span className="text-xs text-slate-400 font-medium">{fact.label}</span>
                <span className="text-sm font-semibold text-white mt-0.5">{fact.val}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-indigo-300 hover:opacity-95 shadow-lg shadow-sky-500/20 transition-all duration-200"
            >
              <span>{dict?.nav?.hire_me || "Work With Me"}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
