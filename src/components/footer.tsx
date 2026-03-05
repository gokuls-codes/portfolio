"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-32 px-6 max-w-7xl mx-auto space-y-32" id="contact">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[10rem] font-black tracking-[calc(-0.05em)] leading-none text-white/5"
        >
          CONTACT
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Let&apos;s build <br /> something{" "}
              <span className="text-white/20 italic">remarkable.</span>
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:gokulkannanr9@gmail.com"
                className="text-2xl md:text-3xl font-light text-white/40 hover:text-white transition-colors duration-500 underline underline-offset-8 decoration-white/10"
              >
                gokulkannanr9@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-12">
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
              {[
                { name: "GitHub", href: "https://github.com/gokulkannanr" },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/in/gokulkannanr",
                },
                { name: "Twitter", href: "https://twitter.com/meIsGokul" },
                {
                  name: "Instagram",
                  href: "https://instagram.com/gokul_kannan_r",
                },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="text-xs font-bold uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  {link.name}
                  <ArrowUpRight
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/10">
        <div className="flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()} GOKUL KANNAN</span>
          <span className="hidden md:block opacity-20">/</span>
          <span className="hidden md:block uppercase">BENGALURU, INDIA</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#hero" className="hover:text-white transition-colors">
            BACK TO TOP
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
