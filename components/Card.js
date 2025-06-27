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
    // cardContainer
    <div
      ref={cardContainerRef}
      className={`h-lvh flex justify-center sticky top-0`}
    >
      {/* card */}
      <motion.div
        className="flex flex-col relative top-[10%] h-[500px] w-[1000px] p-[50px] rounded-3xl origin-top"
        style={{
          scale,
          backgroundColor: color,
          top: `calc(20% + ${i * 30}px)`,
        }}
      >
        <h2 className="text-center m-0 text-3xl max-lg:text-2xl">{title}</h2>
        {/* body */}
        <div className="flex h-100% mt-[50px] gap-[50px] flex-1 max-lg:flex-col-reverse max-lg:gap-2 max-lg:mt-5">
          {/* description */}
          <div className="w-[40%] relative top-[10%] max-lg:w-full max-lg:top-0">
            <p className="text-xl first-letter:text-3xl">{description}</p>
            <span className="flex items-center gap-[5px] ">
              <Link
                className="text-lg cursor-pointer"
                href={src}
                target="_blank"
              >
                See more
              </Link>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          {/* imageContainer */}
          <motion.div
            style={{ opacity: scrollYProgress }}
            className="relative w-[60%] h-full rounded-3xl overflow-hidden max-lg:w-full"
          >
            {/* inner */}
            <div className="w-full h-full">
              <Image
                className="object-cover"
                fill
                src={`/img/${src}`}
                alt="image"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
