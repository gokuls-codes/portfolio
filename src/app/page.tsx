import ExperienceSection from "@/components/experience";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";
import SkillsSection from "@/components/skills";
import TopBar from "@/components/top-bar";

export default function Home() {
  return (
    <div className=" container bg-background border border-border mx-auto ">
      <TopBar />
      <main className="">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
