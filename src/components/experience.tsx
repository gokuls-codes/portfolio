import React from "react";

import BlueStoneLogo from "@/resources/bluestone-white.png";
import Image from "next/image";
import { Separator } from "./ui/separator";

const ExperienceSection = () => {
  return (
    <section className=" p-6 space-y-8 h-screen pt-24 -mt-16" id="experience">
      <h2 className="  text-4xl font-semibold text-center">Experience</h2>
      <div className=" flex gap-4 justify-center experience-left">
        <div className=" text-right space-y-2">
          <div className=" p-2 rounded-sm w-fit ml-auto">
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
        </div>
        <Separator orientation="vertical" className=" h-auto" />
        <div className=" max-w-md lg:max-w-lg my-auto experience-right">
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
