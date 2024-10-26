import React from "react";

import BlueStoneLogo from "@/resources/bluestone-white.png";
import Image from "next/image";
import { Separator } from "./ui/separator";

const ExperienceSection = () => {
  return (
    <section className=" p-6 space-y-8 h-screen pt-24 -mt-16" id="experience">
      <h2 className="  text-4xl font-semibold text-center">Experience</h2>
      <div className=" flex flex-col md:flex-row gap-4 justify-center ">
        <div className=" text-center  md:text-right space-y-2 relative ">
          <div className=" p-2 rounded-sm w-fit mx-auto md:ml-auto">
            <Image
              src={BlueStoneLogo}
              width={200}
              height={100}
              alt="Bluestone logo"
            />
          </div>
          <h4 className=" text-2xl font-semibold">Software Engineer</h4>
          <p>BlueStone Jewellery and Lifestyle</p>
          <p className=" text-lg text-foreground/40 ">June 2023 - Present</p>
          <div className=" absolute -inset-2 z-20 bg-black experience-left"></div>
        </div>
        <Separator orientation="vertical" className=" h-auto hidden md:block" />
        <Separator className=" md:hidden " />

        <div className=" max-w-md mx-auto lg:mx-0 lg:max-w-lg md:my-auto relative">
          <ul className="list-disc pl-4 md:text-lg">
            <li>
              Working on migrating the Billing software used in shops to React
              which will improve the user experience at stores.
            </li>
            <li>
              Worked on a microservice to get similar jewellery designs based on
              image uploaded
            </li>
            <li>
              Worked on a project that aims to improve customer experience in
              stores by using RFID for scanning products.
            </li>
          </ul>

          <div className=" absolute -inset-2 z-20 bg-black experience-right"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
