"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animation = {
    initial: { x: "-100%", opacity: 0 },
    enter: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const textAnimation = {
    initial: { x: "100%", opacity: 0 },
    enter: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center w-full overflow-hidden border-t border-border py-20"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full max-w-6xl">
        <motion.div
          initial="initial"
          variants={animation}
          animate={isInView ? "enter" : ""}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
            <Image
              src="/img/about.jpg"
              alt="3D Illustration of Developer Workspace"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial="initial"
          variants={textAnimation}
          animate={isInView ? "enter" : ""}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <div className="glass-card p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
            
            <h2 className="text-4xl md:text-5xl tracking-tight mb-8 font-outfit">
              About <span className="font-extrabold text-gradient">Me</span>
            </h2>
            
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6 relative z-10 font-light">
              <p>
                As a highly motivated and detail-oriented Frontend Developer, I
                possess a strong foundation in React.js, dedicated to crafting
                intuitive and visually compelling web experiences. My passion lies
                in delivering pixel-perfect designs and developing clean,
                efficient, and highly performant code that significantly enhances
                user interaction.
              </p>
              <p>
                Having recently completed my intensive web development training, I
                have diligently acquired a comprehensive understanding of modern
                frontend technologies, including Next.js, TypeScript, and Tailwind
                CSS. I am committed to continuous learning, readily adapting to
                new challenges, and eager to contribute my skills to innovative
                and user-centric web applications.
              </p>
              <p>
                I am actively seeking opportunities to collaborate within dynamic
                and experienced development teams, contribute to impactful
                projects, and further refine my expertise. My objective is to
                consistently deliver high-quality code while actively
                participating in the successful evolution of digital products.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
