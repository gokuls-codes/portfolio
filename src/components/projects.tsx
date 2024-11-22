import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Check, Link2, X } from "lucide-react";
import GithubIcon from "@/resources/links/github.svg";

const ProjectsSection = () => {
  return (
    <section
      className=" p-6 space-y-8 pt-24 -mt-16 min-h-screen "
      id="experience"
    >
      <h2 className="  text-4xl font-semibold text-center">Projects</h2>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[90vw] md:max-w-[90vw] lg:max-w-screen-lg mx-auto p-4">
        <div className=" mx-auto project-card w-full aspect-[4/5] bg-background rounded-lg relative p-4 flex flex-col gap-4 justify-between">
          <Image
            src={"/expenses-preview.png"}
            height={300}
            width={500}
            alt="expense tracker preview"
            className=" w-full object-contain rounded-sm"
          />
          <div className=" space-y-2">
            <h3 className=" text-2xl font-semibold ">Expense Tracker</h3>
            <p className=" text-sm text-foreground/70">July 2024</p>
            <p>
              A responsive web application where users can record their expenses
              and visually see their spending habits.
            </p>
          </div>

          <div className=" flex flex-wrap gap-2">
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs">
              Next JS
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs">
              Postgres
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs">
              tRRPC
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs">
              ShadCN
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs">
              Tailwind CSS
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className=" text-green-500 text-sm items-center flex gap-1">
              <Check size={14} />
              <span>Actively maintaining</span>
            </div>
            <div className=" flex gap-2">
              <Button asChild variant={"outline"} className=" p-1 size-12">
                <a
                  href={"https://github.com/gokuls-codes/expense-tracker-t3"}
                  target="_blank"
                  title="GitHub repository for the project"
                  aria-label="GitHub repository for the project"
                >
                  <GithubIcon className=" size-16" />
                </a>
              </Button>
              <Button asChild variant={"outline"} className=" p-1 size-12">
                <a
                  href={"https://expenses.gokulkannanr.in/"}
                  target="_blank"
                  title="Live URL of the project"
                  aria-label="Live URL of the project"
                >
                  <Link2 size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className=" mx-auto project-card w-full aspect-[4/5] bg-background rounded-lg relative"></div>
        <div className=" mx-auto project-card w-full aspect-[4/5] bg-background rounded-lg relative"></div>
        <div className=" mx-auto project-card w-full aspect-[4/5] bg-background rounded-lg relative p-4 flex flex-col gap-4 justify-between">
          <Image
            src={"/sudoku-solver.png"}
            height={300}
            width={500}
            alt="sudoku solver preview"
            className=" w-full object-contain rounded-sm"
          />
          <div className=" space-y-2">
            <h3 className=" text-2xl font-semibold ">Sudoku solver</h3>
            <p className=" text-sm text-foreground/70">July 2022</p>
            <p>
              A sudoku game, where users can import a sudoku puzzle and the code
              solve it using backtracking.
            </p>
          </div>

          <div className=" flex flex-wrap gap-2">
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs">
              Python
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs">
              Pygame
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs">
              Backtracking
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className=" text-red-500 text-sm items-center flex gap-1">
              <X size={14} />
              <span>Archived project</span>
            </div>
            <div className=" flex gap-2">
              <Button asChild variant={"outline"} className=" p-1 size-12">
                <a
                  href={"https://github.com/gokuls-codes/Sudoku-Solver-Pygame"}
                  target="_blank"
                  title="GitHub repository for the project"
                  aria-label="GitHub repository for the project"
                >
                  <GithubIcon className=" size-16" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
