import React from "react";

import { SKILLS } from "@/constants/skills";
import Link from "next/link";

const SkillsSection = () => {
  return (
    <section className=" p-6 space-y-8 pt-24 -mt-16" id="skills">
      <h2 className="  text-4xl font-semibold text-center">Skills</h2>
      <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-fit mx-auto">
        {SKILLS.map((skill, index) => (
          <Link
            href={skill.url}
            target="_blank"
            className=" flex flex-col gap-2 items-center border border-border p-2 py-4 w-24 lg:w-32 shrink-0 rounded-md bg-gradient-to-br from-background to-foreground/5 hover:scale-110 hover:bg-foreground/5 transition-all duration-100"
            key={"skill" + index}
          >
            <skill.icon className="h-12 w-12" />
            <p className=" text-xs lg:text-sm">{skill.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
