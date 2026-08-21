"use client";
import { projects as fallbackProjects } from "@/assets/data-projects";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Projects({ dict }) {
  const container = useRef(null);
  const scrollParallax = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const projectList = dict?.projects?.list || fallbackProjects;

  return (
    <section id="project" ref={container} className="relative min-h-screen w-full border-t border-border mt-20 pt-20 mb-[200px] lg:mb-[400px]">
      <h2 className="text-4xl lg:text-5xl text-center tracking-tight mb-20 font-outfit">
        {dict?.projects?.title_part1 || "My"} <span className="font-extrabold text-gradient">{dict?.projects?.title_part2 || "Projects"}</span>
      </h2>
      <div className="flex flex-col">
        {projectList.map((project, index) => {
          const targetScale = 1 - (projectList.length - index) * 0.05;
          return (
            <Card
              key={index}
              i={index}
              project={project}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollParallax.scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
}
