import Image from "next/image";
import React from "react";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className=" z-10 h-[calc(100vh-6rem)] flex flex-col md:flex-row md:items-center md:pb-[30vh] md:justify-center pb-8 gap-6"
      id="hero"
    >
      <div className=" h-2/3 relative group overflow-hidden">
        <Link href={"/about"}>
          <Image
            src={"/image.jpg"}
            width={600}
            height={900}
            alt="gokul's photo"
            className=" h-full object-contain w-full  md:w-auto  group-hover:scale-105 transition-all duration-200 ease-in-out"
            priority
          />
        </Link>
        <div className=" hidden  absolute group-hover:backdrop-blur-[1px] bg-transparent group-hover:bg-gradient-to-bl from-transparent to-background z-10 inset-0 transition-all duration-200 ease-in-out xl:grid place-items-center">
          <Button
            variant={"link"}
            className=" text-foreground cursor-pointer text-xl"
            asChild
          >
            <Link
              href={"/about"}
              className=" opacity-0 group-hover:opacity-100"
            >
              More about me
            </Link>
          </Button>
        </div>
      </div>
      <div className=" flex flex-col gap-2 px-4 md:px-0">
        <p className=" text-2xl md:text-4xl font-thin">Hi, I&apos;m</p>
        <h1 className=" text-4xl md:text-6xl font-bold">Gokul Kannan</h1>
        <h2 className=" text-2xl  md:text-4xl ">Software Engineer</h2>
        <p className=" text-lg  md:text-2xl  text-foreground/70  ">
          Building Stuff, One Line at a Time.
        </p>
        <div className="   md:text-lg font-light flex gap-2 items-center text-foreground/70">
          <MapPin size={16} />
          <span>Bengaluru, India</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
