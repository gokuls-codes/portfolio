"use client";

import React from "react";
import { motion } from "framer-motion";

const EXPERIENCE_DATA = [
  {
    role: "Full Stack Development Intern",
    company: "On the GO",
    period: "2024 - Present",
    description:
      "Architecting and implementing mission-critical transport management systems. Focused on performance optimization and user-centric features.",
  },
  {
    role: "B.Tech in Computer Science",
    company: "PES University",
    period: "2021 - 2025",
    description:
      "Focusing on distributed systems, modern web architecture, and algorithmic efficiency. Actively contributing to technical communities.",
  },
];

const ExperienceItem = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative pl-12 pb-20 last:pb-0"
  >
    {/* Timeline Dot & Line */}
    <div className="absolute left-0 top-[10px] size-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors duration-500 z-10" />
    <div className="absolute left-[3px] top-6 bottom-0 w-px bg-white/5 group-hover:bg-white/10 transition-colors" />

    <div className="p-8 rounded-[2rem] border border-transparent hover:minimal-glass hover:float-shadow transition-all duration-700 -ml-8 group-hover:ml-0">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-minimal-gradient">
            {item.role}
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            {item.period}
          </span>
        </div>
        <div className="text-lg font-medium text-white/60">{item.company}</div>
        <p className="text-white/40 text-lg leading-relaxed max-w-3xl font-light">
          {item.description}
        </p>
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section
      className="py-32 px-6 max-w-7xl mx-auto space-y-24"
      id="experience"
    >
      <div className="max-w-2xl space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold uppercase tracking-[0.5em] text-white/20"
        >
          Perspective
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-none text-minimal-gradient"
        >
          Growth <br /> Timeline
          <span className="text-accent opacity-20">.</span>
        </motion.h2>
      </div>

      <div className="max-w-4xl pt-12">
        {EXPERIENCE_DATA.map((item, index) => (
          <ExperienceItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
