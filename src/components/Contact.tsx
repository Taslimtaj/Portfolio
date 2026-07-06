"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { personalInfo } from "@/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm uppercase tracking-widest text-purple-400">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Contact.</h2>
          <p className="mt-4 text-sm text-white/50">
            Messages are sent to{" "}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-purple-400 hover:underline"
            >
              {personalInfo.email}
            </a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-white/60">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="John Doe"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-purple-500/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white/60">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-purple-500/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-white/60">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Hi, I'd like to discuss..."
              className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-purple-500/50"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            <Send size={16} />
            Send Message
          </button>
          {status === "sent" && (
            <p className="text-center text-sm text-green-400">
              Opening your email client...
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
