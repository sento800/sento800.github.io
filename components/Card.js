"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Card({ i, project, range, targetScale, progress }) {
  const { title, description, src, link, color } = project;
  const cardContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className={`h-[100vh] flex items-center justify-center sticky top-0 px-4`}
    >
      <motion.div
        className="glass-card flex flex-col relative w-full max-w-[1000px] h-[550px] max-lg:h-auto p-8 lg:p-12 rounded-3xl origin-top shadow-2xl border border-white/10 overflow-hidden"
        style={{
          scale,
          top: `calc(10vh + ${i * 30}px)`,
        }}
      >
        {/* Subtle accent glow based on project color */}
        <div 
          className="absolute top-0 left-0 w-full h-2 opacity-50"
          style={{ backgroundColor: color }}
        />
        <div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{ backgroundColor: color }}
        />
        
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight z-10">{title}</h2>
        
        <div className="flex h-full mt-8 gap-8 lg:gap-16 flex-1 max-lg:flex-col-reverse z-10">
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>
            <Link
              className="inline-flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors group w-fit"
              href={link}
              target="_blank"
            >
              See more
              <svg
                className="transform group-hover:translate-x-2 transition-transform duration-300"
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          
          <motion.div
            style={{ opacity: scrollYProgress }}
            className="relative w-full lg:w-[55%] h-[300px] lg:h-full rounded-2xl overflow-hidden shadow-lg border border-white/5"
          >
            <div className="w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out">
              <Image
                className="object-cover"
                fill
                src={`/img/projects/${src}`}
                alt={`${title} project screenshot`}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
