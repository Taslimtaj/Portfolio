"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-2 text-sm uppercase tracking-widest text-purple-400">
            My work
          </p>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Projects.
          </h2>
          <p className="max-w-2xl text-white/50">
            A selection of projects that showcase my skills through real-world
            examples. Each includes links to code repositories and live demos
            where available.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition hover:border-purple-500/30"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 transition group-hover:opacity-100" />

              <h3 className="relative mb-3 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="relative mb-6 flex-1 text-sm leading-relaxed text-white/55">
                {project.description}
              </p>

              <div className="relative mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-purple-500/10 px-2 py-1 text-xs text-purple-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="relative flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                >
                  <GitHubIcon size={16} />
                  Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
