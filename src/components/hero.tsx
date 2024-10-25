import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const HeroSection = () => {
  return (
    <div className=" h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center lg:pb-[30vh] justify-center gap-6">
      <Image
        src={"/image.jpg"}
        width={400}
        height={800}
        alt="hero-image"
        className=" h-2/3  object-contain  aspect-[2/3]"
      />
      <div className=" flex flex-col gap-2">
        <p className=" text-4xl font-thin">Hi, I&apos;m</p>
        <h1 className=" text-6xl font-bold">Gokul Kannan</h1>
        <h2 className=" text-4xl ">Software Developer</h2>
        <Button className=" w-fit gap-2 mt-4" size={"lg"}>
          <span className=" text-lg">Contact</span>
          <Send size={20} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
