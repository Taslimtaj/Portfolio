"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";

export default function FloatingNav() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastScroll || y < 80);
      setLastScroll(y);

      const sections = navItems.map((item) => item.link.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-4 z-40 mx-auto flex w-fit max-w-[95vw] items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-2 backdrop-blur-xl"
    >
      {navItems.map((item) => {
        const id = item.link.replace("#", "");
        return (
          <a
            key={item.name}
            href={item.link}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition-colors",
              active === id
                ? "bg-white/10 text-white"
                : "text-white/60 hover:text-white"
            )}
          >
            {item.name}
          </a>
        );
      })}
    </motion.nav>
  );
}
