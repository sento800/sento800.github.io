"use client";
import { motion } from "framer-motion";

export default function WhyHireMe({ dict }) {
  const cards = dict?.why_me?.cards || [];

  const icons = [
    (
      <svg key="clock" className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    (
      <svg key="chat" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    (
      <svg key="sparkles" className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    (
      <svg key="code" className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  ];

  return (
    <section id="why-me" className="py-24 border-t border-white/10 relative">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {dict?.why_me?.badge || "Why Collaborate With Me"}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit">
          {dict?.why_me?.title_part1 || "Why Clients"}{" "}
          <span className="text-gradient">{dict?.why_me?.title_part2 || "Choose Me?"}</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          {dict?.why_me?.description ||
            "As a dedicated freelancer, I treat every project as a strategic partnership with your business goals at the center."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            className="group glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                {icons[index % icons.length]}
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors font-outfit">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <span>{dict?.why_me?.quality_badge || "✓ Quality Assured"}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
