"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const PROJECTS_DATA = [
  {
    title: "On the GO",
    description:
      "A comprehensive transport management platform for modern logistics.",
    tags: ["Next.js", "PostgreSQL", "Google Maps"],
    github: "https://github.com/gokulkannanr/On-the-go",
    live: "https://onthego.gokulkannanr.in",
    year: "2024",
  },
  {
    title: "Expenses Tracker",
    description:
      "Personal finance ecosystem with predictive spending analysis.",
    tags: ["React", "Firebase", "Chart.js"],
    github: "https://github.com/gokulkannanr/expense-tracker",
    live: "https://expenses.gokulkannanr.in",
    year: "2024",
  },
  {
    title: "Sudoku Solver",
    description: "Visual backtracking algorithm implementation with custom UI.",
    tags: ["Python", "Pygame", "Algorithms"],
    github: "https://github.com/gokulkannanr/Sudoku-Solver-Pygame",
    year: "2023",
  },
];

const ProjectItem = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="minimal-card flex flex-col gap-8 transition-transform duration-500 hover:-translate-y-2 float-shadow"
  >
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
          {project.year}
        </span>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-white/20 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="text-white/20 hover:text-white transition-all"
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white group-hover:text-accent transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-white/40 text-lg leading-relaxed font-light line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-[10px] uppercase font-heavy tracking-widest text-white/40 px-3 py-1.5 bg-white/[0.03] border border-white/[0.05] rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto space-y-24" id="projects">
      <div className="max-w-2xl space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold uppercase tracking-[0.5em] text-white/20"
        >
          Work
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-none text-minimal-gradient"
        >
          Selected Works<span className="text-accent opacity-20">.</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-12 flex justify-center"
      >
        <Link
          href="https://github.com/gokulkannanr"
          target="_blank"
          className="px-8 py-4 minimal-glass rounded-full text-xs font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all flex items-center gap-4 group float-shadow"
        >
          View Archive
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
