import PointerGlow from "@/components/pointer-glow";
import TopBar from "@/components/top-bar";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import GithubIcon from "@/resources/links/github.svg";
import Image from "next/image";
import Footer from "@/components/footer";

const ExpenseTrackerPage = () => {
  return (
    <>
      <PointerGlow />
      <div className=" relative z-10">
        <TopBar />
        <main className=" container mx-auto px-4 py-8 space-y-8 mb-8 ">
          <div className=" flex flex-col md:flex-row gap-4 justify-between">
            <div className="   space-y-4">
              <h1 className=" text-4xl md:text-6xl font-extralight">
                Expense Tracker
              </h1>
              <div className=" flex flex-wrap gap-2">
                <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
                  Next JS
                </span>
                <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
                  PostgreSQL
                </span>
                <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
                  tRRPC
                </span>
                <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
                  Prisma
                </span>
                <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
                  ShadCN
                </span>
                <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
                  Tailwind CSS
                </span>
                <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
                  Auth JS
                </span>
                <span className=" border text-foreground/70 p-2 rounded-sm text-xs h-fit">
                  Recharts
                </span>
              </div>
            </div>

            <div className=" space-y-4 w-full md:w-[240px] ">
              <Button asChild className=" w-full" size={"lg"}>
                <a
                  href={"https://expenses.gokulkannanr.in/"}
                  target="_blank"
                  title="Live URL of the project"
                  aria-label="Live URL of the project"
                >
                  <Link />
                  <span>Visit live site</span>
                </a>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className=" w-full"
                size={"lg"}
              >
                <a
                  href={"https://github.com/gokuls-codes/expense-tracker-t3"}
                  target="_blank"
                  title="GitHub repository for the project"
                  aria-label="GitHub repository for the project"
                >
                  <GithubIcon />
                  <span>Visit Github Repo</span>
                </a>
              </Button>
            </div>
          </div>

          <Image
            src={"/expenses-preview.png"}
            width={1920}
            height={1080}
            alt="Expense Tracker"
            className=" w-full h-auto project-image"
          />
          <p className=" text-lg md:text-2xl text-foreground/70 project-section">
            A responsive web application to help users manage their finances by
            recording their expenses and visualize their spending habits. It
            simplifies budgeting and provides insights to make smarter financial
            decisions.
          </p>

          <div className=" space-y-2 project-section">
            <h2 className=" text-2xl md:text-4xl font-semibold">Features</h2>
            <ul className=" text-lg md:text-2xl list-disc pl-5  text-foreground/70 font-light ">
              <li>
                <span className=" font-medium">
                  Comprehensive Expense Management:
                </span>{" "}
                Categorize transactions, record expenses, and monitor financial
                trends with ease.
              </li>
              <li>
                <span className=" font-medium">Discord OAuth Integration:</span>{" "}
                Secure and seamless user authentication for a smooth login
                experience.
              </li>
              <li>
                <span className=" font-medium">Visual Spending Analytics:</span>{" "}
                Interactive charts to help users understand and analyze their
                financial patterns.
              </li>
              <li>
                <span className=" font-medium">Responsive Design:</span>{" "}
                Optimized for web with fast load times and compatibility across
                all devices.
              </li>

              <li>
                <span className=" font-medium">Theme Customization:</span>{" "}
                Supports dark mode and light mode for a personalized user
                experience.
              </li>
            </ul>
          </div>

          <div className=" space-y-2  project-section">
            <h2 className=" text-2xl md:text-4xl font-semibold">Tech Stack</h2>
            <ul className=" text-lg md:text-2xl list-disc pl-5  text-foreground/70 font-light ">
              <li>
                <span className=" font-medium">Database:</span> PostgreSQL
                (Supabase)
              </li>
              <li>
                <span className=" font-medium">Backend:</span> Next JS, tRPC,
                Prisma, Auth JS
              </li>
              <li>
                <span className=" font-medium">Frontend:</span> React JS,
                Tailwind CSS, Shadcn UI
              </li>
              <li>
                <span className=" font-medium">VCS and Deployment:</span> Git,
                GitHub, Vercel
              </li>
            </ul>
          </div>

          <div className=" space-y-2  project-section">
            <h2 className=" text-2xl md:text-4xl font-semibold">Learnings</h2>
            <ul className=" text-lg md:text-2xl list-disc pl-5  text-foreground/70 font-light ">
              <li>
                Gained hands-on experience with advanced features like
                Server-Side Rendering (SSR) and Static Site Generation (SSG)
              </li>
              <li>
                Learned to effectively integrate these tools to create a robust
                and type-safe backend connected to a PostgreSQL database.
              </li>
              <li>
                Implemented secure user authentication using Discord OAuth,
                improving my understanding of OAuth flows.
              </li>
              <li>
                Enhanced my design skills by creating a responsive and visually
                appealing interface using Tailwind CSS, including light and dark
                themes.
              </li>
              <li>
                Mastered the use of ReCharts to build interactive and insightful
                spending analytics for users.
              </li>
            </ul>
          </div>

          <div className=" space-y-2  project-section">
            <Image
              src={"/expense-tracker-2.png"}
              width={1920}
              height={1080}
              alt="Expense Tracker"
              className=" w-full h-auto project-image"
            />
            <p className="text-lg md:text-2xl   text-foreground/70 font-light text-center">
              Customizable bar chart page
            </p>
          </div>
          {/* <div className=" h-screen w-full"></div> */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ExpenseTrackerPage;
