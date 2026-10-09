"use client";
import { motion } from "framer-motion";

export default function Services({ dict }) {
  const services = dict?.services?.items || [];

  const getServiceIcon = (icon) => {
    switch (icon) {
      case "code":
        return (
          <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "layout":
        return (
          <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        );
      case "figma":
        return (
          <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case "zap":
      default:
        return (
          <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-24 border-t border-white/10 relative">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {dict?.services?.badge || "Services Offered"}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit">
          {dict?.services?.title_part1 || "High-Impact"}{" "}
          <span className="text-gradient">{dict?.services?.title_part2 || "Client Solutions"}</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          {dict?.services?.description ||
            "Comprehensive web development services designed to help founders, agencies, and businesses launch fast, reliable, and visually stunning products."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id || index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            className="group relative glass-card rounded-2xl p-8 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-500/40 transition-all duration-300">
                  {getServiceIcon(service.icon)}
                </div>
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors font-outfit">
                {service.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                {dict?.services?.deliverables_label || "Key Deliverables:"}
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                {service.deliverables?.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
