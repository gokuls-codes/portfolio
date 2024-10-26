import React from "react";

import BlueStoneLogo from "@/resources/bluestone-white.png";
import SmasungResearchLogo from "@/resources/samsung-research.png";

import Image from "next/image";
import { Separator } from "./ui/separator";

const ExperienceSection = () => {
  return (
    <section className=" p-6 space-y-8 pt-24 -mt-16 " id="experience">
      <h2 className="  text-4xl font-semibold text-center">Experience</h2>
      <div className=" flex flex-col md:flex-row gap-4 justify-center ">
        <div className=" text-center md:w-[250px]  md:text-right space-y-2 relative experience ">
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
          <p>Bengaluru, India</p>
          <p className=" text-lg text-foreground/40 ">June 2023 - Present</p>
          <div className=" absolute -inset-2 z-20 bg-background experience-left hidden md:block "></div>
        </div>
        <Separator
          orientation="vertical"
          className=" h-auto hidden md:block exp-separator"
        />
        <Separator className=" md:hidden " />

        <div className=" max-w-md mx-auto lg:mx-0 lg:max-w-lg md:my-auto relative experience">
          <ul className="list-disc pl-4 text-sm md:text-base">
            <li>
              Rewriting the billing software used in stores in React which will
              improve the user experience significantly, thereby increase the
              sales.
            </li>
            <li>
              Contributed to a microservice to get similar jewellery designs
              based on image uploaded
            </li>
            <li>
              Worked on a project that aims to improve customer experience in
              stores by using RFID for scanning products.
            </li>
          </ul>

          <div className=" absolute -inset-2 z-20 bg-black experience-right hidden md:block "></div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row gap-4 justify-center ">
        <div className=" text-center  md:w-[250px]  md:text-right space-y-2 relative experience ">
          <div className=" p-2 rounded-sm w-fit mx-auto md:ml-auto">
            <Image
              src={SmasungResearchLogo}
              width={200}
              height={100}
              alt="Bluestone logo"
            />
          </div>
          <h4 className=" text-2xl font-semibold">Summer Intern</h4>
          <p>Samsung R&D Institute</p>
          <p>Noida, India</p>
          <p className=" text-lg text-foreground/40 ">June 2022 - July 2022</p>
          <div className=" absolute -inset-2 z-20 bg-background experience-left hidden md:block "></div>
        </div>
        <Separator
          orientation="vertical"
          className=" h-auto hidden md:block exp-separator"
        />
        <Separator className=" md:hidden " />

        <div className=" max-w-md mx-auto lg:mx-0 lg:max-w-lg md:my-auto relative experience">
          <ul className="list-disc pl-4 text-sm md:text-base">
            <li>
              Created a server-client in python using socket programming to
              transfer ML models from server to client which makes possible for
              machine learning on the edge.
            </li>
            <li>
              Solved a packet loss issue where some packets were lost during the
              communication between the client and the server.
            </li>
          </ul>

          <div className=" absolute -inset-2 z-20 bg-black experience-right hidden md:block "></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
