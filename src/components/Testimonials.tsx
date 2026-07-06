"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";

export default function Testimonials() {
  return (
    <section className="overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm uppercase tracking-widest text-purple-400">
            What others say
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Testimonials.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="mb-6 text-sm leading-relaxed text-white/60">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer>
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-purple-400">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
