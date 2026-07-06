"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[300px] w-[300px] rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
          Portfolio
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-xl text-white/80 sm:text-2xl">
          a{" "}
          <span className="font-semibold text-white">{personalInfo.title}</span>
        </p>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/50">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 transition hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-white/50 transition hover:text-white"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 text-white/40 transition hover:text-white/70"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
