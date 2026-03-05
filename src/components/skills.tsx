"use client";

import React from "react";
import { motion } from "framer-motion";
import { LANGUAGES, FRAMEWORKS, OTHERS } from "@/constants/skills";

const SkillGroup = ({
  title,
  items,
  delay,
}: {
  title: string;
  items: any[];
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="minimal-card flex flex-col gap-8 float-shadow"
  >
    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 border-b border-white/5 pb-4">
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-4 group cursor-default">
          <item.icon className="size-5 text-white/20 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
          <span className="text-sm font-medium text-white/40 group-hover:text-white transition-all duration-500">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto space-y-24" id="skills">
      <div className="max-w-2xl space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold uppercase tracking-[0.5em] text-white/20"
        >
          Capabilities
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-none text-minimal-gradient"
        >
          Fluent <br /> Stacks<span className="text-accent opacity-20">.</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillGroup title="Languages" items={LANGUAGES} delay={0.1} />
        <SkillGroup title="Frameworks" items={FRAMEWORKS} delay={0.2} />
        <SkillGroup title="Tools" items={OTHERS} delay={0.3} />
      </div>
    </section>
  );
};

export default SkillsSection;
