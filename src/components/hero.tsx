"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden"
      id="hero"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 grid-bg opacity-30 select-none pointer-events-none" />

      <div className="relative flex flex-col items-center text-center gap-12 w-full max-w-5xl z-10">
        {/* Avatar Area with Minimalist Glass Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="absolute -inset-4 minimal-glass rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl" />
          <div className="size-40 md:size-56 rounded-full border border-white/10 p-3 transition-all duration-700 hover:border-white/30 minimal-glass overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 bg-black/20">
              <Image
                src="/vector-portrait-2d-transparent-final_1772626771039.png"
                alt="Gokul Kannan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Messaging */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <span className="text-[12px] uppercase font-bold tracking-[0.4em] text-white/30">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-minimal-gradient italic">
              GOKUL KANNAN
              <span className="text-accent opacity-20 not-italic">.</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-light text-white/40 max-w-2xl mx-auto leading-relaxed tracking-tight">
              Software Engineer crafting{" "}
              <span className="text-white italic">efficient</span> &{" "}
              <span className="text-white">elegant</span> digital ecosystems.
            </h2>
          </motion.div>
        </div>

        {/* Social Links - Glass Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/gokulkannanr" },
            { icon: Linkedin, href: "https://linkedin.com/in/gokulkannanr" },
            { icon: Twitter, href: "https://twitter.com/meIsGokul" },
            { icon: Mail, href: "mailto:gokulkannanr9@gmail.com" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              className="size-12 rounded-2xl minimal-glass flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-500 float-shadow"
            >
              <item.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/10">
          Explore
        </span>
        <div className="w-px h-12 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent opacity-40"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
