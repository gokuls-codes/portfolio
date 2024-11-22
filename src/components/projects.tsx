import React from "react";

const ProjectsSection = () => {
  return (
    <section
      className=" p-6 space-y-8 pt-24 -mt-16 min-h-screen "
      id="experience"
    >
      <h2 className="  text-4xl font-semibold text-center">Projects</h2>
      <div className=" w-full h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto p-4">
        <div className=" mx-auto project-card w-full aspect-[2/3] bg-card rounded-lg relative"></div>
        <div className=" mx-auto project-card w-full aspect-[2/3] bg-card rounded-lg relative"></div>
        <div className=" mx-auto project-card w-full aspect-[2/3] bg-card rounded-lg relative"></div>
        <div className=" mx-auto project-card w-full aspect-[2/3] bg-card rounded-lg relative"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;
