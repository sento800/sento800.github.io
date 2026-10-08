"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Social from "./Social";

export default function Contact({ dict, lang = "vi" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = "nguyendinhphu800@gmail.com";
  const phone = "0917897358";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`[Freelance Inquiry] ${formData.service || "New Project"} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Sento,\n\nI am contacting you regarding a project:\n\nName/Company: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service || "Not specified"}\nBudget: ${formData.budget || "Not specified"}\n\nProject Details:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const serviceOptions = dict?.contact?.service_options || [
    "Custom Web App / SaaS",
    "High-Converting Landing Page",
    "Figma to Pixel-Perfect Code",
    "Performance & SEO Boost",
    "Technical Consultation",
  ];

  const budgetOptions = dict?.contact?.budget_options || [
    "< $200",
    "$200 - $600",
    "$600 - $1,500",
    "> $1,500",
    "Flexible / To be discussed",
  ];

  return (
    <section id="contact" className="py-24 border-t border-white/10 relative">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {dict?.contact?.badge || "Let's Collaborate"}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit">
          {dict?.contact?.title_part1 || "Have a Project"}{" "}
          <span className="text-gradient">{dict?.contact?.title_part2 || "In Mind?"}</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          {dict?.contact?.description ||
            "Whether you are looking to launch an MVP, build a custom web app, or revamp an existing website, I'd love to hear from you."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contacts & Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white font-outfit">
              {dict?.contact?.direct_title || "Direct Contact"}
            </h3>

            {/* Email Card with 1-click Copy */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
              <span className="text-xs text-slate-400 font-medium">
                {dict?.contact?.email_label || "Direct Email"}
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm text-sky-300 truncate">{email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold transition cursor-pointer shrink-0"
                >
                  {copied ? (dict?.contact?.copied || "Copied!") : (dict?.contact?.copy_email || "Copy")}
                </button>
              </div>
            </div>

            {/* Zalo / Phone */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
              <span className="text-xs text-slate-400 font-medium">
                {dict?.contact?.zalo_label || "Zalo / Phone"}
              </span>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-slate-200">{phone}</span>
                <a
                  href={`https://zalo.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition"
                >
                  Chat Zalo
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-xs text-slate-400 font-medium">
                {dict?.contact?.location_label || "Location"}
              </span>
              <div className="text-sm font-semibold text-white">
                {dict?.contact?.location_val || "Ho Chi Minh City, Vietnam (Remote Worldwide)"}
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 font-medium block mb-3">
                {dict?.contact?.social_label || "Social Profiles:"}
              </span>
              <Social />
            </div>
          </div>

          {/* Availability banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-indigo-500/10 border border-emerald-500/30 flex items-center gap-4">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white block font-semibold">{dict?.contact?.availability_note || "Ready for Q2/Q3 2026"}</strong>
              {dict?.contact?.response_time || "Typically responds within 2 hours."}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Project Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 font-outfit">
              {dict?.contact?.form_title || "Project Inquiry Form"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {dict?.contact?.form_name || "Your Name / Company"} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Nguyen"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {dict?.contact?.form_email || "Your Email Address"} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {dict?.contact?.form_service || "Service Needed"}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 transition"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {dict?.contact?.form_budget || "Estimated Budget"}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 transition"
                  >
                    <option value="">Select budget range...</option>
                    {budgetOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {dict?.contact?.form_message || "Project Description"} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project goals, timelines, and requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-slate-950 font-bold text-sm bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300 hover:opacity-95 shadow-xl shadow-sky-500/25 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{dict?.contact?.form_submit || "Send Project Inquiry"}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium">
                  {dict?.contact?.form_success || "Opening your email client with pre-filled details..."}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
