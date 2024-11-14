import Image from "next/image";
import React from "react";

const ProjectsSection = () => {
  return (
    <section className=" p-6 space-y-8 pt-24 -mt-16 " id="projects">
      <h2 className="  text-4xl font-semibold text-center">Projects</h2>
      <div className=" grid w-full gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className=" w-full border border-border rounded-md px-4 py-8 space-y-4 bg-gradient-to-br from-background to-foreground/5 hover:scale-[102%] cursor-pointer hover:bg-foreground/5 transition-all duration-100">
          <Image
            src={"/expense-tracker.png"}
            width={400}
            height={400}
            alt="expense tracker icon"
            className=" w-3/4 h-auto mx-auto"
          />
          <h3 className=" text-center text-3xl font-semibold">
            Expense Tracker
          </h3>
          <p className=" text-center text-lg">
            A simple expense tracker to manage your expenses.
          </p>
        </div>

        <div className=" w-full border border-border rounded-md px-4 py-8 space-y-4 bg-gradient-to-br from-background to-foreground/5 hover:scale-[102%] cursor-pointer hover:bg-foreground/5 transition-all duration-100">
          <Image
            src={"/gms.png"}
            width={400}
            height={400}
            alt="expense tracker icon"
            className=" w-3/4 h-auto mx-auto"
          />
          <h3 className=" text-center text-3xl font-semibold">
            Grievance Management System
          </h3>
          <p className=" text-center text-lg">
            A web application to manage grievances in an organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
