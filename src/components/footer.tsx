import React from "react";

import GithubIcon from "@/resources/links/github.svg";
import LinkedInIcon from "@/resources/links/linkedin.svg";
import InstagramIcon from "@/resources/links/instagram.svg";
import LeetCodeIcon from "@/resources/links/leetcode.svg";
import DiscordIcon from "@/resources/links/discord.svg";
import { Button } from "./ui/button";
import Link from "next/link";
import CopyMailButton from "./copy-mail-button";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" pt-20 pb-10 flex flex-col justify-around items-center gap-20  px-8 z-20 bg-[#0E0D0E]">
      <div className=" flex flex-col md:flex-row items-center justify-around w-full  container mx-auto">
        <div className=" space-y-2 flex flex-col items-center">
          <h3 className=" text-4xl xl:text-6xl">Have an idea?</h3>
          <p className=" text-2xl xl:text-4xl font-light text-right  text-foreground/70">
            Let&apos;s build it together!
          </p>
          <div className=" flex flex-col items-center gap-1">
            <p className=" text-right">Drop a mail to</p>
            <CopyMailButton />
          </div>
        </div>

        <div className=" mt-12 md:mt-0 flex md:gap-20 flex-col gap-12 md:flex-row">
          <div className=" mt-12 md:mt-0">
            <h3 className="  mb-6 text-xl text-center md:text-start">
              Projects
            </h3>
            <ul className=" flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start md:flex-col gap-x-6 gap-y-2 md:gap-2">
              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link
                    target="_blank"
                    href={"https://github.com/gokuls-codes"}
                  >
                    <span className=" text-base">On the GO</span>
                  </Link>
                </Button>
              </li>

              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link
                    target="_blank"
                    href={"https://expenses.gokulkannanr.in"}
                  >
                    <span className=" text-base">Expense Tracker</span>
                  </Link>
                </Button>
              </li>

              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link
                    target="_blank"
                    href={"https://expenses.gokulkannanr.in"}
                  >
                    <span className=" text-base">Point of sales</span>
                  </Link>
                </Button>
              </li>

              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link
                    target="_blank"
                    href={"https://expenses.gokulkannanr.in"}
                  >
                    <span className=" text-base">RDT using UDP</span>
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className=" ">
            <h3 className="  mb-6 text-xl text-center md:text-start">Links</h3>
            <ul className=" flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start md:flex-col gap-4 md:gap-2 ">
              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link
                    target="_blank"
                    href={"https://github.com/gokuls-codes"}
                  >
                    <GithubIcon />
                    <span className=" text-base">GitHub</span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link target="_blank" href={"mailto:gokulkannanr9@gmail.com"}>
                    <Mail size={16} className=" text-white" />
                    <span className=" text-base">Mail</span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/in/gokulkannanr/"}
                  >
                    <LinkedInIcon className=" size-10" />
                    <span className=" text-base">LinkedIn</span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link target="_blank" href={"https://discord.gg/hmP8cyMJ"}>
                    <DiscordIcon className=" size-10" />
                    <span className=" text-base">Discord</span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link
                    target="_blank"
                    href={"https://leetcode.com/u/gokulkannanr9/"}
                  >
                    <LeetCodeIcon className=" size-10" />
                    <span className=" text-base">LeetCode</span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground/70 px-0"
                >
                  <Link
                    target="_blank"
                    href={"https://www.instagram.com/me_is_gokul"}
                  >
                    <InstagramIcon className=" size-10" />
                    <span className=" text-base">Instagram</span>
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="  container mx-auto flex items-center justify-center gap-2">
        <span className=" text-lg">Designed and Developed by Gokul</span>
      </div>
    </footer>
  );
};

export default Footer;
