"use client";
import { useEffect, use } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import SkillList from "@/components/SkillList";
import WhyHireMe from "@/components/WhyHireMe";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary } from "@/dictionaries/dictionaries";

export default function Page({ params }) {
  // Safe resolution for Next.js 15 params (supports both prop Promise or useParams hook)
  const pathParams = useParams();
  let lang = pathParams?.lang;
  
  if (!lang && params) {
    try {
      const resolved = params instanceof Promise ? use(params) : params;
      lang = resolved?.lang;
    } catch {
      lang = "vi";
    }
  }
  
  if (!lang) lang = "vi";
  const dict = getDictionary(lang);

  useEffect(() => {
    if (typeof document !== "undefined" && lang) {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-[#f8fafc] overflow-x-hidden">
      <Header dict={dict} lang={lang} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex-1">
        <Hero dict={dict} lang={lang} />
        <Services dict={dict} />
        <Projects dict={dict} />
        <Process dict={dict} />
        <SkillList dict={dict} />
        <WhyHireMe dict={dict} />
        <About dict={dict} lang={lang} />
        <Contact dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </div>
  );
}
