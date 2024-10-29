import ExperienceSection from "@/components/experience";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";
import SkillsSection from "@/components/skills";
import TopBar from "@/components/top-bar";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className=" container bg-background mx-auto ">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
