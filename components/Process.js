"use client";
import { motion } from "framer-motion";

export default function Process({ dict }) {
  const steps = dict?.process?.steps || [];

  return (
    <section id="process" className="py-24 border-t border-white/10 relative">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {dict?.process?.badge || "How I Work"}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit">
          {dict?.process?.title_part1 || "Transparent"}{" "}
          <span className="text-gradient">{dict?.process?.title_part2 || "& Agile Workflow"}</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          {dict?.process?.description ||
            "A structured 4-step process that guarantees clarity, on-time milestones, and stress-free collaboration from start to finish."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 relative flex flex-col justify-between"
          >
            <div>
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-400 font-outfit">
                  {item.step}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-slate-400 group-hover:border-sky-500/40 group-hover:text-sky-400 transition-colors">
                  ➔
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors font-outfit">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Phase 0{index + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
