import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className=" h-[calc(100vh-6rem)] flex flex-col md:flex-row md:items-center md:pb-[30vh] md:justify-center pb-8 gap-6"
      id="hero"
    >
      <Image
        src={"/image.jpg"}
        width={600}
        height={900}
        alt="hero-image"
        className=" h-2/3  object-contain w-auto"
        priority
      />
      <div className=" flex flex-col gap-2 px-4 md:px-0">
        <p className=" text-2xl md:text-4xl font-thin">Hi, I&apos;m</p>
        <h1 className=" text-4xl md:text-6xl font-bold">Gokul Kannan</h1>
        <h2 className=" text-2xl  md:text-4xl ">Software Engineer</h2>
        <Button className=" w-fit gap-2 mt-4" size="lg">
          <span className=" text-sm md:text-lg">Contact</span>
          <Send size={18} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
