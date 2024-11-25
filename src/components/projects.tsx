import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, Check, Link2, X } from "lucide-react";
import GithubIcon from "@/resources/links/github.svg";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section
      className=" p-6 space-y-8 pt-24 -mt-16 min-h-screen "
      id="experience"
    >
      <h2 className="  text-4xl font-semibold text-center">Projects</h2>

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-[90vw] md:max-w-[90vw] lg:max-w-screen-lg xl:gap-8 mx-auto p-4 projects-container">
        <div className=" project-card grid grid-rows-subgrid row-span-5  w-full bg-background rounded-lg relative p-4">
          <Image
            src={"/on-the-go-preview.png"}
            height={300}
            width={500}
            alt="On the Go preview"
            className=" w-full object-contain aspect-video rounded-sm"
          />
          <div className=" space-y-2">
            <h3 className=" text-2xl font-semibold ">On the Go</h3>
            <p className=" text-sm text-foreground/70">November 2024</p>
          </div>
          <p>
            An automated CI/CD deployment service that triggers deployments when
            pushing code to GitHub with an easy to use admin panel.
          </p>

          <div className=" flex flex-wrap gap-2">
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Go
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Templ
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              HTMX
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Tailwind CSS
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              NGINX
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

        <div className=" project-card w-full bg-background rounded-lg relative p-4 grid grid-rows-subgrid row-span-5">
          {/* <div className=" group-hover:bg-background/20 z-20   group-hover:backdrop-blur-[1px] bg-transparent inset-0 absolute" /> */}
          <Image
            src={"/expenses-preview.png"}
            height={300}
            width={500}
            alt="expense tracker preview"
            className=" w-full object-contain aspect-video rounded-sm "
          />
          <div className=" space-y-2">
            <Link
              href={"/projects/expense-tracker"}
              className=" relative nav-link flex gap-1 items-start w-fit"
            >
              <h3 className=" text-2xl font-semibold ">Expense Tracker</h3>
              <ArrowUpRight size={16} className="" />
            </Link>
            <p className=" text-sm text-foreground/70">July 2024</p>
          </div>
          <p>
            A responsive web application where users can record their expenses
            and visually see their spending habits.
          </p>

          <div className=" flex flex-wrap gap-2">
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Next JS
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Postgres
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              tRRPC
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              ShadCN
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
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
        <div className=" mx-auto project-card w-full bg-background rounded-lg relative p-4 grid grid-rows-subgrid row-span-5 ">
          <Image
            src={"/sudoku-solver.png"}
            height={300}
            width={500}
            alt="sudoku solver preview"
            className=" w-full object-contain aspect-video rounded-sm "
          />
          <div className=" space-y-2">
            <h3 className=" text-2xl font-semibold ">Sudoku solver</h3>
            <p className=" text-sm text-foreground/70">May 2022</p>
          </div>
          <p>
            A sudoku game, where users can import a sudoku puzzle and the code
            solve it using backtracking.
          </p>

          <div className=" flex flex-wrap gap-2">
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Python
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Pygame
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
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
        <div className=" mx-auto project-card w-full bg-background rounded-lg relative p-4 grid grid-rows-subgrid row-span-5">
          <Image
            src={"/rdt-preview.png"}
            height={300}
            width={500}
            alt="Reliable data transfer using UDP preview"
            className=" w-full object-contain aspect-video rounded-sm "
          />
          <div className=" space-y-2">
            <h3 className=" text-2xl font-semibold ">
              Reliable data transfer using UDP
            </h3>
            <p className=" text-sm text-foreground/70">July 2022</p>
          </div>
          <p>
            A reliable data transfer protocol implemented using UDP sockets to
            facilitate faster throughput than TCP.
          </p>

          <div className=" flex flex-wrap gap-2">
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Computer Networks
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Python
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Linux
            </span>
            <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
              Virtual machines
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
                  href={"https://github.com/gokuls-codes/RDT-using-UDP"}
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
