"use client";

import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [percent, setPercent] = useState("0.00%");

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setPercent(`${(v * 100).toFixed(2)}%`);
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
        style={{ scaleX }}
      />
      <div className="fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-mono text-white/70 backdrop-blur-md">
        {percent}
      </div>
    </>
  );
}
