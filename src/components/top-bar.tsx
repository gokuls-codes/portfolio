import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const TopBar = () => {
  return (
    <header className="  h-24 sticky top-0 z-10">
      <div className=" container mx-auto flex items-center justify-between px-4 md:justify-between h-full">
        <Link href="/" className=" z-30">
          <Image src={"/topbar-logo.png"} width={72} height={72} alt="GK" />
          {/* <h3 className=" text-foreground text-2xl font-bold">{"<GK />"}</h3> */}
        </Link>
        <nav className=" gap-8 z-30 items-center hidden md:flex">
          <Link
            className=" text-foreground nav-link relative md:text-lg"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className=" text-foreground nav-link relative md:text-lg"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className=" text-foreground nav-link relative md:text-lg"
            href="#skills"
          >
            Skills
          </Link>
          <a
            className=" text-foreground nav-link relative md:text-lg flex gap-2"
            href={"/resume.pdf"}
            target="_blank"
          >
            <span>Resume</span>
            <ArrowUpRight size={12} />
          </a>
        </nav>
        <div className="md:hidden z-30">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground z-30"
              >
                <Menu className="h-8 w-8" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[200px] sm:w-[300px] backdrop-blur-sm bg-background/5 "
            >
              <SheetTitle>Navigation</SheetTitle>
              <nav className=" flex flex-col gap-8 z-30 items-start py-8 h-full">
                <Link
                  className=" text-foreground nav-link relative"
                  href="#experience"
                >
                  Experience
                </Link>
                <Link
                  className=" text-foreground nav-link relative"
                  href="#projects"
                >
                  Projects
                </Link>
                <Link
                  className=" text-foreground nav-link relative"
                  href="#skills"
                >
                  Skills
                </Link>
                <a
                  className=" text-foreground nav-link relative flex gap-2 mt-auto"
                  href={"/resume.pdf"}
                  target="_blank"
                >
                  <span>Resume</span>
                  <ArrowUpRight size={12} />
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className=" h-full w-full absolute z-20 top-0 opacity-100 backdrop bg-background/20 backdrop-blur-2xl pointer-events-none"></div>
    </header>
  );
};

export default TopBar;
