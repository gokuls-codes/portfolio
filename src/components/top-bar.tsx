import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <header className=" flex items-center justify-around border-b border-border h-20">
      <h3 className=" text-foreground text-2xl font-bold">Gokul Kannan</h3>
      <nav className=" flex gap-4">
        <Link href={"/resume.pdf"} target="_blank" className=" flex gap-1">
          <span>Resume</span>
          <ArrowUpRight size={12} />
        </Link>
      </nav>
    </header>
  );
};

export default TopBar;
