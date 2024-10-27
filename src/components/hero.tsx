import Image from "next/image";
import React from "react";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className=" z-10 h-[calc(100vh-6rem)] bg-background/20  flex flex-col md:flex-row md:items-center md:pb-[30vh] md:justify-center pb-8 gap-6"
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
        <p className=" text-lg  md:text-2xl  text-foreground/70  ">
          Transforming ideas into products
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
