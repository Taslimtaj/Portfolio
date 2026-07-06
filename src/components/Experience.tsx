"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-2 text-sm uppercase tracking-widest text-purple-400">
            What I have done so far
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Work Experience.
          </h2>
        </motion.div>

        <div className="relative space-y-12 border-l border-white/10 pl-8 md:pl-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-purple-500 bg-[#0a0a0f] md:-left-[57px]" />
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <span className="text-purple-400">{exp.company}</span>
              </div>
              <p className="mb-4 text-sm text-white/40">{exp.period}</p>
              <ul className="space-y-2">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-white/60"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
