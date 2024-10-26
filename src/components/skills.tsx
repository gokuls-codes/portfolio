import React from "react";

import { LANGUAGES, FRAMEWORKS, OTHERS, SKILLS } from "@/constants/skills";
import Link from "next/link";

const SkillsSection = () => {
  return (
    <section className=" p-6 space-y-8 pt-24 -mt-16 min-h-screen  " id="skills">
      <h2 className="  text-4xl font-semibold text-center">Skills</h2>
      <div className=" grid grid-cols-2 mx-auto w-fit gap-4 skills">
        {SKILLS.map((skill, id) => (
          <div
            className=" p-4 border border-border rounded-md bg-gradient-to-br from-background to-foreground/5 hover:bg-foreground/5 transition-all duration-100"
            key={"skill" + id}
          >
            <p className=" text-base md:text-lg text-center">{skill}</p>
          </div>
        ))}
      </div>
      <div className=" space-y-4 skills">
        <h4 className="  font-light text-lg text-center ">Languages</h4>
        <div className=" flex items-center justify-center gap-2 flex-wrap mx-auto">
          {LANGUAGES.map((skill, index) => (
            <Link
              href={skill.url}
              target="_blank"
              className=" flex gap-2 items-center border border-border px-4 py-2 shrink-0 rounded-md bg-gradient-to-br from-background to-foreground/5 hover:scale-110 hover:bg-foreground/5 transition-all duration-100"
              key={"languages" + index}
            >
              <skill.icon className="h-4 w-4 text-yellow-500" />
              <p className=" text-xs lg:text-sm">{skill.name}</p>
            </Link>
          ))}
        </div>

        <h4 className="  font-light text-lg text-center">Frameworks</h4>
        <div className=" flex items-center justify-center gap-2 flex-wrap mx-auto ">
          {FRAMEWORKS.map((skill, index) => (
            <Link
              href={skill.url}
              target="_blank"
              className=" flex gap-2 items-center border border-border px-4 py-2 shrink-0 rounded-md bg-gradient-to-br from-background to-foreground/5 hover:scale-110 hover:bg-foreground/5 transition-all duration-100"
              key={"frameworks" + index}
            >
              <skill.icon className="h-4 w-4" />
              <p className=" text-xs lg:text-sm">{skill.name}</p>
            </Link>
          ))}
        </div>

        <h4 className="  font-light text-lg text-center">Tools</h4>
        <div className=" flex items-center justify-center gap-2 flex-wrap mx-auto ">
          {OTHERS.map((skill, index) => (
            <Link
              href={skill.url}
              target="_blank"
              className=" flex gap-2 items-center border border-border px-4 py-2 shrink-0 rounded-md bg-gradient-to-br from-background to-foreground/5 hover:scale-110 hover:bg-foreground/5 transition-all duration-100"
              key={"tools" + index}
            >
              <skill.icon className="h-4 w-4" />
              <p className=" text-xs lg:text-sm">{skill.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
