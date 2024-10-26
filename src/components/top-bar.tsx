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

const TopBar = () => {
  return (
    <header className=" flex items-center justify-between px-4 md:justify-around h-24 sticky top-0 z-10">
      <Link href="/" className=" z-30">
        <h3 className=" text-foreground text-2xl font-bold">{"<GK />"}</h3>
      </Link>
      <nav className=" gap-4 z-30 items-center hidden md:flex">
        <Button variant="link" asChild>
          <Link href="#experience">Experience</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#skills">Skills</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#projects">Projects</Link>
        </Button>
        <Button variant="ghost" asChild className=" gap-2 ml-auto">
          <Link href={"/resume.pdf"} target="_blank">
            <span>Resume</span>
            <ArrowUpRight size={12} />
          </Link>
        </Button>
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
            <SheetTitle>Menu</SheetTitle>
            <nav className=" flex flex-col gap-4 z-30 items-center py-6 h-full">
              <Button variant="link" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="#experience">Experience</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="#skills">Skills</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="#projects">Projects</Link>
              </Button>
              <Button variant="ghost" asChild className=" gap-2 mt-auto">
                <Link href={"/resume.pdf"} target="_blank">
                  <span>Resume</span>
                  <ArrowUpRight size={12} />
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className=" h-full w-full absolute z-20 top-0 opacity-100 backdrop bg-foreground/5 backdrop-blur-2xl pointer-events-none"></div>
    </header>
  );
};

export default TopBar;
