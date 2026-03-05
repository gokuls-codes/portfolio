"use client";

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none">
      {/* Primary Orb - Indigo/Purple */}
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/25 blur-[140px]"
      />

      {/* Secondary Orb - Tech Blue/Cyan */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 150, 0],
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] -right-[15%] w-[50%] h-[50%] rounded-full bg-accent/25 blur-[120px]"
      />

      {/* Tertiary Orb - Emerald Focus */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[15%] left-[25%] w-[55%] h-[55%] rounded-full bg-emerald-500/15 blur-[130px]"
      />

      {/* Deep Shadow Orb for Contrast */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[40%] w-[30%] h-[30%] rounded-full bg-indigo-900/10 blur-[90px]"
      />
    </div>
  );
}
