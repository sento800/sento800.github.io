"use client";
import { motion } from "framer-motion";

export default function SkillList({ dict }) {
  const skillCategories = [
    {
      category: dict?.skills?.categories?.frameworks || "Frameworks & Core",
      skills: [
        { name: "Next.js 15", level: "Expert", color: "#ffffff", icon: "▲" },
        { name: "React 19", level: "Expert", color: "#61DAFB", icon: "⚛" },
        { name: "TypeScript", level: "Advanced", color: "#3178C6", icon: "TS" },
        { name: "JavaScript (ES6+)", level: "Expert", color: "#F7DF1E", icon: "JS" },
      ],
    },
    {
      category: dict?.skills?.categories?.styling || "Styling & Motion",
      skills: [
        { name: "Tailwind CSS", level: "Expert", color: "#38BDF8", icon: "≈" },
        { name: "Framer Motion", level: "Advanced", color: "#F08C00", icon: "◈" },
        { name: "GSAP Animations", level: "Proficient", color: "#88CE02", icon: "G" },
        { name: "Responsive / CSS3", level: "Expert", color: "#2965F1", icon: "#" },
      ],
    },
    {
      category: dict?.skills?.categories?.tools || "Workflow & Tooling",
      skills: [
        { name: "Figma to Code", level: "Pixel-Perfect", color: "#F24E1E", icon: "❖" },
        { name: "Git & GitHub", level: "Daily Use", color: "#F05032", icon: "⌥" },
        { name: "RESTful APIs", level: "Advanced", color: "#10B981", icon: "⇄" },
        { name: "Vercel & Deployment", level: "Seamless", color: "#A855F7", icon: "▲" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 border-t border-white/10 relative">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {dict?.skills?.badge || "Technical Arsenal"}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit">
          {dict?.skills?.title_part1 || "Modern"}{" "}
          <span className="text-gradient">{dict?.skills?.title_part2 || "Tech Stack"}</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          {dict?.skills?.description ||
            "A proven suite of tools and libraries I leverage daily to engineer fast, resilient, and engaging web products."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((group, gIdx) => (
          <motion.div
            key={gIdx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: gIdx * 0.08, ease: "easeOut" }}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
          >
            <div>
              <h3 className="text-base font-bold text-sky-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>{group.category}</span>
              </h3>

              <div className="space-y-3.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group/skill flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-sky-500/30 hover:bg-slate-800/60 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-white/5 border border-white/10 group-hover/skill:scale-105 transition-transform"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-white group-hover/skill:text-sky-300 transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 font-medium border border-white/5 group-hover/skill:border-sky-500/30 group-hover/skill:text-sky-300 transition-colors">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-center">
              <span className="text-[11px] text-slate-500 font-medium">
                {dict?.skills?.badge_footer || "100% Industry Standard Practices"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
