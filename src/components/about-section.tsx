import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className=" p-6 space-y-8  " id="experience">
      <h1 className="  text-4xl font-semibold text-center">About Me</h1>
      <div className=" flex flex-col md:flex-row gap-4 justify-center items-center w-full mx-auto lg:max-w-screen-lg ">
        <Image
          src={"/picture-2.png"}
          height={600}
          width={900}
          alt="gokul's photo"
          priority
          className=" h-[50vh] w-auto "
        />
        <div className=" text-lg space-y-2">
          <p className="  leading-relaxed text-2xl font-semibold">
            Hi there! 👋 I&apos;m Gokul Kannan.
          </p>

          <p className="  leading-relaxed">
            I&apos;m a Software Engineer driven by an unending passion for
            building innovative digital solutions. Technology is more than just
            a profession for me—it&apos;s a playground where creativity meets
            code, and ideas transform into impactful products that can change
            the world.
          </p>

          <p className="  leading-relaxed">
            Whether it&apos;s crafting intuitive user experiences, designing
            robust backend architectures, or solving complex technical
            challenges, I thrive on turning ideas into reality. My enthusiasm
            isn&apos;t just about writing code; it&apos;s about creating
            something meaningful, something that has the potential to make a
            difference.
          </p>

          <p className="  leading-relaxed">
            My passion for technology ignited early when I was 12, captivated by
            the magic of Arduino and the incredible potential of robotics. That
            moment sparked something profound—a curiosity that transformed from
            wide-eyed wonder into a dedicated pursuit of creating and
            understanding technology.
          </p>

          <p className="  leading-relaxed">
            What began as childhood fascination quickly became a lifelong
            journey of learning and innovation. Each line of code I&apos;ve
            written since then has been a step towards mastering the art of
            building, problem-solving, and bringing imaginative ideas to life
            through technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
