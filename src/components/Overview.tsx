"use client";

import { motion } from "framer-motion";
import { Bot, Cloud, Code2, Layers, Server, Sparkles } from "lucide-react";
import { overview } from "@/data";
import { cn } from "@/lib/utils";

const iconMap = {
  server: Server,
  code: Code2,
  layers: Layers,
  cloud: Cloud,
  bot: Bot,
  sparkles: Sparkles,
};

export default function Overview() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm uppercase tracking-widest text-purple-400">
            {overview.label}
          </p>
          <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            {overview.heading}
          </h2>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-white/60">
            {overview.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {overview.highlights.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-500/30 hover:bg-white/[0.06]",
                  i === 0 && "md:col-span-2 md:row-span-1"
                )}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <div className="pointer-events-none absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-purple-500/5 blur-2xl transition group-hover:bg-purple-500/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
