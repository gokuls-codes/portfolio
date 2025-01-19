import React from "react";

import BlueStoneLogo from "@/resources/bluestone-white.png";
import SmasungResearchLogo from "@/resources/samsung-white.png";
import IITHLogo from "@/resources/IITH.png";

import Image from "next/image";
import { Separator } from "./ui/separator";

const ExperienceSection = () => {
  return (
    <section className=" p-6 space-y-8 pt-24 -mt-16 " id="experience">
      <h2 className="  text-4xl font-semibold text-center">
        Experience & Education
      </h2>
      <div className=" flex flex-col md:flex-row gap-4 justify-center ">
        <div className=" text-center md:w-[250px]  md:text-right space-y-2 relative experience ">
          <div className=" p-2 rounded-sm w-fit mx-auto md:mr-0">
            <Image
              src={BlueStoneLogo}
              width={200}
              height={100}
              alt="Bluestone logo"
            />
          </div>
          <h3 className=" text-2xl font-semibold">Software Engineer</h3>
          <p>BlueStone Jewellery and Lifestyle</p>
          <p>Bengaluru, India</p>
          <p className=" text-lg text-foreground/70 ">June 2023 - Present</p>
        </div>
        <Separator
          orientation="vertical"
          className=" h-auto hidden md:block exp-separator"
        />
        <Separator className=" md:hidden exp-separator  " />

        <div className=" max-w-md mx-auto lg:mx-0 lg:max-w-lg md:my-auto relative experience">
          <ul className="list-disc pl-4 text-sm md:text-base">
            <li>
              Rewrote the Point of Sales application used in stores to React
              which will improved the user experience significantly, thereby
              increase the sales.
            </li>
            <li>
              Deployed the Point of Sales application to AWS. Identified and
              optimized the deployment process which reduced the deployment
              costs by 90% and load times by 90%.
            </li>
            <li>
              Worked on a project that aims to improve customer experience in
              stores by using RFID for scanning products.
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row gap-4 justify-center ">
        <div className=" text-center  md:w-[250px]  md:text-right space-y-2 relative experience ">
          <div className=" p-2 rounded-sm w-fit mx-auto md:mr-0">
            <Image
              src={SmasungResearchLogo}
              width={200}
              height={100}
              alt="Bluestone logo"
            />
          </div>
          <h3 className=" text-2xl font-semibold">Summer Intern</h3>
          <p>Samsung R&D Institute</p>
          <p>Noida, India</p>
          <p className=" text-lg text-foreground/70 ">June 2022 - July 2022</p>
        </div>
        <Separator
          orientation="vertical"
          className=" h-auto hidden md:block exp-separator"
        />
        <Separator className=" md:hidden exp-separator" />

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
        </div>
      </div>

      <div className=" flex flex-col md:flex-row gap-4 justify-center ">
        <div className=" text-center md:w-[250px]  md:text-right space-y-2 relative experience ">
          <div className=" p-2 rounded-sm w-fit mx-auto md:mr-0">
            <Image
              src={IITHLogo}
              width={200}
              height={100}
              alt="IIT Hyderabad logo"
            />
          </div>
          <h3 className=" text-2xl font-semibold">B.Tech (CSE)</h3>
          <p>Indian Institute of Technology</p>
          <p>Hyderabad, India</p>
          <p className=" text-lg text-foreground/70 ">July 2019 - May 2023</p>
        </div>
        <Separator
          orientation="vertical"
          className=" h-auto hidden md:block exp-separator"
        />
        <Separator className=" md:hidden exp-separator" />

        <div className=" max-w-md mx-auto lg:mx-0 lg:max-w-lg md:my-auto relative experience">
          <ul className="list-disc pl-4 text-sm md:text-base">
            <li>
              Completed courses on Data Structures and Algorithms, Operating
              Systems, Computer Networks, Database Management Systems, Software
              Engieering, Machine Learing, Reinforcement Learning, Quantum
              Computing.
            </li>
            <li>
              Worked on a project to reduce the bias in the predictions of
              machine learning models due to the bias in the training data using
              various techniques.
            </li>
            <li>
              Extracuricullarly I was part of the Robotics Club, Photography
              Club and worked as a placement coordinator.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
