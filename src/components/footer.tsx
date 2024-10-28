import React from "react";

import GithubIcon from "@/resources/links/github.svg";
import LinkedInIcon from "@/resources/links/linkedin.svg";
import InstagramIcon from "@/resources/links/instagram.svg";
import LeetCodeIcon from "@/resources/links/leetcode.svg";
import DiscordIcon from "@/resources/links/discord.svg";
import { Button } from "./ui/button";
import { Copyright, Mail } from "lucide-react";
import Link from "next/link";
import CopyMailButton from "./copy-mail-button";

const Footer = () => {
  return (
    <footer className=" pt-20 pb-10 flex flex-col justify-around items-center gap-20  bg-foreground/5 px-8">
      <div className=" flex flex-col md:flex-row items-center justify-around w-full">
        <div className=" space-y-2 flex flex-col items-end">
          <h3 className=" text-4xl xl:text-6xl">Have an idea?</h3>
          <p className=" text-2xl xl:text-4xl font-light text-right  text-foreground/70">
            Let&apos;s build it together!
          </p>
          <div className=" flex flex-col items-center gap-1">
            <p className=" text-right">Drop a mail to</p>
            <CopyMailButton />
          </div>
        </div>

        <div className=" mt-12 md:mt-0">
          <h3 className=" text-center mb-6 text-xl">Links</h3>
          <ul className=" flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start md:flex-col gap-2">
            <li>
              <Button asChild variant={"link"}>
                <Link target="_blank" href={"https://github.com/gokuls-codes"}>
                  <GithubIcon />
                  <span>GitHub</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"link"}>
                <Link target="_blank" href={"mailto:gokulkannanr9@gmail.com"}>
                  <Mail size={16} />
                  <span>Mail</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"link"}>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/gokulkannanr/"}
                >
                  <LinkedInIcon className=" size-10" />
                  <span>LinkedIn</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"link"}>
                <Link target="_blank" href={"https://discord.gg/hmP8cyMJ"}>
                  <DiscordIcon className=" size-10" />
                  <span>Discord</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"link"}>
                <Link
                  target="_blank"
                  href={"https://leetcode.com/u/gokulkannanr9/"}
                >
                  <LeetCodeIcon className=" size-10" />
                  <span>LeetCode</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"link"}>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/me_is_gokul"}
                >
                  <InstagramIcon className=" size-10" />
                  <span>Instagram</span>
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex items-center justify-center gap-2">
        <Copyright />
        <span>Gokul Kannan</span>
      </div>
    </footer>
  );
};

export default Footer;
