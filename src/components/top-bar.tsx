import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const TopBar = () => {
  return (
    <header className=" flex items-center justify-around h-24 sticky top-0 z-10">
      <Link href="/" className=" z-30">
        <h3 className=" text-foreground text-2xl font-bold">Gokul Kannan</h3>
      </Link>
      <nav className=" flex gap-4 z-30 items-center">
        <Button variant="link" asChild>
          <Link href="#experience">Experience</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#skills">Skills</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#projects">Projects</Link>
        </Button>
        <Button variant="ghost" asChild className=" gap-2">
          <Link href={"/resume.pdf"} target="_blank">
            <span>Resume</span>
            <ArrowUpRight size={12} />
          </Link>
        </Button>
      </nav>
      <div className=" h-full w-full absolute z-20 top-0 opacity-100 backdrop bg-foreground/5 backdrop-blur-2xl pointer-events-none"></div>
    </header>
  );
};

export default TopBar;
