"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects({ dict }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectList = dict?.projects?.list || [];

  const filteredProjects = activeFilter === "all"
    ? projectList
    : projectList.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 border-t border-white/10 relative">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {dict?.projects?.badge || "Selected Works"}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit">
          {dict?.projects?.title_part1 || "Featured"}{" "}
          <span className="text-gradient">{dict?.projects?.title_part2 || "Projects"}</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          {dict?.projects?.description ||
            "Real-world projects showcasing problem solving, modern architectural patterns, and attention to visual detail."}
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === "all"
                ? "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            {dict?.projects?.all || "All Projects"}
          </button>
          <button
            onClick={() => setActiveFilter("web")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === "web"
                ? "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            {dict?.projects?.web || "Web Apps & SaaS"}
          </button>
          <button
            onClick={() => setActiveFilter("tools")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === "tools"
                ? "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            {dict?.projects?.tools || "AI & Tools"}
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={project.id || index}
              className="group glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-950 border-b border-white/10">
                  <Image
                    src={`/img/projects/${project.src}`}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-black/20" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-sky-400 border border-sky-500/30 backdrop-blur-md">
                      {project.badge || "Featured Project"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Role indicator */}
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    {project.role}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors font-outfit">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mb-6 space-y-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        {dict?.projects?.key_features || "Key Highlights:"}
                      </span>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm text-slate-300">
                        {project.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <span className="text-sky-400 font-bold">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech?.map((techItem) => (
                      <span
                        key={techItem}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-300 border border-white/10"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex items-center justify-between border-t border-white/5">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>{dict?.projects?.view_code || "Source Code"}</span>
                </Link>

                <Link
                  href={project.demo || project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-indigo-300 hover:opacity-90 shadow-md shadow-sky-500/20 group/btn transition-all duration-200"
                >
                  <span>{dict?.projects?.view_live || "Live Preview"}</span>
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
